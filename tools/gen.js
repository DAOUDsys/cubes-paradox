// Level generator: builds random levels of a given kind, solves each one, keeps the good ones.
// Run: node tools/gen.js [seconds] [kinds...]   → writes tools/out/pool-<kind>.json
// Pick the final levels with tools/curate.js.
const path = require('path');
const fs = require('fs');
const os = require('os');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const { analyze } = require('./analyze.js');

const KINDS = {
  // plain pushing
  push: { root: [6, 8], boxes: [1, 3], density: [0.15, 0.4], pgoal: 0.25, need: {} },
  // walk into a room-box; goal waits inside
  enter: { root: [6, 8], kids: [[5, 7]], boxes: [0, 2], density: [0.15, 0.35], kidGoals: true, need: { enters: 1 } },
  // push plain boxes into a room-box
  carry: { root: [6, 8], kids: [[5, 7]], boxes: [1, 2], density: [0.15, 0.35], kidBoxGoals: true, need: { carried: true } },
  // boxes start inside a room-box and have to come out
  unpack: { root: [6, 8], kids: [[5, 7]], boxes: [1, 2], density: [0.15, 0.35], kidBoxes: true, need: { carried: true } },
  // a room-box has to end up inside another room-box
  nest: { root: [6, 8], kids: [[5, 7], [5, 7]], boxes: [0, 1], density: [0.15, 0.3], kidGoals: true, nestGoal: true, need: { nested: true } },
  // the root room contains itself
  loop: { root: [7, 7], self: true, boxes: [1, 2], density: [0.1, 0.3], pgoal: 0.5, need: { exits: 1 } },
  // a mix of everything
  mix: { root: [7, 8], kids: [[5, 7], [5, 7]], self: 0.5, boxes: [1, 2], density: [0.15, 0.3], kidGoals: true, kidBoxGoals: true, need: { enters: 1 } },

  // ice: things slide until they hit something
  ice: { root: [6, 8], boxes: [1, 3], density: [0.1, 0.3], pgoal: 0.3, ice: [1, 3], need: { slides: 1 } },
  iceroom: { root: [6, 8], kids: [[5, 7]], boxes: [1, 2], density: [0.1, 0.25], ice: [1, 3], kidIce: 0.5, kidGoals: true, kidBoxGoals: true, need: { slides: 1, enters: 1 } },
  // plates and gates: a box on every plate opens the gates
  plate: { root: [7, 8], boxes: [1, 2], density: [0.05, 0.2], gates: true, plates: [1, 2], need: { gate: true } },
  plateroom: { root: [7, 8], kids: [[5, 7]], boxes: [1, 2], density: [0.05, 0.2], gates: true, plates: [1, 1], plateInKid: 0.6, need: { gate: true, enters: 1 } },
  // one-way arrows
  arrow: { root: [6, 8], boxes: [1, 3], density: [0.1, 0.3], pgoal: 0.4, arrows: [2, 5], need: { arrow: true } },
  arrowroom: { root: [6, 8], kids: [[5, 7]], boxes: [1, 2], density: [0.1, 0.25], arrows: [2, 5], kidArrows: 0.5, kidGoals: true, need: { arrow: true, enters: 1 } },
  // rooms plus one or two of the new mechanics
  mixnew: { root: [7, 8], kids: [[5, 7], [5, 7]], self: 0.3, boxes: [1, 2], density: [0.1, 0.25], kidGoals: true, kidBoxGoals: true, newMix: true, need: { enters: 1, anyNew: true } },
  // pairs of ideas, one world each
  icegate: { root: [7, 8], boxes: [1, 2], density: [0.05, 0.2], gates: true, plates: [1, 2], ice: [1, 3], need: { gate: true, slides: 1 } },
  arrowice: { root: [6, 8], boxes: [1, 3], density: [0.1, 0.25], ice: [1, 3], arrows: [2, 5], need: { slides: 1, arrow: true } },
  loopnew: { root: [7, 7], self: true, boxes: [1, 2], density: [0.1, 0.25], pgoal: 0.5, newMix: true, need: { exits: 1, anyNew: true } },
  nestnew: { root: [6, 8], kids: [[5, 7], [5, 7]], boxes: [0, 1], density: [0.1, 0.25], kidGoals: true, nestGoal: true, newMix: true, need: { nested: true, anyNew: true } },
  // bigger rooms, more boxes
  bigmix: { root: [8, 9], kids: [[5, 7], [5, 7]], self: 0.3, boxes: [1, 2], density: [0.2, 0.35], kidGoals: true, kidBoxGoals: true, newMix: true, need: { enters: 1, anyNew: true } }
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

const rint = (rng, [a, b]) => a + Math.floor(rng() * (b - a + 1));

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
  // keep only the biggest connected floor area
  const seen = new Set();
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
  const keep = new Set(best.map(([x, y]) => y * n + x));
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (g[y][x] === '.' && !keep.has(y * n + x)) g[y][x] = '#';
  return { g, t };
}

// free interior floor cells with no terrain, optionally on one side of a gate line
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

function addArrows(rng, room, count) {
  for (let i = 0; i < count; i++) pickTerrain(rng, room, '^>v<'[Math.floor(rng() * 4)]);
}

// A wall line across the room with one or two gates in it. Returns which side a cell is on.
function addGateLine(rng, room) {
  const { g, t } = room, n = g.length;
  const horiz = rng() < 0.5;
  const k = rint(rng, [2, n - 3]);
  const line = [];
  for (let i = 1; i < n - 1; i++) {
    const [x, y] = horiz ? [i, k] : [k, i];
    g[y][x] = '#'; t[y][x] = '.';
    line.push([x, y]);
  }
  const ng = rint(rng, [1, 2]);
  for (let j = 0; j < ng; j++) {
    const [x, y] = line[1 + Math.floor(rng() * (line.length - 2))];
    g[y][x] = '.'; t[y][x] = '|';
  }
  return {
    near: (x, y) => (horiz ? y < k : x < k),
    far: (x, y) => (horiz ? y > k : x > k)
  };
}

function build(kind, rng) {
  const K = KINDS[kind];
  const rooms = {};
  const self = K.self === true || (typeof K.self === 'number' && rng() < K.self);
  const rootKey = self ? 'V' : 'R';
  const rn = rint(rng, K.root);
  const sides = () => { const s = [0, 1, 2, 3].filter(() => rng() < 0.5); return s.length ? s : [Math.floor(rng() * 4)]; };
  const density = rng() * (K.density[1] - K.density[0]) + K.density[0];
  const root = makeRoom(rng, self ? 7 : rn, density, self ? sides() : []);
  root.palette = self ? 'violet' : 'navy';
  rooms[rootKey] = root;

  // which new mechanics this level uses
  let useIce = !!K.ice, useArrows = !!K.arrows, useGates = !!K.gates;
  if (K.newMix) {
    useIce = rng() < 0.5; useArrows = rng() < 0.5; useGates = rng() < 0.35;
    if (!useIce && !useArrows && !useGates) useIce = true;
  }
  const gl = useGates ? addGateLine(rng, root) : null;

  const kids = (K.kids || []).slice(0, kind === 'mix' || kind === 'mixnew' || kind === 'bigmix' ? rint(rng, [1, 2]) : 2);
  const kidKeys = [];
  kids.forEach((range, i) => {
    const key = KEYS[i];
    const n = rng() < 0.6 ? range[0] : range[1];
    const r = makeRoom(rng, n, rng() * 0.25, sides());
    r.palette = PALETTES[i % 3];
    rooms[key] = r;
    kidKeys.push(key);
  });
  if (self) for (const k of kidKeys) if (rooms[k].palette === 'violet') rooms[k].palette = 'pink';
  const anyKid = () => rooms[kidKeys[Math.floor(rng() * kidKeys.length)]];

  if (useIce) {
    addIce(rng, root, rint(rng, K.ice || [1, 2]));
    if (kidKeys.length && rng() < (K.kidIce || 0.3)) addIce(rng, anyKid(), 1);
  }
  if (useArrows) {
    addArrows(rng, root, rint(rng, K.arrows || [2, 4]));
    if (kidKeys.length && rng() < (K.kidArrows || 0.3)) addArrows(rng, anyKid(), rint(rng, [1, 2]));
  }
  if (useGates) {
    const np = rint(rng, K.plates || [1, 1]);
    for (let i = 0; i < np; i++) {
      const inKid = kidKeys.length && rng() < (K.plateInKid || 0);
      const room = inKid ? anyKid() : root;
      const cells = freeCells(room, inKid ? null : gl.near);
      if (!cells.length) return null;
      const [x, y] = cells[Math.floor(rng() * cells.length)];
      room.t[y][x] = 'o';
    }
  }
  const near = gl ? gl.near : null, far = gl ? gl.far : null;

  // objects in the root (on the near side of a gate line)
  if (!pick(rng, root, 'P', near)) return null;
  for (const k of kidKeys) if (!pick(rng, root, k, near)) return null;
  if (self && !pick(rng, root, rootKey)) return null;
  const nb = rint(rng, K.boxes);
  for (let i = 0; i < nb; i++) {
    const room = K.kidBoxes && kidKeys.length ? anyKid() : root;
    if (!pick(rng, room, 'b', room === root ? near : null)) return null;
  }
  // the last room-box is the one the others go into
  if (K.nestGoal && kidKeys.length > 1 && !pick(rng, rooms[kidKeys[kidKeys.length - 1]], '_')) return null;

  // goals (behind the gate when there is one)
  let boxGoals = useGates ? Math.max(0, nb - 1) : nb;
  if (K.kidBoxGoals && kidKeys.length && boxGoals > 0) {
    const inKid = Math.max(1, Math.min(boxGoals, rint(rng, [1, boxGoals])));
    for (let i = 0; i < inKid; i++) if (!pick(rng, anyKid(), '_')) return null;
    boxGoals -= inKid;
  }
  for (let i = 0; i < boxGoals; i++) if (!pick(rng, root, '_', far)) return null;
  if (useGates) {
    if (!pick(rng, root, '=', far)) return null;
  } else if (K.kidGoals && kidKeys.length && rng() < 0.75) {
    if (!pick(rng, anyKid(), '=')) return null;
  } else if (rng() < (K.pgoal || 0.3)) {
    if (!pick(rng, root, '=')) return null;
  }
  // a room-box can also have to sit on a goal
  if (kidKeys.length && rng() < 0.3) if (!pick(rng, root, '_')) return null;
  if (!nb && !kidKeys.length) return null;

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
  if (need.carried && !a.carried) return false;
  if (need.nested && !a.nested) return false;
  if (need.slides && a.slides < need.slides) return false;
  if (need.gate && !a.gateUsed) return false;
  if (need.arrow && !a.arrowUsed) return false;
  if (need.anyNew && !(a.slides || a.gateUsed || a.arrowUsed)) return false;
  // nothing decorative: every box moves, every room-box moves or gets entered
  for (const o of a.init.objects) {
    if (o.kind === 'box' && !a.movedIds.has(o.id)) return false;
    if (o.kind === 'room' && o.ref !== a.level.root && !a.movedIds.has(o.id) && !a.enteredRooms.has(o.ref)) return false;
  }
  if (a.pushes < 2) return false;
  if (a.moves > 140) return false;
  return true;
}

// Floor that nothing can ever reach becomes wall, so the level shows only what matters.
function trim(def, cap) {
  const a = analyze(def, cap);
  if (!a || a.capped) return def;
  const Engine = require('../www/js/engine.js');
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
      if (g[y][x] === '.' && !used.has(k + ':' + x + ',' + y)) { g[y][x] = '#'; t[y][x] = '.'; }
    }
    rooms[k] = { palette: src.palette, g, t };
  }
  // shrink a plain root room to the part that is used (kept square)
  const R = rooms[def.root];
  const isBox = Object.values(rooms).some(r => r.g.some(row => row.indexOf(def.root) !== -1));
  if (!isBox) {
    const m = R.g, n = m.length;
    let x0 = n, y0 = n, x1 = -1, y1 = -1;
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (m[y][x] !== '#') { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    x0--; y0--; x1++; y1++;
    const s = Math.max(x1 - x0 + 1, y1 - y0 + 1, 5);
    // grow the short side, staying inside the old map
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
  return toDef(def.root, rooms);
}

function score(a) {
  return a.pushes * 1.0 + a.pushRuns * 1.5 + Math.log2(a.seenAtWin) * 2.5 + a.deadRatio * 12 + (a.enters + a.exits) * 0.8 + a.slides * 0.6;
}

/* ---------- worker / main ---------- */

if (!isMainThread) {
  const { kind, seed, until, cap } = workerData;
  const rng = mulberry32(seed);
  let tries = 0;
  while (Date.now() < until) {
    tries++;
    const def0 = build(kind, rng);
    if (!def0) continue;
    let a;
    try { a = analyze(def0, cap); } catch (e) { continue; }
    if (!a || a.capped || !meets(kind, a)) continue;
    const def = trim(def0, cap);
    const b = analyze(def, cap);
    if (!b || !meets(kind, b)) continue;
    parentPort.postMessage({
      kind, def: Object.assign(def, { sol: b.sol }),
      m: { moves: b.moves, pushes: b.pushes, pushRuns: b.pushRuns, states: b.states, seenAtWin: b.seenAtWin, deadRatio: +b.deadRatio.toFixed(3), enters: b.enters, exits: b.exits, slides: b.slides, score: +score(b).toFixed(2) }
    });
  }
  parentPort.postMessage({ done: true, tries });
} else {
  const secs = +process.argv[2] || 60;
  const kinds = process.argv.slice(3).length ? process.argv.slice(3) : Object.keys(KINDS);
  const outDir = path.join(__dirname, 'out');
  fs.mkdirSync(outDir, { recursive: true });
  const pools = {};
  for (const k of kinds) {
    const f = path.join(outDir, 'pool-' + k + '.json');
    pools[k] = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : [];
  }
  const sigs = new Set();
  for (const k of kinds) for (const c of pools[k]) sigs.add(JSON.stringify(c.def.rooms));
  const nWorkers = Math.max(1, os.cpus().length - 1);
  const until = Date.now() + secs * 1000;
  let alive = 0, tries = 0;
  const added = {};
  for (let i = 0; i < nWorkers; i++) {
    const kind = kinds[i % kinds.length];
    alive++;
    const w = new Worker(__filename, { workerData: { kind, seed: (Date.now() ^ (i * 7919)) >>> 0, until, cap: 250000 } });
    w.on('message', (msg) => {
      if (msg.done) { tries += msg.tries; return; }
      const sig = JSON.stringify(msg.def.rooms);
      if (sigs.has(sig)) return;
      sigs.add(sig);
      pools[msg.kind].push({ def: msg.def, m: msg.m });
      added[msg.kind] = (added[msg.kind] || 0) + 1;
    });
    w.on('error', (e) => console.error(kind, e));
    w.on('exit', () => {
      if (--alive) return;
      for (const k of kinds) fs.writeFileSync(path.join(outDir, 'pool-' + k + '.json'), JSON.stringify(pools[k]));
      console.log('tries', tries);
      for (const k of kinds) {
        const s = pools[k].map(c => c.m.score).sort((a, b) => a - b);
        const q = (p) => s.length ? s[Math.floor(p * (s.length - 1))] : '-';
        console.log(k.padEnd(9), 'pool', String(pools[k].length).padStart(5), '+' + (added[k] || 0), ' score min/med/p90/max', q(0), q(0.5), q(0.9), q(1));
      }
    });
  }
}
