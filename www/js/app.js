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
  // the last 3 levels of a world are optional challenges; passing 75% of a world opens the next
  const CHALLENGES = 3;
  const UNLOCK_SHARE = 0.75;
  const worldSize = (w) => LEVELS.filter((lv) => lv.w === w).length;
  const isChallenge = (i) => LEVELS[i].n >= worldSize(LEVELS[i].w) - CHALLENGES;
  const reward = (i) => 10 + LEVELS[i].w + (isChallenge(i) ? 10 : 0);
  const ARROWS = ['↑', '→', '↓', '←'];

  /* ---------- progress ---------- */

  const STORE = 'cubesparadox.progress.v1';
  function loadProgress() {
    const base = { done: [], skipped: [], points: START_POINTS, lang: 'en' };
    try {
      const v = JSON.parse(localStorage.getItem(STORE));
      if (v && Array.isArray(v.done)) return Object.assign(base, v);
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

  /* ---------- language ---------- */

  let S = I18N.STR[progress.lang] || I18N.STR.en;
  const num = (n) => (progress.lang === 'ar' ? String(n).replace(/\d/g, (d) => I18N.DIGITS_AR[d]) : String(n));
  function t(key, vars) {
    let s = S[key];
    if (vars) for (const k of Object.keys(vars)) s = s.replace('{' + k + '}', vars[k]);
    return s;
  }
  const loc = (v) => (v && typeof v === 'object' ? (v[progress.lang] || v.en) : v || '');
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
    $('lang').textContent = S.lang;
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
    if (name === 'levels') renderLevels();
    if (name === 'play') requestAnimationFrame(resizeBoard);
    updatePoints();
  }

  function renderMain() {
    const n = LEVELS.filter((_, i) => isDone(i)).length;
    $('main-progress').textContent = t('progress', { n: num(n), t: num(LEVELS.length) });
    const allPassed = LEVELS.every((_, i) => passed(i));
    $('main-play-label').textContent = allPassed ? S.again : (progress.done.length || progress.skipped.length ? S.continue : S.play);
    $('main-play-level').textContent = levelLabel(nextLevelIndex());
  }

  const LOCK_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
  const CHECK_SVG = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>';

  function renderLevels() {
    const list = $('level-list');
    list.textContent = '';
    const current = nextLevelIndex();
    let currentTile = null;
    I18N.WORLDS.forEach((world, w) => {
      const idx = worldLevels(w);
      if (!idx.length) return;
      const solved = idx.filter(isDone).length;
      const open = worldOpen(w);
      const [title, desc] = world[progress.lang] || world.en;
      const P = Render.PAL[world.palette] || Render.PAL.navy;
      const card = document.createElement('div');
      card.className = 'chapter' + (open ? '' : ' locked');
      card.innerHTML = '<div class="chapter-icon" aria-hidden="true"><div><span></span></div></div>' +
        '<div class="chapter-body"><div class="chapter-head"><h2></h2><span class="muted"></span></div><p class="muted"></p><div class="bar"><div></div></div></div>';
      const icon = card.querySelector('.chapter-icon');
      icon.style.background = P.wall; icon.style.boxShadow = '0 4px 0 ' + P.shadow;
      icon.querySelector('div').style.background = P.floor;
      card.querySelector('h2').textContent = num(w + 1) + '. ' + title;
      card.querySelector('.chapter-head span').textContent = num(solved) + ' / ' + num(idx.length);
      card.querySelector('p').textContent = open ? desc : t('unlockAt', { n: num(unlockNeed(w - 1)), w: num(w) });
      const bar = card.querySelector('.bar div');
      bar.style.width = Math.round((solved / idx.length) * 100) + '%';
      bar.style.background = P.wall;
      list.appendChild(card);

      const grid = document.createElement('div');
      grid.className = 'level-grid';
      for (const i of idx) {
        const lv = LEVELS[i];
        const b = document.createElement('button');
        const ch = isChallenge(i);
        const n = document.createElement('span'); n.className = 'num'; n.textContent = num(lv.n + 1);
        const name = document.createElement('span'); name.className = 'name';
        name.textContent = ch ? S.challenge : loc(lv.name);
        const label = levelLabel(i) + (ch ? ', ' + S.challenge : '');
        if (ch) b.classList.add('challenge');
        if (!isOpen(i)) {
          b.className = 'tile locked' + (ch ? ' challenge' : ''); b.disabled = true;
          b.setAttribute('aria-label', label + ', ' + S.locked);
          b.innerHTML = LOCK_SVG;
          name.textContent = num(lv.n + 1);
          b.appendChild(name);
        } else {
          const d = isDone(i), sk = isSkipped(i);
          b.className = 'tile ' + (d ? 'done' : sk ? 'skipped' : (i === current ? 'current' : 'open')) + (ch ? ' challenge' : '');
          b.setAttribute('aria-label', label + (d ? ', ' + S.solvedTag : sk ? ', ' + S.skippedTag : ''));
          if (d) {
            const badge = document.createElement('span'); badge.className = 'badge';
            badge.innerHTML = CHECK_SVG;
            b.appendChild(badge);
          }
          b.appendChild(n); b.appendChild(name);
          b.addEventListener('click', () => startLevel(i));
          if (i === current) currentTile = b;
        }
        grid.appendChild(b);
      }
      list.appendChild(grid);
    });
    if (currentTile) requestAnimationFrame(() => currentTile.scrollIntoView({ block: 'center' }));
  }

  /* ---------- game state ---------- */

  const renderer = new Render.Renderer($('board'));
  const G = {};

  function startLevel(i) {
    const parsed = Engine.parseLevel(LEVELS[i]);
    G.index = i;
    G.L = parsed.level;
    G.init = parsed.state;
    G.st = Engine.cloneState(parsed.state);
    G.history = [];
    G.moves = 0; G.undos = 0; G.depth = 0; G.maxDepth = 0;
    G.anim = null; G.queue = []; G.won = false; G.look = 1;
    G.focus = Engine.player(G.st).room;
    G.hint = null; G.hintLeft = 0; G.search = (G.search || 0) + 1;
    // states along the stored solution, so a hint is instant while the player is on it
    G.solAt = new Map();
    let st = G.init;
    const sol = LEVELS[i].sol || '';
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
    $('play-sub').textContent = levelLabel(G.index) + (isChallenge(G.index) ? ' · ' + S.challenge : '');
    $('play-name').textContent = levelName(G.index);
    buildLegend();
    showHintText();
  }

  function defaultTip() {
    const lv = LEVELS[G.index];
    if (lv.tip) return loc(lv.tip);
    // a world's first level explains the world's idea
    if (lv.n === 0) return (I18N.WORLDS[lv.w][progress.lang] || I18N.WORLDS[lv.w].en)[1];
    return S.swipe;
  }

  function showHintText(msg) {
    const el = $('hint');
    el.textContent = '';
    if (msg) { el.textContent = msg; return; }
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

  function boardRect() { return { x: 0, y: 0, s: renderer.size }; }

  function draw(opts) {
    if (!renderer.size || !G.L) return;
    renderer.render(G.st, G.L, G.focus, boardRect(), Object.assign({ look: G.look }, opts || {}));
    if (G.hint && G.hint.length && !G.anim) {
      const p = Engine.player(G.st);
      renderer.drawHint(Render.cellRect(G.L, G.focus, boardRect(), p.x, p.y), G.hint[0]);
    }
  }

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
    const L = G.L, R = boardRect();
    const anchor = Engine.player(from).room;
    const zoom = events.length > 0;
    const Q = zoom ? cameraTarget(to, L, events, R) : R;
    const k = R.s / Q.s;
    const Rp = { x: R.x + (R.x - Q.x) * k, y: R.y + (R.y - Q.y) * k, s: R.s * k };

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
    return {
      kind: 'move', t0: performance.now(), dur: (zoom ? ZOOM_MS : MOVE_MS * (1 + 0.45 * (far - 1))) * (speed || 1),
      from, to, anchor, R, Rp, k, zoom, slide, skip, movers
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
      draw({ glow: Math.sin(Math.PI * Math.min(1, t * 1.6)) * 0.9 + 0.1 });
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
        look: G.look, slide: a.slide, slideT: easeOut(t), skip: a.skip, overlay
      });
    }
    if (t < 1) { requestAnimationFrame(frame); return; }
    const done = a.after;
    G.anim = null;
    draw();
    if (done) done();
    if (!G.anim) pump();
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

  function doMove(dir) {
    G.look = dir;
    G.lastDir = dir;
    const res = Engine.move(G.st, G.L, dir);
    if (!res) {
      run({ kind: 'bump', dir, t0: performance.now(), dur: 140 });
      return;
    }
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
    G.st = h.st;
    G.depth = h.depth;
    G.moves = Math.max(0, G.moves - 1);
    G.undos++;
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
    showHintText();
    updateHud();
    draw();
  }

  function checkWin() {
    if (!Engine.isWin(G.st, G.L)) return;
    G.won = true;
    G.queue = [];
    G.hint = null;
    const id = LEVELS[G.index].id;
    G.earned = 0;
    if (progress.done.indexOf(id) === -1) {
      progress.done.push(id);
      G.earned = reward(G.index);
      progress.points += G.earned;
      saveProgress();
    }
    run({ kind: 'glow', t0: performance.now(), dur: 650 }, () => setTimeout(showWin, 120));
  }

  function showWin() {
    $('win-sub').textContent = levelLabel(G.index) + ' · ' + levelName(G.index);
    const e = $('win-earned');
    e.textContent = G.earned ? t('earned', { n: num(G.earned) }) : S.noEarn;
    e.classList.toggle('none', !G.earned);
    $('win-moves').textContent = num(G.moves);
    $('win-undos').textContent = num(G.undos);
    $('win-depth').textContent = num(G.maxDepth);
    const last = G.index >= LEVELS.length - 1 || !isOpen(G.index + 1);
    $('win-next').textContent = last ? S.levels : S.next;
    show('win');
  }

  /* ---------- hints ---------- */

  // Breadth-first search from the current state, in small slices so the screen stays smooth.
  // Stops at a win, or at any state on the stored solution (then finishes along it).
  function searchFrom(st0, L, cap, token, done) {
    const sol = (LEVELS[G.index].sol || '').split('').map((c) => 'URDL'.indexOf(c));
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

  function askHint() {
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
      if (!G.hint.length) G.hint = null;
      showHintText();
      updatePoints();
      draw();
    };
    const k = G.solAt.get(Engine.key(G.st));
    const sol = LEVELS[G.index].sol || '';
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
    if (screen !== 'play' || G.won) return;
    if (progress.points < SKIP_COST) { showHintText(S.noPoints); return; }
    confirmBox(t('skipAsk', { c: num(SKIP_COST) }), S.skipYes, () => {
      progress.points -= SKIP_COST;
      const id = LEVELS[G.index].id;
      if (progress.skipped.indexOf(id) === -1) progress.skipped.push(id);
      saveProgress();
      G.search++;
      if (G.index < LEVELS.length - 1 && isOpen(G.index + 1)) startLevel(G.index + 1); else show('levels');
    });
  }

  /* ---------- wiring ---------- */

  $('lang').addEventListener('click', () => {
    progress.lang = progress.lang === 'ar' ? 'en' : 'ar';
    saveProgress();
    applyLang();
    renderMain();
  });
  $('main-play').addEventListener('click', () => startLevel(nextLevelIndex()));
  $('main-levels').addEventListener('click', () => show('levels'));
  $('levels-back').addEventListener('click', () => show('main'));
  $('play-back').addEventListener('click', () => { G.search++; G.busy = false; show('levels'); });
  $('undo').addEventListener('click', () => input('undo'));
  $('restart').addEventListener('click', restart);
  $('hint-btn').addEventListener('click', askHint);
  $('skip-btn').addEventListener('click', askSkip);
  $('win-next').addEventListener('click', () => {
    if (G.index < LEVELS.length - 1 && isOpen(G.index + 1)) startLevel(G.index + 1); else show('levels');
  });
  $('win-again').addEventListener('click', () => startLevel(G.index));
  $('win-levels').addEventListener('click', () => show('levels'));

  const KEYS = { ArrowUp: 0, KeyW: 0, ArrowRight: 1, KeyD: 1, ArrowDown: 2, KeyS: 2, ArrowLeft: 3, KeyA: 3 };
  window.addEventListener('keydown', (e) => {
    if (!$('modal').hidden) { if (e.code === 'Escape') $('modal').hidden = true; return; }
    if (screen !== 'play') return;
    if (e.code in KEYS) { e.preventDefault(); input(KEYS[e.code]); }
    else if (e.code === 'KeyZ' || e.code === 'KeyU' || e.code === 'Backspace') { e.preventDefault(); input('undo'); }
    else if (e.code === 'KeyR') restart();
    else if (e.code === 'KeyH') askHint();
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
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
    input(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
  });
  playEl.addEventListener('pointercancel', () => { touch = null; });

  if (window.ResizeObserver) new ResizeObserver(resizeBoard).observe($('board-wrap'));
  window.addEventListener('resize', resizeBoard);

  // Android back button (Capacitor App plugin)
  const App = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App;
  if (App && App.addListener) {
    App.addListener('backButton', () => {
      if (!$('modal').hidden) $('modal').hidden = true;
      else if (screen === 'play' || screen === 'win') { G.search++; G.busy = false; show('levels'); }
      else if (screen === 'levels') show('main');
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
  window.__matryo = { G, startLevel, input, show, restart, askHint, progress, jump };

  applyLang();
  show('main');
})();
