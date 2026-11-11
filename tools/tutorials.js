// The hand-made first level of each 1.6 world (same shape as the T table in curate.js).
// Each one is tiny, shows its idea once, and its shortest solution uses the idea (check: node tools/tutorials.js).
const T = {
  // push the box onto the ice and it slides to the goal; then slide yourself to your own goal
  ice: {
    name: { en: 'First Slide', ar: 'أول زحلقة' },
    tip: { en: 'On ice you keep sliding until something stops you', ar: 'عالجليد بتضل تتزحلق لحد ما يوقفك إشي' },
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: ['#######', '#######', '#Pb.._#', '#.###.#', '#....=#', '#######', '#######'],
        terrain: ['.......', '.......', '...~~..', '.......', '...~~..', '.......', '.......'] }
    }
  },
  // the box ends in a nook you can never push it into: the wind does the last step
  wind: {
    name: { en: 'Tailwind', ar: 'ريح بالظهر' },
    tip: { en: 'A wind tile blows whatever stands on it one step after every move', ar: 'بلاطة الريح بتدفش اللي واقف عليها خطوة بعد كل حركة' },
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: ['#######', '#..b..#', '#.###_#', '#P#####', '#######', '#######', '#######'],
        terrain: ['.......', '.....D.', '.......', '.......', '.......', '.......', '.......'] }
    }
  },
  // the box and its goal are shut away: step on the pad to get in
  pads: {
    name: { en: 'First Jump', ar: 'أول نطّة' },
    tip: { en: 'Step on a pad and you come out of the pad of the same color', ar: 'ادعس على بلاطة بتطلع من البلاطة اللي بنفس لونها' },
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: ['#######', '#P....#', '#######', '#..b._#', '#######', '#######', '#######'],
        terrain: ['.......', '....1..', '.......', '..1....', '.......', '.......', '.......'] }
    }
  },
  // the box is stuck in a corner and its goal is inside the room: push the room onto it
  hungry: {
    name: { en: 'Open Wide', ar: 'افتح تمّك' },
    tip: { en: 'Push the hungry room onto a box that can’t move, and the room swallows it', ar: 'ادفش الغرفة الجوعانة على صندوق محشور، بتبلعه' },
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: ['#######', '#.....#', '#.H..b#', '#.#####', '#P#####', '#######', '#######'] },
      H: { palette: 'pink', eats: true, map: ['#####', '#...#', '#..._', '#...#', '#####'] }
    }
  },
  // the original box is shut in beside the goal: walk into the twin, walk out next to the original
  twins: {
    name: { en: 'Seeing Double', ar: 'شايف تنين' },
    tip: { en: 'Both boxes lead to the same room, but you always come out of the solid one', ar: 'الصندوقين بيودّوا عنفس الغرفة، بس دايماً بتطلع من الصندوق الأصلي' },
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: ['#######', '#P1####', '#######', '#..A.=#', '#######', '#######', '#######'] },
      A: { palette: 'teal', map: ['#####', '#####', '.....', '#####', '#####'] }
    }
  },
  // in from the top; leave through the left edge and you come out on the right of the box
  mirror: {
    name: { en: 'Wrong Side', ar: 'الجهة الغلط' },
    tip: { en: 'Inside a mirror room left and right are swapped', ar: 'جوّا غرفة المرآة اليمين والشمال مبدّلين' },
    root: 'R',
    rooms: {
      R: { palette: 'navy', map: ['#######', '#######', '#P..###', '###M.=#', '#######', '#######', '#######'] },
      M: { palette: 'violet', flip: true, map: ['##.##', '##.##', '.....', '#####', '#####'] }
    }
  },
  sprouts: null // filled below
};

T.sprouts = {
  name: { en: 'Together', ar: 'سوا' },
  tip: { en: 'Both sprouts move together. A wall can hold one of them back', ar: 'النبتتين بيتحركوا سوا. الحيط بيوقّف وحدة منهم' },
  root: 'R',
  rooms: {
    R: { palette: 'navy', map: ['#######', '#P...=#', '#.#####', '#p..=.#', '#######', '#######', '#######'] }
  }
};

module.exports = T;

if (require.main === module) {
  const { analyze } = require('./analyze.js');
  const { score } = require('./gen.js');
  const NEED = { ice: (a) => a.slides, wind: (a) => a.uses.wind, pads: (a) => a.uses.pad, hungry: (a) => a.uses.eat,
    twins: (a) => a.uses.twin, mirror: (a) => a.uses.flip, sprouts: (a) => a.uses.split };
  for (const k of Object.keys(T)) {
    const a = analyze(JSON.parse(JSON.stringify(T[k])));
    if (!a) { console.log(k.padEnd(8), 'NOT SOLVABLE'); continue; }
    console.log(k.padEnd(8), a.sol.padEnd(15), 'moves', a.moves, 'unique', a.unique, 'idea', NEED[k](a), 'states', a.states, 'score', score(a).toFixed(1));
  }
}
