// Picks the final levels from the generator pools (tools/out) and writes www/js/levels.js.
// Run: node tools/curate.js
const path = require('path');
const fs = require('fs');
const { analyze, verify } = require('./analyze.js');

const OUT = path.join(__dirname, 'out');
const pool = (k) => {
  const f = path.join(OUT, 'pool-' + k + '.json');
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : [];
};

/* ---------- the five hand-made tutorial levels ---------- */

const T = {
  first: {
    name: { en: 'First Push', ar: 'أول دفعة' },
    tip: { en: 'Push the yellow boxes onto the dotted squares', ar: 'ادفع الصناديق الصفرا لحد المربعات المنقّطة' },
    root: 'R',
    rooms: { R: { palette: 'navy', map: ['#######', '#.....#', '#.P.b.#', '#.....#', '#.b...#', '#._._.#', '#######'] } }
  },
  enter: {
    name: { en: 'First Step In', ar: 'الدخلة الأولى' },
    tip: { en: 'If the green box can’t move, you walk into it', ar: 'الصندوق الأخضر إذا ما قدر يتحرك، بتفوت جوّاه' },
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: ['#######', '#######', '#P.A###', '###.###', '###.b_#', '###..=#', '#######'] },
      A: { palette: 'teal', map: ['#####', '#...#', '....#', '#...#', '##.##'] }
    }
  },
  carry: {
    name: { en: 'Box in a Box', ar: 'صندوق بالصندوق' },
    tip: { en: 'Plain boxes can go inside the green box too', ar: 'حتى الصناديق العادية بتفوت جوّا الصندوق الأخضر' },
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: ['#######', '#.....#', '#.P...#', '#.b.A##', '#.....#', '#=....#', '#######'] },
      A: { palette: 'teal', map: ['#####', '#...#', '.._.#', '#...#', '#####'] }
    }
  },
  nest: {
    name: { en: 'Inside Inside', ar: 'جوّا الجوّا' },
    tip: { en: 'Put the green box in the purple one… then walk into the green one', ar: 'حط الأخضر جوّا البنفسجي… وبعدين فوت إنت جوّا الأخضر' },
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: ['#######', '#.....#', '#.P.A.#', '#.....#', '#...C##', '#.....#', '#######'] },
      C: { palette: 'violet', map: ['##.##', '#...#', '#._##', '#...#', '#####'] },
      A: { palette: 'teal', map: ['#####', '#...#', '..=.#', '#...#', '#####'] }
    }
  },
  loop: {
    name: { en: 'Endless', ar: 'بلا نهاية' },
    tip: { en: 'This room is inside itself. Leave through the top gap and see where you end up', ar: 'هالغرفة جوّا حالها. اطلع من الفتحة اللي فوق وشوف وين بتوصل' },
    root: 'V',
    rooms: { V: { palette: 'violet', map: ['###.###', '#.....#', '#_.b..#', '#..P..#', '#######', '###=###', '###V###'] } }
  }
};

/* ---------- worlds: size, which pools, difficulty band ---------- */
// The last 3 levels of every world are optional challenges (the hardest picks).
// `alt` lists kinds to borrow from when a pool runs short.

const WORLDS = [
  { palette: 'workshop',    size: 16, tut: 'first', take: [['push', 15]], band: [28, 68], alt: ['ice'] },
  { palette: 'greenhouse',  size: 18, tut: 'enter', take: [['enter', 17]], band: [30, 74], alt: ['carry'] },
  { palette: 'warehouse',   size: 18, tut: 'carry', take: [['carry', 9], ['unpack', 8]], band: [32, 78], alt: ['carry', 'unpack'] },
  { palette: 'well',        size: 18, tut: 'nest', take: [['nest', 17]], band: [34, 82], alt: ['nestnew'] },
  { palette: 'violet',      size: 18, tut: 'loop', take: [['loop', 17]], band: [32, 70], alt: ['loopnew'] },
  { palette: 'ice',         size: 18, take: [['ice', 18]], band: [26, 70], alt: ['arrowice'] },
  { palette: 'power',       size: 20, take: [['plate', 20]], band: [24, 66], alt: ['icegate'] },
  { palette: 'factory',     size: 20, take: [['arrow', 20]], band: [26, 70], alt: ['arrowice'] },
  { palette: 'lake',        size: 20, take: [['iceroom', 20]], band: [40, 78], alt: ['mixnew'] },
  { palette: 'control',     size: 20, take: [['plateroom', 20]], band: [32, 76], alt: ['mixnew'] },
  { palette: 'conveyor',    size: 20, take: [['arrowroom', 20]], band: [34, 80], alt: ['mixnew'] },
  { palette: 'glacier',     size: 20, take: [['icegate', 20]], band: [28, 66], alt: ['plate'] },
  { palette: 'maze',        size: 20, take: [['arrowice', 20]], band: [34, 80], alt: ['arrow'] },
  { palette: 'echo',        size: 20, take: [['loopnew', 20]], band: [36, 78], alt: ['loop'] },
  { palette: 'freeze',      size: 20, take: [['nestnew', 20]], band: [40, 84], alt: ['nest'] },
  { palette: 'observatory', size: 20, take: [['mixnew', 20]], band: [46, 88], alt: ['bigmix', 'mix'] },
  { palette: 'labyrinth',   size: 22, take: [['bigmix', 12], ['mix', 10]], band: [52, 94], alt: ['mixnew'] },
  { palette: 'paradox',     size: 22, take: [['bigmix', 8], ['mixnew', 6], ['nestnew', 4], ['mix', 4]], band: [64, 110], alt: ['iceroom', 'arrowroom', 'nest'] }
];

const KINDS = ['push', 'enter', 'carry', 'unpack', 'nest', 'loop', 'mix', 'ice', 'iceroom', 'plate', 'plateroom', 'arrow', 'arrowroom', 'mixnew', 'icegate', 'arrowice', 'loopnew', 'nestnew', 'bigmix'];
const used = new Set();
const pools = {};
for (const k of KINDS) pools[k] = pool(k).filter(c => c.m.moves <= 110 && c.m.moves >= 6).sort((a, b) => a.m.score - b.m.score);

const floorCount = (def) => Object.values(def.rooms).reduce((n, r) => n + r.map.join('').replace(/#/g, '').length, 0);
const sigOf = (c) => JSON.stringify(c.def.rooms);

// pick n candidates spread evenly over the band (closest unused score to each target)
function pickSpread(list, n, band) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const target = band[0] + (band[1] - band[0]) * (n === 1 ? 0.5 : i / (n - 1));
    // close to the target score, but prefer small tidy maps with real traps
    const cost = (c) => Math.abs(c.m.score - target) + 0.06 * floorCount(c.def) + (c.m.deadRatio < 0.3 ? 3 : 0);
    let best = null;
    for (const c of list) {
      if (used.has(sigOf(c))) continue;
      if (!best || cost(c) < cost(best)) best = c;
    }
    if (!best) break;
    used.add(sigOf(best));
    out.push(Object.assign({}, best));
  }
  return out;
}

const levels = [];
let short = 0;
WORLDS.forEach((W, w) => {
  let picked = [];
  for (const [kind, n] of W.take) {
    let got = pickSpread(pools[kind], n, W.band).map(x => Object.assign(x, { kind }));
    for (const alt of W.alt) {
      if (got.length >= n) break;
      got = got.concat(pickSpread(pools[alt], n - got.length, W.band).map(x => Object.assign(x, { kind: alt })));
    }
    if (got.length < n) { short += n - got.length; console.log(`world ${w + 1}: only ${got.length}/${n} ${kind}`); }
    picked = picked.concat(got);
  }
  picked.sort((a, b) => a.m.score - b.m.score);
  const list = [];
  if (W.tut) {
    const tdef = JSON.parse(JSON.stringify(T[W.tut]));
    const a = analyze(tdef);
    list.push({ def: Object.assign(tdef, { sol: a.sol }), m: { moves: a.moves, score: 0 }, kind: 'tutorial' });
  }
  for (const p of picked) list.push(p);
  list.forEach((x, n) => {
    const d = x.def;
    // the main room takes the world's colors
    d.rooms[d.root].palette = W.palette;
    if (n > 0) { delete d.name; delete d.tip; }
    levels.push(Object.assign(x, { w, n }));
  });
});

// final check: every stored solution replays to a win
let bad = 0;
levels.forEach((x, i) => {
  x.def.id = i + 1;
  if (!verify(x.def)) { bad++; console.log('BAD solution at level', i + 1); }
});

const body = levels.map(x => {
  const d = x.def;
  const lines = ['  {'];
  lines.push(`    id: ${d.id}, w: ${x.w}, n: ${x.n},`);
  if (d.name) lines.push(`    name: ${JSON.stringify(d.name)},`);
  if (d.tip) lines.push(`    tip: ${JSON.stringify(d.tip)},`);
  lines.push(`    root: '${d.root}',`);
  lines.push('    rooms: {');
  const keys = Object.keys(d.rooms);
  keys.forEach((k, j) => {
    const r = d.rooms[k];
    lines.push(`      ${k}: { palette: '${r.palette}', map: [`);
    lines.push(r.map.map(row => `        '${row}'`).join(',\n'));
    if (r.terrain) {
      lines.push('      ], terrain: [');
      lines.push(r.terrain.map(row => `        '${row}'`).join(',\n'));
    }
    lines.push('      ] }' + (j < keys.length - 1 ? ',' : ''));
  });
  lines.push('    },');
  lines.push(`    sol: '${d.sol}'`);
  lines.push('  }');
  return lines.join('\n');
}).join(',\n');

const file = `/* Cubes Paradox levels (written by tools/curate.js — edit there or here, then run \`npm run solve\`).
   Symbols: # wall  . floor  P player  b box  _ box goal  = player goal
   Any other capital letter is a box that holds the room with that key. Rooms must be square.
   terrain (optional, same size): ~ ice  o plate  | gate  ^ > v < one-way arrows
   w = world (0-based), n = place in the world. sol = a known solution (U R D L), used for hints. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.LEVELS = factory();
})(this, function () {
  'use strict';
  return [
${body}
  ];
});
`;
fs.writeFileSync(path.join(__dirname, '../www/js/levels.js'), file);
console.log(`wrote ${levels.length} levels, ${bad} bad, ${short} missing`);
WORLDS.forEach((W, w) => {
  const ls = levels.filter(x => x.w === w);
  const sc = ls.map(x => Math.round(x.m.score));
  const mv = ls.map(x => x.m.moves);
  console.log(`world ${String(w + 1).padStart(2)} ${W.palette.padEnd(12)} ${ls.length} levels  score ${sc[1] || sc[0]}→${sc[sc.length - 1]}  moves ${Math.min(...mv)}–${Math.max(...mv)}  kinds ${[...new Set(ls.map(x => x.kind))].join(',')}`);
});
