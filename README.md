<p align="center">
  <img src="store/icon-512.png" width="128" alt="Cubes Paradox icon">
</p>

<h1 align="center">Cubes Paradox</h1>

<p align="center">
  A puzzle game about boxes that hold whole rooms.<br>
  Push boxes, walk inside them, and find your way back out.<br>
  <b>193 levels · 14 worlds · a daily puzzle · 7 languages · fully offline</b>
</p>

<p align="center">
  <a href="https://rookieenough.github.io/Orion-Data/app/?id=cubes-paradox">
    <img src="https://raw.githubusercontent.com/RookieEnough/Orion-Store/refs/heads/main/assets/orion-badge.png" alt="Get it on Orion Store" height="56">
  </a>
  &nbsp;&nbsp;
  <a href="https://github.com/DAOUDsys/cubes-paradox/releases/tag/v1.4.1">
    <img width="212" height="56" src="https://github.com/user-attachments/assets/872b8130-d148-4b1b-9385-c52796976b5d" alt="Download APK">
  </a>
  &nbsp;&nbsp;
  <a href="https://github.com/DAOUDsys/cubes-paradox/releases">
 <img width="212" height="56" alt="Gemini_Generated_Image_f0kvvof0kvvof0kv-removebg-preview" src="https://github.com/user-attachments/assets/14fe90b9-d572-440d-b2cb-2636bcefac32" />
  </a>
</p>

<p align="center">
  <img src="store/demo.gif" width="320" alt="Pushing the green box into the purple box, then walking inside it">
</p>

## Screenshots

<p align="center">
  <img src="store/screenshots/01-rooms-inside-rooms.png" width="200" alt="Hard, made for smart players">
  <img src="store/screenshots/02-step-inside.png" width="200" alt="Sharpen your thinking">
  <img src="store/screenshots/03-room-holds-itself.png" width="200" alt="A room that holds itself">
  <img src="store/screenshots/04-holes-cracks-colors.png" width="200" alt="Holes, cracks and colors">
</p>
<p align="center">
  <img src="store/screenshots/05-hints.png" width="200" alt="Two-step hints">
  <img src="store/screenshots/06-14-worlds-daily.png" width="200" alt="14 worlds and a daily puzzle">
  <img src="store/screenshots/07-english-arabic.png" width="200" alt="Seven languages">
</p>

## The game

Every colored box is a complete room. Push it like any box — or, when it can't move, walk right into it. Inside, the room is just as real: push boxes around, walk out through a gap in the wall, and you're back where you were. Boxes can go into rooms, rooms can go into rooms, and a few rooms even contain themselves.

Every world after the first is built around rooms inside rooms, often two or three levels deep, and each one has its own idea:

| # | World | Idea | Difficulty |
|---|---|---|---|
| 1 | Workshop | Push boxes onto their spots | Easy |
| 2 | Doorways | A colored box is a door: push it, or walk right in | Easy |
| 3 | Storage | Park a box inside a room, then take it back out | Medium |
| 4 | Moving Day | Pack boxes into a room, then move the whole room | Medium |
| 5 | Unpacking | Get boxes out of rooms; walking out pushes what is outside | Medium |
| 6 | Rooms in Rooms | A room inside a room, two levels deep | Medium |
| 7 | The Goal Room | The room itself must reach the goal, with you inside | Hard |
| 8 | Deep Dive | Three rooms down and back up | Hard |
| 9 | Mirror Hall | A room that holds itself | Hard |
| 10 | Holes | Fill a hole with a box to walk across | Hard |
| 11 | Cracked Floor | Floor breaks after you step off: one clean path | Hard |
| 12 | Colors | Each colored box belongs in the room of its color | Hard |
| 13 | Control Room | A plate inside one room opens a gate in another | Hard |
| 14 | One-Way Doors | Arrows on room doors: in one way, out another | Hard |

The last three levels of each world are optional challenges, and they are always hard. A new hard **daily puzzle** waits every day.

## Features

- Every level checked by a solver: every one can be solved, every box in it is needed, and the harder ones have no square to spare
- Stars for solving in the fewest moves, 12 achievements, and a daily puzzle with a streak
- Two-step hints: first the idea in one sentence, then your next moves — from wherever you are
- Unlimited undo (or double-tap the board) and instant restart; come back to a level right where you left it
- Sound effects made on the fly, vibration on Android
- Swipe controls, plus arrow keys / WASD in a browser
- 7 languages: English, Arabic (full right-to-left layout), Spanish, French, German, Portuguese and Turkish
- The APK here and on Orion Store has all 14 worlds open. On Google Play the first 6 worlds are free and one purchase unlocks the other 8
- No ads, no accounts, no data collected — progress stays on the device ([privacy policy](https://daoudsys.github.io/cubes-paradox-privacy/))

## Run it

In a browser:

```
npm run serve
```

Then open http://localhost:8080 (arrows or WASD to move, Z undo, R restart, H hint).

Build the Android APK (needs Node, the Android SDK and Java 21):

```
npm install
npm run apk
```

The APK is written to `android/app/build/outputs/apk/play/debug/app-play-debug.apk`.

The app has two builds: `play` (Google Play, worlds 7–14 are one purchase) and `orion` (Orion Store and GitHub releases, every world open). Its `src/orion` folder replaces `www/js/edition.js`. `npm run release` builds both, signed, when `android/keystore.properties` is present.

## Levels

Levels are generated, solved and picked by scripts in `tools/`:

- `npm run gen` — generates candidate levels for 5 minutes into `tools/out/`
- `npm run curate` — picks the levels by world and difficulty and writes `www/js/levels.js` and `www/js/daily.js`
- `npm run solve` — checks that every level can be won and that its stored solution (used by hints) works

## Project layout

| Path | What |
|---|---|
| `www/js/engine.js` | Game rules (no DOM), also used by the solver in Node |
| `www/js/render.js` | Canvas renderer, draws rooms inside rooms recursively |
| `www/js/planets.js` | The planets on the world map, the player and logo as SVG |
| `www/js/app.js` | Screens, input, animation, progress, hints |
| `www/js/i18n.js` | English and Arabic text, world names |
| `www/js/i18n-langs.js` | Spanish, French, German, Portuguese and Turkish |
| `www/js/levels.js`, `daily.js` | The 193 world levels and 90 daily puzzles |
| `tools/` | Level generator, picker and solver |
| `store/` | Store listing text, icon, banner and screenshots |
| `android/` | Capacitor Android project |

Built with plain JavaScript and [Capacitor](https://capacitorjs.com).
