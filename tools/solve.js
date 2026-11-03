// Checks every level: BFS finds the shortest solution, and the stored solution (used for hints)
// replays to a win. Run: npm run solve
const path = require('path');
const Engine = require(path.join(__dirname, '../www/js/engine.js'));
const LEVELS = require(path.join(__dirname, '../www/js/levels.js'));
const DAILY = require(path.join(__dirname, '../www/js/daily.js'));
const { verify } = require('./analyze.js');
const ALL = LEVELS.concat(DAILY);

const NAMES = ['U', 'R', 'D', 'L'];
let failed = 0;
const t0 = Date.now();

for (const def of ALL) {
  const label = def.w === undefined ? `Daily ${def.id}` : `Level ${String(def.id).padStart(3)} (world ${def.w + 1}, #${def.n + 1})`;
  const { level, state } = Engine.parseLevel(def);
  const seen = new Map([[Engine.key(state), null]]);
  const queue = [state];
  let found = null;
  for (let i = 0; i < queue.length && !found; i++) {
    const st = queue[i];
    for (let d = 0; d < 4; d++) {
      const res = Engine.move(st, level, d);
      if (!res) continue;
      const k = Engine.key(res.state);
      if (seen.has(k)) continue;
      seen.set(k, { prev: Engine.key(st), d });
      if (Engine.isWin(res.state, level)) { found = k; break; }
      queue.push(res.state);
    }
    if (queue.length > 2e6) break;
  }
  if (!found) {
    failed++;
    console.log(`${label}: NO SOLUTION — explored ${seen.size} states`);
    continue;
  }
  const moves = [];
  let k = found;
  while (seen.get(k)) { moves.push(NAMES[seen.get(k).d]); k = seen.get(k).prev; }
  moves.reverse();
  const stored = def.sol ? (verify(def) ? 'stored ok' : 'STORED SOLUTION FAILS') : 'no stored solution';
  if (def.sol && !verify(def)) failed++;
  console.log(`${label}: ${moves.length} moves, ${seen.size} states, ${stored}`);
}
console.log(`\n${ALL.length - failed}/${ALL.length} levels OK (${LEVELS.length} world levels + ${DAILY.length} daily) in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
process.exit(failed ? 1 : 0);
