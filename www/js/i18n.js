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
      settings: 'Settings', sound: 'Sound effects', language: 'Language', on: 'On', off: 'Off',
      music: 'Music', vibration: 'Vibration', achievements: 'Achievements', achUnlocked: 'Achievement unlocked',
      daily: 'Daily puzzle', dailyDone: 'Solved today — come back tomorrow', dailyReward: 'A hard one · +{n} points', streak: '{n}-day streak',
      dailyTip: 'Today’s puzzle: hard, but always solvable', home: 'Home',
      starsOf: '{n} of 3 stars', par: 'Best possible: {n} moves', perfect: 'Perfect — shortest possible!',
      hintChoose: 'How much help?', hintIdea: 'The idea', hintIdeaSub: 'One sentence about the key to this level',
      hintMoves: 'The moves', hintMovesSub: 'Your next 8 moves, shown on the board', ideaNone: 'Look for the one thing that has to happen first',
      legendHole: 'Hole: a box fills it', legendCrack: 'Cracked: breaks after you leave', legendTealBox: 'Teal box: into a teal room', legendVioletBox: 'Purple box: into a purple room',
      ach: {
        first: ['First steps', 'Solve your first level'], world1: ['Warmed up', 'Finish the first world'],
        half: ['Halfway there', 'Solve half of all levels'], all: ['Cubes master', 'Solve every level'],
        deep3: ['Three deep', 'Walk three rooms down'], clean10: ['Clean hands', 'Solve 10 levels without undo'],
        stars30: ['Star collector', 'Collect 30 stars'], perfect10: ['Perfectionist', 'Get 3 stars on 10 levels'],
        challenger: ['Challenger', 'Solve 5 challenge levels'], noHintWorld: ['On your own', 'Finish a world without hints'],
        daily1: ['Daily visitor', 'Solve a daily puzzle'], streak7: ['Week streak', 'Solve the daily puzzle 7 days in a row']
      },
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
      settings: 'الإعدادات', sound: 'المؤثرات الصوتية', language: 'اللغة', on: 'شغّالة', off: 'مطفية',
      music: 'الموسيقى', vibration: 'الاهتزاز', achievements: 'الإنجازات', achUnlocked: 'إنجاز جديد',
      daily: 'لغز اليوم', dailyDone: 'حلّيته اليوم — ارجع بكرا', dailyReward: 'لغز صعب · +{n} نقطة', streak: '{n} يوم ورا بعض',
      dailyTip: 'لغز اليوم: صعب، بس دايماً إله حل', home: 'الرئيسية',
      starsOf: '{n} من ٣ نجوم', par: 'أقل عدد ممكن: {n} حركة', perfect: 'ممتاز — أقصر حل ممكن!',
      hintChoose: 'قدّيش بدك مساعدة؟', hintIdea: 'الفكرة', hintIdeaSub: 'جملة وحدة عن مفتاح المرحلة',
      hintMoves: 'الحركات', hintMovesSub: 'حركاتك الـ٨ الجاية عاللوحة', ideaNone: 'دوّر عالإشي اللي لازم يصير أول',
      legendHole: 'حفرة: الصندوق بيعبّيها', legendCrack: 'أرض مشقّقة: بتنكسر بعد ما تطلع عنها', legendTealBox: 'صندوق أخضر: لجوّا غرفة خضرا', legendVioletBox: 'صندوق بنفسجي: لجوّا غرفة بنفسجية',
      ach: {
        first: ['أول خطوة', 'حلّ أول مرحلة'], world1: ['سخّنت', 'خلّص العالم الأول'],
        half: ['نص الطريق', 'حلّ نص المراحل'], all: ['معلّم المكعبات', 'حلّ كل المراحل'],
        deep3: ['تلات طبقات', 'فوت تلات غرف لجوّا'], clean10: ['إيد نضيفة', 'حلّ ١٠ مراحل بدون تراجع'],
        stars30: ['جامع النجوم', 'اجمع ٣٠ نجمة'], perfect10: ['ولا غلطة', '٣ نجوم بـ١٠ مراحل'],
        challenger: ['قدّ التحدي', 'حلّ ٥ مراحل تحدّي'], noHintWorld: ['لحالك', 'خلّص عالم بدون تلميح'],
        daily1: ['زائر يومي', 'حلّ لغز يوم'], streak7: ['أسبوع كامل', 'حلّ لغز اليوم ٧ أيام ورا بعض']
      },
      rooms: { navy: 'الغرفة الرئيسية', teal: 'الصندوق الأخضر', violet: 'الصندوق البنفسجي', pink: 'الصندوق الزهري', violetRoot: 'الغرفة البنفسجية' }
    }
  };

  // Fourteen worlds: each built around one idea, with its own colour on the map (palette keys in render.js).
  const WORLDS = [
    { palette: 'workshop', en: ["Workshop", "Push the boxes onto their spots."], ar: ["الورشة", "ادفع الصناديق لأماكنها."] },
    { palette: 'greenhouse', en: ["Doorways", "A colored box is a door: push it, or walk right in."], ar: ["الأبواب", "الصندوق الملوّن باب: يا بتدفشه، يا بتفوت فيه."] },
    { palette: 'warehouse', en: ["Storage", "Park a box inside a room, then take it back out."], ar: ["المخزن", "خبّي صندوق جوّا غرفة، وبعدين رجّعه."] },
    { palette: 'conveyor', en: ["Moving Day", "Pack boxes into a room, then move the whole room."], ar: ["النقلة", "عبّي الصناديق جوّا غرفة، وانقل الغرفة كلها."] },
    { palette: 'control', en: ["Unpacking", "Get boxes out of rooms. Walking out pushes what is outside."], ar: ["التفضية", "طلّع الصناديق من الغرف. طلعتك بتدفش اللي برّا."] },
    { palette: 'well', en: ["Rooms in Rooms", "Put a room inside a room, two levels deep."], ar: ["غرفة جوّا غرفة", "حط غرفة جوّا غرفة، مستويين لتحت."] },
    { palette: 'observatory', en: ["The Goal Room", "The room itself must reach the goal, and you must get inside it."], ar: ["الغرفة الهدف", "الغرفة نفسها لازم توصل للهدف، وإنت لازم تفوت جوّاها."] },
    { palette: 'freeze', en: ["Deep Dive", "Three rooms down, and back up again."], ar: ["الغوص العميق", "تلات غرف لتحت، وارجع لفوق."] },
    { palette: 'echo', en: ["Mirror Hall", "A room that holds itself."], ar: ["قاعة المرايا", "غرفة جوّاها حالها."] },
    { palette: 'factory', en: ["Holes", "Fill a hole with a box to walk across."], ar: ["الحفر", "عبّي الحفرة بصندوق عشان تقطع."] },
    { palette: 'glacier', en: ["Cracked Floor", "Cracked floor breaks once you step off. Plan one clean path."], ar: ["الأرض المشقّقة", "الأرض المشقّقة بتنكسر بعد ما تطلع عنها. خطط طريق واحد."] },
    { palette: 'maze', en: ["Colors", "Each colored box belongs inside the room of its color."], ar: ["الألوان", "كل صندوق ملوّن مكانه جوّا الغرفة اللي بلونه."] },
    { palette: 'power', en: ["Control Room", "A plate inside one room opens a gate in another."], ar: ["غرفة التحكم", "زر جوّا غرفة بيفتح بوابة بغرفة تانية."] },
    { palette: 'paradox', en: ["One-Way Doors", "Arrows on room doors: in one way, out another."], ar: ["أبواب باتجاه واحد", "أسهم على أبواب الغرف: بتفوت من باب وبتطلع من غيره."] }
  ];

  const DIGITS_AR = '٠١٢٣٤٥٦٧٨٩';

  window.I18N = { STR, WORLDS, DIGITS_AR };
})();
