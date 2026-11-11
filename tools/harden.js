// Makes pool levels harder by small edits, instead of waiting for the random generator to find hard ones.
// Run: node tools/harden.js [seconds] [kinds...]   → writes tools/out2/hard-<kind>.json
// WIDE=1 also takes the big and the very easy parents (slow; for a kind whose pool is small).
//
// Each pool level is a parent. An edit opens a wall, closes a floor square, moves a box or a goal, or adds
// a box with its goal. An edit is kept only if the level still uses its world's idea, every box is
// still needed, and the level got harder by gen.js `score` (choices and traps, not steps).
// One child at most per parent, so a world never gets two levels that look alike (curate.js `family`).
// The 1.6 kinds have one more edit: move a room-box, or add, move or turn a wind tile, an ice cell or a pad.
// Edits never put a box, goal or wall on a tile (wind, pad, ice...), and pads stay in pairs.
const path = require('path');
const fs = require('fs');
const os = require('os');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const OUT = path.join(__dirname, 'out2');
const sigOf = (def) => JSON.stringify(def.rooms);

if (!isMainThread && workerData && workerData.harden) {
  const { analyze } = require('./analyze.js');
  const { KINDS, meets, score, metrics, trim, tighten, boxesNeeded, mulberry32 } = require('./gen.js');
  const Engine = require('../www/js/engine.js');
  const CAP = workerData.wide ? 260000 : 150000;
  const hash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
  // long levels are not what we want: past 50 steps, every extra step costs
  const worth = (a) => score(a) - 0.15 * Math.max(0, a.moves - 50) + (a.unique ? 2 : 0);

  const cells = (def, test) => {
    const out = [];
    for (const k of Object.keys(def.rooms)) {
      const r = def.rooms[k], n = r.map.length;
      for (let y = 1; y < n - 1; y++) for (let x = 1; x < n - 1; x++) {
        const t = r.terrain ? r.terrain[y][x] : '.';
        if (test(r.map[y][x], t, r, x, y)) out.push([k, x, y]);
      }
    }
    return out;
  };
  const setCell = (def, k, x, y, ch) => { const row = def.rooms[k].map[y]; def.rooms[k].map[y] = row.slice(0, x) + ch + row.slice(x + 1); };
  const nearFloor = (r, x, y) => [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => r.map[y + dy][x + dx] !== '#');
  const pickOne = (rng, list) => list[Math.floor(rng() * list.length)];
  const setTerr = (def, k, x, y, ch) => {
    const r = def.rooms[k];
    if (!r.terrain) r.terrain = r.map.map(row => '.'.repeat(row.length));
    r.terrain[y] = r.terrain[y].slice(0, x) + ch + r.terrain[y].slice(x + 1);
  };
  const isPad = (t) => t >= '1' && t <= '4';
  const isWind = (t) => 'URDL'.indexOf(t) >= 0;

  // the 1.6 edit: move a room-box (or twin) inside the room that holds it, or move / add / turn a tile
  function newEdit(d, rng) {
    const free = cells(d, (ch, t) => ch === '.' && t === '.');
    if (!free.length) return false;
    if (rng() < 0.4) {
      const boxes = cells(d, (ch) => /[A-Z123]/.test(ch) && ch !== d.root);
      if (!boxes.length) return false;
      const [k, x, y] = pickOne(rng, boxes);
      const spots = free.filter(f => f[0] === k);
      if (!spots.length) return false;
      const [, x2, y2] = pickOne(rng, spots);
      const ch = d.rooms[k].map[y][x];
      setCell(d, k, x, y, '.'); setCell(d, k, x2, y2, ch);
      return true;
    }
    const tiles = cells(d, (ch, t) => ch === '.' && (isWind(t) || isPad(t) || t === '~'));
    const hasWind = tiles.some(([k, x, y]) => isWind(d.rooms[k].terrain[y][x]));
    const hasIce = tiles.some(([k, x, y]) => d.rooms[k].terrain[y][x] === '~');
    const roll = rng();
    if (roll < 0.45 && tiles.length) {
      // move one tile to a free floor cell (a pad keeps its digit, so the pair stays a pair)
      const [k, x, y] = pickOne(rng, tiles);
      const t = d.rooms[k].terrain[y][x];
      const [k2, x2, y2] = pickOne(rng, free);
      setTerr(d, k, x, y, '.'); setTerr(d, k2, x2, y2, t);
      return true;
    }
    if (roll < 0.65 && hasWind) {
      // turn a wind tile
      const winds = tiles.filter(([k, x, y]) => isWind(d.rooms[k].terrain[y][x]));
      const [k, x, y] = pickOne(rng, winds);
      setTerr(d, k, x, y, 'URDL'[Math.floor(rng() * 4)]);
      return true;
    }
    // add a tile of a kind the level already has: a wind tile (at most 5) or an ice cell next to ice
    if (hasWind && (!hasIce || rng() < 0.5)) {
      if (tiles.filter(([k, x, y]) => isWind(d.rooms[k].terrain[y][x])).length >= 5) return false;
      const [k, x, y] = pickOne(rng, free);
      setTerr(d, k, x, y, 'URDL'[Math.floor(rng() * 4)]);
      return true;
    }
    if (hasIce) {
      const byIce = free.filter(([k, x, y]) => { const t = d.rooms[k].terrain; return t && [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => t[y + dy][x + dx] === '~'); });
      if (!byIce.length) return false;
      const [k, x, y] = pickOne(rng, byIce);
      setTerr(d, k, x, y, '~');
      return true;
    }
    return false;
  }

  function mutate(def, rng, kind) {
    const d = JSON.parse(JSON.stringify(def));
    delete d.sol;
    if (KINDS[kind] && KINDS[kind].fresh && rng() < 0.25) return newEdit(d, rng) ? d : null;
    const roll = rng();
    if (roll < 0.35) {
      const walls = cells(d, (ch, t, r, x, y) => ch === '#' && nearFloor(r, x, y));
      if (!walls.length) return null;
      const [k, x, y] = pickOne(rng, walls);
      setCell(d, k, x, y, '.');
    } else if (roll < 0.7) {
      const things = cells(d, (ch) => ch === 'b' || ch === '_' || ch === '=' || ch === 'P' || ch === 'p');
      const free = cells(d, (ch, t) => ch === '.' && t === '.');
      if (!things.length || !free.length) return null;
      const [k, x, y] = pickOne(rng, things);
      const ch = d.rooms[k].map[y][x];
      // the player stays in its own room: where a level starts is part of its idea
      const spots = ch === 'P' || ch === 'p' ? free.filter(f => f[0] === k) : free;
      if (!spots.length) return null;
      const [k2, x2, y2] = pickOne(rng, spots);
      setCell(d, k, x, y, '.');
      setCell(d, k2, x2, y2, ch);
    } else if (roll < 0.85) {
      const floor = cells(d, (ch, t) => ch === '.' && t === '.');
      if (!floor.length) return null;
      const [k, x, y] = pickOne(rng, floor);
      setCell(d, k, x, y, '#');
    } else {
      const boxes = cells(d, (ch) => ch === 'b').length;
      const free = cells(d, (ch, t) => ch === '.' && t === '.');
      if (boxes >= 3 || free.length < 4) return null;
      const a = pickOne(rng, free);
      setCell(d, a[0], a[1], a[2], 'b');
      const rest = free.filter(f => f !== a);
      const g = pickOne(rng, rest);
      setCell(d, g[0], g[1], g[2], '_');
    }
    return d;
  }

  parentPort.on('message', (job) => {
    if (!job) process.exit(0);
    const { kind, def, trials, ms } = job;
    const rng = mulberry32(hash(sigOf(def)));
    const t0 = Date.now();
    let best = def, bestA = null;
    try { bestA = analyze(def, CAP); } catch (e) { bestA = null; }
    if (!bestA || bestA.capped) { parentPort.postMessage({ i: job.i }); return; }
    const start = worth(bestA);
    let bestW = start, kept = 0;
    for (let t = 0; t < trials && Date.now() - t0 < ms; t++) {
      let cand = mutate(best, rng, kind);
      if (!cand) continue;
      let a;
      try {
        Engine.parseLevel(cand); // an edit must never make a level that does not load
        cand = trim(cand, CAP);
        Engine.parseLevel(cand);
        a = analyze(cand, CAP);
      } catch (e) { continue; }
      if (!a || a.capped || a.moves > 110 || !meets(kind, a)) continue;
      const w = worth(a);
      if (w < bestW + 0.5) continue;
      if (bestA.unique && !a.unique && w < bestW + 6) continue;
      try { if (!boxesNeeded(cand, CAP)) continue; } catch (e) { continue; }
      best = cand; bestA = a; bestW = w; kept++;
    }
    if (!kept) { parentPort.postMessage({ i: job.i }); return; }
    // no square to spare, as long as it costs nothing
    try {
      const tight = trim(tighten(kind, best, CAP), CAP);
      const a = analyze(tight, CAP);
      if (a && !a.capped && meets(kind, a) && worth(a) >= bestW - 0.5 && boxesNeeded(tight, CAP)) { best = tight; bestA = a; bestW = worth(a); }
    } catch (e) { /* keep the untightened one */ }
    parentPort.postMessage({ i: job.i, def: Object.assign(best, { sol: bestA.sol }), m: metrics(bestA), gain: +(bestW - start).toFixed(1), kept });
  });
} else if (require.main === module) {
  const secs = +process.argv[2] || 600;
  const WIDE = !!process.env.WIDE;
  const want = process.argv.slice(3);
  const HARD = ['pocket', 'carry', 'unpack', 'nest2', 'roomgoal', 'deep3', 'self', 'holes', 'crumble', 'colors', 'remote', 'oneway', 'daily', 'doorway',
    'ice', 'wind', 'pads', 'hungry', 'twins', 'mirror', 'sprouts'];
  const kinds = want.length ? want : HARD;
  const read = (f) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : []);
  const out = {}, jobs = [];
  for (const k of kinds) {
    out[k] = read(path.join(OUT, 'hard-' + k + '.json'));
    const done = new Set(out[k].map(c => c.from));
    const tried = new Set(read(path.join(OUT, 'hard-' + k + '.tried.json')));
    for (const c of read(path.join(OUT, 'pool-' + k + '.json'))) {
      const sig = sigOf(c.def);
      if (done.has(sig) || tried.has(sig)) continue;
      if (WIDE ? c.m.states > 170000 : c.m.states > 60000 || c.m.score < 6) continue;
      jobs.push({ kind: k, def: c.def, score: c.m.score, sig });
    }
    out[k].tried = tried;
  }
  // a fair share for every kind: best parents first, kinds taking turns
  const byKind = {};
  for (const j of jobs) (byKind[j.kind] || (byKind[j.kind] = [])).push(j);
  for (const k of Object.keys(byKind)) byKind[k].sort((a, b) => b.score - a.score);
  const order = [];
  for (let r = 0; order.length < jobs.length; r++) for (const k of Object.keys(byKind)) if (byKind[k][r]) order.push(byKind[k][r]);
  const until = Date.now() + secs * 1000;
  let next = 0, done = 0, made = 0;
  const save = () => {
    for (const k of kinds) {
      fs.writeFileSync(path.join(OUT, 'hard-' + k + '.json'), JSON.stringify(out[k]));
      fs.writeFileSync(path.join(OUT, 'hard-' + k + '.tried.json'), JSON.stringify([...out[k].tried]));
    }
  };
  const nW = Math.max(1, os.cpus().length - 1);
  let alive = nW;
  console.log('parents', order.length, 'workers', nW);
  for (let w = 0; w < nW; w++) {
    const worker = new Worker(__filename, { workerData: { harden: true, wide: WIDE } });
    const feed = () => {
      if (next < order.length && Date.now() < until) { const j = order[next]; worker.postMessage({ i: next, kind: j.kind, def: j.def, trials: 70, ms: WIDE ? 90000 : 45000 }); next++; }
      else worker.postMessage(null);
    };
    worker.on('message', (msg) => {
      const j = order[msg.i];
      done++;
      out[j.kind].tried.add(j.sig);
      if (msg.def) { made++; out[j.kind].push({ def: msg.def, m: msg.m, from: j.sig, gain: msg.gain }); }
      if (done % 25 === 0) { save(); console.log(done + '/' + order.length, 'made', made, Math.round((until - Date.now()) / 1000) + 's left'); }
      feed();
    });
    worker.on('error', (e) => console.error(e.message));
    worker.on('exit', () => {
      if (--alive) return;
      save();
      console.log('parents done', done, 'children', made);
      for (const k of kinds) {
        const s = out[k].map(c => c.m.score).sort((a, b) => a - b);
        const q = (p) => (s.length ? s[Math.floor(p * (s.length - 1))] : '-');
        console.log(k.padEnd(9), 'hard pool', String(out[k].length).padStart(4), ' unique', out[k].filter(c => c.m.unique).length, ' score min/med/p90/max', q(0), q(0.5), q(0.9), q(1));
      }
    });
    feed();
  }
}
