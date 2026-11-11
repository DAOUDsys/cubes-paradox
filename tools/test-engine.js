// Engine rule tests with small hand-made levels, then a regression check of every real level
// against tools/baseline-1.5.json. Run: node tools/test-engine.js   (--quick skips the regression)
// Prints one line per test and exits non-zero if any test fails.
const path = require('path');
const Engine = require(path.join(__dirname, '../www/js/engine.js'));

let failed = 0, passed = 0;
function test(name, fn) {
  try { fn(); passed++; console.log('ok   ' + name); }
  catch (e) { failed++; console.log('FAIL ' + name + ': ' + e.message); }
}
function eq(a, b, what) {
  const sa = JSON.stringify(a), sb = JSON.stringify(b);
  if (sa !== sb) throw new Error((what || 'value') + ' is ' + sa + ', expected ' + sb);
}
function ok(c, what) { if (!c) throw new Error(what || 'expected true'); }

// a room from rows joined by '/': room('#P.#/...', { terrain: '....', flip: true })
function room(map, extra) {
  const r = Object.assign({ palette: 'olive' }, extra || {});
  r.map = map.split('/');
  if (typeof r.terrain === 'string') r.terrain = r.terrain.split('/');
  return r;
}
function level(rooms, root) { return Engine.parseLevel({ id: 't', root: root || 'R', rooms }); }

// plays a string of moves (U R D L); every move must succeed
function play(lv, moves, st) {
  st = st || lv.state;
  let res = null;
  for (const ch of moves) {
    res = Engine.move(st, lv.level, 'URDL'.indexOf(ch));
    if (!res) throw new Error('move ' + ch + ' was blocked');
    st = res.state;
  }
  return { st, res };
}
const P = (st) => Engine.player(st);
const P2 = (st) => Engine.players(st)[1];
const where = (o) => o && o.room + ':' + o.x + ',' + o.y;
const kind = (st, k) => st.objects.filter(o => o.kind === k);
const boxes = (st) => kind(st, 'box');

const D = { U: 0, R: 1, D: 2, L: 3 };

/* ---------- twins ---------- */

// R: the twin '1' is stuck against a wall; the original A is elsewhere
const T5 = room('#####/#...#/....#/#...#/#####');
test('twin: walking into a stuck twin enters the room', () => {
  const lv = level({ R: room('#######/#.....#/#.....#/#P1#..#/#.....#/#...A.#/#######'), A: T5 });
  const { st, res } = play(lv, 'R');
  eq(where(P(st)), 'A:0,2'); eq(res.events, [{ type: 'enter', into: 'A' }]); eq(res.info.twinEntries, 1);
});
test('twin: leaving the room puts you next to the original', () => {
  const lv = level({ R: room('#######/#.....#/#.....#/#P1#..#/#.....#/#...A.#/#######'), A: T5 });
  const { st, res } = play(lv, 'RL');
  eq(where(P(st)), 'R:3,5'); eq(res.events, [{ type: 'exit', from: 'A' }]);
});
test('twin: pushed like a box, and it may go into its own room', () => {
  const lv = level({ R: room('#######/#.....#/#P1A#.#/#.....#/#.....#/#.....#/#######'), A: T5 });
  let { st } = play(lv, 'R');
  const tw = st.objects.find(o => o.twin);
  eq(where(tw), 'A:0,2', 'twin'); eq(where(P(st)), 'R:2,2', 'player');
  ({ st } = play(lv, 'R', st));
  eq(where(P(st)), 'A:0,2', 'player'); eq(where(st.objects.find(o => o.twin)), 'A:1,2', 'twin');
});
test('twin: the original cannot go into its own twin (cycle)', () => {
  const lv = level({ R: room('#######/#.....#/#PA1#.#/#.....#/#.....#/#.....#/#######'), A: T5 });
  const { st } = play(lv, 'R');
  eq(where(Engine.roomObject(st, 'A')), 'R:2,2', 'original'); eq(where(P(st)), 'A:0,2', 'player');
});
test('twin: roomObject and depthOf follow the original', () => {
  const lv = level({ R: room('#####/#P.A#/#...#/#...#/#####'), A: room('#####/#...#/#.B.#/#...#/#####'),
    B: room('#####/#.2.#/#...#/#...#/#####') });
  const st = lv.state;
  eq(where(Engine.roomObject(st, 'B')), 'A:2,2'); eq(Engine.depthOf(st, lv.level, 'B'), 2);
  eq(Engine.depthOf(st, lv.level, 'R'), 0);
});

/* ---------- mirror rooms ---------- */

const MIR = { flip: true };
const M5 = (map) => room(map || '##.##/#...#/...../#...#/##.##', MIR);
// R 5x5 with M in the middle, the player behind it and a wall in front, for direction d
function mirrorEntry(d) {
  const g = ['#####', '#...#', '#.M.#', '#...#', '#####'].map(r => r.split(''));
  const [dx, dy] = Engine.DIRS[d];
  g[2 - dy][2 - dx] = 'P'; g[2 + dy][2 + dx] = '#';
  return level({ R: room(g.map(r => r.join('')).join('/')), M: M5() });
}
const ENTRY = { R: 'M:4,2', L: 'M:0,2', D: 'M:2,0', U: 'M:2,4' };
for (const d of 'RLDU') {
  test('mirror: entering moving ' + d + ' lands at ' + ENTRY[d], () => {
    const { st, res } = play(mirrorEntry(D[d]), d);
    eq(where(P(st)), ENTRY[d]); eq(res.info.flips, 1);
  });
}
// player inside M next to an edge gap; R 7x7 with M at (3,3)
const R7M = room('#######/#.....#/#.....#/#..M..#/#.....#/#.....#/#######');
const EXIT = { L: ['##.##/#...#/P..../#...#/##.##', 'R:4,3'], R: ['##.##/#...#/....P/#...#/##.##', 'R:2,3'],
  U: ['##P##/#...#/...../#...#/##.##', 'R:3,2'], D: ['##.##/#...#/...../#...#/##P##', 'R:3,4'] };
for (const d of 'LRUD') {
  test('mirror: leaving through the ' + d + ' edge comes out at ' + EXIT[d][1], () => {
    const { st, res } = play(level({ R: R7M, M: M5(EXIT[d][0]) }), d);
    eq(where(P(st)), EXIT[d][1]); eq(res.events, [{ type: 'exit', from: 'M' }]); eq(res.info.flips, 1);
  });
}
test('mirror: a box pushed in comes out on the far side', () => {
  const lv = level({ R: room('#######/#.....#/#Pbm#.#/#.....#/#.....#/#.....#/#######'.replace('m', 'M')), M: M5() });
  const { st } = play(lv, 'R');
  eq(where(boxes(st)[0]), 'M:4,2'); eq(where(P(st)), 'R:2,2');
});
test('mirror: a box pushed out of the left edge lands right of the box', () => {
  const lv = level({ R: R7M, M: M5('##.##/#...#/.bP../#...#/##.##') });
  const { st } = play(lv, 'LL');
  eq(where(boxes(st)[0]), 'R:4,3'); eq(where(P(st)), 'M:0,2');
});
test('mirror: nested mirror in mirror composes (in and back out)', () => {
  const lv = level({ R: room('#####/#####/#PM##/#####/#####'), M: room('#####/#####/...#N/#####/#####', MIR),
    N: room('#####/#####/...../#####/#####', MIR) });
  let { st, res } = play(lv, 'R');
  eq(where(P(st)), 'N:0,2'); eq(res.info.flips, 2);
  eq(res.events, [{ type: 'enter', into: 'M' }, { type: 'enter', into: 'N' }]);
  ({ st, res } = play(lv, 'L', st));
  eq(where(P(st)), 'R:1,2'); eq(res.events, [{ type: 'exit', from: 'N' }, { type: 'exit', from: 'M' }]);
  eq(res.info.flips, 2);
});
test('mirror: ice inside a mirror room slides the mirrored way', () => {
  const lv = level({ R: room('#####/#...#/#PM##/#...#/#####'),
    M: room('#####/#####/...../#####/#####', { flip: true, terrain: '...../...../..~~~/...../.....' }) });
  // in from the left, so it lands on the right edge going left and slides left over the ice
  const { st } = play(lv, 'R');
  eq(where(P(st)), 'M:1,2');
});

/* ---------- hungry rooms ---------- */

const EAT = { eats: true };
test('hungry: swallows a stuck box and takes its cell', () => {
  const lv = level({ R: room('#######/#.....#/#PHb#.#/#.....#/#.....#/#.....#/#######'), H: room('#####/#...#/#....#/#...#/#####'.replace('#....#', '#....'), EAT) });
  const { st, res } = play(lv, 'R');
  const b = boxes(st)[0];
  eq(where(b), 'H:4,2', 'box'); eq(where(Engine.roomObject(st, 'H')), 'R:3,2', 'room'); eq(where(P(st)), 'R:2,2', 'player');
  eq(res.info.eaten, [b.id]);
});
test('hungry: what stands on the entry cell is pushed in further', () => {
  const lv = level({ R: room('#######/#.....#/#PHb#.#/#.....#/#.....#/#.....#/#######'), H: room('#####/#...#/#...b/#...#/#####', EAT) });
  const { st } = play(lv, 'R');
  eq(boxes(st).map(where).sort(), ['H:3,2', 'H:4,2']);
});
test('hungry: a sprout is never swallowed', () => {
  // H's left gap is a wall, so the player cannot walk in either: nothing moves
  const lv = level({ R: room('#######/#.....#/#PHp#.#/#.....#/#.....#/#.....#/#######'), H: room('#####/#...#/#..../#...#/#####', EAT) });
  eq(Engine.move(lv.state, lv.level, 1), null);
  eq(where(P2(lv.state)), 'R:3,2');
});
test('hungry: blocked entry cell fails cleanly (state untouched)', () => {
  const lv = level({ R: room('#######/#.....#/#PHb#.#/#.....#/#.....#/#.....#/#######'), H: room('#####/#...#/#...#/#...#/#####', EAT) });
  const before = JSON.stringify(lv.state);
  eq(Engine.move(lv.state, lv.level, 1), null); eq(JSON.stringify(lv.state), before, 'state');
});
test('hungry: a room may not swallow the room it sits in (cycle guard)', () => {
  // A sits in B, B holds itself; A cannot enter B (wall at B's entry), and swallowing B would make a cycle
  const lv = level({ B: room('#######/#.....#/#.....#/#PAB#.#/#.....#/#.....#/#######'), A: room('#####/#...#/#..../#...#/#####', EAT) }, 'B');
  eq(Engine.move(lv.state, lv.level, 1), null);
  // the same with a twin of B in front is allowed: a twin may go anywhere
  const lv2 = level({ R: room('#######/#.....#/#..B..#/#PA2#.#/#.....#/#.....#/#######'), A: room('#####/#...#/#..../#...#/#####', EAT),
    B: room('#####/#...#/#...#/#...#/#####') });
  const { st, res } = play(lv2, 'R');
  eq(where(st.objects.find(o => o.twin)), 'A:4,2'); eq(res.info.eaten.length, 1);
});

/* ---------- two sprouts ---------- */

const OPEN = '#######/#.....#/#.....#/#.....#/#.....#/#.....#/#######';
const at = (map, cells) => { const g = map.split('/').map(r => r.split('')); for (const [c, x, y] of cells) g[y][x] = c; return g.map(r => r.join('')).join('/'); };
test('sprouts: both move together', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 1], ['p', 1, 3]])) });
  const { st, res } = play(lv, 'R');
  eq([where(P(st)), where(P2(st))], ['R:2,1', 'R:2,3']); eq(res.info.moved.length, 2);
});
test('sprouts: a wall holds one back', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 1], ['#', 2, 1], ['p', 1, 3]])) });
  const { st, res } = play(lv, 'R');
  eq([where(P(st)), where(P2(st))], ['R:1,1', 'R:2,3']); eq(res.info.moved, [P2(st).id]);
});
test('sprouts: one right behind the other, both move (either order)', () => {
  let { st } = play(level({ R: room(at(OPEN, [['P', 1, 2], ['p', 2, 2]])) }), 'R');
  eq([where(P(st)), where(P2(st))], ['R:2,2', 'R:3,2']);
  ({ st } = play(level({ R: room(at(OPEN, [['p', 1, 2], ['P', 2, 2]])) }), 'R'));
  eq([where(P(st)), where(P2(st))], ['R:3,2', 'R:2,2']);
});
test('sprouts: one behind the other against a wall, the back one stays', () => {
  const { st } = play(level({ R: room(at(OPEN, [['P', 4, 2], ['p', 5, 2], ['P', 4, 2]])) }), 'L');
  eq([where(P(st)), where(P2(st))], ['R:3,2', 'R:4,2']);
  const lv = level({ R: room(at(OPEN, [['P', 4, 2], ['p', 5, 2]])) });
  eq(Engine.move(lv.state, lv.level, 1), null);
});
test('sprouts: win needs both on player goals', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 1], ['p', 1, 3], ['=', 2, 1], ['=', 3, 3]])) });
  let { st } = play(lv, 'R');
  ok(!Engine.isWin(st, lv.level), 'not yet');
  eq(Engine.goalStatus(st, lv.level).done, 1);
  ({ st } = play(lv, 'R', st));
  ok(!Engine.isWin(st, lv.level), 'primary moved off');
  const lv2 = level({ R: room(at(OPEN, [['P', 1, 1], ['p', 1, 3], ['=', 3, 1], ['=', 3, 3]])) });
  ({ st } = play(lv2, 'RR'));
  ok(Engine.isWin(st, lv2.level), 'both on goals');
});
test('sprouts: a box chain cannot push the other sprout', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2], ['b', 2, 2], ['p', 3, 2], ['#', 4, 2]])) });
  eq(Engine.move(lv.state, lv.level, 1), null);
  // when the other sprout can move away, the primary gets a second try and pushes the box after it
  const { st } = play(level({ R: room(at(OPEN, [['P', 1, 2], ['b', 2, 2], ['p', 3, 2]])) }), 'R');
  eq([where(P(st)), where(boxes(st)[0]), where(P2(st))], ['R:2,2', 'R:3,2', 'R:4,2']);
});
test('sprouts: cracked floor gives way under the second sprout too', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 1], ['p', 1, 3]]), { terrain: at(OPEN.replace(/#/g, '.'), [['x', 1, 3]]) }) });
  const { st } = play(lv, 'R');
  eq(st.broken, ['R:1,3']);
});
test('sprouts: events follow the primary only', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 1], ['p', 1, 3], ['A', 2, 3], ['#', 3, 3]])), A: T5 });
  const { st, res } = play(lv, 'R');
  eq(where(P2(st)), 'A:0,2'); eq(res.events, []);
});

/* ---------- wind ---------- */

const FLOOR = '......./......./......./......./......./......./.......';
const tr = (cells) => at(FLOOR, cells);
test('wind: blows a sprout one step after its move', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2]]), { terrain: tr([['R', 2, 2]]) }) });
  const { st, res } = play(lv, 'R');
  eq(where(P(st)), 'R:3,2'); eq(res.info.blown, [P(st).id]);
});
test('wind: blows a box that did not move', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 5], ['b', 3, 1]]), { terrain: tr([['D', 3, 1]]) }) });
  const { st } = play(lv, 'R');
  eq(where(boxes(st)[0]), 'R:3,2');
});
test('wind: a row of two boxes moves like a train', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 5], ['b', 2, 2], ['b', 3, 2]]), { terrain: tr([['R', 2, 2], ['R', 3, 2]]) }) });
  const { st, res } = play(lv, 'R');
  eq(boxes(st).map(where), ['R:3,2', 'R:4,2']); eq(res.info.blown.length, 2);
});
test('wind: never pushes', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 5], ['b', 2, 2], ['b', 3, 2]]), { terrain: tr([['R', 2, 2]]) }) });
  const { st, res } = play(lv, 'R');
  eq(boxes(st).map(where), ['R:2,2', 'R:3,2']); eq(res.info.blown, []);
});
test('wind: blows a sprout out through a room gap (events)', () => {
  const lv = level({ R: room(at(OPEN, [['A', 3, 3]])), A: room('#####/#...#/..P../#...#/#####', { terrain: '...../...../....R/...../.....' }) });
  const { st, res } = play(lv, 'RR');
  eq(where(P(st)), 'R:4,3'); eq(res.events, [{ type: 'exit', from: 'A' }]);
});
test('wind: blows a box through a mirror room gap', () => {
  // the box stands on a wind tile at M's left gap and is blown out of it
  const lv2 = level({ R: room(at(OPEN, [['M', 3, 3], ['P', 1, 5]])), M: room('#####/#...#/b..../#...#/#####', { flip: true, terrain: '...../...../L..../...../.....' }) });
  const { st, res } = play(lv2, 'R');
  eq(where(boxes(st)[0]), 'R:4,3'); eq(res.info.flips, 1);
});
test('wind: blows a box into a hole', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 5], ['b', 2, 2]]), { terrain: tr([['R', 2, 2], ['O', 3, 2]]) }) });
  const { st, res } = play(lv, 'R');
  eq(boxes(st).length, 0); eq(st.filled, ['R:3,2']); eq(res.dropped.length, 1);
});
test('wind: does not blow a sprout into a hole', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2]]), { terrain: tr([['R', 2, 2], ['O', 3, 2]]) }) });
  const { st, res } = play(lv, 'R');
  eq(where(P(st)), 'R:2,2'); eq(res.info.blown, []);
});
test('wind: blows each thing once per move', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2]]), { terrain: tr([['R', 2, 2], ['R', 3, 2]]) }) });
  const { st } = play(lv, 'R');
  eq(where(P(st)), 'R:3,2');
});

/* ---------- jump pads ---------- */

test('pads: a sprout jumps to the twin pad', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2]]), { terrain: tr([['1', 2, 2], ['1', 5, 4]]) }) });
  const { st, res } = play(lv, 'R');
  eq(where(P(st)), 'R:5,4'); eq(res.events, [{ type: 'jump', from: 'R', into: 'R' }]); eq(res.info.jumped, [P(st).id]);
});
test('pads: no jump back after arriving by a jump', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2]]), { terrain: tr([['1', 2, 2], ['1', 5, 4]]) }) });
  let { st } = play(lv, 'R');
  ({ st } = play(lv, 'LR', st));
  eq(where(P(st)), 'R:2,2', 'stepping back onto the first pad from its twin side');
});
test('pads: a pushed box jumps', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2], ['b', 2, 2]]), { terrain: tr([['1', 3, 2], ['1', 5, 5]]) }) });
  const { st, res } = play(lv, 'R');
  eq(where(boxes(st)[0]), 'R:5,5'); eq(where(P(st)), 'R:2,2'); eq(res.events, []);
});
test('pads: a taken twin pad means no jump', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2], ['b', 5, 5]]), { terrain: tr([['1', 2, 2], ['1', 5, 5]]) }) });
  const { st, res } = play(lv, 'R');
  eq(where(P(st)), 'R:2,2'); eq(res.info.jumped, []);
});
test('pads: a box never jumps back onto the cell it was pushed from', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2], ['b', 2, 2]]), { terrain: tr([['1', 2, 2], ['1', 3, 2]]) }) });
  const { st } = play(lv, 'R');
  eq([where(P(st)), where(boxes(st)[0])], ['R:2,2', 'R:3,2']);
});
test('pads: pads in two rooms give a jump event between rooms', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2], ['A', 5, 5]]), { terrain: tr([['1', 2, 2]]) }),
    A: room('#####/#...#/#...#/#...#/#####', { terrain: '...../...../..1../...../.....' }) });
  const { st, res } = play(lv, 'R');
  eq(where(P(st)), 'A:2,2'); eq(res.events, [{ type: 'jump', from: 'R', into: 'A' }]);
});
test('pads: a pad reached by an ice slide', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2]]), { terrain: tr([['~', 2, 2], ['~', 3, 2], ['1', 4, 2], ['1', 1, 5]]) }) });
  const { st } = play(lv, 'R');
  eq(where(P(st)), 'R:1,5');
});
test('pads: a pad reached by the wind', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 5], ['b', 2, 2]]), { terrain: tr([['R', 2, 2], ['1', 3, 2], ['1', 5, 1]]) }) });
  const { st, res } = play(lv, 'R');
  eq(where(boxes(st)[0]), 'R:5,1'); eq(res.info.blown.length, 1); eq(res.info.jumped.length, 1);
});
test('pads: a room-box does not jump', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2], ['A', 2, 2]]), { terrain: tr([['1', 3, 2], ['1', 5, 5]]) }), A: T5 });
  const { st } = play(lv, 'R');
  eq(where(Engine.roomObject(st, 'A')), 'R:3,2');
});

/* ---------- parsing ---------- */

const throws = (fn, re) => { try { fn(); } catch (e) { ok(re.test(e.message), 'message: ' + e.message); return; } throw new Error('did not throw'); };
test('parse: broken levels throw a clear error', () => {
  throws(() => level({ R: room('#####/#P1.#/#...#/#...#/#####') }), /missing room A/);
  throws(() => level({ R: room('#####/#P1.#/#...#/#...#/#####'), A: T5 }), /needs the room's own box/);
  throws(() => level({ R: room('#####/#P..#/#...#/#...#/#####', { terrain: '...../.1.../...../...../.....' }) }), /Jump pad 1/);
  throws(() => level({ R: room('#####/#P..#/#...#/#...#/#####', { terrain: '...../.1.1./..1../...../.....' }) }), /Jump pad 1/);
  throws(() => level({ R: room('#####/#PP.#/#...#/#...#/#####') }), /one player/);
  throws(() => level({ R: room('#####/#Ppp#/#...#/#...#/#####') }), /second sprout/);
  throws(() => level({ R: room('#####/#p..#/#...#/#...#/#####') }), /one player/);
});
test('parse: new terrain and room properties', () => {
  const lv = level({ R: room('#####/#P..#/#.A.#/#...#/#####', { terrain: '...../.URD./.L1../..1../.....' }), A: room('###/#.#/###', { flip: true, eats: true }) });
  const R = lv.level.rooms.R;
  eq([R.wind[1][1], R.wind[1][2], R.wind[1][3], R.wind[2][1], R.wind[0][0]], [0, 1, 2, 3, -1]);
  eq(R.pad[2][2], '1'); eq(lv.level.pads['1'].length, 2); ok(lv.level.hasWind && lv.level.hasPads, 'flags');
  ok(lv.level.rooms.A.flip && lv.level.rooms.A.eats, 'room props');
  eq([Engine.opp(1), Engine.mirror(1), Engine.mirror(3), Engine.mirror(0), Engine.mirror(2)], [3, 3, 1, 0, 2]);
});

/* ---------- state hygiene ---------- */

test('a failed move leaves the state untouched', () => {
  const lvs = [
    level({ R: room('#######/#.....#/#PHb#.#/#.....#/#.....#/#.....#/#######'), H: room('#####/#...#/#...#/#...#/#####', EAT) }),
    level({ R: room(at(OPEN, [['P', 1, 2], ['b', 2, 2], ['p', 3, 2], ['#', 4, 2]])) }),
    level({ R: room('#####/#####/#PM##/#####/#####'), M: room('#####/#####/#..#N/#####/#####', MIR), N: room('#####/#####/#..../#####/#####', MIR) })
  ];
  for (const lv of lvs) {
    const before = JSON.stringify(lv.state);
    eq(Engine.move(lv.state, lv.level, 1), null); eq(JSON.stringify(lv.state), before, 'state');
  }
});
test('returned state has no temporary fields', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 2], ['p', 1, 4], ['b', 2, 1]]), { terrain: tr([['R', 2, 2], ['1', 4, 4], ['1', 5, 1], ['D', 2, 1]]) }) });
  const { st } = play(lv, 'RR');
  eq(Object.keys(st).sort(), ['broken', 'filled', 'objects']);
});
test('Engine.key is equal for equal states', () => {
  const lv = level({ R: room(at(OPEN, [['P', 1, 1], ['b', 3, 3]])) });
  const a = play(lv, 'RD').st, b = play(lv, 'DR').st;
  eq(Engine.key(a), Engine.key(b)); ok(Engine.key(a) !== Engine.key(play(lv, 'RR').st), 'different states differ');
  eq(Engine.key(Engine.cloneState(a)), Engine.key(a));
});

/* ---------- solver ---------- */

test('analyze: counts split moves and jumps, places use every sprout', () => {
  const { analyze } = require('./analyze.js');
  const r1 = analyze({ id: 't', root: 'R', rooms: { R: room(at(OPEN, [['P', 1, 1], ['p', 1, 3], ['#', 3, 1], ['=', 2, 1], ['=', 4, 3]])) } });
  eq([r1.moves, r1.sol], [3, 'RRR']); eq(r1.uses.split, 2); ok(r1.places > 0, 'places');
  const r2 = analyze({ id: 't', root: 'R', rooms: { R: room('#######/#P.#..#/#..#..#/#..#.=#/#..#..#/#..#..#/#######',
    { terrain: tr([['1', 2, 1], ['1', 4, 1]]) }) } });
  eq([r2.moves, r2.uses.pad, r2.exits], [4, 1, 0]);
  ['wind', 'eat', 'twin', 'flip', 'pocket', 'carry'].forEach(k => ok(r2.uses[k] === 0, k));
});

/* ---------- regression: every real level against the 1.5 baseline ---------- */

if (process.argv.indexOf('--quick') < 0) {
  test('regression: every level matches tools/baseline-1.5.json', () => {
    const { analyze } = require('./analyze.js');
    const base = require('./baseline-1.5.json');
    const all = require('../www/js/levels.js').concat(require('../www/js/daily.js'));
    const bad = [];
    const t0 = Date.now();
    for (const def of all) {
      const r = analyze(def, 400000), b = base[def.id];
      const got = r && { moves: r.moves, unique: r.unique, states: r.states, dead: r.dead, bits: Math.round(r.bits * 1000) / 1000 };
      if (!b || !got || got.moves !== b.moves || got.unique !== b.unique || got.states !== b.states || got.dead !== b.dead ||
        Math.abs(got.bits - b.bits) > 0.0006) bad.push(def.id + ' ' + JSON.stringify(got) + ' vs ' + JSON.stringify(b));
    }
    console.log('     ' + (all.length - bad.length) + '/' + all.length + ' levels match (' + ((Date.now() - t0) / 1000).toFixed(1) + 's)');
    if (bad.length) throw new Error(bad.length + ' differ:\n  ' + bad.join('\n  '));
  });
}

console.log('\n' + passed + ' passed, ' + failed + ' failed');
process.exit(failed ? 1 : 0);
