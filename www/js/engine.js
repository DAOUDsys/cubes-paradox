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

  /* ---------- level parsing ---------- */

  function parseLevel(def) {
    const rooms = {};
    const objects = [];
    const plates = [];
    let nextId = 1;
    for (const key of Object.keys(def.rooms)) {
      const src = def.rooms[key];
      const h = src.map.length;
      const w = src.map[0].length;
      if (w !== h) throw new Error('Room ' + key + ' must be square');
      const wall = [];
      const goals = [];
      // optional terrain layer, same size as the map:
      // ~ ice, o plate, | gate, ^ > v < one-way arrows, O hole, x crumbling floor
      const terr = src.terrain || null;
      const ice = [], arrow = [], gate = [], plate = [], hole = [], crack = [];
      for (let y = 0; y < h; y++) {
        const row = src.map[y];
        if (row.length !== w) throw new Error('Room ' + key + ' row ' + y + ' has wrong length');
        wall.push([]); ice.push([]); arrow.push([]); gate.push([]); plate.push([]); hole.push([]); crack.push([]);
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
          if (tc === 'o') plates.push({ room: key, x, y });
          if (ch === 'P') objects.push({ id: nextId++, kind: 'player', room: key, x, y });
          else if (ch === 'b') objects.push({ id: nextId++, kind: 'box', room: key, x, y });
          else if (BOX_COLORS[ch]) objects.push({ id: nextId++, kind: 'box', color: BOX_COLORS[ch], room: key, x, y });
          else if (ch === '_') goals.push({ x, y, type: 'box' });
          else if (ch === '=') goals.push({ x, y, type: 'player' });
          else if (/[A-Z]/.test(ch)) objects.push({ id: nextId++, kind: 'room', ref: ch, room: key, x, y });
          else if (ch !== '#' && ch !== '.') throw new Error('Unknown symbol ' + ch + ' in room ' + key);
        }
      }
      rooms[key] = { key, w, h, wall, goals, ice, arrow, gate, hole, crack, plates: plate, palette: src.palette, name: src.name };
    }
    for (const o of objects) {
      if (o.kind === 'room' && !rooms[o.ref]) throw new Error('Box refers to missing room ' + o.ref);
    }
    if (objects.filter(o => o.kind === 'player').length !== 1) throw new Error('Level needs exactly one player');
    return {
      level: { id: def.id, name: def.name, tip: def.tip, root: def.root, rooms, plates },
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

  function roomObject(st, key) {
    for (const o of st.objects) if (o.kind === 'room' && o.ref === key) return o;
    return null;
  }

  function player(st) {
    for (const o of st.objects) if (o.kind === 'player') return o;
    return null;
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
  function neighbor(st, L, room, x, y, dir, depth) {
    const R = L.rooms[room];
    const nx = x + DIRS[dir][0], ny = y + DIRS[dir][1];
    if (nx >= 0 && ny >= 0 && nx < R.w && ny < R.h) return { room, x: nx, y: ny, exits: [] };
    if (depth > MAXD) return null;
    const ro = roomObject(st, room);
    if (!ro) return null;
    const n = neighbor(st, L, ro.room, ro.x, ro.y, dir, depth + 1);
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
  function slide(st, L, o, dir) {
    const R = L.rooms[o.room];
    while (R.ice[o.y][o.x]) {
      const nx = o.x + DIRS[dir][0], ny = o.y + DIRS[dir][1];
      if (nx < 0 || ny < 0 || nx >= R.w || ny >= R.h) return;
      if (blocked(st, L, o.room, nx, ny, dir, o) || objectAt(st, o.room, nx, ny)) return;
      o.x = nx; o.y = ny;
      if (drop(st, L, o)) return;
    }
  }

  function arrive(st, L, obj, room, x, y, dir) {
    place(obj, room, x, y);
    if (!drop(st, L, obj)) slide(st, L, obj, dir);
  }

  // Mutations only ever happen on a path that ends in success, so a failed
  // attempt leaves the state untouched.
  function tryMove(st, L, obj, dir, depth, chain) {
    const t = neighbor(st, L, obj.room, obj.x, obj.y, dir, depth);
    if (!t) return null;
    const ev = moveInto(st, L, obj, dir, t.room, t.x, t.y, depth, chain.concat(obj.id));
    if (!ev) return null;
    return t.exits.concat(ev);
  }

  function moveInto(st, L, obj, dir, room, x, y, depth, chain) {
    if (depth > MAXD) return null;
    if (blocked(st, L, room, x, y, dir, obj)) return null;
    const occ = objectAt(st, room, x, y);
    if (!occ || occ === obj) { arrive(st, L, obj, room, x, y, dir); return []; }
    if (chain.indexOf(occ.id) !== -1) return null;
    // 1) push whatever is there
    if (tryMove(st, L, occ, dir, depth + 1, chain)) { arrive(st, L, obj, room, x, y, dir); return []; }
    // 2) it would not move: walk into it if it is a room
    if (occ.kind === 'room' && !(obj.kind === 'room' && roomInside(st, occ.ref, obj.ref))) {
      const ep = enterPoint(L, occ.ref, dir);
      const ev = moveInto(st, L, obj, dir, occ.ref, ep.x, ep.y, depth + 1, chain);
      if (ev) return [{ type: 'enter', into: occ.ref }].concat(ev);
    }
    return null;
  }

  // Returns null when blocked, otherwise { state, events } where events lists
  // the player's own room changes in order ({type:'exit',from} / {type:'enter',into}).
  function move(st, L, dir) {
    const next = cloneState(st);
    next.open = gatesOpen(st, L);
    const p = player(next);
    const from = { room: p.room, x: p.x, y: p.y };
    const ev = tryMove(next, L, p, dir, 0, []);
    if (!ev) return null;
    delete next.open;
    // crumbling floor gives way once the player has stepped off it
    if (L.rooms[from.room].crack[from.y][from.x] && (p.room !== from.room || p.x !== from.x || p.y !== from.y)) {
      const k = cellKey(from.room, from.x, from.y);
      if (next.broken.indexOf(k) === -1) next.broken.push(k);
    }
    const dropped = next.dropped || [];
    delete next.dropped;
    return { state: next, events: ev, dropped };
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
    DIRS, BOX_COLORS, parseLevel, cloneState, objectAt, roomObject, player, byId,
    enterPoint, move, goalStatus, isWin, key, gatesOpen, isHole, cellKey
  };
});
