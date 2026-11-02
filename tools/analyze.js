// Full state-space analysis of a level: shortest solution plus difficulty metrics.
// Used by the generator (tools/gen.js) and the checker (tools/solve.js).
const path = require('path');
const Engine = require(path.join(__dirname, '../www/js/engine.js'));

const NAMES = 'URDL';

// Explores every reachable state (up to `cap`). Returns null if the level can't be won
// (or the cap was hit before any win was found).
function analyze(def, cap) {
  cap = cap || 300000;
  const { level, state } = Engine.parseLevel(def);
  const index = new Map();
  const states = [state];
  const parent = [-1], pdir = [-1];
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
          parent.push(i); pdir.push(d);
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

  // states from which a win is still possible
  const n = states.length;
  const radj = new Array(n);
  for (let e = 0; e < edges.length; e += 2) {
    const to = edges[e + 1];
    (radj[to] || (radj[to] = [])).push(edges[e]);
  }
  const alive = new Uint8Array(n);
  const q = wins.slice();
  for (const w of wins) alive[w] = 1;
  for (let h = 0; h < q.length; h++) {
    const r = radj[q[h]];
    if (r) for (const p of r) if (!alive[p]) { alive[p] = 1; q.push(p); }
  }
  let dead = 0;
  for (let i = 0; i < n; i++) if (!alive[i]) dead++;

  // replay the solution to collect what it uses
  let st = state, pushes = 0, enters = 0, exits = 0;
  const movedIds = new Set(), enteredRooms = new Set();
  let lastPushDir = -1, pushRuns = 0, slides = 0, gateUsed = false, arrowUsed = false;
  for (const d of moves) {
    const res = Engine.move(st, level, d);
    let pushed = false;
    for (const o of res.state.objects) {
      const p = Engine.byId(st, o.id);
      if (p.room === o.room && Math.abs(p.x - o.x) + Math.abs(p.y - o.y) > 1 && !res.events.length) slides++;
      if (p.room !== o.room || p.x !== o.x || p.y !== o.y) {
        const R = level.rooms[o.room];
        if (R.gate[o.y][o.x]) gateUsed = true;
        if (R.arrow[o.y][o.x] >= 0) arrowUsed = true;
      }
      if (o.kind !== 'player' && (p.room !== o.room || p.x !== o.x || p.y !== o.y)) { pushed = true; movedIds.add(o.id); }
    }
    if (pushed) { pushes++; if (d !== lastPushDir) pushRuns++; lastPushDir = d; } else lastPushDir = -1;
    for (const ev of res.events) {
      if (ev.type === 'enter') { enters++; enteredRooms.add(ev.into); }
      else exits++;
    }
    st = res.state;
  }
  const carried = st.objects.some(o => o.kind !== 'player' && o.room !== Engine.byId(state, o.id).room);
  const nested = st.objects.some(o => o.kind === 'room' && o.room !== def.root && o.room !== o.ref);

  return {
    level, init: state, final: st,
    sol: moves.map(d => NAMES[d]).join(''),
    moves: moves.length, pushes, pushRuns, enters, exits,
    states: n, capped, seenAtWin, dead, deadRatio: dead / n,
    movedIds, enteredRooms, carried, nested, slides, gateUsed, arrowUsed
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

module.exports = { analyze, verify, NAMES };
