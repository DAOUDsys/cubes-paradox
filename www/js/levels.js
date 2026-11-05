/* Cubes Paradox levels (written by tools/curate.js — edit there or here, then run `npm run solve`).
   Symbols: # wall  . floor  P player  b box  t teal box  u purple box  _ box goal  = player goal
   Any other capital letter is a box that holds the room with that key. Rooms must be square.
   terrain (optional, same size): ~ ice  o plate  | gate  ^ > v < one-way arrows  O hole  x crumbling floor
   sol = a known solution (U R D L), used for hints; idea = the first hint step. */
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
    id: 2, w: 0, n: 1,
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
    id: 3, w: 0, n: 2,
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
    id: 4, w: 0, n: 3,
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
    id: 5, w: 0, n: 4,
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
    id: 6, w: 0, n: 5,
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
    id: 7, w: 0, n: 6,
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
    id: 8, w: 0, n: 7,
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
    id: 9, w: 1, n: 0,
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
    id: 10, w: 1, n: 1,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#..####',
        '#.....#',
        '#A###.#',
        '#..P..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '#=...',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LLUUUUUL'
  },
  {
    id: 11, w: 1, n: 2,
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
    id: 12, w: 1, n: 3,
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
    id: 13, w: 1, n: 4,
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
    id: 14, w: 1, n: 5,
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
    id: 15, w: 1, n: 6,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...##',
        '#....#',
        '#.A.P#',
        '#..._#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#..=#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'ULLDLDRRURDDRD'
  },
  {
    id: 16, w: 1, n: 7,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##...#',
        '#._..#',
        '#P#A##',
        '#...##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '.##.=##',
        '#######',
        '#######',
        '###.###'
      ] }
    },
    sol: 'DRRUDLLUURURRDLULDDDDR'
  },
  {
    id: 17, w: 1, n: 8,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#######',
        '#_.####',
        '#...A.#',
        '#...P.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '...##..',
        '##.##.#',
        '#=....#',
        '#######'
      ] }
    },
    sol: 'RULLLDLURULLDDLLLL'
  },
  {
    id: 18, w: 1, n: 9,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.####',
        '##A_.P#',
        '##.b.##',
        '##..###',
        '##..###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#######',
        '###=###',
        '###.###',
        '###.###'
      ] }
    },
    sol: 'LLDLDDRUULUUUU'
  },
  {
    id: 19, w: 1, n: 10,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#__b.#',
        '#PA..#',
        '##...#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##=##',
        '##.##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'RDRRUULLRRDLDLUUUUU'
  },
  {
    id: 20, w: 1, n: 11,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#######',
        '##...##',
        '#.P#b.#',
        '#.A_._#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##...',
        '#####',
        '#####'
      ] }
    },
    sol: 'URRDULLDDDDRRRRUULLDLDR'
  },
  {
    id: 21, w: 1, n: 12,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##....#',
        '#_P.#.#',
        '###.A.#',
        '#_b..##',
        '#....##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '#######',
        '..=####',
        '#....##',
        '#....##',
        '###.###'
      ] }
    },
    sol: 'RDDDLLURRDRUUURULLULLLUURRDDLDLURRUULLLDRRRDDLURULLLURDDRDLLDLUUULU'
  },
  {
    id: 22, w: 1, n: 13,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.A.###',
        '#.#.###',
        '#.#.b.#',
        '#..bP_#',
        '#...#_#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '#=...',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RULDLDLLUUUURLDDDRRRLUUUURUULDDDDDRRDLLDLLURRRULUUUUL'
  },
  {
    id: 23, w: 1, n: 14,
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
    id: 24, w: 2, n: 0,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#P###',
        '#b=##',
        '#A._#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#....',
        '##.##',
        '#####'
      ] }
    },
    sol: 'DDDLDRRRRU'
  },
  {
    id: 25, w: 2, n: 1,
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
    id: 26, w: 2, n: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#P#####',
        '#.###_#',
        '#.###.#',
        '#.bA..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DDDRRRRRDRUUUU'
  },
  {
    id: 27, w: 2, n: 3,
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
    id: 28, w: 2, n: 4,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '####_##',
        '#PA...#',
        '####.b#',
        '####=.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RRRDDRUUURULLLRRDDDLUDD'
  },
  {
    id: 29, w: 2, n: 5,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_b.A#',
        '#.=#b#',
        '####_#',
        '####P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.....',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'UUUULUURDDDDUUULLLLD'
  },
  {
    id: 30, w: 2, n: 6,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.P.##',
        '#_#b##',
        '#.A..#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '#....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LDDRLUURRDDDRDRRLLLLDLUUU'
  },
  {
    id: 31, w: 2, n: 7,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#####_##',
        '#####.##',
        '#####.##',
        '###...##',
        '###.bP##',
        '####A###',
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
    sol: 'ULDDDDDRDDLUUUUUULURDRUUU'
  },
  {
    id: 32, w: 2, n: 8,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#_...##',
        '##.#P##',
        '##.A.##',
        '##_b.##',
        '####=##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##...',
        '##..#',
        '#####'
      ] }
    },
    sol: 'DLRUULLDDRRDLLLDLUUUUUDRRUULLRRDDDD'
  },
  {
    id: 33, w: 2, n: 9,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#...b.#',
        '#.#A#.#',
        '#.#.._#',
        '#P.=###',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '....#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RRURRUULLRRDDLLUDDLLUUURRRRRLLLDDRRUUURUULDDDDUUULLLLDDD'
  },
  {
    id: 34, w: 2, n: 10,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##A.b.#',
        '#_Pb#.#',
        '##._..#',
        '###=.##',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '##...',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DRRRUULLLLULDDDUURRRDLRURRDDLDL'
  },
  {
    id: 35, w: 2, n: 11,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '#P_.##',
        '#.bb##',
        '#._A.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DDRRLLUURRDULLDDRUDRRRDRRULLLL'
  },
  {
    id: 36, w: 2, n: 12,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#P....##',
        '##.##..#',
        '#A...#.#',
        '#....b_#',
        '#b._...#',
        '#....#.#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#.....#',
        '#.....#',
        '.......',
        '#.....#',
        '#.....#',
        '###.###'
      ] }
    },
    sol: 'RDDDDDLUUUUULURRRRRDRRULRDDRRUUULULLLDDDLDRURRR'
  },
  {
    id: 37, w: 2, n: 13,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#....#',
        '#.bb.#',
        '##A__#',
        '#P._##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRURUULDULLDRURRDDLLLRRDLURRUULDULLDRURDLDRRRURRDLLL'
  },
  {
    id: 38, w: 2, n: 14,
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
    id: 39, w: 3, n: 0,
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
    id: 40, w: 3, n: 1,
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
    id: 41, w: 3, n: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '###..#',
        '#..bP#',
        '#._A.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###_###',
        '#######',
        '.######',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'ULDDURDL'
  },
  {
    id: 42, w: 3, n: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...##',
        '#.#..#',
        '#.AbP#',
        '#_#.##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '._...',
        '#####',
        '#####'
      ] }
    },
    sol: 'LLLLLRRRRUULLDD'
  },
  {
    id: 43, w: 3, n: 4,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '####_#',
        '#=.bA#',
        '##P..#',
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
    id: 44, w: 3, n: 5,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_####',
        '#A.P##',
        '#..b.#',
        '##...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##_##',
        '##...',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'LDDRRULDLURULLLDLUDDDU'
  },
  {
    id: 45, w: 3, n: 6,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##P.###',
        '##..b.#',
        '##.##.#',
        '#..#..#',
        '#_A...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##...',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'DDDDDDRRRRURUULLULDDDDDDRRRLLLDL'
  },
  {
    id: 46, w: 3, n: 7,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#.P._.#',
        '#..A.##',
        '##b#.##',
        '##...##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '.._##',
        '#####',
        '#####'
      ] }
    },
    sol: 'RRDDDLLUDRRUUULLLDRRRRLLLDDRRUU'
  },
  {
    id: 47, w: 3, n: 8,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###_####',
        '###.####',
        '###.A.##',
        '##P...##',
        '####b.##',
        '####..##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '..._#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RRRDDLUURULDLUUUURUULLDR'
  },
  {
    id: 48, w: 3, n: 9,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####..##',
        '###....#',
        '#....AP#',
        '#.##b###',
        '#.##.###',
        '#..._###',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##.##',
        '##_##',
        '#####'
      ] }
    },
    sol: 'ULLDLLLDDDRRRUUULURURDRDLULDDDDDD'
  },
  {
    id: 49, w: 3, n: 10,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##...##',
        '#Pb..##',
        '#.A.###',
        '#...._#',
        '###.###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##_#.',
        '#####',
        '#####'
      ] }
    },
    sol: 'RURRDLULDDDDUULDRRR'
  },
  {
    id: 50, w: 3, n: 11,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '######_#',
        '######.#',
        '#P###..#',
        '#.A....#',
        '###.b#.#',
        '###....#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '....#',
        '###_#',
        '#####'
      ] }
    },
    sol: 'DRRRLDDRULURRRRRURDLLLLLDDRRUUUU'
  },
  {
    id: 51, w: 3, n: 12,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#......#',
        '##P#...#',
        '#..b.A##',
        '#_..#..#',
        '#....###',
        '#......#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#B#...#',
        '#.....#',
        '.......',
        '#.....#',
        '#.#...#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '#._.#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DRRRRRRDDDDULUURRDLULDRDLLRUULLDDRDLLLLLLDLUUUU'
  },
  {
    id: 52, w: 3, n: 13,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '########',
        '#####..#',
        '#...A..#',
        '##.Pb_.#',
        '##.#...#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###_###',
        '###...#',
        '..#....',
        '#.##..#',
        '#....##',
        '###.###'
      ] }
    },
    sol: 'URLDRDRRULDLURRUULDRDLLLURDRRUULDRDLLLLLDLURULDLURDDDLDDUUULLUULLRRRDRRUULD'
  },
  {
    id: 53, w: 3, n: 14,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####A###',
        '####_..#',
        '#Pb....#',
        '#...#..#',
        '########',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '##B..',
        '##..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '#..#.',
        '#.._#',
        '##.##'
      ] }
    },
    sol: 'RRRUUURUULDDDDRRDDLURULDLLDLLURRRURRDLULUURUULDDDDDDDLDRUUUURDLLDLLURRRURRDDLURUL'
  },
  {
    id: 54, w: 4, n: 0,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#PA.#',
        '#._##',
        '#####',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##..###',
        '...b###',
        '##...##',
        '##...##',
        '###.###'
      ] }
    },
    sol: 'DRUUULUURDDDD'
  },
  {
    id: 55, w: 4, n: 1,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '##A##',
        '#P.##',
        '#.._#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '#.b..',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RUURUULDDDDLDR'
  },
  {
    id: 56, w: 4, n: 2,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##=####',
        '#_A####',
        '#..####',
        '#.#####',
        '#P#####',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '....###',
        '#b#.###',
        '#...###',
        '###.###'
      ] }
    },
    sol: 'UUURRRRDDLLUDRRUULLLRRRUUUU'
  },
  {
    id: 57, w: 4, n: 3,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#.A.#',
        '##_.#',
        '##P##',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#.##..#',
        '#.b...#',
        '#.....#',
        '###.###'
      ] }
    },
    sol: 'UUULLURRDRRUULDRDLULDD'
  },
  {
    id: 58, w: 4, n: 4,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...P#',
        '#.#_##',
        '#.A..#',
        '#.####',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '..b..',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LLLDDRLUURRDDDRDDLUUU'
  },
  {
    id: 59, w: 4, n: 5,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '##...#',
        '##.#A#',
        '#_.P.#',
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
    id: 60, w: 4, n: 6,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_####',
        '#._###',
        '#...A#',
        '#...P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '.bb..',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'UURULLLLDLUDLUU'
  },
  {
    id: 61, w: 4, n: 7,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###_##',
        '###.##',
        '#P.._#',
        '##.A##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.b.#',
        '.b...',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'RDRRDRUUUDDLLLURU'
  },
  {
    id: 62, w: 4, n: 8,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '####..##',
        '#####A.#',
        '####...#',
        '#..._.##',
        '#P##._##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '.b..#..',
        '#.....#',
        '#######',
        '#######'
      ] }
    },
    sol: 'URRRURRULLDLLUUUUUDDLDRRDRRULLLRRRUUUUD'
  },
  {
    id: 63, w: 4, n: 9,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###.P#',
        '###_##',
        '##..##',
        '#.A._#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '..#b.##',
        '#....##',
        '#...###',
        '###.###'
      ] }
    },
    sol: 'LDDLDDDDRDLDLLUULLRURDDDDDDLLURDRUUUUUULDR'
  },
  {
    id: 64, w: 4, n: 10,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###_##',
        '##.P##',
        '#A..##',
        '#.._##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '...b.',
        '#.b##',
        '##.##'
      ] }
    },
    sol: 'DDLLUULURRRLLDDDRRUULDLLLDDDR'
  },
  {
    id: 65, w: 4, n: 11,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####.#',
        '###.A#',
        '###_.#',
        '###P.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###..##',
        '#.b..##',
        '...#.##',
        '#.....#',
        '#.....#',
        '###.###'
      ] }
    },
    sol: 'UURRURRURDDUULUUDLDRRRDRDRRULLLDLURULL'
  },
  {
    id: 66, w: 4, n: 12,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###._#',
        '##.AP#',
        '##.#.#',
        '#_...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '..b..',
        '#.b.#',
        '##.##'
      ] }
    },
    sol: 'ULDDDRRRLLLLDDUURRRRDDLLUUULURRRRLLDLDDDRRUU'
  },
  {
    id: 67, w: 4, n: 13,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.##..#',
        '#_....#',
        '#..#P.#',
        '#..#.A#',
        '#.._..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#...b.#',
        '#b#...#',
        '......#',
        '#.....#',
        '#.....#',
        '#######'
      ] }
    },
    sol: 'DDRUULURRRRUULLDURRDRRULDDLLLLLLLRRURDDDDDDRDLLLLL'
  },
  {
    id: 68, w: 4, n: 14,
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..._.#',
        '#.#...#',
        '#.....#',
        '#...A.#',
        '#_.P..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.b.#',
        '#B..#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '#....',
        '#.b.#',
        '##.##'
      ] }
    },
    sol: 'RUUUUUURULDDLUULURRRLDLDDRRUULDDDDDDRDLLL'
  },
  {
    id: 69, w: 5, n: 0,
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
    id: 70, w: 5, n: 1,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###.##',
        '###B.#',
        '#....#',
        '#.AP.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##=##',
        '#####',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '.....',
        '##_##',
        '#####'
      ] }
    },
    sol: 'URULLLUUUDDLLDRRRRLLURDDDDD'
  },
  {
    id: 71, w: 5, n: 2,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.######',
        '#.AP####',
        '#.#.####',
        '#.#.####',
        '#.B.####',
        '#.#.=###',
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
        '#####',
        '###.#',
        '.##..',
        '##._#',
        '##.##'
      ] }
    },
    sol: 'DDDLLLDLDDUUUDDRRUUULLLLLUUUDRRRDDDDR'
  },
  {
    id: 72, w: 5, n: 3,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##P#####',
        '##..####',
        '###B####',
        '###.#..#',
        '#.A....#',
        '#......#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '###=.',
        '#####',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '#_...',
        '#####',
        '#####'
      ] }
    },
    sol: 'DRDDDRDLLLLLUUURRRDRRUULDRDLLLLLLLLL'
  },
  {
    id: 73, w: 5, n: 4,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#####.#',
        '#.B.A.#',
        '##.##.#',
        '##.P###',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.=..#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '..._#',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'LUUUULLLRRRRRDRUUUDDDDDUUUUUULLLRRR'
  },
  {
    id: 74, w: 5, n: 5,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####P###',
        '#..#..##',
        '#.B##..#',
        '#...##.#',
        '#....A.#',
        '#._#####',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#=.##',
        '.....',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '##_.#',
        '#####',
        '##.##'
      ] }
    },
    sol: 'DRDRDDLLLULLDRULUURDDDURDDDRRRLULDDDDDL'
  },
  {
    id: 75, w: 5, n: 6,
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
        '###.###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#####_#',
        '#####.#',
        '.##=#..',
        '###...#',
        '#######',
        '#######'
      ] }
    },
    sol: 'RURRRULDDLULDRDLULDRRDLLLLDLLDDDUUDDLLU'
  },
  {
    id: 76, w: 5, n: 7,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '####..#',
        '#..#_B#',
        '#.b...#',
        '#.P.A.#',
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
        '....#',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'RURUURDDLLDLLURRDRUDRRDRRUULDRDLLLU'
  },
  {
    id: 77, w: 5, n: 8,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '#P.B.##',
        '###..##',
        '###.A.#',
        '###.###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.....',
        '#=..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##_##',
        '...##',
        '##.##',
        '#####'
      ] }
    },
    sol: 'RRURDDDDRDDLLURRRLLLLLRRRRRRDDDUUUL'
  },
  {
    id: 78, w: 5, n: 9,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..P.##',
        '#.##.##',
        '#A.b._#',
        '#...###',
        '#.B.###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##=.###',
        '###.###',
        '..#..##',
        '#..#.##',
        '##...##',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '###.._#',
        '###.#.#',
        '##....#',
        '##....#',
        '#######'
      ] }
    },
    sol: 'LLDDRRRLDDLUULDDDDDURRDDDLLLURRDRUUDLLUURRRDRDRRUULUUL'
  },
  {
    id: 79, w: 5, n: 10,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##P###.#',
        '#.A....#',
        '####.#.#',
        '###....#',
        '###.B..#',
        '#####..#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '..#.#..',
        '#.#.#.#',
        '#.....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '###=#',
        '###_.',
        '#####',
        '#####'
      ] }
    },
    sol: 'DDDDDDLLUULLRRRDDLDRURRDDLURULDLUUDRRUULLLLLLLDDLLUUUUUU'
  },
  {
    id: 80, w: 5, n: 11,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '###.B_#',
        '#..P.b#',
        '##A.#.#',
        '##.##_#',
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
        '#=.####',
        '##.####',
        '.....##',
        '####.##',
        '##_..##',
        '###.###'
      ] }
    },
    sol: 'UURDRDLLDLLDDLLDDUUUURRUURRUULLLLLRRRRRRRRDDLDDULURRRUUL'
  },
  {
    id: 81, w: 5, n: 12,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#._.P.#',
        '#..##B#',
        '#...b.#',
        '#..A..#',
        '#....##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '....#',
        '#.=.#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#.._#',
        '#....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RDDLLRDDLULUUDRRRRRUUUDDDRDDLULURRRRD'
  },
  {
    id: 82, w: 5, n: 13,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###.#_##',
        '###....#',
        '##....b#',
        '###....#',
        '###..#A#',
        '##P...B#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#.....#',
        '....#..',
        '#.....#',
        '#.#=..#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#.#..##',
        '#_...##',
        '#......',
        '###...#',
        '##....#',
        '###.###'
      ] }
    },
    sol: 'RUUUURRRDDDDDRDLRDDLULLURRURDDRDLDLUUUUUUULURRURRDLLLRRRDDDDLUURDDDDDRDLLLLDDLL'
  },
  {
    id: 83, w: 5, n: 14,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.b.###',
        '#..B###',
        '###..##',
        '###.AP#',
        '###._.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '###...#',
        '##....#',
        '#......',
        '#.=...#',
        '#.....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#_....#',
        '#.....#',
        '......#',
        '#.....#',
        '#.....#',
        '###.###'
      ] }
    },
    sol: 'LDLUUUUUDDLLURRRRRURDRDLLLDLURRDDDLURRRURDDDDDDRDLLULLDRRRLDDLLDDUURDULUUUUUURULLDLUUUL'
  },
  {
    id: 84, w: 6, n: 0,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '#_##..##',
        '#..b.AP#',
        '#_....##',
        '########',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#####=.',
        '#######',
        '#######',
        '###.###'
      ] }
    },
    sol: 'LULDLLDLURRRRDLLLLL'
  },
  {
    id: 85, w: 6, n: 1,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#_##P.#',
        '#.Ab..#',
        '#_#####',
        '#.#####',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '.....',
        '#=..#',
        '##.##'
      ] }
    },
    sol: 'DLLLLDLDDUUULUURDDDDUUL'
  },
  {
    id: 86, w: 6, n: 2,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '########',
        '##..####',
        '#P.b.###',
        '#_....##',
        '#B#._A.#',
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
        '##..#',
        '##=.#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RURDRDRDDDRRRLULLLULDDDRDDLUUUDD'
  },
  {
    id: 87, w: 6, n: 3,
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
    id: 88, w: 6, n: 4,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '######_#',
        '######.#',
        '####_..#',
        '##.b.A.#',
        '#...P.##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#=..#',
        '#....',
        '#####',
        '#####'
      ] }
    },
    sol: 'RURULDDLLLURRDRURULLLULLDRRRRDRUUDLLLULL'
  },
  {
    id: 89, w: 6, n: 5,
    idea: {"en":"The pink box has to go inside the main room","ar":"الصندوق الزهري لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..###',
        '#_.###',
        '#..AP#',
        '#..B##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '.C.##',
        '##.##',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '....#',
        '#####',
        '#####'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '##=##',
        '...##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'LDDDLLLULURRRRRDDDUUUUDLDDRRRRUUULDLURUUUUU'
  },
  {
    id: 90, w: 6, n: 6,
    idea: {"en":"The pink box has to go inside the main room","ar":"الصندوق الزهري لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#_#..##',
        '#PBA..#',
        '#.#####',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.###',
        '.C.=#',
        '#..##',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '.#...',
        '#####',
        '#####'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '.#...',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'RRURDDDRRRLLLLLLUUUDRRRRRDRUUURRRLLLLLLLLLDDDURRRRRRR'
  },
  {
    id: 91, w: 6, n: 7,
    idea: {"en":"The green box has to go inside the main room","ar":"الصندوق الأخضر لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#....##',
        '#BPb.##',
        '#.##.##',
        '#_##.##',
        '#..A_##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '..#=##.',
        '#.#.###',
        '#...###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '.....',
        '#..##',
        '#####'
      ] }
    },
    sol: 'ULDURRRDLLULDDURRRDDDLLLLLDLUULLUULLRRRRRRRRDDRRUU'
  },
  {
    id: 92, w: 6, n: 8,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#P_.._##',
        '####.###',
        '####.###',
        '#..Ab..#',
        '##.....#',
        '#####..#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '...=#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RRRDDDLDLUUULLLRRDRURRDDLURULDLUUUUURULLLLRRRRR'
  },
  {
    id: 93, w: 6, n: 9,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '####P#',
        '##...#',
        '#A_b_#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '###...#',
        '###..B.',
        '###.#.#',
        '###...#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#=###',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DLLDLLULLDRURDRRURRDLLLLULLDDDRRUDLLUURRRRRRRDRRULLLLRRU'
  },
  {
    id: 94, w: 6, n: 10,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####.#',
        '####.#',
        '#._P.#',
        '#.BA.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###C###',
        '....##.',
        '##..###',
        '###.###',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '.####',
        '##.=#',
        '##.##'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '..###',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'DDDDLDRRDRDDUUUUUUULULLLDRRRRRDRUUUUULRUUUR'
  },
  {
    id: 95, w: 6, n: 11,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.##.##',
        '#...A##',
        '#_#._.#',
        '###b#.#',
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
    sol: 'RRRRUULLURRRUUUDDDDRRRLRDDLLUUUULULLRRRRUUUDLDDDRRUULLLDLLURRRLDLDDUUUURRRLLLLLUUUDDDD'
  },
  {
    id: 96, w: 6, n: 12,
    idea: {"en":"The green box has to go inside the main room","ar":"الصندوق الأخضر لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..##_#',
        '#...b.#',
        '#.....#',
        '#P..#_#',
        '#.A.###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##.B.',
        '#####',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '...##',
        '#..##',
        '#####'
      ] }
    },
    sol: 'RDDDRRLLUUULDRRRDRUUUULUURRDRULLLDRRURD'
  },
  {
    id: 97, w: 6, n: 13,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.....#',
        '##....#',
        '#..Ab.#',
        '#_._#.#',
        '#.P.###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#.B...#',
        '#.....#',
        '......#',
        '#.....#',
        '#...#.#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '#...#',
        '#.=.#',
        '##.##'
      ] }
    },
    sol: 'UUURDURRDLLULDLDRRRURRDLLLLRRURUU'
  },
  {
    id: 98, w: 6, n: 14,
    idea: {"en":"The green box has to go inside the main room","ar":"الصندوق الأخضر لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###.B#',
        '#.A..#',
        '#..._#',
        '###P##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##..###',
        '#...C..',
        '#..####',
        '#..####',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '##.#..#',
        '......#',
        '#.....#',
        '#...###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '###=.',
        '#####',
        '#####'
      ] }
    },
    sol: 'ULLURRDRUUULUURRDLLLLLLULDLDDRULURRRRRRDLURURRDLDDDLURRRRDRRUULDRDLULDDDDUUULLL'
  },
  {
    id: 99, w: 7, n: 0,
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
    id: 100, w: 7, n: 1,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#####',
        '#Ab.#',
        '##P.#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##B####',
        '##.####',
        '##.....',
        '##.#.##',
        '##...##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '####..#',
        '####.C#',
        '####..#',
        '##....#',
        '##....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '.####',
        '##_##',
        '##.##'
      ] }
    },
    sol: 'RULLLLLRDDLLUUUUULURRDRUUUU'
  },
  {
    id: 101, w: 7, n: 2,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '#P..##',
        '###.=#',
        '##Ab.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#.B.###',
        '##.####',
        '##.....',
        '##.##.#',
        '##....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '##..C##',
        '##..###',
        '..#.###',
        '#.#.###',
        '#...###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##.##',
        '.._##',
        '#####',
        '#####'
      ] }
    },
    sol: 'RRDRDLLLLLRRDDLLLUUUUUUUULURRRLLDDDDDDDRRRRRUR'
  },
  {
    id: 102, w: 7, n: 3,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '###A#',
        '###b#',
        '###P#',
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
    id: 103, w: 7, n: 4,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '###A#',
        '#.b.#',
        '#.P.#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '####...',
        '##....#',
        '##..B.#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '###.###',
        '###..#.',
        '#C...##',
        '#######',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##..#',
        '##...',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'LURDRUUURLLURRURDDDDDRDLLLLULDRDL'
  },
  {
    id: 104, w: 7, n: 5,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '#P#..#',
        '#.#.b#',
        '#.A..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '..#.###',
        '#....##',
        '#B...##',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '#.#.###',
        '#C#..##',
        '#....##',
        '#...###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##_##',
        '##.##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DDRRUURDDDDDUUUULDRRDRDRRULLRUUUUULDRRDDDDDRDLLDLUUUUU'
  },
  {
    id: 105, w: 7, n: 6,
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
    id: 106, w: 7, n: 7,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '###P.#',
        '##..b#',
        '#.A..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '..#.###',
        '#.#.###',
        '#..B.##',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '##..###',
        '..#.###',
        '#.#..##',
        '#...C.#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##.##',
        '#....',
        '#.._#',
        '##.##'
      ] }
    },
    sol: 'DLDDDDDDDDDDRDDDRRRLULDLLUULLLUULLRRUURDDDDDDDDDDDDDDDLDR'
  },
  {
    id: 107, w: 7, n: 8,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##A###',
        '#=.###',
        '##.bP#',
        '##..##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '.....##',
        '#....##',
        '#B..###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.#.#',
        '###..C#',
        '###.#.#',
        '##..#.#',
        '##....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##_##',
        '...##',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'LDLUUUULUURRDLLULDDDDRRRRUUUDDDUULLDDLDRRRRDRULLLLUUUUUURRDDDL'
  },
  {
    id: 108, w: 7, n: 9,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###P.#',
        '##..b#',
        '#=A..#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '....##.',
        '##....#',
        '##B...#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '###.#.#',
        '###..C#',
        '##..#.#',
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
    sol: 'DLDDDDLLLLRRUURDDDDDLDRDRRULLULDDDDDRRRRUUUDDULLDLDRRRRRDRULUUUULLUUUUULLLLL'
  },
  {
    id: 109, w: 7, n: 10,
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
    id: 110, w: 7, n: 11,
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.A.#',
        '##.#.#',
        '##P#b#',
        '##...#',
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
        '###..##',
        '##.....',
        '##.#.##',
        '##..C##',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##.##',
        '..._#',
        '#####',
        '#####'
      ] }
    },
    sol: 'UURLDDDRRUUUURURULLLULUUUDDRDLLLURDRRUULDRDLLLLLLDDDDLLLLUURURDDDDUUULLDDRRRR'
  },
  {
    id: 111, w: 7, n: 12,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##._##',
        '#...##',
        '#._.P#',
        '##A###',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.B.#',
        '###...#',
        '#######',
        '#######',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '.###...',
        '#.....#',
        '#C....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##b##',
        '.....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LLDDDRUUULLDDUURDLLDLLURRRRURRURRRDLUULURRURRRLLLLDDRULURRLDDLLDDUUULURDRUDLDDDRRULDLUU'
  },
  {
    id: 112, w: 8, n: 0,
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
    id: 113, w: 8, n: 1,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '##V##_#',
        '#_.##.#',
        '#....P.',
        '#b#...#',
        '#.=.b.#',
        '###.###'
      ] }
    },
    sol: 'DDLULDDDUULLUURRRDRUUDDDLLL'
  },
  {
    id: 114, w: 8, n: 2,
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
    id: 115, w: 8, n: 3,
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
    id: 116, w: 8, n: 4,
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
        '#######',
        '.......',
        '###.#.#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'RDLLLLRRULDRRRURRRRRDDRRUULLLLLLDLLLLDLDR'
  },
  {
    id: 117, w: 8, n: 5,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '###.#.#',
        '#..b..#',
        '#.#A#_.',
        '#...###',
        '#V..P_#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '.......',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'LLLLULLRRDRRURUDLLUURRRRRRRUUUUDDDDDRRRRRRR'
  },
  {
    id: 118, w: 8, n: 6,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '##....#',
        '#_A#.V#',
        '...#..#',
        '##...##',
        '#Pb..##',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RUULLLULLDDLLLDRUUURULLLRRDLUULURRDRRULLL'
  },
  {
    id: 119, w: 8, n: 7,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '#.#_###',
        '#Vb..##',
        '...#.P.',
        '#.A_###',
        '#.=####',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LULLRUUUDDURRRDRRRULDRRRDRRULLLLULDDURD'
  },
  {
    id: 120, w: 8, n: 8,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '#.A.#P#',
        '#..##.#',
        '....#..',
        '#b#_###',
        '#.V.###',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '###..##',
        '###..##',
        '###..##',
        '#######'
      ] }
    },
    sol: 'DDRRUULULURDDLLLRLUURUULDRDLLRRRDDUULLDDRLUURRDDDDDDDRDDLUUUUUUU'
  },
  {
    id: 121, w: 8, n: 9,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '#.b...#',
        '#.b#_=#',
        '...##.#',
        '#..._V#',
        '###.P.#',
        '###.###'
      ] }
    },
    sol: 'URRUURDDLDRRRDRUUDLLLULLRRDRRRUUUUULUUURRRRURDLDRRDDD'
  },
  {
    id: 122, w: 8, n: 10,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '#.#..##',
        '#Ab..##',
        '._.#.##',
        '##V...#',
        '#_P...#',
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
    sol: 'RURUUULUULURRURDDDRDLULDLUUUUDDLURDDDRRULDLUULURRRLURDDDRDLLL'
  },
  {
    id: 123, w: 8, n: 11,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '#..V.##',
        '#b.P.##',
        '#..#=A.',
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
    sol: 'RULLLLRRRRDDDRDLUUULLDLUUUURULDDDDRRRDDDLDDRDDDDDDDDLLURDRUUUUUDDDDLLULLRRDDRULLDDLUU'
  },
  {
    id: 124, w: 8, n: 12,
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '#..PV.#',
        '#b.#A.#',
        '...#...',
        '##..#_#',
        '#._.###',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '..#.#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RRRRDRDDDDLUUULULLRRRLLLLLDRDDDDRDDLLULLRURDDDDULURRURDD'
  },
  {
    id: 125, w: 8, n: 13,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '###b=.#',
        '##__.V#',
        '..##...',
        '#P#...#',
        '#.A...#',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '#....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DRRURRDLULDDDLUURDLLUUDRDDRLUURDLDRLDDRUDLLLLUULLDLURULLLLDLLURRRRURRDLU'
  },
  {
    id: 126, w: 8, n: 14,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '###.###',
        '#.#b._#',
        '#_..#.#',
        '..=PAV.',
        '##.#.b#',
        '###...#',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'UURRDDLLRRDDDUUULLLLLLLDLDDURRRRRLUURRDDDDUULLLURRURRDLLLLDRUUUUUDLLL'
  },
  {
    id: 127, w: 9, n: 0,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.####',
        '#.A#.##',
        '#.b..##',
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
        '#.....#',
        '###.###',
        '###.###'
      ] }
    },
    sol: 'UURLURRDRRUUUUUDLDRRRRDRRUUUUUDD'
  },
  {
    id: 128, w: 9, n: 1,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..####',
        '#...###',
        '#Pb._##',
        '##.####',
        '##A####',
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
        '#...#',
        '#####'
      ] }
    },
    sol: 'RDDDRDDLUUUUULUURDLDRR'
  },
  {
    id: 129, w: 9, n: 2,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#...P###',
        '#.Ab.###',
        '####..##',
        '###..###',
        '###...##',
        '####.._#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '....OO..',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '..#.##.',
        '#....##',
        '##.b.##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '..O....',
        '.......'
      ] }
    },
    sol: 'LLLDRURRDULLDRURDDDLDRRRDRRDDUULLULLDR'
  },
  {
    id: 130, w: 9, n: 3,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '######=#',
        '##.....#',
        '##...###',
        '##.#####',
        '#.A#####',
        '#P..####',
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
        '###.###',
        '..#....',
        '#.b..##',
        '##...##',
        '#######'
      ] }
    },
    sol: 'URRDRRLLULLDRUUURULLLLDDRULURRRRRRRU'
  },
  {
    id: 131, w: 9, n: 4,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.P###',
        '#..A.##',
        '#.b...#',
        '##..###',
        '#_..###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.....O.',
        '..OO...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##b##',
        '##.##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DDDDDDDURULULDDDRDL'
  },
  {
    id: 132, w: 9, n: 5,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####P###',
        '####..##',
        '####.###',
        '#....._#',
        '#.A#####',
        '#..#####',
        '########'
      ], terrain: [
        '........',
        '........',
        '.....O..',
        '........',
        '.....O..',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '####...',
        '#.B...#',
        '###...#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '#.b..',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DDDLLLDDRUUUULLLDLLURRRRRRDRULURRLDDLLDDLURRRR'
  },
  {
    id: 133, w: 9, n: 6,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##=...P#',
        '####.bA#',
        '###.#.##',
        '#####..#',
        '#_.....#',
        '########',
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
        '###.###',
        '###.###',
        '....###',
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
    sol: 'LDRRRRDDRUURURRLLDLURULLLRRRUUUULDDDRDLLLLRRRUUUULLL'
  },
  {
    id: 134, w: 9, n: 7,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##..####',
        '##A.####',
        '##..####',
        '#...####',
        '#.P..=##',
        '###.####',
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
        '##.##',
        '##B##',
        '#...#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '#.b.#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'UURUULDDDLDRURDDDDDDDRDDLUUUUUUUULUURDLDRRR'
  },
  {
    id: 135, w: 9, n: 8,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '######.#',
        '###.A..#',
        '####.#_#',
        '#P##.###',
        '#.....##',
        '########',
        '########'
      ], terrain: [
        '........',
        '........',
        '.....O..',
        '........',
        '........',
        '.....O..',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###...#',
        '###B..#',
        '..#....',
        '#...#.#',
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
        '##.##',
        '...##',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'DRRRUUUUUURRUULLDDDLLDRRRRRDRUUUUDDDLLLLUURRRLLLDLLULLRRRRDRRUUUUUD'
  },
  {
    id: 136, w: 9, n: 9,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####..##',
        '####.PA#',
        '####..##',
        '####.###',
        '####..##',
        '###_..##',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '....OO..',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '..B.#',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##b##',
        '#.b..',
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
    sol: 'RRDRRUULDRDLLLDLUUDRRRULLLULDRRRRDLLLUUDDRRRULLLULDDDDRDL'
  },
  {
    id: 137, w: 9, n: 10,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###A####',
        '###..b.#',
        '##=.P#.#',
        '##.....#',
        '###..###',
        '####_###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '...OO...',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '..b..',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'ULUURUULDDDDDLDRURDRRUULLDLUUURUULDDDDDLDRURDDUULL'
  },
  {
    id: 138, w: 9, n: 11,
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
        '##b##',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DRRURDLDRLDRRRUUDDDDDULURLUURDLDRRRRDRRULLLRRDDDUUDLLDLURULL'
  },
  {
    id: 139, w: 9, n: 12,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..##_#',
        '#.A...#',
        '#P..#_#',
        '#..####',
        '#..####',
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
        '#.b.#',
        '.....',
        '#.b.#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.O...',
        '.....'
      ] }
    },
    sol: 'UURDLDRRRUUDDDDUULLLURLDDDRULUURLDDRULURRRRRURUUDDDRDDLUUUU'
  },
  {
    id: 140, w: 9, n: 13,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#P###..#',
        '#b.....#',
        '#......#',
        '#Ab##.##',
        '#..##_##',
        '#..#####',
        '########'
      ], terrain: [
        '........',
        '........',
        '...O....',
        '...O....',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '###....',
        '#....##',
        '#.B..##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '####.',
        '###.#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '...O.',
        '.....'
      ] }
    },
    sol: 'DRDDLLLDDLDDUUUUULLDRURURRRRDDLDDRUUULUULURDRULURRRRRRDRRUULDDD'
  },
  {
    id: 141, w: 9, n: 14,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##..##.#',
        '#..A.#.#',
        '#....#.#',
        '#....._#',
        '#bP....#',
        '#....#.#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '.....O..',
        '.....O..',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#.....#',
        '#..##.#',
        '#B#....',
        '#.....#',
        '#.....#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '.O.....',
        '.......'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#.b.#',
        '.....',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'DLURUUUURDDRDLLLUULLLDLDDDLDRRRRRRDRULURRRULLDRRRR'
  },
  {
    id: 142, w: 10, n: 0,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####.##',
        '#.P..##',
        '#.Ab.##',
        '###..##',
        '###_.##',
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
    sol: 'RDULLDRRDRUUUURR'
  },
  {
    id: 143, w: 10, n: 1,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###..###',
        '##P.b###',
        '#.A..###',
        '#.#..._#',
        '#.#_.###',
        '#...####',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '.....x..',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#=#.#',
        '#.#..',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '...x.',
        '.x.x.',
        '.....',
        '.....'
      ] }
    },
    sol: 'RURDDLDDDLLUUURURDDRRLDLLDLLUU'
  },
  {
    id: 144, w: 10, n: 2,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '########',
        '##..##_#',
        '#.bP...#',
        '#......#',
        '#.A.#..#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '....x...',
        '....xx..',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###...#',
        '#####.#',
        '#####.#',
        '#.##=.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.....x.',
        '.......',
        '.......',
        '.x.....',
        '.......'
      ] }
    },
    sol: 'ULDLDRRRRDRUULLLDLDDDRRDDDL'
  },
  {
    id: 145, w: 10, n: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##...P#',
        '###Ab.#',
        '###.###',
        '##._.##',
        '#....##',
        '#######'
      ], terrain: [
        '.......',
        '..x....',
        '.....x.',
        '...x...',
        '.......',
        '.x.....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '#=..###',
        '###..##',
        '###..##',
        '###..##',
        '###.###'
      ] }
    },
    sol: 'LLDURRDLULDDDDDDDRDDLUUUUUDDLL'
  },
  {
    id: 146, w: 10, n: 4,
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..#.#',
        '##..#_#',
        '##.A#.#',
        '##Pb..#',
        '##..#.#',
        '#######'
      ], terrain: [
        '.......',
        '.....x.',
        '.......',
        '.......',
        '....x..',
        '.....x.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.###',
        '..###',
        '#=.##',
        '##.##'
      ], terrain: [
        '.....',
        '.x...',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'DRURLLUUURDLDDRRRUUUDDDLLLUURDLDRRRRDRDDUUUUL'
  },
  {
    id: 147, w: 10, n: 5,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#....##',
        '#.A...#',
        '###.bP#',
        '###..##',
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
    id: 148, w: 10, n: 6,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#..P#..#',
        '#.b.#..#',
        '#..A...#',
        '#...#.##',
        '#.#..._#',
        '#####..#',
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
        '#..##',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DDLLURURDDDDDLDRRRRR'
  },
  {
    id: 149, w: 10, n: 7,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P....#',
        '#.A.b.#',
        '###.###',
        '###.###',
        '##_.._#',
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
        '#..##',
        '.....',
        '#=..#',
        '#####'
      ], terrain: [
        '.....',
        '.x...',
        '...x.',
        '.....',
        '.....'
      ] }
    },
    sol: 'DRURDURRDLULDDDDDLDLLRRRRDRRULLLLLRRRD'
  },
  {
    id: 150, w: 10, n: 8,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####..#',
        '#...AP#',
        '#.b...#',
        '###.###',
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
        '###..##',
        '##...##',
        '.#.#...',
        '##...=#',
        '####..#',
        '#######'
      ] }
    },
    sol: 'ULDRDLULDULLDRURDDDDRDDDLLUURURDDULLDDRRDRULURRLD'
  },
  {
    id: 151, w: 10, n: 9,
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..._.#',
        '#..bAP#',
        '#.....#',
        '##.#.##',
        '#_...##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.x.x...',
        '..x.x..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '###..',
        '#.B.#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '...x.',
        '.....',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#..=#',
        '.....',
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
    sol: 'ULDRDLLULDDUUURDRDDDLLLLDLLLU'
  },
  {
    id: 152, w: 10, n: 10,
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
    id: 153, w: 10, n: 11,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##P#...#',
        '#..A...#',
        '#.b....#',
        '##.#####',
        '#..#._##',
        '#.....##',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '..x.....',
        '..x.....',
        '....x...',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.=##',
        '###.###',
        '###..##',
        '###...#',
        '###..##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...x.x.',
        '.......',
        '.......'
      ] }
    },
    sol: 'DRRLLLDRRRUURRDLULDRRDLLULLDURRDLULDDDLDRRRURDDDDRDDLUUUUUDR'
  },
  {
    id: 154, w: 11, n: 0,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####A#',
        '#B..P#',
        '#.u.t#',
        '###..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '###..##',
        '##...##',
        '###.###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '###..',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'LDDRUULLLLDLDDRURRDDLURULL'
  },
  {
    id: 155, w: 11, n: 1,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..A.#',
        '#.u#.#',
        '#t.#P#',
        '#...B#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '...#.',
        '#####',
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
    sol: 'UULLDURRDDDDRDDLLULLLLUURDLDRR'
  },
  {
    id: 156, w: 11, n: 2,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.P.A..#',
        '#.##...#',
        '#t##=#u#',
        '#....#.#',
        '######.#',
        '######B#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.####',
        '#####',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '##..#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RRDRRDDDUUUULLLLRRDDDLLLUUDDRRRU'
  },
  {
    id: 157, w: 11, n: 3,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P=###',
        '#.t###',
        '#.uB##',
        '#A####',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '#####',
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
    sol: 'DDRLUURDLDRRRDRRULLLLULDUUR'
  },
  {
    id: 158, w: 11, n: 4,
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
    id: 159, w: 11, n: 5,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#....PA#',
        '#.###t=#',
        '#u###..#',
        '#..B..##',
        '########',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '..###',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '###.###',
        '###....',
        '###.###',
        '#######',
        '#######'
      ] }
    },
    sol: 'RRDRDDDLDLLLRRRURUUULULLLLLLDDDDDDRRRRRRRUUDDLLLLLLLUUUUUURRRRDR'
  },
  {
    id: 160, w: 11, n: 6,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.B_#',
        '#P..##',
        '#t#u##',
        '#..A.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.....',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '.####',
        '#####',
        '##.##'
      ] }
    },
    sol: 'RRDDDRDDLUUUDRDRRLLRUULURDLLD'
  },
  {
    id: 161, w: 11, n: 7,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#A.PB#',
        '#.#.u#',
        '#b.t.#',
        '#_#..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '###..',
        '##..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '.....',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'LLLDLDDDRRDRUUUDLURRRRLLLLDRUURULLLLL'
  },
  {
    id: 162, w: 11, n: 8,
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#..#.##',
        '#t.#A.#',
        '#u....#',
        '#.PB###',
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
    sol: 'URRRULLLLUUUUDRDLLLLLLUUUUDDDDDRRRRLUUULDDDDDUUURDLLLDDLLURDRULURRRR'
  },
  {
    id: 163, w: 11, n: 9,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.tP##',
        '#B..##',
        '#u####',
        '#A.=##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '.....',
        '##..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '##...',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DLLLLDDDDDRDDLUUUUUUUUUDDDDRRULLLULDDDDDDDRDRRR'
  },
  {
    id: 164, w: 11, n: 10,
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
    id: 165, w: 11, n: 11,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..#.#',
        '#A.u.#',
        '#.#t.#',
        '#.PB.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.....',
        '##..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#.#..##',
        '#.#...#',
        '.......',
        '#.#...#',
        '###..##',
        '###.###'
      ] }
    },
    sol: 'RRRRRUUUUULLULDDURRRDDDDDLLLLLLLULLDRRRRRRRRRUUUUULDRDDDDLLLLL'
  },
  {
    id: 166, w: 11, n: 12,
    idea: {"en":"The green box has to go inside the main room","ar":"الصندوق الأخضر لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.BA.#',
        '#..u..#',
        '##....#',
        '#.P..##',
        '#..t.##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#.#..',
        '##..#',
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
    sol: 'URUUUDDRRULLLLULDDDDDDRRDLL'
  },
  {
    id: 167, w: 12, n: 0,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#...####',
        '#Pb..###',
        '##A._###',
        '##..####',
        '##..####',
        '###=####',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '..||....',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '.###.',
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
    sol: 'URDDDURDDLUURUULLDRURDLDRDDD'
  },
  {
    id: 168, w: 12, n: 1,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#..#####',
        '#b..A.##',
        '#..##.##',
        '#...#.P#',
        '###.#.##',
        '#####.=#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '...|.|..',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '#....##',
        '####...',
        '#######',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.o.....',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'LUULLLLLULUUUDDDDDRDRRRLUUULDDDDUURDLLLULLRUUUURRRRDDDDR'
  },
  {
    id: 169, w: 12, n: 2,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.b.##',
        '##..A.#',
        '##...P#',
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
    id: 170, w: 12, n: 3,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###P.###',
        '####.A.#',
        '###...b#',
        '###..._#',
        '####.###',
        '####=###',
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
        '###.###',
        '###.###',
        '###.###',
        '###.#..',
        '###...#',
        '#....##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '.o.....',
        '.......'
      ] }
    },
    sol: 'RDDRUUURRURRLLLDLLUUUUUDDLDRRUURDDDDDDRDLLRUUUUUULDLDD'
  },
  {
    id: 171, w: 12, n: 4,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#####..#',
        '##.A...#',
        '##.#...#',
        '#Pb....#',
        '##..####',
        '###=####',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '..||....',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '####..#',
        '####...',
        '####.##',
        '####.##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '....o..',
        '.......'
      ] }
    },
    sol: 'RRRLLUURRDRRUULDRDLULDRRDLLLLLLULDDURRRRDD'
  },
  {
    id: 172, w: 12, n: 5,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#A..b.#',
        '###P..#',
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
    id: 173, w: 12, n: 6,
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####..##',
        '#..A..##',
        '#P##...#',
        '###..b.#',
        '###.####',
        '###..=##',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '...|....',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##B.#',
        '##..#',
        '##.##',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '###.#',
        '#....',
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
    sol: 'URRRURDDDRDLLDLDDUUUULDDRUUUULURDRUDLDDDDLLDDRR'
  },
  {
    id: 174, w: 12, n: 7,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#P_###=#',
        '##A....#',
        '#..b####',
        '#.#...##',
        '#....###',
        '#.#..###',
        '########'
      ], terrain: [
        '........',
        '........',
        '.....|..',
        '........',
        '.....|..',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '...##..',
        '#.....#',
        '#######',
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
    sol: 'RDRDDRDDLULLUURLDDRRUDLLUURURDDRDDLUUULURRRDRRRRURRLLDLURRRRU'
  },
  {
    id: 175, w: 12, n: 8,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.A.####',
        '##Pb..##',
        '##.##.=#',
        '##..#.##',
        '#.b.._##',
        '#...####',
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
        '....#',
        '#B..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '##...',
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
    sol: 'DDRDDLUUUUUURUULDRDLLLDLURRRDDDDRDRRUUULLULDDDRDDLLURRRLULUURRRDR'
  },
  {
    id: 176, w: 12, n: 9,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '##..##=#',
        '##A.##.#',
        '#P..#..#',
        '#..b..##',
        '#....###',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '.....|..',
        '.....|..',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '#..B#',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#####',
        '.....',
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
    sol: 'RRUULDDDDDDDRULUUULDRUURDDDRRRDDDDLLURDRUUDLURRRRDLULLLUURRURUU'
  },
  {
    id: 177, w: 12, n: 10,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###P.###',
        '#.bA.###',
        '#.#...##',
        '#.....=#',
        '###.####',
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
        '#B...',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#.###',
        '#...#',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.o...',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'DRDDLLLUURLDDRRRUUULDRDDLRUULDRDLLLLDLLUDRRULDLUUURULDLURDDDRRRRRRRR'
  },
  {
    id: 178, w: 12, n: 11,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##_.####',
        '##..####',
        '#...##=#',
        '#......#',
        '#PA..###',
        '#.b..###',
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
        '#..B.',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '...##',
        '#####',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '..o..',
        '.....',
        '.....'
      ] }
    },
    sol: 'DRUUURULLDLLURRRLDLDDUUUURRRDDDLDRURDLLDRRRLLUURRRU'
  },
  {
    id: 179, w: 12, n: 12,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '#..P##_#',
        '#b.....#',
        '#.Ab#..#',
        '#...#=##',
        '##..####',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '....|...',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.#.#',
        '###.#.#',
        '.##...#',
        '##....#',
        '##...##',
        '#######'
      ], terrain: [
        '.......',
        '.....o.',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'DDLUULDDDDDDRDDLLURDRULURDRUUDLLUUUURDDRUULURRRDRUDLD'
  },
  {
    id: 180, w: 12, n: 13,
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
    id: 181, w: 12, n: 14,
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#.....##',
        '#..#b.##',
        '#b.A..P#',
        '#.....##',
        '###.#.##',
        '###.=._#',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '........',
        '...|.|..',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.B.#',
        '#...#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '#...#',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '...o.',
        '.....',
        '.....'
      ] }
    },
    sol: 'LUULDDLDRLLUUDRRUULLDDDLUUUUUUULURDDDDDDRDRRRDDULLDDRRL'
  },
  {
    id: 182, w: 13, n: 0,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_..##',
        '#....#',
        '##AB.#',
        '#P..##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##=##',
        '#####',
        '#####'
      ], terrain: [
        '..v..',
        '.....',
        '.....',
        '.....',
        '.....'
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
    sol: 'RRURULDDLURUULDDDDD'
  },
  {
    id: 183, w: 13, n: 1,
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '#...####',
        '#b....##',
        '#.#.A.##',
        '#._..###',
        '#.##..P#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#=###',
        '#.#..',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '....<',
        '.....',
        '.....'
      ] }
    },
    sol: 'LLUURULLULLDDURURDDRDLLLDLLUU'
  },
  {
    id: 184, w: 13, n: 2,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##_####',
        '##..P.#',
        '#..BA.#',
        '####..#',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###C#',
        '....#',
        '#...#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#######',
        '#######',
        '######.',
        '#######',
        '#######',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '......<',
        '.......',
        '.......',
        '.......'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '#####',
        '##=##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.....',
        '..^..'
      ] }
    },
    sol: 'LLDRRDRULURRDRRULLLLLDLURRRRRRUU'
  },
  {
    id: 185, w: 13, n: 3,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.##.##',
        '#..._##',
        '#.A#.##',
        '##...##',
        '###P###',
        '#######'
      ], terrain: [
        '.......',
        '.^.....',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '#######',
        '#.#....',
        '#.B=.##',
        '##...##',
        '###.###'
      ], terrain: [
        '...v...',
        '.......',
        '.......',
        '......>',
        '.......',
        '.......',
        '...^...'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '..###',
        '#..##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '<....',
        '.....',
        '..^..'
      ] }
    },
    sol: 'ULUUULUULULLRRDRULURRRRLDLUUUU'
  },
  {
    id: 186, w: 13, n: 4,
    idea: {"en":"The pink box has to go inside the main room","ar":"الصندوق الزهري لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.._A##',
        '#...P.#',
        '#=.#..#',
        '####.B#',
        '####..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.C..#',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '>....',
        '.....',
        '..v..'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#######',
        '#######',
        '#######',
        '#######',
        '#######',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '####.',
        '#####',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.....',
        '..^..'
      ] }
    },
    sol: 'LURRDRRUULDDDDRDDLURULLULLDDRULURDDL'
  },
  {
    id: 187, w: 13, n: 5,
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#._bA#',
        '#.P#.#',
        '#.B..#',
        '###..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '...####',
        '#.....#',
        '#...C.#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '<......',
        '.......',
        '.......',
        '.......'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '#######',
        '#######',
        '#######',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##.##',
        '##.##',
        '##.=#',
        '#####'
      ], terrain: [
        '..v..',
        '.....',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'LDRRDRUUUURULLDLURULLRRDRRRDDDDR'
  },
  {
    id: 188, w: 13, n: 6,
    idea: {"en":"The purple box has to go inside the green box","ar":"الصندوق البنفسجي لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.P.B.#',
        '#_#b#.#',
        '#.#.#A#',
        '#.....#',
        '#..####',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##.=###',
        '##.####',
        '......#',
        '#..#.##',
        '###..##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '>......',
        '.......',
        '.......',
        '.......'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '####.',
        '#####',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '....<',
        '.....',
        '.....'
      ] }
    },
    sol: 'LDDDRRRRUUDDLLLLUUURRDDUURRRRRRDDLDDDDLLLDLUUDRRUUURRRRUUR'
  },
  {
    id: 189, w: 13, n: 7,
    idea: {"en":"The way forward starts inside the pink box","ar":"الطريق بيبلش من جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.P..A#',
        '#b.B###',
        '#.#.b_#',
        '#....##',
        '#_##_##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..>....',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##..###',
        '...C###',
        '##...##',
        '##...##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '>......',
        '.......',
        '.......',
        '.......'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '#######',
        '#######',
        '#######',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '...^...'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '#####',
        '#=###',
        '#..##',
        '##.##'
      ], terrain: [
        '..v..',
        '.....',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'RDDUULLDDDRRURDULUURRRRDRUUULU'
  },
  {
    id: 190, w: 13, n: 8,
    idea: {"en":"The way forward starts inside the purple box","ar":"الطريق بيبلش من جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..####',
        '#_.b.##',
        '#....##',
        '##A.._#',
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
    sol: 'UURULDLLUURDLDRRURDLDRLDLUURULLLLLDDDDL'
  },
  {
    id: 191, w: 13, n: 9,
    idea: {"en":"The way forward starts inside the purple box","ar":"الطريق بيبلش من جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '#P.bA.#',
        '#_#.#.#',
        '#.....#',
        '#...###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#####..',
        '####B.#',
        '####..#',
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
        '#####',
        '#####',
        '#####',
        '##=##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.....',
        '..^..'
      ] }
    },
    sol: 'DDRRRRUULULDRRDDLLLLUURRLLDDRRUDRRUULULDDURRDDLLLDLURRUULLLDDLUU'
  },
  {
    id: 192, w: 13, n: 10,
    idea: {"en":"The pink box has to go inside the purple box","ar":"الصندوق الزهري لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#....##',
        '#A.#B##',
        '#..#..#',
        '##P...#',
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
    sol: 'UUURRDDRDLLDLUUUDDRRUUULLDDLUUULURDRUUULLLULDDDL'
  },
  {
    id: 193, w: 13, n: 11,
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.._##',
        '#b_b.#',
        '#.A#.#',
        '#P...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '#=...',
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
    sol: 'RUDRRUULLLRRULLDRDDLURUURDDDRRRLLLLDDUURRRULLDRURDDDRRRDDLLUULURDDDLURDRRUULLLLL'
  }
  ];
});
