/* Cubes Paradox daily puzzles (written by tools/curate.js — edit there or here, then run `npm run solve`).
   Symbols: # wall  . floor  P player  b box  t teal box  u purple box  _ box goal  = player goal
   Any other capital letter is a box that holds the room with that key. Rooms must be square.
   terrain (optional, same size): ~ ice  o plate  | gate  ^ > v < one-way arrows  O hole  x crumbling floor
   sol = a known solution (U R D L), used for hints; idea = the first hint step; d = how hard (1 easy, 2 medium, 3 hard). */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.DAILY = factory();
})(this, function () {
  'use strict';
  return [
  {
    id: 'd1',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '##Pb.##',
        '##.._##',
        '####A##',
        '####.##',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '##...##',
        '#.b.###',
        '#.#.###',
        '#...###',
        '##._.##',
        '#######'
      ] }
    },
    sol: 'URDLDRURDDDDDDDLLUURLDDRRUUUUU'
  },
  {
    id: 'd2',
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###.###',
        '##..#=#',
        '##.A..#',
        '#P....#',
        '#_..###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '...x...',
        '....xx.',
        '....x..',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.##..',
        '##..#',
        '##.##'
      ], terrain: [
        '.....',
        '..xx.',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'RUURLDDRUURURRLLLULUUDDRDLURRRUU'
  },
  {
    id: 'd3',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#....#',
        '#.A=b#',
        '##.P.#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '..._.',
        '#...#',
        '#####'
      ] }
    },
    sol: 'UULLDRURDLDRUURDDDUULDRRRUUUL'
  },
  {
    id: 'd4',
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
    id: 'd5',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#_P###',
        '#.b###',
        '#.A.##',
        '#..=##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '#######',
        '.###...',
        '##...##',
        '##_..##',
        '###.###'
      ] }
    },
    sol: 'LDDDRRULDLUUUUURURRRDLDDRRULDLUUUDRULLLDDLDDRDRD'
  },
  {
    id: 'd6',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P_.##',
        '#.bb##',
        '#_.A.#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#..##',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DDRRLLUURRDULLDDRRRRDRRULLLLLU'
  },
  {
    id: 'd7',
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
    id: 'd8',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.P###',
        '#A.u.#',
        '#.#t.#',
        '#..B.#',
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
        '###.###',
        '###..##',
        '.......',
        '#######',
        '#######',
        '###.###'
      ] }
    },
    sol: 'DLLDLDDDRRRRRRUUUUULLULDDURRRDDDDDLLLLLLLULLDRRRRRRRRRUUUUULDRDDDDLLLLL'
  },
  {
    id: 'd9',
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..#.##',
        '#..#_##',
        '#.A#.##',
        '#Pb..##',
        '#..#.##',
        '#######'
      ], terrain: [
        '.......',
        '....x..',
        '.......',
        '.......',
        '...x...',
        '....x..',
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
    id: 'd10',
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####P#',
        '##...#',
        '#A_b_#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '####..#',
        '###..B.',
        '###...#',
        '#####.#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#.###',
        '...=.',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DLLDLLULDLDRURRRURRDLLLLULDLDRRRDRDDULURRRRRRDRRULLLLRRRR'
  },
  {
    id: 'd11',
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
    id: 'd12',
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
        '.....#.',
        '#...###',
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
    id: 'd13',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##...P#',
        '##.Ab.#',
        '###.#.#',
        '##.._##',
        '#.....#',
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
        '#..=###',
        '##...##',
        '###..##',
        '###..##',
        '###.###'
      ] }
    },
    sol: 'LLDURRDLULDDDLDRURDDDDRDDLUUUUUDD'
  },
  {
    id: 'd14',
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..A.#',
        '#.u_.#',
        '#tb..#',
        '#.P.B#',
        '######'
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
        '#####',
        '.####',
        '#####',
        '#####'
      ] }
    },
    sol: 'LURDRURUULLDDLUDDRR'
  },
  {
    id: 'd15',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#....#',
        '#.#b_#',
        '#Ab..#',
        '#P...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##_##',
        '#=...',
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
    sol: 'RRURUULDULLDDRDRRULLRUULLDDDURDLLLL'
  },
  {
    id: 'd16',
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '#.A._#',
        '#P.#.#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#.#####',
        '#B#####',
        '..###..',
        '#.....#',
        '#.b..##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '##_##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'RUUULLDRULULLDRUURULLDLUULLRRRRUUU'
  },
  {
    id: 'd17',
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
    id: 'd18',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###P.#',
        '#..._#',
        '#.bb.#',
        '##A###',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '..=.#',
        '#.._#',
        '#####'
      ] }
    },
    sol: 'DLDURRDLULDDDLDDRUUUULURRDLDDD'
  },
  {
    id: 'd19',
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
    id: 'd20',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###.##',
        '#.bA##',
        '#P..##',
        '#.=.##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#_..#',
        '.....',
        '#.###',
        '##.##'
      ] }
    },
    sol: 'URRRURUUDLDRRURRDLLLRURUUDULLDRURDDULDRRRRULUULD'
  },
  {
    id: 'd21',
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..#A#',
        '#B...#',
        '#Pu.t#',
        '###..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#######',
        '#######',
        '###.###',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '####.',
        '#####',
        '##.##'
      ] }
    },
    sol: 'URRDDRUULLLDRURRDDLURULLDLU'
  },
  {
    id: 'd22',
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
        '##b.#',
        '._.b.',
        '#.b.#',
        '##.##'
      ] }
    },
    sol: 'ULDDDRRLLLLLDDRRUULLLLDDUURRRRDDLLUUURUL'
  },
  {
    id: 'd23',
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#....#',
        '#_b#_#',
        '#..A.#',
        '#.P..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##=##',
        '##...',
        '#####',
        '##.##'
      ] }
    },
    sol: 'RRULLRRUULLDURRDDDLLLURRDRULLULLLU'
  },
  {
    id: 'd24',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '#######',
        '###..##',
        '...A...',
        '##_#.##',
        '#.V.bP#',
        '###.###'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '.....',
        '#..##',
        '#####'
      ] }
    },
    sol: 'LLLUURURDLLDDLLRRUURURDDDDLDDRURRRLLRUULLDDDLDDRUUU'
  },
  {
    id: 'd25',
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..#.=#',
        '#..##.#',
        '#P.#..#',
        '#A....#',
        '#..#..#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '.......',
        '...O...',
        '..O....',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#.....#',
        '#.....#',
        '#......',
        '#.#.B.#',
        '#.....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '#..b.',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RDLLDLLLULLDRRRRDRULURRRRRURUU'
  },
  {
    id: 'd26',
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...##',
        '#A.P##',
        '#.b..#',
        '##._.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#_b##',
        '#...#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'DDLURUULLDRURDDULLDDLDDRRULDLU'
  },
  {
    id: 'd27',
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '#######',
        '#####_#',
        '##..#.#',
        '#Vb.P.#',
        '#._.b.#',
        '###.###'
      ] }
    },
    sol: 'LULDRDDDRURDURRDLULLDLUDRURRDLRRUU'
  },
  {
    id: 'd28',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.A_.#',
        '##bP_#',
        '##.#.#',
        '##...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '....#',
        '##=.#',
        '##.##'
      ] }
    },
    sol: 'RDDLLUUUURUULDLLLRDRUURUULDDDUULLLDRUU'
  },
  {
    id: 'd29',
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#...###',
        '#..A._#',
        '#.....#',
        '##bP###',
        '##..###',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....x..',
        '....x..',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##.####',
        '##..###',
        '###.#..',
        '###.#.#',
        '##=...#',
        '#######'
      ], terrain: [
        '.......',
        '..x....',
        '.......',
        '.......',
        '.......',
        '.....x.',
        '.......'
      ] }
    },
    sol: 'DLUULUURRDULLDRRRDLLLLDDLLL'
  },
  {
    id: 'd30',
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
    id: 'd31',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...##',
        '#A..##',
        '#_bb.#',
        '#..P.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##_##',
        '#._..',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'LUDRRULULLLDLURRRULDRRDLLL'
  },
  {
    id: 'd32',
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##...#',
        '##.#_#',
        '##b..#',
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
    id: 'd33',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.bA.#',
        '#Pbb..#',
        '###...#',
        '###.###',
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
        '..__.',
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
    sol: 'RRDRULLURRRRDRRULLLLDDRULURRRRDLULLLDRUUDDLLLURRRRLLDDLDDR'
  },
  {
    id: 'd34',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##_P##',
        '#_.b##',
        '#.b.##',
        '##.A.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '##=..',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DDDDRDRRLLLDLUUUURULDDDD'
  },
  {
    id: 'd35',
    idea: {"en":"Something has to stay on the plate while you pass","ar":"لازم إشي يضل عالزر وإنت بتقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P..A#',
        '##..##',
        '###.=#',
        '######',
        '######'
      ], terrain: [
        '......',
        '......',
        '..||..',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#...###',
        '.B.b...',
        '###...#',
        '###..##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
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
    sol: 'RRRRURRDULLDRRRDDLURULULLDRRRRRRLLLLLLLLDDR'
  },
  {
    id: 'd36',
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##_####',
        '#....##',
        '#P.bA.#',
        '###_..#',
        '###..##',
        '#######'
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
    sol: 'URRRDRDLDLURUULDLURRDDLLDLLUU'
  },
  {
    id: 'd37',
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##P###',
        '##.###',
        '##A###',
        '#.B.##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#=#####',
        '#.#####',
        '..####.',
        '#######',
        '#######',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###..##',
        '###...#',
        '..#.#..',
        '#...b.#',
        '##._._#',
        '###.###'
      ] }
    },
    sol: 'DDDDDDDLDRRLUUURRDDLRUULLDDRDRRUU'
  },
  {
    id: 'd38',
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
    id: 'd39',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..A.#',
        '##.#P.#',
        '#...#.#',
        '#..ut.#',
        '#B#...#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '####.',
        '#####',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '#######',
        '#######',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'RDDLLULUURRLLDDLDRRRDRUUU'
  },
  {
    id: 'd40',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###P.#',
        '#._.=#',
        '#.#._#',
        '#.bA.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.b.#',
        '.....',
        '##..#',
        '#####'
      ] }
    },
    sol: 'DDDDRDDLUUUURUULDLLDDRRURULDDRRURRDDLUUUULUURD'
  },
  {
    id: 'd41',
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '#...t##',
        '#u.b.##',
        '#PB._A#',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '..###',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '##...',
        '#####',
        '#####'
      ] }
    },
    sol: 'RUURURDDLDDDRRRLLRUULLDRRURD'
  },
  {
    id: 'd42',
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P##=#',
        '#A.#.#',
        '#....#',
        '#..###',
        '######'
      ], terrain: [
        '......',
        '......',
        '..x...',
        '...x..',
        '..x...',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '##....#',
        '##.b###',
        '##...##',
        '#._..##',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '....xx.',
        '.......',
        '.......',
        '.x.....',
        '.......'
      ] }
    },
    sol: 'DRDDLUUUUULUURDDRDLDDDRRRUU'
  },
  {
    id: 'd43',
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
    id: 'd44',
    idea: {"en":"The pink box has to go inside the purple box","ar":"الصندوق الزهري لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###.B#',
        '#.A..#',
        '#....#',
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
        '#._.###',
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
    sol: 'ULLURRDRUUULUURRDLLLLLLULDLDDRULURRRRRRDLURURRDLDDDLURRRRDRRUULDRDLLULDLL'
  },
  {
    id: 'd45',
    idea: {"en":"A box has to end up inside the purple box","ar":"في صندوق لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#=..##',
        '#.b#.#',
        '#..A.#',
        '#.P..#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '##.#..#',
        '..b....',
        '#....##',
        '##...B#',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##.##',
        '..__#',
        '#####',
        '#####'
      ] }
    },
    sol: 'RRULDLLUUURDLDDRURRDLLULUURDDRDLLLULDDLDRULLLURRRRRRURRDLLLLULDDLDRRRLLUURRRUUUL'
  },
  {
    id: 'd46',
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..#.#',
        '#..b.#',
        '#_bA.#',
        '#._P.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '#=#####',
        '#.#####',
        '#.#####',
        '#...###',
        '###.###'
      ], terrain: [
        '...v...',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '...^...'
      ] }
    },
    sol: 'RUULLULDRDRDRUUUULLUUU'
  },
  {
    id: 'd47',
    idea: {"en":"A box has to fill a hole before you can cross","ar":"لازم صندوق يعبّي الحفرة قبل ما تقطع"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '########',
        '##.#####',
        '#P_.####',
        '#.A#..##',
        '#._....#',
        '##.#...#',
        '########',
        '########'
      ], terrain: [
        '........',
        '........',
        '...O....',
        '........',
        '...O....',
        '........',
        '........',
        '........'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##._#',
        '.bbb.',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '..O..',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'RDLDRRRDRURLDLDDUUDRRDRRULLL'
  },
  {
    id: 'd48',
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
    id: 'd49',
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..##',
        '#.._P#',
        '#..b.#',
        '#A.###',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#_b##',
        '#....',
        '#.=##',
        '#####'
      ] }
    },
    sol: 'DLULLDDDLDDRURRRULDDUUURDDLLLDLURD'
  },
  {
    id: 'd50',
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#######',
        '#_P...#',
        '##..A##',
        '###..##',
        '#######',
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
        '##.##',
        '#...#',
        '#..B.',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#..##',
        '..b.#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RRDDDRRRDRRULLLLULDDDDUUUURRRLLL'
  },
  {
    id: 'd51',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.A##',
        '#._b##',
        '#...P#',
        '##.._#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '.b..#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'LULURRDRDDLDDRRULDLURUUURUULDDDDDLDR'
  },
  {
    id: 'd52',
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.A_#',
        '#P#..#',
        '#._bB#',
        '##...#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '.....',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '###=.',
        '#####',
        '#####'
      ] }
    },
    sol: 'DRDRRULUUUULLLRDDRUUURULLLLLL'
  },
  {
    id: 'd53',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.P#.B#',
        '#Au...#',
        '#..##.#',
        '#t.##.#',
        '#.....#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#######',
        '#######',
        '######.',
        '##.=.##',
        '###..##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '.####',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'LDRRRLLDDDRRRUUUDDDLLLLUUUUURUL'
  },
  {
    id: 'd54',
    idea: {"en":"The way forward starts inside the purple box","ar":"الطريق بيبلش من جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###..##',
        '#P.bA.#',
        '#...#.#',
        '#._...#',
        '#...###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '####...',
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
    sol: 'RDRDRRUULULDDLLURRDLDDRUUDRRUULULDDURRDDLLUULLLDDLUUU'
  },
  {
    id: 'd55',
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##.A.#',
        '#.B.##',
        '#P..##',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#...#',
        '#....',
        '##=.#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#_###',
        '....#',
        '#..##',
        '#####'
      ] }
    },
    sol: 'URDRUUURUULLDRRRLDLDDLURRRDRUUURRRLDLUUU'
  },
  {
    id: 'd56',
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P#..#',
        '#.#.A#',
        '#._..#',
        '####.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '#..##',
        '#.B.#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '..b..',
        '#..##',
        '##.##'
      ] }
    },
    sol: 'DDRRRUUULURRURUUDDDDLDRRURRDLLLL'
  },
  {
    id: 'd57',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...##',
        '#....#',
        '##Ab_#',
        '#P..##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '.....',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'RRURULULLDRURDRDLLLULDRDLURRRDLURUULLDRURDLDR'
  },
  {
    id: 'd58',
    idea: {"en":"The purple box has to go inside the main room","ar":"الصندوق البنفسجي لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###P###',
        '##.b#=#',
        '#.A.._#',
        '#....##',
        '#._##.#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '....O..',
        '.......',
        '.O...O.',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##b.#',
        '..B.#',
        '##.##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '####.',
        '#####',
        '##.##'
      ] }
    },
    sol: 'DLDLDRURDDRDLLLLURRDLULLDDRULURDRULURRRDDUUUUUDLDRRDLULDURRRRRUUU'
  },
  {
    id: 'd59',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '###..#',
        '#..b.#',
        '#.A.=#',
        '##P_##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##.##',
        '##_##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'URRUULDRDLDLUUUDDLURDRRUULDDR'
  },
  {
    id: 'd60',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#Ab.#',
        '##P.#',
        '#####',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##B####',
        '##b####',
        '##.....',
        '##.#.##',
        '##_..##',
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
    sol: 'RULLLLDDLLUUUUULURDDDDDDRRUULRDDLLUUUUULURDRRUUUUDDLDRDLULDDDDD'
  },
  {
    id: 'd61',
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
        '#..##',
        '#....',
        '#.._#',
        '#####'
      ] }
    },
    sol: 'URULLLUUUDDRDRRULLULDDDDLDRURDDDD'
  },
  {
    id: 'd62',
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
    id: 'd63',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..P#',
        '##A..#',
        '#..b_#',
        '#...##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##b##',
        '##__.',
        '#####',
        '##.##'
      ] }
    },
    sol: 'DDLDLLURDRURULLRULDRDDLLURRURDD'
  },
  {
    id: 'd64',
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
    id: 'd65',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '###A#',
        '#P#b#',
        '#...#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '####...',
        '##....#',
        '#B....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#C#####',
        '#.#####',
        '#_...b.',
        '#.###.#',
        '#.....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '#####',
        '##_##',
        '##.##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DRRUUULURDRRUULDRDLLLLLLLRRDDLLLLUUUUUUDDDDDDRRRRUULLL'
  },
  {
    id: 'd66',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##._##',
        '#.b..#',
        '##A..#',
        '#..P_#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#._.#',
        '...b.',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'ULLULLDRRRLDLDDRRUULULDDDDRDDLULLLRRUU'
  },
  {
    id: 'd67',
    idea: {"en":"The green box has to go inside the main room","ar":"الصندوق الأخضر لازم يفوت جوّا الغرفة الرئيسية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##P.##',
        '#.A..#',
        '#..B_#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '..=##',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#_..#',
        '...b.',
        '#...#',
        '#####'
      ] }
    },
    sol: 'RDRDLLRUULDRDLLLDLLURRRRRRRR'
  },
  {
    id: 'd68',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '##.A#',
        '#.b.#',
        '#.P.#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '###....',
        '##....#',
        '##.bB.#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '###.###',
        '###..##',
        '#.#..##',
        '#C...##',
        '#######',
        '#######'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##_.#',
        '#....',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'RUUULURURDLDDDDLLURDRUUULURURDDDDRDDLLLLULDRRRRRUULDRDLLLLDLU'
  },
  {
    id: 'd69',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#.A.#',
        '#._.#',
        '##P##',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '#.##..#',
        '#.b...#',
        '#_.b..#',
        '###.###'
      ] }
    },
    sol: 'UUULLURDRRRUULDRDLLLURDRRUULDRDLULDD'
  },
  {
    id: 'd70',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#A..b.#',
        '#...#.#',
        '##b...#',
        '##.P###',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '..^....',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#._##',
        '.....',
        '#_..#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.x...',
        '..x..',
        '.....'
      ] }
    },
    sol: 'LUURULLLLULDRRRRRDDRRUULLLLLDLU'
  },
  {
    id: 'd71',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..##',
        '#.._##',
        '#.bA##',
        '#P=.##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '.b._.',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'RURRDRRUULDRDLULLLDRULLURRRRLLLDD'
  },
  {
    id: 'd72',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '####.##',
        '##Pb.##',
        '#.=..##',
        '#.#A.##',
        '#...###',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#####',
        '._.##',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'DLDDRRUUUULLLRDRULLURRLDL'
  },
  {
    id: 'd73',
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..##',
        '##AB##',
        '#..P##',
        '#...##',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##=..',
        '#####',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#.#####',
        '#_.####',
        '#....##',
        '#....##',
        '###.###'
      ] }
    },
    sol: 'ULLLUUUDRDDLLURDRUUUURULLDLURULLL'
  },
  {
    id: 'd74',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#.###',
        '#A.P#',
        '#..##',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '##B...#',
        '##.#.b#',
        '####...',
        '####.##',
        '###..##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#.#####',
        '#.#####',
        '#....=.',
        '#C###.#',
        '#.....#',
        '###.###'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '##_##',
        '##.#.',
        '##.##',
        '##.##'
      ] }
    },
    sol: 'LLLLUURDLDDDLDDRULLRRDLUUURUUURULLLLDDLLLLUUDDRRRRUULLLRRRDDLLLLUUUUUUDDDDRRRR'
  },
  {
    id: 'd75',
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
    id: 'd76',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#_.##',
        '#PA##',
        '#..##',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '####..#',
        '#.##.B#',
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
        '#.b.#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DRUUUURUUURDDLDRRDDDRDDLUUUURULLLLLDLURULL'
  },
  {
    id: 'd77',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '###.#.#',
        '#Pb_.A#',
        '##.b..#',
        '##..###',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##..#',
        '.=...',
        '#_..#',
        '#####'
      ] }
    },
    sol: 'RRRLLDDRURURRDRRUULDRDLUL'
  },
  {
    id: 'd78',
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
    id: 'd79',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.##P#',
        '#.b...#',
        '#.A.b.#',
        '#..####',
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
        '#####',
        '._...',
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
    sol: 'DDLLLLLRRDLURRULLLRRDDDRRR'
  },
  {
    id: 'd80',
    idea: {"en":"Something has to come out of the green box","ar":"في إشي لازم يطلع من الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '##.A..#',
        '#P_...#',
        '##..###',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '....x..',
        '.......',
        '.......',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#####',
        '.b...',
        '#.=.#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '..xx.',
        '.....',
        '.....'
      ] }
    },
    sol: 'RUURDLDRRRRDRRULLLLLRRRDR'
  },
  {
    id: 'd81',
    idea: {"en":"The green box has to go inside the purple box","ar":"الصندوق الأخضر لازم يفوت جوّا الصندوق البنفسجي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..A.#',
        '#.b..#',
        '#B#.##',
        '#...P#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##=##',
        '.#...',
        '#####',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#..##',
        '#....',
        '#_._#',
        '##.##'
      ] }
    },
    sol: 'LLLUDRRUULLLDLLUURDLDRDDURRRULLLLLULDRDLLLU'
  },
  {
    id: 'd82',
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
    id: 'd83',
    idea: {"en":"The main room has to move before anything else","ar":"الغرفة الرئيسية لازم يتحرك قبل أي إشي"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '####P##',
        '#_.b.##',
        '.Vb._..',
        '##b.###',
        '##.._##',
        '###.###'
      ] }
    },
    sol: 'DLLRDLRDDLURURRRRRURDDLDR'
  },
  {
    id: 'd84',
    idea: {"en":"Cracked floor breaks behind you: plan one clean path","ar":"الأرض المشقّقة بتنكسر وراك: خطط طريق واحد نضيف"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##.#..#',
        '##.b._#',
        '#.....#',
        '#.A...#',
        '#.P#._#',
        '#######'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '..x....',
        '...x...',
        '.......',
        '.......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '##.####',
        '...####',
        '##.=###',
        '#######',
        '#######'
      ], terrain: [
        '.......',
        '...x...',
        '.......',
        '..x....',
        '.......',
        '.......',
        '.......'
      ] }
    },
    sol: 'LURRRULLURRDRDLDRRRDR'
  },
  {
    id: 'd85',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#.b..##',
        '#.bA.##',
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
        '._.##',
        '##.##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '....#',
        '##..#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '...o.',
        '.....'
      ] }
    },
    sol: 'LUDLLURDRUUUULURRRRURDLLLLDDDDLLURRRLDDLLDDRRR'
  },
  {
    id: 'd86',
    idea: {"en":"The way forward starts inside the main room","ar":"الطريق بيبلش من جوّا الغرفة الرئيسية"},
    root: 'V',
    rooms: {
      V: { palette: 'navy', map: [
        '#######',
        '#######',
        '#######',
        '.._####',
        '#._.bP#',
        '#.b=V.#',
        '###.###'
      ] }
    },
    sol: 'LLDRRRDDRRRRRLLL'
  },
  {
    id: 'd87',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '##b.###',
        '#P.A..#',
        '#.....#',
        '#####=#',
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
        '##.##',
        '#..##',
        '..b#.',
        '#_..#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '...o.',
        '.....'
      ] }
    },
    sol: 'RRRURDLDRULLLRUULDRDDLLURRRRLDRUUUULDRDDDD'
  },
  {
    id: 'd88',
    idea: {"en":"A box has to end up inside the green box","ar":"في صندوق لازم يفوت جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '##..###',
        '#.b..##',
        '#.#..A#',
        '#..bP.#',
        '###._.#',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '#######',
        '#######',
        '.._####',
        '#..#=##',
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
      ] }
    },
    sol: 'DLULLUURURDLLDDRRDRULLLUURRDULLDDRRURDURRDRDRRU'
  },
  {
    id: 'd89',
    idea: {"en":"A box has to end up inside the pink box","ar":"في صندوق لازم يفوت جوّا الصندوق الزهري"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#..##',
        '#b.P#',
        '#A###',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###..##',
        '###..##',
        '#B...##',
        '###.###',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '####..#',
        '####...',
        '##..=##',
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
    sol: 'LULDDDDRDDLLLLLDLLDRURURRRRRUULDRDLLLLULDDDDRDDLLURUUU'
  },
  {
    id: 'd90',
    idea: {"en":"The way forward starts inside the green box","ar":"الطريق بيبلش من جوّا الصندوق الأخضر"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#..._#',
        '#A.###',
        '#.bb.#',
        '#.P_.#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '##...',
        '#####',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '....<',
        '.....',
        '..^..'
      ] }
    },
    sol: 'UULLLUUURRLDDDRRULDLLUURDLDR'
  }
  ];
});
