/* Cubes Paradox daily puzzles (written by tools/curate.js — edit there or here, then run `npm run solve`).
   Symbols: # wall  . floor  P player  b box  t teal box  u purple box  _ box goal  = player goal
   Any other capital letter is a box that holds the room with that key. Rooms must be square.
   terrain (optional, same size): ~ ice  o plate  | gate  ^ > v < one-way arrows  O hole  x crumbling floor
   sol = a known solution (U R D L), used for hints; idea = the first hint step. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.DAILY = factory();
})(this, function () {
  'use strict';
  return [
  {
    id: 'd84',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.A..#',
        '##.##.#',
        '##..#.#',
        '##Pb=.#',
        '####..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#B#####',
        '#.#####',
        '#.#####',
        '#....##',
        '#....##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#####C#',
        '#.....#',
        '..#.#..',
        '#.#...#',
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
    sol: 'UUURRLLDDDRRDRUUUUURULLDLUUUUUUUDDLLUUURRRLDDRRUUUUUDDDDDLLDDDDDRRDDDDDL'
  },
  {
    id: 'd31',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##=.P#',
        '##b.##',
        '#..###',
        '#..A##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#B#####',
        '#.#####',
        '....###',
        '#.#.###',
        '#...###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '####.C#',
        '##....#',
        '##....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '....#',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'LLDDLDRRRDDRRUULRDDLLUUUUULURRDRUUDLURRRRDLDDDLLDDDLLUUU'
  },
  {
    id: 'd4',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#..##',
        '#.b##',
        '#P.A#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####..#',
        '......#',
        '##....#',
        '#.B.###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '##..###',
        '##.####',
        '...####',
        '##..###',
        '#C..###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#_###',
        '.....',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'RRRRDDDLDDLLLRRRRDRDDDUULULLLLUURDLDRRRRRRRRLLURDDDLDDDRDLLLLDLU'
  },
  {
    id: 'd83',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..__#',
        '#.b.b.#',
        '#PA.###',
        '#######',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '.....',
        '#=###',
        '#####'
      ] }
    },
    sol: 'URURRRDLULLDLDRRRRUUDDLLLUURDLDRRRUUULURDDDDLD'
  },
  {
    id: 'd82',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##...##',
        '#P_.A.#',
        '#..b..#',
        '#..####',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '.##.._#',
        '##...##',
        '##...##',
        '###.###'
      ] }
    },
    sol: 'RURRDRDLULLLDDRULURURDDDDDRDDLLURDRULURLUUUURDLULLDDRU'
  },
  {
    id: 'd10',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '######',
        '#=####',
        '#Pb.A#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '###.B.#',
        '###..##',
        '....###',
        '#.#.###',
        '#...###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#C#####',
        '#.#####',
        '#.###..',
        '#.....#',
        '#...###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#_###',
        '#....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RRRRDDRRUUURUUURRURRLDLDDDLLUURLDDRRUUUUUDDRULLDLLLDLUUUUURULDLURDDDDDRRDDDDLLLLLLU'
  },
  {
    id: 'd6',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#Ab.#',
        '###P#',
        '#####',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####..#',
        '####...',
        '###..##',
        '###..B#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '##...##',
        '...#.##',
        '#....##',
        '###..C#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##..#',
        '.....',
        '#.._#',
        '##.##'
      ] }
    },
    sol: 'ULLLULDDLDRRRDRRRUULLDLDRRLUURRDDLDRRRRURD'
  },
  {
    id: 'd30',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##=..#',
        '###Pb#',
        '##...#',
        '#.A..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#B...##',
        '####.##',
        '..##...',
        '#.###.#',
        '#.....#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '.......',
        '#C###.#',
        '#.....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '##_##',
        '##...',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DLDDRDDRDDLLLLUULLRRUUURDDDULDRRDDRRRRUULUULLLLDDLLLLUDRRRRUULLLLLLDLURRRRRRRRRRUUUULL'
  },
  {
    id: 'd59',
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '##A.bP#',
        '##.#.##',
        '####.##',
        '#=...##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '..|.|..',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####..#',
        '##.B...',
        '##.#..#',
        '##....#',
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
    sol: 'LLLLULDRDDLLLUURRRDDLUDLLUURRRRRRRRDRRUULDRDLULLLDDDLLL'
  },
  {
    id: 'd12',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####P#',
        '###.A#',
        '#....#',
        '#.b..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '#...###',
        '.B#####',
        '#.#####',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###..##',
        '##...##',
        '...#.##',
        '#.##.##',
        '#....C#',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '#..##',
        '.....',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'DDDDDLLDLLULLDRRRLURDDDLLDDDRDDDDLLLUURURURDDDUULLDLDDRRRRRURDRDL'
  },
  {
    id: 'd55',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#######',
        '####..#',
        '#A....#',
        '##_P..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.B.###',
        '#..####',
        '#......',
        '#######',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '##C####',
        '#..#..#',
        '.......',
        '###...#',
        '###.###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '#..##',
        '..b##',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'ULLLLLLUUUUULUUULUURDDDDLDRRDRRUULDRDLULDDDDLDRRRRRRRDRRUULDRDLL'
  },
  {
    id: 'd40',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.####',
        '#Ab.##',
        '#..=##',
        '#P####',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##B...#',
        '####..#',
        '####...',
        '####.##',
        '###..##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '#......',
        '#C###.#',
        '#.....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##_##',
        '##...',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'URRULLLRRDLUUURUUURULLLLDDLLLLUDRRRRUULLLLLRRRRRDDLLLLUUUURRRRRRRRRDDDDLDDRRD'
  },
  {
    id: 'd73',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '#....##',
        '#.bA.##',
        '##.##P#',
        '##....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.#B#',
        '###.#.#',
        '.......',
        '###.#.#',
        '###...#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#C...##',
        '###..##',
        '###.###',
        '###.###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '##..#',
        '##...',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'DLLLUURLLURRURDDDDUUULDRRRRRLDDRRUUUUUUURULLLLULDRDL'
  },
  {
    id: 'd16',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###..#',
        '###b.#',
        '##.P.#',
        '#.A..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '#.#.###',
        '.....##',
        '#....##',
        '#..B###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#..####',
        '...####',
        '##.####',
        '##C####',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##..#',
        '..._#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LDDDDLLLLRURRUULDDDDDDRDLULDLDRRRURDDDDRDDLLUR'
  },
  {
    id: 'd23',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###P##',
        '###b_#',
        '#_...#',
        '##Ab.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '.....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DRDDLLLDLLURUUURDLLDLUUUDDRRRRULL'
  },
  {
    id: 'd85',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.b._#',
        '#.P#A##',
        '#.##b_#',
        '#.#.._#',
        '#...###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'URLDLDDDRRURUUUDDDLDLLUUURURRDULLDLDDDRRURRULLDLLURRRLDLDDLDLLUUURURRDDUULLDLDDDRRUR'
  },
  {
    id: 'd47',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#._###',
        '#P_.##',
        '##bb.#',
        '#.A..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#=....#',
        '.......',
        '###.#.#',
        '#.....#',
        '#######'
      ] }
    },
    sol: 'RDDDRDDLUUUUDDRRDDRRRULDLUDLLULLLL'
  },
  {
    id: 'd38',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##_..#',
        '##..A#',
        '#..b.#',
        '#P#._#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#..####',
        '#....##',
        '...#.##',
        '##...##',
        '#######',
        '#######'
      ] }
    },
    sol: 'URUURRDLLDRDRULURRURRRDDLLUDRRUULLULDRDLLLURDDLLU'
  },
  {
    id: 'd36',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##PA##',
        '##..##',
        '#.b.##',
        '#...##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#B#####',
        '#.#####',
        '#.#####',
        '#....##',
        '#....##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '..#####',
        '#C...##',
        '#.#..##',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '#..##',
        '.....',
        '#.._#',
        '##.##'
      ] }
    },
    sol: 'DRDDLLURDRUUUURULLDLUUUUURULLLLDLLUURDLDR'
  },
  {
    id: 'd24',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###_.#',
        '#Pb..#',
        '###b.#',
        '##_A.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '..=.#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RRURDLDDDRDDLUUUDDLLLRUURDDDRDLLLLRRR'
  },
  {
    id: 'd2',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '##.P#',
        '#.b##',
        '#..A#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#####B#',
        '#.....#',
        '.......',
        '#..####',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.C.#',
        '####.##',
        '####.##',
        '##...##',
        '##...##',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '..._.',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'LDLDRRRDRULURRRDRUUULURDRUUUUULUR'
  },
  {
    id: 'd28',
    idea: {"en":"The green box has to go inside the main room","ar":"الصندوق الأخضر لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.A.#',
        '##._.#',
        '#...##',
        '#.#.P#',
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
        '#....',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'LUUUURULLLRRDDDRULLLRRDLUULUURDDDDDDDLLLRRRRDDDULUUUUU'
  },
  {
    id: 'd62',
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#P#####',
        '#A._._#',
        '#.b.b.#',
        '#..####',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##...',
        '##=##',
        '#####'
      ] }
    },
    sol: 'DRRRRDLULLLDDDDRRRULURRRDLULLDDDDRRRULURDDLLLD'
  },
  {
    id: 'd41',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.#P##',
        '#A...#',
        '#.##.#',
        '#..b.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#B#.###',
        '#.#.###',
        '#.#....',
        '#....##',
        '#..####',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '####.##',
        '####C##',
        '####.##',
        '##...##',
        '##...##',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#_###',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DLLLLLUUUUDDURRRDDLLLLLRRRRRUULLLDDDDDRDLLDLUUUUULURDRUUUUURULDLU'
  },
  {
    id: 'd49',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#A####',
        '#.b.##',
        '#P#.##',
        '#...=#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#####.#',
        '#####B#',
        '#####..',
        '##....#',
        '##....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#####.#',
        '#####C#',
        '####...',
        '##....#',
        '##....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '##..#',
        '##...',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'DRRUULRDDLLUUUULURRDRUUUUULURRDRUUUUURUULDRDLDDDDDLLDDDDDLLDDRRDDR'
  },
  {
    id: 'd32',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##A###',
        '##...#',
        '##.b.#',
        '###P##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#B#####',
        '#.#####',
        '..#...#',
        '#.....#',
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
        '#_###',
        '#....',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'URULDLUUULURURRDLLLDLUUUUURUULDRDLLLLLDLU'
  },
  {
    id: 'd27',
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##...#',
        '##b#_#',
        '##...#',
        '#AP..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '#.B..',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#..##',
        '..###',
        '#####',
        '#####'
      ] }
    },
    sol: 'LLDLLURRRRURRDLURUULLDDRDLLLDLLURRRRRRRURUU'
  },
  {
    id: 'd76',
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###.B.#',
        '####.A#',
        '####..#',
        '###Pb.#',
        '###..##',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.....>.',
        '.....v.',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '#.._#',
        '#..##',
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
    sol: 'DRUUUUURUULLDRLLLRDDRUUUULURDDRUUULUR'
  },
  {
    id: 'd20',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###A##',
        '###.##',
        '###bP#',
        '###..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###..B#',
        '###..##',
        '###..##',
        '##...##',
        '##...##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '####..#',
        '.......',
        '###.#.#',
        '###.C.#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##._#',
        '#...#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DLUUUULURDRUUULURRRRRDDRLUURURDDDDRDDLLURDRU'
  },
  {
    id: 'd87',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##=####',
        '##.####',
        '##.#A##',
        '#.b.P##',
        '#....##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#####B#',
        '##....#',
        '##....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '##.####',
        '##C..##',
        '##...##',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##.##',
        '##_#.',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DLLLURRDRUUULURRDRUUULUDRRULDLUUUDDRDDDDLLDDLLUUU'
  },
  {
    id: 'd71',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '###.A##',
        '##._..#',
        '#P..b.#',
        '####.##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '###..#.',
        '###..=#',
        '###..##',
        '###.###'
      ] }
    },
    sol: 'RURRRDLULUURDDDULLDRURDDDDDRDDLUUUUUURULDDDDDRDR'
  },
  {
    id: 'd66',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####.##',
        '##.b.##',
        '##.A.P#',
        '##.#.##',
        '##._._#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###..##',
        '.......',
        '####..#',
        '####..#',
        '#######'
      ] }
    },
    sol: 'LDDLLUURLDDRRUULLURRRRRUUUUDDDULLDDRRRRRRURDRDDLURULLLLLL'
  },
  {
    id: 'd81',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##...##',
        '##.bA##',
        '##P#..#',
        '##....#',
        '##.####',
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
        '#####',
        '#####',
        '###..',
        '#_.=#',
        '##.##'
      ] }
    },
    sol: 'UURRDDRDLLLLDLDDUUUUURURRRDLRDDLLUUUDRULLDLR'
  },
  {
    id: 'd48',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#._.##',
        '#bA._#',
        '#_.bP#',
        '###..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '..=....',
        '###.#.#',
        '###...#',
        '#######'
      ] }
    },
    sol: 'DLURULLLRRULLDRRRRRRDDRRUULLLLLLDLURRRR'
  },
  {
    id: 'd11',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '#A.P.#',
        '#.b..#',
        '###..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####..#',
        '####...',
        '####..#',
        '#B....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '#......',
        '#C###.#',
        '#.....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '##_..',
        '#####',
        '#####'
      ] }
    },
    sol: 'LLLDDLLDDRURRDDLURULLLLULDDRDLLLLLDDLLLLUDRRRRUULLLLL'
  },
  {
    id: 'd79',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '##A.###',
        '#...###',
        '#_#.b.#',
        '#P....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.#..#',
        '##=.#',
        '##.##'
      ] }
    },
    sol: 'UURRUULDRDDDRRULDLUUDDLLUURUURDDDRDLLRUULLDDDRDDLUUUDDD'
  },
  {
    id: 'd50',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#A####',
        '#b####',
        '#.####',
        '#P=###',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '###.B.#',
        '####.##',
        '####.##',
        '##...##',
        '##...##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '#.##...',
        '#C....#',
        '#.#..##',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '##..#',
        '#....',
        '#._.#',
        '##.##'
      ] }
    },
    sol: 'UUUULURDRUUUUURULLLLULDRRRRDDDDDDLDDDDR'
  },
  {
    id: 'd42',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..#_#',
        '#.A..#',
        '#..#.#',
        '#.P_.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '..##...',
        '#..b..#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'ULUURDLDRRDRRDRRUULDRDLULDDUULLULLDRULURRRRDRRDDDU'
  },
  {
    id: 'd58',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '###..##',
        '#.=b.##',
        '#.A..##',
        '##P.._#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##_##',
        '##.##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'URRUULDRDLDLUUUUDDDLURRURDDLDRUULL'
  },
  {
    id: 'd52',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#Ab.P#',
        '###.##',
        '###=##',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#####B#',
        '####..#',
        '####...',
        '###...#',
        '###...#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '##.C.##',
        '###.###',
        '###.###',
        '###.###',
        '###.###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '###_#',
        '....#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LLLLULDRDDLLURDRUUUUUUUUUULURDRUDLDDDDDDDDRRRDD'
  },
  {
    id: 'd44',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...##',
        '#bA._#',
        '#.#bP#',
        '#_.._#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '.....',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DLURULLLULDRRRULLDDURRRRRDDD'
  },
  {
    id: 'd3',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '##_##',
        '##PA#',
        '##..#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#####.#',
        '####.B#',
        '...#..#',
        '#.....#',
        '#...#.#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '###.###',
        '....###',
        '#..####',
        '#C#####',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##..#',
        '##b.#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RRRDRRUURRRRUUUUDDLDRRDDDRDDLUUUURULLLLLDLURULLRRDRDDDLU'
  },
  {
    id: 'd34',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##P.##',
        '###b##',
        '##..##',
        '##..A#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '###..##',
        '.....##',
        '#.B#.##',
        '#....##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '###..##',
        '.....##',
        '####.##',
        '####C##',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##..#',
        '..._.',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RDDLDRRRRDLDRRLUURURDDDDDUUUULLDDRRRRRURDDDDRDDLLUR'
  },
  {
    id: 'd54',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_._##',
        '#Ab..#',
        '#P_b.#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '####.=#',
        '####...',
        '###...#',
        '###...#',
        '#######'
      ] }
    },
    sol: 'UDRURRDLUULLLULDRDDLLURDRULURRRLLU'
  },
  {
    id: 'd46',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.AP##',
        '#.#=##',
        '#b#.##',
        '#...##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '..###..',
        '#.B...#',
        '#...###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '####..#',
        '##....#',
        '##..#C#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##.##',
        '##.##',
        '##_##',
        '#####'
      ] }
    },
    sol: 'LRDDDLLUUUUDDDDRRUUULLLDLLDLLUDRRULDLUUULURRURDDDDUUULLDDDRRRRURRRD'
  },
  {
    id: 'd9',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '######',
        '#....#',
        '#PAb.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '###..##',
        '###....',
        '###...#',
        '###..B#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '###..C#',
        '#....##',
        '...#...',
        '##.##.#',
        '##....#',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '##..#',
        '....#',
        '###_#',
        '#####'
      ] }
    },
    sol: 'URRRDLLLLDLLUURDDLDRRRURRRDRDDLLLUULURRLDDDRRRUULULURRRRURD'
  },
  {
    id: 'd77',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###P.##',
        '##..A##',
        '##b#..#',
        '##....#',
        '#...###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##_...#',
        '.#.#=..',
        '##.#.##',
        '##...##',
        '###.###'
      ] }
    },
    sol: 'RDDRDLLRUULLDURRDDLDLURRUULLDDRDLLLULLLDDDRRUURULLRD'
  },
  {
    id: 'd56',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#######',
        '###.P.#',
        '#.bA#.#',
        '#.._..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####..#',
        '.......',
        '####..#',
        '####.=#',
        '#######'
      ] }
    },
    sol: 'RDDLLLLURRRRRRURDLLLLLLDRRRUULLDURRDDLLLLLLDDRULURRRLLDD'
  },
  {
    id: 'd18',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###..#',
        '#PbAb#',
        '#_...#',
        '##_###',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '..=.#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RRRDRRULUUUDDDDLLLRUURDDDUULDRRDRRULLLLULDRRRR'
  },
  {
    id: 'd63',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#_##P.#',
        '#...b.#',
        '#A_.###',
        '#.#####',
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
    id: 'd80',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '##A..##',
        '##..b##',
        '###...#',
        '##P...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '#######',
        '####.=#',
        '##....#',
        '#_....#',
        '###.###'
      ] }
    },
    sol: 'RUULURRDLDDRRULDLUURULDLUUULURDRRUULDRDLLLURRUR'
  },
  {
    id: 'd68',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####..#',
        '####A.#',
        '#...b.#',
        '#._..P#',
        '##..###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '#.._.',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'UUULDRDLLRRDLLDLUUULURDDDLURRDRRUULDRDLL'
  },
  {
    id: 'd86',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.bP.#',
        '##.#.A#',
        '##.#..#',
        '##.#.##',
        '##...##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '####..#',
        '.......',
        '#.....#',
        '#B#####',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#C#.###',
        '#.#.###',
        '......#',
        '#.#.#.#',
        '#.....#',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '#_...',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DDRUDLDDLLUUUURRRRRRDRRUULDRDLLLULDDDDDRRDDLLUDRRUULLLRDDLLUUUUURUL'
  },
  {
    id: 'd51',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#A#P##',
        '#.#..#',
        '#.=b.#',
        '#..###',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#..B..#',
        '####..#',
        '####...',
        '##...##',
        '##...##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '####..#',
        '####...',
        '###..##',
        '###..C#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##..#',
        '.....',
        '###_#',
        '#####'
      ] }
    },
    sol: 'DRDLLDLUUUULURDRUUURULLLLLULDDLDRRRRURDLLLLUURRRRRDDDDLDDDR'
  },
  {
    id: 'd8',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '######',
        '######',
        '#Pb=A#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.B.###',
        '##.####',
        '...####',
        '#..####',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '###....',
        '###..##',
        '#C...##',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##..#',
        '.....',
        '#.._#',
        '##.##'
      ] }
    },
    sol: 'RRRRDRUUUURUULDRDLLLLULDLDRURRRRDDDLLL'
  },
  {
    id: 'd70',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####A##',
        '####.##',
        '####.##',
        '##Pb.##',
        '###..##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '###....',
        '###.#.#',
        '#B....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '###..##',
        '##.....',
        '###...#',
        '#####C#',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##.##',
        '...##',
        '#.._#',
        '##.##'
      ] }
    },
    sol: 'RDRUUUUURRUULLDURRDDLLLLLDLLUURDLDRURDDDDLDR'
  },
  {
    id: 'd57',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#####P#',
        '####A.#',
        '#=....#',
        '####_##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '####..#',
        '###..B#',
        '###...#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '##.C.##',
        '###.###',
        '....###',
        '##...##',
        '##...##',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##..#',
        '..b.#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DDLUUURURDLDRRRRUUURUULDDDDDLDDRRULDLURULLLLULDDDLLL'
  },
  {
    id: 'd35',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##P.A#',
        '###..#',
        '###.b#',
        '###..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#####B#',
        '###....',
        '##....#',
        '##...##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '###..##',
        '####...',
        '##....#',
        '##..C.#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##.##',
        '##._.',
        '#####',
        '##.##'
      ] }
    },
    sol: 'RDDDRUUUULURDRURUUUURRDLLDDDLLURDRUUULLLUUURDRRUULDRDLLL'
  },
  {
    id: 'd15',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###..#',
        '###Ab#',
        '###b.#',
        '#_P._#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####=.#',
        '...##..',
        '#.....#',
        '#....##',
        '###.###'
      ] }
    },
    sol: 'RUUUURULDLLUURDLDRURDDDDRDLLRUUUUURRURRDDUULLUL'
  },
  {
    id: 'd5',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#..##',
        '#b.P#',
        '#A=##',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '###..##',
        '#B...##',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '####..#',
        '####...',
        '##....#',
        '##.C..#',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##..#',
        '#.._#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LULDDDDDRDLLLLDLLLDRURRUULDDDDRDDLLURUUUURRRRUUUUURD'
  },
  {
    id: 'd64',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#####.#',
        '##Pb..#',
        '#._##A#',
        '#b....#',
        '#_..###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###..##',
        '...=.##',
        '###...#',
        '###...#',
        '#######'
      ] }
    },
    sol: 'DLDRRRRUDLLLUURRRRRRUUUUDDDDDRDLDDRRULDLURULLLLLLDLURRRRRR'
  },
  {
    id: 'd7',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#P#A#',
        '#=#b#',
        '#...#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#..#...',
        '#B....#',
        '###..##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '##..###',
        '##.####',
        '##.##..',
        '##..C.#',
        '###...#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##..#',
        '##...',
        '##._#',
        '##.##'
      ] }
    },
    sol: 'DDRRUUURULLULDDLDDDRRDRULLLUUURUURDLLRRULDDLDDDRRRUUUURDRRRRDDDDLLU'
  },
  {
    id: 'd29',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.P##',
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
        '##....#',
        '##.b..#',
        '###.###'
      ] }
    },
    sol: 'DRDLDLUULURRDRULURRRDRUDLLLURRDL'
  },
  {
    id: 'd72',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '###.bP#',
        '#.#..##',
        '#A...##',
        '#.#####',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##...##',
        '##.#...',
        '##.#..#',
        '##...B#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#######',
        '####..#',
        '......#',
        '#.##..#',
        '#..C..#',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##..#',
        '.##..',
        '###_#',
        '#####'
      ] }
    },
    sol: 'LULDDRDLLLLDLDRRRRRDDLLRRUULLLLLLLUUURRDDUULLDDDRRRRRRLLDDDRDRRRRURUULDDRDLLLLRRRUULLLDDDRD'
  },
  {
    id: 'd19',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###.P#',
        '#.bA.#',
        '#...b#',
        '#_##_#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#####=#',
        '###...#',
        '....#..',
        '##....#',
        '##..###',
        '#######'
      ] }
    },
    sol: 'DDLLLURRURDLDRRRDRRRUULLDURRDDLLDLURULLLLLULDRRRRRRURRU'
  },
  {
    id: 'd43',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...##',
        '#..._#',
        '##Ab.#',
        '#P..##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '.#...',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'RRURULULLDRURDRDLLLULDRDLURRRDLURUULLDRR'
  },
  {
    id: 'd26',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##...#',
        '##.#b#',
        '##.#.#',
        '##PA.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#...###',
        '#B#.###',
        '..#..##',
        '#.#..##',
        '#....##',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###..C#',
        '#####.#',
        '####...',
        '####..#',
        '####..#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '.._##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'RLUUURRDDDDLLDDDUUURRDDDRDLLLRRUUUULLDDDDDRRRRDDDDLDDRUUUUU'
  },
  {
    id: 'd33',
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##P###',
        '##.._#',
        '##Ab.#',
        '#B..##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##...',
        '##=##',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '.....',
        '#.._#',
        '##.##'
      ] }
    },
    sol: 'DDDDDRRRULURDDLLLULDLDRURDDDD'
  },
  {
    id: 'd14',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####P#',
        '#A...#',
        '###b.#',
        '###..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##.B.##',
        '###.###',
        '###....',
        '###.#.#',
        '###...#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#####C#',
        '##.....',
        '##..#.#',
        '###...#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '##..#',
        '##...',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'DDDLURULLLLLRDDLLUUUUUULURRLDDRRUUUURUULDRDL'
  },
  {
    id: 'd74',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '#...A##',
        '##_._.#',
        '###.P.#',
        '###..##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '..b.#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'ULUURDDRDLDLUURULDLUURUULDDDUULLLRRURD'
  },
  {
    id: 'd88',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##A..##',
        '##.#.##',
        '##.#b##',
        '##....#',
        '##...P#',
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
    id: 'd1',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#####',
        '##.P#',
        '#_.A#',
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
    id: 'd22',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###P##',
        '###.=#',
        '#...##',
        '#.b.A#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#B#####',
        '#.#####',
        '....###',
        '#.#.###',
        '#...###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '##...##',
        '##...##',
        '###..##',
        '###..C#',
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
    sol: 'DDLLDRRRRDDRRUULRDDLLUUUUUURUULLDRURDDLDRRRDRULLLLDDDLLUUR'
  },
  {
    id: 'd75',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '#P.b.##',
        '#._=..#',
        '###A..#',
        '###..##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '####..#',
        '####...',
        '####..#',
        '#_....#',
        '#######'
      ] }
    },
    sol: 'RRURDDRDLLLULDDRDLLLRRUURRRDLURUL'
  },
  {
    id: 'd61',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#.....#',
        '#.b..A#',
        '####..#',
        '####P##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####..#',
        '.......',
        '###...#',
        '#B...##',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '####..#',
        '####...',
        '##...##',
        '#.C.###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##_##',
        '...#.',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'UUULLLDRRRRRRRDDLLLLDLLDDDLLLRRRRDDDULURRRRUUURRRRURRUULDRDLULDRDLLLLULDD'
  },
  {
    id: 'd21',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###A##',
        '###b##',
        '###.##',
        '###=P#',
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
    id: 'd60',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '##P####',
        '##.#..#',
        '#A....#',
        '###_..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#.#####',
        '#.#####',
        '.......',
        '#B.####',
        '#.#####',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '###.###',
        '####...',
        '####..#',
        '###..C#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##.##',
        '.b.##',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'DDLLLLLDLLDLDLDDURULLLDLDRRDRUUUULURRRRRRRRRRDRRUULDRDL'
  },
  {
    id: 'd90',
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##P.._#',
        '##A.b##',
        '##.b.##',
        '#_..###',
        '###.###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '...##',
        '##=##',
        '#####'
      ] }
    },
    sol: 'DDDDDLLLRRRRUUURULURLLDDRDLRDDDD'
  },
  {
    id: 'd25',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..##',
        '#.b.##',
        '#P..A#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#####B#',
        '#####.#',
        '.......',
        '####..#',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###..##',
        '###C.##',
        '###..##',
        '###.###',
        '###.###',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '#####',
        '..._.',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'URURDLDRRRRRRDRUUUUUUUUUULUR'
  },
  {
    id: 'd17',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###..#',
        '##P.b#',
        '###..#',
        '###.A#',
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
    id: 'd78',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '##.bb.#',
        '##.P#_#',
        '##_.#.#',
        '##.A..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '..#..',
        '#..=#',
        '##.##'
      ] }
    },
    sol: 'LUURDLDDRDDLDDRRURRRUUULLDDLDRUUUULDDRDDRRRURUUDDLDDRR'
  },
  {
    id: 'd53',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P####',
        '#_####',
        '#.####',
        '#A####',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#B..###',
        '##..###',
        '#######',
        '#######',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#.C.###',
        '#.#.###',
        '..#....',
        '#....##',
        '###..##',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '#..##',
        '.b.##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DDDDLLLLDLLLUUURRRURDDDDDUUUULLLLDDDRRDRULURRRRDRUUU'
  },
  {
    id: 'd69',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####..#',
        '###..A#',
        '###P#.#',
        '###.b.#',
        '#####.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.#_#',
        '###.#.#',
        '###....',
        '##....#',
        '##.B..#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '.=##.',
        '#####',
        '#####'
      ] }
    },
    sol: 'URURDDDDDDDDLDRRUULUUUUUULLDDRLUURRDDDDDDRDDLLURDRULURDRUUDDLDRR'
  },
  {
    id: 'd45',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...A#',
        '#.b..#',
        '###..#',
        '####P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '###...#',
        '..B....',
        '#.#####',
        '#...###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#####C#',
        '#####.#',
        '.......',
        '####..#',
        '#######',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##..#',
        '##...',
        '#_..#',
        '##.##'
      ] }
    },
    sol: 'UULULLDRURRRDDRRDDDLULURRRRRRRRRRRRDRUUUURUULDRDL'
  },
  {
    id: 'd67',
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####..#',
        '####.b#',
        '#.....#',
        '#.b#__#',
        '#..PA.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '###.#',
        '###=#',
        '#####'
      ] }
    },
    sol: 'LLUURRRRDDLUUUURDDLDDLLULURRLDDRRUURUULDDLLDLDDRDD'
  },
  {
    id: 'd39',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.####',
        '#A.###',
        '#=..##',
        '#.b.P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###...#',
        '...#...',
        '#.....#',
        '#B#####',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###...#',
        '####..#',
        '####..#',
        '####C.#',
        '####..#',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '#_.##',
        '.....',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LULULLDLLLLDDRRDDDDLUUURULLLLUUUURRRUULUUUDDRRDLLLULDRDLLLULDDDDLDDRRULDLURUUUURRRUULUUU'
  },
  {
    id: 'd13',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####P#',
        '##...#',
        '#.b###',
        '#..A##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.B.###',
        '#..####',
        '...####',
        '#..####',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#######',
        '###....',
        '##....#',
        '##..C##',
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
    sol: 'DLLDLDRRRDRUUUULURURRDLULDLDRRRDRRULDLU'
  },
  {
    id: 'd65',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#####A#',
        '#####.#',
        '####P.#',
        '####.b#',
        '####..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#####.#',
        '####.B#',
        '####...',
        '##....#',
        '##..###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '##..###',
        '.......',
        '##.##.#',
        '##..C.#',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##._#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RUUUURUURRRRRRDDLLRRUULLUUUUDDLDLDDDDLDDRUUUUULURRRRLLURDDDLDDDDRDDLLURDRU'
  },
  {
    id: 'd89',
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##P#=##',
        '#.b..##',
        '#...A##',
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
        '####..#',
        '...#b..',
        '##....#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'DLDRURDRRRDRRRUULDDRDLULDDDLUURDDLDRUUUU'
  },
  {
    id: 'd37',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##_###',
        '##P_.#',
        '#.A.##',
        '###.##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#...###',
        '#.....#',
        '...#..#',
        '##.b.##',
        '###..##',
        '###.###'
      ] }
    },
    sol: 'DDDLDLLLRRRRDRDDDUUURUURULLLULDRDLLRRDRDDDLU'
  }
  ];
});
