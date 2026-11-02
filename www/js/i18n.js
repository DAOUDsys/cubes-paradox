/* Cubes Paradox UI text. English is the default; Arabic is Levantine/Palestinian dialect. */
(function () {
  'use strict';

  const STR = {
    en: {
      brand: 'Cubes Paradox',
      tagline: 'A box in a box in a box',
      progress: '{n} of {t} solved',
      play: 'Play', continue: 'Continue', again: 'Play again',
      levels: 'Levels', level: 'Level {n}', locked: 'locked', solvedTag: 'solved', skippedTag: 'skipped',
      back: 'Back', backLevels: 'Back to levels',
      moves: 'moves', goals: 'Goals', depth: 'Depth {n}', where: 'Where you are',
      board: 'Game board', outside: 'Outside',
      undo: 'Undo', restart: 'Restart', hint: 'Hint', skip: 'Skip', free: 'Free',
      points: 'points',
      swipe: 'Swipe in any direction to move',
      legendRoom: 'Box you can enter', legendBox: 'Box', legendGoal: 'Box spot', legendPgoal: 'Your spot',
      legendIce: 'Ice: slides', legendPlate: 'Plate', legendGate: 'Gate: opens when all plates are held', legendArrow: 'One way',
      world: 'World {n}', worldLevel: 'World {w} · Level {n}', challenge: 'Challenge', unlockAt: 'Solve {n} in world {w} to open',
      selfTitle: 'This room is inside itself',
      selfMsg: 'Every time you walk out, you end up back inside it.',
      insideTitle: 'You are inside the {room}',
      insideMsg: 'Walk out through any gap in the wall to get back to the {room}.',
      solved: 'Solved!', next: 'Next level', allDone: 'All levels done',
      replay: 'Replay', undos: 'undos', deepest: 'deepest',
      earned: '+{n} points', noEarn: 'No new points (already solved)',
      hintFollow: 'Follow the arrows',
      hintThinking: 'Thinking…',
      hintStuck: 'No way to win from here — undo or restart',
      hintRestart: 'Too tangled to work out from here — restart, then ask again',
      noPoints: 'Not enough points — solve levels to earn more',
      skipAsk: 'Skip this level for {c} points?', skipYes: 'Skip it', cancel: 'Cancel',
      lang: 'العربية',
      rooms: { navy: 'Main room', teal: 'Green box', violet: 'Purple box', pink: 'Pink box', violetRoot: 'Purple room' }
    },
    ar: {
      brand: 'مفارقة المكعبات',
      tagline: 'صندوق جوّا صندوق جوّا صندوق',
      progress: 'مكمّل {n} من {t}',
      play: 'ابدأ اللعب', continue: 'كمّل اللعب', again: 'العب من جديد',
      levels: 'المراحل', level: 'مرحلة {n}', locked: 'مقفلة', solvedTag: 'مكتملة', skippedTag: 'متخطّاة',
      back: 'رجوع', backLevels: 'رجوع للمراحل',
      moves: 'حركة', goals: 'الأهداف', depth: 'عمق {n}', where: 'وين أنت',
      board: 'لوحة اللعب', outside: 'برّا',
      undo: 'تراجع', restart: 'من الأول', hint: 'تلميح', skip: 'تخطّي', free: 'ببلاش',
      points: 'نقطة',
      swipe: 'اسحب بأي اتجاه عشان تتحرك',
      legendRoom: 'صندوق بتفوت جوّاه', legendBox: 'صندوق عادي', legendGoal: 'مكان صندوق', legendPgoal: 'مكانك إنت',
      legendIce: 'جليد: بتزحط', legendPlate: 'زر', legendGate: 'بوابة: بتفتح لما كل الأزرار مضغوطة', legendArrow: 'باتجاه واحد',
      world: 'العالم {n}', worldLevel: 'العالم {w} · مرحلة {n}', challenge: 'تحدّي', unlockAt: 'حلّ {n} بالعالم {w} عشان يفتح',
      selfTitle: 'هالغرفة جوّا حالها',
      selfMsg: 'كل ما تطلع منها، بتلاقي حالك فيها من جديد.',
      insideTitle: 'إنت جوّا {room}',
      insideMsg: 'اطلع من أي فتحة بالحيط عشان ترجع لـ{room}.',
      solved: 'حلّيتها!', next: 'المرحلة الجاية', allDone: 'خلصت كل المراحل',
      replay: 'إعادة', undos: 'تراجع', deepest: 'أعمق مستوى',
      earned: '+{n} نقطة', noEarn: 'ما في نقاط جديدة (محلولة من قبل)',
      hintFollow: 'امشي مع الأسهم',
      hintThinking: 'لحظة بفكّر…',
      hintStuck: 'ما في حل من هون — تراجع أو ابدأ من الأول',
      hintRestart: 'معقّدة كتير من هون — ابدأ من الأول واطلب تلميح',
      noPoints: 'نقاطك مش كافية — حلّ مراحل عشان تجمع أكتر',
      skipAsk: 'بدك تتخطّى هالمرحلة مقابل {c} نقطة؟', skipYes: 'تخطّاها', cancel: 'لا',
      lang: 'English',
      rooms: { navy: 'الغرفة الرئيسية', teal: 'الصندوق الأخضر', violet: 'الصندوق البنفسجي', pink: 'الصندوق الزهري', violetRoot: 'الغرفة البنفسجية' }
    }
  };

  // Eighteen worlds: each has one idea and its own main-room colors (palette keys in render.js).
  const WORLDS = [
    { palette: 'workshop', en: ['Workshop', 'Push boxes onto their spots — it gets tricky fast.'], ar: ['الورشة', 'ادفع الصناديق لأماكنها — وبسرعة بتصير صعبة.'] },
    { palette: 'greenhouse', en: ['Greenhouse', 'Colored boxes are rooms. Walk in, walk through.'], ar: ['البيت الزجاجي', 'الصناديق الملوّنة غرف. فوت فيها وقطّع منها.'] },
    { palette: 'warehouse', en: ['Warehouse', 'Push boxes into rooms — and back out again.'], ar: ['المستودع', 'دفّش الصناديق جوّا الغرف — وطلّعها كمان.'] },
    { palette: 'well', en: ['The Well', 'A room in a room in a room. Order matters.'], ar: ['البير', 'غرفة جوّا غرفة جوّا غرفة. الترتيب مهم.'] },
    { palette: 'violet', en: ['Mirror Hall', 'A room that holds itself.'], ar: ['قاعة المرايا', 'غرفة جوّاها حالها.'] },
    { palette: 'ice', en: ['Ice Cave', 'On ice, everything slides until it hits something.'], ar: ['مغارة الجليد', 'عالجليد كل إشي بيزحط لحد ما يخبط.'] },
    { palette: 'power', en: ['Power Station', 'Hold every plate down and the gates open.'], ar: ['محطة الكهربا', 'اضغط كل الأزرار والبوابات بتفتح.'] },
    { palette: 'factory', en: ['Factory', 'Arrow tiles only let you cross one way.'], ar: ['المصنع', 'الأسهم بتخليك تقطع باتجاه واحد بس.'] },
    { palette: 'lake', en: ['Frozen Lake', 'Ice inside the rooms, rooms on the ice.'], ar: ['البحيرة المتجمدة', 'جليد جوّا الغرف، وغرف عالجليد.'] },
    { palette: 'control', en: ['Control Room', 'The plate is inside a box — the gate is outside.'], ar: ['غرفة التحكم', 'الزر جوّا صندوق — والبوابة برّا.'] },
    { palette: 'conveyor', en: ['Conveyor', 'One-way paths in and out of rooms.'], ar: ['السير', 'طرق باتجاه واحد لجوّا الغرف ولبرّا.'] },
    { palette: 'glacier', en: ['Glacier', 'Sliding boxes that have to stop on plates.'], ar: ['النهر الجليدي', 'صناديق بتزحط ولازم توقف عالأزرار.'] },
    { palette: 'maze', en: ['Hedge Maze', 'Arrows and ice: every step is a commitment.'], ar: ['المتاهة', 'أسهم وجليد: كل خطوة إلها حساب.'] },
    { palette: 'echo', en: ['Echo Chamber', 'A room inside itself, now with ice, gates and arrows.'], ar: ['غرفة الصدى', 'غرفة جوّا حالها، وكمان فيها جليد وبوابات وأسهم.'] },
    { palette: 'freeze', en: ['Deep Freeze', 'Rooms in rooms, with a new rule in each.'], ar: ['التجميد العميق', 'غرف جوّا غرف، وبكل وحدة قاعدة جديدة.'] },
    { palette: 'observatory', en: ['Observatory', 'Rooms, ice, gates and arrows together.'], ar: ['المرصد', 'غرف وجليد وبوابات وأسهم مع بعض.'] },
    { palette: 'labyrinth', en: ['Labyrinth', 'Bigger rooms, longer plans.'], ar: ['القصر', 'غرف أكبر، وخطط أطول.'] },
    { palette: 'paradox', en: ['The Paradox', 'Everything at once. Hard — never impossible.'], ar: ['المفارقة', 'كل إشي مع بعض. صعبة — بس مش مستحيلة.'] }
  ];

  const DIGITS_AR = '٠١٢٣٤٥٦٧٨٩';

  window.I18N = { STR, WORLDS, DIGITS_AR };
})();
