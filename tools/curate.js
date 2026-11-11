// Picks the final levels from the pools (tools/out2) and writes www/js/levels.js and www/js/daily.js.
// Run: node tools/curate.js
//
// How hard a level is comes from gen.js `score`: the choices and traps on the way to the solution,
// not the number of steps. A world is a ladder: each level asks for more than the one before it,
// in how hard it is and in how much it uses the world's idea, and no rung repeats another.
const path = require('path');
const fs = require('fs');
const { analyze, verify } = require('./analyze.js');
const { score } = require('./gen.js');

/* ---------- the hand-made tutorial levels ---------- */

const T = {
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

// the first level of each of worlds 15-21 (tools/tutorials.js), keyed by the world's kind
Object.assign(T, require('./tutorials.js'));

// Doorways: one clear idea each, designed by hand (doors on the left and top of the room).
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

/* ---------- worlds ---------- */
// World 1 is easy and stays exactly as it is (tools/world1.json). World 2 is medium. Every world after it is
// hard: its first level shows the idea, and from the second level on every level is hard.
// Every world ends with 3 challenge levels, the hardest of its idea.
// `main` counts the levels before the challenges. `uses` says how much a solution uses the world's idea.
const MEDIUM = [10, 21];      // score band of a medium level
const HARD_MIN = 22;          // a hard level scores at least this, has one solution, and has real traps
const CHALLENGES = 3;

const U = (m) => m.uses || {};
const WORLDS = [
  { tier: 'easy', frozen: 'world1.json' },
  { tier: 'medium', main: 12, tut: 'enter', hand: DOORWAYS_HAND, kind: 'doorway', uses: (m) => m.enters + m.exits + (U(m).roomPush ? 1 : 0) },
  { tier: 'hard', main: 12, kind: 'pocket', uses: (m) => 2 * (U(m).pocket || 0) + (U(m).boxIn || 0) },
  { tier: 'hard', main: 12, tut: 'carry', kind: 'carry', uses: (m) => Math.ceil((U(m).carry || 0) / 2) + (U(m).boxIn || 0) },
  { tier: 'hard', main: 12, kind: 'unpack', uses: (m) => 2 * (U(m).unpack || 0) + (m.pistons || 0) },
  { tier: 'hard', main: 12, tut: 'nest', kind: 'nest2', uses: (m) => 2 * (U(m).roomIn || 0) + m.maxDepth },
  { tier: 'hard', main: 12, kind: 'roomgoal', uses: (m) => Math.ceil((U(m).roomPush || 0) / 2) + m.enters },
  { tier: 'hard', main: 10, kind: 'deep3', uses: (m) => 2 * m.boxDive + m.maxDepth + (U(m).boxIn || 0) + (U(m).unpack || 0) },
  { tier: 'hard', main: 12, tut: 'loop', kind: 'self', uses: (m) => m.exits + m.enters },
  { tier: 'hard', main: 12, kind: 'holes', uses: (m) => 3 * m.drops + m.enters },
  { tier: 'hard', main: 9, kind: 'crumble', uses: (m) => m.broken },
  { tier: 'hard', main: 10, kind: 'colors', uses: (m) => 2 * (U(m).boxIn || 0) + m.enters },
  { tier: 'hard', main: 12, kind: 'remote', uses: (m) => (U(m).gate || 0) + m.enters },
  { tier: 'hard', main: 9, kind: 'oneway', uses: (m) => (U(m).arrow || 0) },
  // worlds 15-21 (1.6.0): each starts with its hand-made first level
  { tier: 'hard', main: 12, tut: 'ice', kind: 'ice', uses: (m) => m.slides + m.enters },
  { tier: 'hard', main: 12, tut: 'wind', kind: 'wind', uses: (m) => (U(m).wind || 0) },
  { tier: 'hard', main: 12, tut: 'pads', kind: 'pads', uses: (m) => (U(m).pad || 0) },
  { tier: 'hard', main: 12, tut: 'hungry', kind: 'hungry', uses: (m) => 2 * (U(m).eat || 0) + m.enters },
  { tier: 'hard', main: 12, tut: 'twins', kind: 'twins', uses: (m) => 2 * (U(m).twin || 0) + m.exits },
  { tier: 'hard', main: 12, tut: 'mirror', kind: 'mirror', uses: (m) => (U(m).flip || 0) },
  { tier: 'hard', main: 12, tut: 'sprouts', kind: 'sprouts', uses: (m) => (U(m).split || 0) }
];

/* ---------- pools ---------- */

const OUT2 = path.join(__dirname, 'out2');
const read = (f) => (fs.existsSync(path.join(OUT2, f)) ? JSON.parse(fs.readFileSync(path.join(OUT2, f), 'utf8')) : []);
const sigOf = (c) => JSON.stringify(c.def.rooms);
// a level made harder by tools/harden.js and the level it was made from look alike: one family, used once
const family = (c) => c.from || sigOf(c);
const KINDS = [...new Set(WORLDS.filter(w => w.kind).map(w => w.kind).concat('daily'))];
const pools = {};
for (const k of KINDS) {
  pools[k] = read('pool-' + k + '.json').concat(read('hard-' + k + '.json'))
    .filter(c => c.m.moves >= 6 && c.m.moves <= 95)
    .map(c => Object.assign(c, { kind: k }));
}
const usedFamilies = new Set();
const free = (c) => !usedFamilies.has(family(c));
const take = (c) => { usedFamilies.add(family(c)); return Object.assign({}, c); };

// truly hard: scores high, has one solution, and has several places where a wrong choice loses
const isHard = (c) => c.m.score >= HARD_MIN && c.m.unique && c.m.trapSteps >= 3 && c.m.choices >= 6;
// a rough fingerprint of what the solution does, to keep two levels of one world from being the same thing twice
const shape = (c) => [c.m.pushes, c.m.enters, c.m.exits, c.m.maxDepth, c.m.drops, c.m.broken, Object.keys(c.def.rooms).length]
  .concat(['wind', 'pad', 'eat', 'twin', 'flip', 'split'].map(k => U(c.m)[k] || 0)).join('/');
const tooClose = (c, picked) => picked.some(p => shape(p) === shape(c) && Math.abs(p.m.moves - c.m.moves) <= 3);
// when two do the same job, the shorter one is the better puzzle
const better = (a, b) => (b.m.score - a.m.score) || (a.m.moves - b.m.moves);

// one per family and one per fingerprint: the best of each
function distinct(list) {
  const out = [], fams = new Set();
  for (const c of list.slice().sort(better)) {
    if (fams.has(family(c)) || tooClose(c, out)) continue;
    fams.add(family(c));
    out.push(c);
  }
  return out;
}

// The ladder: n levels, each harder than the one before (by at least `gap`) and using the idea at least
// as much. Finds the longest such chain, then takes n rungs spread evenly along it. When the pool cannot
// give a chain that long, the idea is allowed to dip by `slack` between two rungs, as little as it takes.
function ladder(list, n, uses, gap) {
  const c = list.slice().sort((a, b) => a.m.score - b.m.score);
  if (!c.length || n <= 0) return { rungs: [], slack: 0 };
  for (const slack of [0, 1, 2, 3, 5, 8, Infinity]) {
    const len = c.map(() => 1), prev = c.map(() => -1);
    for (let i = 0; i < c.length; i++) for (let j = 0; j < i; j++) {
      if (c[i].m.score - c[j].m.score < gap || uses(c[i].m) < uses(c[j].m) - slack) continue;
      if (len[j] + 1 > len[i]) { len[i] = len[j] + 1; prev[i] = j; }
    }
    let end = 0;
    for (let i = 1; i < c.length; i++) if (len[i] >= len[end]) end = i;
    const chain = [];
    for (let k = end; k >= 0; k = prev[k]) chain.push(c[k]);
    chain.reverse();
    if (chain.length < n && slack !== Infinity) continue;
    const m = Math.min(n, chain.length), rungs = [];
    for (let i = 0; i < m; i++) rungs.push(chain[m === 1 ? 0 : Math.round(i * (chain.length - 1) / (m - 1))]);
    return { rungs, slack };
  }
}

/* ---------- the "idea" hint: one sentence about the key move ---------- */

const ROOM_WORDS = {
  en: { teal: 'green box', violet: 'purple box', pink: 'pink box', root: 'main room' },
  ar: { teal: 'الصندوق الأخضر', violet: 'الصندوق البنفسجي', pink: 'الصندوق الزهري', root: 'الغرفة الرئيسية' }
};
// the first hint of a level from worlds 15-21 names that world's idea (texts fixed with Daoud's wording in i18n)
const NEW_IDEAS = {
  ice: ['slides', { en: 'Let the ice carry it: aim before you push', ar: 'خلّي الجليد يوصّله: صوّب قبل ما تدفش' }],
  wind: ['wind', { en: 'Let the wind do the last step for you', ar: 'خلّي الريح تعمل آخر خطوة عنك' }],
  pads: ['pad', { en: 'Something has to go through a jump pad', ar: 'في إشي لازم يمرق من بلاطة النقل' }],
  hungry: ['eat', { en: 'The hungry room has to swallow a box', ar: 'الغرفة الجوعانة لازم تبلع صندوق' }],
  twins: ['twin', { en: 'Go in through the twin, come out of the first box', ar: 'فوت من التوأم، واطلع من الصندوق الأصلي' }],
  mirror: ['flip', { en: 'Use the mirror room to come out on the other side', ar: 'استعمل غرفة المرآة عشان تطلع من الجهة التانية' }],
  sprouts: ['split', { en: 'Use a wall to move one sprout without the other', ar: 'استعمل الحيط عشان تحرّك نبتة بدون التانية' }]
};
function ideaFor(def, kind, m) {
  const ni = NEW_IDEAS[kind];
  if (ni && m && (ni[0] === 'slides' ? m.slides : (m.uses || {})[ni[0]])) return Object.assign({}, ni[1]);
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
  const T2 = MAKE[type]();
  return { en: T2[0], ar: T2[1] };
}

/* ---------- pick the levels ---------- */

// A main room that is not a box itself can sit anywhere in its square: put what is in it in the middle.
// Nothing about the puzzle changes, it only looks balanced on the board.
function centerRoot(def) {
  const R = def.rooms[def.root];
  if (Object.values(def.rooms).some(r => r.map.some(row => row.indexOf(def.root) !== -1))) return def;
  const n = R.map.length;
  let x0 = n, y0 = n, x1 = -1, y1 = -1;
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (R.map[y][x] !== '#') { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  if (x1 < 0 || x0 === 0 || y0 === 0 || x1 === n - 1 || y1 === n - 1) return def;
  const dx = Math.floor((n - (x1 - x0 + 1)) / 2) - x0, dy = Math.floor((n - (y1 - y0 + 1)) / 2) - y0;
  if (!dx && !dy) return def;
  const shift = (rows, fill) => rows.map((_, y) => {
    let out = '';
    for (let x = 0; x < n; x++) { const sx = x - dx, sy = y - dy; out += sx >= 0 && sy >= 0 && sx < n && sy < n ? rows[sy][sx] : fill; }
    return out;
  });
  R.map = shift(R.map, '#');
  if (R.terrain) R.terrain = shift(R.terrain, '.');
  return def;
}

const handLevel = (src, kind) => {
  const def = JSON.parse(JSON.stringify(src));
  const a = analyze(def);
  return { def: Object.assign(def, { sol: a.sol }), m: { moves: a.moves, score: score(a), unique: a.unique }, kind };
};

const levels = [];
const report = [];
let short = 0;
WORLDS.forEach((W, w) => {
  const list = []; // { def, m, kind, d } in order; d = 1 easy, 2 medium, 3 hard
  if (W.frozen) {
    // exactly as they are; only the difficulty squares are new
    const frozen = JSON.parse(fs.readFileSync(path.join(__dirname, W.frozen), 'utf8'));
    frozen.forEach((def, n) => {
      const d = JSON.parse(JSON.stringify(def));
      delete d.id; delete d.w; delete d.n; delete d.d;
      const a = analyze(d);
      list.push({ def: d, m: { moves: a.moves, score: score(a), unique: a.unique }, kind: 'frozen', d: n >= frozen.length - CHALLENGES ? 3 : 1, keep: true });
    });
  } else {
    const pool = pools[W.kind].filter(free);
    const hardOnes = distinct(pool.filter(isHard));
    // the challenges: the hardest of the world's idea
    const challenges = hardOnes.slice(0, CHALLENGES).sort((a, b) => a.m.score - b.m.score);
    const ceiling = challenges.length ? challenges[0].m.score : Infinity;
    const intro = [];
    if (W.tut) intro.push(Object.assign(handLevel(T[W.tut], 'tutorial'), { d: 1 }));
    if (W.tut && NEW_IDEAS[W.tut]) intro[0].def.idea = Object.assign({}, NEW_IDEAS[W.tut][1]);
    for (const h of W.hand || []) intro.push(Object.assign(handLevel(h, 'hand'), { d: 1 }));
    let body, slack;
    if (W.tier === 'medium') {
      const mediums = distinct(pool.filter(c => c.m.score >= MEDIUM[0] && c.m.score < MEDIUM[1] && c.m.trapSteps >= 1 && challenges.indexOf(c) === -1));
      ({ rungs: body, slack } = ladder(mediums, W.main - intro.length, W.uses, 0.8));
      body.forEach(c => { c.d = 2; });
    } else {
      // a world without a hand-made first level starts with the gentlest level of its idea
      if (!intro.length) {
        const gentle = pool.filter(c => c.m.score >= 7 && c.m.score < 16 && c.m.unique && W.uses(c.m) > 0 && c.m.moves <= 30)
          .sort((a, b) => (a.m.macro - b.m.macro) || (a.m.moves - b.m.moves))[0];
        if (gentle) intro.push(Object.assign(take(gentle), { d: 2 }));
      }
      const rest = hardOnes.filter(c => challenges.indexOf(c) === -1 && c.m.score < ceiling && free(c));
      ({ rungs: body, slack } = ladder(rest, W.main - intro.length, W.uses, 1));
      body.forEach(c => { c.d = 3; });
    }
    for (const c of intro) list.push(c);
    for (const c of body) list.push(Object.assign(take(c), { d: c.d }));
    for (const c of challenges) list.push(Object.assign(take(c), { d: 3, challenge: true }));
    const missing = W.main + CHALLENGES - list.length;
    if (missing > 0) { short += missing; console.log(`world ${w + 1}: ${missing} short`); }
    const us = body.map(c => W.uses(c.m));
    report.push({ w, slack, uses: us.join(' '), pool: pool.length, hard: hardOnes.length });
  }
  list.forEach((x, n) => {
    const d = x.def;
    if (!x.keep) {
      if (n > 0) { delete d.name; delete d.tip; }
      d.idea = d.idea || ideaFor(d, x.kind, x.m);
      if (x.kind !== 'tutorial' && x.kind !== 'hand') centerRoot(d);
    }
    levels.push(Object.assign(x, { w, n }));
  });
});

// daily puzzles: hard ones nobody meets in the worlds, a different idea each day
const dailyPool = distinct([].concat(...KINDS.map(k => pools[k])).filter(c => free(c) && isHard(c) && c.m.score >= HARD_MIN + 2))
  .sort((a, b) => (sigOf(a) < sigOf(b) ? -1 : 1));
const daily = [];
{
  // take turns between the ideas, so two days in a row are not the same kind
  const byKind = {};
  for (const c of dailyPool) (byKind[c.kind] || (byKind[c.kind] = [])).push(c);
  const order = Object.keys(byKind).sort();
  for (let r = 0; daily.length < 90 && order.some(k => byKind[k][r]); r++) {
    for (const k of order) {
      const c = byKind[k][r];
      if (!c || daily.length >= 90 || !free(c)) continue;
      const x = take(c);
      const d = centerRoot(JSON.parse(JSON.stringify(x.def)));
      d.idea = ideaFor(d, k, x.m);
      daily.push({ def: d, m: x.m, kind: k });
    }
  }
  // shuffle deterministically, then spread the kinds again
  for (let i = daily.length - 1, s = 7; i > 0; i--) { s = (s * 1103515245 + 12345) % 2147483648; const j = s % (i + 1); [daily[i], daily[j]] = [daily[j], daily[i]]; }
  for (let i = 1; i < daily.length; i++) {
    if (daily[i].kind !== daily[i - 1].kind) continue;
    const j = daily.findIndex((x, k) => k > i && x.kind !== daily[i - 1].kind && (k + 1 >= daily.length || daily[k + 1].kind !== daily[i].kind));
    if (j > 0) [daily[i], daily[j]] = [daily[j], daily[i]];
  }
  daily.forEach((x, i) => { x.def.id = 'd' + (i + 1); });
}

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
    lines.push(`      ${k}: { palette: '${r.palette}', ${r.flip ? 'flip: true, ' : ''}${r.eats ? 'eats: true, ' : ''}map: [`);
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
   p second sprout  1 2 3 twin of room A B C  (room props: flip = mirror room, eats = hungry room)
   terrain (optional, same size): ~ ice  o plate  | gate  ^ > v < one-way arrows  O hole  x crumbling floor
   U R D L wind tiles  1-4 jump pads (in pairs)
   sol = a known solution (U R D L), used for hints; idea = the first hint step; d = how hard (1 easy, 2 medium, 3 hard). */
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
  wrap('LEVELS', 'levels', levels.map(x => emit(x.def, `id: ${x.def.id}, w: ${x.w}, n: ${x.n}, d: ${x.d},`)).join(',\n')));
fs.writeFileSync(path.join(__dirname, '../www/js/daily.js'),
  wrap('DAILY', 'daily puzzles', daily.map(x => emit(x.def, `id: '${x.def.id}',`)).join(',\n')));

console.log(`wrote ${levels.length} levels and ${daily.length} daily puzzles, ${bad} bad, ${short} short`);
WORLDS.forEach((W, w) => {
  const ls = levels.filter(x => x.w === w);
  const r = report.find(x => x.w === w);
  console.log(`world ${String(w + 1).padStart(2)} ${W.tier.padEnd(6)} ${String(ls.length).padStart(2)} levels  score ${ls.map(x => Math.round(x.m.score)).join(' ')}  | moves ${ls.map(x => x.m.moves).join(' ')}` +
    (r ? `  | uses ${r.uses}  ${r.slack ? 'ladder, idea dips by up to ' + r.slack : 'ladder'}  (${r.hard} hard of ${r.pool})` : ''));
});
const ds = daily.map(x => x.m.score).sort((a, b) => a - b);
console.log(`daily: score ${Math.round(ds[0])}–${Math.round(ds[ds.length - 1])}, kinds ${[...new Set(daily.map(x => x.kind))].length}`);
