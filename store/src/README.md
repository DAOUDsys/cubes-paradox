# Store images

These pages render the store images from the real game.

1. Serve the project root (not `www/`), so the pages can load the game in an iframe:
   ```
   python -m http.server 8097 --bind 127.0.0.1
   ```
2. Render with headless Edge (or Chrome). Screenshots are 540×960 CSS px at scale 2 → 1080×1920:
   ```
   msedge --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --window-size=540,960 --virtual-time-budget=25000 --screenshot=store/screenshots/01.png "http://127.0.0.1:8097/store/src/shot.html?shot=1"
   ```
   `shot=1` … `shot=7` pick the caption and game state (see `SHOTS` in `shot.html`). To try another level in a shot without editing the table, add `&w=5&n=4&m=12` (world, level, moves played; all counted from 0).
   The files in `store/screenshots/` are named after their captions. Orion Store keeps its own list of these URLs, so after renaming one, send Orion an App Update with the new list.
   Until Orion applies it, its listing still loads the old names: `01-rooms-inside-rooms`, `02-step-inside`, `03-room-holds-itself`, `04-holes-cracks-colors`, `05-hints` and `06-14-worlds-daily` are copies of screenshots 1 to 6 kept for that. Delete them once Orion's `apps.json` shows the new names.
3. Banner: `feature.html` at 1024×500, scale 1. Icon: `icons.html?opt=C` at 1024×1024 (`&layer=fg&scale=0.78` / `&layer=bg` for the adaptive icon layers; device scale 0.5 gives the 512px store icon).

The Android launcher icons and launch screens are generated from `assets/icon-*.png` and `assets/splash.png` with:
```
npx @capacitor/assets generate --android --iconBackgroundColor "#88994E" --splashBackgroundColor "#1C1F12"
```
