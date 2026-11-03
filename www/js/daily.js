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
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###...##',
        '##....A#',
        '##b..###',
        '#P.#b###',
        '#....###',
        '###..###',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_###',
        '...=.',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '..O..',
        '.....',
        '.....'
      ] }
    },
    sol: 'RDRRUULURLLDDLDRRDRUUULURRRRDRRULDLURR'
  },
  {
    id: 'd31',
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
    id: 'd4',
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
    id: 'd83',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###.####',
        '###_..##',
        '##.b.A##',
        '##....=#',
        '####...#',
        '####.#P#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.._#',
        '#..##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'UULLUURDLDDRRULDLUUDLLURDRUUUULURDDDDRULRDDR'
  },
  {
    id: 'd82',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###.####',
        '###..###',
        '###....#',
        '###.#..#',
        '##...b##',
        '#PA...##',
        '########'
      ], terrain: [
        '........',
        '...^....',
        '........',
        '........',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##=####',
        '##..###',
        '##.....',
        '##._#.#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'RURRDLRRUURULLULDDDRDLLLLLRDDLLULUURDULU'
  },
  {
    id: 'd10',
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
  },
  {
    id: 'd6',
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
    id: 'd30',
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
    id: 'd59',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P###_#',
        '#_###_#',
        '#.##..#',
        '#..A..#',
        '#.....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##b##',
        '.b..#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'DDDRRRRRDRRULUUDDLLLDRUUDLLLDLUU'
  },
  {
    id: 'd12',
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
    id: 'd55',
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
    id: 'd40',
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
    id: 'd73',
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '######_#',
        '#####..#',
        '##..#A.#',
        '##.....#',
        '#_Pb##.#',
        '###....#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '.#=..',
        '#####',
        '#####'
      ] }
    },
    sol: 'URRRRDDLLLULURRRLLDDRRRUUUULDRDLLLULDRDLLLL'
  },
  {
    id: 'd16',
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
    id: 'd23',
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
    id: 'd85',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###....#',
        '#.b.##P#',
        '#.#..._#',
        '#.#.A###',
        '#......#',
        '####..##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '...._..',
        '#####.#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'DLLLDDRUUURRUURRLDLUDDLLUUURLDDDRRUURRRUULLLDDDUULLDDDRRRDRUURRUURRLDLUULURRRRRR'
  },
  {
    id: 'd47',
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.#...#',
        '#..B..#',
        '##..A.#',
        '#..#..#',
        '#_b.P.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.=.#',
        '#.#.#',
        '#..##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#....##',
        '##.#..#',
        '...##..',
        '#....##',
        '##.._.#',
        '###.###'
      ] }
    },
    sol: 'LLUUURRLDRDRUUUDLURRRDDRURDD'
  },
  {
    id: 'd38',
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
    id: 'd36',
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
    id: 'd24',
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
    id: 'd2',
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
    id: 'd28',
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
    id: 'd62',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#_#####',
        '#....A#',
        '#.#_b##',
        '#..b.##',
        '###P###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##..###',
        '....###',
        '##...##',
        '##...##',
        '#######'
      ] }
    },
    sol: 'URUDLLLUURRRRRRURDLDDRRULDLURULLLLLLRRDDLLLUU'
  },
  {
    id: 'd41',
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
    id: 'd49',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#...###',
        '#bb.###',
        '#.#.###',
        '#..P..#',
        '#...A.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '###_.##',
        '###..=#',
        '###..##',
        '###.###'
      ], terrain: [
        '.......',
        '...O...',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'RRDLLLURUUULLDURRDLULDDDDDDDRDDLURR'
  },
  {
    id: 'd32',
    idea: {"en":"The purple box has to go inside the green box","ar":"الصندوق البنفسجي لازم يفوت جوّا الصندوق الأخضر"},
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
    id: 'd27',
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
    id: 'd76',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#####B.#',
        '####...#',
        '##.b.#A#',
        '##.....#',
        '####.#.#',
        '####..P#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '..#####',
        '#.#####',
        '#...###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#=.####',
        '##.#..#',
        '##.#...',
        '##...##',
        '####_##',
        '#######'
      ] }
    },
    sol: 'UULLUURRDDLLLLURDRRRUULLDLDRDDRRUDLLUURLDDRRUUUUUULLUULLLULDDLLUUUL'
  },
  {
    id: 'd20',
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
    id: 'd87',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###.._##',
        '##.#...#',
        '##.bA#.#',
        '##.#...#',
        '##.#####',
        '##P=####',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '.......',
        '##..#.#',
        '##..._#',
        '###.###'
      ] }
    },
    sol: 'UUURRRRRDDDDUDRRUULLLDDLLUURRRLDDLLDDUDDRRUULRDDLLUUUULUURDLDRRLUULLLLRDDLLDDDR'
  },
  {
    id: 'd71',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '######.#',
        '#####._#',
        '#.b....#',
        '#.##P..#',
        '#...A.##',
        '####..##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '#.._#',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'RDDLULLLUURRRDRDDLUURRUULDRDLDLUUULURDDDDLLLUURRRRDRU'
  },
  {
    id: 'd66',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '########',
        '##..####',
        '##.Ab..#',
        '##...#.#',
        '#P.#...#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##..._#',
        '##..###',
        '....###',
        '###=###',
        '#######',
        '#######'
      ] }
    },
    sol: 'RUUURDRDLRDRRUULLLULDDDDLDDRULURRLDDD'
  },
  {
    id: 'd81',
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
    id: 'd48',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.#P#_#',
        '#.A.._#',
        '#..b..#',
        '##..###',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '####..#',
        '#=....#',
        '##....#',
        '###.###'
      ] }
    },
    sol: 'DRDLDLULURRRDRUUULURDRRUULDRDLULDDUULL'
  },
  {
    id: 'd11',
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
    id: 'd79',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####..##',
        '##....##',
        '#..bP.##',
        '#A#...##',
        '#..##..#',
        '#..._b.#',
        '########'
      ], terrain: [
        '........',
        '........',
        '..^.....',
        '........',
        '........',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##.##',
        '##_..',
        '#=..#',
        '##.##'
      ], terrain: [
        '.....',
        '..O..',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'DLULLDDUURRRRDDRDLLLLULUURURRURDDDDRDLUUULLLLDDRDLLDLL'
  },
  {
    id: 'd50',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#...#.#',
        '#.....#',
        '#..#.b#',
        '#.AbP.#',
        '#.._._#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.....',
        '#._.#',
        '##.##'
      ] }
    },
    sol: 'UURDDLDLLUULURRLDDRDRUUUDRULLULDDDLDR'
  },
  {
    id: 'd42',
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
    id: 'd58',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#Ab._P#',
        '#...###',
        '##b.#_#',
        '##....#',
        '####..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '#....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LLDDDLURUULLLDLDDRLUULURRRRRDDLDRRDRU'
  },
  {
    id: 'd52',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#....P#',
        '#.b_.##',
        '###A..#',
        '###...#',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '...##',
        '#.._#',
        '##.##'
      ] }
    },
    sol: 'LDDDLURUULLLDRRRRLLURDLDDRRULDLURULULDDDLDRULLLR'
  },
  {
    id: 'd44',
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
    id: 'd3',
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
    id: 'd34',
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
    id: 'd54',
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
    id: 'd46',
    idea: {"en":"Something has to come out of the purple box","ar":"في إشي لازم يطلع من الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##P_###',
        '##..A_#',
        '###..##',
        '###..##',
        '###..##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '#....',
        '#B.##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '..b..',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RDDRUULLDLLURRRLLUUURDDUURRRLDLDDRUULUR'
  },
  {
    id: 'd9',
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
    id: 'd77',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####.###',
        '###._.##',
        '#Pb.A###',
        '####..##',
        '##....##',
        '###..###',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####..#',
        '.......',
        '####..#',
        '###_..#',
        '###.###'
      ] }
    },
    sol: 'RRRRRRLLLLURDDRDLDLUURURUULDDRDLUULLLLLRDRUUU'
  },
  {
    id: 'd56',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.Ab..#',
        '#..._.#',
        '#_.b..#',
        '#P....#',
        '#.....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#.....#',
        '#.....#',
        '.......',
        '#.....#',
        '#.....#',
        '###.###'
      ] }
    },
    sol: 'RRURUULLLLLULDDDDDRR'
  },
  {
    id: 'd18',
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
    id: 'd63',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#_..bP#',
        '#.#...#',
        '#...A.#',
        '#..#.##',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....x..',
        '...x...',
        '..x....',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##..###',
        '##.....',
        '##_####',
        '##..###',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '..x....',
        '.......'
      ] }
    },
    sol: 'DDLLLDLUUUULUURRRRRRDRRULLLLLLLULD'
  },
  {
    id: 'd80',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####.._#',
        '#....###',
        '#.#..###',
        '#.#.####',
        '#=#bA.##',
        '#P...###',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.....',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'RRUUURULDDDDRUUURRRLDLUUUDDDLLUUUURRRRRDDDUUUURRRLLLDDDLLLDDD'
  },
  {
    id: 'd68',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '###...##',
        '#.#.#..#',
        '#..P.A.#',
        '#..b.###',
        '##_.####',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#######',
        '#######',
        '###_###',
        '###.###'
      ] }
    },
    sol: 'UURRDRDLLLRDLDLUUDLURDRURRUULLDDRDLULD'
  },
  {
    id: 'd86',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###..P_#',
        '###_..##',
        '####.###',
        '####.###',
        '##.A.###',
        '###..###',
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
    id: 'd51',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#....##',
        '##.P._#',
        '##.b..#',
        '##.#A.#',
        '#._b..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.....',
        '#.B##',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '#._..',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RRDDDLLRURUULLLDRRDRULURRURDDD'
  },
  {
    id: 'd8',
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
    id: 'd70',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '##..####',
        '##...A.#',
        '#.b#._.#',
        '#.P...##',
        '####..##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '###..##',
        '##..._#',
        '##...##',
        '#######'
      ] }
    },
    sol: 'RRUULLDLDRRRURRULLLULDRRDDDRUURULLLULDDDDDDRDDLLURRULUUUULDRRRDRU'
  },
  {
    id: 'd57',
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
    id: 'd35',
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
    id: 'd15',
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
    id: 'd5',
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
    id: 'd64',
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '########',
        '########',
        '#####..#',
        '#P.AB..#',
        '##.....#',
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
        '##...',
        '##..#',
        '#####'
      ] }
    },
    sol: 'RRDRRRUULDRDLLLURDRRUULDRDLLLLLDLURULLLDL'
  },
  {
    id: 'd7',
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
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
    id: 'd29',
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
    id: 'd72',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '######.#',
        '##.b..A#',
        '##.###.#',
        '#_.....#',
        '####P#.#',
        '######_#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '......#',
        '###.#=#',
        '###...#',
        '#######'
      ] }
    },
    sol: 'ULLUURRRRRRRUUUUDDULLLLDDRRRRRRRDDRRUULLLLLLLLLUURRRRDDDDDDDRRD'
  },
  {
    id: 'd19',
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
    id: 'd43',
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
    id: 'd26',
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
    id: 'd33',
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
    id: 'd14',
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
    id: 'd74',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#####.##',
        '#####A.#',
        '#_##...#',
        '#.##...#',
        '#.._..##',
        '#.P#####',
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
    sol: 'URRUURRULLDLLURUUUDDRDLULDRDLLLLLDLLURRRRDLUU'
  },
  {
    id: 'd88',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###.P###',
        '###..b.#',
        '###.##.#',
        '##.A##.#',
        '##...._#',
        '###..###',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '#_...',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DLDDLDRDRUUURRRLDLUUUDDRRRUUULLLLLRRRULDDDLDRRR'
  },
  {
    id: 'd1',
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
    id: 'd22',
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
    id: 'd75',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '#####..#',
        '###.b.##',
        '#.A.#.##',
        '#.#P#.##',
        '#.....##',
        '####...#',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '.=..#',
        '#._.#',
        '#####'
      ] }
    },
    sol: 'DLLUURRRRUUUDDULLDDRRRDRUUUDDLLUUURRRDRRULUUUDDDUULLDDDRRRLLLUUURRDDDDDDL'
  },
  {
    id: 'd61',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#_#####',
        '#.#_A.#',
        '#....##',
        '#.b#b##',
        '#....P#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.=...',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LLLLUURRURDLLLDDRUDRRUULLDLUUDRRURRRDRRULLLLRR'
  },
  {
    id: 'd21',
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
    id: 'd60',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#P#..##',
        '#.A..##',
        '#..#.##',
        '#_....#',
        '##_=..#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '...b.',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DRRURDDULLDDRDRRULLLLLDLLURRRRRLUURRDDRDLL'
  },
  {
    id: 'd90',
    idea: {"en":"The purple box has to go inside the green box","ar":"الصندوق البنفسجي لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###A.B.#',
        '#......#',
        '#...##_#',
        '##P#####',
        '########',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.C##',
        '.....',
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
    sol: 'UURRRRULLLLRRDLUUUUURUULDDDDDDUURRRDLDLLURRRRURDDDDDDDRRU'
  },
  {
    id: 'd25',
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
    id: 'd17',
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
    id: 'd78',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '####..##',
        '##.#.b##',
        '##....##',
        '#P.A...#',
        '#..#...#',
        '#.._.###',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '###_#',
        '###..',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'RRURDUUURDDDRDLLRULLLDDRRUURULDLUURURRDLLURDRRUULDRDLLULDDLDR'
  },
  {
    id: 'd53',
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#...A.#',
        '#._...#',
        '#._b..#',
        '#...b.#',
        '#...P.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#....##',
        '##...##',
        '#..=...',
        '###...#',
        '#.....#',
        '#######'
      ] }
    },
    sol: 'UULRRULLRRULLLLLLL'
  },
  {
    id: 'd69',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '###.P###',
        '##...._#',
        '##.b.A.#',
        '#=.##..#',
        '########',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###.###',
        '###.###',
        '###_###',
        '#######',
        '#######'
      ] }
    },
    sol: 'DLLDRURRRDDLURULLULDLDRURRRDDLULRRULLULDDDDDUUUULDRRRDRULLLLDL'
  },
  {
    id: 'd45',
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
    id: 'd67',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '#####..#',
        '##.##..#',
        '#.AP...#',
        '#..b..##',
        '#...#_##',
        '########'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##..###',
        '##.....',
        '##_.###',
        '###.###',
        '###.###'
      ] }
    },
    sol: 'RDLDLLUURLDRDRUUUUDDDLURRDRURULLLLULDRRRRRULDDD'
  },
  {
    id: 'd39',
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
    id: 'd13',
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
    id: 'd65',
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '########',
        '########',
        '###..=_#',
        '###P#.##',
        '#..b..##',
        '#.b.._.#',
        '########'
      ] }
    },
    sol: 'URRDDDLLULLDRRURRUULLDURRDDLLDLLURRUURRDDDLLURDRUUDLLLLDRRRULUURR'
  },
  {
    id: 'd89',
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '###.bP##',
        '##..A.##',
        '##.b..##',
        '####.###',
        '###...=#',
        '###.._##',
        '########'
      ], terrain: [
        '........',
        '........',
        '........',
        '........',
        '....|...',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '.....',
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
    sol: 'DDLUUULLLRDRULLLDRUURRRLLDRUURUULDLLLDDDDLDRURR'
  },
  {
    id: 'd37',
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
  }
  ];
});
