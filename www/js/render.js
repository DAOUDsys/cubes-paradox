/* Cubes Paradox canvas renderer: draws rooms recursively, boxes show the real room inside them. */
(function () {
  'use strict';

  const PAL = {
    navy:   { frame: '#1C2030', bg: '#161925', wall: '#3E4668', floor: '#1E2233', floorAlt: '#23283B', door: 'rgba(154,161,185,0.45)', shadow: '#151826' },
    teal:   { frame: '#3CC9B0', bg: '#0E2A26', wall: '#3CC9B0', floor: '#143B36', floorAlt: '#17433D', door: 'rgba(127,224,206,0.55)', shadow: '#23917E' },
    violet: { frame: '#9B8CFF', bg: '#1C1838', wall: '#9B8CFF', floor: '#28224A', floorAlt: '#2D2753', door: 'rgba(196,188,255,0.55)', shadow: '#6F62C9' },
    pink:   { frame: '#F78FB3', bg: '#2E1621', wall: '#F78FB3', floor: '#3A1D2B', floorAlt: '#422131', door: 'rgba(250,190,212,0.55)', shadow: '#C2668A' },
    navyEnd: null
  };
  // one main-room theme per world, built from its wall color
  const WORLD_WALLS = {
    workshop: '#8B6A4E', greenhouse: '#4F8A5B', warehouse: '#A88052', well: '#3A5BB8', ice: '#7FB6CC',
    power: '#9A5050', factory: '#6B7380', lake: '#557A9E', control: '#7F8A3A', conveyor: '#B0663A',
    glacier: '#A9C4D6', maze: '#3F7A45', echo: '#8E4C8A', freeze: '#5D7BC7', observatory: '#4B4FA6',
    labyrinth: '#9C8540', paradox: '#5A5A66'
  };
  function mix(a, b, t) {
    const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
    const ch = (sh) => Math.round(((pa >> sh) & 255) * (1 - t) + ((pb >> sh) & 255) * t);
    return '#' + ((1 << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).slice(1);
  }
  delete PAL.navyEnd;
  for (const k of Object.keys(WORLD_WALLS)) {
    const w = WORLD_WALLS[k];
    PAL[k] = { frame: w, bg: mix(w, '#0B0C10', 0.86), wall: w, floor: mix(w, '#12141C', 0.84), floorAlt: mix(w, '#12141C', 0.8), door: 'rgba(236,238,245,0.4)', shadow: mix(w, '#0B0C10', 0.9) };
  }
  const C = {
    page: '#12141C',
    box: '#F5B83D', boxShadow: '#B9851F', boxLine: 'rgba(18,20,28,0.2)',
    player: '#FF7A59', playerShadow: '#C9553A',
    goal: 'rgba(236,238,245,0.75)', goalOn: 'rgba(60,201,176,0.35)', pgoal: '#FF7A59',
    ice: 'rgba(178,232,255,0.20)', iceLine: 'rgba(220,245,255,0.55)',
    plate: '#E8C547', plateOn: '#3CC9B0', gate: '#E8C547', arrow: 'rgba(236,238,245,0.55)'
  };
  const PAD = 0.035;     // room frame thickness, as a share of the room's size
  const ROOMIN = 0.06;   // a room-box sits this far inside its cell

  function pal(L, key) { return PAL[L.rooms[key].palette] || PAL.navy; }

  function rr(ctx, x, y, w, h, r) {
    r = Math.max(0, Math.min(r, w / 2, h / 2));
    ctx.beginPath();
    if (ctx.roundRect) { ctx.roundRect(x, y, w, h, r); return; }
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  /* ---------- geometry (rects are squares: {x, y, s}) ---------- */

  function cellRect(L, roomKey, r, x, y) {
    const R = L.rooms[roomKey];
    const p = r.s * PAD;
    const cs = (r.s - 2 * p) / R.w;
    return { x: r.x + p + x * cs, y: r.y + p + y * cs, s: cs };
  }

  function innerRect(cell) {
    const b = cell.s * ROOMIN;
    return { x: cell.x + b, y: cell.y + b, s: cell.s - 2 * b };
  }

  // rect of the room that `ro` (a room-box) sits in, given the rect of the room it holds
  function parentRect(L, childRect, ro) {
    const P = L.rooms[ro.room];
    const cs = childRect.s / (1 - 2 * ROOMIN);
    const cx = childRect.x - ROOMIN * cs, cy = childRect.y - ROOMIN * cs;
    const s = cs * P.w / (1 - 2 * PAD);
    const p = s * PAD;
    return { x: cx - ro.x * cs - p, y: cy - ro.y * cs - p, s };
  }

  function childRect(L, parentR, ro) {
    return innerRect(cellRect(L, ro.room, parentR, ro.x, ro.y));
  }

  // Where every nearby room sits when `anchor` is drawn at `rect` (closest copy wins).
  function layoutRooms(st, L, anchor, rect) {
    const map = new Map();
    const down = (key, r, d) => {
      const queue = [[key, r, d]];
      while (queue.length) {
        const [k, rc, dd] = queue.shift();
        if (!map.has(k)) map.set(k, rc);
        if (dd >= 4) continue;
        for (const o of st.objects) {
          if (o.kind === 'room' && o.room === k && !map.has(o.ref)) queue.push([o.ref, childRect(L, rc, o), dd + 1]);
        }
      }
    };
    down(anchor, rect, 0);
    let k = anchor, r = rect;
    for (let i = 0; i < 4; i++) {
      const ro = Engine.roomObject(st, k);
      if (!ro) break;
      r = parentRect(L, r, ro);
      k = ro.room;
      down(k, r, 2);
    }
    return map;
  }

  /* ---------- renderer ---------- */

  function Renderer(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 0;
  }

  Renderer.prototype.resize = function (size) {
    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    this.size = size;
    this.dpr = dpr;
    this.canvas.width = Math.round(size * dpr);
    this.canvas.height = Math.round(size * dpr);
    this.canvas.style.width = size + 'px';
    this.canvas.style.height = size + 'px';
  };

  Renderer.prototype.visible = function (r) {
    return !(r.x > this.size || r.y > this.size || r.x + r.s < 0 || r.y + r.s < 0);
  };

  Renderer.prototype.drawRoom = function (st, L, key, r, depth, o) {
    if (!this.visible(r)) return;
    const ctx = this.ctx, R = L.rooms[key], P = pal(L, key);
    if (r.s < 3 || depth > 24) {
      ctx.fillStyle = P.frame;
      ctx.fillRect(r.x, r.y, r.s, r.s);
      return;
    }
    const p = r.s * PAD;
    rr(ctx, r.x, r.y, r.s, r.s, r.s * 0.07);
    ctx.fillStyle = P.frame; ctx.fill();
    const ix = r.x + p, iy = r.y + p, is = r.s - 2 * p, cs = is / R.w;
    rr(ctx, ix, iy, is, is, r.s * 0.045);
    ctx.fillStyle = P.bg; ctx.fill();
    if (cs < 1.6) {
      ctx.globalAlpha *= 0.55; ctx.fillStyle = P.wall; ctx.fillRect(ix, iy, is, is); ctx.globalAlpha /= 0.55;
      return;
    }

    // tiles
    const open = Engine.gatesOpen(st, L);
    for (let y = 0; y < R.h; y++) {
      for (let x = 0; x < R.w; x++) {
        const cx = ix + x * cs, cy = iy + y * cs;
        if (R.wall[y][x]) {
          const b = cs * 0.033;
          rr(ctx, cx + b, cy + b, cs - 2 * b, cs - 2 * b, cs * 0.065);
          ctx.fillStyle = P.wall; ctx.fill();
          continue;
        }
        const edgeL = x === 0, edgeR = x === R.w - 1, edgeT = y === 0, edgeB = y === R.h - 1;
        const edge = edgeL || edgeR || edgeT || edgeB;
        if (edge) { // an opening: cut through the frame so it reads as a door
          ctx.fillStyle = P.bg;
          ctx.fillRect(cx - (edgeL ? p + 0.5 : 0), cy - (edgeT ? p + 0.5 : 0),
            cs + (edgeL ? p + 0.5 : 0) + (edgeR ? p + 0.5 : 0), cs + (edgeT ? p + 0.5 : 0) + (edgeB ? p + 0.5 : 0));
        }
        const f = cs * 0.045;
        rr(ctx, cx + f, cy + f, cs - 2 * f, cs - 2 * f, cs * 0.19);
        ctx.fillStyle = (x + y) % 2 ? P.floorAlt : P.floor; ctx.fill();
        if (edge && cs > 6) { ctx.strokeStyle = P.door; ctx.lineWidth = cs * 0.035; ctx.stroke(); }
        if (cs > 4) this.drawTerrain(R, x, y, cx, cy, cs, open);
      }
    }

    // goals
    if (cs > 5) {
      for (const g of R.goals) {
        const cx = ix + g.x * cs, cy = iy + g.y * cs;
        ctx.setLineDash([cs * 0.11, cs * 0.085]);
        ctx.lineWidth = cs * 0.055;
        if (g.type === 'box') {
          const b = cs * 0.14;
          rr(ctx, cx + b, cy + b, cs - 2 * b, cs - 2 * b, cs * 0.17);
          if (o.glow) { ctx.fillStyle = C.goalOn; ctx.globalAlpha *= o.glow; ctx.fill(); ctx.globalAlpha /= o.glow; }
          ctx.strokeStyle = C.goal; ctx.stroke();
        } else {
          ctx.beginPath(); ctx.arc(cx + cs / 2, cy + cs / 2, cs * 0.32, 0, Math.PI * 2);
          ctx.strokeStyle = C.pgoal; ctx.stroke();
        }
        ctx.setLineDash([]);
      }
    }

    // objects (top rows first; the player is drawn last within a row)
    const here = st.objects.filter(ob => ob.room === key && !(o.skip && o.skip.has(ob.id)));
    here.sort((a, b) => (a.y - b.y) || ((a.kind === 'player') - (b.kind === 'player')));
    for (const ob of here) {
      let gx = ob.x, gy = ob.y;
      const sl = o.slide && o.slide.get(ob.id);
      if (sl) { gx = sl.fx + (ob.x - sl.fx) * o.slideT; gy = sl.fy + (ob.y - sl.fy) * o.slideT; }
      if (o.bump && o.bump.id === ob.id) { gx += o.bump.dx; gy += o.bump.dy; }
      this.drawObject(st, L, ob, { x: ix + gx * cs, y: iy + gy * cs, s: cs }, depth, o);
    }
  };

  // Ice, plates, gates and one-way arrows, drawn on top of a floor tile.
  Renderer.prototype.drawTerrain = function (R, x, y, cx, cy, cs, open) {
    const ctx = this.ctx;
    if (R.ice[y][x]) {
      const f = cs * 0.045;
      rr(ctx, cx + f, cy + f, cs - 2 * f, cs - 2 * f, cs * 0.19);
      ctx.fillStyle = C.ice; ctx.fill();
      if (cs > 10) {
        ctx.beginPath();
        ctx.moveTo(cx + cs * 0.25, cy + cs * 0.62); ctx.lineTo(cx + cs * 0.5, cy + cs * 0.37);
        ctx.moveTo(cx + cs * 0.45, cy + cs * 0.72); ctx.lineTo(cx + cs * 0.72, cy + cs * 0.45);
        ctx.strokeStyle = C.iceLine; ctx.lineWidth = cs * 0.05; ctx.lineCap = 'round'; ctx.stroke();
      }
    }
    if (R.gate[y][x]) {
      const b = cs * 0.1;
      if (!open) {
        rr(ctx, cx + b, cy + b, cs - 2 * b, cs - 2 * b, cs * 0.12);
        ctx.fillStyle = 'rgba(232,197,71,0.16)'; ctx.fill();
        ctx.beginPath();
        for (let i = 1; i <= 3; i++) { const gx = cx + b + (cs - 2 * b) * i / 4; ctx.moveTo(gx, cy + b * 1.4); ctx.lineTo(gx, cy + cs - b * 1.4); }
        ctx.strokeStyle = C.gate; ctx.lineWidth = cs * 0.075; ctx.lineCap = 'round'; ctx.stroke();
      } else {
        rr(ctx, cx + b, cy + b, cs - 2 * b, cs - 2 * b, cs * 0.12);
        ctx.setLineDash([cs * 0.08, cs * 0.08]);
        ctx.strokeStyle = 'rgba(232,197,71,0.5)'; ctx.lineWidth = cs * 0.04; ctx.stroke();
        ctx.setLineDash([]);
      }
    }
    if (R.plates && R.plates[y][x]) {
      ctx.beginPath(); ctx.arc(cx + cs / 2, cy + cs / 2, cs * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = open ? C.plateOn : C.plate; ctx.globalAlpha *= 0.85; ctx.fill(); ctx.globalAlpha /= 0.85;
      ctx.beginPath(); ctx.arc(cx + cs / 2, cy + cs / 2, cs * 0.17, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(18,20,28,0.35)'; ctx.fill();
    }
    const a = R.arrow[y][x];
    if (a >= 0) {
      ctx.save();
      ctx.translate(cx + cs / 2, cy + cs / 2);
      ctx.rotate(a * Math.PI / 2);
      ctx.beginPath();
      for (const off of [-0.12, 0.12]) {
        ctx.moveTo(-cs * 0.2, cs * (0.1 + off)); ctx.lineTo(0, cs * (-0.1 + off)); ctx.lineTo(cs * 0.2, cs * (0.1 + off));
      }
      ctx.strokeStyle = C.arrow; ctx.lineWidth = cs * 0.07; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke();
      ctx.restore();
    }
  };

  Renderer.prototype.drawObject = function (st, L, ob, cell, depth, o) {
    const ctx = this.ctx, cs = cell.s;
    if (ob.kind === 'room') {
      const ir = innerRect(cell);
      if (cs > 8) { rr(ctx, ir.x, ir.y + cs * 0.08, ir.s, ir.s, ir.s * 0.07); ctx.fillStyle = pal(L, ob.ref).shadow; ctx.fill(); }
      this.drawRoom(st, L, ob.ref, ir, depth + 1, o);
      return;
    }
    if (ob.kind === 'box') {
      const b = cs * 0.065, w = cs - 2 * b;
      if (cs > 8) { rr(ctx, cell.x + b, cell.y + b + cs * 0.08, w, w, cs * 0.2); ctx.fillStyle = C.boxShadow; ctx.fill(); }
      rr(ctx, cell.x + b, cell.y + b, w, w, cs * 0.2); ctx.fillStyle = C.box; ctx.fill();
      if (cs > 10) {
        const i = cs * 0.25;
        rr(ctx, cell.x + i, cell.y + i, cs - 2 * i, cs - 2 * i, cs * 0.11);
        ctx.strokeStyle = C.boxLine; ctx.lineWidth = cs * 0.045; ctx.stroke();
      }
      return;
    }
    // player
    const b = cs * 0.11, w = cs - 2 * b;
    if (cs > 8) { rr(ctx, cell.x + b, cell.y + b + cs * 0.08, w, w, cs * 0.26); ctx.fillStyle = C.playerShadow; ctx.fill(); }
    rr(ctx, cell.x + b, cell.y + b, w, w, cs * 0.26); ctx.fillStyle = C.player; ctx.fill();
    if (cs > 9) {
      const look = Engine.DIRS[o.look == null ? 1 : o.look];
      const ey = cell.y + cs * 0.47, er = cs * 0.105, pr = cs * 0.052;
      for (const ex of [cell.x + cs * 0.35, cell.x + cs * 0.65]) {
        ctx.beginPath(); ctx.arc(ex, ey, er, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
        ctx.beginPath(); ctx.arc(ex + look[0] * cs * 0.045, ey + look[1] * cs * 0.045, pr, 0, Math.PI * 2);
        ctx.fillStyle = '#12141C'; ctx.fill();
      }
    }
  };

  // Draw the scene with room `anchor` filling rect `r` (canvas px). Rooms around it are drawn
  // too when they show (e.g. while zooming out).
  Renderer.prototype.render = function (st, L, anchor, r, o) {
    o = o || {};
    const ctx = this.ctx, S = this.size;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.clearRect(0, 0, S, S);
    ctx.save();
    rr(ctx, 0, 0, S, S, S * 0.07);
    ctx.clip();
    ctx.fillStyle = C.page;
    ctx.fillRect(0, 0, S, S);

    let top = anchor, tr = r;
    for (let i = 0; i < 8; i++) {
      if (tr.x <= 0 && tr.y <= 0 && tr.x + tr.s >= S && tr.y + tr.s >= S) break;
      const ro = Engine.roomObject(st, top);
      if (!ro) break;
      tr = parentRect(L, tr, ro);
      top = ro.room;
    }
    this.drawRoom(st, L, top, tr, 0, o);

    if (o.overlay) {
      for (const ov of o.overlay) {
        ctx.globalAlpha = ov.alpha == null ? 1 : ov.alpha;
        this.drawObject(st, L, ov.obj, ov.rect, 1, o);
        ctx.globalAlpha = 1;
      }
    }
    ctx.restore();
  };

  // Arrow beside the player's cell showing the hinted move.
  Renderer.prototype.drawHint = function (cell, dir) {
    const ctx = this.ctx, cs = cell.s, d = Engine.DIRS[dir];
    ctx.save();
    ctx.translate(cell.x + cs / 2 + d[0] * cs * 0.82, cell.y + cs / 2 + d[1] * cs * 0.82);
    ctx.rotate(dir * Math.PI / 2);
    ctx.beginPath();
    ctx.moveTo(-cs * 0.2, cs * 0.1); ctx.lineTo(0, -cs * 0.12); ctx.lineTo(cs * 0.2, cs * 0.1);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.strokeStyle = C.page; ctx.lineWidth = cs * 0.2; ctx.stroke();
    ctx.strokeStyle = C.player; ctx.lineWidth = cs * 0.11; ctx.stroke();
    ctx.restore();
  };

  // Small flat map of a room, with one room-box ringed ("you are inside this one").
  function drawMini(canvas, st, L, roomKey, ringRef) {
    const R = L.rooms[roomKey], P = pal(L, roomKey);
    const cell = 11, gap = 2, n = R.w;
    const size = n * cell + (n - 1) * gap + 8;
    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    canvas.width = size * dpr; canvas.height = size * dpr;
    canvas.style.width = size + 'px'; canvas.style.height = size + 'px';
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        const px = 4 + x * (cell + gap), py = 4 + y * (cell + gap);
        const ob = Engine.objectAt(st, roomKey, x, y);
        let col = R.wall[y][x] || (R.gate[y][x] && !Engine.gatesOpen(st, L)) ? P.wall : R.ice[y][x] ? '#3B5C6B' : P.floorAlt;
        if (ob) col = ob.kind === 'box' ? C.box : ob.kind === 'player' ? C.player : pal(L, ob.ref).wall;
        rr(ctx, px, py, cell, cell, 3); ctx.fillStyle = col; ctx.fill();
        if (ob && ob.kind === 'room' && ob.ref === ringRef) {
          rr(ctx, px - 2.5, py - 2.5, cell + 5, cell + 5, 5);
          ctx.strokeStyle = C.player; ctx.lineWidth = 2; ctx.stroke();
        }
      }
    }
  }

  window.Render = { Renderer, PAL, cellRect, innerRect, parentRect, childRect, layoutRooms, drawMini };
})();
