# Cubes Paradox (مفارقة المكعبات) — formerly Matryo

Mobile puzzle game: push boxes; colored boxes hold whole rooms you can walk into. Original game — inspired by the "box inside a box" idea, but levels, art and names are our own. Do NOT copy levels, art or text from existing games.

Owner: Daoud. Package id stays com.daoud.matryo (so updates install over the old app). UI languages: English (default) + Arabic (RTL, Levantine/Palestinian dialect), switch on the main screen. Target: Android APK via Capacitor.

## Status
- 14 worlds (first world 8 levels: 5 intro + 3 challenges; every other world 15: 12 main + 3 challenges) + a daily puzzle list. Worlds 1–2 easy, 3–6 medium, 7–14 hard; challenge levels are always hard. Every world except the first is built on rooms-in-rooms (nesting 2–3 deep wherever possible).
- World ideas (i18n.js WORLDS, curate.js WORLDS): Workshop (push), Doorways, Storage (park a box in a room and take it back), Moving Day (pack a room then move it), Unpacking (boxes out; exiting pushes), Rooms in Rooms (depth 2), The Goal Room, Deep Dive (depth 3), Mirror Hall (self-loop), Holes, Cracked Floor, Colors, Control Room (plate in a room opens a gate elsewhere), One-Way Doors.
- Level quality rules (enforced by tools/gen.js): the shortest solution must use the world's idea; every box is needed (remove one → unwinnable); medium/hard levels are tightened (any floor square the solution doesn't need is walled off); hard and challenge levels prefer a single solution (analyze.js `unique`); no two levels in a world with the same solution fingerprint (curate.js `shape`).
- Features: stars per level (3 = shortest), daily puzzle (hard, +30, streak), 12 achievements, world map → world screen, two-step hints (idea sentence 5 pts, next 8 moves 15 pts), +5 for no-undo solves, vibration (Capacitor Haptics), double-tap board = undo, glowing exits of the room you are in, blinking/surprised/happy face + win hop, generated SFX and optional generated music, resume a level after closing the app. Settings: sound, music, vibration, language.
- Look D (chosen by Daoud): solid olive rooms, walls merged with no gaps, one soft sheen per room, olive UI.
- Approved design pages: https://claude.ai/artifact/KijSKn8Lo3zErgUxn8QYWy

## Layout
- `www/js/engine.js` — pure game rules (no DOM). Also loads in Node for the solver.
- `www/js/i18n.js` — all UI text (en + ar) and chapter titles.
- `www/js/levels.js` / `www/js/daily.js` — level data, written by `tools/curate.js`. Each level has `w` (world), `n` (place in world), optional `name`/`tip` ({en, ar}), `idea` ({en, ar}, the first hint step), optional per-room `terrain` (~ ice, o plate, | gate, ^>v< one-way, O hole, x crumbling floor), and `sol` (a known solution, used by hints and stars). Symbols: `#` wall, `.` floor, `P` player, `b` box, `t`/`u` teal/purple box, `_` box goal, `=` player goal, any other capital letter = a box holding that room. Rooms must be square.
- `www/js/sfx.js` — sound effects and optional music, all generated with Web Audio (no sound files).
- `www/js/render.js` — canvas renderer. Rooms draw recursively: a room-box shows its real room inside it (until it is under ~3px).
- `www/js/app.js` — screens, input (swipe + arrows/WASD, Z undo, R restart), animations, progress (localStorage).
- `tools/solve.js` — BFS solver + replays each stored `sol` (world levels and daily puzzles); run after every level edit.
- `tools/analyze.js` — full state-space analysis: shortest solution, what it uses (depth, carry, holes…), uniqueness, freedom.
- `tools/gen.js` — level generator per world kind (random rooms → BFS → idea check → tighten → every-box-needed check), writes pools to `tools/out2/`.
- `tools/curate.js` — picks each world's levels from the pools by tier and difficulty band (WORLDS table), writes the idea hints, writes `levels.js` and `daily.js`.
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
- Holes block the player and room-boxes; a plain box pushed in drops and fills it (becomes floor). Crumbling floor turns into a hole after the player steps off it.
- A teal/purple box must end up inside a room of its own palette (counts as a goal).

## Animation
- Step slide 130ms; zoom into/out of a box 380ms (geometric zoom about the fixed point); bump into a wall; undo replays the animation at 0.6x time; goals glow on win.

## Design rules (agreed with Daoud — keep them)
- Look D: page #1C1F12, cards #272B1A, font Rubik (bundled in www/fonts for offline).
- Rooms are solid: walls merge into one olive shape (#88994E) with rounded free corners, no gaps between wall cells, no floor tiles (one floor colour #30361F), one diagonal sheen per room. Room-boxes keep their own colours (teal #4FB9A0, violet #9B8CFF, pink #F78FB3) in the same solid style.
- Player coral #FF7A59 with eyes that look in the move direction (blinks, surprised on entering, happy on win). Plain box amber #F5B83D. Boxes and player have a soft top highlight.
