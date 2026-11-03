// Level generator: builds random levels of a given kind, solves each one, keeps only the good ones.
// Run: node tools/gen.js [seconds] [kinds...]   → writes tools/out/pool-<kind>.json
// Pick the final levels with tools/curate.js.
//
// A level is kept only if: it can be won, the shortest solution really uses the kind's idea,
// every box is needed (remove any one box and the level can't be won), and — for medium and
// hard levels — every floor square is needed (walling it off changes or breaks the solution).
const path = require('path');
const fs = require('fs');
const os = require('os');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const { analyze } = require('./analyze.js');

// kids: number of room-boxes (or [min, max]); chain: rooms sit inside each other instead of side by side;
// extraNest: chance of one more small room inside the first room-box (more depth everywhere)
const KINDS = {
  push:     { root: [6, 8], boxes: [2, 3], density: [0.15, 0.4], pgoal: 0.25, need: {} },
  doorway:  { root: [6, 7], kids: 1, boxes: [0, 2], density: [0.15, 0.35], kidGoals: true, need: { doorway: true } },
  // park a box inside a room to clear the way, then take it back out
  pocket:   { root: [6, 8], kids: 1, boxes: [1, 2], density: [0.15, 0.35], wallKids: true, kidDoors: 2, extraNest: 0.25, need: { pocket: true } },
  carry:    { root: [6, 8], kids: 1, boxes: [1, 2], density: [0.1, 0.3], kidBoxGoals: true, roomGoal: true, extraNest: 0.25, need: { carryMove: true } },
  unpack:   { root: [6, 8], kids: 1, boxes: [1, 2], density: [0.1, 0.3], kidBoxes: true, extraNest: 0.25, need: { unpack: true } },
  nest2:    { root: [6, 8], kids: 2, boxes: [0, 1], density: [0.1, 0.3], kidGoals: true, nestGoal: true, need: { nested: true, depth: 2 } },
  roomgoal: { root: [6, 8], kids: [1, 2], boxes: [0, 1], density: [0.1, 0.3], kidGoals: true, roomGoal: true, extraNest: 0.4, need: { roomGoal: true } },
  deep3:    { root: [7, 8], kids: 3, chain: true, boxes: [0, 1], density: [0.05, 0.25], deepGoal: true, need: { depth: 3 } },
  self:     { root: [7, 7], self: true, kids: [0, 1], boxes: [1, 2], density: [0.1, 0.3], pgoal: 0.5, need: { exits: 1 } },
  holes:    { root: [7, 8], kids: 1, boxes: [1, 2], density: [0.05, 0.25], holes: [0, 1], holeLine: true, kidBoxes: 0.5, extraNest: 0.4, need: { drops: 1, enters: 1 } },
  crumble:  { root: [7, 8], kids: 1, boxes: [0, 2], density: [0.05, 0.25], cracks: [1, 4], crackLine: true, kidGoals: true, extraNest: 0.4, need: { broken: 2, enters: 1 } },
  colors:   { root: [6, 8], kids: 2, colorBoxes: [2, 2], boxes: [0, 1], density: [0.1, 0.25], wallKids: true, kidDoors: 3, need: { colors: 2 } },
  remote:   { root: [7, 8], kids: 1, gates: true, plates: [1, 1], plateInKid: 1, boxes: [1, 2], density: [0.05, 0.2], extraNest: 0.4, need: { remote: true } },
  oneway:   { root: [6, 8], kids: [1, 2], doorArrows: true, boxes: [0, 2], density: [0.1, 0.3], kidGoals: true, extraNest: 0.4, need: { doorArrow: true, enters: 1 } },
  // the daily level: anything goes, always hard
  daily:    { root: [7, 8], kids: [1, 2], chain: 0.4, self: 0.2, boxes: [1, 2], density: [0.1, 0.25], kidGoals: true, kidBoxGoals: true, newMix: true, need: { enters: 1 } }
};

const PALETTES = ['teal', 'violet', 'pink'];
const KEYS = ['A', 'B', 'C'];

/* ---------- random ---------- */

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rint = (rng, r) => (Array.isArray(r) ? r[0] + Math.floor(rng() * (r[1] - r[0] + 1)) : r);

/* ---------- building ---------- */

// A room is { g: map chars, t: terrain chars, palette }.
function makeRoom(rng, n, density, openSides) {
  const g = [], t = [];
  for (let y = 0; y < n; y++) {
    g.push([]); t.push([]);
    for (let x = 0; x < n; x++) { g[y].push(x === 0 || y === 0 || x === n - 1 || y === n - 1 ? '#' : '.'); t[y].push('.'); }
  }
  for (let y = 1; y < n - 1; y++)
    for (let x = 1; x < n - 1; x++) if (rng() < density) g[y][x] = '#';
  const m = Math.floor(n / 2);
  const doors = [[m, 0], [n - 1, m], [m, n - 1], [0, m]];
  for (const s of openSides) {
    const [x, y] = doors[s];
    g[y][x] = '.';
    const ix = Math.min(Math.max(x, 1), n - 2), iy = Math.min(Math.max(y, 1), n - 2);
    g[iy][ix] = '.'; // the cell just inside the door
  }
  keepBiggestArea(g);
  return { g, t, n, doors: openSides.map(s => doors[s]) };
}

function keepBiggestArea(g) {
  const n = g.length, seen = new Set();
  let best = null;
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    if (g[y][x] !== '.' || seen.has(y * n + x)) continue;
    const comp = [], q = [[x, y]];
    seen.add(y * n + x);
    while (q.length) {
      const [cx, cy] = q.pop(); comp.push([cx, cy]);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = cx + dx, ny = cy + dy;
        if (nx < 0 || ny < 0 || nx >= n || ny >= n || g[ny][nx] !== '.' || seen.has(ny * n + nx)) continue;
        seen.add(ny * n + nx); q.push([nx, ny]);
      }
    }
    if (!best || comp.length > best.length) best = comp;
  }
  if (!best) return;
  const keep = new Set(best.map(([x, y]) => y * n + x));
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (g[y][x] === '.' && !keep.has(y * n + x)) g[y][x] = '#';
}

// free interior floor cells with no terrain, optionally on one side of a dividing line
function freeCells(room, side) {
  const { g, t } = room, n = g.length, out = [];
  for (let y = 1; y < n - 1; y++) for (let x = 1; x < n - 1; x++) {
    if (g[y][x] !== '.' || t[y][x] !== '.') continue;
    if (side && !side(x, y)) continue;
    out.push([x, y]);
  }
  return out;
}

function pick(rng, room, ch, side) {
  const cells = freeCells(room, side);
  if (!cells.length) return false;
  const [x, y] = cells[Math.floor(rng() * cells.length)];
  room.g[y][x] = ch;
  return true;
}

function pickTerrain(rng, room, ch) {
  const cells = freeCells(room);
  if (!cells.length) return false;
  const [x, y] = cells[Math.floor(rng() * cells.length)];
  room.t[y][x] = ch;
  return true;
}

function addIce(rng, room, patches) {
  const n = room.g.length;
  for (let p = 0; p < patches; p++) {
    const w = rint(rng, [1, 4]), h = rint(rng, [1, 3]);
    const x0 = rint(rng, [1, n - 2]), y0 = rint(rng, [1, n - 2]);
    for (let y = y0; y < Math.min(n - 1, y0 + h); y++)
      for (let x = x0; x < Math.min(n - 1, x0 + w); x++) if (room.g[y][x] === '.') room.t[y][x] = '~';
  }
}

// A line across the room: a wall with optional gates. Returns which side a cell is on.
function addLine(rng, room, gates, gapTerrain) {
  const { g, t } = room, n = g.length;
  const horiz = rng() < 0.5;
  const k = rint(rng, [2, n - 3]);
  const line = [];
  for (let i = 1; i < n - 1; i++) {
    const [x, y] = horiz ? [i, k] : [k, i];
    g[y][x] = '#'; t[y][x] = '.';
    line.push([x, y]);
  }
  for (let j = 0; j < gates; j++) {
    const [x, y] = line[1 + Math.floor(rng() * (line.length - 2))];
    g[y][x] = '.'; t[y][x] = gapTerrain || '|';
  }
  return { horiz, near: (x, y) => (horiz ? y < k : x < k), far: (x, y) => (horiz ? y > k : x > k) };
}

function build(kind, rng) {
  const K = KINDS[kind];
  const rooms = {};
  const self = K.self === true || (typeof K.self === 'number' && rng() < K.self);
  const rootKey = self ? 'V' : 'R';
  const sides = (min) => { let s = [0, 1, 2, 3].filter(() => rng() < 0.5); while (s.length < (min || 1)) s = [...new Set(s.concat(Math.floor(rng() * 4)))]; return s; };
  const density = rng() * (K.density[1] - K.density[0]) + K.density[0];
  const root = makeRoom(rng, self ? 7 : rint(rng, K.root), density, self ? sides() : []);
  root.palette = 'navy';
  rooms[rootKey] = root;

  // which extra rules this level uses
  let useIce = false, useArrows = false, useGates = !!K.gates, useHoles = !!K.holes, useCracks = !!K.cracks;
  if (K.newMix) {
    useIce = rng() < 0.3; useArrows = rng() < 0.3; useGates = rng() < 0.25; useHoles = rng() < 0.3; useCracks = rng() < 0.3;
  }
  let line = null;
  if (useGates) line = addLine(rng, root, rint(rng, [1, 2]));
  else if (K.holeLine) line = addLine(rng, root, rint(rng, [1, 2]), 'O');
  else if (K.crackLine) line = addLine(rng, root, rint(rng, [1, 2]), 'x');
  else if (K.wallLine) line = addLine(rng, root, 0);

  // room-boxes: side by side in the main room, or each inside the one before (a chain)
  const nk = rint(rng, K.kids || 0);
  const chain = K.chain === true || (typeof K.chain === 'number' && rng() < K.chain);
  const kidKeys = [];
  for (let i = 0; i < nk; i++) {
    const key = KEYS[i];
    const big = chain ? i < nk - 1 : rng() < 0.4;
    // a tunnel box needs two facing doors
    const s = K.wallLine && i === 0 ? (line.horiz ? [0, 2] : [1, 3]) : sides(K.kidDoors || (chain ? 2 : 1));
    const r = makeRoom(rng, big ? 7 : 5, rng() * 0.2, s);
    r.palette = K.colorBoxes ? ['teal', 'violet'][i % 2] : PALETTES[i % 3];
    rooms[key] = r;
    kidKeys.push(key);
  }
  if (self) for (const k of kidKeys) if (rooms[k].palette === 'violet') rooms[k].palette = 'pink';
  // one more small room inside the first room-box
  if (!chain && kidKeys.length && kidKeys.length < 3 && rng() < (K.extraNest || 0)) {
    const key = KEYS[kidKeys.length];
    rooms[key] = makeRoom(rng, 5, rng() * 0.15, sides());
    rooms[key].palette = PALETTES[kidKeys.length % 3];
    rooms[key].inside = kidKeys[0];
    kidKeys.push(key);
  }
  const anyKid = () => rooms[kidKeys[Math.floor(rng() * kidKeys.length)]];
  const deepest = () => rooms[kidKeys[kidKeys.length - 1]];

  if (useIce) addIce(rng, root, rint(rng, [1, 2]));
  if (useArrows) for (let i = 0; i < rint(rng, [1, 3]); i++) pickTerrain(rng, root, '^>v<'[Math.floor(rng() * 4)]);
  if (useHoles) {
    const nh = rint(rng, K.holes || [1, 1]);
    for (let i = 0; i < nh; i++) pickTerrain(rng, kidKeys.length && rng() < 0.6 ? anyKid() : root, 'O');
  }
  if (useCracks) {
    const nc = rint(rng, K.cracks || [2, 5]);
    for (let i = 0; i < nc; i++) pickTerrain(rng, kidKeys.length && rng() < 0.5 ? anyKid() : root, 'x');
  }
  // one-way arrows on room-box doors (pointing in or out)
  if (K.doorArrows) {
    for (const k of kidKeys) {
      const r = rooms[k], n = r.g.length;
      for (const [x, y] of r.doors) {
        if (rng() < 0.6) {
          const out = rng() < 0.5;
          const dir = y === 0 ? 0 : x === n - 1 ? 1 : y === n - 1 ? 2 : 3; // direction that leaves the room
          r.t[y][x] = '^>v<'[out ? dir : (dir + 2) % 4];
        }
      }
    }
    for (let i = 0; i < rint(rng, K.arrows || [0, 1]); i++) pickTerrain(rng, root, '^>v<'[Math.floor(rng() * 4)]);
  }
  if (useGates) {
    const np = rint(rng, K.plates || [1, 1]);
    for (let i = 0; i < np; i++) {
      const inKid = kidKeys.length && rng() < (K.plateInKid || 0);
      const room = inKid ? anyKid() : root;
      const cells = freeCells(room, inKid ? null : line.near);
      if (!cells.length) return null;
      const [x, y] = cells[Math.floor(rng() * cells.length)];
      room.t[y][x] = 'o';
    }
  }
  const near = line ? line.near : null, far = line ? line.far : null;

  // place the room-boxes: in the main room, inside the previous room (chain), or inside room A (extra nest)
  if (!pick(rng, root, 'P', near)) return null;
  kidKeys.forEach((k, i) => {
    if (K.wallLine && i === 0) {
      const spots = [];
      for (let y = 1; y < root.g.length - 1; y++) for (let x = 1; x < root.g.length - 1; x++)
        if (root.g[y][x] === '#' && !near(x, y) && !far(x, y) && root.t[y][x] === '.') spots.push([x, y]);
      const [x, y] = spots[Math.floor(rng() * spots.length)];
      root.g[y][x] = k;
      return;
    }
    const holder = chain && i > 0 ? rooms[kidKeys[i - 1]] : rooms[k].inside ? rooms[rooms[k].inside] : root;
    if (K.wallKids && holder === root) {
      const by = (x, y) => root.g[y - 1][x] === '#' || root.g[y + 1][x] === '#' || root.g[y][x - 1] === '#' || root.g[y][x + 1] === '#';
      if (!pick(rng, holder, k, (x, y) => by(x, y) && (!near || near(x, y)))) throw new Error('no room');
      // open the door that faces away from the wall, so a box pushed toward the wall goes in
      if (K.colorBoxes) {
        const n = root.g.length;
        for (let y = 1; y < n - 1; y++) for (let x = 1; x < n - 1; x++) {
          if (root.g[y][x] !== k) continue;
          const back = [[0, -1], [1, 0], [0, 1], [-1, 0]].findIndex(([dx, dy]) => root.g[y + dy][x + dx] === '#');
          const r = rooms[k], rn = r.g.length, m = Math.floor(rn / 2);
          const [dxp, dyp] = [[m, 0], [rn - 1, m], [m, rn - 1], [0, m]][(back + 2) % 4];
          r.g[dyp][dxp] = '.';
          r.g[Math.min(Math.max(dyp, 1), rn - 2)][Math.min(Math.max(dxp, 1), rn - 2)] = '.';
        }
      }
      return;
    }
    if (!pick(rng, holder, k, holder === root ? near : null)) throw new Error('no room');
  });
  if (self && !pick(rng, root, rootKey)) return null;
  const nb = rint(rng, K.boxes);
  for (let i = 0; i < nb; i++) {
    const room = K.kidBoxes && kidKeys.length && rng() < (K.kidBoxes === true ? 1 : K.kidBoxes) ? anyKid() : root;
    if (!pick(rng, room, 'b', room === root ? near : null)) return null;
  }
  const nc = rint(rng, K.colorBoxes || 0);
  for (let i = 0; i < nc; i++) if (!pick(rng, root, i % 2 ? 'u' : 't', near)) return null;

  // goals
  if (K.nestGoal && kidKeys.length > 1 && !pick(rng, rooms[kidKeys[kidKeys.length - 1]], '_')) return null;
  let boxGoals = useGates ? Math.max(0, nb - 1) : nb;
  if (useHoles) boxGoals = Math.max(0, boxGoals - 1);
  if (K.kidBoxGoals && kidKeys.length && boxGoals > 0) {
    const inKid = Math.max(1, Math.min(boxGoals, rint(rng, [1, boxGoals])));
    for (let i = 0; i < inKid; i++) if (!pick(rng, anyKid(), '_')) return null;
    boxGoals -= inKid;
  }
  for (let i = 0; i < boxGoals; i++) if (!pick(rng, root, '_', far)) return null;
  if (K.roomGoal && kidKeys.length && !pick(rng, root, '_', far)) return null;
  if (K.farGoal && far) {
    if (!pick(rng, root, '=', far)) return null;
  } else if (K.deepGoal && kidKeys.length) {
    if (!pick(rng, deepest(), '=')) return null;
  } else if (useGates) {
    if (!pick(rng, root, '=', far)) return null;
  } else if (K.kidGoals && kidKeys.length && rng() < 0.75) {
    if (!pick(rng, anyKid(), '=')) return null;
  } else if (rng() < (K.pgoal || 0.3)) {
    if (!pick(rng, root, '=')) return null;
  }
  // a room-box can also have to sit on a goal
  if (!K.roomGoal && kidKeys.length && rng() < 0.25) if (!pick(rng, root, '_')) return null;
  if (!nb && !nc && !kidKeys.length) return null;

  return toDef(rootKey, rooms);
}

function toDef(rootKey, rooms) {
  const def = { root: rootKey, rooms: {} };
  for (const k of Object.keys(rooms)) {
    const r = rooms[k];
    def.rooms[k] = { palette: r.palette, map: r.g.map(row => row.join('')) };
    const terr = r.t.map(row => row.join(''));
    if (terr.some(row => /[^.]/.test(row))) def.rooms[k].terrain = terr;
  }
  return def;
}

/* ---------- checks ---------- */

function meets(kind, a) {
  const need = KINDS[kind].need;
  if (need.enters && a.enters < need.enters) return false;
  if (need.exits && a.exits < need.exits) return false;
  if (need.nested && !a.nested) return false;
  if (need.depth && a.maxDepth < need.depth) return false;
  if (need.doorway && !a.doorway) return false;
  if (need.pocket && !a.pocket) return false;
  if (need.carryMove && !(a.carryMove && a.carried)) return false;
  if (need.unpack && !(a.unpacked || a.pistons)) return false;
  if (need.roomGoal && !a.roomGoal) return false;
  if (need.drops && a.drops < need.drops) return false;
  if (need.broken && a.broken < need.broken) return false;
  if (need.colors && a.colorBoxes < need.colors) return false;
  if (need.remote && !a.remoteGate) return false;
  if (need.doorArrow && !a.doorArrowUsed) return false;
  // nothing decorative: every box moves, every room-box moves or gets entered
  for (const o of a.init.objects) {
    if (o.kind === 'box' && !a.movedIds.has(o.id)) return false;
    // a room-box is used if it moves, you walk into it, or something gets put inside it
    if (o.kind === 'room' && o.ref !== a.level.root && !a.movedIds.has(o.id) && !a.enteredRooms.has(o.ref) && !a.receivedRooms.has(o.ref)) return false;
  }
  if (a.pushes < 2) return false;
  if (a.moves > 140) return false;
  return true;
}

// Every box must be needed: take any one box away and the level must become unwinnable.
function boxesNeeded(def, cap) {
  for (const k of Object.keys(def.rooms)) {
    const map = def.rooms[k].map;
    for (let y = 0; y < map.length; y++) for (let x = 0; x < map.length; x++) {
      // coloured boxes carry their own goal (they must reach their room), so only plain boxes are checked
      if (map[y][x] !== 'b') continue;
      const copy = JSON.parse(JSON.stringify(def));
      copy.rooms[k].map[y] = map[y].slice(0, x) + '.' + map[y].slice(x + 1);
      const a = analyze(copy, cap);
      if (a && !a.capped) return false;
    }
  }
  return true;
}

function score(a) {
  return a.pushes * 1.0 + a.pushRuns * 1.5 + Math.log2(a.seenAtWin) * 2.5 + a.deadRatio * 12 +
    (a.enters + a.exits) * 0.8 + a.slides * 0.6 + a.maxDepth * 2 + a.drops * 2 + (a.unique ? 3 : 0);
}

// Floor that nothing can ever reach becomes wall, and a plain main room shrinks to what is used.
function trim(def, cap) {
  const Engine = require('../www/js/engine.js');
  const a = analyze(def, cap);
  if (!a || a.capped) return def;
  const { state, level } = Engine.parseLevel(def);
  const used = new Set();
  const seen = new Set([Engine.key(state)]);
  const q = [state];
  for (let i = 0; i < q.length; i++) {
    for (const o of q[i].objects) used.add(o.room + ':' + o.x + ',' + o.y);
    for (let d = 0; d < 4; d++) {
      const r = Engine.move(q[i], level, d);
      if (!r) continue;
      const k = Engine.key(r.state);
      if (!seen.has(k)) { seen.add(k); q.push(r.state); }
    }
  }
  const rooms = {};
  for (const k of Object.keys(def.rooms)) {
    const src = def.rooms[k];
    const g = src.map.map(row => row.split(''));
    const t = (src.terrain || src.map.map(row => '.'.repeat(row.length))).map(row => row.split(''));
    for (let y = 0; y < g.length; y++) for (let x = 0; x < g.length; x++) {
      // holes and crumbling floor are never stood on before they matter, so keep them
      if (g[y][x] === '.' && !used.has(k + ':' + x + ',' + y) && t[y][x] !== 'O' && t[y][x] !== 'x') { g[y][x] = '#'; t[y][x] = '.'; }
    }
    rooms[k] = { palette: src.palette, g, t };
  }
  shrinkRoot(def.root, rooms);
  return toDef(def.root, rooms);
}

function shrinkRoot(rootKey, rooms) {
  const R = rooms[rootKey];
  const isBox = Object.values(rooms).some(r => r.g.some(row => row.indexOf(rootKey) !== -1));
  if (isBox) return;
  const m = R.g, n = m.length;
  let x0 = n, y0 = n, x1 = -1, y1 = -1;
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (m[y][x] !== '#') { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  x0--; y0--; x1++; y1++;
  const s = Math.max(x1 - x0 + 1, y1 - y0 + 1, 5);
  while (x1 - x0 + 1 < s) { if (x0 > 0 && (x1 >= n - 1 || (x1 - x0) % 2)) x0--; else x1++; }
  while (y1 - y0 + 1 < s) { if (y0 > 0 && (y1 >= n - 1 || (y1 - y0) % 2)) y0--; else y1++; }
  const inside = (x, y) => y >= 0 && x >= 0 && y < n && x < n;
  const g = [], t = [];
  for (let y = y0; y <= y1; y++) {
    g.push([]); t.push([]);
    for (let x = x0; x <= x1; x++) { g[g.length - 1].push(inside(x, y) ? m[y][x] : '#'); t[t.length - 1].push(inside(x, y) ? R.t[y][x] : '.'); }
  }
  R.g = g; R.t = t;
}

// Tighten: wall off any floor square the level doesn't need (same idea, no easier).
function tighten(kind, def, cap) {
  let cur = def, base = analyze(cur, cap);
  if (!base) return def;
  let baseScore = score(base);
  for (const k of Object.keys(cur.rooms)) {
    const n = cur.rooms[k].map.length;
    for (let y = 1; y < n - 1; y++) for (let x = 1; x < n - 1; x++) {
      if (cur.rooms[k].map[y][x] !== '.') continue;
      const tc = cur.rooms[k].terrain ? cur.rooms[k].terrain[y][x] : '.';
      if (tc !== '.' && tc !== '~') continue;
      const copy = JSON.parse(JSON.stringify(cur));
      const row = copy.rooms[k].map[y];
      copy.rooms[k].map[y] = row.slice(0, x) + '#' + row.slice(x + 1);
      if (copy.rooms[k].terrain) copy.rooms[k].terrain[y] = copy.rooms[k].terrain[y].slice(0, x) + '.' + copy.rooms[k].terrain[y].slice(x + 1);
      const a = analyze(copy, cap);
      if (!a || a.capped || !meets(kind, a)) continue;
      const s = score(a);
      if (s < baseScore * 0.97) continue;
      cur = copy; base = a; baseScore = s;
    }
  }
  return cur;
}

function metrics(b) {
  return {
    moves: b.moves, pushes: b.pushes, pushRuns: b.pushRuns, states: b.states, seenAtWin: b.seenAtWin,
    deadRatio: +b.deadRatio.toFixed(3), enters: b.enters, exits: b.exits, slides: b.slides, maxDepth: b.maxDepth,
    drops: b.drops, broken: b.broken, unique: b.unique, freedom: +b.freedom.toFixed(2), score: +score(b).toFixed(2)
  };
}

/* ---------- worker / main ---------- */

if (!isMainThread) {
  const { kind, seed, until, cap } = workerData;
  const rng = mulberry32(seed);
  let tries = 0;
  while (Date.now() < until) {
    tries++;
    let def0;
    try { def0 = build(kind, rng); } catch (e) { continue; }
    if (!def0) continue;
    let a;
    try { a = analyze(def0, cap); } catch (e) { continue; }
    if (!a || a.capped || !meets(kind, a)) continue;
    let def = trim(def0, cap);
    let b = analyze(def, cap);
    if (!b || !meets(kind, b)) continue;
    // medium and hard levels: no square to spare
    if (score(b) >= 40 && b.states < 80000) {
      def = trim(tighten(kind, def, cap), cap);
      b = analyze(def, cap);
      if (!b || !meets(kind, b)) continue;
    }
    if (!boxesNeeded(def, cap)) continue;
    parentPort.postMessage({ kind, def: Object.assign(def, { sol: b.sol }), m: metrics(b) });
  }
  parentPort.postMessage({ done: true, tries });
} else if (require.main === module) {
  const secs = +process.argv[2] || 60;
  const kinds = process.argv.slice(3).length ? process.argv.slice(3) : Object.keys(KINDS);
  const outDir = path.join(__dirname, 'out2');
  fs.mkdirSync(outDir, { recursive: true });
  const pools = {};
  for (const k of new Set(kinds)) {
    const f = path.join(outDir, 'pool-' + k + '.json');
    pools[k] = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : [];
  }
  const sigs = new Set();
  for (const k of Object.keys(pools)) for (const c of pools[k]) sigs.add(JSON.stringify(c.def.rooms));
  const nWorkers = Math.max(os.cpus().length - 1, kinds.length);
  const until = Date.now() + secs * 1000;
  let alive = 0, tries = 0;
  const added = {};
  for (let i = 0; i < nWorkers; i++) {
    const kind = kinds[i % kinds.length];
    alive++;
    const w = new Worker(__filename, { workerData: { kind, seed: (Date.now() ^ (i * 7919)) >>> 0, until, cap: 200000 } });
    w.on('message', (msg) => {
      if (msg.done) { tries += msg.tries; return; }
      const sig = JSON.stringify(msg.def.rooms);
      if (sigs.has(sig)) return;
      sigs.add(sig);
      pools[msg.kind].push({ def: msg.def, m: msg.m });
      added[msg.kind] = (added[msg.kind] || 0) + 1;
      // save as we go, so a long run can be stopped early
      if (added[msg.kind] % 5 === 0) fs.writeFileSync(path.join(outDir, 'pool-' + msg.kind + '.json'), JSON.stringify(pools[msg.kind]));
    });
    w.on('error', (e) => console.error(kind, e.message));
    w.on('exit', () => {
      if (--alive) return;
      for (const k of Object.keys(pools)) fs.writeFileSync(path.join(outDir, 'pool-' + k + '.json'), JSON.stringify(pools[k]));
      console.log('tries', tries);
      for (const k of Object.keys(pools)) {
        const s = pools[k].map(c => c.m.score).sort((a, b) => a - b);
        const uq = pools[k].filter(c => c.m.unique).length;
        const q = (p) => s.length ? s[Math.floor(p * (s.length - 1))] : '-';
        console.log(k.padEnd(9), 'pool', String(pools[k].length).padStart(5), '+' + (added[k] || 0), ' unique', uq, ' score min/med/p90/max', q(0), q(0.5), q(0.9), q(1));
      }
    });
  }
}

module.exports = { KINDS, build, meets, score, trim, tighten, boxesNeeded, mulberry32 };
