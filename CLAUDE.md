# Cubes Paradox (مفارقة المكعبات) — formerly Matryo

Mobile puzzle game: push boxes; colored boxes hold whole rooms you can walk into. Original game — inspired by the "box inside a box" idea, but levels, art and names are our own. Do NOT copy levels, art or text from existing games.

Owner: Daoud. Package id stays com.daoud.matryo (so updates install over the old app). UI languages: English (default) + Arabic (RTL, Levantine/Palestinian dialect), switch on the main screen. Target: Android APK via Capacitor.

## Status
- 350 levels in 18 worlds (16–22 each). Every world has one idea and its own main-room color (palette in render.js WORLD_WALLS, names in i18n.js WORLDS). Worlds 1–8 bring one idea each (push, enter, pack/unpack, nesting, self-loop, ice, plates/gates, arrows); 9–18 combine them. 5 hand-made tutorials open worlds 1–5; the rest come from the generator. All verified with `npm run solve`.
- Last 3 levels of each world are optional challenges. Passing 75% of a world opens the next. Only the first level of a world has a name/tip; others show as "<World> N".
- Points: +10 per first solve (+1 per world index, +10 for challenges). Hint = 15 points for the next 8 moves; Skip = 50 points. Start with 30.
- Look: Daoud chose to keep the original style (style A). Design options page: https://claude.ai/artifact/KijSKn8Lo3zErgUxn8QYWy
- Approved design: https://claude.ai/artifact/XFfjKF6EAXCagGsFQwLLQ4

## Layout
- `www/js/engine.js` — pure game rules (no DOM). Also loads in Node for the solver.
- `www/js/i18n.js` — all UI text (en + ar) and chapter titles.
- `www/js/levels.js` — level data, written by `tools/curate.js`. Each level has `w` (world), `n` (place in world), optional `name`/`tip` ({en, ar}), optional per-room `terrain` (~ ice, o plate, | gate, ^>v< one-way), and `sol` (a known solution, used by hints). Symbols: `#` wall, `.` floor, `P` player, `b` box, `_` box goal, `=` player goal, any other capital letter = a box holding that room. Rooms must be square.
- `www/js/render.js` — canvas renderer. Rooms draw recursively: a room-box shows its real room inside it (until it is under ~3px).
- `www/js/app.js` — screens, input (swipe + arrows/WASD, Z undo, R restart), animations, progress (localStorage).
- `tools/solve.js` — BFS solver + replays each stored `sol`; run after every level edit.
- `tools/gen.js` — level generator (random rooms → full BFS → filters → difficulty score), writes pools to `tools/out/`.
- `tools/curate.js` — picks 350 levels from the pools by world and difficulty band (WORLDS table), names them, writes `levels.js`.
- `store/` — store listing (LISTING.md), icon-512, feature graphic, 7 screenshots (1080×1920). Rendered from the real game by `store/src/*.html`; see store/src/README.md. App icon sources: `assets/icon-*.png`.
- APK: `npm run apk` → `android/app/build/outputs/apk/debug/app-debug.apk`. Gradle needs Java 21: on this PC it is set in `C:/Users/daoud/.gradle/gradle.properties` (org.gradle.java.home), not in the repo.

## Rules
- Moving into an occupied cell: push first. If the push fails and the thing is a room-box, walk into it, landing at the middle of the opposite edge.
- Walking off a room's edge puts you next to that room's box in the room outside.
- Box goal: any non-player object. Player goal: the player. Win when all goals are filled.
- A room can be inside itself (level 5).
- Ice: anything that lands on ice keeps sliding the same way until the next cell in its room is not free.
- Plates/gates: gates are walls unless every plate in the level has something on it (checked at the start of each move).
- Arrow tiles can only be entered moving in the arrow direction.

## Animation
- Step slide 130ms; zoom into/out of a box 380ms (geometric zoom about the fixed point); bump into a wall; undo replays the animation at 0.6x time; goals glow on win.

## Design rules (agreed with Daoud — keep them)
- Page #12141C, cards #1C1F2B, font Rubik (bundled in www/fonts for offline).
- Player coral #FF7A59 with eyes that look in the move direction. Plain box amber #F5B83D. Room-boxes teal #3CC9B0 / violet #9B8CFF.
- Walls: corner radius ~3–4px, ~3px gap between them, NO shadow under walls.
- Floor: rounded tiles with a wider gap and alternating shade, so walls read differently from the room.
