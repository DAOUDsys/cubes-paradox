/* Cubes Paradox app: screens, input, animation, progress, points, hints. */
(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const MOVE_MS = 130;    // one step
  const ZOOM_MS = 380;    // entering / leaving a box
  const UNDO_SPEED = 0.6; // undo plays the same animation, faster

  const START_POINTS = 30;
  const HINT_COST = 15;
  const HINT_STEPS = 8;   // moves shown per hint
  const SKIP_COST = 50;
  const IDEA_COST = 5;      // first hint step: the level's idea in one sentence
  const CLEAN_BONUS = 5;    // solved without a single undo
  const DAILY_REWARD = 30;
  const DAY0 = Date.UTC(2026, 10, 1);
  // stars: 3 = shortest possible, 2 = within 30% of it, 1 = solved
  const starsFor = (def, moves) => { const opt = (def.sol || '').length || moves; return moves <= opt ? 3 : moves <= Math.ceil(opt * 1.3) ? 2 : 1; };
  // the last 3 levels of a world are optional challenges; passing 75% of a world opens the next
  const CHALLENGES = 3;
  const UNLOCK_SHARE = 0.75;
  const worldSize = (w) => LEVELS.filter((lv) => lv.w === w).length;
  const isChallenge = (i) => LEVELS[i].n >= worldSize(LEVELS[i].w) - CHALLENGES;
  const reward = (i) => 10 + LEVELS[i].w + (isChallenge(i) ? 10 : 0);
  const ROOM_INSET = 0.1;
  const ARROWS = ['↑', '→', '↓', '←'];

  /* ---------- progress ---------- */

  const STORE = 'cubesparadox.progress.v1';
  function loadProgress() {
    const base = { done: [], skipped: [], points: START_POINTS, lang: 'en', sound: true, vibrate: true,
      best: {}, ach: [], stats: { clean: 0, challenges: 0, hinted: {} }, daily: { last: -1, streak: 0, best: 0, done: [] }, resume: null };
    try {
      const v = JSON.parse(localStorage.getItem(STORE));
      if (v && Array.isArray(v.done)) { const out = Object.assign(base, v); out.stats = Object.assign(base.stats, v.stats || {}); out.daily = Object.assign(base.daily, v.daily || {}); return out; }
    } catch (e) { /* ignore */ }
    return base;
  }
  function saveProgress() {
    try { localStorage.setItem(STORE, JSON.stringify(progress)); } catch (e) { /* ignore */ }
  }
  const progress = loadProgress();
  const isDone = (i) => progress.done.indexOf(LEVELS[i].id) !== -1;
  const isSkipped = (i) => !isDone(i) && progress.skipped.indexOf(LEVELS[i].id) !== -1;
  const passed = (i) => isDone(i) || isSkipped(i);
  const worldLevels = (w) => LEVELS.map((_, i) => i).filter((i) => LEVELS[i].w === w);
  const passedIn = (w) => worldLevels(w).filter(passed).length;
  const unlockNeed = (w) => Math.ceil(worldSize(w) * UNLOCK_SHARE);
  const worldOpen = (w) => w === 0 || passedIn(w - 1) >= unlockNeed(w - 1);
  // inside an open world levels go in order; all challenges open after the last main level
  function isOpen(i) {
    const lv = LEVELS[i];
    if (!worldOpen(lv.w)) return false;
    if (lv.n === 0 || passed(i)) return true;
    if (!isChallenge(i)) return passed(i - 1);
    return passed(i - (lv.n - (worldSize(lv.w) - CHALLENGES - 1)));
  }
  function nextLevelIndex() {
    for (let i = 0; i < LEVELS.length; i++) if (isOpen(i) && !passed(i) && !isChallenge(i)) return i;
    for (let i = 0; i < LEVELS.length; i++) if (isOpen(i) && !passed(i)) return i;
    return 0;
  }
  const worldName = (w) => (I18N.WORLDS[w][progress.lang] || I18N.WORLDS[w].en)[0];
  const levelName = (i) => loc(LEVELS[i].name) || worldName(LEVELS[i].w) + ' ' + num(LEVELS[i].n + 1);
  const levelLabel = (i) => t('worldLevel', { w: num(LEVELS[i].w + 1), n: num(LEVELS[i].n + 1) });
  const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000 - DAY0) / 86400000);
  const dailyDef = (day) => DAILY[((day % DAILY.length) + DAILY.length) % DAILY.length];
  const curLabel = () => (G.daily ? S.daily : levelLabel(G.index));
  const curName = () => (G.daily ? dailyDate() : levelName(G.index));
  const curChallenge = () => G.daily || isChallenge(G.index);
  const totalStars = () => Object.values(progress.best).reduce((n, b) => n + (b.s || 0), 0);
  function dailyDate() {
    try { return new Date().toLocaleDateString(progress.lang, { day: 'numeric', month: 'long' }); } catch (e) { return ''; }
  }
  function haptic(kind) {
    if (!progress.vibrate) return;
    const H = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics;
    try {
      if (H) H.impact({ style: kind === 'win' ? 'HEAVY' : kind === 'goal' ? 'MEDIUM' : 'LIGHT' });
      else if (navigator.vibrate && navigator.userActivation && navigator.userActivation.hasBeenActive) navigator.vibrate(kind === 'win' ? [30, 40, 60] : kind === 'goal' ? 25 : 12);
    } catch (e) { /* no vibration here */ }
  }

  /* ---------- language ---------- */

  let S = I18N.STR[progress.lang] || I18N.STR.en;
  const num = (n) => (progress.lang === 'ar' ? String(n).replace(/\d/g, (d) => I18N.DIGITS_AR[d]) : String(n));
  function t(key, vars) {
    let s = S[key];
    if (vars) for (const k of Object.keys(vars)) s = s.replace('{' + k + '}', vars[k]);
    return s;
  }
  // level texts come in English and Arabic; the other languages look them up by their English text
  const loc = (v) => (v && typeof v === 'object' ? (v[progress.lang] || ((I18N.LEVEL_TEXT || {})[v.en] || {})[progress.lang] || v.en) : v || '');
  function roomName(L, key) {
    const p = L.rooms[key].palette;
    return key === L.root && p === 'violet' ? S.rooms.violetRoot : (S.rooms[p] || S.rooms.navy);
  }

  function applyLang() {
    S = I18N.STR[progress.lang] || I18N.STR.en;
    const html = document.documentElement;
    html.lang = progress.lang;
    html.dir = progress.lang === 'ar' ? 'rtl' : 'ltr';
    document.title = S.brand;
    for (const el of document.querySelectorAll('[data-t]')) el.textContent = S[el.dataset.t];
    for (const el of document.querySelectorAll('[data-t-label]')) el.setAttribute('aria-label', S[el.dataset.tLabel]);
    renderSettings();
    $('hint-cost').textContent = num(HINT_COST);
    $('skip-cost').textContent = num(SKIP_COST);
    updatePoints();
  }

  function updatePoints() {
    for (const el of document.querySelectorAll('.coin-count')) el.textContent = num(progress.points);
    const free = G.L && G.hintLeft > 0;
    $('hint-cost').textContent = free ? S.free : num(HINT_COST);
    $('hint-btn').classList.toggle('poor', !free && progress.points < HINT_COST);
    $('skip-btn').classList.toggle('poor', progress.points < SKIP_COST);
  }

  /* ---------- screens ---------- */

  let screen = 'main';
  function show(name) {
    screen = name;
    for (const s of document.querySelectorAll('.screen')) s.classList.toggle('active', s.id === name);
    if (name === 'main') renderMain();
    if (name === 'levels') renderMap();
    if (name === 'world') renderWorld(G.viewWorld || 0);
    if (name === 'achievements') renderAchievements();
    if (name === 'settings') renderSettings();
    if (name === 'play') requestAnimationFrame(resizeBoard);
    updatePoints();
  }

  function renderMain() {
    const n = LEVELS.filter((_, i) => isDone(i)).length;
    $('main-progress').textContent = t('progress', { n: num(n), t: num(LEVELS.length) });
    const allPassed = LEVELS.every((_, i) => passed(i));
    $('main-play-label').textContent = allPassed ? S.again : (progress.done.length || progress.skipped.length ? S.continue : S.play);
    $('main-play-level').textContent = progress.resume && progress.resume.i !== 'daily' && LEVELS[progress.resume.i] ? levelLabel(progress.resume.i) : levelLabel(nextLevelIndex());
    $('main-stars').textContent = num(totalStars());
    // today's daily level
    const d = today(), solved = progress.daily.last === d;
    $('daily-state').textContent = solved ? S.dailyDone : t('dailyReward', { n: num(DAILY_REWARD) });
    $('daily-streak').textContent = progress.daily.streak ? t('streak', { n: num(progress.daily.streak) }) : '';
    $('daily-card').classList.toggle('solved', solved);
  }

  // the map: one planet per world, along a winding trail from the first world to the last
  function renderMap() {
    const list = $('level-list');
    list.textContent = '';
    const W = Math.min(list.clientWidth || 340, 480), rtl = progress.lang === 'ar';
    const cur = LEVELS.every((_, i) => passed(i)) ? -1 : LEVELS[nextLevelIndex()].w;
    const trail = document.createElement('div');
    trail.className = 'trail';
    let currentNode = null, y = 64;
    const pts = [];
    I18N.WORLDS.forEach((world, w) => {
      const idx = worldLevels(w);
      if (!idx.length) return;
      const open = worldOpen(w), here = w === cur, r = here ? 60 : 42;
      const onLeft = (w % 2 === 0) !== rtl;
      const x = W * (onLeft ? 0.25 : 0.75);
      if (here) y += 22;
      const [title] = world[progress.lang] || world.en;
      const P = Render.PAL[world.palette] || Render.PAL.olive;
      const stars = idx.reduce((n, i) => n + ((progress.best[LEVELS[i].id] || {}).s || 0), 0);
      const solved = idx.filter(isDone).length;
      const node = document.createElement('button');
      node.className = 'map-node' + (open ? '' : ' locked') + (here ? ' current' : '');
      node.disabled = !open;
      node.style.top = (y - r) + 'px';
      node.style.height = 2 * r + 'px';
      node.innerHTML = '<span class="map-planet"></span><span class="map-text"><b></b><small></small></span>';
      const planet = node.querySelector('.map-planet');
      planet.innerHTML = Planets.marked(w, P.wall);
      planet.style.left = (x - r) + 'px';
      planet.style.width = planet.style.height = 2 * r + 'px';
      const text = node.querySelector('.map-text');
      text.style[onLeft ? 'left' : 'right'] = (onLeft ? x : W - x) + r + 12 + 'px';
      text.style[onLeft ? 'right' : 'left'] = '4px';
      text.style.textAlign = onLeft ? 'left' : 'right';
      node.querySelector('b').textContent = title;
      node.querySelector('small').textContent = open
        ? num(solved) + ' / ' + num(idx.length) + '  ·  ★ ' + num(stars)
        : t('unlockAt', { n: num(unlockNeed(w - 1)), w: num(w) });
      if (here) {
        const tag = document.createElement('span');
        tag.className = 'map-here';
        tag.textContent = S.youHere;
        tag.style.alignSelf = onLeft ? 'flex-start' : 'flex-end';
        text.appendChild(tag);
        const hero = document.createElement('span');
        hero.className = 'map-hero';
        hero.style.left = (x - 21) + 'px';
        hero.innerHTML = Planets.hero();
        node.appendChild(hero);
        currentNode = node;
      }
      node.setAttribute('aria-label', num(w + 1) + '. ' + title + (open ? '' : ', ' + S.locked));
      if (open) node.addEventListener('click', () => { Sfx.play('tap'); G.viewWorld = w; show('world'); });
      trail.appendChild(node);
      pts.push({ x, y, open });
      y += r + (w + 1 === cur ? 80 : 63);
    });
    const H = y - 20;
    trail.style.width = W + 'px';
    trail.style.height = H + 'px';
    let lit = '', dim = '', sky = '';
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i], my = (a.y + b.y) / 2;
      const seg = 'M' + a.x + ' ' + a.y + 'C' + a.x + ' ' + my + ' ' + b.x + ' ' + my + ' ' + b.x + ' ' + b.y;
      if (b.open) lit += seg; else dim += seg;
    }
    for (let i = 1; i * 90 < H; i++) sky += '<circle cx="' + ((i * 137) % W) + '" cy="' + (i * 90) + '" r="' + (1 + (i % 3) * 0.4) + '" opacity="' + (0.3 + (i % 3) * 0.1) + '"/>';
    const back = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    back.setAttribute('class', 'trail-back');
    back.setAttribute('width', W);
    back.setAttribute('height', H);
    back.setAttribute('aria-hidden', 'true');
    back.innerHTML = '<g fill="#ECF0DC">' + sky + '</g><path class="lit" d="' + lit + '"/><path class="dim" d="' + dim + '"/>';
    trail.insertBefore(back, trail.firstChild);
    list.appendChild(trail);
    if (currentNode) requestAnimationFrame(() => currentNode.scrollIntoView({ block: 'center' }));
  }

  // one world: a planet whose islands are the main levels, with the challenges as moons around it
  function renderWorld(w) {
    const world = I18N.WORLDS[w];
    const [title, desc] = world[progress.lang] || world.en;
    const P = Render.PAL[world.palette] || Render.PAL.olive;
    const idx = worldLevels(w);
    const current = nextLevelIndex();
    $('world-title').textContent = num(w + 1) + '. ' + title;
    $('world-desc').textContent = desc;
    $('world-bar').style.width = Math.round((idx.filter(isDone).length / idx.length) * 100) + '%';
    $('world-bar').style.background = P.wall;
    const grid = $('world-grid');
    grid.textContent = '';
    const rtl = progress.lang === 'ar';
    const W = Math.max(300, Math.min(grid.clientWidth || 335, (grid.clientHeight || 400) / 1.16, 440));
    const R = W * 0.46, orbit = R + W * 0.1, moon = 48, cx = W / 2, cy = orbit + moon / 2 + 2;
    const view = document.createElement('div');
    view.className = 'planet-view';
    view.style.width = W + 'px';
    view.style.height = cy + R + 10 + 'px';
    const disc = document.createElement('span');
    disc.className = 'planet-disc';
    disc.style.left = (cx - R) + 'px';
    disc.style.top = (cy - R) + 'px';
    disc.style.width = disc.style.height = 2 * R + 'px';
    disc.innerHTML = Planets.plain(P.wall);
    view.appendChild(disc);

    const place = (i, x, y, cls, size) => {
      const lv = LEVELS[i], ch = isChallenge(i), open = isOpen(i), d = isDone(i), sk = isSkipped(i);
      const b = document.createElement('button');
      b.className = cls + ' ' + (!open ? 'locked' : d ? 'done' : sk ? 'skipped' : i === current ? 'current' : 'open');
      b.style.left = x + 'px';
      b.style.top = y + 'px';
      b.style.width = b.style.height = size + 'px';
      b.style.setProperty('--isle', P.floor);
      b.textContent = num(lv.n + 1);
      const label = levelLabel(i) + (ch ? ', ' + S.challenge : '');
      b.setAttribute('aria-label', label + (!open ? ', ' + S.locked : d ? ', ' + S.solvedTag : sk ? ', ' + S.skippedTag : ''));
      if (open) b.addEventListener('click', () => startLevel(i));
      else b.disabled = true;
      if (d) {
        const s = (progress.best[lv.id] || {}).s || 1;
        const st = document.createElement('span');
        st.className = 'isle-stars';
        st.textContent = '★'.repeat(s) + '☆'.repeat(3 - s);
        st.setAttribute('aria-label', t('starsOf', { n: num(s) }));
        b.appendChild(st);
      }
      view.appendChild(b);
    };

    // the islands snake across the planet, row by row
    const main = idx.filter((i) => !isChallenge(i)), ROWS = [3, 4, 4, 3], rows = [];
    for (let left = main.length, r = 0; left > 0; r++) { const n = Math.min(left, ROWS[r % 4]); rows.push(n); left -= n; }
    const size = Math.max(44, W * 0.13), gapX = size * 1.4, gapY = size * 1.46;
    const spots = [];
    rows.forEach((n, r) => {
      for (let k = 0; k < n; k++) {
        const col = r % 2 ? n - 1 - k : k, x = cx + (col - (n - 1) / 2) * gapX;
        spots.push([rtl ? W - x : x, cy + (r - (rows.length - 1) / 2) * gapY]);
      }
    });
    const route = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    route.setAttribute('class', 'planet-route');
    route.setAttribute('width', W);
    route.setAttribute('height', cy + R + 10);
    route.setAttribute('aria-hidden', 'true');
    route.innerHTML = '<path d="M' + spots.map((p) => p.join(' ')).join('L') + '" stroke="' + P.floor + '"/>';
    view.appendChild(route);
    main.forEach((i, k) => place(i, spots[k][0], spots[k][1], 'isle', size));

    // the challenges orbit the planet
    idx.filter(isChallenge).forEach((i, k) => {
      const a = (k - 1) * 42 * Math.PI / 180 * (rtl ? -1 : 1);
      place(i, cx + orbit * Math.sin(a), cy - orbit * Math.cos(a), 'moon', moon);
    });
    const cap = document.createElement('span');
    cap.className = 'moon-caption';
    cap.textContent = S.challenge;
    cap.style.left = (cx + moon / 2 + 8) + 'px';
    view.appendChild(cap);
    grid.appendChild(view);

    const next = idx.filter((i) => isOpen(i) && !passed(i)).sort((a, b) => isChallenge(a) - isChallenge(b))[0];
    const play = $('world-play');
    play.style.display = next === undefined ? 'none' : '';
    if (next !== undefined) {
      play.textContent = S.play + ' · ' + t('level', { n: num(LEVELS[next].n + 1) });
      play.onclick = () => startLevel(next);
    }
  }

  /* ---------- game state ---------- */

  const renderer = new Render.Renderer($('board'));
  const G = {};
  // the sprout on the player's head sways for a moment after each step
  const SWAY_MS = 800;

  function startLevel(i) {
    G.daily = i === 'daily';
    G.def = G.daily ? dailyDef(today()) : LEVELS[i];
    const parsed = Engine.parseLevel(G.def);
    G.index = G.daily ? -1 : i;
    G.path = '';
    G.L = parsed.level;
    G.init = parsed.state;
    G.st = Engine.cloneState(parsed.state);
    G.history = [];
    G.moves = 0; G.undos = 0; G.depth = 0; G.maxDepth = 0;
    G.anim = null; G.queue = []; G.won = false; G.look = 1; G.stepAt = -1e9;
    G.focus = Engine.player(G.st).room;
    G.hint = null; G.hintLeft = 0; G.ideaShown = false; G.search = (G.search || 0) + 1;
    // states along the stored solution, so a hint is instant while the player is on it
    G.solAt = new Map();
    let st = G.init;
    const sol = G.def.sol || '';
    G.solAt.set(Engine.key(st), 0);
    for (let k = 0; k < sol.length; k++) {
      const r = Engine.move(st, G.L, 'URDL'.indexOf(sol[k]));
      if (!r) break;
      st = r.state;
      G.solAt.set(Engine.key(st), k + 1);
    }
    fillPlayTexts();
    show('play');
    updateHud();
    draw();
  }

  function fillPlayTexts() {
    $('play-sub').textContent = curLabel() + (!G.daily && curChallenge() ? ' · ' + S.challenge : '');
    $('play-name').textContent = curName();
    $('skip-btn').disabled = !!G.daily;
    buildLegend();
    showHintText();
  }

  function defaultTip() {
    const lv = G.def;
    if (G.daily) return S.dailyTip;
    if (lv.tip) return loc(lv.tip);
    // a world's first level explains the world's idea
    if (lv.n === 0) return (I18N.WORLDS[lv.w][progress.lang] || I18N.WORLDS[lv.w].en)[1];
    return S.swipe;
  }

  function showHintText(msg) {
    const el = $('hint');
    el.textContent = '';
    const idea = !msg && !(G.hint && G.hint.length) && G.ideaShown;
    el.classList.toggle('idea', !!idea);
    $('play').classList.toggle('has-idea', !!idea);
    if (msg) { el.textContent = msg; return; }
    if (idea) {
      const label = document.createElement('b'); label.textContent = S.hintIdea;
      el.appendChild(label);
      el.appendChild(document.createTextNode(loc(G.def.idea) || S.ideaNone));
      return;
    }
    if (G.hint && G.hint.length) {
      el.appendChild(document.createTextNode(S.hintFollow));
      const arr = document.createElement('span'); arr.className = 'hint-arrows';
      G.hint.forEach((d, k) => {
        const s = document.createElement(k === 0 ? 'b' : 'span');
        s.textContent = ARROWS[d];
        arr.appendChild(s);
      });
      el.appendChild(arr);
      return;
    }
    el.textContent = defaultTip();
  }

  function buildLegend() {
    const objs = G.init.objects;
    const goals = Object.values(G.L.rooms).flatMap((r) => r.goals);
    const items = [];
    if (objs.some((o) => o.kind === 'room')) items.push(['k-room', S.legendRoom]);
    if (objs.some((o) => o.kind === 'box')) items.push(['k-box', S.legendBox]);
    if (goals.some((g) => g.type === 'box')) items.push(['k-goal', S.legendGoal]);
    if (goals.some((g) => g.type === 'player')) items.push(['k-pgoal', S.legendPgoal]);
    const rooms = Object.values(G.L.rooms);
    if (rooms.some((r) => r.ice.some((row) => row.indexOf(true) !== -1))) items.push(['k-ice', S.legendIce]);
    if (G.L.plates.length) items.push(['k-plate', S.legendPlate], ['k-gate', S.legendGate]);
    if (rooms.some((r) => r.arrow.some((row) => row.some((v) => v >= 0)))) items.push(['k-arrow', S.legendArrow]);
    if (rooms.some((r) => r.hole.some((row) => row.indexOf(true) !== -1))) items.push(['k-hole', S.legendHole]);
    if (rooms.some((r) => r.crack.some((row) => row.indexOf(true) !== -1))) items.push(['k-crack', S.legendCrack]);
    if (objs.some((o) => o.color === 'teal')) items.push(['k-tealbox', S.legendTealBox]);
    if (objs.some((o) => o.color === 'violet')) items.push(['k-violetbox', S.legendVioletBox]);
    const el = $('legend');
    el.textContent = '';
    for (const [cls, label] of items) {
      const s = document.createElement('span'); s.className = 'key';
      const sw = document.createElement('span'); sw.className = 'sw ' + cls;
      s.appendChild(sw); s.appendChild(document.createTextNode(label));
      el.appendChild(s);
    }
  }

  function updateHud() {
    const st = G.st, L = G.L;
    $('moves').textContent = num(G.moves);
    const g = Engine.goalStatus(st, L);
    $('goals').textContent = num(g.done) + ' / ' + num(g.total);

    // where am I
    const room = L.rooms[G.focus];
    $('here-dot').style.background = Render.PAL[room.palette].wall;
    $('here-name').textContent = roomName(L, G.focus);
    const depthEl = $('depth');
    depthEl.hidden = G.depth <= 0;
    depthEl.textContent = t('depth', { n: num(G.depth) });

    // inside a box: mini map of the room around it
    const ro = Engine.roomObject(st, G.focus);
    const inside = !!ro && G.focus !== L.root;
    const loop = !!ro && ro.room === G.focus;
    $('legend').hidden = inside || loop;
    $('inside').hidden = !(inside || loop);
    if (inside || loop) {
      Render.drawMini($('mini'), st, L, ro.room, G.focus);
      if (loop) {
        $('inside-title').textContent = S.selfTitle;
        $('inside-msg').textContent = S.selfMsg;
      } else {
        $('inside-title').textContent = t('insideTitle', { room: roomName(L, G.focus) });
        $('inside-msg').textContent = t('insideMsg', { room: roomName(L, ro.room) });
      }
    }
    updatePoints();
  }

  /* ---------- drawing & animation ---------- */

  // inside a box the room takes 80% of the board, so the bigger room around it shows at the edges
  function boardRect(st, room) {
    const m = Engine.roomObject(st, room) ? renderer.size * ROOM_INSET : 0;
    return { x: m, y: m, s: renderer.size - 2 * m };
  }

  // the room whose exits should glow: the one you are in, unless it is a plain main room
  function exitsRoom() {
    return G.focus !== G.L.root || Engine.roomObject(G.st, G.focus) ? G.focus : null;
  }

  function draw(opts) {
    if (!renderer.size || !G.L) return;
    const R = boardRect(G.st, G.focus);
    renderer.render(G.st, G.L, G.focus, R, Object.assign({ look: G.look, doors: exitsRoom(), hole: R, peek: true, face: face(), sway: sway() }, opts || {}));
    if (G.hint && G.hint.length && !G.anim) {
      const p = Engine.player(G.st);
      renderer.drawHint(Render.cellRect(G.L, G.focus, R, p.x, p.y), G.hint[0]);
    }
  }

  // the player's face: blinking now and then, surprised just after walking into a box, happy on a win
  function face() {
    if (G.won) return 'happy';
    if (G.surpriseUntil && performance.now() < G.surpriseUntil) return 'surprise';
    return G.blinking ? 'blink' : null;
  }
  setInterval(() => {
    if (screen !== 'play' || G.anim || G.won || !G.L) return;
    G.blinking = true; draw();
    setTimeout(() => { G.blinking = false; if (!G.anim) draw(); }, 140);
  }, 3600);

  function resizeBoard() {
    const wrap = $('board-wrap');
    const size = Math.floor(Math.min(wrap.clientWidth, wrap.clientHeight || wrap.clientWidth));
    if (size > 0 && size !== renderer.size) { renderer.resize(size); draw(); }
  }

  // Rect of the room the player ends in, measured in the frame where the start room fills R.
  function cameraTarget(st, L, events, R) {
    let q = R;
    for (const ev of events) {
      const ro = Engine.roomObject(st, ev.type === 'exit' ? ev.from : ev.into);
      if (!ro) return R;
      q = ev.type === 'exit' ? Render.parentRect(L, q, ro) : Render.childRect(L, q, ro);
    }
    return q;
  }

  function lerpRect(a, b, t) { return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, s: a.s + (b.s - a.s) * t }; }

  // Build an animation from one state to another. `events` are the player's room changes.
  function transition(from, to, events, speed) {
    const L = G.L;
    const anchor = Engine.player(from).room;
    const R = boardRect(from, anchor), End = boardRect(to, Engine.player(to).room);
    const zoom = events.length > 0;
    const Q = zoom ? cameraTarget(to, L, events, R) : R;
    const k = End.s / Q.s;
    const Rp = { x: End.x + (R.x - Q.x) * k, y: End.y + (R.y - Q.y) * k, s: R.s * k };

    const slide = new Map(), skip = new Set(), movers = [];
    let layFrom = null, layTo = null, far = 1;
    for (const o of to.objects) {
      const p = Engine.byId(from, o.id);
      if (p.room === o.room && p.x === o.x && p.y === o.y) continue;
      const dist = Math.abs(p.x - o.x) + Math.abs(p.y - o.y);
      if (p.room === o.room && (dist === 1 || !zoom)) { slide.set(o.id, { fx: p.x, fy: p.y }); far = Math.max(far, dist); continue; }
      skip.add(o.id);
      if (o.kind === 'player') {
        movers.push({ obj: o, from: Render.cellRect(L, p.room, R, p.x, p.y), to: Render.cellRect(L, o.room, Q, o.x, o.y), mode: 'move' });
        continue;
      }
      layFrom = layFrom || Render.layoutRooms(from, L, anchor, R);
      layTo = layTo || Render.layoutRooms(to, L, anchor, R);
      const ra = layFrom.get(p.room), rb = layTo.get(o.room);
      const fromRect = ra ? Render.cellRect(L, p.room, ra, p.x, p.y) : null;
      const toRect = rb ? Render.cellRect(L, o.room, rb, o.x, o.y) : null;
      if (fromRect && toRect && p.room !== o.room) movers.push({ obj: o, from: fromRect, to: toRect, mode: 'move' });
      else movers.push({ obj: o, from: fromRect, to: toRect, mode: 'fade', dir: G.lastDir });
    }
    // boxes that dropped into a hole this move
    for (const p of from.objects) {
      if (Engine.byId(to, p.id)) continue;
      const hole = (to.filled || []).find((k) => (from.filled || []).indexOf(k) === -1);
      if (!hole) continue;
      const [room, xy] = hole.split(':'), [hx, hy] = xy.split(',').map(Number);
      layFrom = layFrom || Render.layoutRooms(from, L, anchor, R);
      layTo = layTo || Render.layoutRooms(to, L, anchor, R);
      const ra = layFrom.get(p.room), rb = layTo.get(room);
      if (ra && rb) movers.push({ obj: p, from: Render.cellRect(L, p.room, ra, p.x, p.y), to: Render.cellRect(L, room, rb, hx, hy), mode: 'drop' });
      far = Math.max(far, 2);
    }
    return {
      kind: 'move', t0: performance.now(), dur: (zoom ? ZOOM_MS : MOVE_MS * (1 + 0.45 * (far - 1))) * (speed || 1),
      from, to, anchor, R, Q, Rp, k, zoom, slide, skip, movers
    };
  }

  function frame(now) {
    const a = G.anim;
    if (!a) return;
    const t = Math.min(1, (now - a.t0) / a.dur);
    if (a.kind === 'bump') {
      const amt = Math.sin(Math.PI * t) * 0.16;
      const d = Engine.DIRS[a.dir];
      draw({ bump: { id: Engine.player(G.st).id, dx: d[0] * amt, dy: d[1] * amt } });
    } else if (a.kind === 'glow') {
      const hop = Math.abs(Math.sin(Math.PI * 2 * Math.min(1, t * 1.2))) * 0.28;
      draw({ glow: Math.sin(Math.PI * Math.min(1, t * 1.6)) * 0.9 + 0.1, bump: { id: Engine.player(G.st).id, dx: 0, dy: -hop } });
    } else {
      const e = ease(t);
      let cur = a.R;
      if (a.zoom) {
        // zoom about the fixed point of the two framings, at a steady rate (geometric scale)
        const s = a.R.s * Math.pow(a.k, e);
        const u = Math.abs(a.k - 1) < 1e-6 ? e : (s - a.R.s) / (a.Rp.s - a.R.s);
        cur = { x: a.R.x + (a.Rp.x - a.R.x) * u, y: a.R.y + (a.Rp.y - a.R.y) * u, s };
      }
      const f = cur.s / a.R.s;
      const toCur = (r) => ({ x: cur.x + (r.x - a.R.x) * f, y: cur.y + (r.y - a.R.y) * f, s: r.s * f });
      const overlay = [];
      for (const m of a.movers) {
        if (m.mode === 'move') {
          overlay.push({ obj: m.obj, rect: toCur(lerpRect(m.from, m.to, a.zoom ? e : easeOut(t))) });
        } else if (m.mode === 'drop') {
          // slide onto the hole, then sink into it
          const r = lerpRect(m.from, m.to, Math.min(1, easeOut(t) * 1.6));
          const sc = t < 0.55 ? 1 : 1 - (t - 0.55) / 0.45 * 0.6;
          overlay.push({ obj: m.obj, rect: toCur({ x: r.x + r.s * (1 - sc) / 2, y: r.y + r.s * (1 - sc) / 2, s: r.s * sc }), alpha: t < 0.55 ? 1 : 1 - (t - 0.55) / 0.45 });
        } else {
          if (m.from) {
            const d = Engine.DIRS[m.dir || 0];
            const ghost = { x: m.from.x + d[0] * m.from.s * easeOut(t), y: m.from.y + d[1] * m.from.s * easeOut(t), s: m.from.s };
            overlay.push({ obj: m.obj, rect: toCur(ghost), alpha: 1 - t });
          }
          if (m.to) {
            const sc = 0.55 + 0.45 * easeOut(t);
            const c = { x: m.to.x + m.to.s * (1 - sc) / 2, y: m.to.y + m.to.s * (1 - sc) / 2, s: m.to.s * sc };
            overlay.push({ obj: m.obj, rect: toCur(c), alpha: t });
          }
        }
      }
      renderer.render(a.to, G.L, a.anchor, cur, {
        look: G.look, slide: a.slide, slideT: easeOut(t), skip: a.skip, overlay, hole: lerpRect(cur, toCur(a.Q), e), peek: !a.zoom, sway: sway(),
        doors: a.zoom ? null : exitsRoom(), face: face()
      });
    }
    if (t < 1) { requestAnimationFrame(frame); return; }
    const done = a.after;
    G.anim = null;
    draw();
    if (done) done();
    if (!G.anim) pump();
  }

  // a step inside one room sets the sprout swaying
  function startSway(events, dir) {
    if (events.length) return;
    G.stepAt = performance.now();
    G.stepDir = dir;
    if (!G.swaying) { G.swaying = true; requestAnimationFrame(swayLoop); }
  }
  function sway() {
    const age = performance.now() - G.stepAt;
    return age < SWAY_MS ? { dir: G.stepDir, age } : null;
  }
  // keeps drawing while the sprout settles after the step itself is done
  function swayLoop() {
    const on = screen === 'play' && sway();
    if (!G.anim && screen === 'play') draw();
    if (on) requestAnimationFrame(swayLoop); else G.swaying = false;
  }

  function run(anim, after) {
    anim.after = after;
    G.anim = anim;
    requestAnimationFrame(frame);
  }

  /* ---------- actions ---------- */

  function pump() {
    if (G.anim || !G.queue.length || screen !== 'play') return;
    const act = G.queue.shift();
    if (act === 'undo') doUndo();
    else doMove(act);
  }

  function input(act) {
    if (screen !== 'play' || G.won || !$('modal').hidden) return;
    if (G.queue.length < 2) G.queue.push(act);
    pump();
  }

  function moveSound(before, res) {
    const after = res.state;
    if (res.events.some((e) => e.type === 'enter')) Sfx.play('enter');
    else if (res.events.length) Sfx.play('exit');
    else {
      let pushed = false, slid = false;
      for (const o of after.objects) {
        const p = Engine.byId(before, o.id);
        if (p.room !== o.room || p.x !== o.x || p.y !== o.y) {
          if (o.kind !== 'player') pushed = true;
          if (p.room === o.room && Math.abs(p.x - o.x) + Math.abs(p.y - o.y) > 1) slid = true;
        }
      }
      Sfx.play(slid ? 'slide' : pushed ? 'push' : 'step');
    }
    if (G.L.plates.length && !Engine.gatesOpen(before, G.L) && Engine.gatesOpen(after, G.L)) Sfx.play('gate');
    else if (Engine.goalStatus(after, G.L).done > Engine.goalStatus(before, G.L).done) Sfx.play('goal');
  }

  /* ---------- settings ---------- */

  function renderSettings() {
    const snd = $('set-sound');
    snd.setAttribute('aria-checked', progress.sound ? 'true' : 'false');
    snd.classList.toggle('on', !!progress.sound);
    $('set-sound-state').textContent = progress.sound ? S.on : S.off;
    for (const [id, on] of [['set-vibrate', progress.vibrate]]) {
      $(id).setAttribute('aria-checked', on ? 'true' : 'false');
      $(id).classList.toggle('on', !!on);
      $(id + '-state').textContent = on ? S.on : S.off;
    }
    for (const b of document.querySelectorAll('[data-lang]')) {
      const on = b.dataset.lang === progress.lang;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  function doMove(dir) {
    G.look = dir;
    G.lastDir = dir;
    const res = Engine.move(G.st, G.L, dir);
    if (!res) {
      Sfx.play('bump'); haptic('bump');
      run({ kind: 'bump', dir, t0: performance.now(), dur: 140 });
      return;
    }
    moveSound(G.st, res);
    if (res.events.some((e) => e.type === 'enter')) G.surpriseUntil = performance.now() + 700;
    if (Engine.goalStatus(res.state, G.L).done > Engine.goalStatus(G.st, G.L).done) haptic('goal');
    G.path += 'URDL'[dir];
    saveResume();
    // following the hint uses it up; stepping off it hides the arrows (the rest stays paid for)
    if (G.hint) {
      if (G.hint[0] === dir) { G.hint.shift(); G.hintLeft--; if (!G.hint.length) G.hint = null; }
      else G.hint = null;
      showHintText();
    }
    const from = G.st;
    G.history.push({ st: from, depth: G.depth, events: res.events, dir });
    for (const ev of res.events) G.depth += ev.type === 'enter' ? 1 : -1;
    if (G.depth < 0) G.depth = 0;
    G.maxDepth = Math.max(G.maxDepth, G.depth);
    G.moves++;
    const anim = transition(from, res.state, res.events);
    startSway(res.events, dir);
    G.st = res.state;
    G.focus = Engine.player(G.st).room;
    updateHud();
    run(anim, checkWin);
  }

  function doUndo() {
    const h = G.history.pop();
    if (!h) return;
    const back = h.events.slice().reverse().map((ev) => ev.type === 'enter' ? { type: 'exit', from: ev.into } : { type: 'enter', into: ev.from });
    G.lastDir = (h.dir + 2) % 4;
    const anim = transition(G.st, h.st, back, UNDO_SPEED);
    Sfx.play('undo');
    G.st = h.st;
    G.depth = h.depth;
    G.moves = Math.max(0, G.moves - 1);
    G.undos++;
    G.path = G.path.slice(0, -1);
    saveResume();
    G.focus = Engine.player(G.st).room;
    if (G.hint) { G.hint = null; showHintText(); }
    updateHud();
    run(anim);
  }

  function restart() {
    if (!G.L) return;
    G.queue = [];
    G.anim = null;
    G.st = Engine.cloneState(G.init);
    G.history = []; G.moves = 0; G.depth = 0; G.won = false; G.look = 1;
    G.focus = Engine.player(G.st).room;
    G.hint = null; G.search++;
    G.path = ''; saveResume();
    showHintText();
    updateHud();
    draw();
  }

  function checkWin() {
    if (!Engine.isWin(G.st, G.L)) return;
    G.won = true;
    G.queue = [];
    G.hint = null;
    G.earned = 0;
    G.stars = starsFor(G.def, G.moves);
    progress.resume = null;
    if (G.daily) {
      const d = today();
      if (progress.daily.last !== d) {
        progress.daily.streak = progress.daily.last === d - 1 ? progress.daily.streak + 1 : 1;
        progress.daily.best = Math.max(progress.daily.best, progress.daily.streak);
        progress.daily.last = d;
        progress.daily.done.push(d);
        G.earned = DAILY_REWARD + (G.undos === 0 ? CLEAN_BONUS : 0);
      }
    } else {
      const id = G.def.id;
      const prev = progress.best[id];
      if (!prev || G.moves < prev.m) progress.best[id] = { m: G.moves, s: G.stars };
      if (progress.done.indexOf(id) === -1) {
        progress.done.push(id);
        G.earned = reward(G.index) + (G.undos === 0 ? CLEAN_BONUS : 0);
        if (isChallenge(G.index)) progress.stats.challenges++;
      }
    }
    if (G.undos === 0) progress.stats.clean++;
    progress.points += G.earned;
    G.newAch = checkAchievements();
    saveProgress();
    Sfx.play('win'); haptic('win');
    run({ kind: 'glow', t0: performance.now(), dur: 650 }, () => setTimeout(showWin, 120));
  }

  function showWin() {
    $('win-sub').textContent = curLabel() + ' · ' + curName();
    const ws = $('win-stars');
    ws.textContent = '★'.repeat(G.stars) + '☆'.repeat(3 - G.stars);
    ws.setAttribute('aria-label', t('starsOf', { n: num(G.stars) }));
    $('win-par').textContent = G.stars < 3 ? t('par', { n: num((G.def.sol || '').length) }) : S.perfect;
    const e = $('win-earned');
    e.textContent = G.earned ? t('earned', { n: num(G.earned) }) : S.noEarn;
    e.classList.toggle('none', !G.earned);
    $('win-moves').textContent = num(G.moves);
    $('win-undos').textContent = num(G.undos);
    $('win-depth').textContent = num(G.maxDepth);
    const last = G.daily || G.index >= LEVELS.length - 1 || !isOpen(G.index + 1);
    $('win-next').textContent = G.daily ? S.home : last ? S.levels : S.next;
    show('win');
    for (const a of G.newAch) toast(a);
  }

  /* ---------- hints ---------- */

  // Breadth-first search from the current state, in small slices so the screen stays smooth.
  // Stops at a win, or at any state on the stored solution (then finishes along it).
  function searchFrom(st0, L, cap, token, done) {
    const sol = (G.def.sol || '').split('').map((c) => 'URDL'.indexOf(c));
    const rest = (k) => { const j = G.solAt.get(k); return j === undefined ? null : sol.slice(j); };
    const seen = new Map([[Engine.key(st0), null]]);
    const queue = [st0];
    let i = 0;
    function path(k) {
      const out = [];
      for (let e = seen.get(k); e; e = seen.get(e.prev)) out.push(e.d);
      return out.reverse();
    }
    function slice() {
      if (token !== G.search) return;
      const end = Math.min(queue.length, i + 1500);
      for (; i < end; i++) {
        const st = queue[i], sk = Engine.key(st);
        for (let d = 0; d < 4; d++) {
          const res = Engine.move(st, L, d);
          if (!res) continue;
          const k = Engine.key(res.state);
          if (seen.has(k)) continue;
          seen.set(k, { prev: sk, d });
          if (Engine.isWin(res.state, L)) { done(path(k)); return; }
          const r = rest(k);
          if (r) { done(path(k).concat(r)); return; }
          queue.push(res.state);
        }
      }
      if (i >= queue.length) { done(null); return; }
      if (seen.size > cap) { done('cap'); return; }
      setTimeout(slice, 0);
    }
    slice();
  }

  // first step: the idea in one sentence (cheap); second step: the next moves
  function openHints() {
    if (screen !== 'play' || G.won || G.anim || G.busy || G.hint) return;
    if (!G.daily) progress.stats.hinted[G.def.w] = true;
    $('hint-idea-cost').textContent = G.ideaShown ? S.free : num(IDEA_COST);
    $('hint-moves-cost').textContent = G.hintLeft > 0 ? S.free : num(HINT_COST);
    $('hint-sheet').hidden = false;
  }
  function askIdea() {
    $('hint-sheet').hidden = true;
    if (!G.ideaShown) {
      if (progress.points < IDEA_COST) { showHintText(S.noPoints); return; }
      progress.points -= IDEA_COST; G.ideaShown = true; saveProgress(); updatePoints();
    }
    Sfx.play('hint');
    showHintText();
  }

  function askHint() {
    $('hint-sheet').hidden = true;
    if (screen !== 'play' || G.won || G.anim || G.busy) return;
    if (G.hint) return;
    const free = G.hintLeft > 0;
    if (!free && progress.points < HINT_COST) { showHintText(S.noPoints); return; }
    const give = (dirs) => {
      G.busy = false;
      if (dirs === null) { showHintText(S.hintStuck); return; }
      if (dirs === 'cap') { showHintText(S.hintRestart); return; }
      if (!free) { progress.points -= HINT_COST; G.hintLeft = HINT_STEPS; saveProgress(); }
      G.hint = dirs.slice(0, G.hintLeft);
      Sfx.play('hint');
      if (!G.hint.length) G.hint = null;
      showHintText();
      updatePoints();
      draw();
    };
    const k = G.solAt.get(Engine.key(G.st));
    const sol = G.def.sol || '';
    if (k !== undefined) { give(sol.slice(k).split('').map((c) => 'URDL'.indexOf(c))); return; }
    G.busy = true;
    showHintText(S.hintThinking);
    const token = G.search;
    searchFrom(G.st, G.L, 150000, token, (r) => { if (token === G.search) give(r); else G.busy = false; });
  }

  /* ---------- skip ---------- */

  function confirmBox(text, yesLabel, onYes) {
    $('modal-text').textContent = text;
    $('modal-yes').textContent = yesLabel;
    $('modal').hidden = false;
    $('modal-yes').onclick = () => { $('modal').hidden = true; onYes(); };
    $('modal-no').onclick = () => { $('modal').hidden = true; };
    $('modal-yes').focus();
  }

  function askSkip() {
    if (screen !== 'play' || G.won || G.daily) return;
    if (progress.points < SKIP_COST) { showHintText(S.noPoints); return; }
    confirmBox(t('skipAsk', { c: num(SKIP_COST) }), S.skipYes, () => {
      progress.points -= SKIP_COST;
      const id = G.def.id;
      progress.resume = null;
      if (progress.skipped.indexOf(id) === -1) progress.skipped.push(id);
      saveProgress();
      G.search++;
      if (G.index < LEVELS.length - 1 && isOpen(G.index + 1)) startLevel(G.index + 1); else show('levels');
    });
  }

  /* ---------- wiring ---------- */

  $('open-settings').addEventListener('click', () => { Sfx.play('tap'); show('settings'); });
  $('settings-back').addEventListener('click', () => show('main'));
  $('set-privacy').addEventListener('click', () => { Sfx.play('tap'); $('privacy-sheet').hidden = false; });
  $('privacy-close').addEventListener('click', () => { $('privacy-sheet').hidden = true; });
  $('set-sound').addEventListener('click', () => {
    progress.sound = !progress.sound;
    Sfx.setEnabled(progress.sound);
    saveProgress();
    renderSettings();
    Sfx.play('tap');
  });
  // one button per language in Settings
  for (const [code, name] of I18N.LANGS) {
    const b = document.createElement('button');
    b.dataset.lang = code;
    b.lang = code;
    b.textContent = name;
    $('lang-list').appendChild(b);
  }
  for (const b of document.querySelectorAll('[data-lang]')) {
    b.addEventListener('click', () => {
      progress.lang = b.dataset.lang;
      saveProgress();
      applyLang();
      Sfx.play('tap');
    });
  }
  $('main-play').addEventListener('click', () => {
    const r = progress.resume;
    if (r && (r.i === 'daily' ? r.day === today() : LEVELS[r.i] && !isDone(r.i))) { startLevel(r.i); jump(r.path.split('').map((c) => 'URDL'.indexOf(c))); G.path = r.path; return; }
    startLevel(nextLevelIndex());
  });
  $('daily-card').addEventListener('click', () => { Sfx.play('tap'); startLevel('daily'); });
  $('open-achievements').addEventListener('click', () => { Sfx.play('tap'); show('achievements'); });
  $('achievements-back').addEventListener('click', () => show('main'));
  $('world-back').addEventListener('click', () => show('levels'));
  $('hint-idea').addEventListener('click', askIdea);
  $('hint-moves').addEventListener('click', askHint);
  $('hint-close').addEventListener('click', () => { $('hint-sheet').hidden = true; });
  $('set-vibrate').addEventListener('click', () => {
    progress.vibrate = !progress.vibrate; saveProgress(); renderSettings(); haptic('goal');
  });
  $('main-levels').addEventListener('click', () => show('levels'));
  $('levels-back').addEventListener('click', () => show('main'));
  $('play-back').addEventListener('click', () => { G.search++; G.busy = false; if (G.daily) show('main'); else { G.viewWorld = G.def.w; show('world'); } });
  $('undo').addEventListener('click', () => input('undo'));
  $('restart').addEventListener('click', restart);
  $('hint-btn').addEventListener('click', openHints);
  $('skip-btn').addEventListener('click', askSkip);
  $('win-next').addEventListener('click', () => {
    if (G.daily) show('main');
    else if (G.index < LEVELS.length - 1 && isOpen(G.index + 1)) startLevel(G.index + 1); else show('levels');
  });
  $('win-again').addEventListener('click', () => startLevel(G.daily ? 'daily' : G.index));
  $('win-levels').addEventListener('click', () => show('levels'));

  const KEYS = { ArrowUp: 0, KeyW: 0, ArrowRight: 1, KeyD: 1, ArrowDown: 2, KeyS: 2, ArrowLeft: 3, KeyA: 3 };
  window.addEventListener('keydown', (e) => {
    if (!$('modal').hidden) { if (e.code === 'Escape') $('modal').hidden = true; return; }
    if (screen !== 'play') return;
    if (e.code in KEYS) { e.preventDefault(); input(KEYS[e.code]); }
    else if (e.code === 'KeyZ' || e.code === 'KeyU' || e.code === 'Backspace') { e.preventDefault(); input('undo'); }
    else if (e.code === 'KeyR') restart();
    else if (e.code === 'KeyH') openHints();
    else if (e.code === 'Escape') show('levels');
  });

  // swipe anywhere on the play screen (buttons keep their own taps)
  let touch = null;
  const playEl = $('play');
  playEl.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    touch = { x: e.clientX, y: e.clientY, id: e.pointerId };
  });
  playEl.addEventListener('pointerup', (e) => {
    if (!touch || e.pointerId !== touch.id) return;
    const dx = e.clientX - touch.x, dy = e.clientY - touch.y;
    touch = null;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) {
      const now = performance.now();
      if (e.target.closest('#board-wrap') && G.lastTap && now - G.lastTap < 320) { G.lastTap = 0; input('undo'); }
      else G.lastTap = now;
      return;
    }
    input(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
  });
  playEl.addEventListener('pointercancel', () => { touch = null; });

  if (window.ResizeObserver) new ResizeObserver(resizeBoard).observe($('board-wrap'));
  window.addEventListener('resize', resizeBoard);
  window.addEventListener('resize', () => { if (screen === 'levels') renderMap(); if (screen === 'world') renderWorld(G.viewWorld || 0); });

  // Android back button (Capacitor App plugin)
  const App = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App;
  if (App && App.addListener) {
    App.addListener('backButton', () => {
      if (!$('modal').hidden) $('modal').hidden = true;
      else if (!$('privacy-sheet').hidden) $('privacy-sheet').hidden = true;
      else if (!$('hint-sheet').hidden) $('hint-sheet').hidden = true;
      else if (screen === 'play' || screen === 'win') { G.search++; G.busy = false; if (G.daily) show('main'); else { G.viewWorld = G.def.w; show('world'); } }
      else if (screen === 'world') show('levels');
      else if (screen === 'levels' || screen === 'settings' || screen === 'achievements') show('main');
      else if (App.exitApp) App.exitApp();
    });
  }

  // Applies moves at once with no animation (for tests and store screenshots).
  function jump(dirs) {
    for (const d of dirs) {
      const res = Engine.move(G.st, G.L, d);
      if (!res) continue;
      G.history.push({ st: G.st, depth: G.depth, events: res.events, dir: d });
      for (const ev of res.events) G.depth += ev.type === 'enter' ? 1 : -1;
      if (G.depth < 0) G.depth = 0;
      G.maxDepth = Math.max(G.maxDepth, G.depth);
      G.moves++; G.look = d; G.st = res.state;
    }
    G.focus = Engine.player(G.st).room;
    updateHud();
    draw();
  }

  // hook for automated browser tests
  /* ---------- resume, achievements, toasts ---------- */

  function saveResume() {
    progress.resume = G.won ? null : { i: G.daily ? 'daily' : G.index, day: today(), path: G.path };
    saveProgress();
  }

  const ACH = [
    ['first', () => progress.done.length >= 1],
    ['world1', () => worldLevels(0).every(isDone)],
    ['half', () => progress.done.length >= Math.floor(LEVELS.length / 2)],
    ['all', () => LEVELS.every((_, i) => isDone(i))],
    ['deep3', () => G.maxDepth >= 3],
    ['clean10', () => progress.stats.clean >= 10],
    ['stars30', () => totalStars() >= 30],
    ['perfect10', () => Object.values(progress.best).filter((b) => b.s === 3).length >= 10],
    ['challenger', () => progress.stats.challenges >= 5],
    ['noHintWorld', () => I18N.WORLDS.some((_, w) => worldLevels(w).length && worldLevels(w).every(isDone) && !progress.stats.hinted[w])],
    ['daily1', () => progress.daily.done.length >= 1],
    ['streak7', () => progress.daily.best >= 7]
  ];
  function checkAchievements() {
    const got = [];
    for (const [id, test] of ACH) {
      if (progress.ach.indexOf(id) !== -1) continue;
      let ok = false;
      try { ok = test(); } catch (e) { ok = false; }
      if (ok) { progress.ach.push(id); got.push(id); }
    }
    return got;
  }
  function renderAchievements() {
    const list = $('ach-list');
    list.textContent = '';
    $('ach-count').textContent = num(progress.ach.length) + ' / ' + num(ACH.length);
    for (const [id] of ACH) {
      const got = progress.ach.indexOf(id) !== -1;
      const row = document.createElement('div');
      row.className = 'ach' + (got ? ' got' : '');
      row.innerHTML = '<span class="ach-icon" aria-hidden="true"></span><span class="ach-text"><b></b><small></small></span>';
      row.querySelector('b').textContent = S.ach[id][0];
      row.querySelector('small').textContent = S.ach[id][1];
      list.appendChild(row);
    }
  }
  let toastTimer = null;
  function toast(id) {
    const el = $('toast');
    el.querySelector('b').textContent = S.achUnlocked;
    el.querySelector('span').textContent = S.ach[id][0];
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
  }

  // hook for automated browser tests
  document.querySelector('.logo').innerHTML = Planets.logo();
  window.__matryo = { G, startLevel, input, show, restart, askHint, progress, jump, today };

  Sfx.setEnabled(progress.sound);
  applyLang();
  show('main');
})();
