/* Cubes Paradox game engine: rooms inside boxes, push / enter / exit rules.
   Works in the browser (window.Engine) and in Node (module.exports). */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Engine = factory();
})(this, function () {
  'use strict';

  // 0 up, 1 right, 2 down, 3 left
  const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const MAXD = 60;
  // coloured boxes: map letter → the room palette they must end up inside
  const BOX_COLORS = { t: 'teal', u: 'violet' };
  // twin boxes: map digit → the room they are a second box of
  const TWINS = { 1: 'A', 2: 'B', 3: 'C' };

  const opp = (d) => (d + 2) % 4;
  // crossing the edge of a mirror room swaps left and right; up and down stay
  const mirror = (d) => (d & 1 ? opp(d) : d);

  /* ---------- level parsing ---------- */

  function parseLevel(def) {
    const rooms = {};
    const objects = [];
    const plates = [];
    const pads = {};
    let nextId = 1, hasWind = false;
    for (const key of Object.keys(def.rooms)) {
      const src = def.rooms[key];
      const h = src.map.length;
      const w = src.map[0].length;
      if (w !== h) throw new Error('Room ' + key + ' must be square');
      const wall = [];
      const goals = [];
      // optional terrain layer, same size as the map:
      // ~ ice, o plate, | gate, ^ > v < one-way arrows, O hole, x crumbling floor,
      // U R D L wind, 1..4 jump pads (each digit on exactly two cells of the level)
      const terr = src.terrain || null;
      const ice = [], arrow = [], gate = [], plate = [], hole = [], crack = [], wind = [], pad = [];
      for (let y = 0; y < h; y++) {
        const row = src.map[y];
        if (row.length !== w) throw new Error('Room ' + key + ' row ' + y + ' has wrong length');
        wall.push([]); ice.push([]); arrow.push([]); gate.push([]); plate.push([]); hole.push([]); crack.push([]);
        wind.push([]); pad.push([]);
        for (let x = 0; x < w; x++) {
          const ch = row[x];
          wall[y].push(ch === '#');
          const tc = terr ? terr[y][x] : '.';
          ice[y].push(tc === '~');
          gate[y].push(tc === '|');
          plate[y].push(tc === 'o');
          hole[y].push(tc === 'O');
          crack[y].push(tc === 'x');
          arrow[y].push('^>v<'.indexOf(tc));
          const wd = 'URDL'.indexOf(tc);
          wind[y].push(wd);
          if (wd >= 0) hasWind = true;
          const pd = tc >= '1' && tc <= '4' ? tc : '';
          pad[y].push(pd);
          if (pd) (pads[pd] || (pads[pd] = [])).push({ room: key, x, y });
          if (tc === 'o') plates.push({ room: key, x, y });
          if (ch === 'P') objects.push({ id: nextId++, kind: 'player', room: key, x, y });
          else if (ch === 'p') objects.push({ id: nextId++, kind: 'player', second: true, room: key, x, y });
          else if (ch === 'b') objects.push({ id: nextId++, kind: 'box', room: key, x, y });
          else if (BOX_COLORS[ch]) objects.push({ id: nextId++, kind: 'box', color: BOX_COLORS[ch], room: key, x, y });
          else if (TWINS[ch]) objects.push({ id: nextId++, kind: 'room', ref: TWINS[ch], twin: true, room: key, x, y });
          else if (ch === '_') goals.push({ x, y, type: 'box' });
          else if (ch === '=') goals.push({ x, y, type: 'player' });
          else if (/[A-Z]/.test(ch)) objects.push({ id: nextId++, kind: 'room', ref: ch, room: key, x, y });
          else if (ch !== '#' && ch !== '.') throw new Error('Unknown symbol ' + ch + ' in room ' + key);
        }
      }
      rooms[key] = {
        key, w, h, wall, goals, ice, arrow, gate, hole, crack, wind, pad, plates: plate,
        flip: !!src.flip, eats: !!src.eats, palette: src.palette, name: src.name
      };
    }
    for (const o of objects) {
      if (o.kind !== 'room') continue;
      if (!rooms[o.ref]) throw new Error((o.twin ? 'Twin box' : 'Box') + ' refers to missing room ' + o.ref);
      if (o.twin && !objects.some(b => b.kind === 'room' && b.ref === o.ref && !b.twin)) {
        throw new Error('Twin box of room ' + o.ref + ' needs the room\'s own box ' + o.ref);
      }
    }
    if (objects.filter(o => o.kind === 'player' && !o.second).length !== 1) throw new Error('Level needs exactly one player (P)');
    if (objects.filter(o => o.second).length > 1) throw new Error('Level can have at most one second sprout (p)');
    for (const d of Object.keys(pads)) {
      if (pads[d].length !== 2) throw new Error('Jump pad ' + d + ' must be on exactly two cells, found ' + pads[d].length);
    }
    return {
      // hasWind / hasPads let move() skip those phases in levels without them
      level: { id: def.id, name: def.name, tip: def.tip, root: def.root, rooms, plates, pads, hasWind, hasPads: Object.keys(pads).length > 0 },
      // filled: holes a box has dropped into (now floor); broken: crumbling floor that gave way (now a hole)
      state: { objects, filled: [], broken: [] }
    };
  }

  /* ---------- helpers ---------- */

  function cloneState(st) {
    return { objects: st.objects.map(o => Object.assign({}, o)), filled: (st.filled || []).slice(), broken: (st.broken || []).slice() };
  }

  const cellKey = (room, x, y) => room + ':' + x + ',' + y;

  function objectAt(st, room, x, y) {
    for (const o of st.objects) if (o.room === room && o.x === x && o.y === y) return o;
    return null;
  }

  // The room's own box. A twin is only a second way in: leaving a room, depth and
  // nesting always follow the original.
  function roomObject(st, key) {
    for (const o of st.objects) if (o.kind === 'room' && o.ref === key && !o.twin) return o;
    return null;
  }

  // the primary sprout (P); the camera and the events follow it
  function player(st) {
    for (const o of st.objects) if (o.kind === 'player' && !o.second) return o;
    return null;
  }

  // every sprout, primary first
  function players(st) {
    const p = player(st);
    for (const o of st.objects) if (o.second) return [p, o];
    return [p];
  }

  function byId(st, id) {
    for (const o of st.objects) if (o.id === id) return o;
    return null;
  }

  // true if room `inner` sits (at any depth) inside room `outer`, or is the same room
  function roomInside(st, inner, outer) {
    let cur = inner;
    for (let i = 0; i < 30; i++) {
      if (cur === outer) return true;
      const ro = roomObject(st, cur);
      if (!ro) return false;
      cur = ro.room;
    }
    return false;
  }

  // how many rooms deep a room is, counted from the main room (following original boxes)
  function depthOf(st, L, room) {
    let d = 0, cur = room;
    for (let i = 0; i < 12 && cur !== L.root; i++) {
      const ro = roomObject(st, cur);
      if (!ro) break;
      cur = ro.room; d++;
    }
    return d;
  }

  function enterPoint(L, key, dir) {
    const R = L.rooms[key];
    const mx = Math.floor(R.w / 2), my = Math.floor(R.h / 2);
    if (dir === 0) return { x: mx, y: R.h - 1 };
    if (dir === 1) return { x: 0, y: my };
    if (dir === 2) return { x: mx, y: 0 };
    return { x: R.w - 1, y: my };
  }

  // Gates are open while every plate in the level has something standing on it.
  function gatesOpen(st, L) {
    for (const p of L.plates) if (!objectAt(st, p.room, p.x, p.y)) return false;
    return true;
  }

  // An open hole: a hole (or broken crumbling floor) that no box has filled yet.
  function isHole(st, L, room, x, y) {
    const R = L.rooms[room], k = cellKey(room, x, y);
    if (!R.hole[y][x] && (!st.broken || st.broken.indexOf(k) === -1)) return false;
    return !st.filled || st.filled.indexOf(k) === -1;
  }

  function blocked(st, L, room, x, y, dir, obj) {
    const R = L.rooms[room];
    if (R.wall[y][x]) return true;
    if (R.gate[y][x] && !st.open) return true;
    const a = R.arrow[y][x];
    if (a >= 0 && a !== dir) return true;
    // only a plain box can go into a hole (it drops in and fills it)
    return isHole(st, L, room, x, y) && !(obj && obj.kind === 'box');
  }

  /* ---------- movement ---------- */

  // Cell next to (x,y) in `room`, walking out of rooms through their walls when needed.
  // `dir` in the result is the way the mover is going when it gets there: leaving a
  // mirror room swaps left and right, so out of its left edge you come out on the right.
  function neighbor(st, L, room, x, y, dir, depth) {
    const R = L.rooms[room];
    const nx = x + DIRS[dir][0], ny = y + DIRS[dir][1];
    if (nx >= 0 && ny >= 0 && nx < R.w && ny < R.h) return { room, x: nx, y: ny, dir, exits: [] };
    if (depth > MAXD) return null;
    const ro = roomObject(st, room);
    if (!ro) return null;
    const n = neighbor(st, L, ro.room, ro.x, ro.y, R.flip ? mirror(dir) : dir, depth + 1);
    if (!n) return null;
    n.exits.unshift({ type: 'exit', from: room });
    return n;
  }

  function place(o, room, x, y) { o.room = room; o.x = x; o.y = y; }

  // A box that lands on an open hole drops in: the box is gone and the hole becomes floor.
  function drop(st, L, o) {
    if (o.kind !== 'box' || !isHole(st, L, o.room, o.x, o.y)) return false;
    st.filled.push(cellKey(o.room, o.x, o.y));
    st.objects.splice(st.objects.indexOf(o), 1);
    st.dropped = (st.dropped || []).concat({ id: o.id, room: o.room, x: o.x, y: o.y });
    return true;
  }

  // On ice an object keeps going the same way until the next cell in its room is not free.
  // Returns true if it dropped into a hole on the way.
  function slide(st, L, o, dir) {
    const R = L.rooms[o.room];
    while (R.ice[o.y][o.x]) {
      const nx = o.x + DIRS[dir][0], ny = o.y + DIRS[dir][1];
      if (nx < 0 || ny < 0 || nx >= R.w || ny >= R.h) return false;
      if (blocked(st, L, o.room, nx, ny, dir, o) || objectAt(st, o.room, nx, ny)) return false;
      o.x = nx; o.y = ny;
      if (drop(st, L, o)) return true;
    }
    return false;
  }

  // A sprout or plain box that ends its movement on a pad comes out of the twin pad at once,
  // if nothing stands there. Never back onto the cell it just left: whoever pushed it is
  // about to step there. No second jump and no slide after a jump.
  function jump(st, L, o, fr, fx, fy) {
    if (o.kind === 'room') return null;
    const d = L.rooms[o.room].pad[o.y][o.x];
    if (!d) return null;
    const pr = L.pads[d];
    const t = pr[0].room === o.room && pr[0].x === o.x && pr[0].y === o.y ? pr[1] : pr[0];
    if ((t.room === fr && t.x === fx && t.y === fy) || objectAt(st, t.room, t.x, t.y)) return null;
    const ev = { type: 'jump', from: o.room, into: t.room };
    place(o, t.room, t.x, t.y);
    st.info.jumped.push(o.id);
    return ev;
  }

  // Lands `obj` on a cell: drop, slide, jump. Returns the jump event, if it jumped.
  function arrive(st, L, obj, room, x, y, dir) {
    const fr = obj.room, fx = obj.x, fy = obj.y;
    place(obj, room, x, y);
    if (drop(st, L, obj) || slide(st, L, obj, dir)) return null;
    return L.hasPads ? jump(st, L, obj, fr, fx, fy) : null;
  }

  function countFlips(st, L, exits) {
    for (const e of exits) if (L.rooms[e.from].flip) st.info.flips++;
  }

  // Mutations only ever happen on a path that ends in success, so a failed
  // attempt leaves the state untouched (and the info counters too: they are
  // only bumped once a step has succeeded).
  function tryMove(st, L, obj, dir, depth, chain) {
    const t = neighbor(st, L, obj.room, obj.x, obj.y, dir, depth);
    if (!t) return null;
    const ev = moveInto(st, L, obj, t.dir, t.room, t.x, t.y, depth, chain.concat(obj.id));
    if (!ev) return null;
    if (t.exits.length) countFlips(st, L, t.exits);
    return t.exits.concat(ev);
  }

  function moveInto(st, L, obj, dir, room, x, y, depth, chain) {
    if (depth > MAXD) return null;
    if (blocked(st, L, room, x, y, dir, obj)) return null;
    const occ = objectAt(st, room, x, y);
    if (!occ || occ === obj) { const j = arrive(st, L, obj, room, x, y, dir); return j ? [j] : []; }
    // sprouts are never pushed; note when the other sprout is in the way so it can retry
    if (occ.kind === 'player') { if (occ.id !== chain[0]) st.hit = true; return null; }
    if (chain.indexOf(occ.id) !== -1) return null;
    // 1) push whatever is there
    if (tryMove(st, L, occ, dir, depth + 1, chain)) { const j = arrive(st, L, obj, room, x, y, dir); return j ? [j] : []; }
    // 2) it would not move: walk into it if it is a room (a twin leads to the same room).
    // Only an original room-box can make a cycle; a twin may go into any room, even its own.
    if (occ.kind === 'room' && !(obj.kind === 'room' && !obj.twin && roomInside(st, occ.ref, obj.ref))) {
      const R = L.rooms[occ.ref], nd = R.flip ? mirror(dir) : dir;
      const ep = enterPoint(L, occ.ref, nd);
      const ev = moveInto(st, L, obj, nd, occ.ref, ep.x, ep.y, depth + 1, chain);
      if (ev) {
        if (occ.twin) st.info.twinEntries++;
        if (R.flip) st.info.flips++;
        return [{ type: 'enter', into: occ.ref }].concat(ev);
      }
    }
    // 3) a hungry room swallows what it cannot push or enter: the thing goes in as if it had
    // walked into the room from the front, and the room takes its cell
    if (obj.kind === 'room' && L.rooms[obj.ref].eats && !(occ.kind === 'room' && !occ.twin && roomInside(st, obj.ref, occ.ref))) {
      const R = L.rooms[obj.ref], od = R.flip ? mirror(opp(dir)) : opp(dir);
      const ep = enterPoint(L, obj.ref, od);
      if (moveInto(st, L, occ, od, obj.ref, ep.x, ep.y, depth + 1, chain.concat(occ.id))) {
        st.info.eaten.push(occ.id);
        if (R.flip) st.info.flips++;
        arrive(st, L, obj, room, x, y, dir);
        return [];
      }
    }
    return null;
  }

  // One wind step: everything standing on a wind tile is blown one step, the front of a row
  // first so the row moves like a train. Wind never pushes or enters anything, and blows
  // each thing at most once. The primary sprout's room changes go on `events`.
  function blow(st, L, prim, events) {
    const list = [];
    for (const o of st.objects) {
      const wd = L.rooms[o.room].wind[o.y][o.x];
      if (wd >= 0) list.push({ o, wd, s: o.x * DIRS[wd][0] + o.y * DIRS[wd][1] });
    }
    if (!list.length) return;
    list.sort((a, b) => b.s - a.s || a.o.id - b.o.id);
    for (const { o, wd } of list) {
      const t = neighbor(st, L, o.room, o.x, o.y, wd, 0);
      if (!t || blocked(st, L, t.room, t.x, t.y, t.dir, o) || objectAt(st, t.room, t.x, t.y)) continue;
      if (t.exits.length) countFlips(st, L, t.exits);
      st.info.blown.push(o.id);
      const j = arrive(st, L, o, t.room, t.x, t.y, t.dir);
      if (o === prim) { for (const e of t.exits) events.push(e); if (j) events.push(j); }
    }
  }

  // crumbling floor gives way once a sprout has stepped off it
  function crumble(st, L, a, b) {
    if (!L.rooms[a.room].crack[a.y][a.x] || (a.room === b.room && a.x === b.x && a.y === b.y)) return;
    const k = cellKey(a.room, a.x, a.y);
    if (st.broken.indexOf(k) === -1) st.broken.push(k);
  }

  const spot = (o) => ({ room: o.room, x: o.x, y: o.y });

  // Returns null when blocked, otherwise { state, events, dropped, info }. events lists the
  // primary sprout's own room changes in order ({type:'exit',from} / {type:'enter',into} /
  // {type:'jump',from,into}); info counts what happened, for the solver and the animations.
  function move(st, L, dir) {
    const next = cloneState(st);
    next.open = gatesOpen(st, L);
    next.info = { blown: [], jumped: [], eaten: [], twinEntries: 0, flips: 0, moved: [] };
    next.hit = false;
    const ps = players(next);
    const from = ps.map(spot);
    // both sprouts go the same way, primary first; if the second sprout was all that held
    // the primary up, the primary tries once more after the second has moved
    let ev = tryMove(next, L, ps[0], dir, 0, []);
    const moved = ev ? [ps[0].id] : [];
    if (ps.length > 1) {
      const retry = !ev && next.hit;
      if (tryMove(next, L, ps[1], dir, 0, [])) {
        moved.push(ps[1].id);
        if (retry && (ev = tryMove(next, L, ps[0], dir, 0, []))) moved.unshift(ps[0].id);
      }
    }
    if (!moved.length) return null;
    const events = ev || [];
    if (L.hasWind) {
      const mid = ps.map(spot);
      blow(next, L, ps[0], events);
      for (let i = 0; i < ps.length; i++) { crumble(next, L, from[i], mid[i]); crumble(next, L, mid[i], ps[i]); }
    } else {
      for (let i = 0; i < ps.length; i++) crumble(next, L, from[i], ps[i]);
    }
    const info = next.info;
    info.moved = moved;
    // a fresh object, so the returned state carries no temporary fields
    return { state: { objects: next.objects, filled: next.filled, broken: next.broken }, events, dropped: next.dropped || [], info };
  }

  function goalStatus(st, L) {
    let done = 0, total = 0;
    for (const key of Object.keys(L.rooms)) {
      for (const g of L.rooms[key].goals) {
        total++;
        const o = objectAt(st, key, g.x, g.y);
        if (o && (g.type === 'player' ? o.kind === 'player' : o.kind !== 'player')) done++;
      }
    }
    // every coloured box must end up inside a room of its own colour
    for (const o of st.objects) {
      if (!o.color) continue;
      total++;
      if (o.room !== L.root && L.rooms[o.room].palette === o.color) done++;
    }
    return { done, total };
  }

  function isWin(st, L) {
    const g = goalStatus(st, L);
    return g.total > 0 && g.done === g.total;
  }

  function key(st) {
    let k = st.objects.map(o => o.id + '@' + o.room + o.x + ',' + o.y).join('|');
    if (st.filled && st.filled.length) k += '#f' + st.filled.slice().sort().join(';');
    if (st.broken && st.broken.length) k += '#b' + st.broken.slice().sort().join(';');
    return k;
  }

  return {
    DIRS, BOX_COLORS, parseLevel, cloneState, objectAt, roomObject, player, players, byId,
    enterPoint, move, goalStatus, isWin, key, gatesOpen, isHole, cellKey, depthOf, opp, mirror
  };
});
