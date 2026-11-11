/* Cubes Paradox daily puzzles (written by tools/curate.js — edit there or here, then run `npm run solve`).
   Symbols: # wall  . floor  P player  b box  t teal box  u purple box  _ box goal  = player goal
   Any other capital letter is a box that holds the room with that key. Rooms must be square.
   p second sprout  1 2 3 twin of room A B C  (room props: flip = mirror room, eats = hungry room)
   terrain (optional, same size): ~ ice  o plate  | gate  ^ > v < one-way arrows  O hole  x crumbling floor
   U R D L wind tiles  1-4 jump pads (in pairs)
   sol = a known solution (U R D L), used for hints; idea = the first hint step; d = how hard (1 easy, 2 medium, 3 hard). */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.DAILY = factory();
})(this, function () {
  'use strict';
  return [
  {
    id: 'd1',
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.b.=#',
        '#PbA.#',
        '#....#',
        '#...##',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '......',
        '...L..',
        '......'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '#######',
        '#.....#',
        '##....#',
        '...._.#',
        '#...._#',
        '#.....#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '...L...',
        '.......',
        '.L.....',
        '....D..',
        '.......'
      ] }
    },
    sol: 'URLDDRUDRRULLDLURRRULLLRRRUURRRDDULLDLLLRR'
  },
  {
    id: 'd2',
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####A#',
        '##..B#',
        '#Pb..#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '#######',
        '#######',
        '#######',
        '####...',
        '##....#',
        '##....#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '##_####',
        '....###',
        '#..####',
        '##..###',
        '###.###'
      ] }
    },
    sol: 'RURRRRDDRDDUUULURDRRUULDRDLULDDDLLDRRRDRU'
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
    id: 'd5',
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#######',
        '#..##.#',
        '#1P...#',
        '#..#A.#',
        '#..#._#',
        '#######',
        '#######'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###..##',
        '####.##',
        '####...',
        '#######',
        '#######',
        '#######'
      ] }
    },
    sol: 'LRDLURULLLLLUULUULDRRRLLLDDUDD'
  },
  {
    id: 'd6',
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#.b.#',
        '#PA.#',
        '#.#.#',
        '#####'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '###.###',
        '#.#####',
        '#B...##',
        '#.#....',
        '#...#.#',
        '###...#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##_##',
        '#=...',
        '##..#',
        '#####'
      ] }
    },
    sol: 'RRLDDLLDDULLURRLLRDDLLUURULLLLDLUL'
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
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...##',
        '#Ab..#',
        '#b.#.#',
        '#P...#',
        '######'
      ], terrain: [
        '......',
        '......',
        '...~~.',
        '....~.',
        '...~~.',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '#=._.##',
        '#.#...#',
        '......#',
        '##..#.#',
        '#_....#',
        '###.###'
      ], terrain: [
        '.......',
        '.......',
        '.......',
        '...~...',
        '..~~...',
        '..~~...',
        '.......'
      ] }
    },
    sol: 'UUDRDRULLDLUUULULUURRDDLDRDDRDDLUUUUURRDDDLLULUU'
  },
  {
    id: 'd9',
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
    id: 'd10',
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
    id: 'd11',
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..##',
        '#..P##',
        '#.Ab##',
        '##..##',
        '######'
      ], terrain: [
        '......',
        '......',
        '..1...',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#######',
        '###.###',
        '###.###',
        '.#...##',
        '###.#=#',
        '#_....#',
        '###.###'
      ], terrain: [
        '.......',
        '...2...',
        '.......',
        '.......',
        '.......',
        '..2.1..',
        '.......'
      ] }
    },
    sol: 'LLDDULURRLDDRUUUUUUUDDDLDURRUDRU'
  },
  {
    id: 'd12',
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...A#',
        '#.b#.#',
        '#B..P#',
        '#.####',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##..#',
        '#...#',
        '#_..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##..#',
        '#=...',
        '#.1.#',
        '#####'
      ] }
    },
    sol: 'LLLLULUUURDLDDDDDDDDDDDLLULDDDDDDDRDLDDDLLLDDDL'
  },
  {
    id: 'd13',
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..##',
        '#.b.##',
        '#.P.##',
        '#.A.##',
        '######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '#####',
        '##..#',
        '#..B.',
        '#=..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '##..#',
        '..._#',
        '#...#',
        '#####'
      ] }
    },
    sol: 'LDRRLULDLDRURRRURUULDDLDRRLULDLDRRRRLLLL'
  },
  {
    id: 'd14',
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
    id: 'd15',
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
    id: 'd16',
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
    id: 'd17',
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
    id: 'd18',
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
    id: 'd19',
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
    id: 'd20',
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
    id: 'd23',
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
    id: 'd24',
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
    id: 'd25',
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
    id: 'd26',
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
    id: 'd27',
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
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..##',
        '##b.##',
        '#=.A##',
        '#.P..#',
        '######'
      ], terrain: [
        '......',
        '..21..',
        '......',
        '......',
        '.2....',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.._#',
        '#..##',
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
    sol: 'LDRDULUURURDDUUUURUULL'
  },
  {
    id: 'd29',
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
    id: 'd30',
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
    id: 'd31',
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P.###',
        '#.A###',
        '#..Bb#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '###.###',
        '#######',
        '##..###',
        '.....#.',
        '##.####',
        '#..._##',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##=.#',
        '.....',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RDLDRRRRRRLLLLLRRRRURDDRDRRLULDDDDDLLLRRRRRU'
  },
  {
    id: 'd32',
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
    id: 'd33',
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#.=##',
        '#.A##',
        '#p.P#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '..#..',
        '#.B.#',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '#...#',
        '#.=.#',
        '#..##',
        '#####'
      ] }
    },
    sol: 'URRDRLLUURRDDDDDU'
  },
  {
    id: 'd34',
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
    id: 'd35',
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
    id: 'd36',
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
    id: 'd37',
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#P####',
        '#...##',
        '#bBA.#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '###.###',
        '###.#.#',
        '###.._#',
        '.##....',
        '####..#',
        '#######',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#######',
        '#...###',
        '.......',
        '#...#=#',
        '###...#',
        '###.###'
      ] }
    },
    sol: 'DRRDDDRRDRRLLLLLLLLRRRRRRRLLLDLULURRRRRRRD'
  },
  {
    id: 'd38',
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.P..#',
        '#A..b#',
        '#..b.#',
        '###..#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '....L.',
        '...D..',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#_.=#',
        '._..#',
        '##..#',
        '##.##'
      ] }
    },
    sol: 'DDRDULLURURRDLLDRDULLURURRDLLDLUUURULRULR'
  },
  {
    id: 'd39',
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
    id: 'd40',
    idea: {"en":"Use the mirror room to come out on the other side","ar":"استعمل غرفة المرآة عشان تطلع من الجهة التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####P#',
        '###.b#',
        '#..A.#',
        '#.B..#',
        '######'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '##.##',
        '##..#',
        '.=...',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '##_####',
        '##.###.',
        '#....##',
        '##...##',
        '###.###'
      ] }
    },
    sol: 'DLDLLDRRRLDLLURDRURRUURDDDUULDRLDLLURDRUUURULDLUUDRDDDLL'
  },
  {
    id: 'd41',
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
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..##',
        '##Pb##',
        '###B##',
        '###A##',
        '######'
      ], terrain: [
        '......',
        '...1..',
        '......',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '###.###',
        '###.###',
        '###=.##',
        '##..._.',
        '###..##',
        '#######',
        '#######'
      ] },
      B: { palette: 'violet', map: [
        '##.##',
        '##.##',
        '##...',
        '#..##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.1...',
        '.....'
      ] }
    },
    sol: 'URRLDURUUUUDDDRDLLLLDLDDDDDUUUUURURRRRUL'
  },
  {
    id: 'd44',
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
  },
  {
    id: 'd45',
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
    id: 'd46',
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##P..#',
        '#.b..#',
        '#_Ab.#',
        '#....#',
        '######'
      ], terrain: [
        '......',
        '...~~.',
        '...~~.',
        '....~.',
        '...~~.',
        '......'
      ] },
      A: { palette: 'teal', flip: true, map: [
        '#####',
        '##._#',
        '.=..#',
        '#...#',
        '##.##'
      ] }
    },
    sol: 'RDLLUURURDLLLRRDRULL'
  },
  {
    id: 'd47',
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
    id: 'd48',
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '##.=#',
        '#_A=#',
        '#p#P#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##B##',
        '....#',
        '##.##',
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
    sol: 'URURLDLRRRRRDLLLLURDUU'
  },
  {
    id: 'd49',
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
    id: 'd50',
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.b..#',
        '#.b=.#',
        '#P.A.#',
        '###..#',
        '######'
      ], terrain: [
        '......',
        '......',
        '.L....',
        '......',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#..##',
        '#_...',
        '#.._#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '..D..',
        '.....',
        '.....'
      ] }
    },
    sol: 'UURLDDRURRDDLURULLDLURRRULLLLLRRRDLUULRDDRR'
  },
  {
    id: 'd51',
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
    id: 'd52',
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
    id: 'd53',
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
    id: 'd54',
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.P=.#',
        '#.#AB#',
        '#b...#',
        '#...##',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '....~.',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.###',
        '.C.##',
        '#..##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '..~..',
        '.~...',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '...##',
        '##.##',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '..~..',
        '.....'
      ] },
      C: { palette: 'pink', map: [
        '##.##',
        '#.._#',
        '#...#',
        '#.#.#',
        '#####'
      ], terrain: [
        '.....',
        '.~~..',
        '.~~..',
        '.~...',
        '.....'
      ] }
    },
    sol: 'RDRRRDDLDLLUDRUUULLRRDDDRUUULLDDDDRDLUUUURRDDLRUULLDDDDLDRRRRDDDULURUUUURR'
  },
  {
    id: 'd55',
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '######',
        '#...P#',
        '#.ABb#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '###.###',
        '#######',
        '##._###',
        '....#..',
        '#...#.#',
        '###...#',
        '###.###'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#######',
        '##....#',
        '...#=..',
        '#.....#',
        '##.#..#',
        '###.###'
      ] }
    },
    sol: 'LLLDRRRDRRRUULLDLDRRRDRULURRRLULLDRRRRRDRULURRRURRD'
  },
  {
    id: 'd56',
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
    id: 'd57',
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
    id: 'd58',
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
    id: 'd59',
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
    idea: {"en":"The hungry room has to swallow a box","ar":"الغرفة الجوعانة لازم تبلع صندوق"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '##..##',
        '#.PA##',
        '#bB_.#',
        '######',
        '######'
      ] },
      A: { palette: 'teal', eats: true, map: [
        '##.##',
        '##.C#',
        '.#...',
        '##..#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '###.###',
        '#######',
        '##..###',
        '..b....',
        '#...#.#',
        '###...#',
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
    sol: 'URDDDDRRRLLLDDLLUUULDRDDRRUULLLLDRURRRDDLLUDRRUULLLLLLRULDDDDRUUUDDLURRRDRU'
  },
  {
    id: 'd64',
    idea: {"en":"Let the ice carry it: aim before you push","ar":"خلّي الجليد يوصّله: صوّب قبل ما تدفش"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#Bbb.#',
        '#.AP.#',
        '##..##',
        '##.###',
        '######'
      ], terrain: [
        '......',
        '....~.',
        '....~.',
        '...~..',
        '..~...',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##._#',
        '.._.#',
        '##.=#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '...~.',
        '.....',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#..##',
        '#....',
        '#...#',
        '##.##'
      ], terrain: [
        '.....',
        '.....',
        '.~~~.',
        '.~~~.',
        '.....'
      ] }
    },
    sol: 'RULDDLUUULLLRDRULLUULDRURRRRRLLDRUURUD'
  },
  {
    id: 'd65',
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#...1#',
        '#.b..#',
        '###.##',
        '#.ABP#',
        '######'
      ], terrain: [
        '......',
        '......',
        '....~.',
        '...~..',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '##=##',
        '.#...',
        '##.##',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '#._.###',
        '....##.',
        '##..###',
        '#######',
        '###.###'
      ] }
    },
    sol: 'LURUUURRRRUULLDRURDRUUURRRRRRURRDDLULLLLLLLU'
  },
  {
    id: 'd66',
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
    id: 'd67',
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
    id: 'd68',
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
    id: 'd69',
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
    id: 'd70',
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
    id: 'd71',
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
    id: 'd72',
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
    id: 'd73',
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
    id: 'd74',
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
    id: 'd75',
    idea: {"en":"Go in through the twin, come out of the first box","ar":"فوت من التوأم، واطلع من الصندوق الأصلي"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#B..1#',
        '#P.._#',
        '#.b.b#',
        '###.A#',
        '######'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '##.##',
        '...##',
        '#####',
        '#####'
      ] },
      B: { palette: 'violet', map: [
        '#######',
        '#######',
        '###_.##',
        '###....',
        '###...#',
        '##=.###',
        '#######'
      ] }
    },
    sol: 'DRURRDULURLURULURRRUUULLURULLLLDLUDDL'
  },
  {
    id: 'd76',
    idea: {"en":"Let the wind do the last step for you","ar":"خلّي الريح تعمل آخر خطوة عنك"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '#.A._#',
        '#..bB#',
        '#b.P.#',
        '#..###',
        '######'
      ], terrain: [
        '......',
        '......',
        '.R....',
        '....U.',
        '......',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#...#',
        '.._.#',
        '#.#_#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '.U...',
        '.....'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#...#',
        '..=..',
        '#...#',
        '#####'
      ], terrain: [
        '.....',
        '.....',
        '.....',
        '...L.',
        '.....'
      ] }
    },
    sol: 'LDLUUURRLLDDRRULURLLDRDRULURRRURRDULLDLLDRRR'
  },
  {
    id: 'd77',
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '#..P#',
        '#.A.#',
        '#=b_#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#p=##',
        '.....',
        '#..##',
        '#####'
      ] }
    },
    sol: 'LLDRURDLLDRRRDLULLL'
  },
  {
    id: 'd78',
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
    id: 'd79',
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
    id: 'd80',
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
    id: 'd81',
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
    id: 'd82',
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
    id: 'd83',
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
    id: 'd84',
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
    id: 'd85',
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
    id: 'd86',
    idea: {"en":"Use a wall to move one sprout without the other","ar":"استعمل الحيط عشان تحرّك نبتة بدون التانية"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '#####',
        '##A##',
        '#.=_#',
        '##pP#',
        '#####'
      ] },
      A: { palette: 'teal', map: [
        '##.##',
        '#.=##',
        '..B.#',
        '#...#',
        '##.##'
      ] },
      B: { palette: 'violet', map: [
        '#####',
        '#####',
        '#####',
        '#####',
        '##.##'
      ] }
    },
    sol: 'UUULUULRDDURDLDUUUR'
  },
  {
    id: 'd87',
    idea: {"en":"Something has to go through a jump pad","ar":"في إشي لازم يمرق من بلاطة النقل"},
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: [
        '######',
        '####.#',
        '###.A#',
        '#Pb.b#',
        '#....#',
        '######'
      ], terrain: [
        '......',
        '......',
        '......',
        '......',
        '..1...',
        '......'
      ] },
      A: { palette: 'teal', map: [
        '#####',
        '#.#_#',
        '.=..#',
        '##_.#',
        '##.##'
      ], terrain: [
        '.....',
        '.1...',
        '.....',
        '.....',
        '.....'
      ] }
    },
    sol: 'RDDURRUUUUDDDDLLDRDRULLUURDRUUUDDDLLD'
  },
  {
    id: 'd88',
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
    id: 'd89',
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
    id: 'd90',
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
  }
  ];
});
