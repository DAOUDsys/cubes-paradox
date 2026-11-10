// Full state-space analysis of a level: shortest solution, difficulty metrics, and what the
// solution actually does (so the generator can check a level really uses its world's idea).
// Used by the generator (tools/gen.js), the picker (tools/curate.js) and the checker (tools/solve.js).
const path = require('path');
const Engine = require(path.join(__dirname, '../www/js/engine.js'));

const NAMES = 'URDL';

// everything about a state except where the player stands
function configKey(st) {
  let k = st.objects.filter(o => o.kind !== 'player').map(o => o.id + '@' + o.room + o.x + ',' + o.y).join('|');
  if (st.filled.length) k += '#f' + st.filled.slice().sort().join(';');
  if (st.broken.length) k += '#b' + st.broken.slice().sort().join(';');
  return k;
}

// how many rooms deep a room is, counted from the main room
function depthOf(st, L, room) {
  let d = 0, cur = room;
  for (let i = 0; i < 12 && cur !== L.root; i++) {
    const ro = Engine.roomObject(st, cur);
    if (!ro) break;
    cur = ro.room; d++;
  }
  return d;
}

// Explores every reachable state (up to `cap`). Returns null if the level can't be won
// (or the cap was hit before any win was found).
function analyze(def, cap) {
  cap = cap || 300000;
  const { level, state } = Engine.parseLevel(def);
  const index = new Map();
  const states = [state];
  const parent = [-1], pdir = [-1], dist = [0];
  const edges = []; // [from, to] pairs, for the reverse search
  const wins = [];
  index.set(Engine.key(state), 0);
  if (Engine.isWin(state, level)) wins.push(0);
  let firstWin = -1, seenAtWin = 0;
  for (let i = 0; i < states.length; i++) {
    for (let d = 0; d < 4; d++) {
      const res = Engine.move(states[i], level, d);
      if (!res) continue;
      const k = Engine.key(res.state);
      let j = index.get(k);
      if (j === undefined) {
        if (states.length >= cap) { j = -1; }
        else {
          j = states.length;
          index.set(k, j);
          states.push(res.state);
          parent.push(i); pdir.push(d); dist.push(dist[i] + 1);
          if (Engine.isWin(res.state, level)) {
            wins.push(j);
            if (firstWin < 0) { firstWin = j; seenAtWin = states.length; }
          }
        }
      }
      if (j >= 0) edges.push(i, j);
    }
  }
  if (firstWin < 0) return null;
  const capped = states.length >= cap;

  const moves = [];
  for (let k = firstWin; parent[k] >= 0; k = parent[k]) moves.push(pdir[k]);
  moves.reverse();

  // distance from every state to the nearest win (reverse search); unreachable = dead
  const n = states.length;
  const radj = new Array(n);
  for (let e = 0; e < edges.length; e += 2) {
    const to = edges[e + 1];
    (radj[to] || (radj[to] = [])).push(edges[e]);
  }
  const toWin = new Int32Array(n).fill(-1);
  const q = wins.slice();
  for (const w of wins) toWin[w] = 0;
  for (let h = 0; h < q.length; h++) {
    const r = radj[q[h]];
    if (r) for (const p of r) if (toWin[p] < 0) { toWin[p] = toWin[q[h]] + 1; q.push(p); }
  }
  let dead = 0;
  const opt = moves.length;
  const optConfigs = new Set(), aliveConfigs = new Set();
  for (let i = 0; i < n; i++) {
    if (toWin[i] < 0) { dead++; continue; }
    const ck = configKey(states[i]);
    aliveConfigs.add(ck);
    if (dist[i] + toWin[i] === opt) optConfigs.add(ck);
  }

  // ----- the level as choices, not steps -----
  // A "place" is everything the player can reach by plain walking that can be walked back
  // (same room, nothing else changed). Leaving a place is a choice: a push, a drop, a cracked
  // tile, a one-way tile, walking into or out of a room. A long walk or a long straight push
  // down a corridor is many steps but no choices, so it adds nothing here.
  const comp = new Int32Array(n);
  let nc = 0;
  {
    const ids = new Map(), cid = new Int32Array(n), uf = new Int32Array(n);
    for (let i = 0; i < n; i++) {
      const k = configKey(states[i]) + '@' + Engine.player(states[i]).room;
      let v = ids.get(k);
      if (v === undefined) { v = ids.size; ids.set(k, v); }
      cid[i] = v; uf[i] = i;
    }
    const find = (x) => { while (uf[x] !== x) { uf[x] = uf[uf[x]]; x = uf[x]; } return x; };
    const eset = new Set();
    for (let e = 0; e < edges.length; e += 2) eset.add(edges[e] * n + edges[e + 1]);
    for (let e = 0; e < edges.length; e += 2) {
      const a = edges[e], b = edges[e + 1];
      if (a < b && cid[a] === cid[b] && eset.has(b * n + a)) { const ra = find(a), rb = find(b); if (ra !== rb) uf[ra] = rb; }
    }
    const dense = new Map();
    for (let i = 0; i < n; i++) { const r = find(i); let v = dense.get(r); if (v === undefined) { v = nc++; dense.set(r, v); } comp[i] = v; }
  }
  const succ = new Array(nc), pred = new Array(nc);
  for (let e = 0; e < edges.length; e += 2) {
    const a = comp[edges[e]], b = comp[edges[e + 1]];
    if (a === b) continue;
    (succ[a] || (succ[a] = new Set())).add(b);
    (pred[b] || (pred[b] = new Set())).add(a);
  }
  const cDist = new Int32Array(nc).fill(-1), cToWin = new Int32Array(nc).fill(-1);
  { const cq = [comp[0]]; cDist[comp[0]] = 0;
    for (let h = 0; h < cq.length; h++) if (succ[cq[h]]) for (const b of succ[cq[h]]) if (cDist[b] < 0) { cDist[b] = cDist[cq[h]] + 1; cq.push(b); } }
  { const cq = []; for (const w of wins) if (cToWin[comp[w]] < 0) { cToWin[comp[w]] = 0; cq.push(comp[w]); }
    for (let h = 0; h < cq.length; h++) if (pred[cq[h]]) for (const a of pred[cq[h]]) if (cToWin[a] < 0) { cToWin[a] = cToWin[cq[h]] + 1; cq.push(a); } }
  let placesAlive = 0, placesDead = 0;
  for (let c = 0; c < nc; c++) if (cToWin[c] < 0) placesDead++; else placesAlive++;
  // walk the solution place by place and look at what else could have been done at each one
  const pathIdx = [];
  for (let k = firstWin; k >= 0; k = parent[k]) pathIdx.push(k);
  pathIdx.reverse();
  let choices = 0, bits = 0, traps = 0, trapSteps = 0, macro = 0, hardSteps = 0;
  for (let p = 0; p < pathIdx.length - 1; p++) {
    const c = comp[pathIdx[p]], next = comp[pathIdx[p + 1]];
    if (c === next) continue;
    macro++;
    let fwd = 0, deadOpts = 0, prog = 0;
    for (const b of succ[c]) {
      // going back to somewhere already seen is not a real option; new ground is
      if (b !== next && cDist[b] <= cDist[c]) continue;
      fwd++;
      if (cToWin[b] < 0) deadOpts++;
      else if (cToWin[b] < cToWin[c]) prog++;
    }
    prog = Math.max(1, prog);
    if (fwd > prog) choices++;
    if (deadOpts) { trapSteps++; traps += deadOpts; }
    const stepBits = Math.log2(fwd / prog);
    bits += stepBits;
    if (stepBits >= 1) hardSteps++;
  }

  // replay the solution to collect what it uses
  let st = state, pushes = 0, enters = 0, exits = 0, maxDepth = 0, drops = 0, pistons = 0;
  const movedIds = new Set(), enteredRooms = new Set(), receivedRooms = new Set(), solConfigs = new Set([configKey(state)]);
  let lastPushDir = -1, pushRuns = 0, slides = 0, gateUsed = false, arrowUsed = false, doorArrowUsed = false;
  let carryMove = false, unpacked = false, tunnel = false, pocket = false, remoteGate = false;
  const boxRooms = new Map(); // box id → rooms it has been inside
  let boxDive = 0; // the most levels of depth any one box travels from where it started
  let switches = 0, lastPushed = '', goalDrops = 0, goalsDone = Engine.goalStatus(state, level).done;
  let reversals = 0; const lastDirOf = new Map();
  // how many times the solution uses each idea (the picker orders a world by these)
  const uses = { pocket: 0, carry: 0, unpack: 0, gate: 0, arrow: 0, roomIn: 0, roomPush: 0, boxIn: 0 };
  let inside = null; // { room, dir } while the player is inside a room it entered
  for (let mi = 0; mi < moves.length; mi++) {
    const d = moves[mi];
    const res = Engine.move(st, level, d);
    let pushed = false;
    for (const o of res.state.objects) {
      const p = Engine.byId(st, o.id);
      const movedHere = p.room !== o.room || p.x !== o.x || p.y !== o.y;
      if (p.room === o.room && Math.abs(p.x - o.x) + Math.abs(p.y - o.y) > 1 && !res.events.length) slides++;
      if (movedHere) {
        const R = level.rooms[o.room];
        if (R.gate[o.y][o.x]) { gateUsed = true; uses.gate++; if (level.plates.some(pl => pl.room !== level.root)) remoteGate = true; }
        if (R.arrow[o.y][o.x] >= 0) {
          arrowUsed = true; uses.arrow++;
          if (o.x === 0 || o.y === 0 || o.x === R.w - 1 || o.y === R.h - 1) doorArrowUsed = true;
        }
      }
      if (o.kind !== 'player' && movedHere) {
        pushed = true; movedIds.add(o.id);
        // a room-box moving with a box inside it
        if (o.kind === 'room' && st.objects.some(b => b.kind === 'box' && b.room === o.ref)) { carryMove = true; uses.carry++; }
        if (o.kind === 'room') { if (p.room !== o.room) uses.roomIn++; else uses.roomPush++; }
        // pushed straight back the way it came: it was parked, not just moved
        if (lastDirOf.get(o.id) === (d + 2) % 4) reversals++;
        lastDirOf.set(o.id, d);
        // a box leaving a room for the room around it
        if (p.room !== o.room) receivedRooms.add(o.room);
        if (o.kind === 'box' && p.room !== o.room) {
          const holder = Engine.roomObject(st, p.room);
          if (holder && holder.room === o.room) { unpacked = true; uses.unpack++; } else uses.boxIn++;
          const seen = boxRooms.get(o.id) || new Set([p.room]);
          if (seen.has(o.room)) { pocket = true; uses.pocket++; }
          seen.add(o.room); boxRooms.set(o.id, seen);
        }
      }
    }
    for (const dr of res.dropped) { drops++; movedIds.add(dr.id); pushed = true; }
    if (pushed) { pushes++; if (d !== lastPushDir) pushRuns++; lastPushDir = d; } else lastPushDir = -1;
    if (pushed) {
      // which things moved: going back to a thing after moving another one is planning, not pushing
      const ids = res.state.objects.filter(o => { const p = Engine.byId(st, o.id); return o.kind !== 'player' && p && (p.room !== o.room || p.x !== o.x || p.y !== o.y); }).map(o => o.id).join(',');
      if (ids && ids !== lastPushed) { if (lastPushed) switches++; lastPushed = ids; }
    }
    { const gd = Engine.goalStatus(res.state, level).done; if (gd < goalsDone) goalDrops++; goalsDone = gd; }
    if (pushed && res.events.some(ev => ev.type === 'exit')) pistons++;
    for (const ev of res.events) {
      if (ev.type === 'enter') { enters++; enteredRooms.add(ev.into); inside = { room: ev.into, dir: d }; }
      else {
        exits++;
        if (inside && inside.room === ev.from && inside.dir === d) tunnel = true;
        inside = null;
      }
    }
    for (const o of res.state.objects) {
      if (o.kind !== 'box') continue;
      const start = Engine.byId(state, o.id);
      boxDive = Math.max(boxDive, Math.abs(depthOf(res.state, level, o.room) - depthOf(state, level, start.room)));
    }
    st = res.state;
    solConfigs.add(configKey(st));
    maxDepth = Math.max(maxDepth, depthOf(st, level, Engine.player(st).room));
  }
  const carried = st.objects.some(o => o.kind !== 'player' && Engine.byId(state, o.id) && o.room !== Engine.byId(state, o.id).room);
  const nested = st.objects.some(o => o.kind === 'room' && o.room !== def.root && o.room !== o.ref);
  const roomGoal = st.objects.some(o => o.kind === 'room' && enteredRooms.has(o.ref) &&
    level.rooms[o.room].goals.some(g => g.type === 'box' && g.x === o.x && g.y === o.y));
  const doorway = [...movedIds].some(id => { const o = Engine.byId(state, id); return o && o.kind === 'room' && enteredRooms.has(o.ref); });
  const colorBoxes = state.objects.filter(o => o.color).length;

  return {
    level, init: state, final: st,
    sol: moves.map(d => NAMES[d]).join(''),
    moves: moves.length, pushes, pushRuns, enters, exits,
    states: n, capped, seenAtWin, dead, deadRatio: dead / n,
    // uniqueness: every shortest solution goes through the same arrangements of things
    unique: optConfigs.size === solConfigs.size,
    // freedom: how many different arrangements can still lead to a win, per arrangement in the solution
    freedom: aliveConfigs.size / solConfigs.size,
    movedIds, enteredRooms, receivedRooms, carried, nested, slides, gateUsed, arrowUsed,
    boxDive, doorway, tunnel, carryMove, unpacked, pocket, pistons, maxDepth, roomGoal, drops,
    broken: st.broken.length, colorBoxes, remoteGate, doorArrowUsed,
    // choices: see "the level as choices" above
    macro, choices, hardSteps, bits, traps, trapSteps, places: nc, placesAlive, placesDead,
    switches, goalDrops, reversals, uses
  };
}

// Replays a stored solution and checks it ends in a win.
function verify(def) {
  const { level, state } = Engine.parseLevel(def);
  let st = state;
  for (const ch of def.sol || '') {
    const res = Engine.move(st, level, NAMES.indexOf(ch));
    if (!res) return false;
    st = res.state;
  }
  return Engine.isWin(st, level);
}

module.exports = { analyze, verify, NAMES, configKey, depthOf };
