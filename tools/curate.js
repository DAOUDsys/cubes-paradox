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

/* ---------- worlds: which idea, how hard, how many ---------- */
// The first two worlds are easy, the next four medium, the rest hard.
// Every world ends with 3 challenge levels, and those are always hard.
// `alt` lists close kinds to borrow from when a pool runs short (never an unrelated idea).

// Doorways levels 3–6: one clear idea each, designed by hand (doors on the left and top of the room).
const LEFT_TOP_DOORS = ['##.##', '#...#', '....#', '#...#', '#####'];
const DOORWAYS_HAND = [
  { idea: { en: 'Walk in one door and out the other', ar: 'فوت من باب واطلع من الباب التاني' }, root: 'R', rooms: {
    R: { palette: 'navy', map: ['#######', '#...=.#', '###.###', '#P.A###', '#######', '#######', '#######'] },
    A: { palette: 'teal', map: LEFT_TOP_DOORS } } },
  { idea: { en: 'Line the box up under the gap, then go through it', ar: 'ظبّط الصندوق تحت الفتحة، وبعدين قطّع من جوّاه' }, root: 'R', rooms: {
    R: { palette: 'navy', map: ['#######', '#=...##', '####.##', '#PA..##', '#######', '#######', '#######'] },
    A: { palette: 'teal', map: LEFT_TOP_DOORS } } },
  { idea: { en: 'Boxes use doors too: send the yellow box through the room', ar: 'الصناديق كمان بتقطع من الأبواب: مرّق الصندوق الأصفر من جوّا الغرفة' }, root: 'R', rooms: {
    R: { palette: 'navy', map: ['######', '####_#', '####.#', '#P.bA#', '######', '######'] },
    A: { palette: 'teal', map: LEFT_TOP_DOORS } } },
  { idea: { en: 'Park the yellow box first, so the room stops on its spot', ar: 'حط الصندوق الأصفر أول، عشان الغرفة توقف على مكانها' }, root: 'R', rooms: {
    R: { palette: 'navy', map: ['#######', '#######', '#######', '#PA_.##', '#...b##', '###..##', '#######'] },
    A: { palette: 'teal', map: ['#####', '#...#', '....#', '#.=.#', '#####'] } } }
];

const BANDS = { easy: [22, 46], medium: [38, 64], hard: [55, 92] };
const CHALLENGE_BAND = [72, 140];
const CHALLENGES = 3;

const WORLDS = [
  { tier: 'easy', main: 5, tut: 'first', kinds: ['push'], alt: [] },
  { tier: 'easy', main: 12, tut: 'enter', kinds: ['doorway'], alt: [], hand: { at: 2, levels: DOORWAYS_HAND } },
  { tier: 'medium', main: 12, kinds: ['pocket'], alt: ['unpack'] },
  { tier: 'medium', main: 12, tut: 'carry', kinds: ['carry'], alt: [] },
  { tier: 'medium', main: 12, kinds: ['unpack'], alt: ['pocket'] },
  { tier: 'medium', main: 12, tut: 'nest', kinds: ['nest2'], alt: [] },
  { tier: 'hard', main: 12, kinds: ['roomgoal'], alt: [] },
  { tier: 'hard', main: 10, kinds: ['deep3'], alt: [] },
  { tier: 'hard', main: 12, tut: 'loop', kinds: ['self'], alt: [] },
  { tier: 'hard', main: 12, kinds: ['holes'], alt: [] },
  { tier: 'hard', main: 12, kinds: ['crumble'], alt: [] },
  { tier: 'hard', main: 12, kinds: ['colors'], alt: [] },
  { tier: 'hard', main: 12, kinds: ['remote'], alt: [] },
  { tier: 'hard', main: 12, kinds: ['oneway'], alt: [] }
];

const OUT2 = path.join(__dirname, 'out2');
const pool2 = (k) => {
  const f = path.join(OUT2, 'pool-' + k + '.json');
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : [];
};
const KINDS = [...new Set(WORLDS.flatMap(w => w.kinds.concat(w.alt)).concat('daily'))];
const pools = {};
for (const k of KINDS) pools[k] = pool2(k).filter(c => c.m.moves >= 6 && c.m.moves <= 95).sort((a, b) => a.m.score - b.m.score);

const used = new Set();
const sigOf = (c) => JSON.stringify(c.def.rooms);
const floorCount = (def) => Object.values(def.rooms).reduce((n, r) => n + r.map.join('').replace(/#/g, '').length, 0);
// a rough fingerprint of what the solution does, to keep two levels of one world from being the same idea twice
const shape = (c) => [c.m.pushes, c.m.enters, c.m.exits, c.m.maxDepth, c.m.drops, c.m.broken, Object.keys(c.def.rooms).length].join('/');
function tooClose(c, picked) {
  return picked.some(p => shape(p) === shape(c) && Math.abs(p.m.moves - c.m.moves) <= 3);
}

// n candidates spread over the band; hard ones should have a single solution and little slack
function pickSpread(list, n, band, hard, picked) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const target = band[0] + (band[1] - band[0]) * (n === 1 ? 0.5 : i / (n - 1));
    const cost = (c) => Math.abs(c.m.score - target) + 0.05 * floorCount(c.def) +
      (c.m.deadRatio < 0.3 ? 3 : 0) + (hard && !c.m.unique ? 10 : 0) + (hard ? Math.max(0, c.m.freedom - 4) : 0);
    let best = null;
    for (const c of list) {
      if (used.has(sigOf(c)) || tooClose(c, picked.concat(out))) continue;
      if (!best || cost(c) < cost(best)) best = c;
    }
    if (!best) break;
    used.add(sigOf(best));
    out.push(Object.assign({}, best));
  }
  return out;
}

/* ---------- the "idea" hint: one sentence about the key move ---------- */

const ROOM_WORDS = {
  en: { teal: 'green box', violet: 'purple box', pink: 'pink box', root: 'main room' },
  ar: { teal: 'الصندوق الأخضر', violet: 'الصندوق البنفسجي', pink: 'الصندوق الزهري', root: 'الغرفة الرئيسية' }
};
function ideaFor(def) {
  const Engine = require('../www/js/engine.js');
  const { level, state } = Engine.parseLevel(def);
  const room = (k, lang) => (k === level.root ? ROOM_WORDS[lang].root : ROOM_WORDS[lang][level.rooms[k].palette] || ROOM_WORDS[lang].teal);
  let st = state;
  const found = [];
  for (const ch of def.sol) {
    const res = Engine.move(st, level, 'URDL'.indexOf(ch));
    for (const o of res.state.objects) {
      const p = Engine.byId(st, o.id);
      if (o.kind === 'room' && p.room !== o.room) found.push([0, 'roomInRoom', o.ref, o.room]);
      else if (o.kind === 'box' && p.room !== o.room) {
        const holder = Engine.roomObject(st, p.room);
        if (holder && holder.room === o.room) found.push([2, 'boxOut', p.room]);
        else found.push([1, 'boxIn', o.room]);
      }
    }
    if (res.dropped.length) found.push([1, 'hole']);
    if (level.plates.length && !Engine.gatesOpen(st, level) && Engine.gatesOpen(res.state, level)) found.push([1, 'gate']);
    if (res.state.broken.length > st.broken.length) found.push([3, 'crack']);
    for (const ev of res.events) if (ev.type === 'enter') found.push([4, 'enter', ev.into]);
    for (const o of res.state.objects) {
      const p = Engine.byId(st, o.id);
      if (o.kind === 'room' && p.room === o.room && (p.x !== o.x || p.y !== o.y)) found.push([5, 'pushRoom', o.ref]);
    }
    st = res.state;
  }
  if (!found.length) return null;
  const best = found.reduce((a, b) => (b[0] <= a[0] ? b : a)); // same importance: the latest one, where things finally end up
  const [, type, a, b] = best;
  const MAKE = {
    roomInRoom: () => [`The ${room(a, 'en')} has to go inside the ${room(b, 'en')}`, `${room(a, 'ar')} لازم يفوت جوّا ${room(b, 'ar')}`],
    boxIn: () => [`A box has to end up inside the ${room(a, 'en')}`, `في صندوق لازم يفوت جوّا ${room(a, 'ar')}`],
    boxOut: () => [`Something has to come out of the ${room(a, 'en')}`, `في إشي لازم يطلع من ${room(a, 'ar')}`],
    hole: () => ['A box has to fill a hole before you can cross', 'لازم صندوق يعبّي الحفرة قبل ما تقطع'],
    gate: () => ['Something has to stay on the plate while you pass', 'لازم إشي يضل عالزر وإنت بتقطع'],
    crack: () => ['Cracked floor breaks behind you: plan one clean path', 'الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف'],
    enter: () => [`The way forward starts inside the ${room(a, 'en')}`, `الطريق بيبلش من جوّا ${room(a, 'ar')}`],
    pushRoom: () => [`The ${room(a, 'en')} has to move before anything else`, `${room(a, 'ar')} لازم يتحرك قبل أي إشي`]
  };
  const T = MAKE[type]();
  return { en: T[0], ar: T[1] };
}

/* ---------- pick the levels ---------- */

const levels = [];
let short = 0;
WORLDS.forEach((W, w) => {
  const picked = [];
  // the main levels, spread over the world's band
  const mainCount = W.main - (W.tut ? 1 : 0);
  for (const kind of W.kinds) {
    let got = pickSpread(pools[kind], mainCount, BANDS[W.tier], W.tier === 'hard', picked).map(x => Object.assign(x, { kind }));
    for (const alt of W.alt) {
      if (got.length >= mainCount) break;
      got = got.concat(pickSpread(pools[alt], mainCount - got.length, BANDS[W.tier], W.tier === 'hard', picked.concat(got)).map(x => Object.assign(x, { kind: alt })));
    }
    picked.push(...got);
  }
  picked.sort((a, b) => a.m.score - b.m.score);
  // the challenges: always hard, always from the world's own idea
  const top = pools[W.kinds[0]].filter(c => !used.has(sigOf(c))).sort((a, b) => b.m.score - a.m.score);
  const challenges = [];
  for (const c of top) {
    if (challenges.length >= CHALLENGES) break;
    if (tooClose(c, picked.concat(challenges))) continue;
    if (c.m.score < Math.min(CHALLENGE_BAND[0], (picked[picked.length - 1] || c).m.score)) break;
    used.add(sigOf(c));
    challenges.push(Object.assign({}, c, { kind: W.kinds[0] }));
  }
  challenges.sort((a, b) => a.m.score - b.m.score);
  const missing = mainCount - picked.length + CHALLENGES - challenges.length;
  if (missing > 0) { short += missing; console.log(`world ${w + 1}: ${missing} short`); }

  const list = [];
  if (W.tut) {
    const tdef = JSON.parse(JSON.stringify(T[W.tut]));
    const a = analyze(tdef);
    list.push({ def: Object.assign(tdef, { sol: a.sol }), m: { moves: a.moves, score: 0 }, kind: 'tutorial' });
  }
  for (const p of picked) list.push(p);
  for (const c of challenges) list.push(Object.assign(c, { challenge: true }));
  // hand-made levels take fixed places in the world
  if (W.hand) {
    list.splice(W.hand.at, W.hand.levels.length, ...W.hand.levels.map((h) => {
      const def = JSON.parse(JSON.stringify(h));
      const a = analyze(def);
      return { def: Object.assign(def, { sol: a.sol }), m: { moves: a.moves, score: 0, unique: a.unique }, kind: 'hand' };
    }));
  }
  list.forEach((x, n) => {
    const d = x.def;
    if (n > 0) { delete d.name; delete d.tip; }
    d.idea = d.idea || ideaFor(d);
    levels.push(Object.assign(x, { w, n }));
  });
});

// daily puzzles: hard ones nobody meets in the worlds
const dailyPool = pools.daily.concat(...KINDS.filter(k => k !== 'daily').map(k => pools[k].filter(c => c.m.score >= 68)))
  .filter(c => !used.has(sigOf(c)) && c.m.score >= 62 && c.m.unique)
  .sort((a, b) => sigOf(a) < sigOf(b) ? -1 : 1);
const daily = [];
for (const c of dailyPool) {
  if (daily.length >= 90) break;
  if (used.has(sigOf(c))) continue;
  used.add(sigOf(c));
  const d = JSON.parse(JSON.stringify(c.def));
  d.id = 'd' + (daily.length + 1);
  d.idea = ideaFor(d);
  daily.push({ def: d, m: c.m });
}
// shuffle deterministically so hard kinds alternate
for (let i = daily.length - 1, s = 7; i > 0; i--) { s = (s * 1103515245 + 12345) % 2147483648; const j = s % (i + 1); [daily[i], daily[j]] = [daily[j], daily[i]]; }

// final check: every stored solution replays to a win
let bad = 0;
levels.forEach((x, i) => {
  x.def.id = i + 1;
  if (!verify(x.def)) { bad++; console.log('BAD solution at level', i + 1); }
});
for (const x of daily) if (!verify(x.def)) { bad++; console.log('BAD daily', x.def.id); }

function emit(d, extra) {
  const lines = ['  {'];
  lines.push(`    ${extra}`);
  if (d.name) lines.push(`    name: ${JSON.stringify(d.name)},`);
  if (d.tip) lines.push(`    tip: ${JSON.stringify(d.tip)},`);
  if (d.idea) lines.push(`    idea: ${JSON.stringify(d.idea)},`);
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
}
const wrap = (name, what, body) => `/* Cubes Paradox ${what} (written by tools/curate.js — edit there or here, then run \`npm run solve\`).
   Symbols: # wall  . floor  P player  b box  t teal box  u purple box  _ box goal  = player goal
   Any other capital letter is a box that holds the room with that key. Rooms must be square.
   terrain (optional, same size): ~ ice  o plate  | gate  ^ > v < one-way arrows  O hole  x crumbling floor
   sol = a known solution (U R D L), used for hints; idea = the first hint step. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.${name} = factory();
})(this, function () {
  'use strict';
  return [
${body}
  ];
});
`;
fs.writeFileSync(path.join(__dirname, '../www/js/levels.js'),
  wrap('LEVELS', 'levels', levels.map(x => emit(x.def, `id: ${x.def.id}, w: ${x.w}, n: ${x.n},`)).join(',\n')));
fs.writeFileSync(path.join(__dirname, '../www/js/daily.js'),
  wrap('DAILY', 'daily puzzles', daily.map(x => emit(x.def, `id: '${x.def.id}',`)).join(',\n')));

console.log(`wrote ${levels.length} levels and ${daily.length} daily puzzles, ${bad} bad, ${short} short`);
WORLDS.forEach((W, w) => {
  const ls = levels.filter(x => x.w === w);
  const sc = ls.filter(x => x.kind !== 'tutorial').map(x => Math.round(x.m.score));
  const uq = ls.filter(x => x.m.unique).length;
  console.log(`world ${String(w + 1).padStart(2)} ${W.tier.padEnd(6)} ${String(ls.length).padStart(2)} levels  score ${sc[0]}→${sc[sc.length - 1]}  moves ${Math.min(...ls.map(x => x.m.moves))}–${Math.max(...ls.map(x => x.m.moves))}  unique ${uq}  kinds ${[...new Set(ls.map(x => x.kind))].join(',')}`);
});
