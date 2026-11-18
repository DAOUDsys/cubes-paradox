/* Cubes Paradox levels (written by tools/curate.js — edit there or here, then run `npm run solve`).
   Symbols: # wall  . floor  P player  b box  t teal box  u purple box  _ box goal  = player goal
   Any other capital letter is a box that holds the room with that key. Rooms must be square.
   p second sprout  1 2 3 twin of room A B C  (room props: flip = mirror room, eats = hungry room)
   terrain (optional, same size): ~ ice  o plate  | gate  ^ > v < one-way arrows  O hole  x crumbling floor
   U R D L wind tiles  1-4 jump pads (in pairs)
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
    id: 24, w: 2, n: 0, d: 1,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#...#_.#',
        '#.#..#.#',
        '#P##.bA#',
        '#####..#',
        '####=.##',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.B###',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'UURRDRDRDRUUUULULRDRDDDDLDL'
  },
  {
    id: 25, w: 2, n: 1, d: 1,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P..##',
        '#.b.##',
        '##.###',
        '#_A###',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '....#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RDDDDRDLLL'
  },
  {
    id: 26, w: 2, n: 2, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '###A#',
        '#.b.#',
        '#.P_#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LURDRUUURUULDDDD'
  },
  {
    id: 27, w: 2, n: 3, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_####',
        '#_b.A#',
        '#..#b#',
        '####P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '....###',
        '##...##',
        '##...##',
        '###.###'
      ] }
    },
    sol: 'UUURULULLLLLDLURRRRRRDDLURULLLLL'
  },
  {
    id: 28, w: 2, n: 4, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P._##',
        '###b##',
        '###.##',
        '###A##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###...#',
        '##..b.#',
        '##.#..#',
        '##..._#',
        '###.###'
      ] }
    },
    sol: 'RRDDDDDRRDDDLLLUURURRDDLURULDLUUUUU'
  },
  {
    id: 29, w: 2, n: 5, d: 3,
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
    id: 30, w: 2, n: 6, d: 3,
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
    id: 31, w: 2, n: 7, d: 3,
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
    id: 32, w: 2, n: 8, d: 3,
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
    id: 33, w: 2, n: 9, d: 3,
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
    id: 34, w: 2, n: 10, d: 3,
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
    id: 40, w: 3, n: 1, d: 1,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.A._#',
        '#.b###',
        '##.###',
        '##..P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '#....',
        '#._##',
        '##.##'
      ] }
    },
    sol: 'LLUUUDLURR'
  },
  {
    id: 41, w: 3, n: 2, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####_#',
        '#=.bA#',
        '##P..#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '..._.',
        '#...#',
        '#####'
      ] }
    },
    sol: 'URRRRLLLDRULLL'
  },
  {
    id: 42, w: 3, n: 3, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_.###',
        '#.Ab.#',
        '#.P..#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##_##',
        '#....',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RRULLLLDLUDDDU'
  },
  {
    id: 43, w: 3, n: 4, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##=####',
        '#...###',
        '#.#b###',
        '#PA.###',
        '#._..##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##_.#',
        '.....',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RLUURRDDDDRDDLURRRLUUULU'
  },
  {
    id: 44, w: 3, n: 5, d: 3,
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
    id: 45, w: 3, n: 6, d: 3,
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
    id: 46, w: 3, n: 7, d: 3,
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
    id: 47, w: 3, n: 8, d: 3,
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
    id: 48, w: 3, n: 9, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '##.b.##',
        '##.._##',
        '##.A.##',
        '#P..###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##.._.#',
        '##...##',
        '._b.###',
        '##..###',
        '#######',
        '###.###'
      ] }
    },
    sol: 'RRULURRRRDRUULURDDLLLLDRULLURRLURD'
  },
  {
    id: 49, w: 3, n: 10, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###P.##',
        '##.b.##',
        '#..=..#',
        '###A..#',
        '###._.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '####..#',
        '####...',
        '###...#',
        '#_....#',
        '#######'
      ] }
    },
    sol: 'DLDRURDRDLLLULDDRDLLLRURURRRDLUULURURDDDUL'
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
    id: 54, w: 4, n: 0, d: 1,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##.._###',
        '##A#..##',
        '##.##.##',
        '##.##.##',
        '##.##P##',
        '##....##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '###....',
        '###.#b#',
        '###...#',
        '#######'
      ] }
    },
    sol: 'DLLLUUUUDDDDRRRUUUULULLLLLDDRRUDLLUURRRR'
  },
  {
    id: 55, w: 4, n: 1, d: 1,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##...#',
        '##.#A#',
        '#_.P.#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '.......',
        '##.#b.#',
        '##....#',
        '#######'
      ] }
    },
    sol: 'LUURRDULLDDRRRRDDRRURULLLLLLL'
  },
  {
    id: 56, w: 4, n: 2, d: 2,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####=#',
        '##_..#',
        '##P#.#',
        '#..A.#',
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
    sol: 'URRDDLRUULLDDDRDDLUUUUDDRDRRRUUU'
  },
  {
    id: 57, w: 4, n: 3, d: 2,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.A_.#',
        '#...##',
        '#...##',
        '#_P###',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '#.b.#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'UUUURUULDDDDRDLULDUUR'
  },
  {
    id: 58, w: 4, n: 4, d: 2,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_#.P#',
        '#..A.#',
        '#._..#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '####...',
        '####.b#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'DLLLLLDDRULURRRDLURDRRUULDRDL'
  },
  {
    id: 59, w: 4, n: 5, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##..P_##',
        '##_..###',
        '###.####',
        '###.####',
        '#.A.####',
        '##..####',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '..##...',
        '#.#.b.#',
        '#.....#',
        '###.###'
      ] }
    },
    sol: 'DLDDDDLUULLUULLRDRUUUUUURRUULDRDLULDDULLUULLRRDL'
  },
  {
    id: 60, w: 4, n: 6, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#PA.#',
        '#._.#',
        '#####',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#...###',
        '._.b.##',
        '#....##',
        '##.b###',
        '###.###'
      ] }
    },
    sol: 'DRUULUUURDRDLDDULURUL'
  },
  {
    id: 61, w: 4, n: 7, d: 3,
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
    id: 62, w: 4, n: 8, d: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##._##',
        '#.PA.#',
        '#.##.#',
        '#....#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##...##',
        '#....##',
        '.b.....',
        '#bb_.##',
        '#_#..##',
        '###.###'
      ] }
    },
    sol: 'URDDDDLLDRURRDDLUUUUUDRDDRRRDDLLLUURRRRRURD'
  },
  {
    id: 63, w: 4, n: 9, d: 3,
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
    id: 70, w: 5, n: 1, d: 1,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '##P..##',
        '###BA.#',
        '#.....#',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '.######',
        '####=##',
        '###..##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##_##',
        '##...',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RDURDRDLLLLLDLUUURU'
  },
  {
    id: 71, w: 5, n: 2, d: 2,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####.B.#',
        '####A#.#',
        '####.#.#',
        '#P##...#',
        '#.####.#',
        '#......#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####=##',
        '####...',
        '#######',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#_..#',
        '....#',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'DDRRRRRUUUUULRDDDLLUUUUURULLLLU'
  },
  {
    id: 72, w: 5, n: 3, d: 2,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#..#####',
        '#B.#####',
        '#..#####',
        '#=..#.P#',
        '#.A...##',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '###..',
        '##..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '###_#',
        '###..',
        '###.#',
        '#####'
      ] }
    },
    sol: 'LDLLULUUULDDDRRDLLLLDLDDURRUL'
  },
  {
    id: 73, w: 5, n: 4, d: 2,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.####',
        '#B.###',
        '#..A.#',
        '#P...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##.##',
        '##=##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '#....',
        '#.._#',
        '#####'
      ] }
    },
    sol: 'URULLLUUUDDRDRRULLULDDDDLDRURDDDD'
  },
  {
    id: 74, w: 5, n: 5, d: 3,
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
    id: 75, w: 5, n: 6, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '###.####',
        '#BP....#',
        '#.#..A.#',
        '###..###',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '#######',
        '..=####',
        '#######',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '####..#',
        '####...',
        '##..._#',
        '##...##',
        '###.###'
      ] }
    },
    sol: 'RRRRDLLDLURULLLLULDRDLDLLURRRRR'
  },
  {
    id: 76, w: 5, n: 7, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..##',
        '#...##',
        '#.A..#',
        '#.PB.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#####=#',
        '.##...#',
        '###.###',
        '###.###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#.._#',
        '#....',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'URRDLLURUULDDRDLLLULLDDRULURDRUUUURRU'
  },
  {
    id: 77, w: 5, n: 8, d: 3,
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
    id: 78, w: 5, n: 9, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..####',
        '#b.A.##',
        '#.P...#',
        '#..#B##',
        '#_##..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.=#',
        '###..',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '#....',
        '#.._#',
        '#####'
      ] }
    },
    sol: 'RRULLLULUUDULDDDURRURDDDDDLDRURDDR'
  },
  {
    id: 79, w: 5, n: 10, d: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '###.B_#',
        '#=.P.b#',
        '##A.#.#',
        '##..._#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '#######',
        '#####..',
        '#####.#',
        '###...#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#..####',
        '##.####',
        '.....##',
        '##.#.##',
        '#._..##',
        '###.###'
      ] }
    },
    sol: 'UURDRDLLDDLUUUURRUURRUULLLLLRRRRRRRRDDLDDULLLL'
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
    id: 84, w: 6, n: 0, d: 1,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.=_#',
        '#P...#',
        '#...A#',
        '#..#.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '....#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RRDRRRDDDUULU'
  },
  {
    id: 85, w: 6, n: 1, d: 1,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####..#',
        '#.....#',
        '#..#..#',
        '##A#.##',
        '##.._P#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##.=#',
        '#####',
        '##.##'
      ] }
    },
    sol: 'LLLUULURRLDDDRRUURUULDDDDDDR'
  },
  {
    id: 86, w: 6, n: 2, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.A__#',
        '#.b###',
        '#...P#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '###=.##',
        '....###',
        '#.#.###',
        '#...###',
        '#######'
      ] }
    },
    sol: 'LLLUURLDDRULURRRRDDRRUULLLRRRU'
  },
  {
    id: 87, w: 6, n: 3, d: 2,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###.##',
        '##..##',
        '#.AB.#',
        '#..P_#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '...##',
        '##=##',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#####',
        '####.',
        '#####',
        '##.##'
      ] }
    },
    sol: 'UULDLDRRRRRD'
  },
  {
    id: 88, w: 6, n: 4, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#_...###',
        '###...##',
        '###.Pb.#',
        '##_..A.#',
        '######.#',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '##...',
        '##.=#',
        '#####'
      ] }
    },
    sol: 'URDRDLLULDDRDDLUUUUURULLRRDDDLLLD'
  },
  {
    id: 89, w: 6, n: 5, d: 3,
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
    id: 90, w: 6, n: 6, d: 3,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..P##',
        '##_####',
        '#.b.###',
        '#..A._#',
        '##....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '#=###',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'LLDDLDRDRRRULDLLUUDRRDRUULU'
  },
  {
    id: 91, w: 6, n: 7, d: 3,
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
    id: 92, w: 6, n: 8, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#_b..P#',
        '#.A.b.#',
        '#_#####',
        '#.#####',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '.....',
        '#=._#',
        '##.##'
      ] }
    },
    sol: 'DLLLLLDLDDUUULUURDDDDRRULLLDLLUURDLDRL'
  },
  {
    id: 93, w: 6, n: 9, d: 3,
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
    id: 94, w: 6, n: 10, d: 3,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..P##',
        '##BA.##',
        '##...##',
        '##.._##',
        '###..##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.#.#',
        '.#..._.',
        '##..#b#',
        '###...#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#=###',
        '..###',
        '#####',
        '#####'
      ] }
    },
    sol: 'DLLLLDDRRUDLLUUUUUUDRDLUULDDDDDDUUUURDLLLRDDLLULURRRRRULDDDDRRDDLLULURRLUUUURDRRU'
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
    id: 99, w: 7, n: 0, d: 1,
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
    id: 100, w: 7, n: 1, d: 1,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.b..##',
        '#P##A##',
        '#.##.##',
        '#.#..##',
        '#...###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '####B##',
        '####.##',
        '.....##',
        '###..##',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '####C##',
        '####.##',
        '####.##',
        '##...##',
        '##...##',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '##..#',
        '#_...',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DDDRRURUUDDLDLLUUUURRRRRRDRUUUULURDRUUUUURUL'
  },
  {
    id: 101, w: 7, n: 2, d: 2,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..A#',
        '#P..##',
        '##.b##',
        '##..##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##.B.##',
        '###.###',
        '....###',
        '##..###',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#####C#',
        '#####.#',
        '#####..',
        '##....#',
        '##....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '#####',
        '##_##',
        '##.##'
      ] }
    },
    sol: 'RDDRUULURRRRDRUUUULURRDRUUUU'
  },
  {
    id: 102, w: 7, n: 3, d: 2,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##A###',
        '##b###',
        '##.###',
        '##=P##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#.B.###',
        '#.#.###',
        '..#.###',
        '#....##',
        '###.###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#C#####',
        '#......',
        '#.#.#.#',
        '#.....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '#_...',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'LUUUUULLUUURLDDDRRUUUUUDRRUULLLRDDLLUUUURULDDDRRDDDDDDDDDDD'
  },
  {
    id: 103, w: 7, n: 4, d: 2,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..##',
        '#P.b##',
        '##..##',
        '##.A##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##...B#',
        '##..###',
        '..#.###',
        '#.#.###',
        '#...###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#...C.#',
        '####..#',
        '.....##',
        '###..##',
        '#######',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '###..',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'RURDDDULDRRDDRRUUULURRRRRRDRUUUDRULLLLLDL'
  },
  {
    id: 104, w: 7, n: 5, d: 3,
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
    id: 105, w: 7, n: 6, d: 3,
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
    id: 106, w: 7, n: 7, d: 3,
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
    id: 107, w: 7, n: 8, d: 3,
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
    id: 113, w: 8, n: 1, d: 1,
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '#...#.#',
        '#V....#',
        '....#P.',
        '#.....#',
        '##.b._#',
        '###.###'
      ] }
    },
    sol: 'RRDDDRR'
  },
  {
    id: 114, w: 8, n: 2, d: 2,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '#..##.#',
        '#.b_bA#',
        '....#.#',
        '#.#_..#',
        '##..PV#',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RRUURDLDRURDLLLLURUUL'
  },
  {
    id: 115, w: 8, n: 3, d: 2,
    idea: {"en":"The main room has to move before anything else","ar":"الغرفة الرئيسية لازم يتحرك قبل أي إشي"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '##_...#',
        '####..#',
        '..P#...',
        '#.#..V#',
        '#..b..#',
        '###.###'
      ] }
    },
    sol: 'LLLDRULLDDUURURLDDRUDLLLLUULLDLUURULL'
  },
  {
    id: 116, w: 8, n: 4, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '#######',
        '#__.###',
        '#=V.###',
        '#b.P###',
        '#A#####',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###...#',
        '##....#',
        '##.#.##',
        '##.#.##',
        '##...##',
        '###.###'
      ] }
    },
    sol: 'LULDDDRDDDDLLUUURLDDDRRUUURULDLUUUU'
  },
  {
    id: 117, w: 8, n: 5, d: 3,
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
    id: 118, w: 8, n: 6, d: 3,
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
    id: 119, w: 8, n: 7, d: 3,
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
    id: 120, w: 8, n: 8, d: 3,
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
    id: 121, w: 8, n: 9, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '#V#..##',
        '#_b..##',
        '#.#.###',
        '#.#_.##',
        '#..A.P#',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '###..##',
        '.#.....',
        '##...##',
        '##...##',
        '###.###'
      ] }
    },
    sol: 'LULDDUUUULLLLULDDDDDUUULLUU'
  },
  {
    id: 122, w: 8, n: 10, d: 3,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '####.V#',
        '##.#b##',
        '..b.b.#',
        '#__.=.#',
        '##P_.##',
        '#######'
      ] }
    },
    sol: 'URRRULDLLLULLDDRDLULDURUURRRLLLDDRDLLLURLLLLDDRDLLR'
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
    id: 127, w: 9, n: 0, d: 1,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.AP.##',
        '##.b.##',
        '####.##',
        '#..=.##',
        '#.#..##',
        '#######'
      ], terrain: [
        '.......',
        '.O.....',
        '.......',
        '....O..',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LLDLDDRURDDDL'
  },
  {
    id: 128, w: 9, n: 1, d: 1,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#...####',
        '#...#..#',
        '##.....#',
        '#..b._.#',
        '##A.#..#',
        '#.P.#..#',
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
        '#.....#',
        '#..##.#',
        '......#',
        '#.....#',
        '#.....#',
        '###.###'
      ] }
    },
    sol: 'UURLUUUUULLLLRRRUURRUUDDLDRR'
  },
  {
    id: 129, w: 9, n: 2, d: 2,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###P.##',
        '##..A##',
        '#.#.###',
        '###.###',
        '#.#.=##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.O.O...',
        '.......',
        '.O.....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.Bbb.',
        '##._#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '####.',
        '#####',
        '#####'
      ] }
    },
    sol: 'RDDRDLLLRRUUULDDDDR'
  },
  {
    id: 130, w: 9, n: 3, d: 2,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##A#####',
        '##..####',
        '#=.#####',
        '#.b.._##',
        '#.######',
        '#P.#####',
        '########'
      ], terrain: [
        '........',
        '........',
        '...O....',
        '........',
        '...O....',
        '........',
        '..O.....',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '####..#',
        '#.b...#',
        '#.....#',
        '###.###'
      ] }
    },
    sol: 'UURUUUULLURRDRRUULDRDLULDDDDLDRRRLLUL'
  },
  {
    id: 131, w: 9, n: 4, d: 2,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##..####',
        '#.AP.###',
        '##.##=##',
        '#.....##',
        '##..####',
        '##..####',
        '########'
      ], terrain: [
        '........',
        '........',
        '....O...',
        '........',
        '....O...',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####..#',
        '####.b.',
        '###...#',
        '###...#',
        '#######'
      ] }
    },
    sol: 'ULDDDRDDLURULLLULDRDDLLURDRULURRRRRRU'
  },
  {
    id: 132, w: 9, n: 5, d: 3,
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
    id: 133, w: 9, n: 6, d: 3,
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
    id: 134, w: 9, n: 7, d: 3,
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
    id: 135, w: 9, n: 8, d: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###.###',
        '##..###',
        '#P.A._#',
        '###...#',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '....O..',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##..###',
        '##b.###',
        '....###',
        '###.###',
        '###.###',
        '###.###'
      ] }
    },
    sol: 'RRRRRUULDRDDDDDULURRRURDDDDUUULLLLDRLURRRUURUUDLDRR'
  },
  {
    id: 136, w: 9, n: 9, d: 3,
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
    id: 137, w: 9, n: 10, d: 3,
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
    id: 138, w: 9, n: 11, d: 3,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####.##',
        '#.A..##',
        '##P#_##',
        '#######',
        '###.###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...O...',
        '.......',
        '.......',
        '...O...',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###...#',
        '###B..#',
        '.......',
        '#....##',
        '#.b...#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '....O..',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '...##',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'UUUURRUULLDDDDULLDRURDDDDLDDRUUUUUULURRRRLLLLLLLRRRRRRUUUUD'
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
    id: 142, w: 10, n: 0, d: 1,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P#...#',
        '#A....#',
        '#.#...#',
        '#.....#',
        '#.#...#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..x....',
        '.x.....',
        '..x....',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#=..#',
        '..#.#',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '..x..',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'DDDDDL'
  },
  {
    id: 143, w: 10, n: 1, d: 1,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '##.....#',
        '#Pb..#A#',
        '####.###',
        '####_###',
        '########',
        '########'
      ], terrain: [
        '........',
        '........',
        '.....x..',
        '........',
        '....x...',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.=##',
        '#######',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'RRURDDUURRDDDR'
  },
  {
    id: 144, w: 10, n: 2, d: 2,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P#...#',
        '#.#...#',
        '#A....#',
        '###..##',
        '###...#',
        '#######'
      ], terrain: [
        '.......',
        '....x..',
        '.......',
        '..xx...',
        '.......',
        '.....x.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#...#.#',
        '#.....#',
        '#..#.B.',
        '#....##',
        '#.....#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '##...',
        '#.=.#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '...x.',
        '.....',
        '.....'
      ] }
    },
    sol: 'DDDDRDRRRRDRUUUU'
  },
  {
    id: 145, w: 10, n: 3, d: 2,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###P.##',
        '###A.##',
        '###..##',
        '##...##',
        '##_..##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '...x...',
        '.......',
        '....x..',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#b#..',
        '#_.=#',
        '#####'
      ] }
    },
    sol: 'DDDRDLLLULLDURRDD'
  },
  {
    id: 146, w: 10, n: 4, d: 2,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '#A...###',
        '#.b..###',
        '#.#.b._#',
        '#.P_.###',
        '########',
        '########'
      ], terrain: [
        '........',
        '........',
        '..x.....',
        '........',
        '.....x..',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##.####',
        '#####..',
        '###.#.#',
        '###.#=#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..x....',
        '.......',
        '...x...',
        '...x...',
        '.......'
      ] }
    },
    sol: 'LUURLDDRRURRLUULDDUULLLDD'
  },
  {
    id: 147, w: 10, n: 5, d: 3,
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
    id: 148, w: 10, n: 6, d: 3,
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
    id: 149, w: 10, n: 7, d: 3,
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
    id: 154, w: 11, n: 0, d: 1,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##PB.#',
        '##.u##',
        '#=.tA#',
        '##...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#..#..#',
        '.......',
        '#....##',
        '#.....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '.....',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DDRUDLL'
  },
  {
    id: 155, w: 11, n: 1, d: 1,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.P=.#',
        '#t.#B#',
        '#..u.#',
        '#A####',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###..##',
        '##...##',
        '##...##',
        '###..##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '.....',
        '#####',
        '#####'
      ] }
    },
    sol: 'RRDULLLDDRRLUUR'
  },
  {
    id: 156, w: 11, n: 2, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#....t.#',
        '#.####.#',
        '#A.#P#.#',
        '#..#.#.#',
        '##.....#',
        '##.B.u.#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##...',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#####',
        '####.',
        '#####',
        '#####'
      ] }
    },
    sol: 'DDRRDLLLULULUUDRDDRRRRUUUULLLL'
  },
  {
    id: 157, w: 11, n: 3, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..P.#',
        '#A.u.#',
        '#.t.##',
        '#...B#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DDLDRLLUU'
  },
  {
    id: 158, w: 11, n: 4, d: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#A.uB#',
        '##.#t#',
        '##.#P#',
        '##...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '####.',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '###.#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DLLUUURRRRLLLLDDDRRUUUURULLLLL'
  },
  {
    id: 159, w: 11, n: 5, d: 3,
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
    id: 160, w: 11, n: 6, d: 3,
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
    id: 161, w: 11, n: 7, d: 3,
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
    id: 162, w: 11, n: 8, d: 3,
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
    id: 167, w: 12, n: 0, d: 1,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#A######',
        '#b##=###',
        '#.##..##',
        '#.###.##',
        '#...#.##',
        '#P#...##',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '..|.....',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '###..##',
        '##...##',
        '##...##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '...o...',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'UUUUUUUDDDDDDRRDRRUUULU'
  },
  {
    id: 168, w: 12, n: 1, d: 1,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###AbP##',
        '###.####',
        '###.####',
        '###.####',
        '###.####',
        '##=.####',
        '########'
      ], terrain: [
        '........',
        '........',
        '...|....',
        '........',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#B..#',
        '#....',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '.....',
        '##.##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '..o..',
        '.....',
        '.....'
      ] }
    },
    sol: 'LLLLDLUUUDDRDDDDDDDL'
  },
  {
    id: 169, w: 12, n: 2, d: 2,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.##.=##',
        '#......#',
        '#......#',
        '#.A#...#',
        '#.b#.#.#',
        '#P.#...#',
        '########'
      ], terrain: [
        '........',
        '........',
        '...|....',
        '...|....',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '#...#',
        '##..#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '...o.',
        '.....',
        '.....'
      ] }
    },
    sol: 'RUUUUURUULLDRDDDRURUR'
  },
  {
    id: 170, w: 12, n: 3, d: 2,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.b.###',
        '#..A.##',
        '#...P##',
        '#.#####',
        '#...=##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.|.....',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..B#',
        '...##',
        '##.##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '....#',
        '###.#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '...o.',
        '.....'
      ] }
    },
    sol: 'LULLURRRLLDRUUULURRRRURDLLLLDDDDDLLDDRRR'
  },
  {
    id: 171, w: 12, n: 4, d: 2,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##..####',
        '##AP..##',
        '##.##.##',
        '##b.#.##',
        '##..#.##',
        '##..#=##',
        '########'
      ], terrain: [
        '........',
        '........',
        '....|...',
        '........',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#####..',
        '##.B..#',
        '###..##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##.##',
        '#...#',
        '#..##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '...o.',
        '.....',
        '.....'
      ] }
    },
    sol: 'LLDLDLDDDRDDLUUUUUUUULURDDDDDRRRDDDD'
  },
  {
    id: 172, w: 12, n: 5, d: 3,
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
    id: 173, w: 12, n: 6, d: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '#.A.#=#',
        '#.....#',
        '#.#b###',
        '#..P.##',
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
        '##.##',
        '##..#',
        '#...#',
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
    sol: 'LLUURRUULDLDDDRRUUDDLLUURUURDDDDDRDDLLURDRULUUUURRU'
  },
  {
    id: 174, w: 12, n: 7, d: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###.###',
        '#..bA.#',
        '#_P..##',
        '###.###',
        '##=.###',
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
        '#..##',
        '#....',
        '#.b.#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '...o.',
        '.....'
      ] }
    },
    sol: 'RRUULUURDLDRURRRLDLUDLLURDRUUULUURDDDDRDLLRDDL'
  },
  {
    id: 175, w: 12, n: 8, d: 3,
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
    id: 176, w: 12, n: 9, d: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P..b_#',
        '##.A.##',
        '##...##',
        '##.####',
        '##...=#',
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
        '###.###',
        '##....#',
        '###b...',
        '###...#',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '....o..',
        '.......',
        '.......'
      ] }
    },
    sol: 'RRRLDDDDRDDLUUUUDDRRDRRLRUULDRDLLLULDULUUUDDDDDRRDRRRR'
  },
  {
    id: 177, w: 12, n: 10, d: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##.bP###',
        '#..A.###',
        '#..b.###',
        '###.####',
        '##...###',
        '##.._.##',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '...|....',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '.=...',
        '##..#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '..o..',
        '.....'
      ] }
    },
    sol: 'DDLUUULLLRDRULLLDRUURRRLLDRUURUULDLLLDDDDLDRUUUUURR'
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
    id: 182, w: 13, n: 0, d: 1,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.....#',
        '##..###',
        '#_..A.#',
        '#...#P#',
        '#...#.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.=.#',
        '#....',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '....<',
        '.....',
        '..^..'
      ] }
    },
    sol: 'ULLLLLUL'
  },
  {
    id: 183, w: 13, n: 1, d: 1,
    idea: {"en":"The way forward starts inside the purple box","ar":"الطريق بيبلش من جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###..###',
        '###BP###',
        '###.####',
        '###..###',
        '##.....#',
        '#..A.###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '....>...',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '#####',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#=#####',
        '..#####',
        '#######',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '>......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'ULDDDRDDLLURRRRRU'
  },
  {
    id: 184, w: 13, n: 2, d: 2,
    idea: {"en":"The way forward starts inside the purple box","ar":"الطريق بيبلش من جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#####.##',
        '###.#.##',
        '##._#.##',
        '##..#B##',
        '##.AP.##',
        '##...###',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '#####',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '#=###',
        '#..##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.....',
        '..^..'
      ] }
    },
    sol: 'DLUUDRRUUUUULU'
  },
  {
    id: 185, w: 13, n: 3, d: 2,
    idea: {"en":"The way forward starts inside the purple box","ar":"الطريق بيبلش من جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.######',
        '#_.#..P#',
        '#....###',
        '#..#####',
        '#A.#####',
        '#..#####',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '###..##',
        '###..B.',
        '##...##',
        '##...##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '......<',
        '.......',
        '.......',
        '.......'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#####',
        '..###',
        '#..=#',
        '#####'
      ], terrain: [
        '..v..',
        '.....',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'LLDLLDDDLUUURULLLULDDLDRRRDRR'
  },
  {
    id: 186, w: 13, n: 4, d: 2,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#####P#',
        '###...#',
        '#.b.A.#',
        '#.....#',
        '##_####',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '####=##',
        '####.##',
        '####.##',
        '####.##',
        '###..##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '...^...'
      ] }
    },
    sol: 'DDDLUDLLLURRURDRDLLULDURRRUUURUUUU'
  },
  {
    id: 187, w: 13, n: 5, d: 3,
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
    id: 188, w: 13, n: 6, d: 3,
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
    id: 189, w: 13, n: 7, d: 3,
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
  },
  {
    id: 194, w: 14, n: 0, d: 1,
    name: {"en":"First Slide","ar":"أول زحلقة"},
    tip: {"en":"On ice you keep sliding until something stops you","ar":"عالجليد بتضل تتزحلق لحد ما يوقفك إشي"},
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#Pb.._#',
        '#.###.#',
        '#....=#',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...~~..',
        '.......',
        '...~~..',
        '.......',
        '.......'
      ] }
    },
    sol: 'RLDDRR'
  },
  {
    id: 195, w: 14, n: 1, d: 1,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###...#',
        '#.....#',
        '#P..#.#',
        '#..#.A#',
        '#...b.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....~..',
        '.....~.',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##....#',
        '#.#...#',
        '.._....',
        '#.....#',
        '#..=..#',
        '###.###'
      ] }
    },
    sol: 'URRRDDULDLDDRRRRDRRD'
  },
  {
    id: 196, w: 14, n: 2, d: 2,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##P.###',
        '###...#',
        '###.#.#',
        '#...#A#',
        '#.b...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..=#',
        '..._.',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.~~..',
        '.~~..',
        '.~~..',
        '.....'
      ] }
    },
    sol: 'RDRRDDUULLDDLLDRRRRRDLUR'
  },
  {
    id: 197, w: 14, n: 3, d: 2,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#...b.#',
        '#.P...#',
        '###..##',
        '###A.##',
        '###.###',
        '#######'
      ], terrain: [
        '.......',
        '...~...',
        '...~.~.',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.._#',
        '..#..',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RDDLLDLDDUUURRULLLLRDLUURU'
  },
  {
    id: 198, w: 14, n: 4, d: 2,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####_#',
        '#..P.#',
        '#A.Bb#',
        '#....#',
        '######'
      ], terrain: [
        '......',
        '......',
        '....~.',
        '......',
        '..~~~.',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##=##',
        '#####',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '#..#.',
        '#._##',
        '#####'
      ] }
    },
    sol: 'LDDRUULDRDLUULDDDDDDD'
  },
  {
    id: 199, w: 14, n: 5, d: 3,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '#=b...#',
        '#P....#',
        '#...A##',
        '##..###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...~~~.',
        '...~~~.',
        '.......',
        '..~~...',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.....',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'RDRULDDLDRRRRDRRUULDRDLUUUULL'
  },
  {
    id: 200, w: 14, n: 6, d: 3,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P...#',
        '##.A.#',
        '#..b.#',
        '#....#',
        '######'
      ], terrain: [
        '......',
        '......',
        '..~...',
        '..~...',
        '.~~~~.',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##.#..#',
        '.#.....',
        '#_....#',
        '##..###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '...~...',
        '.......'
      ] }
    },
    sol: 'RRRDLDUULDRRDLLLLULDRDLLL'
  },
  {
    id: 201, w: 14, n: 7, d: 3,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.#...#',
        '#P.#..#',
        '##Bb..#',
        '##..A.#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '....~~.',
        '....~~.',
        '....~~.',
        '.......',
        '...~~~.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#_....#',
        '#.#.#.#',
        '.....##',
        '#.....#',
        '#.....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#....##',
        '#.#.###',
        '#.....#',
        '#.....#',
        '#...#.#',
        '###.###'
      ] }
    },
    sol: 'RDRDRURDDDDDDDRDLLDLUUU'
  },
  {
    id: 202, w: 14, n: 8, d: 3,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P#####',
        '#....##',
        '###...#',
        '#...b.#',
        '#._Ab.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '...~...',
        '.~.~...',
        '.~.....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##._.##',
        '####..#',
        '.##.=..',
        '###...#',
        '#######',
        '#######'
      ] }
    },
    sol: 'DRRRDRDDLULLDRURRULULDDDUDRRDLLLLLDLLURRRLL'
  },
  {
    id: 203, w: 14, n: 9, d: 3,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.A..P#',
        '#.b.B.#',
        '#..##.#',
        '#.....#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.....~.',
        '....~~.',
        '....~~.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#.....#',
        '#.....#',
        '#.....#',
        '#...._#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#....##',
        '#.....#',
        '...#...',
        '#.....#',
        '#=..#.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.~...~.',
        '.....~.',
        '.....~.',
        '.......',
        '.......'
      ] }
    },
    sol: 'DDLULULURRRRRDRULLLLLDDRRUULLLLURRRRRURDDDDDDDDLDRRUUUULUULD'
  },
  {
    id: 204, w: 14, n: 10, d: 3,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.#...#',
        '#B.A#.#',
        '#.b...#',
        '#.###P#',
        '#._._##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.~.....',
        '.~.....',
        '.~.....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.###.',
        '#####',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#_.##',
        '..b..',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '...~.',
        '..~~.',
        '.....'
      ] }
    },
    sol: 'UUULLDLLLDLURUUUDRRURRDDLLULLDDDDLDDRURRRLLLDLURUUURRDLULDDDDLDDRURLLDLU'
  },
  {
    id: 205, w: 14, n: 11, d: 3,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#...###',
        '#.#...#',
        '#.##..#',
        '#...b.#',
        '#..AP##',
        '#######'
      ], terrain: [
        '.......',
        '..~~...',
        '.~.~~~.',
        '.~...~.',
        '.~~~.~.',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '###..##',
        '##.B.##',
        '...#.##',
        '#.....#',
        '#..####',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#..##',
        '#_...',
        '##.##',
        '#####'
      ], terrain: [
        '.....',
        '..~..',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'LULDRRRRRURURDDDDRRRLLLDLURULLLLULURDRDLUULULDDDDLDRRRRRRRDRRRUULLDURRDDLLDLURULLLLLLL'
  },
  {
    id: 206, w: 14, n: 12, d: 3,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##P####',
        '##.####',
        '#.=####',
        '#b.A.##',
        '#....##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '..~....',
        '..~....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.#.###',
        '#_..###',
        '._.....',
        '#.#..##',
        '#.b.###',
        '###.###'
      ], terrain: [
        '.......',
        '...~...',
        '.......',
        '.......',
        '...~...',
        '.......',
        '.......'
      ] }
    },
    sol: 'DDDRUUULLDDRLUULLDRUUDDRULLLLLLRDLLUURURUUDRDLULDDDDUUURDLLLLLURUUUR'
  },
  {
    id: 207, w: 14, n: 13, d: 3,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..#.#',
        '#.AbP#',
        '#....#',
        '#.B..#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '.~~~~.',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##..#.#',
        '#...#.#',
        '..#....',
        '#.#..C#',
        '#....##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#.....#',
        '#.....#',
        '#......',
        '#.....#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...~~~.',
        '...~~~.',
        '.......',
        '.......',
        '.......'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##._#',
        '.....',
        '#.=.#',
        '#####'
      ] }
    },
    sol: 'DLULDRLUURDDRDLLLLLDLUUUUURULLULDDDDDDRDLLDLLURRRRRRRDRUDL'
  },
  {
    id: 208, w: 14, n: 14, d: 3,
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##PA.#',
        '#...##',
        '#.b..#',
        '#....#',
        '######'
      ], terrain: [
        '......',
        '......',
        '...~..',
        '...~~.',
        '...~~.',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####..#',
        '#.##.B.',
        '#.....#',
        '#.#=..#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '....~..',
        '.......',
        '.~~....',
        '.......',
        '.......'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '##..#',
        '#._.#',
        '#####'
      ] }
    },
    sol: 'DRUUURUURDRRLDRULLUUURRUDLLDDRULLULDDRDLULDDDDURDLUULDDDDUUUURUU'
  },
  {
    id: 209, w: 15, n: 0, d: 1,
    name: {"en":"Tailwind","ar":"ريح بالظهر"},
    tip: {"en":"A wind tile blows whatever stands on it one step after every move","ar":"بلاطة الريح بتدفش اللي واقف عليها خطوة بعد كل حركة"},
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..b..#',
        '#.###_#',
        '#P#####',
        '#######',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.....D.',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'UURRR'
  },
  {
    id: 210, w: 15, n: 1, d: 1,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###.###',
        '#..b.##',
        '#..AP##',
        '#.#..##',
        '#....##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...D...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '##.##',
        '#####',
        '...#.',
        '##_##',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '..D..',
        '.....',
        '.....'
      ] }
    },
    sol: 'LLRDLLUURRRULLLR'
  },
  {
    id: 211, w: 15, n: 2, d: 2,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P#.###',
        '#...###',
        '#.#...#',
        '#.b...#',
        '#.A.#.#',
        '#######'
      ], terrain: [
        '.......',
        '...R...',
        '.......',
        '.......',
        '.......',
        '...U...',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#_###',
        '..#=#',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.U...',
        '.....',
        '.....'
      ] }
    },
    sol: 'DDDDRLURRRRRDRRU'
  },
  {
    id: 212, w: 15, n: 3, d: 2,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###._.#',
        '#.b...#',
        '#.#P..#',
        '#...#B#',
        '#####A#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...R...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#_.##',
        '#...#',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '..D..',
        '...D.',
        '.U...',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '###=.',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DLLUURRDRURDDDDDRLLUUURU'
  },
  {
    id: 213, w: 15, n: 4, d: 2,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##P...#',
        '#...#A#',
        '#b#.#.#',
        '#.....#',
        '###..##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.R.....',
        '.......',
        '..L....',
        '...U...',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '._..#',
        '#..=#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '..L..',
        '.....',
        '.....'
      ] }
    },
    sol: 'RDDDLUURURDDDRRUUDDLDLUUULURRRRDRR'
  },
  {
    id: 214, w: 15, n: 5, d: 3,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '##.P###',
        '#.A.b.#',
        '#.....#',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.R.....',
        '.....U.',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '####..#',
        '####.=.',
        '###...#',
        '###.._#',
        '###.###'
      ] }
    },
    sol: 'DDRRLLLLLULDDLDRUUR'
  },
  {
    id: 215, w: 15, n: 6, d: 3,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.....#',
        '#.#...#',
        '#.....#',
        '#.b=A.#',
        '#P..B##',
        '#######'
      ], terrain: [
        '.......',
        '....L..',
        '.......',
        '.D.U...',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_###',
        '#...#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#.....#',
        '#.....#',
        '......#',
        '#.....#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '..L....',
        '.......'
      ] }
    },
    sol: 'URDRUDRRUURRUUUUDLUUURULDLURDDDRDDL'
  },
  {
    id: 216, w: 15, n: 7, d: 3,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.P####',
        '#.b._.#',
        '#...#.#',
        '#.A.b.#',
        '#.#####',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#._..',
        '#=.##',
        '##.##'
      ], terrain: [
        '.....',
        '.L.L.',
        '.R.L.',
        '.....',
        '.....'
      ] }
    },
    sol: 'DRRRDDLLLULURRDDLLLLDL'
  },
  {
    id: 217, w: 15, n: 8, d: 3,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#A.b..#',
        '#=#.b.#',
        '#####.#',
        '#####P#',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...U...',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##..###',
        '##....#',
        '#...._.',
        '###...#',
        '###.._#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '...U...',
        '.L.....',
        '.......',
        '....U..',
        '.......'
      ] }
    },
    sol: 'UULULRLLLLULDDLRURDUULLLDDRRDLDDD'
  },
  {
    id: 218, w: 15, n: 9, d: 3,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##B..#',
        '#.b..#',
        '#..AP#',
        '###..#',
        '######'
      ], terrain: [
        '......',
        '....L.',
        '...D..',
        '.L....',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##.##',
        '#...#',
        '#_C.#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '###..##',
        '###...#',
        '####...',
        '####..#',
        '#####.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '.....L.',
        '.......'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '##..#',
        '#...#',
        '#.=.#',
        '##.##'
      ] }
    },
    sol: 'DLUULLURRRDDLUURUULLLDLUUUUUUURUULDDDDRDLUUU'
  },
  {
    id: 219, w: 15, n: 10, d: 3,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.....#',
        '##....#',
        '#.b.P##',
        '#.A...#',
        '#...b.#',
        '#######'
      ], terrain: [
        '.......',
        '..R....',
        '...D...',
        '...U...',
        '.......',
        '.U.....',
        '.......'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '#####',
        '#.._#',
        '...=.',
        '#.._#',
        '##.##'
      ] }
    },
    sol: 'DRDLLUULDURDDLRULLLRRDLUUULUURDLDRUR'
  },
  {
    id: 220, w: 15, n: 11, d: 3,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '##b...#',
        '#PBA..#',
        '#...#.#',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....R..',
        '.......',
        '..U....',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###..##',
        '###._##',
        '##....#',
        '##...##',
        '###..##',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '##.##',
        '##=##',
        '##.##'
      ] }
    },
    sol: 'RRURDLLUULDRDDLRUULDLRRRUDDDDDLDRDRUULUUUULLLLDDDD'
  },
  {
    id: 221, w: 15, n: 12, d: 3,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '#.A...#',
        '#..=b.#',
        '##P.#.#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...R...',
        '..D....',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '#...#',
        '#.._#',
        '#####'
      ] }
    },
    sol: 'RUURDLLLLURRDDDLUURUUURDRDLLLLURDDRUUURDRDLLLDDDDLDRUUUURU'
  },
  {
    id: 222, w: 15, n: 13, d: 3,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.#.##',
        '#...A#',
        '#..b##',
        '#.BP.#',
        '######'
      ], terrain: [
        '......',
        '...D..',
        '..RL..',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '..###',
        '#..=#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###..##',
        '##.b.##',
        '##.#...',
        '#.._..#',
        '#.._#.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '....L..',
        '.......',
        '.......'
      ] }
    },
    sol: 'UUUDDDDRDDDLUURUUULDRUUDDDRDDDLDLLURUURURDDRDLUULLDDLDRUUURUUULURRDRR'
  },
  {
    id: 223, w: 15, n: 14, d: 3,
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#...#.#',
        '#.#b..#',
        '#...A.#',
        '#.B#..#',
        '#.P_=.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.....U.',
        '.UR....',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '#####',
        '#####',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '#....',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'LUUURRDRDRDDLUUDDLLUUUURRRURDRDDLLLUURURRDDDLUUUDRULLLDLDDRDDLLULUURRDRDDDLLUURURDDRDL'
  },
  {
    id: 224, w: 16, n: 0, d: 1,
    name: {"en":"First Jump","ar":"أول نطّة"},
    tip: {"en":"Step on a pad and you come out of the pad of the same color","ar":"ادعس على بلاطة بتطلع من البلاطة اللي بنفس لونها"},
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P....#',
        '#######',
        '#..b._#',
        '#######',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '....1..',
        '.......',
        '..1....',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'RRRRR'
  },
  {
    id: 225, w: 16, n: 1, d: 1,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.###.#',
        '#.##..#',
        '#.P...#',
        '#....b#',
        '###.#A#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '....1..',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#._=#',
        '.....',
        '#.#.#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.1...',
        '.....',
        '.....'
      ] }
    },
    sol: 'RRUDRDDUULRRU'
  },
  {
    id: 226, w: 16, n: 2, d: 2,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.#####',
        '#.#####',
        '#.##A.#',
        '#.#.b.#',
        '#...P.#',
        '#######'
      ], terrain: [
        '.......',
        '.1.....',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '._...',
        '#..=#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '...1.',
        '.....',
        '.....'
      ] }
    },
    sol: 'UUURUDULDR'
  },
  {
    id: 227, w: 16, n: 3, d: 2,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#####=#',
        '###...#',
        '#.b..##',
        '#..P.##',
        '##.A..#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '....1..',
        '.......'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '#####',
        '#####',
        '.._##',
        '#####',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.1...',
        '.....',
        '.....'
      ] }
    },
    sol: 'LLURRURDDDLLRUUURU'
  },
  {
    id: 228, w: 16, n: 4, d: 2,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##AB.#',
        '#=##.#',
        '#..#.#',
        '##Pb.#',
        '######'
      ], terrain: [
        '......',
        '......',
        '....1.',
        '......',
        '....2.',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '###..',
        '###.#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '...1.',
        '.....',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '##...##',
        '.._....',
        '##.#..#',
        '##....#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '....2..',
        '.......',
        '.......'
      ] }
    },
    sol: 'RRUURRLLUURUUDRULLRDLLULU'
  },
  {
    id: 229, w: 16, n: 5, d: 3,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##...#',
        '##b#A#',
        '#....#',
        '#..#P#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '......',
        '.1....',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '#....',
        '#._.#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.1...',
        '.....'
      ] }
    },
    sol: 'ULLDLURUUULLDURRDDDDDDLURRLUURRDDDDD'
  },
  {
    id: 230, w: 16, n: 6, d: 3,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.P####',
        '#A...##',
        '#.#...#',
        '#.b.#.#',
        '#..b..#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '...1...',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '#._..',
        '#.._#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '..1..',
        '.....'
      ] }
    },
    sol: 'LDDDRDRUDLLLLLDRRRDDLLLLL'
  },
  {
    id: 231, w: 16, n: 7, d: 3,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P#.##',
        '#.b..#',
        '#A..B#',
        '#...##',
        '######'
      ], terrain: [
        '......',
        '...x..',
        '...x..',
        '......',
        '...1..',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##._#',
        '##...',
        '##..#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '..1..',
        '...x.',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#=.##',
        '..###',
        '#####',
        '#####'
      ] }
    },
    sol: 'DRDDLURRRRURUULLLRDRDDRULURRU'
  },
  {
    id: 232, w: 16, n: 8, d: 3,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##....#',
        '#...#b#',
        '#.#P#.#',
        '#.A.#.#',
        '#.#_b.#',
        '#######'
      ], terrain: [
        '.......',
        '..2....',
        '.......',
        '.......',
        '.......',
        '.1...2.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_.=#',
        '#...#',
        '##..#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.1...',
        '.....',
        '.....'
      ] }
    },
    sol: 'ULLDDRLDRDDDUUULULRRRLLUUUUUURULR'
  },
  {
    id: 233, w: 16, n: 9, d: 3,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##...#',
        '#....#',
        '#.PAb#',
        '#.b..#',
        '######'
      ], terrain: [
        '......',
        '......',
        '..2...',
        '......',
        '....1.',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_..#',
        '#....',
        '#=_##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.2.1.',
        '.....',
        '.....'
      ] }
    },
    sol: 'LDRRUURULLLLUURDUULLLULLUURDDLUUDD'
  },
  {
    id: 234, w: 16, n: 10, d: 3,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##._b.#',
        '##.#P.#',
        '#..b.##',
        '##..###',
        '#..A.##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..2....',
        '.......',
        '...1...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##..#.#',
        '#...#.#',
        '..#_#..',
        '###.#.#',
        '###..=#',
        '###.###'
      ], terrain: [
        '.......',
        '...1...',
        '.....2.',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'RULDDLDDDDDRRUUUDUDRRLUUDULDRDLLDLLRURDUDDUDDUULUDDD'
  },
  {
    id: 235, w: 16, n: 11, d: 3,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#....#',
        '#b#.##',
        '#A..##',
        '#..PB#',
        '######'
      ], terrain: [
        '......',
        '...12.',
        '...2..',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##...##',
        '##.C=##',
        '####..#',
        '###...#',
        '###.#.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...1...',
        '.......',
        '.......'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#._.###',
        '...####',
        '#..####',
        '#######',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '#..##',
        '..###',
        '#####',
        '##.##'
      ] }
    },
    sol: 'UULRUUULLDRURDDDDLDLLRURLLLDDDDLDRURDDRDLUUULUUUURRRLDLRLRDLDRRRDRULLLUULRUU'
  },
  {
    id: 236, w: 16, n: 12, d: 3,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..####',
        '#b....#',
        '#A#B#.#',
        '#P....#',
        '#...###',
        '#######'
      ], terrain: [
        '.......',
        '.1.....',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##.##',
        '.#_##',
        '##.##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '##..###',
        '#...###',
        '....###',
        '#=....#',
        '###...#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '....1..',
        '.......'
      ] }
    },
    sol: 'RRRRUULLDURRDDLLLRUULULUDDDDDDDLDDRLUURDUUUUUUURULDRLLUULLDRUUURUUUUULUUUUUUUUUUDDDDDDDDDLL'
  },
  {
    id: 237, w: 16, n: 13, d: 3,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.b.b.#',
        '#.b#A.#',
        '#...._#',
        '#....P#',
        '#..####',
        '#######'
      ], terrain: [
        '.......',
        '.....2.',
        '.....1.',
        '..~~~..',
        '..~~~..',
        '..2....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.._#',
        '.#...',
        '#_..#',
        '#####'
      ], terrain: [
        '.....',
        '.1...',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'LDRLDDRDLDLRLUUUDDDRLLLLRRRDRRDULLULLLLDLURULRDRRRRRUUDLLLLRDDDRDDRU'
  },
  {
    id: 238, w: 16, n: 14, d: 3,
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#####.#',
        '#.....#',
        '#.A..b#',
        '#.#.#.#',
        '#._.bP#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...1...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#._####',
        '#.....#',
        '#...#.#',
        '#...=.#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '..12...',
        '.2.....',
        '.......',
        '.......'
      ] }
    },
    sol: 'LLUUDUURRDULLLLDRRRLDUDDRRUUUUUUDLLULUDULDDRRDRRUULLRRDDDDDDLLUDRDDDLLDURRUUULUUDDRDR'
  },
  {
    id: 239, w: 17, n: 0, d: 1,
    name: {"en":"Open Wide","ar":"افتح تمّك"},
    tip: {"en":"Push the hungry room onto a box that can’t move, and the room swallows it","ar":"ادفش الغرفة الجوعانة على صندوق محشور، بتبلعه"},
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.....#',
        '#.H..b#',
        '#.#####',
        '#P#####',
        '#######',
        '#######'
      ] },
      H: { palette: 'pink', eats: true, map: [
        '#####',
        '#...#',
        '#..._',
        '#...#',
        '#####'
      ] }
    },
    sol: 'UURRR'
  },
  {
    id: 240, w: 17, n: 1, d: 1,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##P####',
        '##.####',
        '##...##',
        '##.#A##',
        '##.Bb##',
        '#######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '##.##',
        '##..#',
        '.....',
        '#._.#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#..##',
        '..##.',
        '#..=#',
        '##.##'
      ] }
    },
    sol: 'DDRRDULLDDRRRDRRUULDDDLDDRR'
  },
  {
    id: 241, w: 17, n: 2, d: 2,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##b.###',
        '##A#P##',
        '##.#.##',
        '##B..##',
        '##.####',
        '#######'
      ], terrain: [
        '.......',
        '...1...',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '##.##',
        '#._.#',
        '.....',
        '#..##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '..1..',
        '.....',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '##=.###',
        '.##....',
        '#####.#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'DDLLLDDLLDDUUUUUULRUURRUULLUL'
  },
  {
    id: 242, w: 17, n: 3, d: 2,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#b.A.#',
        '#B.#.#',
        '#..#.#',
        '##..P#',
        '######'
      ] },
      A: { palette: 'teal', flip: true, eats: true, map: [
        '##.##',
        '#...#',
        '..._.',
        '##.##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#######',
        '#######',
        '..###=.',
        '#.#...#',
        '#...###',
        '###.###'
      ] }
    },
    sol: 'UUULLDDLUUUDDRULRRRRDDRRURRU'
  },
  {
    id: 243, w: 17, n: 4, d: 2,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P##.#',
        '#...B#',
        '##.A.#',
        '###.b#',
        '######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '###.###',
        '###.###',
        '###.###',
        '.##.##.',
        '###..##',
        '##.._.#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '...=.',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DRDRURRRUUUDDDDDDDDDDLLLRURDDDR'
  },
  {
    id: 244, w: 17, n: 5, d: 3,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####P#',
        '###..#',
        '#bBA.#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '##.##',
        '##..#',
        '.....',
        '#.#_#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '##...##',
        '.......',
        '###.#.#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'DDLLLLLLLLRRRRRRRLLLULDDDDLLLLRURD'
  },
  {
    id: 245, w: 17, n: 6, d: 3,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..b#',
        '#P.AB#',
        '####.#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '##.##',
        '#._.#',
        '.#...',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', flip: true, map: [
        '###.###',
        '##...##',
        '###..##',
        '.#.....',
        '###.=.#',
        '###.###',
        '###.###'
      ] }
    },
    sol: 'RRRLLDLUUUUDDDDDDDUUUUUUUR'
  },
  {
    id: 246, w: 17, n: 7, d: 3,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...P#',
        '#A####',
        '#B...#',
        '#b..##',
        '######'
      ], terrain: [
        '......',
        '.x....',
        '......',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '###.###',
        '#.=...#',
        '##....#',
        '...#...',
        '#C....#',
        '#.....#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '....x..',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '.....',
        '#...#',
        '##.##'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#...#',
        '..._.',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LLLDDDDDDUUUUUDDDLDRURDDRDLLLLRUUU'
  },
  {
    id: 247, w: 17, n: 8, d: 3,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P#.##',
        '#..A##',
        '###B##',
        '###b##',
        '######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '###.###',
        '###.#.#',
        '###.._#',
        '.......',
        '##.##.#',
        '##....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '##_.###',
        '#...###',
        '.b..##.',
        '#...###',
        '###=###',
        '###.###'
      ] }
    },
    sol: 'DRRRRRUUUUDDDDDDDDUUUUUUUDDDDRRDDDLLLUURRLLDDRRRUULURRDRUURDDD'
  },
  {
    id: 248, w: 17, n: 9, d: 3,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.b.##',
        '###...#',
        '#.AB..#',
        '#.#.P.#',
        '#...###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '.x.....',
        '.......'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '##.##',
        '#._.#',
        '...#.',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '##...##',
        '###=.##',
        '.#...#.',
        '###..##',
        '#....##',
        '###.###'
      ] }
    },
    sol: 'LUDDLLUURRDRRULDLUUUUUUUUUDRDDLUUUUUUUUUU'
  },
  {
    id: 249, w: 17, n: 10, d: 3,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#b.B.#',
        '##P.##',
        '##.A##',
        '###.##',
        '######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '##.##',
        '#._.#',
        '._...',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#.b.#',
        '.....',
        '##=##',
        '##.##'
      ] }
    },
    sol: 'RUUURRRLDLDRRRDDDUUUUURRRLLLLLLRRRRRLLLULLDRURDDRDRRLLLLULLDRRRLLDDDRULLLD'
  },
  {
    id: 250, w: 17, n: 11, d: 3,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.#####',
        '#.##..#',
        '#...PA#',
        '#####B#',
        '####.b#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '....x..',
        '.......'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '##.##',
        '##.##',
        '...#.',
        '#.C.#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#..##',
        '.=...',
        '#...#',
        '##.##'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '#.#_#',
        '#....',
        '###.#',
        '#####'
      ], terrain: [
        '.....',
        '.x...',
        '..x..',
        '.....',
        '.....'
      ] }
    },
    sol: 'URDDDLDDRULURRRDDUULLLDDRRULLLLLRRRURRRUUUDDDDUUUUUDDDDDDDLLRRRRRLLLLDLDDUUUUL'
  },
  {
    id: 251, w: 17, n: 12, d: 3,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###...#',
        '##.A_##',
        '#..=.##',
        '##.##.#',
        '#PB..b#',
        '#######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '##.##',
        '##b_#',
        '.....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RUURRUULDDDRDDLUUUDDLLLURDDRDRRLULDDDDDLLLRRRRRRRLLLLLRRRRDRULLLLLLUUR'
  },
  {
    id: 252, w: 17, n: 13, d: 3,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#bBP.#',
        '#.#A.#',
        '###.##',
        '######',
        '######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '###.###',
        '#...###',
        '#b.##_#',
        '.......',
        '##....#',
        '##._..#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#..##',
        '...=.',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RDLLDDLLDDURULLLDLLURDRUUUULUULDRDLLRRRDDDDLLUURDDRUUUURRRRLLLLRRRRRLLLLDLUULUURDDDDLURRDRUUUUR'
  },
  {
    id: 253, w: 17, n: 14, d: 3,
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#bB.##',
        '#..A##',
        '#Pb..#',
        '##...#',
        '######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '##.##',
        '#.###',
        '..._.',
        '#_.##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '.....',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RDRRULDLUUUURURRDULLULLDRRDLDDDDRRULDLUUUURULLLRRDDDRULLLLLLULLDRRRLULUUDR'
  },
  {
    id: 254, w: 18, n: 0, d: 1,
    name: {"en":"Seeing Double","ar":"شايف تنين"},
    tip: {"en":"Both boxes lead to the same room, but you always come out of the solid one","ar":"الصندوقين بيودّوا عنفس الغرفة، بس دايماً بتطلع من الصندوق الأصلي"},
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P1####',
        '#######',
        '#..A.=#',
        '#######',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.....',
        '#####',
        '#####'
      ] }
    },
    sol: 'RRRRRRR'
  },
  {
    id: 255, w: 18, n: 1, d: 1,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#....#',
        '#...A#',
        '#P...#',
        '#....#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..2#',
        '#....',
        '#.B.#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '#...#',
        '##.=#',
        '##.##'
      ] }
    },
    sol: 'UURRRDDDDDRUUR'
  },
  {
    id: 256, w: 18, n: 2, d: 2,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#=##.#',
        '#.#B2#',
        '#.P.A#',
        '#_...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '.#####.',
        '#######',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '#####..',
        '#####.#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'RDRUULLDDLLDDRDLLULUU'
  },
  {
    id: 257, w: 18, n: 3, d: 2,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.1..#',
        '##.#.##',
        '##.#b##',
        '#A.#.##',
        '#....P#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###_###',
        '##...##',
        '###..##',
        '##=..##',
        '###.###',
        '###.###'
      ] }
    },
    sol: 'LLLUUUURLDDDDRRUUUUUUUUDDL'
  },
  {
    id: 258, w: 18, n: 4, d: 2,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##2..##',
        '###..##',
        '#.#.###',
        '#APb.##',
        '#...###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#B._#',
        '####.',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#.=.#',
        '#....',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DRUUURULLLULLDRRRRLLUL'
  },
  {
    id: 259, w: 18, n: 5, d: 3,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..1bP#',
        '#.#.A.#',
        '#.....#',
        '####_##',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '#....',
        '##_=#',
        '#####'
      ] }
    },
    sol: 'LLLLLRRULDDDDDRD'
  },
  {
    id: 260, w: 18, n: 6, d: 3,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..#B#',
        '#.A#b#',
        '##...#',
        '##.#P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#.._.',
        '##..#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '..=.#',
        '#1..#',
        '##.##'
      ] }
    },
    sol: 'UUUURUULDRDLLLULLDRUUUDDRRUUUU'
  },
  {
    id: 261, w: 18, n: 7, d: 3,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#1.####',
        '#..####',
        '#...bB#',
        '#...P##',
        '#A#####',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '##_#.',
        '##.=#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#..##',
        '....#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LURRRDRRULLLLLLDLUUUUR'
  },
  {
    id: 262, w: 18, n: 8, d: 3,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####B#',
        '###..#',
        '#..b.#',
        '#PA..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '####..#',
        '##....#',
        '##.#...',
        '##.2.##',
        '###..##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '###_###',
        '######.',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'URRDLLLULLLDDRDRUUDLLUURRURDLDRRRRUURDDD'
  },
  {
    id: 263, w: 18, n: 9, d: 3,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#...2.#',
        '##.b..#',
        '#.....#',
        '#A..B.#',
        '##.#.P#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#.....#',
        '......#',
        '#_....#',
        '#.....#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '#=..#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LURULLLURDRUUURUULDDDDDDDRDLLUUURUUUUL'
  },
  {
    id: 264, w: 18, n: 10, d: 3,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.....#',
        '#.=##.#',
        '#A.#..#',
        '#.P#b##',
        '##..b1#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '._...',
        '#._.#',
        '##.##'
      ] }
    },
    sol: 'DRRRRURDDURRRUURRRDDLDURUULLLDDDDRRRRDRRULRRRDLUUUDR'
  },
  {
    id: 265, w: 18, n: 11, d: 3,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###1###',
        '##._.##',
        '#.A.b##',
        '###=..#',
        '##P...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##._#',
        '....#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RUUURDULUUULLLRRDDRRULDLUUUUUDDLURRRDRULUUUDULUDRULDLUUD'
  },
  {
    id: 266, w: 18, n: 12, d: 3,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##=####',
        '#1b.###',
        '#.b.A.#',
        '##..#.#',
        '#P_...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##.####',
        '##_#...',
        '#....##',
        '##..###',
        '###.###'
      ] }
    },
    sol: 'RURUULDDUULRLRDDLLULULUUURURRLLDLDDDUDDRRUULRDDLLUUUUDDLULLLDLDLURDDDLUU'
  },
  {
    id: 267, w: 18, n: 13, d: 3,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.P..1#',
        '##bA#.#',
        '##b...#',
        '#...#.#',
        '#..####',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.....~.',
        '.....~.',
        '.~~~.~.',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#._.###',
        '##..###',
        '.......',
        '##_####',
        '##.=###',
        '###.###'
      ] }
    },
    sol: 'RRRRRDDRDDUUULUURRRRRLLRDDDLDRUURUULLLLLRRRRRDDRRUUULUUURDRRRRRDDLURULLLLLULDRRRRRRDDRRUUU'
  },
  {
    id: 268, w: 18, n: 14, d: 3,
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#....##',
        '#.##.##',
        '#.Bb.##',
        '#A.####',
        '#..#P2#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.=#_.',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RLUURRRDDLLLLDLLURRRRDDLUUUUURUULDDDDUUURRRRRDDLLLRDLUUUULURRRRRRR'
  },
  {
    id: 269, w: 19, n: 0, d: 1,
    name: {"en":"Wrong Side","ar":"الجهة الغلط"},
    tip: {"en":"Inside a mirror room left and right are swapped","ar":"جوّا غرفة المرآة اليمين والشمال مبدّلين"},
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#P..###',
        '###M.=#',
        '#######',
        '#######',
        '#######'
      ] },
      M: { palette: 'violet', flip: true, map: [
        '##.##',
        '##.##',
        '.....',
        '#####',
        '#####'
      ] }
    },
    sol: 'RRDDDLLLR'
  },
  {
    id: 270, w: 19, n: 1, d: 1,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##...#',
        '#..#b#',
        '#...P#',
        '#...A#',
        '######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '###.###',
        '#.....#',
        '###...#',
        '..=._.#',
        '#.....#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'LLUURRDDDDDRDDLLURL'
  },
  {
    id: 271, w: 19, n: 2, d: 2,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P#...#',
        '#.b...#',
        '####.A#',
        '####..#',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '##.##',
        '##..#',
        '....#',
        '##_.#',
        '#####'
      ] }
    },
    sol: 'DRRRURDDDDD'
  },
  {
    id: 272, w: 19, n: 3, d: 2,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##._b.#',
        '#..b..#',
        '#.#B###',
        '#.#####',
        '#A...P#',
        '#######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '###.###',
        '###.###',
        '###.###',
        '....###',
        '#######',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#._##',
        '...##',
        '#.=##',
        '#####'
      ] }
    },
    sol: 'LLLLRRRUUUUUURURDRRULDLDDLDDRUD'
  },
  {
    id: 273, w: 19, n: 4, d: 2,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.b.##',
        '#..A.#',
        '#.#..#',
        '####P#',
        '######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '#####',
        '##..#',
        '....#',
        '#=_.#',
        '##.##'
      ], terrain: [
        '.....',
        '...x.',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'UULLLRRDDDURRULLRDRRUULDLD'
  },
  {
    id: 274, w: 19, n: 5, d: 3,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#A..###',
        '#...###',
        '#...###',
        '##.bP##',
        '##...##',
        '#######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '#####',
        '##._#',
        '.=...',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LDLUUURULLRRDRULL'
  },
  {
    id: 275, w: 19, n: 6, d: 3,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.A..#',
        '##..#b#',
        '#.B...#',
        '#.#P###',
        '#...###',
        '#######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '#####',
        '#._.#',
        '#....',
        '##..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '##=####',
        '##.####',
        '...####',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'UULURRLDDRRUUUURRRLDDDDLLUURRRRRRUU'
  },
  {
    id: 276, w: 19, n: 7, d: 3,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..P#',
        '#B....#',
        '##.#b.#',
        '#...b.#',
        '#....A#',
        '#######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '#####',
        '#...#',
        '.....',
        '#._.#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#...._#',
        '#.....#',
        '.......',
        '#.....#',
        '#....##',
        '###.###'
      ] }
    },
    sol: 'DLDULLDDRDRRLULDRRRUURULLLLLDLUULUR'
  },
  {
    id: 277, w: 19, n: 8, d: 3,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#####.#',
        '#...PA#',
        '#..#.=#',
        '##b##.#',
        '##....#',
        '#######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '###.###',
        '#_....#',
        '###.#.#',
        '##.....',
        '###.#.#',
        '###...#',
        '#######'
      ] }
    },
    sol: 'DRDDLLLUULURRRRLLRDDLLUUUDRRUULLLRUUDD'
  },
  {
    id: 278, w: 19, n: 9, d: 3,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#....#',
        '#b...#',
        '#PA#.#',
        '#....#',
        '######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '#######',
        '#######',
        '#....##',
        '...#B#.',
        '#.....#',
        '#...###',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##=.#',
        '._#..',
        '#####',
        '#####'
      ] }
    },
    sol: 'DRUDRRUULLRURRRDDDRDRRLLLDLURULLLULLDRRRLURDDDD'
  },
  {
    id: 279, w: 19, n: 10, d: 3,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.b...#',
        '#_.b..#',
        '##....#',
        '#.P.A##',
        '#.....#',
        '#######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '##.##',
        '#...#',
        '#.._#',
        '#.=.#',
        '##.##'
      ] }
    },
    sol: 'RDRUULLULURRDLDRDRUUUDDRULLLULDDLDRD'
  },
  {
    id: 280, w: 19, n: 11, d: 3,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#Pb.##',
        '#.#.##',
        '#A#.##',
        '#.=.B#',
        '######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '##.##',
        '#...#',
        '.C.##',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '####.##',
        '#..#.##',
        '...#.##',
        '#....##',
        '#...###',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '#_...',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DDDDDLLLRRRURDLDDRRULDLURULLLLLRDRUUUUUDDDDLLLRUUULLLLRRRRDDDL'
  },
  {
    id: 281, w: 19, n: 12, d: 3,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###.P#',
        '#...A#',
        '#.b..#',
        '##.#.#',
        '######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '###.###',
        '#######',
        '###.#.#',
        '###....',
        '###...#',
        '#B._.##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '.....',
        '#.=.#',
        '#####'
      ] }
    },
    sol: 'DLLLDRRRLDLDLDDULURLDLLURRRRDRUDLLLURRDRUUURUULDRDLLLLDLLURRRRLLDL'
  },
  {
    id: 282, w: 19, n: 13, d: 3,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###P###',
        '###b.##',
        '#...A.#',
        '#..=b.#',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '##.##',
        '#._.#',
        '.._..',
        '#_b.#',
        '##.##'
      ] }
    },
    sol: 'DRDDDLLLLULDRRDLLLLRURUURLDDRDDLULLLURURDRDLLLLRLLR'
  },
  {
    id: 283, w: 19, n: 14, d: 3,
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P.####',
        '#..b.##',
        '##...##',
        '#.A_.##',
        '#...###',
        '#######'
      ], terrain: [
        '.......',
        '..1....',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '#####',
        '#_###',
        '..#..',
        '#=..#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '...1.',
        '.....'
      ] }
    },
    sol: 'RURRDRURURULDLRDRRDUURRRDRURUULLDURRDLDDLLURDRURULLLULDUUURRRUUULLUD'
  },
  {
    id: 284, w: 20, n: 0, d: 1,
    name: {"en":"Together","ar":"سوا"},
    tip: {"en":"Both sprouts move together. A wall can hold one of them back","ar":"النبتتين بيتحركوا سوا. الحيط بيوقّف وحدة منهم"},
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P...=#',
        '#.#####',
        '#p..=.#',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'URDRRR'
  },
  {
    id: 285, w: 20, n: 1, d: 1,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..#p#',
        '#=P..#',
        '##...#',
        '#.A..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '...=.',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RDDLLUL'
  },
  {
    id: 286, w: 20, n: 2, d: 2,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..=.#',
        '#...A#',
        '#.p=P#',
        '#...##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '#..##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'UUUURDDDLUR'
  },
  {
    id: 287, w: 20, n: 3, d: 2,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#ApP#',
        '###=#',
        '#####',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.=.#',
        '##B..',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#..##',
        '###..',
        '##..#',
        '#####'
      ] }
    },
    sol: 'DLULLLDLURRRURDRL'
  },
  {
    id: 288, w: 20, n: 4, d: 2,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###..#',
        '##=.b#',
        '##A#_#',
        '#P.#.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#=.##',
        '....#',
        '#.p.#',
        '##.##'
      ] }
    },
    sol: 'UUUUDURURDLLUU'
  },
  {
    id: 289, w: 20, n: 5, d: 3,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##p.##',
        '#.#b##',
        '#A.=P#',
        '#.._.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '...=.',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RDLLDLUUUUR'
  },
  {
    id: 290, w: 20, n: 6, d: 3,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.P##',
        '#._=.#',
        '#.Ap##',
        '#=...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '##.#.',
        '#####',
        '#####'
      ] }
    },
    sol: 'DLDRRULDDRULUURDDL'
  },
  {
    id: 291, w: 20, n: 7, d: 3,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#._.##',
        '#.P#.#',
        '##.A.#',
        '##=.##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#=.##',
        '.....',
        '#..p#',
        '##.##'
      ] }
    },
    sol: 'DURRDDLUUUUUUUDL'
  },
  {
    id: 292, w: 20, n: 8, d: 3,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '##_.#',
        '#PbA#',
        '##=_#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.###',
        '..#.#',
        '#=.p#',
        '##.##'
      ] }
    },
    sol: 'LDRULULRDULLRDDLUDRRULDD'
  },
  {
    id: 293, w: 20, n: 9, d: 3,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_.#.#',
        '#..A=#',
        '#P..##',
        '###.p#',
        '######'
      ], terrain: [
        '......',
        '......',
        '..R...',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##=.#',
        '.....',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RRUULURRRLLUUUUUURD'
  },
  {
    id: 294, w: 20, n: 10, d: 3,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.####',
        '#.#P=#',
        '#.b._#',
        '#._A.#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '......',
        '.x....',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '.=.p.',
        '#.#.#',
        '#####'
      ] }
    },
    sol: 'LLLLLUURDDLLLDRRULLLR'
  },
  {
    id: 295, w: 20, n: 11, d: 3,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.AP.#',
        '##b_=#',
        '#..#.#',
        '##...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.=..#',
        '##.p#',
        '##.##'
      ] }
    },
    sol: 'RDDDLULLUUUULRUULDDDRRRRD'
  },
  {
    id: 296, w: 20, n: 12, d: 3,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##...#',
        '#....#',
        '#PA#.#',
        '##..=#',
        '######'
      ], terrain: [
        '......',
        '..~~~.',
        '.~~~~.',
        '....~.',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##_##',
        '...B.',
        '##b##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#p.##',
        '##.##',
        '#=..#',
        '#####'
      ] }
    },
    sol: 'URDLLUURULLLURRDDDLLDDDULURDLDRUUUUDDDDRRULLD'
  },
  {
    id: 297, w: 20, n: 13, d: 3,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#.AP#',
        '#_..#',
        '#p=##',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '..1..',
        '.....',
        '.....'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '.B..#',
        '##=.#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '###.#',
        '###.#',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '...1.',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'UURRDLDUUURULURDDDLLRRRRDLUDUD'
  },
  {
    id: 298, w: 20, n: 14, d: 3,
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##=###',
        '#=_._#',
        '#pA..#',
        '#P#..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '..b##',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'URURRDLULDRDURRDDLURUULDLLDDDURRDLLRUUULLLU'
  }
  ];
});
