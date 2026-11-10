/* Cubes Paradox levels (written by tools/curate.js — edit there or here, then run `npm run solve`).
   Symbols: # wall  . floor  P player  b box  t teal box  u purple box  _ box goal  = player goal
   Any other capital letter is a box that holds the room with that key. Rooms must be square.
   terrain (optional, same size): ~ ice  o plate  | gate  ^ > v < one-way arrows  O hole  x crumbling floor
   sol = a known solution (U R D L), used for hints; idea = the first hint step; d = how hard (1 easy, 2 medium, 3 hard). */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.LEVELS = factory();
})(this, function () {
  'use strict';
  return [
  {
    id: 1, w: 0, n: 0, d: 1,
    name: {"en":"First Push","ar":"أول دفعة"},
    tip: {"en":"Push the yellow boxes onto the dotted squares","ar":"ادفع الصناديق الصفرا لحد المربعات المنقّطة"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
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
    id: 2, w: 0, n: 1, d: 1,
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..b_#',
        '#.b###',
        '#._..#',
        '###.P#',
        '######'
      ] }
    },
    sol: 'ULLLUURRLD'
  },
  {
    id: 3, w: 0, n: 2, d: 1,
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###..#',
        '#_#b.#',
        '#b...#',
        '#P._.#',
        '######'
      ] }
    },
    sol: 'URRRUULDD'
  },
  {
    id: 4, w: 0, n: 3, d: 1,
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..._#',
        '#...##',
        '#.bP##',
        '#_b.##',
        '######'
      ] }
    },
    sol: 'DLUULURR'
  },
  {
    id: 5, w: 0, n: 4, d: 1,
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##...#',
        '#Pb..#',
        '#.b###',
        '#..__#',
        '######'
      ] }
    },
    sol: 'RDLDRUUURRDLULDDLDR'
  },
  {
    id: 6, w: 0, n: 5, d: 3,
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####P_#',
        '###._.#',
        '###b..#',
        '#...b.#',
        '#._.b.#',
        '#######'
      ] }
    },
    sol: 'RDDDDLULLDRURRUULLDRDRUUDDLLDLLURRURRDDLLRUU'
  },
  {
    id: 7, w: 0, n: 6, d: 3,
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#####_##',
        '#####.##',
        '##.._P##',
        '#..b#..#',
        '#..b.#.#',
        '#...b_.#',
        '########'
      ] }
    },
    sol: 'DRDDLLULULURRLDDRDRRUULUUDLLDLLDRDRRLUULUR'
  },
  {
    id: 8, w: 0, n: 7, d: 3,
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#_..b..#',
        '#_...._#',
        '#.b..###',
        '#......#',
        '#.#.#b.#',
        '#P=....#',
        '########'
      ] }
    },
    sol: 'RRRRURULLRDDLLUUULURRRULLLDDDLUDDDR'
  },
  {
    id: 9, w: 1, n: 0, d: 1,
    name: {"en":"First Step In","ar":"الدخلة الأولى"},
    tip: {"en":"If the green box can’t move, you walk into it","ar":"الصندوق الأخضر إذا ما قدر يتحرك، بتفوت جوّاه"},
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
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
    id: 10, w: 1, n: 1, d: 1,
    idea: {"en":"Walk in one door and out the other","ar":"فوت من باب واطلع من الباب التاني"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#...=.#',
        '###.###',
        '#P.A###',
        '#######',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '....#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRRURUUUR'
  },
  {
    id: 11, w: 1, n: 2, d: 1,
    idea: {"en":"Line the box up under the gap, then go through it","ar":"ظبّط الصندوق تحت الفتحة، وبعدين قطّع من جوّاه"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#=...##',
        '####.##',
        '#PA..##',
        '#######',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '....#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRRRURUUULLL'
  },
  {
    id: 12, w: 1, n: 3, d: 1,
    idea: {"en":"Boxes use doors too: send the yellow box through the room","ar":"الصناديق كمان بتقطع من الأبواب: مرّق الصندوق الأصفر من جوّا الغرفة"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####_#',
        '####.#',
        '#P.bA#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '....#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRRRDRUUUU'
  },
  {
    id: 13, w: 1, n: 4, d: 1,
    idea: {"en":"Park the yellow box first, so the room stops on its spot","ar":"حط الصندوق الأصفر أول، عشان الغرفة توقف على مكانها"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#######',
        '#PA_.##',
        '#...b##',
        '###..##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '....#',
        '#.=.#',
        '#####'
      ] }
    },
    sol: 'RDRDRULLURRRD'
  },
  {
    id: 14, w: 1, n: 5, d: 2,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##P.##',
        '#.bA##',
        '#._.##',
        '#...##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##..###',
        '#..####',
        '#.##=##',
        '#.##.##',
        '#....##',
        '#######'
      ] }
    },
    sol: 'DURDDDDLDLDDDRRRUU'
  },
  {
    id: 15, w: 1, n: 6, d: 2,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#....##',
        '#_#bA##',
        '#P...##',
        '#..#.##',
        '####.##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.=#',
        '...##',
        '#####',
        '##.##'
      ] }
    },
    sol: 'UURRDURDDLLDLURRRDDDR'
  },
  {
    id: 16, w: 1, n: 7, d: 2,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..####',
        '#A.b..#',
        '#.._#.#',
        '#.#...#',
        '##P.###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '###=###',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'RUULUULDDRRDRRUULLDLLUURDLDRLDDDD'
  },
  {
    id: 17, w: 1, n: 8, d: 2,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.##_.#',
        '#..b..#',
        '##..b.#',
        '#._...#',
        '#.AP.##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#..#.##',
        '#.....#',
        '.......',
        '#..=..#',
        '##...##',
        '###.###'
      ] }
    },
    sol: 'UULURDDRRULULDRDLDLLLDLL'
  },
  {
    id: 18, w: 1, n: 9, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..##',
        '##b.##',
        '#...##',
        '#.A_P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.=.#',
        '....#',
        '#####',
        '#####'
      ] }
    },
    sol: 'LULLDRURUULDDLDRRRRURRDLLLRUR'
  },
  {
    id: 19, w: 1, n: 10, d: 2,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.._#',
        '#....#',
        '#.bA##',
        '#.P..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#=.##',
        '##...',
        '#####',
        '#####'
      ] }
    },
    sol: 'RUDLLURUURRDLLDDRUULURDLLLLUL'
  },
  {
    id: 20, w: 1, n: 11, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.._A.#',
        '#.._#.#',
        '#.b#..#',
        '#.b#..#',
        '#.P..##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.#...#',
        '#...#.#',
        '.......',
        '#.#...#',
        '#...=.#',
        '#######'
      ] }
    },
    sol: 'UULURLURRRRRURRDLLLLRRRRRDD'
  },
  {
    id: 21, w: 1, n: 12, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.P_..#',
        '#..#.b#',
        '#..Ab.#',
        '##.._.#',
        '##.#.##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#=..#',
        '##.##'
      ] }
    },
    sol: 'RRDDLDLUULURRRDDRUUURULLLLRRD'
  },
  {
    id: 22, w: 1, n: 13, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#_##P.#',
        '#...b.#',
        '#A_.###',
        '#.#####',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '#....',
        '#.=.#',
        '##.##'
      ] }
    },
    sol: 'RDLLDLLLDLDDURRULLLDLLURUUUDRDLLDLLURRRLDLDDUUUU'
  },
  {
    id: 23, w: 1, n: 14, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.b_.#',
        '#.A#.#',
        '#.b..#',
        '#._P_#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##=##',
        '.....',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'LULUURDLDRDRUURULLLRRDDDLUDRRULDLLUUURDLDDRRLLUURDRDRRRU'
  },
  {
    id: 24, w: 2, n: 0, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_####',
        '#bA###',
        '#.bP##',
        '#_..##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DLULURRRDDDRDL'
  },
  {
    id: 25, w: 2, n: 1, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '###A###',
        '###b.##',
        '#.=._##',
        '#.P.###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'URUUUURUULDDDDDRDLDLLURRL'
  },
  {
    id: 26, w: 2, n: 2, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####_###',
        '####.###',
        '####_###',
        '##..b.##',
        '##.bP###',
        '###A####',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '###..##',
        '##...##',
        '##...##',
        '###.###'
      ] }
    },
    sol: 'UUUDDLDDDDDRDDLUUUUUULURDRU'
  },
  {
    id: 27, w: 2, n: 3, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_..##',
        '#bA..#',
        '#.#bP#',
        '#_.._#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.#...',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'ULULLDURRDLRRDDLLLUURRDULLDDRRUUULLLLDDDD'
  },
  {
    id: 28, w: 2, n: 4, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#_...##',
        '##.#.##',
        '##.A=##',
        '##_b.##',
        '##.#P##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '##...',
        '##..#',
        '#####'
      ] }
    },
    sol: 'UULRUULLDDRRDLLLDLUUUUUDRRUULLRRDD'
  },
  {
    id: 29, w: 2, n: 5, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_.###',
        '#_..A#',
        '#..#b#',
        '####P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##.####',
        '..b.###',
        '#....##',
        '##...##',
        '###.###'
      ] }
    },
    sol: 'UUURULULLLLLDLURRRRRRDDLURULLLLL'
  },
  {
    id: 30, w: 2, n: 6, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####..#',
        '#Ab...#',
        '##..b.#',
        '#P__.##',
        '###.###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '###..##',
        '##.....',
        '##...##',
        '#######',
        '#######'
      ] }
    },
    sol: 'RURURRDLULLLLLDLLURRRRRRDRRUULDRDLLULD'
  },
  {
    id: 31, w: 2, n: 7, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##..####',
        '##...b.#',
        '##P..#.#',
        '##.###_#',
        '##.##..#',
        '#.A....#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DDDDRDRRRRURUUULLLULDDDDDDRDDLULLLRRRRRRRUUU'
  },
  {
    id: 32, w: 2, n: 8, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.A.b._#',
        '#.##.b.#',
        '#####..#',
        '#####P_#',
        '####..=#',
        '####...#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###.#',
        '#....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'URUULLLLLLDLLURRRRRRRDDDRDDLLURDRU'
  },
  {
    id: 33, w: 2, n: 9, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###.###',
        '#.b.###',
        '#.A.###',
        '#P#_###',
        '#..._##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '.......',
        '###...#',
        '#######',
        '#######'
      ] }
    },
    sol: 'URLDDRRUULLURRRRRUUUUDDDDDDDDRRULDLUUUUDDDLLLLR'
  },
  {
    id: 34, w: 2, n: 10, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#....b.#',
        '#.b..._#',
        '##...#.#',
        '#P####_#',
        '#.##.A.#',
        '#...b._#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '....#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DDRRRURRRRDDDULLDRURUUULLURRRLLDRUURUULDDDDDULULLLLDRRRR'
  },
  {
    id: 35, w: 2, n: 11, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##.#.._#',
        '#..P..##',
        '#..=.###',
        '#.#.####',
        '#.#bA.##',
        '#.....##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DLLDDDRRUUURULDDDDRRULDLUUULLURDRRUDLLURDRUUULURRRRDLDL'
  },
  {
    id: 36, w: 2, n: 12, d: 3,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P.###',
        '#_b###',
        '#=.b.#',
        '#_A_.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.B..#',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '#....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DDDRRRRURUULDLLUUURDLDDRRULDLURRRDDLDLLLURRDDRDLLLRURUULLL'
  },
  {
    id: 37, w: 2, n: 13, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P_.##',
        '##_b.#',
        '##..##',
        '#..A.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '..b=.',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RDDRDDRDRRLULUURDLDDDRDDLUUUDDLLLRUURDDDRDRRLULDDRDDLUUUUDDRD'
  },
  {
    id: 38, w: 2, n: 14, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#P######',
        '#._.#.##',
        '#...A..#',
        '###..._#',
        '###b#.b#',
        '###....#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '##..#',
        '#####'
      ] }
    },
    sol: 'DRRDRDRDDRUUDDLLLUURULULLDRRRRRURUUDDRDDLURULLRDDLLUURULULDDRDDLUUUDDLLLRRRRRURUUDLDR'
  },
  {
    id: 39, w: 3, n: 0, d: 1,
    name: {"en":"Box in a Box","ar":"صندوق بالصندوق"},
    tip: {"en":"Plain boxes can go inside the green box too","ar":"حتى الصناديق العادية بتفوت جوّا الصندوق الأخضر"},
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
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
    id: 40, w: 3, n: 1, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.####',
        '##_.P##',
        '##Ab.##',
        '##...##',
        '###.###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#####.#',
        '####._#',
        '####.=.',
        '###...#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'DLDLURULLULDRDDLLURDRUU'
  },
  {
    id: 41, w: 3, n: 2, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##...###',
        '##...._#',
        '##..=P##',
        '#.##..##',
        '#.bA.###',
        '#....###',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '#####',
        '##_##',
        '##.##'
      ] }
    },
    sol: 'DLDDLLLURDRRUDLLURDRUURUULULLDRRLDRDRUUDLURDL'
  },
  {
    id: 42, w: 3, n: 3, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###_####',
        '##._####',
        '##..A.##',
        '##P...##',
        '###.b.##',
        '####..##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##b.#',
        '..._#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RRRDDLUUUUDDRULDLULURRRUU'
  },
  {
    id: 43, w: 3, n: 4, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '##A.b.#',
        '#.=.#.#',
        '#P._..#',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '..._#',
        '#####',
        '##.##'
      ] }
    },
    sol: 'URRUULDRDDLLURDRRRUULLULDRRRDDLLLLURRRRLLLURDL'
  },
  {
    id: 44, w: 3, n: 5, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '###.._#',
        '#P_Ab.#',
        '##.b..#',
        '###..##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '####_..',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'RDRUDDRURUULLLRRULDRRDDLULUR'
  },
  {
    id: 45, w: 3, n: 6, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#...P..#',
        '#..#Ab##',
        '#......#',
        '#._....#',
        '#......#',
        '#....#.#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#.._..#',
        '......#',
        '#....##',
        '#.....#',
        '###.###'
      ] }
    },
    sol: 'DDLDRUUURDDDDDUURDLLLDLU'
  },
  {
    id: 46, w: 3, n: 7, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####..#',
        '##..A.#',
        '#_=...#',
        '#.bP#.#',
        '###...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##_##',
        '##.##',
        '#####'
      ] }
    },
    sol: 'ULLDRURRRUULDRDDDLLUULURDDDRRUUUULDDDUURDLLL'
  },
  {
    id: 47, w: 3, n: 8, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###..###',
        '##..A..#',
        '##P.##.#',
        '#...b..#',
        '#._...##',
        '##.#..##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.._.#',
        '#####',
        '#####'
      ] }
    },
    sol: 'RDDRRULLRRRUULLULDDDULDLDRRRRRLLDRULULUURRRDDLLLULD'
  },
  {
    id: 48, w: 3, n: 9, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##._###',
        '#..AP.#',
        '#...b##',
        '#.#...#',
        '###...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_###',
        '..#..',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DULULDLDRRDDRRULDLUULUURDLDRRLURDLDDRRULLLDLLUDRRURRDLUUU'
  },
  {
    id: 49, w: 3, n: 10, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####..#',
        '##.#A.#',
        '#..b._#',
        '#....P#',
        '##..#.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#.._.',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'UUULDDRDLLDLULURDRRUDLLURDRRUUULDDDDLDRUUURDLLDLULURRR'
  },
  {
    id: 50, w: 3, n: 11, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##_P###',
        '#..b.=#',
        '#...A.#',
        '####..#',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '###_###',
        '###.###',
        '#######',
        '#######'
      ] }
    },
    sol: 'DRRDDLURULLULDLDRURRRDDLULRRULLULDDDDUUULDRRURRDDLURULLDLURRR'
  },
  {
    id: 51, w: 3, n: 12, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##..#.##',
        '##_P.A.#',
        '#.b#...#',
        '#.....##',
        '####..##',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '##..###',
        '##...##',
        '##..._#',
        '##...##',
        '#######'
      ] }
    },
    sol: 'LDLDRRRURRULLLULDRRDDDRUURULLLULDDDDDDLDRRULUUUULDRRRDRUURULLL'
  },
  {
    id: 52, w: 3, n: 13, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '#.AbP##',
        '#.#.b##',
        '#.#...#',
        '#.._._#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '.#._.',
        '#####',
        '##.##'
      ] }
    },
    sol: 'DLDDRRULUUULDRDDDLLLUUURRURDDULLLDDDRRUDRRULDLLLUUURRURDDULLLDDDRRRRULLRUULDULLDDDRRRUULD'
  },
  {
    id: 53, w: 3, n: 14, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '###.#..#',
        '#...A..#',
        '##..b_.#',
        '##.#P..#',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###._.#',
        '..#....',
        '#.##..#',
        '#....##',
        '###.###'
      ] }
    },
    sol: 'RULUULLUULLRLLDRRDRRULDLURRUULDRDLLLURDRRUULDRDLLLLLDLUDDLDDUUULLUULLRRRDRRUULD'
  },
  {
    id: 54, w: 4, n: 0, d: 2,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###.###',
        '##_A###',
        '##..###',
        '##.####',
        '##P####',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '....###',
        '#b#.###',
        '#=..###',
        '###.###'
      ] }
    },
    sol: 'UUURRRRDDLLUDRRUULLLRDD'
  },
  {
    id: 55, w: 4, n: 1, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##...#',
        '##P=_#',
        '#..A.#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '##b..',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RDDRDDLUUUDRDRRLLUR'
  },
  {
    id: 56, w: 4, n: 2, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.A__#',
        '#...##',
        '#...##',
        '#.P###',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '#...#',
        '#.b.#',
        '##.##'
      ] }
    },
    sol: 'UUUURUULDDDDLURDLDDRUULUR'
  },
  {
    id: 57, w: 4, n: 3, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.A.##',
        '##P..#',
        '#..b_#',
        '#..._#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '#.b..',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'UURUULDDDDDRLLDRR'
  },
  {
    id: 58, w: 4, n: 4, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_..P#',
        '#b.A.#',
        '#.__.#',
        '###.##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#####.#',
        '####...',
        '####.b#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'DLLLLDDRULURRLDDLLDDLUDRRRUULDULD'
  },
  {
    id: 59, w: 4, n: 5, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###=..#',
        '###.#A#',
        '##..#P#',
        '#.....#',
        '##_#..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '####..#',
        '####b.#',
        '..b....',
        '#._...#',
        '#######',
        '#######'
      ] }
    },
    sol: 'DLLUUURRDDUULLDDDRRRDRRURRUULDDRDLLULLLLLULDURUU'
  },
  {
    id: 60, w: 4, n: 6, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.P.##',
        '##A#._#',
        '##b...#',
        '#....##',
        '#....##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '.....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LDURRDDDDLLLURDRURULRUULLDDRDDLLURRDRUURULLDLLURRR'
  },
  {
    id: 61, w: 4, n: 7, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.._..P#',
        '#.....##',
        '#......#',
        '#...A..#',
        '#....._#',
        '#......#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##....#',
        '#...b.#',
        '.......',
        '##...##',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'LDDLDLDRRRRURURRDRDLLLLLLLDLUUUU'
  },
  {
    id: 62, w: 4, n: 8, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##_###',
        '##P..#',
        '#.A_.#',
        '###.##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#..b###',
        '#..._.#',
        '...#..#',
        '##.b.##',
        '###..##',
        '###.###'
      ] }
    },
    sol: 'DDLDDDRDRUURULDDLLUULURDRUUDDLDLLLRU'
  },
  {
    id: 63, w: 4, n: 9, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###P.#',
        '###A_#',
        '#..._#',
        '#.=..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '####...',
        '###.b.#',
        '##..b_#',
        '###.###'
      ] }
    },
    sol: 'RDLLDDLRUULDLDDURUURRRDLRUULDRDDLLLURDRRUDLLURDL'
  },
  {
    id: 64, w: 4, n: 10, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#####.##',
        '#####A.#',
        '#_.#P..#',
        '#..#...#',
        '#._...##',
        '#..#.###',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '..b..',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRULLDLLURUUUDDRDLLLDLLURRRLLUUUDURRDLDLLLDLUURDRRRUULDRDLL'
  },
  {
    id: 65, w: 4, n: 11, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#####_##',
        '####..##',
        '###....#',
        '###..###',
        '#P.bA###',
        '#._...##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###b.##',
        '###..##',
        '###_...',
        '###.###',
        '#######',
        '###.###'
      ] }
    },
    sol: 'RDRRUULURURDDRDDLUUUDRDDRRRLULDDDLDLLURRURDDDDRDRRRLL'
  },
  {
    id: 66, w: 4, n: 12, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P###_#',
        '#_###_#',
        '#..#..#',
        '#..Ab.#',
        '#.....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '.b..#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DDRDRRRDRRULLLLDRRULLDLLUUDRRRDRUU'
  },
  {
    id: 67, w: 4, n: 13, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..###',
        '#..PA#',
        '#_...#',
        '##_###',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '###.###',
        '....###',
        '##.b..#',
        '##..b.#',
        '###.###'
      ] }
    },
    sol: 'RRRRDDURRDLULULLLLDRUDLURRRDRDRRULLDLURULLLLDLLUURDDRRUURULDLURULLLLLULD'
  },
  {
    id: 68, w: 4, n: 14, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###P.._#',
        '####_.##',
        '###..###',
        '#.._..##',
        '#..A..##',
        '##..####',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#...###',
        '..#b##.',
        '###b###',
        '###.###',
        '###.###'
      ] }
    },
    sol: 'RDDDDLDLULURRDRULURRURRDDDUUULLDLLDDRRULLURRURRDDDDUUUULLDLLDDRRULUUUUUUULLDLLRRDLDDDLLLURDRRUU'
  },
  {
    id: 69, w: 5, n: 0, d: 1,
    name: {"en":"Inside Inside","ar":"جوّا الجوّا"},
    tip: {"en":"Put the green box in the purple one… then walk into the green one","ar":"حط الأخضر جوّا البنفسجي… وبعدين فوت إنت جوّا الأخضر"},
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
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
    id: 70, w: 5, n: 1, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.A.####',
        '#...####',
        '#.#.####',
        '#.#.####',
        '#B#.##P#',
        '#......#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##.=#',
        '#####',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '#....',
        '#._.#',
        '#####'
      ] }
    },
    sol: 'DLLLLLUUUURRULLLULDDDDR'
  },
  {
    id: 71, w: 5, n: 2, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '####P.##',
        '###..A.#',
        '#......#',
        '#.B...##',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#=###',
        '#.###',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#_.##',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DDLLLDRRRURRULULDDLDRRRDRRULDLUUULUU'
  },
  {
    id: 72, w: 5, n: 3, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####..#',
        '####B.#',
        '##....#',
        '##AP..#',
        '#....##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '.=.##',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#.._#',
        '..###',
        '#####',
        '##.##'
      ] }
    },
    sol: 'URRUULDDRDLULDRDLUULDDDDDLLLRRR'
  },
  {
    id: 73, w: 5, n: 4, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###_b.#',
        '##....#',
        '#PB..##',
        '#...###',
        '#.A.###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '.####..',
        '###...#',
        '###=###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#####_#',
        '#####.#',
        '.####..',
        '#####.#',
        '#######',
        '#######'
      ] }
    },
    sol: 'RURRRULDDLULDRDLULDRRDLLLLDLLDDDUUUU'
  },
  {
    id: 74, w: 5, n: 5, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###...##',
        '###A#.##',
        '###...##',
        '###.#B##',
        '###P...#',
        '#......#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '###=#',
        '###.#',
        '##..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##._#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'UURRDDRDLLLUUURRUULLDDDDRDLLLLDLLURDRUUURUU'
  },
  {
    id: 75, w: 5, n: 6, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#...###',
        '#.PB..#',
        '#.A..##',
        '#.#####',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#####..',
        '##=##.#',
        '##....#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '####..#',
        '.###...',
        '####..#',
        '#_....#',
        '###.###'
      ] }
    },
    sol: 'RDRUURUURRRLLLULDRRDLLLULDDRDLLLLLDDLLLU'
  },
  {
    id: 76, w: 5, n: 7, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '###.#..#',
        '#P.AB..#',
        '##.....#',
        '########',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '.##..',
        '##=.#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#_..#',
        '#....',
        '##..#',
        '#####'
      ] }
    },
    sol: 'RRDRRRUULDRDLLLURDRRUULDRDLLLLLDLURULLLDL'
  },
  {
    id: 77, w: 5, n: 8, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####..#',
        '#_.#_B#',
        '#.b...#',
        '#.P.A.#',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###=#',
        '.##..',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '..b.#',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'RURUURDLDRRDRRULLLLURDLLDLLURRDRUDRRDRRUULDRDLLLU'
  },
  {
    id: 78, w: 5, n: 9, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '#PA..##',
        '#.B#..#',
        '#.....#',
        '####..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '..###',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#####',
        '._##.',
        '#..=#',
        '#####'
      ] }
    },
    sol: 'RDLDRRRUULULDDLDRRRRRRDRDDRR'
  },
  {
    id: 79, w: 5, n: 10, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.#####',
        '#..####',
        '#A...##',
        '#..B.##',
        '#.P####',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.=.#',
        '.####..',
        '#######',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '#....',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'ULURRRDLULLDDRULURULLULLUUUDDRDRRULLDDLUUUUURUULDRDLLLUL'
  },
  {
    id: 80, w: 5, n: 11, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##.#####',
        '##..#P.#',
        '##A..b.#',
        '#..##.B#',
        '#.....##',
        '#####.##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.=###',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#.._#',
        '#....',
        '#.._#',
        '#####'
      ] }
    },
    sol: 'DLLULDDLDRRRRRDRDDULLLUURRRURDLLLLDDRRRUDLLLUURRRURDDDLDDRULURRR'
  },
  {
    id: 81, w: 5, n: 12, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####..##',
        '#....A##',
        '#......#',
        '##.B.###',
        '##.#P###',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##=.###',
        '#######',
        '######.',
        '#######',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '##...',
        '##._#',
        '##.##'
      ] }
    },
    sol: 'ULLLDLDDURUULLDRRRUURDDDRDRRLLULDDDRDDLUUUDRDRRLRUULDRDLLRULDDDRDDDL'
  },
  {
    id: 82, w: 5, n: 13, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P._.#',
        '#.B..#',
        '###..#',
        '##.A.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##..###',
        '#...###',
        '..b.###',
        '##=..##',
        '##...##',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##._#',
        '#....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DRURDDDDDDULLDRDDRRULDLURULLLRRRUUUUURDDLLLDLLURDRULURRRD'
  },
  {
    id: 83, w: 5, n: 14, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###..###',
        '###B.###',
        '###...##',
        '##..A###',
        '##._.###',
        '##...P##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##b=#',
        '...##',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '._...',
        '#####',
        '#####'
      ] }
    },
    sol: 'LULUURUULDDDLDRDRUULURLUURDDDLDRRRUUULURRRURRDLLLLULDDLDDRRUULURRRURRDLULDDR'
  },
  {
    id: 84, w: 6, n: 0, d: 2,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.#..#',
        '#.....#',
        '#.._###',
        '#.A..##',
        '#...P.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#=..#',
        '....#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LLULURRRU'
  },
  {
    id: 85, w: 6, n: 1, d: 3,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####.P#',
        '#.#...#',
        '#_....#',
        '#A##b_#',
        '#.....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '###=.',
        '#####',
        '#####'
      ] }
    },
    sol: 'DDDDLLLLUDRRRUULURURDDLLLLL'
  },
  {
    id: 86, w: 6, n: 2, d: 3,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.##_#',
        '#_.#_#',
        '#.Abb#',
        '#...P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#####=#',
        '#####.#',
        '#####..',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'ULDLLURRDRULLULLUU'
  },
  {
    id: 87, w: 6, n: 3, d: 3,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '##.#...#',
        '#.b.A..#',
        '#.P._#_#',
        '###..###',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '###=###',
        '....##.',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'RURURRDLULDLDLLURRRRURDLLLDRRRRU'
  },
  {
    id: 88, w: 6, n: 4, d: 3,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '#####..#',
        '###.AbP#',
        '#.._.._#',
        '#...#..#',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#=###',
        '..###',
        '#####',
        '#####'
      ] }
    },
    sol: 'ULDRDLLLDLLURRURRURDLDLRRRU'
  },
  {
    id: 89, w: 6, n: 5, d: 3,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '##..####',
        '#P_b.###',
        '#_b...##',
        '#B#._A.#',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '.#...',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '##=.#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RURDRDDLULULDRRRRDDDRRRLULULDLLDDRDDLUUUDD'
  },
  {
    id: 90, w: 6, n: 6, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###_###',
        '##...##',
        '##.Pb.#',
        '#_.bA.#',
        '###.#_#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..=#',
        '#....',
        '##..#',
        '#####'
      ] }
    },
    sol: 'URDDDRDDLUUUDRDRRULULLDDRUURDRDLLLRRRDDR'
  },
  {
    id: 91, w: 6, n: 7, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#####.##',
        '#####_##',
        '####.P##',
        '###__.##',
        '#.b.A.##',
        '#....###',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#=..#',
        '#.b..',
        '##..#',
        '#####'
      ] }
    },
    sol: 'DDLDLURULLULLDRRRRDDLLLURRDRURUUDLLLULLDRRRLULL'
  },
  {
    id: 92, w: 6, n: 8, d: 3,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.#....#',
        '#._.##.#',
        '#_b#...#',
        '##PA...#',
        '#....#.#',
        '#......#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.=#',
        '###..',
        '#####',
        '#####'
      ] }
    },
    sol: 'RRURRUULLLDLDDRRURRDLLLDDLUURRURRUULLLDLLLULUUDRDDRDDLUUULLU'
  },
  {
    id: 93, w: 6, n: 9, d: 3,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#_P..##',
        '#..B#.#',
        '#A#.#_#',
        '#.b..b#',
        '#._...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##.##',
        '##.=#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#####',
        '##...',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'RDDULLDDRDRUDRRULLLLLLDDDUUURRDDRDLULLDDDDR'
  },
  {
    id: 94, w: 6, n: 10, d: 3,
    idea: {"en":"The green box has to go inside the main room","ar":"الصندوق الأخضر لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###...#',
        '###..##',
        '#PA.._#',
        '#._.###',
        '#.b..##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###.#',
        '#.B..',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#.=.#',
        '.....',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'RDLDRURURULLDLLURRRRRURUUDDDRDRRLUULDDDDRDLLLRURUULLDDRRUDLLUURRRRRUR'
  },
  {
    id: 95, w: 6, n: 11, d: 3,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '##.A.B.#',
        '#..b...#',
        '#...#._#',
        '##P#####',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.C##',
        '.._..',
        '##.##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '###.###',
        '.##.##.',
        '###.#=#',
        '###...#',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '##..#',
        '#....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'URURULLLLDDUURRRRDRRULLLLLRRDDLLURDRULUUUUURUULDDDDDDUURRRDDLLURRRRULLLLRRRRRDDDDDDDRRU'
  },
  {
    id: 96, w: 6, n: 12, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.##.##',
        '#...A##',
        '#_#...#',
        '###b_.#',
        '#P....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '..=..',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RRRUULURRRUUUDDRDDLURULDDLUUUULULLRRRRUUUDDRDLLLDLLURRRLDLDDUURULLLLLUUUDDDD'
  },
  {
    id: 97, w: 6, n: 13, d: 3,
    idea: {"en":"The green box has to go inside the main room","ar":"الصندوق الأخضر لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.A.#',
        '##._.#',
        '#...##',
        '###.P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '..B.#',
        '##..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#.=##',
        '#_.b.',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LUUUURUULDRDLLDLLUURDDDDURULLLLLDLDDDRUUUDDRULLLDLLUURDDDDDDRDDLUUUDDLLLRRRRDDDULUUURULU'
  },
  {
    id: 98, w: 6, n: 14, d: 3,
    idea: {"en":"The green box has to go inside the main room","ar":"الصندوق الأخضر لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..####',
        '##..b.#',
        '##..._#',
        '#P..#_#',
        '#.A.###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '##.B.',
        '##.##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#..##',
        '...##',
        '#..##',
        '#####'
      ] }
    },
    sol: 'RDDDRRLULUULDRRRDRUUUUURRULLLLULDDDDDLDRRRDRUUUULURRURDULLLLULUUDDDLDRRRDRUUUULURR'
  },
  {
    id: 99, w: 7, n: 0, d: 2,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '##A##',
        '##b##',
        '##P##',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '###....',
        '##....#',
        '##..B.#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '##..C##',
        '##.####',
        '...####',
        '#######',
        '#######',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '..._#',
        '#####',
        '#####'
      ] }
    },
    sol: 'UUULURURDDULDRRRRUURRRR'
  },
  {
    id: 100, w: 7, n: 1, d: 3,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P#####',
        '#....##',
        '##.#..#',
        '##.##A#',
        '##.b..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '#..B###',
        '..#..##',
        '#....##',
        '#..####',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#C#####',
        '#.#####',
        '..#####',
        '#.#####',
        '#...###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '##_##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DRRRDRDDDDDRDLLDLURRUUUUUULULLDDDRRRRLLLLUUURRDRDDDDDDLLUUULLUUUUU'
  },
  {
    id: 101, w: 7, n: 2, d: 3,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#A..###',
        '#.#.###',
        '#.#b###',
        '#....##',
        '#...P##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##.B.##',
        '###.###',
        '###.#..',
        '###.#.#',
        '###...#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '##C####',
        '##.####',
        '...####',
        '##...##',
        '##...##',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '##_##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'ULLLUUUURRUURRRDDUULLLDDLLDDDDRDRRULLDLUUUUUUUUUURULDLUUUUU'
  },
  {
    id: 102, w: 7, n: 3, d: 3,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.###',
        '#.b.##',
        '#..A##',
        '##.P##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '#.##..#',
        '.......',
        '#.....#',
        '###..B#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '##C####',
        '#...###',
        '....###',
        '##..###',
        '#######',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '._..#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'ULLURRRRRDRRUULDDLDRRRURRDDLUUUURUL'
  },
  {
    id: 103, w: 7, n: 4, d: 3,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '#Ab.P#',
        '#.####',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#####B#',
        '####..#',
        '####...',
        '###.=.#',
        '###...#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '##.C.##',
        '##..###',
        '###.###',
        '###.###',
        '###.###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '##._#',
        '....#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'LLLLULDRDDLLURDRUUUUUUUUUUDDLURRRRDRULLLLDDDDDDDDL'
  },
  {
    id: 104, w: 7, n: 5, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '##.P#',
        '#_.A#',
        '#####',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#####.#',
        '####.B#',
        '.......',
        '#######',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###..C#',
        '###.#.#',
        '....#.#',
        '##....#',
        '##..###',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '.b...',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LDRRRRRURRRRUUUUDDDRRRDRRULLLLRRRDDDDDLLULLLLURDDDDUURRRRDDDDDLLDLURULLLLLLLLL'
  },
  {
    id: 105, w: 7, n: 6, d: 3,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.A.##',
        '#.#.##',
        '#P#b##',
        '#...##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####.##',
        '####B..',
        '##....#',
        '#.....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '##...##',
        '##.....',
        '##.#.##',
        '##..C.#',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '#..##',
        '..._#',
        '#####',
        '#####'
      ] }
    },
    sol: 'UURLDDDRRUUUURURULLLULUUUDDRDLLLURDRRUULDRDLLLLLLULLDRURDDDDLDR'
  },
  {
    id: 106, w: 7, n: 7, d: 3,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.#=#',
        '#P...#',
        '#b.A##',
        '#...##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '###.B.#',
        '####.##',
        '.###...',
        '##...##',
        '##...##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#C#####',
        '#.#####',
        '..#....',
        '#.....#',
        '#...###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#_###',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RDDRUUUURURRRLLDDLUUULURDRUUUUULURURRDLLLDLUUUUURULDLURDDDDLLRDDRRRRRU'
  },
  {
    id: 107, w: 7, n: 8, d: 3,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '#.####',
        '#Pb.A#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#...B.#',
        '##.=.##',
        '....###',
        '#.#.###',
        '#...###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#C#####',
        '#.#####',
        '#..##..',
        '#.....#',
        '#...###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#_.##',
        '#....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RRRRRURRUUURRURRLDLDLLDDRRUUUUUDDRULLLLDLLLDLUUUUURULDLURDDDDRDRRRURRRD'
  },
  {
    id: 108, w: 7, n: 9, d: 3,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.A.##',
        '#.#._#',
        '#....#',
        '###.P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##.B.##',
        '##.#.##',
        '...#...',
        '#.....#',
        '#....##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#...C.#',
        '#....##',
        '..#.###',
        '###.###',
        '###.###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '#..##',
        '.b...',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'ULLLUURRRRUURRRURRRUUULLRRRRRLDLUDLLURDRUUULUURDDDDDDDDDDDRDLLDLLUURDLDRURDDDUUULULLLLDDRRDRU'
  },
  {
    id: 109, w: 7, n: 10, d: 3,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###P.#',
        '##..b#',
        '#.A..#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '._..##.',
        '##.b..#',
        '##B...#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '###.#.#',
        '###..C#',
        '##.=#.#',
        '##....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##._#',
        '.....',
        '##..#',
        '#####'
      ] }
    },
    sol: 'DLDDDDLDRDRRULLULLLLRRUURDDDDDLDDDDDRRRRUUUDDDDDLLLLUUUUUURDRRULLULDDDDDDLDRRRRRDRULLLLLU'
  },
  {
    id: 110, w: 7, n: 11, d: 3,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##A.##',
        '#....#',
        '##.b.#',
        '###P.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#B#####',
        '#.#####',
        '..#...#',
        '#..b..#',
        '#...###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '###..##',
        '###..##',
        '#C...##',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#_.##',
        '#.._.',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'ULUUULURURRDLLLRDDDDRRULDLUUULLUUUUURUULDRDLDDDDRRURRDLLLDLUUUUURUULDRDLLLLDLLUR'
  },
  {
    id: 111, w: 7, n: 12, d: 3,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###P##',
        '#...##',
        '#.b.##',
        '#...A#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '###.#.#',
        '##...B#',
        '......#',
        '#####.#',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###...#',
        '#.##.C#',
        '....#=#',
        '#.....#',
        '###...#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '.#_##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DLDLDRRRRRRURRRRRDRRUULULUUDLLDRRRDRRDDDULURRDRRULLLLDRUDLLLURRDRUUURULULLDRRRDRUUUUUDDD'
  },
  {
    id: 112, w: 8, n: 0, d: 1,
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
    id: 113, w: 8, n: 1, d: 3,
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '###._.#',
        '#.V.P_#',
        '###bbb.',
        '###_.##',
        '###..##',
        '#######'
      ] }
    },
    sol: 'LDRRRRDRU'
  },
  {
    id: 114, w: 8, n: 2, d: 3,
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '####V##',
        '####b##',
        '##.#b##',
        '#._._.#',
        '#.bP_.#',
        '###.###'
      ] }
    },
    sol: 'ULLDRURRUUDDLDDDD'
  },
  {
    id: 115, w: 8, n: 3, d: 3,
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '##.._.#',
        '#_.b._#',
        '##bb.##',
        '##.P.##',
        '#=.#V##',
        '#######'
      ] }
    },
    sol: 'LURUUUUULURLLDDDL'
  },
  {
    id: 116, w: 8, n: 4, d: 3,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '#.bV.##',
        '#..#.##',
        '...#.##',
        '#..__.#',
        '###.bP#',
        '###.###'
      ] }
    },
    sol: 'LULLUULURRRRURDLDRRDRRULDLDDD'
  },
  {
    id: 117, w: 8, n: 5, d: 3,
    idea: {"en":"The main room has to move before anything else","ar":"الغرفة الرئيسية لازم يتحرك قبل أي إشي"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '##_...#',
        '##.#_.#',
        '..P#...',
        '#.#.bV#',
        '#..b..#',
        '###.###'
      ] }
    },
    sol: 'LDDRRDDUDLULDDUURURLDDRUDLLLLUULLDLURUULL'
  },
  {
    id: 118, w: 8, n: 6, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '##..P.#',
        '#..b..#',
        '.b#.###',
        '#_A=_##',
        '#.##.V#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#...#',
        '##..#',
        '#####'
      ] }
    },
    sol: 'LLDRDDLRUUURRDLULDDULLDDDDRDDLUUUURRUULLDURRDD'
  },
  {
    id: 119, w: 8, n: 7, d: 3,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '####.P#',
        '###._b#',
        '.##..=.',
        '##._.b#',
        '#._bV.#',
        '###.###'
      ] }
    },
    sol: 'LDDRRRUDLLLLLUURDLLDRDDLLLDLUR'
  },
  {
    id: 120, w: 8, n: 8, d: 3,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '#.#####',
        '#.#####',
        '#.b.###',
        '#V__.##',
        '#=b.P##',
        '###.###'
      ] }
    },
    sol: 'LDDRLUUUUURULULRDDLLUUUUULL'
  },
  {
    id: 121, w: 8, n: 9, d: 3,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '###.A.#',
        '##=...#',
        '.._P.b#',
        '#.###V#',
        '#_.b_.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.####',
        '#####',
        '##.##'
      ] }
    },
    sol: 'URRDDDDDLDLLLLLRRRRRURRRULDDLLLLRRRRRDDDDRDLUL'
  },
  {
    id: 122, w: 8, n: 10, d: 3,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '#.#P.##',
        '#Ab..##',
        '._.#.##',
        '##V...#',
        '#__.b.#',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#######',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'RDDDRDLUUUULUULURRURDDDRDLULDLUUUUDDLURDDDRRULDLUULURRRLURDDDRDLL'
  },
  {
    id: 123, w: 8, n: 11, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '#..V.##',
        '#b.P.##',
        '#.=#.A.',
        '##_#..#',
        '#.._..#',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '..#.###',
        '#....##',
        '#....##',
        '###.###'
      ] }
    },
    sol: 'RULLLLRRRRDDDRDLUUULLDLUUUURULDDDDRRRDDDLDDRDDDDDDDDLLURDRUUUUUDDDDLLULLRUULURURRDLULDD'
  },
  {
    id: 124, w: 8, n: 12, d: 3,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '#.b..##',
        '#_#...#',
        '._#.#V#',
        '#...bP#',
        '##....#',
        '#######'
      ] }
    },
    sol: 'LDLUUURRDDDDDDDLLUUURLDDDRDRRRLURDDDDDLLUDRDRRR'
  },
  {
    id: 125, w: 8, n: 13, d: 3,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '#.P_V_#',
        '#b_####',
        '#bb....',
        '#.=.###',
        '##...##',
        '###.###'
      ] }
    },
    sol: 'DDRRRRRLLLDDRDDLULUUUULUURRRRRRRLLDLUUULURRRRRLLLLDL'
  },
  {
    id: 126, w: 8, n: 14, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '#######',
        '####..#',
        '##.#Ab.',
        '#P_..##',
        '#V..._#',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '###..##',
        '....._.',
        '###.#b#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'RDLLLLLLDDRRUDLLUURRRRULDRRRURRRRRDDRRUULLLLLRRRDDDDUDLLLLLRULDDLDR'
  },
  {
    id: 127, w: 9, n: 0, d: 2,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.##..#',
        '#AP..=#',
        '#...#.#',
        '#..#..#',
        '#..#..#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...O...',
        '...O...',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#.b..',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '..O..',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'LLDLLURRRRRRR'
  },
  {
    id: 128, w: 9, n: 1, d: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..####',
        '#.A#.##',
        '#....##',
        '#..#.##',
        '#P##_##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '...O...',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###...#',
        '..#.#.#',
        '#..b..#',
        '##..###',
        '###.###'
      ] }
    },
    sol: 'UUURRDRDRURRUULLDDDDUULLULLDRLUURDLDRRRRDRRUUUUUDD'
  },
  {
    id: 129, w: 9, n: 2, d: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##.###=#',
        '##.....#',
        '##...###',
        '##.#####',
        '#.A#####',
        '#P.#####',
        '########'
      ], terrain: [
        '........',
        '........',
        '.....O..',
        '....O...',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###_###',
        '..#..b.',
        '#.b..##',
        '##...##',
        '#######'
      ] }
    },
    sol: 'URRDRLULLDRUUURULLLDDLLURDRULURRRRRRRU'
  },
  {
    id: 130, w: 9, n: 3, d: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.P...#',
        '#.A...#',
        '#..#._#',
        '#..####',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...O...',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.b.#',
        '...##',
        '#####',
        '#####'
      ], terrain: [
        '.....',
        '...O.',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'DLDRRRUUDDLLLURLDDRULURRRURD'
  },
  {
    id: 131, w: 9, n: 4, d: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..####',
        '#...###',
        '#.b._##',
        '##..###',
        '#PA####',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...O...',
        '...O...',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '..b..',
        '##..#',
        '#####'
      ] }
    },
    sol: 'RRURUUULUURDLDRDDDRDDLUUUUULUURDLDRR'
  },
  {
    id: 132, w: 9, n: 5, d: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#_#####',
        '#.#####',
        '#.._.##',
        '#bA####',
        '#..P###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.O.....',
        '....O..',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#....',
        '##b##',
        '##.##'
      ] }
    },
    sol: 'LUUUUURDRRLDDLUUUDDRULLULUDLDRRRRDLUU'
  },
  {
    id: 133, w: 9, n: 6, d: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##P..##',
        '#.b..##',
        '#.=.A##',
        '###..##',
        '###.._#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...OO..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####._#',
        '...#b..',
        '##.b..#',
        '##....#',
        '###.###'
      ] }
    },
    sol: 'DLDRURDRRRDDRRURUULDRDDLLLURDRRUULDRDLULDDDLUURDDLDRUULL'
  },
  {
    id: 134, w: 9, n: 7, d: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##...###',
        '##..PA##',
        '###..###',
        '###..###',
        '##...###',
        '##_..###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '...OO...',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '..B.#',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##b##',
        '#..b.',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.O...',
        '.....',
        '.....'
      ] }
    },
    sol: 'RRURDRDLLLDLUUDRRRULLLULDRRRRDLLLUUDDRRRULLLULDDDDRDL'
  },
  {
    id: 135, w: 9, n: 8, d: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..P###',
        '#.#...#',
        '#BA.#.#',
        '##b.._#',
        '##..#.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '....O..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '....#',
        '#.=.#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '#.##.',
        '#####',
        '#####'
      ], terrain: [
        '.....',
        '..O..',
        '.O...',
        '.....',
        '.....'
      ] }
    },
    sol: 'DDDDLUUULULLRRRURDDDUULLLDRRRUULLDLDRRRRRD'
  },
  {
    id: 136, w: 9, n: 9, d: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###P####',
        '##...###',
        '#..B####',
        '#.b.#..#',
        '#.#A..b#',
        '#...#._#',
        '########'
      ], terrain: [
        '........',
        '........',
        '..O.O...',
        '........',
        '........',
        '....O...',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.####',
        '#####',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###b###',
        '###.###',
        '###._..',
        '##...##',
        '##...##',
        '#######'
      ] }
    },
    sol: 'DDDDDDDRDDLLURDRULUUUUUULLDRURDDDDDRRRRRURDLLLLLDDLLURDRU'
  },
  {
    id: 137, w: 9, n: 10, d: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.A###.#',
        '#Pb.#._#',
        '#......#',
        '####...#',
        '####.###',
        '###=.###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '....O...',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#..####',
        '...b..#',
        '#...#.#',
        '##....#',
        '###.###'
      ] }
    },
    sol: 'DRUUURRUULLDDDDLDRRRDRRUULDRDLULLULLURRURDLDRURDDDDLDRRRRDRULLDDDL'
  },
  {
    id: 138, w: 9, n: 11, d: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##..####',
        '#...##.#',
        '##...#_#',
        '#.Pb...#',
        '##A.##.#',
        '##..####',
        '########'
      ], terrain: [
        '........',
        '..O.....',
        '........',
        '....O...',
        '....O...',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#...###',
        '#..####',
        '...##_#',
        '#b....#',
        '#.....#',
        '###.###'
      ] }
    },
    sol: 'RDDLUUUUULLUULLRRRRUULDURRUUDDLDRRRRRURDLDRRRDRUDLLDDU'
  },
  {
    id: 139, w: 9, n: 12, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#P#..#_#',
        '#_.b.#.#',
        '###....#',
        '###.A#.#',
        '####..##',
        '########',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '.....O..',
        '........',
        '.....O..',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.b.#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DRRURDLDRLDRRRUUDDDDDULURLUURDLDRRRRURRDLLLRRDDDUUDLLDLURULL'
  },
  {
    id: 140, w: 9, n: 13, d: 3,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##....P#',
        '####..A#',
        '###...##',
        '#####..#',
        '#._....#',
        '###...##',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '...O.O..',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###b###',
        '###.###',
        '..=.###',
        '##..B.#',
        '##...##',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '..#..',
        '##..#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.O...',
        '.....',
        '.....'
      ] }
    },
    sol: 'DDDDLDDRRUURURRLDLLUDRRULULLLRRRUUUULDRRRRDDLURULLLRRRUUUULDDDRDLLLRRUUURRR'
  },
  {
    id: 141, w: 9, n: 14, d: 3,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.._##',
        '#.Ab.##',
        '#.P_b.#',
        '####.##',
        '####_##',
        '#######'
      ], terrain: [
        '.......',
        '..O....',
        '.......',
        '.......',
        '....O..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '.#B.#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#.b.#',
        '.#..#',
        '##..#',
        '#####'
      ] }
    },
    sol: 'RURULDDLLURDRUUURUULDDDDDDRDDLUUUULURDRUURUULDDDDDD'
  },
  {
    id: 142, w: 10, n: 0, d: 2,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P..###',
        '##.A.##',
        '###.###',
        '##...##',
        '###.###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '...x...',
        '...x...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###..##',
        '####.##',
        '####=##',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'RRDDDDDRDD'
  },
  {
    id: 143, w: 10, n: 1, d: 3,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P#...#',
        '#.A..##',
        '####..#',
        '####..#',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.....x.',
        '...x...',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##_####',
        '#...###',
        '.....b.',
        '##.##.#',
        '##.=..#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '..x....',
        '.x.....',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'DRRURDDRDLLLLRRDDLLLUUUDDDR'
  },
  {
    id: 144, w: 10, n: 2, d: 3,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###...#',
        '#.P..##',
        '#.Ab.##',
        '###.._#',
        '####.##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...xx..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#####.#',
        '#######',
        '.######',
        '#######',
        '#.#..=#',
        '###.###'
      ], terrain: [
        '.......',
        '.....x.',
        '.......',
        '.......',
        '.......',
        '.x.....',
        '.......'
      ] }
    },
    sol: 'LDRURRDULLDRDRUUUURR'
  },
  {
    id: 145, w: 10, n: 3, d: 3,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#....##',
        '#.A...#',
        '###.bP#',
        '##...##',
        '###.._#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...xx..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '#..##',
        '#B###',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '...=#',
        '#####',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.x...',
        '.....',
        '.....'
      ] }
    },
    sol: 'ULULLLDRRURDDLDDRUULUURDDDDLDDDR'
  },
  {
    id: 146, w: 10, n: 4, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##.P#.##',
        '#.b.####',
        '#.#A.###',
        '#...#.##',
        '###..._#',
        '########',
        '########'
      ], terrain: [
        '........',
        '..x..x..',
        '........',
        '....x...',
        '.....x..',
        '....x...',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DDDLLUURURDDDDDRDDLLURRRRR'
  },
  {
    id: 147, w: 10, n: 5, d: 3,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#....A.#',
        '##b._#P#',
        '#....###',
        '##...###',
        '#....###',
        '#...####',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '..x.x...',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '..#=##.',
        '#.#.###',
        '#.....#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '.....x.',
        '.......'
      ] }
    },
    sol: 'ULLDLUULLUULLDDDRDDLLURDRULURDRUULUUUUU'
  },
  {
    id: 148, w: 10, n: 6, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P#..##',
        '#..=bA#',
        '#.#.#.#',
        '#..._.#',
        '##...##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.x.x...',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#####.#',
        '....#.#',
        '#.#.#.#',
        '#.....#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.....x.',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'DRRRRRDDRRUULLLLULDDURRRRRDDDDDLDLLURLLUURR'
  },
  {
    id: 149, w: 10, n: 7, d: 3,
    idea: {"en":"The purple box has to go inside the green box","ar":"الصندوق البنفسجي لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.AP.##',
        '#_bB###',
        '##...##',
        '#######',
        '#.#####',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '...x...',
        '.......',
        '.x.....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##._#',
        '#....',
        '#.=.#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.x...',
        '.....',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '..###..',
        '#.....#',
        '#...###',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.....x.',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'LLLDLDDRDRUUUULLULRDRRRRURRLLLRDLUURUUUULLULLDDDU'
  },
  {
    id: 150, w: 10, n: 8, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P....#',
        '#.A.b.#',
        '##....#',
        '###.###',
        '##._._#',
        '#######'
      ], terrain: [
        '.......',
        '.....x.',
        '.......',
        '...x...',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.=...',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.x...',
        '...x.',
        '.....',
        '.....'
      ] }
    },
    sol: 'DRURDURRDLULDDDDDLDLLRRRRDRRULLLLRR'
  },
  {
    id: 151, w: 10, n: 9, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##....#',
        '#Pb.#.#',
        '#..A..#',
        '###.#.#',
        '#_...##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '....xx.',
        '...x.x.',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '...##',
        '#=.##',
        '#####'
      ], terrain: [
        '.....',
        '.x.x.',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'DRRUURRDDLLUULDDDLDDRUUUDDLLLRRRRUUUULDLDRURDDDDDLLLRRRD'
  },
  {
    id: 152, w: 10, n: 10, d: 3,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.b...#',
        '#.._#A#',
        '#...P.#',
        '##..#.#',
        '##.####',
        '#######'
      ], terrain: [
        '.......',
        '.x.x...',
        '.......',
        '.......',
        '..xx...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.B.=.',
        '#..##',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '..x..',
        '..x..',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##._#',
        '.b..#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LUUDLLURRRRDULLDDRRRURRDLLLLLDLULURRRRDRUDLDDRRRURRD'
  },
  {
    id: 153, w: 10, n: 11, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###...#',
        '#...AP#',
        '#.b...#',
        '###.#.#',
        '###._##',
        '#######'
      ], terrain: [
        '.......',
        '....x..',
        '.......',
        '.....x.',
        '...x...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###b.##',
        '##...##',
        '.#.#_..',
        '##...=#',
        '####..#',
        '#######'
      ] }
    },
    sol: 'ULDDDRDDDLLUURURDDULLDDRRURRRLULDULLDRURDDDDRDDDDRULLLUURURDDRRLDDLUR'
  },
  {
    id: 154, w: 11, n: 0, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.A#B#',
        '#..tu#',
        '#..P.#',
        '#...##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#.....#',
        '#......',
        '#.....#',
        '#.....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RULDLU'
  },
  {
    id: 155, w: 11, n: 1, d: 3,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#A##P.#',
        '#.##.u#',
        '#t##..#',
        '#.....#',
        '#.B...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '#####',
        '##.##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#######',
        '#######',
        '.#####.',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'RDDLDLLLUUDDDRRRUURD'
  },
  {
    id: 156, w: 11, n: 2, d: 3,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..#P.#',
        '#..u.B#',
        '#...#.#',
        '##....#',
        '#..At.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#...#.#',
        '##..#.#',
        '..#....',
        '####..#',
        '#####.#',
        '#######'
      ] }
    },
    sol: 'DLDDRRDLLLUULURRR'
  },
  {
    id: 157, w: 11, n: 3, d: 3,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#....B#',
        '#A.u..#',
        '##....#',
        '#...t.#',
        '#...#P#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'ULLDLUURULURR'
  },
  {
    id: 158, w: 11, n: 4, d: 3,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '##.B..#',
        '#...u.#',
        '#.##.t#',
        '#P...A#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '#######',
        '.######',
        '#######',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#####',
        '#####',
        '#####',
        '#####'
      ] }
    },
    sol: 'UURUURDRRDDLULRRULLULD'
  },
  {
    id: 159, w: 11, n: 5, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.t..A.#',
        '#..#...#',
        '##.###.#',
        '##.###P#',
        '#..###.#',
        '#..Bu..#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.###.',
        '#####',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '###...#',
        '#####=.',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'DDLLLLUUUULURRRRLLLDDDDLDDDRRD'
  },
  {
    id: 160, w: 11, n: 6, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.uA.#',
        '#.Pt.#',
        '###.B#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#_.##',
        '...##',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '..#..',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LURRRRDRDDDDRDDLLULLURUULUURDDDDLLURRLDRUULU'
  },
  {
    id: 161, w: 11, n: 7, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..t.#',
        '#uB..#',
        '#.#P##',
        '#.A.##',
        '######'
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
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'ULLULUULDURDDRDRRLRDDLLLULUUUUUDDRRRULLLLULDDDDD'
  },
  {
    id: 162, w: 11, n: 8, d: 3,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..####',
        '#t..AP#',
        '#u....#',
        '#..B###',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '###....',
        '##...##',
        '##...##',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#####',
        '.####',
        '#####',
        '#####'
      ] }
    },
    sol: 'LLLLLLUUUUDDDDDDRRRRLUUULDDDDDUUURDLLLDDLLURDRULURRRR'
  },
  {
    id: 163, w: 11, n: 9, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.tP##',
        '#B..##',
        '#u####',
        '#A..##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.=.#',
        '.....',
        '##..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '##...',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DLLLDLDDDDRDDLUUUUUUUUUDDDDRRULLLULDDDDDDD'
  },
  {
    id: 164, w: 11, n: 10, d: 3,
    idea: {"en":"The green box has to go inside the main room","ar":"الصندوق الأخضر لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...B#',
        '#.##.#',
        '#.t.A#',
        '##.uP#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '...##',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'UUUULURRRUUUDDDDUUULLLLLDDRRRRRUUUDLLDRRRDRUUUUU'
  },
  {
    id: 165, w: 11, n: 11, d: 3,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.BP#',
        '##.u##',
        '#=.tA#',
        '##..##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#..####',
        '...####',
        '#...###',
        '#.....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '##...',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'LLLLDDDDRRRURDLLLLUUUURRRDLDRRRURDLDDRRULDLURULLLDLUUDL'
  },
  {
    id: 166, w: 11, n: 12, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '#.#u.##',
        '#A..tB#',
        '#.#.P##',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '#....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#.###',
        '.....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LURUULDRDRRDRRULLLLDLULLLDLLURRRRRRUULDRDLL'
  },
  {
    id: 167, w: 12, n: 0, d: 2,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#....###',
        '##...###',
        '#....###',
        '#....#=#',
        '#P.....#',
        '#.b.A#.#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '.....|..',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#...###',
        '.......',
        '#....##',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '..o....',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'DRRRRLLURRRU'
  },
  {
    id: 168, w: 12, n: 1, d: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.....#',
        '#.AP#.#',
        '#b..#.#',
        '#..##=#',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '....|..',
        '.......',
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
        '.....',
        '...o.',
        '.....'
      ] }
    },
    sol: 'DLDLURRUULDRDLUULDDDDDLDRUUUUUURRRRDDD'
  },
  {
    id: 169, w: 12, n: 2, d: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###...#',
        '#.b...#',
        '#.PA.##',
        '#...###',
        '###.=##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...|...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '##...',
        '#####',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '...o.',
        '.....',
        '.....'
      ] }
    },
    sol: 'LURRURRDLDLRUULDRDLLLRRDDR'
  },
  {
    id: 170, w: 12, n: 3, d: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..##P#',
        '#b....#',
        '#...A.#',
        '##.####',
        '##=####',
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
        '###.###',
        '##..###',
        '##..###',
        '.....##',
        '##...##',
        '##..###',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '..o....',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'DDLLLUULDDDDDRDLDLUURUUUURDDD'
  },
  {
    id: 171, w: 12, n: 4, d: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##Pb...#',
        '#.A..#.#',
        '#......#',
        '#####.##',
        '#####.##',
        '####=.##',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '.....|..',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '....#',
        '#####',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '..o..',
        '.....',
        '.....'
      ] }
    },
    sol: 'RRDDRRUULLDDLLLURRDRULLURRRRRLLLDDRDDDL'
  },
  {
    id: 172, w: 12, n: 5, d: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##A.bP#',
        '##.#.##',
        '####.##',
        '#=...##',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..|.|..',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####..#',
        '##.B...',
        '##....#',
        '###...#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '....#',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.o...',
        '.....'
      ] }
    },
    sol: 'LLLLULDDLLURRURDDLLDRRRDRRUULDRDLULLLUURRRRDDDLLL'
  },
  {
    id: 173, w: 12, n: 6, d: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#A####',
        '#..###',
        '#b...#',
        '#.P#=#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '...|..',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#####.#',
        '#####.#',
        '####...',
        '##.b..#',
        '##_...#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.....o.',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'UULUULURDDDRDDLUUUULURDRRUULDRDLLDDRDRRD'
  },
  {
    id: 174, w: 12, n: 7, d: 3,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#A..b.#',
        '#..P..#',
        '####.##',
        '####.##',
        '#=...##',
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
        '#######',
        '#######',
        '#######',
        '###....',
        '#.B...#',
        '#.....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
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
    sol: 'RRULLLLLDDLLLLURRRDRULLURRRRRRRRDRRUULDLLLDDDDLLL'
  },
  {
    id: 175, w: 12, n: 8, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#P..#..#',
        '#.A.#..#',
        '#.b.#..#',
        '#.#.#..#',
        '#.b.._.#',
        '#...#=.#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '....|...',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '....#',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.o...',
        '.....'
      ] }
    },
    sol: 'DRURDLLDRRRURDRDLUUUUDDULLDDRRRRRRURRDLLLRRDDDL'
  },
  {
    id: 176, w: 12, n: 9, d: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.A..###',
        '##.b..##',
        '##..#..#',
        '##..#.##',
        '#Pb.._.#',
        '#...#.##',
        '########'
      ], terrain: [
        '........',
        '........',
        '....|...',
        '........',
        '........',
        '....|...',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.=..#',
        '#B..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '#....',
        '##..#',
        '##.##'
      ], terrain: [
        '.....',
        '..o..',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'DRUUUUUURUULDRDLLLDLURRRULLLRRDDDLDRRLUUUURR'
  },
  {
    id: 177, w: 12, n: 10, d: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##...###',
        '##Pb..##',
        '###Ab_##',
        '##.b__##',
        '###..###',
        '####=###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '...||...',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '.#.#.',
        '#####',
        '#####'
      ], terrain: [
        '.....',
        '..o..',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'URDDURRDDLDLURRUULULLDRDRLUURDRDULLDRDDLUURUULLDRURDDLDDRD'
  },
  {
    id: 178, w: 12, n: 11, d: 3,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###P.###',
        '#.bA.###',
        '#.#...##',
        '#.....=#',
        '#.#.####',
        '########',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '.....|..',
        '.....|..',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.###',
        '#Bb..',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#..##',
        '#...#',
        '#._.#',
        '##.##'
      ], terrain: [
        '.....',
        '.o...',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'DRDLLDLLUDRRULDLUUURULDLURDDDRRRRDLLLUURRDUURDDRDLLLLLLDLUUDRRRRRRRR'
  },
  {
    id: 179, w: 12, n: 12, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.b.##',
        '#PA..##',
        '#....##',
        '##.####',
        '##.=###',
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
        '#..##',
        '.bb.#',
        '#__.#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '...o.',
        '.....'
      ] }
    },
    sol: 'RDRUURULLRDDDLLURDRRUDLLURDRUUULUURDLDRDDLLURDRUUUULDRDDDLURRURDLLLDDLDDR'
  },
  {
    id: 180, w: 12, n: 13, d: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.#.P.##',
        '#.A....#',
        '#_.b.#.#',
        '##..##.#',
        '######=#',
        '########',
        '########'
      ], terrain: [
        '........',
        '........',
        '.....|..',
        '........',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###.#',
        '.._..',
        '#.b.#',
        '##.##'
      ], terrain: [
        '.....',
        '...o.',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'DDLDLUUDLURRRRRDRURRLLDLUUDDLURDRRUULDRDLLURRRRDDD'
  },
  {
    id: 181, w: 12, n: 14, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#P###A##',
        '#.##..##',
        '#.=b..##',
        '#.bb..##',
        '#.##.###',
        '#....###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '.|..|...',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '#.._.',
        '#._.#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.o...',
        '.....',
        '.....'
      ] }
    },
    sol: 'DDRRRDRUUUURULDDDDLLLLDRLDDRRRUULURLLLDRRLLDDRRRUURUUUULURDDDDDLLURDRUUUDDLLL'
  },
  {
    id: 182, w: 13, n: 0, d: 2,
    idea: {"en":"The way forward starts inside the purple box","ar":"الطريق بيبلش من جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###...#',
        '#.PBA.#',
        '#.....#',
        '##....#',
        '##....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '....v..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '....#',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.....',
        '..^..'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '...=.',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '<...<',
        '.....',
        '.....'
      ] }
    },
    sol: 'DRURULL'
  },
  {
    id: 183, w: 13, n: 1, d: 3,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###..P##',
        '###.#_##',
        '##.A#.##',
        '###.#.##',
        '##.b..##',
        '##_...##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###=#',
        '.##..',
        '#####',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '>...<',
        '.....',
        '.....'
      ] }
    },
    sol: 'DDDDDLLLURDRRUUUUULLDDDDRDRUUUDDDLLLLU'
  },
  {
    id: 184, w: 13, n: 2, d: 3,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.A.##',
        '#.B..##',
        '#...P.#',
        '###.._#',
        '####..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '..###',
        '#.=##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.....',
        '..^..'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '.#####.',
        '#######',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '......<',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'LLLURURDLDRURDLDRUUUU'
  },
  {
    id: 185, w: 13, n: 3, d: 3,
    idea: {"en":"The way forward starts inside the pink box","ar":"الطريق بيبلش من جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#A#####',
        '#....##',
        '#.#.B##',
        '#..bP##',
        '#._._##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##.C.##',
        '##..###',
        '###.###',
        '###.###',
        '###.###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '#####',
        '#####',
        '#####'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '#####',
        '##.=#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.....',
        '..^..'
      ] }
    },
    sol: 'DLULLUURRDDRDLUUURDDUULLLUUUUUUUR'
  },
  {
    id: 186, w: 13, n: 4, d: 3,
    idea: {"en":"The way forward starts inside the purple box","ar":"الطريق بيبلش من جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..####',
        '#_.b.##',
        '#....##',
        '##A_.##',
        '##.P###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '.....',
        '#B###',
        '#####'
      ], terrain: [
        '..v..',
        '.....',
        '<...<',
        '.....',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '##.##',
        '#=.##',
        '#####'
      ], terrain: [
        '..v..',
        '.....',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'UURULDLLUURDLDRURRDDLDLUUDRRUULDULLLLLDDDDL'
  },
  {
    id: 187, w: 13, n: 5, d: 3,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#......#',
        '##A_.###',
        '#....P##',
        '#..b...#',
        '####...#',
        '#####..#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '.....^..',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###=#',
        '..#..',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '>...>',
        '.....',
        '.....'
      ] }
    },
    sol: 'LLLDRURRDRDDLULURULUULLDDLDRRUDRRRRDRRUU'
  },
  {
    id: 188, w: 13, n: 6, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##...#',
        '##.B.#',
        '#Pb..#',
        '#._A.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#######',
        '###.###',
        '##=C###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '...##',
        '#..##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '>....',
        '.....',
        '..^..'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '..###',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'RURURDDULLDDRURULULDDRDRRDRUUL'
  },
  {
    id: 189, w: 13, n: 7, d: 3,
    idea: {"en":"The pink box has to go inside the purple box","ar":"الصندوق الزهري لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..#.##',
        '#A..B##',
        '#..#..#',
        '#.P...#',
        '##..###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '..<....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.C.#.',
        '##.##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '<...<',
        '.....',
        '..^..'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#..##',
        '....#',
        '#...#',
        '##.##'
      ], terrain: [
        '..^..',
        '.....',
        '.....',
        '.....',
        '..^..'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '#=.##',
        '#####',
        '#####',
        '#####'
      ], terrain: [
        '..v..',
        '.....',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'UUULDRRRRURUUDDRDLLDLUUDRRUULLDDLUUUULURDRUUULLLULDDDL'
  },
  {
    id: 190, w: 13, n: 8, d: 3,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##P_###',
        '###.A.#',
        '###.#.#',
        '#_#...#',
        '#...B.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..=#',
        '..b..',
        '#..##',
        '##.##'
      ], terrain: [
        '..^..',
        '.....',
        '....<',
        '.....',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#####',
        '#####',
        '#####',
        '#####'
      ] }
    },
    sol: 'RDDDRRUULLLULUUDDURRDDLLLULLDDRUUUUUDDRRDLLLLLULLDDRUUUDR'
  },
  {
    id: 191, w: 13, n: 9, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#_._..#',
        '##b.A.#',
        '#.b#..#',
        '#....##',
        '##.#P##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.b##',
        '.=..#',
        '#_..#',
        '#####'
      ], terrain: [
        '..^..',
        '.....',
        '>....',
        '.....',
        '.....'
      ] }
    },
    sol: 'ULLUDRRURUULDDUULLDDLDRRRRDRRULULDURUUURULDLLDDRRR'
  },
  {
    id: 192, w: 13, n: 10, d: 3,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####..##',
        '###..b.#',
        '#P..#.B#',
        '#.#..A.#',
        '#....#.#',
        '#._..###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '....<...',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##=##',
        '##.#.',
        '##.##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '....<',
        '.....',
        '..^..'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#####',
        '.####',
        '#####',
        '#####'
      ], terrain: [
        '..v..',
        '.....',
        '>....',
        '.....',
        '.....'
      ] }
    },
    sol: 'RRURURDRDDLLRRUULLLDDUURRDRDLLDLDLLUUURRDDLDLURRRDLULLUUUUU'
  },
  {
    id: 193, w: 13, n: 11, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.._.#',
        '#b_b.#',
        '#.A#.#',
        '#P...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '#.=..',
        '##.##',
        '##.##'
      ], terrain: [
        '..v..',
        '.....',
        '.....',
        '.....',
        '..v..'
      ] }
    },
    sol: 'RUDRRUULLLRRULLDRDDLURUURDDDRRRLLLLDDUURRRULLDRURRDDDLLUULURDDDLURDRRUULLLL'
  }
  ];
});
