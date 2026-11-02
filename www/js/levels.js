/* Cubes Paradox levels (written by tools/curate.js — edit there or here, then run `npm run solve`).
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
  {
    id: 1, w: 0, n: 0,
    name: {"en":"First Push","ar":"أول دفعة"},
    tip: {"en":"Push the yellow boxes onto the dotted squares","ar":"ادفع الصناديق الصفرا لحد المربعات المنقّطة"},
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '#######',
        '#.....#',
        '#.P.b.#',
        '#.....#',
        '#.b...#',
        '#._._.#',
        '#######'
      ] }
    },
    sol: 'URRDDDULLD'
  },
  {
    id: 2, w: 0, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '######',
        '#.._.#',
        '#b.b##',
        '#_P.##',
        '#..###',
        '######'
      ] }
    },
    sol: 'RULULD'
  },
  {
    id: 3, w: 0, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '######',
        '#...##',
        '#..P_#',
        '#.b.##',
        '#..###',
        '######'
      ] }
    },
    sol: 'LLDDRULURR'
  },
  {
    id: 4, w: 0, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '#######',
        '##...##',
        '#..bP##',
        '#...###',
        '#_#####',
        '#..####',
        '#######'
      ] }
    },
    sol: 'LULDRDLULD'
  },
  {
    id: 5, w: 0, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '######',
        '#...##',
        '#.b_.#',
        '#=.b##',
        '##_.P#',
        '######'
      ] }
    },
    sol: 'LULLUURDDL'
  },
  {
    id: 6, w: 0, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '######',
        '#=bP_#',
        '#....#',
        '#..b.#',
        '#.#._#',
        '######'
      ] }
    },
    sol: 'DLDRURDULLLURRLL'
  },
  {
    id: 7, w: 0, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '######',
        '###P.#',
        '#.b..#',
        '#._..#',
        '#_.b.#',
        '######'
      ] }
    },
    sol: 'RDDDLLULURDRRUULDRDL'
  },
  {
    id: 8, w: 0, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '#######',
        '#...#_#',
        '#_...b#',
        '#..bb_#',
        '###.P.#',
        '#####.#',
        '#######'
      ] }
    },
    sol: 'URULLLDRR'
  },
  {
    id: 9, w: 0, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '#######',
        '#####.#',
        '#..#..#',
        '#_P...#',
        '#_bb..#',
        '##=#..#',
        '#######'
      ] }
    },
    sol: 'LDRURRRDDLURULLLRRDLLD'
  },
  {
    id: 10, w: 0, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '######',
        '###.P#',
        '#_.bb#',
        '#b...#',
        '#._._#',
        '######'
      ] }
    },
    sol: 'DULDRDLDLLUDRRUULD'
  },
  {
    id: 11, w: 0, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '######',
        '#....#',
        '##bb_#',
        '#P.b_#',
        '#_..=#',
        '######'
      ] }
    },
    sol: 'RDRRUUULLDRLDRDLRR'
  },
  {
    id: 12, w: 0, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '#######',
        '###...#',
        '#Pb.b.#',
        '#.b##_#',
        '#...._#',
        '#_=...#',
        '#######'
      ] }
    },
    sol: 'RRURRDULLDRURDLLLDDRDL'
  },
  {
    id: 13, w: 0, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '######',
        '#_.._#',
        '#Pbb.#',
        '##..b#',
        '##._.#',
        '######'
      ] }
    },
    sol: 'URRDULLDRDDRRUULDLURUL'
  },
  {
    id: 14, w: 0, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '#######',
        '#..._##',
        '#.b.P.#',
        '##.bb.#',
        '#...#_#',
        '#_..#.#',
        '#######'
      ] }
    },
    sol: 'ULLDDDRUDDLUUURDRURD'
  },
  {
    id: 15, w: 0, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '########',
        '#._....#',
        '#....#_#',
        '#.#.#..#',
        '#.....P#',
        '##.b.b.#',
        '#...#.##',
        '########'
      ] }
    },
    sol: 'DLULLLDDRULURRRDRUUDDLLULLDDRUUUURUL'
  },
  {
    id: 16, w: 0, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'workshop', map: [
        '########',
        '##...###',
        '###..P##',
        '##.#_b_#',
        '#..=#..#',
        '#.#.b..#',
        '#.._b..#',
        '########'
      ] }
    },
    sol: 'DRDDDLLLUULLDDRRURRURULDDDRUUDDLLULU'
  },
  {
    id: 17, w: 1, n: 0,
    name: {"en":"First Step In","ar":"الدخلة الأولى"},
    tip: {"en":"If the green box can’t move, you walk into it","ar":"الصندوق الأخضر إذا ما قدر يتحرك، بتفوت جوّاه"},
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '#######',
        '#######',
        '#P.A###',
        '###.###',
        '###.b_#',
        '###..=#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RRRRDDDDRDR'
  },
  {
    id: 18, w: 1, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '###..#',
        '#..Pb#',
        '#.A._#',
        '##..##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..=#',
        '#....',
        '#..##',
        '#####'
      ] }
    },
    sol: 'URDLDLLLU'
  },
  {
    id: 19, w: 1, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '########',
        '#.#..###',
        '#..P####',
        '#_..####',
        '##A.####',
        '#.b#####',
        '#..#####',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..=#',
        '##...',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DDLLDLDDURULLLU'
  },
  {
    id: 20, w: 1, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '#._..#',
        '#A.b.#',
        '##.#.#',
        '#P...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#=..#',
        '.....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRRUULRDDLLUULLULL'
  },
  {
    id: 21, w: 1, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '######',
        '######',
        '######',
        '#_PbA#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRRURRDLLLLL'
  },
  {
    id: 22, w: 1, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '######',
        '#._P.#',
        '#.b..#',
        '##.A.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.=##',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LLDRDRURULDDRRUR'
  },
  {
    id: 23, w: 1, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '#...P#',
        '#.b._#',
        '####A#',
        '####.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#...#',
        '#=..#',
        '#####'
      ] }
    },
    sol: 'LLLDRRURDDDDRDDLUUUUDDDDL'
  },
  {
    id: 24, w: 1, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '##.__#',
        '#PAbb#',
        '#....#',
        '##.###',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..=#',
        '....#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRURUUDDRUDRUDLLDDR'
  },
  {
    id: 25, w: 1, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '######',
        '#A..P#',
        '#b.b.#',
        '#__###',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '##..#',
        '#.=.#',
        '##.##'
      ] }
    },
    sol: 'LLDDLUUURUULDDDDRURRDLULDLUU'
  },
  {
    id: 26, w: 1, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '#P.#_#',
        '#._A.#',
        '#..b.#',
        '#.b.##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..=#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RDRRRRDDDLDLURRUUUUUR'
  },
  {
    id: 27, w: 1, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '#_#.##',
        '#b..##',
        '#A.b_#',
        '#.##P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#=...',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'ULLLLULLDRRRRRLLLULUUDDDDL'
  },
  {
    id: 28, w: 1, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '#A.._#',
        '#.bb_#',
        '##...#',
        '##P#.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '...=.',
        '#.#.#',
        '#####'
      ] }
    },
    sol: 'UURULLLULLDRRRRRLLL'
  },
  {
    id: 29, w: 1, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '#....#',
        '#_bb##',
        '#A#_##',
        '#..P.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.=.#',
        '#....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LLUDRRUULLLULLDRRRRURDLLLUL'
  },
  {
    id: 30, w: 1, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '#....#',
        '#_P.b#',
        '#_bA.#',
        '##.#.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#..=#',
        '#####'
      ] }
    },
    sol: 'URRDLLLDRRRURUURDLLLLDLUUUDRDD'
  },
  {
    id: 31, w: 1, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '########',
        '##.#...#',
        '#..A...#',
        '#.P..b.#',
        '#_.#####',
        '#.######',
        '#_######',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#....',
        '#..=#',
        '#####'
      ] }
    },
    sol: 'RRURRDLLLLULDDDUUURRRURDRDLLLLULDRDLLD'
  },
  {
    id: 32, w: 1, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '########',
        '#...#_##',
        '#..b..A#',
        '#.#...b#',
        '#...##P#',
        '#.....##',
        '#_.##..#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '.=..#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'UUURULLLLLLULLDDDDUUURRRDRURR'
  },
  {
    id: 33, w: 1, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '########',
        '#..###.#',
        '#...##.#',
        '#....b_#',
        '##.#b._#',
        '###...##',
        '##P.A.##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..=#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RURRURULLDULULLDRRRRDDDLLURDRULURDDLLLLU'
  },
  {
    id: 34, w: 1, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'greenhouse', map: [
        '######',
        '#_.#_#',
        '#bAb.#',
        '#....#',
        '#_.#P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.=.#',
        '#....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'UULLLULLDRRRLULUUDRDRUDLLLLULUUDDD'
  },
  {
    id: 35, w: 2, n: 0,
    name: {"en":"Box in a Box","ar":"صندوق بالصندوق"},
    tip: {"en":"Plain boxes can go inside the green box too","ar":"حتى الصناديق العادية بتفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '#######',
        '#.....#',
        '#.P...#',
        '#.b.A##',
        '#.....#',
        '#=....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.._.#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LDRRRRLLDDLL'
  },
  {
    id: 36, w: 2, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '######',
        '#AP..#',
        '#.b..#',
        '#....#',
        '#....#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#.._.',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RDDLURULL'
  },
  {
    id: 37, w: 2, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '######',
        '###..#',
        '#.#..#',
        '#_...#',
        '#.AP.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '...b.',
        '##..#',
        '#####'
      ] }
    },
    sol: 'LLLDLUUU'
  },
  {
    id: 38, w: 2, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '######',
        '#..###',
        '#..#.#',
        '#.b..#',
        '#A..P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.._#',
        '#....',
        '##..#',
        '#####'
      ] }
    },
    sol: 'ULLULDDDLDRDRU'
  },
  {
    id: 39, w: 2, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '######',
        '#..A##',
        '##..##',
        '#_P..#',
        '##...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#.b.#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'URUURUULDDDDLDDRRULL'
  },
  {
    id: 40, w: 2, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '######',
        '#....#',
        '#.b.##',
        '#AP..#',
        '#.#.##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#....',
        '##._#',
        '#####'
      ] }
    },
    sol: 'RULULDDDDLDRURD'
  },
  {
    id: 41, w: 2, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '######',
        '#=A..#',
        '#._#.#',
        '#P...#',
        '#...##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#.b..',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'URUURUULDDDDLDDRULUU'
  },
  {
    id: 42, w: 2, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '######',
        '##...#',
        '##A#.#',
        '#..bP#',
        '#.#._#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#._.#',
        '...##',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'UULLDDDDLLLRRRRDDDRUDLUUULLLRLUURRDDD'
  },
  {
    id: 43, w: 2, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '#######',
        '###...#',
        '#####_#',
        '###P#.#',
        '##.A.=#',
        '#.....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.b.#',
        '#...#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DLDRRURDDRDDLUUUUUD'
  },
  {
    id: 44, w: 2, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '#######',
        '##.#..#',
        '#..P..#',
        '#.b...#',
        '#.A...#',
        '#..#_.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.._..',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LLDRRLLDRRUURDDDD'
  },
  {
    id: 45, w: 2, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '######',
        '#P...#',
        '#_A.##',
        '##..##',
        '##._##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.bb.#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DRRRURRDLLLLURDD'
  },
  {
    id: 46, w: 2, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '######',
        '#.P###',
        '#....#',
        '#A.b=#',
        '#..b.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#_..#',
        '..._.',
        '#..##',
        '#####'
      ] }
    },
    sol: 'DRRDLLLLLDLURUUUDRRRDLLLRURR'
  },
  {
    id: 47, w: 2, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '#######',
        '#.#=..#',
        '#...._#',
        '#._A._#',
        '#...P.#',
        '#...#.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.b.#',
        '..b..',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LLURRRRDRRULUUDDLLLLUU'
  },
  {
    id: 48, w: 2, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '########',
        '#..PA#.#',
        '##.b..=#',
        '#....#.#',
        '#.b..###',
        '##..####',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '..._#',
        '#._.#',
        '#####'
      ] }
    },
    sol: 'DLDLDRDRUULUURLDDRULURRRURDLLLDRRR'
  },
  {
    id: 49, w: 2, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '#######',
        '#.__..#',
        '#....##',
        '#...A.#',
        '#....P#',
        '#.#..##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '...b.',
        '#..##',
        '#####'
      ] }
    },
    sol: 'ULLULDDDDRRRDRURULLULLDDRUURRDDDLUUU'
  },
  {
    id: 50, w: 2, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '########',
        '#.#..=.#',
        '#..bAb.#',
        '##....##',
        '####P###',
        '########',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.._#',
        '#...#',
        '#.._#',
        '##.##'
      ] }
    },
    sol: 'UUDLLURDRULURDDRUUULUURDLDRDDRUL'
  },
  {
    id: 51, w: 2, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '#######',
        '#.....#',
        '#bb...#',
        '#...A.#',
        '#.P...#',
        '#.....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#_._#',
        '#####'
      ] }
    },
    sol: 'RRRULLLRUULDRDLLRUULDDDDDRDLULD'
  },
  {
    id: 52, w: 2, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'warehouse', map: [
        '######',
        '#._..#',
        '#..#A#',
        '#....#',
        '#P_..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#.....#',
        '#..#..#',
        '..b...#',
        '#.b...#',
        '#.....#',
        '#######'
      ] }
    },
    sol: 'UUURRRDULLDDRRRDDRRUULLLLDLUUDRRRDDRURULLLLDLLUURD'
  },
  {
    id: 53, w: 3, n: 0,
    name: {"en":"Inside Inside","ar":"جوّا الجوّا"},
    tip: {"en":"Put the green box in the purple one… then walk into the green one","ar":"حط الأخضر جوّا البنفسجي… وبعدين فوت إنت جوّا الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '#######',
        '#.....#',
        '#.P.A.#',
        '#.....#',
        '#...C##',
        '#.....#',
        '#######'
      ] },
      C: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '#._##',
        '#...#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '..=.#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'URRDDDDDLDRRR'
  },
  {
    id: 54, w: 3, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '######',
        '#..#.#',
        '##...#',
        '#PA.##',
        '##=B.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#...###',
        '#....##',
        '.......',
        '#.....#',
        '#.....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#._.#',
        '#..##',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RURDDULD'
  },
  {
    id: 55, w: 3, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '######',
        '#.P###',
        '#...##',
        '#.A..#',
        '##..B#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '....#',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '..._#',
        '#..##',
        '#####'
      ] }
    },
    sol: 'DLDRURDLDRRRR'
  },
  {
    id: 56, w: 3, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '######',
        '###.##',
        '#.P.##',
        '#b=AB#',
        '#_#..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#...#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '....#',
        '#._.#',
        '##.##'
      ] }
    },
    sol: 'LDRRRRURDLLLL'
  },
  {
    id: 57, w: 3, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '######',
        '#....#',
        '##.A##',
        '#.PB.#',
        '#.#..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '#....',
        '##..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '.....',
        '#._=#',
        '#####'
      ] }
    },
    sol: 'RLUURDLDRRRURDRD'
  },
  {
    id: 58, w: 3, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '######',
        '#.B..#',
        '#....#',
        '#.#A.#',
        '#.P..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##.##',
        '.....',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '.=..#',
        '##_.#',
        '##.##'
      ] }
    },
    sol: 'LUUURDRRDDLUUUDLURRR'
  },
  {
    id: 59, w: 3, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '#######',
        '#P..###',
        '#..A..#',
        '#...#.#',
        '##..B.#',
        '###...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '..#.#',
        '##..#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '.....',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'RRDDLDRRRRDRRUULDRDL'
  },
  {
    id: 60, w: 3, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '######',
        '#..B.#',
        '##.A.#',
        '#.P..#',
        '###..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#_..#',
        '.....',
        '##..#',
        '#####'
      ] }
    },
    sol: 'RRUULRDDLURULLLLDLURUL'
  },
  {
    id: 61, w: 3, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '######',
        '#...##',
        '#.P.##',
        '##B..#',
        '#.A..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '....#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#=..#',
        '.....',
        '#._.#',
        '#####'
      ] }
    },
    sol: 'DDDRDLLLRURUURDLLLULDUL'
  },
  {
    id: 62, w: 3, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '#######',
        '###...#',
        '#...A.#',
        '#..#BP#',
        '#.....#',
        '#.#...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#....',
        '#..##',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##_.#',
        '##..#',
        '#.=.#',
        '##.##'
      ] }
    },
    sol: 'UULLDRDRDDLUUULURDDRUUUUD'
  },
  {
    id: 63, w: 3, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '#######',
        '#..P..#',
        '#.#..B#',
        '#.....#',
        '#.A#.##',
        '##....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '....#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#.=.###',
        '##...##',
        '#..#...',
        '##...##',
        '##.._.#',
        '###.###'
      ] }
    },
    sol: 'RDDRUDLDDLLULURRLDDRRUULURDRUUULURLUURRDDUULUL'
  },
  {
    id: 64, w: 3, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '#######',
        '#...#.#',
        '#.B...#',
        '###...#',
        '#...AP#',
        '#.#...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '#...#',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#.=_#',
        '..###',
        '#####',
        '#####'
      ] }
    },
    sol: 'UULLULLDRRRRRURUUDDDULLDRURDDULDRRUR'
  },
  {
    id: 65, w: 3, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '#######',
        '#_A.P.#',
        '#.B.#.#',
        '#.b.#.#',
        '#..####',
        '#.#####',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '...##',
        '#..=#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '..._#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LDDLUUULLLRDRULLURDDDLUURURRRRRRRRDR'
  },
  {
    id: 66, w: 3, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '######',
        '#_=..#',
        '#....#',
        '#.BAb#',
        '#..P.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '....#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#....##',
        '##..._#',
        '##.....',
        '#....##',
        '#...###',
        '#######'
      ] }
    },
    sol: 'RULLDLUURULLLDLULURRDRRR'
  },
  {
    id: 67, w: 3, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '#######',
        '#...#.#',
        '#.A.Bb#',
        '#.....#',
        '#.....#',
        '#P..._#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#....',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '.=..#',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'UUURRRRDRRUULDRDLDDRULLULDDDLDRRRRR'
  },
  {
    id: 68, w: 3, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '######',
        '#_..##',
        '#AB###',
        '#b..##',
        '#...P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '##..#.#',
        '#.....#',
        '#......',
        '#._.#.#',
        '#.....#',
        '#######'
      ] }
    },
    sol: 'LLLUUUUURRRDLDDRRULDLUUUURULDLURRULLLLLULD'
  },
  {
    id: 69, w: 3, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '########',
        '#......#',
        '##...###',
        '#......#',
        '#.A#_..#',
        '##..B..#',
        '#.P....#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '##..#.#',
        '..#.###',
        '#.=...#',
        '#...#.#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '.....',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'RRUUUDDLLULURRUURDDLLDDRRDRURULLLLULDDDDDDL'
  },
  {
    id: 70, w: 3, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'well', map: [
        '#######',
        '#.#...#',
        '#....B#',
        '#...A.#',
        '##.b.P#',
        '#...__#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '##.##',
        '#..=#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#._.#',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LULURRRDRULLLURDDDULLDLDRRRRDRRULLLRRUUR'
  },
  {
    id: 71, w: 4, n: 0,
    name: {"en":"Endless","ar":"بلا نهاية"},
    tip: {"en":"This room is inside itself. Leave through the top gap and see where you end up","ar":"هالغرفة جوّا حالها. اطلع من الفتحة اللي فوق وشوف وين بتوصل"},
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '###.###',
        '#.....#',
        '#_.b..#',
        '#..P..#',
        '#######',
        '###=###',
        '###V###'
      ] }
    },
    sol: 'RULLURUU'
  },
  {
    id: 72, w: 4, n: 1,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '###.###',
        '#.Vb__#',
        '#....##',
        '##...b.',
        '#.#.#.#',
        '#...=P#',
        '#######'
      ] }
    },
    sol: 'LLUURRRRDDDDR'
  },
  {
    id: 73, w: 4, n: 2,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '###.###',
        '#....##',
        '#..#.##',
        '._P.#V#',
        '#..b..#',
        '#...#.#',
        '###.###'
      ] }
    },
    sol: 'DRDDDLLLDLU'
  },
  {
    id: 74, w: 4, n: 3,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '#######',
        '#P#=#.#',
        '#.#.b_#',
        '._b...#',
        '#...V##',
        '#.#...#',
        '#######'
      ] }
    },
    sol: 'DDLLULRURLU'
  },
  {
    id: 75, w: 4, n: 4,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '#######',
        '#######',
        '#.#####',
        '.VP..##',
        '#..=._#',
        '#.#.b.#',
        '###.###'
      ] }
    },
    sol: 'RRDRDLULLLUUUDDRDRRL'
  },
  {
    id: 76, w: 4, n: 5,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '#######',
        '##.##.#',
        '##P..=#',
        '#V.....',
        '#_...b#',
        '#.#...#',
        '#######'
      ] }
    },
    sol: 'RRDDDRULURRRURDRDLLULLU'
  },
  {
    id: 77, w: 4, n: 6,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '###.###',
        '##....#',
        '#._b..#',
        '.._P#..',
        '#.b####',
        '#V.####',
        '#######'
      ] }
    },
    sol: 'URRDRRULDDRDL'
  },
  {
    id: 78, w: 4, n: 7,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '#######',
        '#_.=P.#',
        '##.#..#',
        '.......',
        '#.#..b#',
        '##..V.#',
        '#######'
      ] }
    },
    sol: 'RDDRRUDLLLLDLUURULLLR'
  },
  {
    id: 79, w: 4, n: 8,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '###.###',
        '#.....#',
        '#_#=..#',
        '#.#V#..',
        '#.P...#',
        '#.b...#',
        '#######'
      ] }
    },
    sol: 'LDRURRRUULLDURRDRRLLDLUUDRRUU'
  },
  {
    id: 80, w: 4, n: 9,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '#######',
        '#..#P.#',
        '##..#.#',
        '##.b=..',
        '#V.b_.#',
        '#..#_.#',
        '#######'
      ] }
    },
    sol: 'RDDRRRLURRDURRRRUR'
  },
  {
    id: 81, w: 4, n: 10,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '###.###',
        '##P_#.#',
        '###=.V#',
        '._.b#..',
        '#...b.#',
        '#.#..##',
        '#######'
      ] }
    },
    sol: 'RUUDDULLDLDRRRRDRRULRU'
  },
  {
    id: 82, w: 4, n: 11,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '###.###',
        '##..#.#',
        '#=PV_.#',
        '#...bb.',
        '#.#####',
        '#_#####',
        '#######'
      ] }
    },
    sol: 'DRRULRDRRRULDRDLULDDUU'
  },
  {
    id: 83, w: 4, n: 12,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '###.###',
        '#.#b..#',
        '#.b...#',
        '.=.P__.',
        '#.##..#',
        '#.#.V.#',
        '#######'
      ] }
    },
    sol: 'LLURRUUURUULULDLDRLL'
  },
  {
    id: 84, w: 4, n: 13,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '#######',
        '####._#',
        '#P#._.#',
        '......#',
        '#bb#..#',
        '#.=.V.#',
        '#######'
      ] }
    },
    sol: 'DLLLUDLURDRRRRRRLLLLUUDRUUDDLDLL'
  },
  {
    id: 85, w: 4, n: 14,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '###.###',
        '#._.b.#',
        '#.....#',
        '#_##.b#',
        '#.....#',
        '#.V..P#',
        '#######'
      ] }
    },
    sol: 'ULLLLDRRRUUURULRDDDDUUULLLULDRRRUL'
  },
  {
    id: 86, w: 4, n: 15,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '###.###',
        '#Vb..##',
        '#P=__.#',
        '#......',
        '##.#.b#',
        '#..#..#',
        '#######'
      ] }
    },
    sol: 'RRRRDRRLLLDDRULUULLULLDLURULULLLLDLULLU'
  },
  {
    id: 87, w: 4, n: 16,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '#######',
        '###...#',
        '#.#.._#',
        '#..bP..',
        '#V#b.##',
        '#.#.._#',
        '###.###'
      ] }
    },
    sol: 'DDLDDUURRDRULLLUUUDDDRRURDDLDR'
  },
  {
    id: 88, w: 4, n: 17,
    root: 'V',
    rooms: {
      V: { palette: 'violet', map: [
        '#######',
        '#.....#',
        '#.=.V##',
        '#P._...',
        '#.b.#b#',
        '##.._.#',
        '#######'
      ] }
    },
    sol: 'RRRUDRRRLLDDDDRRUDLLUUUULLLLULDDULLDRDRULUU'
  },
  {
    id: 89, w: 5, n: 0,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '######',
        '#..._#',
        '#..b.#',
        '##...#',
        '#.P..#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '...~~.',
        '...~~.',
        '......'
      ] }
    },
    sol: 'UURDRUU'
  },
  {
    id: 90, w: 5, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '######',
        '#_P..#',
        '#.b..#',
        '#..#.#',
        '##...#',
        '######'
      ], terrain: [
        '......',
        '...~~.',
        '...~~.',
        '.~~.~.',
        '..~~~.',
        '......'
      ] }
    },
    sol: 'RDLUURULL'
  },
  {
    id: 91, w: 5, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '######',
        '#_...#',
        '#....#',
        '#Pb#.#',
        '#.b._#',
        '######'
      ], terrain: [
        '......',
        '..~~~.',
        '..~~~.',
        '......',
        '......',
        '......'
      ] }
    },
    sol: 'DRRLUURULL'
  },
  {
    id: 92, w: 5, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '######',
        '#._P##',
        '#_b..#',
        '#.b..#',
        '#_b.##',
        '######'
      ], terrain: [
        '......',
        '......',
        '...~~.',
        '...~~.',
        '......',
        '......'
      ] }
    },
    sol: 'DLURULL'
  },
  {
    id: 93, w: 5, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '######',
        '#.#..#',
        '#.b..#',
        '#....#',
        '#_P#.#',
        '######'
      ], terrain: [
        '......',
        '......',
        '....~.',
        '......',
        '......',
        '......'
      ] }
    },
    sol: 'ULURDRRULDRDLLULD'
  },
  {
    id: 94, w: 5, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '######',
        '#_b..#',
        '#_bbP#',
        '#....#',
        '#_...#',
        '######'
      ], terrain: [
        '......',
        '....~.',
        '......',
        '..~~..',
        '..~~~.',
        '......'
      ] }
    },
    sol: 'LULDRDL'
  },
  {
    id: 95, w: 5, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '######',
        '#..._#',
        '#.b..#',
        '#Pb..#',
        '#_...#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '...~~.',
        '...~~.',
        '......'
      ] }
    },
    sol: 'URRLDRUDLL'
  },
  {
    id: 96, w: 5, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '#######',
        '#.....#',
        '#_bb..#',
        '##...##',
        '#_.P###',
        '##=####',
        '#######'
      ], terrain: [
        '.......',
        '....~~.',
        '....~~.',
        '....~..',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'URURDLLULDDRDLD'
  },
  {
    id: 97, w: 5, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '######',
        '#_.._#',
        '#..b.#',
        '#Pb=.#',
        '#....#',
        '######'
      ], terrain: [
        '......',
        '......',
        '....~.',
        '....~.',
        '...~~.',
        '......'
      ] }
    },
    sol: 'RRDRULLDLURRD'
  },
  {
    id: 98, w: 5, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '######',
        '#..=.#',
        '#..b.#',
        '#_Pb.#',
        '#_..##',
        '######'
      ], terrain: [
        '......',
        '......',
        '....~.',
        '....~.',
        '..~~..',
        '......'
      ] }
    },
    sol: 'UURRDLLULDUURRDRDLLUUR'
  },
  {
    id: 99, w: 5, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '#######',
        '#...#_#',
        '#_....#',
        '#..b..#',
        '#...bb#',
        '##.P_.#',
        '#######'
      ], terrain: [
        '.......',
        '..~~...',
        '..~~~..',
        '.~~....',
        '.~~....',
        '..~....',
        '.......'
      ] }
    },
    sol: 'RRUUUDLDULDLU'
  },
  {
    id: 100, w: 5, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '#######',
        '#_..P_#',
        '##.#.b#',
        '#.b...#',
        '#.....#',
        '#.#..##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '..~~~~.',
        '...~~..',
        '.......'
      ] }
    },
    sol: 'DDRDLURUURRRDULLLDDRDRUUURULLLDDDRUU'
  },
  {
    id: 101, w: 5, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '#######',
        '##_b..#',
        '#..b.=#',
        '##_b.##',
        '#..#.P#',
        '#_...##',
        '#######'
      ], terrain: [
        '.......',
        '....~~.',
        '.~.....',
        '.......',
        '..~.~..',
        '..~~~..',
        '.......'
      ] }
    },
    sol: 'LULRUULDLDURRDDLLRULURR'
  },
  {
    id: 102, w: 5, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '######',
        '#..._#',
        '#.bb.#',
        '#.#bP#',
        '#_.._#',
        '######'
      ], terrain: [
        '......',
        '.~~~..',
        '......',
        '......',
        '......',
        '......'
      ] }
    },
    sol: 'ULRDDLURUULDDURURDDLULUR'
  },
  {
    id: 103, w: 5, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '#######',
        '#.b_.##',
        '#.=...#',
        '#.b#._#',
        '#_b...#',
        '#.P...#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...~~..',
        '....~..',
        '...~~~.',
        '.....~.',
        '.......'
      ] }
    },
    sol: 'LURULUURDDURDLDRULLUU'
  },
  {
    id: 104, w: 5, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '#######',
        '#_....#',
        '#.b.#.#',
        '#b#b..#',
        '#.P._.#',
        '#..#_.#',
        '#######'
      ], terrain: [
        '.......',
        '.....~.',
        '.....~.',
        '.....~.',
        '.....~.',
        '.......',
        '.......'
      ] }
    },
    sol: 'LUURURDLLDDRRURDRULLDDULLDDRR'
  },
  {
    id: 105, w: 5, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '########',
        '#..._b_#',
        '##.....#',
        '#.#.#b##',
        '#_P....#',
        '##.b...#',
        '#.....##',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '....~~..',
        '....~~~.',
        '........',
        '........'
      ] }
    },
    sol: 'DDRURULLUURRRULLDLDDLRDDRRUUULURDLLLUR'
  },
  {
    id: 106, w: 5, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'ice', map: [
        '#######',
        '#...###',
        '##.b.##',
        '#P.b_.#',
        '#.b#..#',
        '#_._..#',
        '#######'
      ], terrain: [
        '.......',
        '..~....',
        '..~....',
        '.......',
        '.....~.',
        '.....~.',
        '.......'
      ] }
    },
    sol: 'RRLDUURDRDRDLLLUURURDRDLU'
  },
  {
    id: 107, w: 6, n: 0,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '########',
        '#.##...#',
        '#...#..#',
        '#....bP#',
        '##.#.###',
        '#=..####',
        '#....###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '.o......',
        '..|.|...',
        '........',
        '........',
        '........'
      ] }
    },
    sol: 'LLLLDDL'
  },
  {
    id: 108, w: 6, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '#...#.#',
        '##b...#',
        '#....=#',
        '#...#.#',
        '###P#.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....|..',
        '....|..',
        '..o....',
        '.......',
        '.......'
      ] }
    },
    sol: 'UUUULDDRRR'
  },
  {
    id: 109, w: 6, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '#...#=#',
        '#Pb#..#',
        '#....##',
        '#.#.###',
        '#...###',
        '#######'
      ], terrain: [
        '.......',
        '...o...',
        '....|..',
        '....|..',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'DRULURDDRRURU'
  },
  {
    id: 110, w: 6, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '##.#..#',
        '#...bP#',
        '#.....#',
        '##..###',
        '###..=#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.o.....',
        '..||...',
        '.......',
        '.......'
      ] }
    },
    sol: 'ULDRDLLLRDDRR'
  },
  {
    id: 111, w: 6, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '#...#.#',
        '#....=#',
        '##..###',
        '#Pb####',
        '#..####',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....|..',
        '...o...',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'DRUURUULLDRURDRR'
  },
  {
    id: 112, w: 6, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '#.###.#',
        '#b#._=#',
        '#.b...#',
        '#.##..#',
        '#P##.##',
        '#######'
      ], terrain: [
        '.......',
        '.o.....',
        '...|...',
        '...|...',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'UUUDRRURRDDLURU'
  },
  {
    id: 113, w: 6, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '#.b...#',
        '#..bP.#',
        '####.##',
        '#...=.#',
        '#._...#',
        '#######'
      ], terrain: [
        '.......',
        '.o.....',
        '.......',
        '....|..',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'ULLDRURDDDRDLLUR'
  },
  {
    id: 114, w: 6, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '#...b.#',
        '#..P#.#',
        '#.b...#',
        '##.#.##',
        '#_.=..#',
        '#######'
      ], terrain: [
        '.......',
        '..o....',
        '.......',
        '.......',
        '..|.|..',
        '.......',
        '.......'
      ] }
    },
    sol: 'DRRUULLDLDDURRDDLLR'
  },
  {
    id: 115, w: 6, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '#...#.#',
        '#.b...#',
        '#..P#=#',
        '#..b._#',
        '#.#.#.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....|..',
        '.......',
        '..o.|..',
        '.......',
        '.......'
      ] }
    },
    sol: 'LDRUUULDDRDRLUURRD'
  },
  {
    id: 116, w: 6, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '#..Pb.#',
        '#.#.b.#',
        '#.....#',
        '###..##',
        '#_=...#',
        '#######'
      ], terrain: [
        '.......',
        '.....o.',
        '.......',
        '.......',
        '...||..',
        '.......',
        '.......'
      ] }
    },
    sol: 'RDRDLULDDRDLL'
  },
  {
    id: 117, w: 6, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '#..##.#',
        '#.b.._#',
        '#Pb.#.#',
        '#.....#',
        '#...#=#',
        '#######'
      ], terrain: [
        '.......',
        '..o....',
        '....|..',
        '.......',
        '....|..',
        '.......',
        '.......'
      ] }
    },
    sol: 'RDRULURRLDDRRD'
  },
  {
    id: 118, w: 6, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '#.....#',
        '#P.b..#',
        '#.b...#',
        '##..###',
        '#..=._#',
        '#######'
      ], terrain: [
        '.......',
        '.o.....',
        '.......',
        '.......',
        '..||...',
        '.......',
        '.......'
      ] }
    },
    sol: 'DRUURRDLLDLURRDDLDRRL'
  },
  {
    id: 119, w: 6, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '#...#_#',
        '#..b#.#',
        '#.....#',
        '##b#..#',
        '#..P#=#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '..o.|..',
        '....|..',
        '.......',
        '.......'
      ] }
    },
    sol: 'LUULUURRDULLDDRRUULDRDRDRUUDDD'
  },
  {
    id: 120, w: 6, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '#######',
        '#.....#',
        '#.bb..#',
        '#...P.#',
        '##..###',
        '#.=.._#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.....o.',
        '.......',
        '..||...',
        '.......',
        '.......'
      ] }
    },
    sol: 'LLLURURDRLDDLDRRLL'
  },
  {
    id: 121, w: 6, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '########',
        '#...#=##',
        '#......#',
        '#.b....#',
        '#..b##_#',
        '#...##.#',
        '#P..#..#',
        '########'
      ], terrain: [
        '........',
        '........',
        '....|...',
        '....|...',
        '........',
        '.o......',
        '........',
        '........'
      ] }
    },
    sol: 'URRUULUURDLLDDURRRRURDULU'
  },
  {
    id: 122, w: 6, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '########',
        '##...###',
        '#.....=#',
        '#..b.#.#',
        '#.b..#.#',
        '##P..._#',
        '###..#.#',
        '########'
      ], terrain: [
        '........',
        '........',
        '.....|..',
        '........',
        '........',
        '.....|..',
        '....o...',
        '........'
      ] }
    },
    sol: 'UURLLURRURDDDLDRRLUUURR'
  },
  {
    id: 123, w: 6, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '########',
        '#....#_#',
        '#...P..#',
        '##.#.#.#',
        '#..b.#=#',
        '#..b...#',
        '#....#.#',
        '########'
      ], terrain: [
        '........',
        '........',
        '.....|..',
        '........',
        '........',
        '.....|..',
        '..o.....',
        '........'
      ] }
    },
    sol: 'LLDDRDRUUDDDLUULUURRRLDDDRRUUUDD'
  },
  {
    id: 124, w: 6, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '########',
        '#....#_#',
        '#...##.#',
        '#.Pb.#=#',
        '#.#....#',
        '#.b....#',
        '#....#.#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '.....|..',
        '.o...|..',
        '........',
        '........'
      ] }
    },
    sol: 'URDDULLDDRDRRULLRURRDRUUUD'
  },
  {
    id: 125, w: 6, n: 18,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '########',
        '#.P..#.#',
        '##.b.#=#',
        '#......#',
        '#..#.#.#',
        '#.b..._#',
        '#....###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '.....|..',
        '........',
        '...o.|..',
        '........',
        '........'
      ] }
    },
    sol: 'RDLDDLDRRRUULULDDLDRDRRURLUURRU'
  },
  {
    id: 126, w: 6, n: 19,
    root: 'R',
    rooms: {
      R: { palette: 'power', map: [
        '########',
        '#..#.#.#',
        '#...bb.#',
        '#....P.#',
        '##.#####',
        '#..=..##',
        '#..._.##',
        '########'
      ], terrain: [
        '........',
        '.o......',
        '........',
        '........',
        '..|.....',
        '........',
        '........',
        '........'
      ] }
    },
    sol: 'RULLDLLLUURDLDRRRULLDLURRRRRDLLLULDDDLDRRU'
  },
  {
    id: 127, w: 7, n: 0,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '###...#',
        '#P....#',
        '#...###',
        '#..b.##',
        '##_..##',
        '#######'
      ], terrain: [
        '.......',
        '....<..',
        '...>...',
        '.<.....',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'RRDDRDL'
  },
  {
    id: 128, w: 7, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '######',
        '###.##',
        '#_b..#',
        '##_b.#',
        '#P...#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '......',
        '...>>.',
        '......'
      ] }
    },
    sol: 'RRRULUL'
  },
  {
    id: 129, w: 7, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '#.#...#',
        '#=.P._#',
        '##...##',
        '##.b###',
        '##..###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '....v..',
        '.......',
        '..v....',
        '.......'
      ] }
    },
    sol: 'DLDDRUULURRLLL'
  },
  {
    id: 130, w: 7, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '##.P..#',
        '###.=.#',
        '####._#',
        '#...b.#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '..<....',
        '.......',
        '....<..',
        '...>...',
        '.......',
        '.......'
      ] }
    },
    sol: 'RRDDDDLLLURRDRUULUURDL'
  },
  {
    id: 131, w: 7, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '##.._##',
        '#...###',
        '###.P.#',
        '#...b.#',
        '#.#...#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..<....',
        '.......',
        '.....>.',
        '.v.....',
        '.......'
      ] }
    },
    sol: 'LDDRURULDLUULUR'
  },
  {
    id: 132, w: 7, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '#..#..#',
        '#.bP.##',
        '#.b_..#',
        '#.###=#',
        '#_#####',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....>..',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'LULDDDURURRDRD'
  },
  {
    id: 133, w: 7, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '######',
        '#_P..#',
        '#.b..#',
        '#=_b.#',
        '#.####',
        '######'
      ], terrain: [
        '......',
        '......',
        '....v.',
        '......',
        '.v....',
        '......'
      ] }
    },
    sol: 'RDLDLURURRDDLULLD'
  },
  {
    id: 134, w: 7, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '#..#.##',
        '#...b.#',
        '#.....#',
        '##..._#',
        '#....P#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.....>.',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'ULURULLDLLUURDLDRURDLDRR'
  },
  {
    id: 135, w: 7, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '########',
        '####.=##',
        '####..##',
        '#._.b.##',
        '#....###',
        '#...####',
        '#.b_P.##',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '..v.....',
        '...^....',
        '........',
        '........'
      ] }
    },
    sol: 'LULLDRULUURRDRURUULDRDLLRUUR'
  },
  {
    id: 136, w: 7, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '######',
        '##=._#',
        '#Pb.##',
        '#.b_.#',
        '#..#.#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '....>.',
        '..>...',
        '......'
      ] }
    },
    sol: 'RLDDRURUDLLURURDUL'
  },
  {
    id: 137, w: 7, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '#..#..#',
        '#...b_#',
        '#.P_b.#',
        '#.#.#.#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.<.....',
        '...<...',
        '.......',
        '.......',
        '...>...',
        '.......'
      ] }
    },
    sol: 'LDDRRRRUULRUULDLLDRLLDDRRRRUUL'
  },
  {
    id: 138, w: 7, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '#_..._#',
        '#=...b#',
        '#.##.P#',
        '#...b.#',
        '#....##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.<...v.',
        '.......',
        '.......'
      ] }
    },
    sol: 'DLDLLURDRUURULLLRRDDLLLUU'
  },
  {
    id: 139, w: 7, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '#.._..#',
        '#.._..#',
        '###b.P#',
        '#...b.#',
        '#....=#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..>....',
        '.......',
        '.......',
        '..<v>..',
        '.......'
      ] }
    },
    sol: 'DLLUUDDDLLURRDRUURULRDDD'
  },
  {
    id: 140, w: 7, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '########',
        '#_#.#.##',
        '#...#..#',
        '#.#..b.#',
        '#..P.b.#',
        '#...=_.#',
        '##.....#',
        '########'
      ], terrain: [
        '........',
        '........',
        '...>....',
        '........',
        '........',
        '........',
        '........',
        '........'
      ] }
    },
    sol: 'RDRRUUULDRDLLLLDLUUURRDRDD'
  },
  {
    id: 141, w: 7, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '#...._#',
        '#..b..#',
        '##b.b.#',
        '#.=P..#',
        '#_.._.#',
        '#######'
      ], terrain: [
        '.......',
        '..^....',
        '.......',
        '.......',
        '.^...v.',
        '.......',
        '.......'
      ] }
    },
    sol: 'UULDDUUURRDDDLDLU'
  },
  {
    id: 142, w: 7, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '#.....#',
        '#.....#',
        '#...b.#',
        '#_...b#',
        '#Pb.__#',
        '#######'
      ], terrain: [
        '.......',
        '....^..',
        '....^..',
        '.......',
        '.......',
        '...>...',
        '.......'
      ] }
    },
    sol: 'RURRDRUULULDRUURDDDLLLDR'
  },
  {
    id: 143, w: 7, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '########',
        '##..b_.#',
        '#....###',
        '#Pb...##',
        '#......#',
        '#.#....#',
        '#._b_#.#',
        '########'
      ], terrain: [
        '........',
        '........',
        '....>...',
        '....^...',
        '......>.',
        '........',
        '........',
        '........'
      ] }
    },
    sol: 'RUURRLDDLDRRDDLUURURDRDLULD'
  },
  {
    id: 144, w: 7, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '##...=#',
        '##_.bb#',
        '#...b.#',
        '#_..._#',
        '#.P...#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...<...',
        '..<....',
        '....<..',
        '...>...',
        '.......'
      ] }
    },
    sol: 'URULUURRRDDLRULLDLDDRRRULLLRURURDUU'
  },
  {
    id: 145, w: 7, n: 18,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '#######',
        '#.....#',
        '#.....#',
        '#bb.b.#',
        '#P_...#',
        '#_..._#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '...v.>.',
        '.......',
        '...>...',
        '.......'
      ] }
    },
    sol: 'RRRURUULDDDUULLDULDDRDRRUL'
  },
  {
    id: 146, w: 7, n: 19,
    root: 'R',
    rooms: {
      R: { palette: 'factory', map: [
        '########',
        '#.#....#',
        '#...b=##',
        '#..P...#',
        '#_.....#',
        '###bb..#',
        '###._._#',
        '########'
      ], terrain: [
        '........',
        '........',
        '...>....',
        '....v...',
        '..>.....',
        '........',
        '........',
        '........'
      ] }
    },
    sol: 'DRRDDLLUURRUUULDDLLULDRRDRDURURDDUULU'
  },
  {
    id: 147, w: 8, n: 0,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '#....#',
        '#PA.##',
        '#b#..#',
        '#....#',
        '######'
      ], terrain: [
        '......',
        '....~.',
        '......',
        '....~.',
        '.~~~~.',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '#_=.#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'URRDLRDDLUUUURUL'
  },
  {
    id: 148, w: 8, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '#.=A_#',
        '#.Pbb#',
        '#....#',
        '#....#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '..~~~.',
        '..~~~.',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#._.#',
        '#...#',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '..~..',
        '.....'
      ] }
    },
    sol: 'URDDRUUUUDDLUL'
  },
  {
    id: 149, w: 8, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '###P.#',
        '#..A_#',
        '#..b##',
        '#..b.#',
        '######'
      ], terrain: [
        '......',
        '......',
        '.~~...',
        '.~~...',
        '.~....',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.._..',
        '#.#.#',
        '#####'
      ], terrain: [
        '.....',
        '...~.',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'DDDLLLRRLDRRUDLURRR'
  },
  {
    id: 150, w: 8, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '#######',
        '#...b.#',
        '#.....#',
        '##.P###',
        '#..A..#',
        '#....##',
        '#######'
      ], terrain: [
        '.......',
        '..~~.~.',
        '..~~.~.',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#_...',
        '#=..#',
        '##.##'
      ] }
    },
    sol: 'LDDRUUURRULLLLLLDL'
  },
  {
    id: 151, w: 8, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '#....#',
        '#.#.b#',
        '#.A.P#',
        '#....#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '......',
        '..~~~.',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..=#',
        '#...#',
        '#_.##',
        '##.##'
      ] }
    },
    sol: 'DLURRUURDDDDRDLULDURR'
  },
  {
    id: 152, w: 8, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '#...##',
        '#.PA.#',
        '#.b..#',
        '#....#',
        '######'
      ], terrain: [
        '......',
        '......',
        '....~.',
        '....~.',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#=..#',
        '.....',
        '##._#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '..~..',
        '.....',
        '.....'
      ] }
    },
    sol: 'URDLLDRRRRURRDLU'
  },
  {
    id: 153, w: 8, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '#######',
        '#.#_..#',
        '#....##',
        '##....#',
        '#..b..#',
        '#.bP.A#',
        '#######'
      ], terrain: [
        '.......',
        '.~.....',
        '.~~.~..',
        '..~.~~.',
        '....~~.',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '....#',
        '#=._#',
        '#####'
      ], terrain: [
        '.....',
        '..~~.',
        '..~~.',
        '.....',
        '.....'
      ] }
    },
    sol: 'UUUDDLLDRRRRRRURDLD'
  },
  {
    id: 154, w: 8, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '#######',
        '#.....#',
        '#....##',
        '#bAb.##',
        '#._...#',
        '#...P.#',
        '#######'
      ], terrain: [
        '.......',
        '..~~...',
        '.......',
        '.......',
        '....~~.',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '#._=.',
        '##..#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '...~.',
        '.....'
      ] }
    },
    sol: 'ULULDULDRRDLL'
  },
  {
    id: 155, w: 8, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '#..#.#',
        '#A.bP#',
        '#b#..#',
        '#...##',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '...~..',
        '...~..',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.=##',
        '#.._.',
        '#.._#',
        '##.##'
      ] }
    },
    sol: 'LLLRRDLLUUUULUURDLDRUU'
  },
  {
    id: 156, w: 8, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '#.A..#',
        '#.bb.#',
        '#.P..#',
        '#..#.#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '...~~.',
        '.~~.~.',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.__#',
        '.=..#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'UDRULDLUUULURDRULL'
  },
  {
    id: 157, w: 8, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '#....#',
        '#...##',
        '##bA.#',
        '#.P..#',
        '######'
      ], terrain: [
        '......',
        '....~.',
        '......',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##=.#',
        '##._.',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.~~~.',
        '.....'
      ] }
    },
    sol: 'UDRUUUURRRLLRDDLURULLRDLUUU'
  },
  {
    id: 158, w: 8, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '#.b..#',
        '#..PA#',
        '#..b.#',
        '#....#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '..~...',
        '..~.~.',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '..=.#',
        '#_._#',
        '#####'
      ] }
    },
    sol: 'LDRUUDRULLLURRRRURRDLULDR'
  },
  {
    id: 159, w: 8, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '#######',
        '###..A#',
        '##....#',
        '#..#..#',
        '#.b.b.#',
        '#..P..#',
        '#######'
      ], terrain: [
        '.......',
        '...~...',
        '...~...',
        '....~~.',
        '.....~.',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.=_#',
        '.._##',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'URDRUULLDLDRRRDRUUUULUUR'
  },
  {
    id: 160, w: 8, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '#....#',
        '#.bb.#',
        '#_.P.#',
        '#A...#',
        '######'
      ], terrain: [
        '......',
        '.~~~~.',
        '......',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '..=.#',
        '#.._#',
        '##.##'
      ], terrain: [
        '.....',
        '.~~~.',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'RULULDURDLLULDDDDLDDRUUUD'
  },
  {
    id: 161, w: 8, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '#....#',
        '#..._#',
        '#..bb#',
        '#P.A.#',
        '######'
      ], terrain: [
        '......',
        '.~~~~.',
        '.~~...',
        '.~~...',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#.._#',
        '#..=#',
        '##.##'
      ] }
    },
    sol: 'URDLDDDLDRUUULDRRUURDDDLDDRUUUUDDDDR'
  },
  {
    id: 162, w: 8, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '#A.###',
        '#.bbP#',
        '#....#',
        '#..###',
        '######'
      ], terrain: [
        '......',
        '..~...',
        '......',
        '..~~~.',
        '..~...',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#.....#',
        '#=..._#',
        '._#...#',
        '#...#.#',
        '#....##',
        '###.###'
      ] }
    },
    sol: 'LDLUDRULLRDLUUUULLUURRRLLLDDRRURULLULD'
  },
  {
    id: 163, w: 8, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '######',
        '#.P..#',
        '#.bA.#',
        '##.b.#',
        '#....#',
        '######'
      ], terrain: [
        '......',
        '....~.',
        '....~.',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_=.#',
        '....#',
        '#._.#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '...~.',
        '...~.',
        '.....'
      ] }
    },
    sol: 'LDRRRRDRULLLURDLLDRRRDRRULDU'
  },
  {
    id: 164, w: 8, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '#######',
        '#.....#',
        '#.A####',
        '#.....#',
        '#.P.bb#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '...~~~.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_.=#',
        '#...#',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'ULUURDLDRRRLDDRUDLURRDRUUURUULDRDLUUR'
  },
  {
    id: 165, w: 8, n: 18,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '#######',
        '#_.#..#',
        '#..bP.#',
        '#...#.#',
        '#A.b..#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.....~.',
        '.~...~.',
        '.~...~.',
        '....~~.',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.__#',
        '#=..#',
        '#..##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '..~..',
        '.....'
      ] }
    },
    sol: 'LRRDLULDLUDLURRUULRDLDLUUUULUURLDDRUL'
  },
  {
    id: 166, w: 8, n: 19,
    root: 'R',
    rooms: {
      R: { palette: 'lake', map: [
        '########',
        '#..#...#',
        '#.....##',
        '###....#',
        '#PA....#',
        '#..b...#',
        '#.b..#.#',
        '########'
      ], terrain: [
        '........',
        '....~...',
        '....~...',
        '....~...',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_.##',
        '#=._.',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RRURDLRULDRDLLULDRRRDLLLLDLLURL'
  },
  {
    id: 167, w: 9, n: 0,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '##Ab.##',
        '#.P...#',
        '#.....#',
        '##.####',
        '#...=.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '..|....',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#....',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '...o.',
        '.....',
        '.....'
      ] }
    },
    sol: 'RRULLRDDLDDRR'
  },
  {
    id: 168, w: 9, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#P..bA#',
        '#.....#',
        '###.###',
        '#...#=#',
        '#.#...#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '...|...',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.....',
        '##..#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '..o..',
        '.....'
      ] }
    },
    sol: 'RRRRRURDLLLDLDDDRRU'
  },
  {
    id: 169, w: 9, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#..Ab.#',
        '#....P#',
        '##..###',
        '#.....#',
        '#.=...#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.o.....',
        '..||...',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '##...',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'ULLLLLULDDDUURRRDDDD'
  },
  {
    id: 170, w: 9, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '##.P###',
        '#..##=#',
        '##b...#',
        '#A..#.#',
        '#...#.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '....|..',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.....',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.o...',
        '.....',
        '.....'
      ] }
    },
    sol: 'LDDRDLLLLRRRURRRU'
  },
  {
    id: 171, w: 9, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#####.#',
        '###.#.#',
        '#PA.#.#',
        '#.....#',
        '#.b.#=#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '....|..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '....#',
        '#.#.#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '..o..',
        '.....',
        '.....'
      ] }
    },
    sol: 'RRRURUUDDLLDRRRURUURRD'
  },
  {
    id: 172, w: 9, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#PbA..#',
        '###.###',
        '#.....#',
        '##....#',
        '###=..#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...|...',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#.#.#.#',
        '#.....#',
        '.....##',
        '#.....#',
        '#...###',
        '#######'
      ], terrain: [
        '.......',
        '.o.....',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'RRRRRURRDLDLUUDLLLDDDD'
  },
  {
    id: 173, w: 9, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#...b.#',
        '#.AP..#',
        '#.....#',
        '##.####',
        '##..=.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '..|....',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '..#.#',
        '#.###',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.o...',
        '.....',
        '.....'
      ] }
    },
    sol: 'ULLDRRRDRULLURRLDDLLDDRR'
  },
  {
    id: 174, w: 9, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#.....#',
        '#..Ab##',
        '#..P.##',
        '##.####',
        '#=..###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '..|....',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#...#',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '...o.',
        '.....'
      ] }
    },
    sol: 'LUURDLDRUURDDDDLDRUUUULDLDDL'
  },
  {
    id: 175, w: 9, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#.P...#',
        '#.A...#',
        '#..b..#',
        '###..##',
        '#.=.###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...||..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '....#',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '...o.',
        '.....'
      ] }
    },
    sol: 'LDRRURDLLDRRRRRURDLLLLDLDL'
  },
  {
    id: 176, w: 9, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#...#.#',
        '#.bA..#',
        '#._.#=#',
        '#...#.#',
        '##P.#.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....|..',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '.....',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.o...',
        '.....',
        '.....'
      ] }
    },
    sol: 'UULURRRDRRULRRRLULDRRRD'
  },
  {
    id: 177, w: 9, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#..P###',
        '#...###',
        '#.A##=#',
        '#.b...#',
        '#...#.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '....|..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#....',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '...o.',
        '.....',
        '.....'
      ] }
    },
    sol: 'DLLDDDRULUUURRDLULDDDUURDDRDLLRURRRU'
  },
  {
    id: 178, w: 9, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#...#=#',
        '#.....#',
        '#.b.#.#',
        '#PA##.#',
        '#...#.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....|..',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#...#',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '...o.',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'DRULUURLDDRUULURDDRUUUULURDDDDRRU'
  },
  {
    id: 179, w: 9, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '########',
        '#...P..#',
        '#......#',
        '#.A.b..#',
        '#......#',
        '####..##',
        '#.=....#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '....||..',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '....#',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '..o..',
        '.....'
      ] }
    },
    sol: 'DDULLLDRRRURDLLDRRRRURDLLLDDLLL'
  },
  {
    id: 180, w: 9, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '########',
        '#......#',
        '#..#...#',
        '#.b..AP#',
        '#.....##',
        '##.##.##',
        '#=.#..##',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '..|..|..',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#...#',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '...o.',
        '.....',
        '.....'
      ] }
    },
    sol: 'LULDRDLLLRULULDDDLDRUUURDDDL'
  },
  {
    id: 181, w: 9, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '########',
        '#.AbP..#',
        '##..b..#',
        '#...#..#',
        '###.#.##',
        '#......#',
        '#._...=#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '...|.|..',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#....',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '...o.',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'RDLULLLLULLDRDRURRRDDDDRDLRRR'
  },
  {
    id: 182, w: 9, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#...P.#',
        '#.bA.b#',
        '#...._#',
        '###..##',
        '#_=...#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...||..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '....#',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '..o..',
        '.....'
      ] }
    },
    sol: 'LLLDRRRRURDLLLURRDLULDDDRDLL'
  },
  {
    id: 183, w: 9, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#...#.#',
        '#.P.#.#',
        '#.A.#=#',
        '#bb...#',
        '#...#_#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '....|..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '..o..',
        '.....',
        '.....'
      ] }
    },
    sol: 'LDRURDLLDRRRLLRRRRURUUDU'
  },
  {
    id: 184, w: 9, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '########',
        '#.b..###',
        '#.b..#.#',
        '#......#',
        '##P..#.#',
        '#..A.#=#',
        '#....#_#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '.....|..',
        '........',
        '..o.....',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '....#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DRDRUULUUULDDDURRRRRRUUUDDD'
  },
  {
    id: 185, w: 9, n: 18,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '########',
        '#...#=.#',
        '#..b#._#',
        '#P.....#',
        '##A....#',
        '#..b#..#',
        '#...#..#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '....|...',
        '....|...',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##....#',
        '#.....#',
        '....#.#',
        '#...#.#',
        '#....##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.o.....',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'UURRDLDDDLDRUURDDDRDLULDRDLUURUUULURRRDRULUU'
  },
  {
    id: 186, w: 9, n: 19,
    root: 'R',
    rooms: {
      R: { palette: 'control', map: [
        '#######',
        '#..P#_#',
        '#b..#.#',
        '#.....#',
        '#.b...#',
        '#.A.#=#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '....|..',
        '....|..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#.....#',
        '...#..#',
        '#...#.#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '..o....',
        '.......',
        '.......'
      ] }
    },
    sol: 'DDDDLURUUULLDDDDDRDLULDDUURUUURRRDRUUDDD'
  },
  {
    id: 187, w: 10, n: 0,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '######',
        '#_P..#',
        '#.A..#',
        '#..b##',
        '#...##',
        '######'
      ], terrain: [
        '......',
        '......',
        '.<..>.',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '#....',
        '#=..#',
        '##.##'
      ], terrain: [
        '.....',
        '..<..',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'RDDLURULDLUUL'
  },
  {
    id: 188, w: 10, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '######',
        '#..._#',
        '#..A.#',
        '#.#.b#',
        '#P##.#',
        '######'
      ], terrain: [
        '......',
        '......',
        '..<...',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '..=..',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.<...',
        '.....'
      ] }
    },
    sol: 'UUURRRDDLULURRRR'
  },
  {
    id: 189, w: 10, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '#######',
        '#.b.._#',
        '#.b=P_#',
        '#...#.#',
        '#A....#',
        '####..#',
        '#######'
      ], terrain: [
        '.......',
        '.^.....',
        '.......',
        '..>....',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '##...',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LDDLLLLUUUURRRLLLURRRDL'
  },
  {
    id: 190, w: 10, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '######',
        '###.##',
        '#.A.##',
        '#P.b.#',
        '#..._#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '..>...',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###.#',
        '##...',
        '#..=#',
        '##.##'
      ] }
    },
    sol: 'RUUURRRDULLLDLDDRDRUULLLD'
  },
  {
    id: 191, w: 10, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '######',
        '#P...#',
        '#_...#',
        '#.A..#',
        '#.b..#',
        '######'
      ], terrain: [
        '......',
        '..^...',
        '..<...',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..=#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DDRLDRRURULLLLU'
  },
  {
    id: 192, w: 10, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '#######',
        '#..A.##',
        '##.bP.#',
        '#..#..#',
        '#..#..#',
        '#..._.#',
        '#######'
      ], terrain: [
        '.......',
        '..^....',
        '.......',
        '.....v.',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '##..#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DDDLLUUURLURDLDDDRRUUUUURUULDDDDDD'
  },
  {
    id: 193, w: 10, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '######',
        '#...##',
        '#....#',
        '#A.b.#',
        '#P_#.#',
        '######'
      ], terrain: [
        '......',
        '.<.>..',
        '..>...',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RULLLUUURRRDLLLLDLLURUUUDDDDRR'
  },
  {
    id: 194, w: 10, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '#######',
        '#..A..#',
        '#.b...#',
        '#.....#',
        '#.P...#',
        '##_b_.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...>...',
        '....^..',
        '.......',
        '.....>.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '..#=.',
        '#####',
        '#####'
      ] }
    },
    sol: 'DRURUUULLDDDUUULL'
  },
  {
    id: 195, w: 10, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '#######',
        '##....#',
        '#..A..#',
        '#.#P..#',
        '#..b..#',
        '#._._.#',
        '#######'
      ], terrain: [
        '.......',
        '.....^.',
        '.^.....',
        '.......',
        '.......',
        '.v...v.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..=#',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DRDLULLUURRURDDDDDR'
  },
  {
    id: 196, w: 10, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '######',
        '#_..##',
        '#P...#',
        '#bb..#',
        '#A#_.#',
        '######'
      ], terrain: [
        '......',
        '..^...',
        '..>...',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.....',
        '##.=#',
        '##.##'
      ] }
    },
    sol: 'DRLDDRDDLUUUUURRDLLDDRDD'
  },
  {
    id: 197, w: 10, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '########',
        '#...#..#',
        '#..__b.#',
        '#..#...#',
        '##....b#',
        '#..A.#.#',
        '#....#P#',
        '########'
      ], terrain: [
        '........',
        '..<^....',
        '........',
        '........',
        '........',
        '........',
        '....>...',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#=..#',
        '#...#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'UUUULLDDLLDRDRUUUUUUUL'
  },
  {
    id: 198, w: 10, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '#######',
        '#P_.._#',
        '#....##',
        '#.A...#',
        '#..b.##',
        '#....##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...<...',
        '....v..',
        '.<.....',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '...=.',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '..v..',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'RRRDDDLDLUUUUULURRRRRDLLUUUR'
  },
  {
    id: 199, w: 10, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '#######',
        '#.###.#',
        '#_....#',
        '#b#_..#',
        '#.AbP##',
        '#.#..##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....^..',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '...=#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DLULRRUULLLDDDDRDDLUUUUUDDDRD'
  },
  {
    id: 200, w: 10, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '########',
        '#...#..#',
        '##...#.#',
        '#.A..bP#',
        '#....###',
        '#.##..##',
        '#..#._.#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '.^......',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '#.=..',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LLLDLLURRURDDDRDLLDLLURRRLL'
  },
  {
    id: 201, w: 10, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '########',
        '#P.....#',
        '#.b.b.##',
        '#..#.###',
        '#..#####',
        '#._=####',
        '#._A.###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '..v.....',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#...###',
        '#.....#',
        '......#',
        '#.#.#.#',
        '#..##.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...v...',
        '.....>.',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'RDURRRDLLULDDDLDDRRRRUURRDDLLLLU'
  },
  {
    id: 202, w: 10, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '########',
        '#..._..#',
        '#A.....#',
        '#....b.#',
        '#..b.#.#',
        '#.P..#.#',
        '#.._.###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '.v......',
        '......v.',
        '........',
        '.v......',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.=##',
        '##.##',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.<...',
        '.....'
      ] }
    },
    sol: 'UUUULDDRDRDRUUURRDLLULDDDLLUUUU'
  },
  {
    id: 203, w: 10, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '########',
        '#..##.##',
        '##...b.#',
        '##A....#',
        '#..P...#',
        '#.._...#',
        '#......#',
        '########'
      ], terrain: [
        '........',
        '.<......',
        '........',
        '.....^..',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#..=#',
        '##.##'
      ], terrain: [
        '.....',
        '..^..',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'LURRDRURULLLLLDLLURUUUDDDRDLLLDLLURRRRLLD'
  },
  {
    id: 204, w: 10, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '########',
        '####.P_#',
        '###.b..#',
        '##...._#',
        '#...b#.#',
        '#......#',
        '#.A....#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '....<...',
        '........',
        '..><....',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '....#',
        '#=###',
        '#####'
      ], terrain: [
        '.....',
        '.^...',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'DDLDLLLDDRRLLUURURURRDRUDLLDDLDRRRRURUUUDDDDLD'
  },
  {
    id: 205, w: 10, n: 18,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '########',
        '#.P###.#',
        '#...#..#',
        '##...A##',
        '##_.._.#',
        '###.b.b#',
        '###..._#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '......>.',
        '........',
        '...<....',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#.=...#',
        '......#',
        '#.....#',
        '#.....#',
        '###.###'
      ] }
    },
    sol: 'DRDRDRDDLULUURRRUURRUUDDRDLLDLUURULULDDDDL'
  },
  {
    id: 206, w: 10, n: 19,
    root: 'R',
    rooms: {
      R: { palette: 'conveyor', map: [
        '########',
        '#.#..#.#',
        '#.P.A..#',
        '#..b..##',
        '#_#...##',
        '#b.#..##',
        '#...._##',
        '########'
      ], terrain: [
        '........',
        '...<....',
        '........',
        '........',
        '.....^..',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###...#',
        '##..#=#',
        '###...#',
        '##....#',
        '##.#..#',
        '#######'
      ] }
    },
    sol: 'DRDRDRUULLRRULULDLLDRURRDDDUUULLDLDDRDRRUUULLULDRRRDDRDDRRD'
  },
  {
    id: 207, w: 11, n: 0,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '#######',
        '#.P...#',
        '#.b#..#',
        '#.....#',
        '##.####',
        '#=....#',
        '#######'
      ], terrain: [
        '.......',
        '...~~~.',
        '....~~.',
        '.oo~~~.',
        '..|....',
        '.......',
        '.......'
      ] }
    },
    sol: 'DURDLLDDL'
  },
  {
    id: 208, w: 11, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '#######',
        '#.#.#=#',
        '#.....#',
        '#.b.###',
        '#.#P..#',
        '#...#.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.o..|..',
        '.......',
        '....|~.',
        '..~....',
        '.......'
      ] }
    },
    sol: 'ULRDDLUURURRRU'
  },
  {
    id: 209, w: 11, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '#######',
        '##....#',
        '##..b.#',
        '#.P..##',
        '##.####',
        '#.=####',
        '#######'
      ], terrain: [
        '.......',
        '..~~~..',
        '.....~.',
        '.o.....',
        '..|....',
        '.......',
        '.......'
      ] }
    },
    sol: 'UURDLLULDRDLDD'
  },
  {
    id: 210, w: 11, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '#######',
        '#...###',
        '#.b.###',
        '#....=#',
        '##.P#.#',
        '#...#.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '...~|..',
        '.......',
        '.o.....',
        '.......'
      ] }
    },
    sol: 'UULDDDRDLUURR'
  },
  {
    id: 211, w: 11, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '########',
        '#P..####',
        '#...####',
        '#.#...##',
        '#...#.=#',
        '#.b...##',
        '#...#..#',
        '########'
      ], terrain: [
        '........',
        '........',
        '.o......',
        '....|...',
        '.~~~....',
        '....|...',
        '........',
        '........'
      ] }
    },
    sol: 'RRDDDLDLUUUDRRRRUR'
  },
  {
    id: 212, w: 11, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '#######',
        '#.P.b.#',
        '##.b..#',
        '###.###',
        '#..=..#',
        '#._...#',
        '#######'
      ], terrain: [
        '.......',
        '...o...',
        '.......',
        '...|...',
        '....~~.',
        '...~~~.',
        '.......'
      ] }
    },
    sol: 'RDRRULDLDDRDLLU'
  },
  {
    id: 213, w: 11, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '#######',
        '#..#_##',
        '#b..=.#',
        '#Pb...#',
        '#..#..#',
        '#..#..#',
        '#######'
      ], terrain: [
        '.......',
        '.o.....',
        '...|...',
        '...|~~.',
        '.~~....',
        '.~~.~..',
        '.......'
      ] }
    },
    sol: 'DRUULURRDRDLUU'
  },
  {
    id: 214, w: 11, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '#######',
        '#..P#.#',
        '#.b.._#',
        '#..b..#',
        '#.#.#.#',
        '#...#=#',
        '#######'
      ], terrain: [
        '.......',
        '..o....',
        '.~..|..',
        '.~..|~.',
        '.......',
        '...~...',
        '.......'
      ] }
    },
    sol: 'LLDDRRUULURRDRDD'
  },
  {
    id: 215, w: 11, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '#######',
        '#...###',
        '#.bb._#',
        '#.P.#.#',
        '#.....#',
        '#...#=#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....|..',
        '.o.~...',
        '..~~~..',
        '..~~...',
        '.......'
      ] }
    },
    sol: 'LUURDLDDDRULURRLDLURD'
  },
  {
    id: 216, w: 11, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '#######',
        '#..b..#',
        '#Pb...#',
        '##..###',
        '#=..._#',
        '#...#.#',
        '#######'
      ], terrain: [
        '.......',
        '.o.....',
        '.......',
        '..||...',
        '...~...',
        '...~...',
        '.......'
      ] }
    },
    sol: 'URRDRRULLLDDRDLLURRRLL'
  },
  {
    id: 217, w: 11, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '########',
        '#.....##',
        '#P.b..##',
        '#.b....#',
        '###..###',
        '#.#=.#.#',
        '#.#_.###',
        '########'
      ], terrain: [
        '........',
        '....o...',
        '.....~..',
        '.....~~.',
        '...|~...',
        '.~..~.~.',
        '.~......',
        '........'
      ] }
    },
    sol: 'DRURURRDLULDDD'
  },
  {
    id: 218, w: 11, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '#######',
        '#...#_#',
        '#P....#',
        '#..b#.#',
        '#.b...#',
        '#...#=#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...o|~.',
        '.....~.',
        '....|~.',
        '.~~~...',
        '.......'
      ] }
    },
    sol: 'DDRDRULUURRLLDDRUDRRUUD'
  },
  {
    id: 219, w: 11, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '#######',
        '#...#=#',
        '#.b...#',
        '#...#.#',
        '#.bP..#',
        '#...#_#',
        '#######'
      ], terrain: [
        '.......',
        '...~...',
        '...~|..',
        '...o...',
        '....|..',
        '.......',
        '.......'
      ] }
    },
    sol: 'UULDLDRLDRRRLLUURRDDUUU'
  },
  {
    id: 220, w: 11, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '#######',
        '#...bP#',
        '#.b...#',
        '#.#..##',
        '###..##',
        '#.=.._#',
        '#######'
      ], terrain: [
        '.......',
        '.o.....',
        '.......',
        '....~..',
        '...|~..',
        '....~..',
        '.......'
      ] }
    },
    sol: 'DLLULLDRURDRRULLLRRDDLUURUULLDRURDDLDRLL'
  },
  {
    id: 221, w: 11, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '########',
        '#..#=..#',
        '#..#_..#',
        '#.b...##',
        '#bP....#',
        '#..#...#',
        '#..#..##',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '...|~~..',
        '...|~~..',
        '.o......',
        '........',
        '........'
      ] }
    },
    sol: 'ULUURDLDDURRRURDRDLDLURUUL'
  },
  {
    id: 222, w: 11, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '########',
        '#....#=#',
        '#.b..#.#',
        '#...#..#',
        '#......#',
        '#..b.#.#',
        '#..P.#_#',
        '########'
      ], terrain: [
        '........',
        '...~....',
        '...~....',
        '.....|..',
        '.....|..',
        '......~.',
        '..o.....',
        '........'
      ] }
    },
    sol: 'ULUURULDDDDURRRURDUUU'
  },
  {
    id: 223, w: 11, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '########',
        '#.P.#..#',
        '#......#',
        '#...#=.#',
        '#.b.#..#',
        '#.b.#._#',
        '#...#..#',
        '########'
      ], terrain: [
        '........',
        '.o......',
        '...o|...',
        '...~....',
        '........',
        '........',
        '.~~.....',
        '........'
      ] }
    },
    sol: 'RDDDLUUDDDLUUUURRRRURDDDUL'
  },
  {
    id: 224, w: 11, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '########',
        '#P..##.#',
        '#...b..#',
        '#....b.#',
        '#......#',
        '####..##',
        '#..#_=.#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '....o...',
        '.~~~....',
        '....||..',
        '.~~.....',
        '........'
      ] }
    },
    sol: 'DDDRRRULULDDUULULDLDRRDRDRD'
  },
  {
    id: 225, w: 11, n: 18,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '########',
        '#...##.#',
        '#......#',
        '#...#..#',
        '#.b....#',
        '#.bP#._#',
        '#..##.=#',
        '########'
      ], terrain: [
        '........',
        '........',
        '....|.~.',
        '.~.o..~.',
        '.~..|.~.',
        '.~......',
        '..~..~..',
        '........'
      ] }
    },
    sol: 'UULLDRUULURURDLLDRUUULURURDLDDRRRURDLDDR'
  },
  {
    id: 226, w: 11, n: 19,
    root: 'R',
    rooms: {
      R: { palette: 'glacier', map: [
        '########',
        '#......#',
        '#..b...#',
        '#.b....#',
        '#.....P#',
        '##.##.##',
        '#_.=...#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '...~~o..',
        '..|..~..',
        '....~~..',
        '........'
      ] }
    },
    sol: 'UUULLLDLDRRURDLLLDDURRDLLR'
  },
  {
    id: 227, w: 12, n: 0,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '#######',
        '#_....#',
        '#...#.#',
        '#.....#',
        '#.#.b.#',
        '#...#P#',
        '#######'
      ], terrain: [
        '.......',
        '...~~..',
        '..^~...',
        '.<~....',
        '.v.....',
        '.~.....',
        '.......'
      ] }
    },
    sol: 'ULULLDDRRUURRUULLL'
  },
  {
    id: 228, w: 12, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '#######',
        '#..#..#',
        '#.....#',
        '#...b.#',
        '##_P..#',
        '####..#',
        '#######'
      ], terrain: [
        '.......',
        '.....>.',
        '...<...',
        '.....~.',
        '....~~.',
        '.......',
        '.......'
      ] }
    },
    sol: 'RDLUURULLDLLUURDD'
  },
  {
    id: 229, w: 12, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '######',
        '#.._.#',
        '#.bb.#',
        '#..P##',
        '##._.#',
        '######'
      ], terrain: [
        '......',
        '..~...',
        '.^..v.',
        '......',
        '..~...',
        '......'
      ] }
    },
    sol: 'LLUURDDLUDLUUR'
  },
  {
    id: 230, w: 12, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '#######',
        '#..._.#',
        '#.#Pb##',
        '#.....#',
        '#..b_.#',
        '#....##',
        '#######'
      ], terrain: [
        '.......',
        '.~~....',
        '.......',
        '.~~~~..',
        '.~.....',
        '.~>....',
        '.......'
      ] }
    },
    sol: 'DRDLUULDLDRUR'
  },
  {
    id: 231, w: 12, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '######',
        '#...##',
        '#.b.##',
        '#.bP.#',
        '#._._#',
        '######'
      ], terrain: [
        '......',
        '...~..',
        '...~..',
        '......',
        '.v....',
        '......'
      ] }
    },
    sol: 'ULDLDDRRUULDD'
  },
  {
    id: 232, w: 12, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '#######',
        '#.P.b_#',
        '#..b..#',
        '##_._.#',
        '###.b.#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....~~.',
        '.....>.',
        '...^.v.',
        '...<.~.',
        '.......'
      ] }
    },
    sol: 'RDURDLRRDDLU'
  },
  {
    id: 233, w: 12, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '######',
        '#=_b_#',
        '#.bb.#',
        '#....#',
        '#_P..#',
        '######'
      ], terrain: [
        '......',
        '......',
        '....~.',
        '.^<~~.',
        '...~~.',
        '......'
      ] }
    },
    sol: 'LUUURRDDLURRDLLRULLLU'
  },
  {
    id: 234, w: 12, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '#######',
        '#...._#',
        '#Pb#..#',
        '#.....#',
        '#.._.b#',
        '##.b_.#',
        '#######'
      ], terrain: [
        '.......',
        '.^~~~..',
        '.......',
        '.......',
        '.v.....',
        '..v....',
        '.......'
      ] }
    },
    sol: 'DRRRDDRUUULULDDLDRDR'
  },
  {
    id: 235, w: 12, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '########',
        '##.....#',
        '###.b..#',
        '#.#.#..#',
        '#....._#',
        '#....b_#',
        '#P.#..##',
        '########'
      ], terrain: [
        '........',
        '....<...',
        '...~..^.',
        '...~..^.',
        '..~~~...',
        '..~~~...',
        '........',
        '........'
      ] }
    },
    sol: 'URDRUDLURUULRULLDLDRRR'
  },
  {
    id: 236, w: 12, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '#######',
        '#P....#',
        '#..__.#',
        '#.....#',
        '#..bb.#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.....~.',
        '.v...>.',
        '.^^..>.',
        '.......',
        '....~..',
        '.......'
      ] }
    },
    sol: 'RRRDDRDDLUDRULDLULURDRU'
  },
  {
    id: 237, w: 12, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '########',
        '#..b_._#',
        '##P..#.#',
        '#.=b####',
        '##_..###',
        '#.b..###',
        '#....###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '...>~...',
        '.^.~~...',
        '...~~...',
        '........'
      ] }
    },
    sol: 'URRRLDLLDDRDLUURUULURDLD'
  },
  {
    id: 238, w: 12, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '#######',
        '#....##',
        '#.b..##',
        '#..b..#',
        '#_#.b_#',
        '####P_#',
        '#######'
      ], terrain: [
        '.......',
        '..^.~..',
        '....~..',
        '..v....',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'RUULULDLULDDURDRDRLUURDRDULLDR'
  },
  {
    id: 239, w: 12, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '########',
        '#.._.._#',
        '##..b..#',
        '#_..b#.#',
        '#......#',
        '#.b..P.#',
        '#..##.##',
        '########'
      ], terrain: [
        '........',
        '........',
        '..~.....',
        '..~.....',
        '..~..~..',
        '...<v...',
        '..v.....',
        '........'
      ] }
    },
    sol: 'ULUDDLLURRRDLDLULDDLUU'
  },
  {
    id: 240, w: 12, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '########',
        '###...##',
        '##.___P#',
        '#..bb#.#',
        '#..b...#',
        '#.=....#',
        '#.##.#.#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '......~.',
        '..^..~~.',
        '......>.',
        '........',
        '........'
      ] }
    },
    sol: 'DLUDDLUDLUUURDRDDLUUDDL'
  },
  {
    id: 241, w: 12, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '########',
        '#..##..#',
        '#_..b..#',
        '#_.#.#.#',
        '#b...#.#',
        '#_.b...#',
        '###..P##',
        '########'
      ], terrain: [
        '........',
        '..~.....',
        '........',
        '........',
        '......~.',
        '..v...~.',
        '....<...',
        '........'
      ] }
    },
    sol: 'LLURRRUULLLLDLDURUULDRDDRDRUUDDRRUULLLL'
  },
  {
    id: 242, w: 12, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '########',
        '##....##',
        '#..b.b.#',
        '#...._##',
        '#_.....#',
        '#...b.##',
        '#P._.###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '...^....',
        '....~~~.',
        '........',
        '........',
        '........'
      ] }
    },
    sol: 'UURRURRDLUUURDLLULDDDRDLDLU'
  },
  {
    id: 243, w: 12, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '########',
        '#_..b..#',
        '##bb.P##',
        '#...##.#',
        '#...._.#',
        '#....._#',
        '#......#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '.~~~..~.',
        '.~~~~.~.',
        '.....>..',
        '.v......',
        '........'
      ] }
    },
    sol: 'ULLDDLDRRDRULUULDDRRLDRRRR'
  },
  {
    id: 244, w: 12, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '########',
        '#..b_.=#',
        '#.#..#.#',
        '#..b.bP#',
        '##.....#',
        '#.#.._.#',
        '#_.....#',
        '########'
      ], terrain: [
        '........',
        '.~~.....',
        '.~......',
        '.~~.....',
        '..v...v.',
        '....>...',
        '...~~~~.',
        '........'
      ] }
    },
    sol: 'LDLLULURRDRDULDDDRDLLRULUULLDRURDURUU'
  },
  {
    id: 245, w: 12, n: 18,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '########',
        '#._b...#',
        '#..P...#',
        '#_#b...#',
        '#.b..#_#',
        '#..#...#',
        '#.....##',
        '########'
      ], terrain: [
        '........',
        '.<....~.',
        '......~.',
        '....~~~.',
        '...>....',
        '....~~~.',
        '...~~~..',
        '........'
      ] }
    },
    sol: 'LLDDRRURULDLLDRDDLUULULULDRRRULRDRURD'
  },
  {
    id: 246, w: 12, n: 19,
    root: 'R',
    rooms: {
      R: { palette: 'maze', map: [
        '########',
        '#....#.#',
        '#.b.b..#',
        '#.Pb...#',
        '#.....##',
        '##_..#.#',
        '###.__.#',
        '########'
      ], terrain: [
        '........',
        '...~~.~.',
        '.<.<.~~.',
        '.....~~.',
        '...~~~..',
        '...~~...',
        '........',
        '........'
      ] }
    },
    sol: 'RLDRULDUULDLDRRDRURULDULULDDD'
  },
  {
    id: 247, w: 13, n: 0,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '##....#',
        '#..#..#',
        '......#',
        '#_.=###',
        '#PbV.##',
        '#######'
      ], terrain: [
        '.......',
        '...~~~.',
        '....~~.',
        '...~~~.',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'RRRRURDLLLULR'
  },
  {
    id: 248, w: 13, n: 1,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '#######',
        '#######',
        '##.####',
        '...##_.',
        '#V=##P#',
        '#...b.#',
        '#######'
      ] }
    },
    sol: 'URRULDRDLLDDLLLLRU'
  },
  {
    id: 249, w: 13, n: 2,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '###.b.#',
        '##.V.##',
        '.......',
        '#....##',
        '##._.P#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...v~..',
        '.......',
        '.......'
      ] }
    },
    sol: 'LULLURURDDRRRL'
  },
  {
    id: 250, w: 13, n: 3,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '#######',
        '##....#',
        '#..P.##',
        '#......',
        '##b...#',
        '#V..#_#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...>...',
        '.......',
        '.......'
      ] }
    },
    sol: 'RDRRRUULURRURDDLLDRRURD'
  },
  {
    id: 251, w: 13, n: 4,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '###.=##',
        '##VP#.#',
        '#..._..',
        '#._.bb#',
        '##....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '..~~~~.',
        '.......'
      ] }
    },
    sol: 'DDDRULLUULLRRUR'
  },
  {
    id: 252, w: 13, n: 5,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '#.#P#.#',
        '#...#.#',
        '#.#.._#',
        '#V..=##',
        '#.b..##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.^.....',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'DDDDDDRLUUUUULURDRULURD'
  },
  {
    id: 253, w: 13, n: 6,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '##..###',
        '#_....#',
        '.b.V.##',
        '##.#P.#',
        '#####.#',
        '#######'
      ] }
    },
    sol: 'UULLDRRRRURRDULLDRURDDDUUULL'
  },
  {
    id: 254, w: 13, n: 7,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '#.=V..#',
        '#_#.#.#',
        '..#b..#',
        '#...P##',
        '#...###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.....~.',
        '....~~.',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'LLLULLRRRRDRRUUDDLLUUURRRRLLDDDLLULLLL'
  },
  {
    id: 255, w: 13, n: 8,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '#######',
        '#..#..#',
        '#_....#',
        '#.#.#V#',
        '#.b.bP#',
        '#_#..##',
        '###.###'
      ], terrain: [
        '.......',
        '.....~.',
        '.....~.',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'LLUULLDDRRDDDLDLUUDRRUULLL'
  },
  {
    id: 256, w: 13, n: 9,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '#.....#',
        '#=.P#b#',
        '#..##..',
        '#..V..#',
        '##.._.#',
        '###.###'
      ], terrain: [
        '.......',
        '.~~....',
        '.......',
        '.....~.',
        '.....~.',
        '.....~.',
        '.......'
      ] }
    },
    sol: 'LDDDRRULDLUUULURRRLDLDDRRRUUUDDLULLDRULUUL'
  },
  {
    id: 257, w: 13, n: 10,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '#...__#',
        '#.bb###',
        '.P..=..',
        '#.....#',
        '#..V.##',
        '#######'
      ], terrain: [
        '.......',
        '.~~~...',
        '.......',
        '.....~.',
        '.....~.',
        '.......',
        '.......'
      ] }
    },
    sol: 'RULURDUURULDLUULURRDDR'
  },
  {
    id: 258, w: 13, n: 11,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '#..b..#',
        '###..P#',
        '#.#V._.',
        '##.b.=#',
        '#._..##',
        '#######'
      ], terrain: [
        '.......',
        '.~~....',
        '.......',
        '.~.....',
        '..<.v..',
        '.......',
        '.......'
      ] }
    },
    sol: 'LLUUDDRDDLLLULLDRDLURDDLULRURDR'
  },
  {
    id: 259, w: 13, n: 12,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '#######',
        '###__.#',
        '###..b#',
        '##.#...',
        '##VbP.#',
        '##....#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '....~~.',
        '.......'
      ] }
    },
    sol: 'UUURDLDDLLRRUURULDDDLLLDLUU'
  },
  {
    id: 260, w: 13, n: 13,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '#######',
        '#=.V..#',
        '#....b#',
        '#...#.#',
        '#._Pb.#',
        '#..._.#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.~~....',
        '.~~....',
        '.....~.',
        '.....~.',
        '.......'
      ] }
    },
    sol: 'LURRDLDDRDRUUUUDDDLULULDDRRUULU'
  },
  {
    id: 261, w: 13, n: 14,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '##....#',
        '#...#_#',
        '.P#V#_.',
        '##.b..#',
        '#...b.#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '...^...',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'URURUUDULLDLLRDUUUURRDDDDLUUURLUUUU'
  },
  {
    id: 262, w: 13, n: 15,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '#######',
        '##_#..#',
        '#..#.V#',
        '...b._.',
        '#....b#',
        '#...P.#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.~~~...',
        '.~~~...',
        '.......'
      ] }
    },
    sol: 'RUUUUDDLLRDLUUDDLURUUURRRRR'
  },
  {
    id: 263, w: 13, n: 16,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '#######',
        '#..##.#',
        '#.V...#',
        '._b.b..',
        '#...P_#',
        '##...=#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '....<..',
        '.......',
        '..^....',
        '....<..',
        '.......'
      ] }
    },
    sol: 'LULLUURDLDRRDRRUULDLDRRLLDDD'
  },
  {
    id: 264, w: 13, n: 17,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '#..b_.#',
        '##V...#',
        '##..#_#',
        '#...bP#',
        '#....##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '..~~...',
        '..~~...',
        '..~~...',
        '.......'
      ] }
    },
    sol: 'UULLULDURUDLDRRRDDLDLULDDURRURDLLLUR'
  },
  {
    id: 265, w: 13, n: 18,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '#.#...#',
        '#.....#',
        '.PbbV.#',
        '###..##',
        '#_.._##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '...v...',
        '.......'
      ] }
    },
    sol: 'LLLLURRRRDLULDULLDRRURDDULDULLLL'
  },
  {
    id: 266, w: 13, n: 19,
    root: 'V',
    rooms: {
      V: { palette: 'echo', map: [
        '###.###',
        '##P...#',
        '#_b...#',
        '#.#._..',
        '#....b#',
        '#...#V#',
        '###.###'
      ], terrain: [
        '.......',
        '....~~.',
        '....~~.',
        '.......',
        '.......',
        '..~~...',
        '.......'
      ] }
    },
    sol: 'RRDDDDUULLLLUURRURDDDDUUULDRDDDDDDUUUULLLDLUU'
  },
  {
    id: 267, w: 14, n: 0,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '######',
        '#.#..#',
        '#.A..#',
        '#P..B#',
        '#...##',
        '######'
      ], terrain: [
        '......',
        '......',
        '...~..',
        '...~..',
        '...~..',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#.##..#',
        '......#',
        '##....#',
        '####.=#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#._##',
        '.....',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.~~~.',
        '.....'
      ] }
    },
    sol: 'URRURDDULDRRRURRRRRRDD'
  },
  {
    id: 268, w: 14, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '######',
        '#.AB.#',
        '#..#.#',
        '#....#',
        '#..P.#',
        '######'
      ], terrain: [
        '......',
        '.^....',
        '......',
        '.^....',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.....',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.<...',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#.=.#',
        '.....',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'ULULURRRRURDRDLUU'
  },
  {
    id: 269, w: 14, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '######',
        '###..#',
        '#.B..#',
        '#..P.#',
        '#..A.#',
        '######'
      ], terrain: [
        '......',
        '...~~.',
        '......',
        '....~.',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '#####',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#..=#',
        '.._.#',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'LLURRURDDLLDRRRURR'
  },
  {
    id: 270, w: 14, n: 3,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '######',
        '#.##.#',
        '#B...#',
        '#A##=#',
        '#.P#.#',
        '######'
      ], terrain: [
        '......',
        '......',
        '..o|..',
        '......',
        '....v.',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#..##',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#.....#',
        '#..._.#',
        '...#...',
        '#.....#',
        '#.....#',
        '###.###'
      ] }
    },
    sol: 'LUUUULURDRUUDDLDDRRRD'
  },
  {
    id: 271, w: 14, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '#######',
        '#BP..##',
        '##A..##',
        '##.b.##',
        '##..###',
        '#.=####',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '....o..',
        '..||...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '#_...',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RDLLDLDDURULLLLRRRDDRDLD'
  },
  {
    id: 272, w: 14, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '######',
        '#..###',
        '#.A.##',
        '#....#',
        '#.PB.#',
        '######'
      ], terrain: [
        '......',
        '......',
        '.^....',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '...##',
        '#..=#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '#....',
        '#.._#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.<...',
        '.....'
      ] }
    },
    sol: 'URRDLLULUURDDRDLLLULLDRURDLDRRRDR'
  },
  {
    id: 273, w: 14, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '######',
        '#.A..#',
        '#....#',
        '#.B.P#',
        '#...##',
        '######'
      ], terrain: [
        '......',
        '....>.',
        '.<....',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '#....',
        '##.##',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##=.#',
        '.....',
        '#.._#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '...^.',
        '.....',
        '.....'
      ] }
    },
    sol: 'ULLLDRDRUULLURRRRDRRUULDLDRUU'
  },
  {
    id: 274, w: 14, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '######',
        '##...#',
        '#.PA.#',
        '#B.b_#',
        '######',
        '######'
      ], terrain: [
        '......',
        '..~~~.',
        '....~.',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '###..',
        '#=..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#_..#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DRLUURDLULDRDLLLLDLUUUL'
  },
  {
    id: 275, w: 14, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '########',
        '#....#=#',
        '#..B...#',
        '##...#.#',
        '####.###',
        '#..A.###',
        '#...P###',
        '########'
      ], terrain: [
        '........',
        '....o...',
        '.....|..',
        '........',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#...#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#.#.#',
        '#_..#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LLURDRUUULULURDDRUUURULDDDRRU'
  },
  {
    id: 276, w: 14, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '########',
        '##.#...#',
        '#.A.P..#',
        '#..#..##',
        '#..B...#',
        '#..#..##',
        '#......#',
        '########'
      ], terrain: [
        '........',
        '......>.',
        '........',
        '..^..^..',
        '........',
        '........',
        '....<...',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##..###',
        '#..####',
        '....###',
        '#...###',
        '#=..###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##._#',
        '....#',
        '##..#',
        '#####'
      ] }
    },
    sol: 'DDRDDLLLUURRDRUUDLLLULURRRRRRRDRUUULL'
  },
  {
    id: 330, w: 14, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '########',
        '#..A.._#',
        '#.....##',
        '##..b.P#',
        '##.....#',
        '##..B..#',
        '##...###',
        '########'
      ], terrain: [
        '........',
        '........',
        '...^....',
        '........',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###.#',
        '....#',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#.#.#',
        '.._.#',
        '#..=#',
        '#####'
      ] }
    },
    sol: 'LLDLDDRUUUUDLULURRRRRDRR'
  },
  {
    id: 278, w: 14, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '########',
        '####...#',
        '###.A..#',
        '####...#',
        '###....#',
        '###.B#.#',
        '##...P.#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '...~....',
        '...~....',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.#.#',
        '..=..',
        '##..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '....#',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'LULURURUULDDDLDRULURRRRURDRDLLLL'
  },
  {
    id: 279, w: 14, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '#######',
        '#....##',
        '#..#..#',
        '##B#.b#',
        '#...A.#',
        '#P.._.#',
        '#######'
      ], terrain: [
        '.......',
        '...~~..',
        '.......',
        '.......',
        '...>...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..=#',
        '#....',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#_..#',
        '#...#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRRRUULUULDDDLDRRLUUUURDDDDDRDDLURULLLU'
  },
  {
    id: 280, w: 14, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '#######',
        '#P#.B.#',
        '#.....#',
        '#.b...#',
        '#_A..##',
        '#....##',
        '#######'
      ], terrain: [
        '.......',
        '.....~.',
        '....~~.',
        '....~~.',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..=#',
        '....#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#._.#',
        '...##',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DDDRRUULDRDLRDRUUUUUUUUUUR'
  },
  {
    id: 281, w: 14, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '########',
        '####.._#',
        '#.#...P#',
        '#..A.#.#',
        '##.b...#',
        '#...#..#',
        '##.B...#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '........',
        '......v.',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#..##',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '#.=..',
        '#._.#',
        '##.##'
      ] }
    },
    sol: 'DDDDLLLULURRRDRUUULLLDDDURRDDLLLLULD'
  },
  {
    id: 282, w: 14, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '#######',
        '#..A.P#',
        '#...b.#',
        '#.._B.#',
        '#....##',
        '#..#.##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.....~.',
        '.....~.',
        '....~..',
        '....~..',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#..##',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#=..#',
        '._..#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DLRULLDLDDRUULLURRRRLDRDLURUUUUL'
  },
  {
    id: 283, w: 14, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '########',
        '#.P...##',
        '#....A.#',
        '#.b....#',
        '#......#',
        '#..._..#',
        '#.#B...#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '...~~~~.',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '....#',
        '#.=.#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '.....',
        '#.._#',
        '#####'
      ] }
    },
    sol: 'DDDURULLULDDDDULLDRRDDDLDRRRRD'
  },
  {
    id: 284, w: 14, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '#######',
        '#PB...#',
        '#..#..#',
        '#..#A##',
        '#.b...#',
        '#.._.##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..~....',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.#...#',
        '#=##.##',
        '#.#....',
        '#....##',
        '#.#...#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#.....#',
        '#.....#',
        '......#',
        '#.....#',
        '#_....#',
        '#######'
      ] }
    },
    sol: 'RRRLLDDRRUUDDLLLDRUUURRRRURDDRDLLLLDLLLUU'
  },
  {
    id: 285, w: 14, n: 18,
    root: 'R',
    rooms: {
      R: { palette: 'freeze', map: [
        '########',
        '#...#.P#',
        '#_...B##',
        '#....#.#',
        '#..bA..#',
        '#......#',
        '#......#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '......~.',
        '.....~~.',
        '........',
        '.~~~....',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#...#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#.....#',
        '#.....#',
        '.......',
        '#_....#',
        '#...=.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....~~.',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'LDDDDLLLLDDLLDLUUDDDRUUULURRRURDRDLRRD'
  },
  {
    id: 336, w: 14, n: 19,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '########',
        '#...#..#',
        '#..#.._#',
        '#.B.A#b#',
        '#.P..#.#',
        '#..#...#',
        '#......#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '...~~...',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '....#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#..#.##',
        '#.....#',
        '#......',
        '#...#.#',
        '#_....#',
        '###.###'
      ] }
    },
    sol: 'LUURDDDUURRRURUUDDDRRUUDDDLLLLLLLLLULDD'
  },
  {
    id: 287, w: 15, n: 0,
    root: 'R',
    rooms: {
      R: { palette: 'observatory', map: [
        '#######',
        '##..###',
        '#...###',
        '#....##',
        '#.b...#',
        '#.PA.##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..^....',
        '.v..~..',
        '...~~~.',
        '....~..',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.=_#',
        '....#',
        '##..#',
        '#####'
      ] }
    },
    sol: 'RULDLDRRRRRDRULU'
  },
  {
    id: 288, w: 15, n: 1,
    root: 'V',
    rooms: {
      V: { palette: 'observatory', map: [
        '#######',
        '#P..A.#',
        '#..#bV#',
        '....._.',
        '#.#...#',
        '##....#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.~~~...',
        '.~.~...',
        '..~....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#....',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'RDDRUUURULULDRRRRD'
  },
  {
    id: 289, w: 15, n: 2,
    root: 'R',
    rooms: {
      R: { palette: 'observatory', map: [
        '#######',
        '#.#...#',
        '#....##',
        '#..####',
        '#b....#',
        '#PA...#',
        '#######'
      ], terrain: [
        '.......',
        '.~.~~..',
        '.~~~~..',
        '.~~....',
        '...~...',
        '...~...',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#=._#',
        '#...#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RURRDLLLUULDDDDRDDLULURL'
  },
  {
    id: 290, w: 15, n: 3,
    root: 'V',
    rooms: {
      V: { palette: 'observatory', map: [
        '#######',
        '##_A.P#',
        '##b.b.#',
        '.V...##',
        '##.#.##',
        '#.=...#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...o.~.',
        '.......',
        '..|.|..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#._.#',
        '....#',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '...~.',
        '.....',
        '.....'
      ] }
    },
    sol: 'DLULRDDLLUUUUDDDDDD'
  },
  {
    id: 291, w: 15, n: 4,
    root: 'R',
    rooms: {
      R: { palette: 'observatory', map: [
        '########',
        '#P...###',
        '#......#',
        '#......#',
        '#......#',
        '##..b..#',
        '#...A..#',
        '########'
      ], terrain: [
        '........',
        '........',
        '...~~...',
        '...~~...',
        '...~~...',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_..#',
        '...=.',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'RRDRLLURDRDLLLLLLLDLURR'
  },
  {
    id: 292, w: 15, n: 5,
    root: 'V',
    rooms: {
      V: { palette: 'observatory', map: [
        '#######',
        '#.#...#',
        '#...#.#',
        '.V...A.',
        '#..b..#',
        '##..#P#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..^....',
        '.......',
        '.v.....',
        '..~....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#=_.#',
        '#....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'ULULLULDRRRRRLDLLLLDLULU'
  },
  {
    id: 293, w: 15, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'observatory', map: [
        '#######',
        '###...#',
        '###.b.#',
        '###.b.#',
        '###.#A#',
        '###P._#',
        '#######'
      ], terrain: [
        '.......',
        '...~.~.',
        '...~.~.',
        '.....~.',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '....#',
        '#._=#',
        '#####'
      ] }
    },
    sol: 'RRUDLLUURURDDULLURRRURDRD'
  },
  {
    id: 294, w: 15, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'observatory', map: [
        '#######',
        '#.....#',
        '#.....#',
        '#PAb..#',
        '#..#..#',
        '#....##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.~~.~..',
        '.~~~~..',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#_..#',
        '#.#..',
        '#..=#',
        '#####'
      ] }
    },
    sol: 'RDRUURULULDDURDLLLLULRDD'
  },
  {
    id: 331, w: 15, n: 8,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '#######',
        '#BAbbV#',
        '##...##',
        '..#.P##',
        '#.##.##',
        '#....##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.~.~...',
        '.~..~..',
        '.~~~~..',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '..._.',
        '#..##',
        '#####'
      ] },
      B: { palette: 'pink', map: [
        '#####',
        '#.=.#',
        '##._.',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DLULLLLLLLRULDDDLDLLRRRDRUUUDDLLLUU'
  },
  {
    id: 296, w: 15, n: 9,
    root: 'V',
    rooms: {
      V: { palette: 'observatory', map: [
        '###.###',
        '#_....#',
        '#...b.#',
        '#..#.V#',
        '#.bP.A#',
        '#..##.#',
        '#######'
      ], terrain: [
        '.......',
        '.....~.',
        '..^..~.',
        '....^..',
        '.......',
        '..v....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#_..#',
        '.=..#',
        '#..##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '..>..',
        '.....',
        '.....'
      ] }
    },
    sol: 'RRRRDDDUUDLLLUURRRLULLLDDRDDLUUUDRDRRURUULU'
  },
  {
    id: 297, w: 15, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'observatory', map: [
        '########',
        '###...##',
        '#P.#...#',
        '#...A###',
        '#..b.###',
        '#......#',
        '#..#.bB#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '.<......',
        '....~...',
        '....~...',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '.__..',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RDDDRULURRRRUUUDDDDDRRRR'
  },
  {
    id: 298, w: 15, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'observatory', map: [
        '#######',
        '##....#',
        '#...b_#',
        '#.....#',
        '#bAP.##',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '....>..',
        '.v.....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '....#',
        '#.=_#',
        '#####'
      ] }
    },
    sol: 'URRULLDLLDRDRUULLURRRRRURDLDR'
  },
  {
    id: 334, w: 15, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '########',
        '#..#...#',
        '#......#',
        '#...#..#',
        '#.A....#',
        '#.bP..##',
        '#.b..###',
        '########'
      ], terrain: [
        '........',
        '........',
        '..><....',
        '........',
        '........',
        '....>...',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_..#',
        '#....',
        '#._=#',
        '##.##'
      ] }
    },
    sol: 'ULULDDRURDRDLLLLDLLUDRRUULDRD'
  },
  {
    id: 300, w: 15, n: 13,
    root: 'R',
    rooms: {
      R: { palette: 'observatory', map: [
        '########',
        '#.####.#',
        '#..##A.#',
        '#......#',
        '#.b....#',
        '#P.b.###',
        '##.....#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '...~....',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.....',
        '##__#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.~...',
        '.....',
        '.....'
      ] }
    },
    sol: 'RULURRRDRUDLDDLUULURRDRUUDRULLULLDRURD'
  },
  {
    id: 301, w: 15, n: 14,
    root: 'R',
    rooms: {
      R: { palette: 'observatory', map: [
        '#######',
        '##..A##',
        '#....P#',
        '#...b.#',
        '#...b.#',
        '#B....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..~~~..',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#_...=#',
        '#.#..##',
        '......#',
        '#..##.#',
        '##....#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '....~..',
        '.......',
        '.......',
        '.......'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#._.#',
        '.....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DLRDLLUDLULDDUURURRLDRUUULULUUDRRUURR'
  },
  {
    id: 302, w: 15, n: 15,
    root: 'R',
    rooms: {
      R: { palette: 'observatory', map: [
        '########',
        '#._..B.#',
        '##.b...#',
        '#....P.#',
        '#b..####',
        '#.....##',
        '#A.....#',
        '########'
      ], terrain: [
        '........',
        '........',
        '.....v^.',
        '........',
        '........',
        '.v~~~~..',
        '..~~~~~.',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '.....',
        '#=__#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '.....',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.~...',
        '.....'
      ] }
    },
    sol: 'RUULLLDRDLULDLDURRDLULDDDDLDDRLUURDLD'
  },
  {
    id: 338, w: 15, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '########',
        '#......#',
        '#......#',
        '#.A....#',
        '#P#....#',
        '#...b..#',
        '#.#.b._#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '......~.',
        '......~.',
        '.....~..',
        '.....~..',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_=.#',
        '....#',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.~~~.',
        '.....',
        '.....'
      ] }
    },
    sol: 'URRRURDDLLDDRRULDLDRRRRURRDULLDRURUL'
  },
  {
    id: 304, w: 15, n: 17,
    root: 'V',
    rooms: {
      V: { palette: 'observatory', map: [
        '#######',
        '#_Ab..#',
        '#.....#',
        '...#...',
        '##...V#',
        '###P..#',
        '###.###'
      ], terrain: [
        '.......',
        '.....~.',
        '.......',
        '.~~....',
        '..~~...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#..._.#',
        '#...#.#',
        '......#',
        '##.##.#',
        '#..=###',
        '###.###'
      ] }
    },
    sol: 'RRUUULLLLURRRDDDLUULURRRRRRRLLLDDDLUURULDLUULUUULURRDDLDDR'
  },
  {
    id: 305, w: 15, n: 18,
    root: 'V',
    rooms: {
      V: { palette: 'observatory', map: [
        '###.###',
        '#.A_..#',
        '#...b.#',
        '#....V.',
        '##b..P#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '..~~~~.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##=.#',
        '#_...',
        '#.#.#',
        '#####'
      ] }
    },
    sol: 'LUULLLURDRRRDDDDDRRULDLDDRDLRUULLDRDLLLLU'
  },
  {
    id: 342, w: 15, n: 19,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '#######',
        '#.#..##',
        '#.#...#',
        '#.V.b.#',
        '#AP.###',
        '#.B.###',
        '###.###'
      ], terrain: [
        '.......',
        '.^.....',
        '....>..',
        '.......',
        '...^...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..=#',
        '##...',
        '#..##',
        '#####'
      ] },
      B: { palette: 'pink', map: [
        '##.##',
        '#...#',
        '._#..',
        '#...#',
        '#####'
      ] }
    },
    sol: 'UUUULDDDLDLLRLUURRURRDLLLDLUUUDDRRLLUUUULURRRLLURULLU'
  },
  {
    id: 307, w: 16, n: 0,
    root: 'V',
    rooms: {
      V: { palette: 'labyrinth', map: [
        '###.###',
        '###.###',
        '###.###',
        '#...b..',
        '#.V.AB#',
        '##..#P#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '..<..>.',
        '.......',
        '..v....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###=#',
        '.....',
        '#...#',
        '#####'
      ] },
      B: { palette: 'pink', map: [
        '##.##',
        '#...#',
        '..._#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'UUULLLLURRRRRRRRRRRRRU'
  },
  {
    id: 308, w: 16, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'labyrinth', map: [
        '########',
        '##.....#',
        '##.B..b#',
        '#......#',
        '#...#.##',
        '#..#.###',
        '#..AP###',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#..=#',
        '#...#',
        '#._.#',
        '#####'
      ] }
    },
    sol: 'LLUUUUURDLDRRRUURDDDDUR'
  },
  {
    id: 309, w: 16, n: 2,
    root: 'V',
    rooms: {
      V: { palette: 'labyrinth', map: [
        '#######',
        '#..bP.#',
        '#...#A#',
        '....#..',
        '#V.##.#',
        '#.....#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '.....~.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '##_..',
        '#=..#',
        '#####'
      ] }
    },
    sol: 'RDULLDDLDDLUUURRULLLLDLL'
  },
  {
    id: 310, w: 16, n: 3,
    root: 'V',
    rooms: {
      V: { palette: 'labyrinth', map: [
        '###.###',
        '#.....#',
        '#.P...#',
        '....A..',
        '#..#.b#',
        '#V.#..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#_.=.',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRRDLDDRULULLDDLLLLLLLLLR'
  },
  {
    id: 311, w: 16, n: 4,
    root: 'V',
    rooms: {
      V: { palette: 'labyrinth', map: [
        '#######',
        '#.b.A##',
        '#.#_V.#',
        '...._.#',
        '#b.#..#',
        '#.P#..#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '....~..',
        '....~..',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '..._#',
        '#.=##',
        '##.##'
      ] }
    },
    sol: 'LURULLRUURRRRRDDDUU'
  },
  {
    id: 312, w: 16, n: 5,
    root: 'V',
    rooms: {
      V: { palette: 'labyrinth', map: [
        '#######',
        '##..#.#',
        '#.#...#',
        '#..bV..',
        '#A....#',
        '#.#.P.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#._=#',
        '....#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'URUULLDLLDURRRDLLULDDDRDDLURU'
  },
  {
    id: 313, w: 16, n: 6,
    root: 'R',
    rooms: {
      R: { palette: 'labyrinth', map: [
        '########',
        '#A....##',
        '#.b.b..#',
        '#....#.#',
        '#.P#...#',
        '#._....#',
        '#......#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '......~.',
        '......~.',
        '...~~~~.',
        '...~~~~.',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '#....',
        '#_=.#',
        '##.##'
      ] }
    },
    sol: 'DRULLLULDDDULUUDRULLDL'
  },
  {
    id: 314, w: 16, n: 7,
    root: 'V',
    rooms: {
      V: { palette: 'labyrinth', map: [
        '###.###',
        '#....##',
        '##.Pb.#',
        '###V_..',
        '###_.b#',
        '##..#A#',
        '###.###'
      ], terrain: [
        '.......',
        '..<....',
        '.....^.',
        '.......',
        '.......',
        '..~....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.._#',
        '.....',
        '#..=#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.~...',
        '.~...',
        '.....'
      ] }
    },
    sol: 'URDLDRDLLDDDLDRUDLURDRD'
  },
  {
    id: 315, w: 16, n: 8,
    root: 'R',
    rooms: {
      R: { palette: 'labyrinth', map: [
        '########',
        '#.._...#',
        '#.#.P..#',
        '#.....A#',
        '#....#.#',
        '##..b..#',
        '#...b..#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.._..',
        '#..=#',
        '##.##'
      ] }
    },
    sol: 'RRDDDLLULLDDRUUUUDDDDRRRRDRR'
  },
  {
    id: 316, w: 16, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'labyrinth', map: [
        '########',
        '#..#.b.#',
        '#_B....#',
        '#.#...A#',
        '##._...#',
        '###Pb.##',
        '###...##',
        '########'
      ], terrain: [
        '........',
        '....~...',
        '...~~...',
        '........',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '....#',
        '#_..#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '#######',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'DRURURUULLLRDDLUURRRURDRDL'
  },
  {
    id: 317, w: 16, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'labyrinth', map: [
        '#######',
        '#.....#',
        '##Bb..#',
        '#.A#=.#',
        '#..#.P#',
        '#....##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#....##',
        '#..####',
        '....###',
        '##....#',
        '#...#.#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#_..#',
        '....#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'UUULLLDDDLDRRRRUURRUUURUULLLDRRRRURRDLDLULLD'
  },
  {
    id: 318, w: 16, n: 11,
    root: 'V',
    rooms: {
      V: { palette: 'labyrinth', map: [
        '###.###',
        '##.A..#',
        '#..Vb.#',
        '#.P#..#',
        '#.#...#',
        '#.#...#',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##..#.#',
        '#=....#',
        '#......',
        '#_.#..#',
        '#...#.#',
        '#######'
      ] }
    },
    sol: 'URURDDDLDRUUUURDDDDDDDDRDLLULDU'
  },
  {
    id: 319, w: 16, n: 12,
    root: 'V',
    rooms: {
      V: { palette: 'labyrinth', map: [
        '###.###',
        '#....##',
        '#....P#',
        '#b.AV.#',
        '#.#..##',
        '#....##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '...^...',
        '.....v.',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.###',
        '._.##',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DLDLUURULLDLDRRDDLLUUUUUUDDDRDRR'
  },
  {
    id: 320, w: 16, n: 13,
    root: 'V',
    rooms: {
      V: { palette: 'labyrinth', map: [
        '###.###',
        '#....##',
        '#.#..##',
        '..##V.#',
        '#A.b..#',
        '#.BP.##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'pink', map: [
        '#####',
        '#..=#',
        '....#',
        '##_.#',
        '#####'
      ] }
    },
    sol: 'RULLLLDLDDRURRUULURRDRDLLDLLURRRRRRRURDUR'
  },
  {
    id: 335, w: 16, n: 14,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '###.###',
        '###B#A#',
        '##..bb#',
        '###....',
        '##.V_##',
        '###.P##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '....v..',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '#....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'pink', map: [
        '#####',
        '#.=.#',
        '#...#',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'ULLLUUULUURDDDDLDRRRUUUUURULULDUR'
  },
  {
    id: 337, w: 16, n: 15,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '###.###',
        '#...P##',
        '#.b##.#',
        '...A..#',
        '#.....#',
        '#V.._.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#...._#',
        '#=...##',
        '.......',
        '#.....#',
        '#.....#',
        '#######'
      ] }
    },
    sol: 'LLDDLDRRDRRUULLDLLUURDLDRURDLDRUURDDDRDDLULURRDLLL'
  },
  {
    id: 323, w: 16, n: 16,
    root: 'V',
    rooms: {
      V: { palette: 'labyrinth', map: [
        '###.###',
        '#P....#',
        '#....b#',
        '.V.A...',
        '#....##',
        '###.###',
        '###.###'
      ], terrain: [
        '.......',
        '..~....',
        '.......',
        '..>....',
        '.~~^...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###.#',
        '#.=..',
        '#._.#',
        '##.##'
      ] }
    },
    sol: 'RRRDLDRRRDLURRRRRRLLLURULDDLUUUUDRULLL'
  },
  {
    id: 339, w: 16, n: 17,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '########',
        '#....#.#',
        '##...b.#',
        '##...bA#',
        '###B.###',
        '####...#',
        '#####.P#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#..#..#',
        '.......',
        '##....#',
        '#.....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#_..#',
        '....#',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'ULLUURRRUURRUULRDDRDDLLLLLLRULULDDDDRDDLURUL'
  },
  {
    id: 341, w: 16, n: 18,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '#######',
        '#.P..##',
        '#BbA#.#',
        '#.....#',
        '#.....#',
        '#...._#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#...=.#',
        '#...#.#',
        '..##...',
        '#...###',
        '#...###',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#.....#',
        '#.....#',
        '......#',
        '#...._#',
        '#.....#',
        '#######'
      ] }
    },
    sol: 'DULDDRUURDDLLDRDRRULLULDDDDDLDRRRRUURRR'
  },
  {
    id: 326, w: 16, n: 19,
    root: 'V',
    rooms: {
      V: { palette: 'labyrinth', map: [
        '#######',
        '##Ab.##',
        '#_....#',
        '#P..Vb.',
        '##....#',
        '##....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '..~....',
        '..~..~.',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.=##',
        '._...',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'RDRURULULLLLULDRRRRRDLLLLLDLUURULLLLU'
  },
  {
    id: 343, w: 16, n: 20,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '#######',
        '#P..###',
        '#.#..##',
        '.A....#',
        '##.b..#',
        '#..bV##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.....~.',
        '.....~.',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#_..#',
        '#._.#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRDDLDDRUDRRUURRDDLDRUURDDDRDDLURULUULDDRRRRURDDD'
  },
  {
    id: 344, w: 16, n: 21,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '#######',
        '#...B.#',
        '#.##bV#',
        '.A.bP.#',
        '#_..#.#',
        '###.###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '..<....',
        '..v....',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#....=#',
        '#...###',
        '#...#.#',
        '#...#.#',
        '##._..#',
        '###.###'
      ] },
      B: { palette: 'pink', map: [
        '#####',
        '#..##',
        '#....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RUDLLLLUURRLLDDLLDRDLLLLLLLLLLDLLUDRRULDLUUULUURDUUURR'
  },
  {
    id: 329, w: 17, n: 0,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '###.###',
        '##.V.##',
        '##b...#',
        '.....##',
        '#.PA###',
        '###.###',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##....#',
        '#....=#',
        '#......',
        '#.....#',
        '#..._.#',
        '#######'
      ] }
    },
    sol: 'URDDDDRDLUULDDDDDDDLDRUUURR'
  },
  {
    id: 330, w: 17, n: 1,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '########',
        '#..A.._#',
        '#.....##',
        '##..b.P#',
        '##.....#',
        '##..B..#',
        '##...###',
        '########'
      ], terrain: [
        '........',
        '........',
        '...^....',
        '........',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###.#',
        '....#',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#.#.#',
        '.._.#',
        '#..=#',
        '#####'
      ] }
    },
    sol: 'LLDLDDRUUUUDLULURRRRRDRR'
  },
  {
    id: 331, w: 17, n: 2,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '#######',
        '#BAbbV#',
        '##...##',
        '..#.P##',
        '#.##.##',
        '#....##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.~.~...',
        '.~..~..',
        '.~~~~..',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '..._.',
        '#..##',
        '#####'
      ] },
      B: { palette: 'pink', map: [
        '#####',
        '#.=.#',
        '##._.',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DLULLLLLLLRULDDDLDLLRRRDRUUUDDLLLUU'
  },
  {
    id: 332, w: 17, n: 3,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '#######',
        '###.###',
        '#Vb.#.#',
        '#.A..P.',
        '#.._###',
        '#.#####',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.~.....',
        '.~.....',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##.._.#',
        '#.....#',
        '##....#',
        '#...=.#',
        '#...#.#',
        '#######'
      ] }
    },
    sol: 'LLULRDDLLURURDULLLLRRRRDDDLDRDRUDD'
  },
  {
    id: 333, w: 17, n: 4,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '###.###',
        '#....##',
        '##VA.P#',
        '...b#..',
        '#...###',
        '#.#...#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.....~.',
        '.......',
        '.....~.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#=._.',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LLDLUUUUUURULLLLLULLDRL'
  },
  {
    id: 334, w: 17, n: 5,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '########',
        '#..#...#',
        '#......#',
        '#...#..#',
        '#.A....#',
        '#.bP..##',
        '#.b..###',
        '########'
      ], terrain: [
        '........',
        '........',
        '..><....',
        '........',
        '........',
        '....>...',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_..#',
        '#....',
        '#._=#',
        '##.##'
      ] }
    },
    sol: 'ULULDDRURDRDLLLLDLLUDRRUULDRD'
  },
  {
    id: 335, w: 17, n: 6,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '###.###',
        '###B#A#',
        '##..bb#',
        '###....',
        '##.V_##',
        '###.P##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '....v..',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '#....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'pink', map: [
        '#####',
        '#.=.#',
        '#...#',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'ULLLUUULUURDDDDLDRRRUUUUURULULDUR'
  },
  {
    id: 336, w: 17, n: 7,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '########',
        '#...#..#',
        '#..#.._#',
        '#.B.A#b#',
        '#.P..#.#',
        '#..#...#',
        '#......#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '...~~...',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '....#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#..#.##',
        '#.....#',
        '#......',
        '#...#.#',
        '#_....#',
        '###.###'
      ] }
    },
    sol: 'LUURDDDUURRRURUUDDDRRUUDDDLLLLLLLLLULDD'
  },
  {
    id: 337, w: 17, n: 8,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '###.###',
        '#...P##',
        '#.b##.#',
        '...A..#',
        '#.....#',
        '#V.._.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#...._#',
        '#=...##',
        '.......',
        '#.....#',
        '#.....#',
        '#######'
      ] }
    },
    sol: 'LLDDLDRRDRRUULLDLLUURDLDRURDLDRUURDDDRDDLULURRDLLL'
  },
  {
    id: 338, w: 17, n: 9,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '########',
        '#......#',
        '#......#',
        '#.A....#',
        '#P#....#',
        '#...b..#',
        '#.#.b._#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '......~.',
        '......~.',
        '.....~..',
        '.....~..',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_=.#',
        '....#',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.~~~.',
        '.....',
        '.....'
      ] }
    },
    sol: 'URRRURDDLLDDRRULDLDRRRRURRDULLDRURUL'
  },
  {
    id: 339, w: 17, n: 10,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '########',
        '#....#.#',
        '##...b.#',
        '##...bA#',
        '###B.###',
        '####...#',
        '#####.P#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#..#..#',
        '.......',
        '##....#',
        '#.....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#_..#',
        '....#',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'ULLUURRRUURRUULRDDRDDLLLLLLRULULDDDDRDDLURUL'
  },
  {
    id: 340, w: 17, n: 11,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '#########',
        '#AP.#.#.#',
        '#b..#.#=#',
        '#..b#.#.#',
        '#.......#',
        '#...#...#',
        '#...#...#',
        '#.#.#...#',
        '#########'
      ], terrain: [
        '.........',
        '.........',
        '.........',
        '.........',
        '....|....',
        '..~~.~...',
        '.o.......',
        '.........',
        '.........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.._#',
        '#...#',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '..~~.',
        '.....'
      ] }
    },
    sol: 'RDDLLUUURUULDDDDDDDURRRRDRURULLLLDLUUURULDLUUUULURDDDRRDDRRRRUU'
  },
  {
    id: 341, w: 17, n: 12,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '#######',
        '#.P..##',
        '#BbA#.#',
        '#.....#',
        '#.....#',
        '#...._#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#...=.#',
        '#...#.#',
        '..##...',
        '#...###',
        '#...###',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#.....#',
        '#.....#',
        '......#',
        '#...._#',
        '#.....#',
        '#######'
      ] }
    },
    sol: 'DULDDRUURDDLLDRDRRULLULDDDDDLDRRRRUURRR'
  },
  {
    id: 342, w: 17, n: 13,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '#######',
        '#.#..##',
        '#.#...#',
        '#.V.b.#',
        '#AP.###',
        '#.B.###',
        '###.###'
      ], terrain: [
        '.......',
        '.^.....',
        '....>..',
        '.......',
        '...^...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..=#',
        '##...',
        '#..##',
        '#####'
      ] },
      B: { palette: 'pink', map: [
        '##.##',
        '#...#',
        '._#..',
        '#...#',
        '#####'
      ] }
    },
    sol: 'UUUULDDDLDLLRLUURRURRDLLLDLUUUDDRRLLUUUULURRRLLURULLU'
  },
  {
    id: 343, w: 17, n: 14,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '#######',
        '#P..###',
        '#.#..##',
        '.A....#',
        '##.b..#',
        '#..bV##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.....~.',
        '.....~.',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#_..#',
        '#._.#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRDDLDDRUDRRUURRDDLDRUURDDDRDDLURULUULDDRRRRURDDD'
  },
  {
    id: 344, w: 17, n: 15,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '#######',
        '#...B.#',
        '#.##bV#',
        '.A.bP.#',
        '#_..#.#',
        '###.###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '..<....',
        '..v....',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#....=#',
        '#...###',
        '#...#.#',
        '#...#.#',
        '##._..#',
        '###.###'
      ] },
      B: { palette: 'pink', map: [
        '#####',
        '#..##',
        '#....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RUDLLLLUURRLLDDLLDRDLLLLLLLLLLDLLUDRRULDLUUULUURDUUURR'
  },
  {
    id: 345, w: 17, n: 16,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '#######',
        '#..P..#',
        '#.#.#.#',
        '#.A...#',
        '#.b#B.#',
        '##._..#',
        '#######'
      ], terrain: [
        '.......',
        '.~~....',
        '.......',
        '...~~~.',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#_=.#',
        '#.#..',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRDDDLUDLLULURRRRRDDDRDLURULUURRDULLLDDRRRRRUUUDDDDDRDRRL'
  },
  {
    id: 346, w: 17, n: 17,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '#######',
        '#V#.###',
        '#.#.###',
        '.Bb..##',
        '#.#..P#',
        '#.#Ab.#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '...>...',
        '...v...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'pink', map: [
        '##.##',
        '#=_.#',
        '.....',
        '#_..#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '..>..',
        '.....'
      ] }
    },
    sol: 'DLLLDLDDDDRRDDDDDDDDDDRDDLUUUURDLUUUURRDDDDDDDDLDDDRDRRULU'
  },
  {
    id: 347, w: 17, n: 18,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '###.###',
        '#...P##',
        '#B.##A#',
        '.....V.',
        '#b._..#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..~....',
        '..~~~..',
        '.....v.',
        '.....v.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#.....#',
        '#.=..##',
        '##....#',
        '#_....#',
        '###.###'
      ] },
      B: { palette: 'pink', map: [
        '#####',
        '#...#',
        '#....',
        '##.##',
        '#####'
      ], terrain: [
        '.....',
        '...>.',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'LLLDURRUUDLLLLDLLLURRDRULURLURUULLLLURUURUULDRDLLUU'
  },
  {
    id: 348, w: 17, n: 19,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '#########',
        '#.....#.#',
        '#..#....#',
        '#b.##...#',
        '#....b..#',
        '#P.A##..#',
        '###..##.#',
        '###_###.#',
        '#########'
      ], terrain: [
        '.........',
        '...~~~...',
        '.......~.',
        '.......~.',
        '.........',
        '.........',
        '.........',
        '.........',
        '.........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.._#',
        '.=..#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'UURUURDRDDLLLRRUUULDDDLDRRRURDDDDULUUUURDDDLLDLUUUDDRRRUUULLDDLUUUULURDL'
  },
  {
    id: 349, w: 17, n: 20,
    root: 'R',
    rooms: {
      R: { palette: 'paradox', map: [
        '#######',
        '#..bA.#',
        '#..P..#',
        '#.....#',
        '#..B..#',
        '#_....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....~~.',
        '...v~~.',
        '.v..~~.',
        '...~~~.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#...#=#',
        '#.....#',
        '...._.#',
        '#...#.#',
        '#.#...#',
        '#######'
      ] }
    },
    sol: 'DLDRDRULLURRRRURDURRDLLULDRRDLLLDLDDURULLLLDLUURUULDDDDRDLULDDUUURRRRRRRURRU'
  },
  {
    id: 350, w: 17, n: 21,
    root: 'V',
    rooms: {
      V: { palette: 'paradox', map: [
        '###.###',
        '#.....#',
        '#_.V..#',
        '.......',
        '#P....#',
        '#.b.A.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..~..>.',
        '..~.>..',
        '..~~~..',
        '.....v.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.._#',
        '.....',
        '#.=.#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.^~~.',
        '...v.',
        '.....'
      ] }
    },
    sol: 'DRRURRDDLLURUULDDDLDRRRRLLUUUUUUULULLDLURDRRDRUUUUUUURRLDLUURULLLDLUURD'
  }
  ];
});
