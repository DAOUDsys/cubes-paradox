// Measures every level in the pools again (tools/out2) after the measures in analyze.js change.
// Run: node tools/remeasure.js
const path = require('path');
const fs = require('fs');
const os = require('os');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const OUT = path.join(__dirname, 'out2');

if (!isMainThread) {
  const { analyze } = require('./analyze.js');
  const { metrics } = require('./gen.js');
  parentPort.on('message', (job) => {
    if (!job) { process.exit(0); }
    let m = null;
    try { const a = analyze(job.def, 400000); if (a) m = metrics(a); } catch (e) { m = null; }
    parentPort.postMessage({ i: job.i, m });
  });
} else {
  const files = fs.readdirSync(OUT).filter(f => /^pool-.*\.json$/.test(f));
  const pools = {}, jobs = [];
  for (const f of files) {
    pools[f] = JSON.parse(fs.readFileSync(path.join(OUT, f), 'utf8'));
    pools[f].forEach((c, k) => jobs.push({ f, k, def: c.def }));
  }
  // biggest first, so the slow ones do not all land at the end
  jobs.sort((a, b) => (pools[b.f][b.k].m.states || 0) - (pools[a.f][a.k].m.states || 0));
  let next = 0, done = 0, lost = 0;
  const t0 = Date.now();
  const nW = Math.max(1, os.cpus().length - 1);
  let alive = nW;
  for (let w = 0; w < nW; w++) {
    const worker = new Worker(__filename);
    const feed = () => { if (next < jobs.length) { worker.postMessage({ i: next, def: jobs[next].def }); next++; } else { worker.postMessage(null); } };
    worker.on('message', (msg) => {
      const j = jobs[msg.i];
      if (msg.m) pools[j.f][j.k].m = msg.m; else { pools[j.f][j.k].lost = true; lost++; }
      done++;
      if (done % 200 === 0) console.log(done + '/' + jobs.length, Math.round((Date.now() - t0) / 1000) + 's');
      feed();
    });
    worker.on('exit', () => {
      if (--alive) return;
      for (const f of files) fs.writeFileSync(path.join(OUT, f), JSON.stringify(pools[f].filter(c => !c.lost)));
      console.log('measured', done, 'lost', lost, Math.round((Date.now() - t0) / 1000) + 's');
    });
    feed();
  }
}
