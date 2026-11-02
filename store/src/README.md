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
   `shot=1` … `shot=7` pick the caption and game state (see `SHOTS` in `shot.html`).
3. Banner: `feature.html` at 1024×500, scale 1. Icon: `icon.html` at 1024×1024 (`?layer=fg` / `?layer=bg` for the adaptive icon layers; scale 0.5 gives the 512px store icon).

The Android launcher icons are generated from `assets/icon-*.png` with:
```
npx @capacitor/assets generate --android --iconBackgroundColor "#9B8CFF"
```
