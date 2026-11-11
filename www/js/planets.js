/* World planets for the map and the world screen: a solid disc, one soft shade, and a mark of the world's idea. */
(function () {
  'use strict';

  const rect = (x, y, w, h, r, fill) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;
  const AMBER = '#F5B83D', TEAL = ['#4FB9A0', '#173D35'], VIOLET = ['#9B8CFF', '#28224A'], PINK = ['#F78FB3', '#3A1D2B'], OLIVE = ['#88994E', '#30361F'];
  // a small solid room with its floor
  const room = (x, y, s, c) => rect(x, y, s, s, s * 0.21, c[0]) + rect(x + s * 0.17, y + s * 0.17, s * 0.66, s * 0.66, s * 0.09, c[1]);
  const diamond = (x, y) => `<path d="M${x} ${y - 6.5}L${x + 7} ${y}L${x} ${y + 6.5}L${x - 7} ${y}Z" fill="#fff" opacity=".8"/>`;
  // a box with its shadow, as on the Workshop planet
  const box = (x, y, s) => rect(x, y + s * 0.13, s, s, s * 0.24, '#B9851F') + rect(x, y, s, s, s * 0.24, AMBER);
  const ICE = '#BFE3F2', CREAM = '#ECF0DC';
  const line = (d, c, w) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;

  // the player with its sprout, drawn as in render.js, in a 100×100 box; the body colour can change (Two Sprouts)
  const hero = (body, shade) => '<path d="M50 26V11" stroke="#6E9E3F" stroke-width="4.5" stroke-linecap="round"/>' +
    '<ellipse cx="40" cy="7" rx="10.5" ry="5.5" transform="rotate(29 40 7)" fill="#9BCB5E"/><ellipse cx="60" cy="7" rx="10.5" ry="5.5" transform="rotate(-29 60 7)" fill="#86B94C"/>' +
    rect(13, 32, 74, 68, 24, shade) + rect(13, 24, 74, 68, 24, body) + rect(13, 24, 74, 34, 24, '#fff" opacity=".14') +
    '<circle cx="35" cy="51" r="10.5" fill="#fff"/><circle cx="65" cy="51" r="10.5" fill="#fff"/><circle cx="37" cy="51" r="5.5" fill="#16180F"/><circle cx="67" cy="51" r="5.5" fill="#16180F"/>' +
    '<path d="M45 67.5A5 5 0 0 0 55 67.5" fill="none" stroke="#16180F" stroke-width="4" stroke-linecap="round"/>';
  const HERO = hero('#FF7A59', '#C9553A');

  // one mark per world, in the order of I18N.WORLDS, around the planet's centre
  const MARKS = [
    // Workshop: a box
    rect(-17, -12, 34, 34, 8, '#B9851F') + rect(-17, -17, 34, 34, 8, AMBER) + '<rect x="-9" y="-9" width="18" height="18" rx="4" fill="none" stroke="#000" stroke-opacity=".2" stroke-width="2"/>',
    // Doorways: a room with a gap
    room(-21, -21, 42, PINK) + rect(-7, -21, 14, 10, 0, PINK[1]),
    // Storage: a box parked in a room
    room(-22, -22, 44, VIOLET) + rect(-8, -8, 16, 16, 4, AMBER),
    // Moving Day: a packed room
    room(-22, -22, 44, TEAL) + rect(-11, -10, 10, 10, 3, AMBER) + rect(1, 1, 10, 10, 3, AMBER),
    // Unpacking: a box coming out through the gap
    room(-26, -20, 40, VIOLET) + rect(4, -7, 12, 14, 0, VIOLET[1]) + rect(12, -8, 16, 16, 4, AMBER),
    // Rooms in Rooms: two levels
    room(-24, -24, 48, VIOLET) + rect(-10, -10, 20, 20, 5, TEAL[0]) + rect(-5, -5, 10, 10, 2, TEAL[1]),
    // The Goal Room: a room on its goal
    '<rect x="-24" y="-24" width="48" height="48" rx="10" fill="none" stroke="#ECF0DC" stroke-width="3" stroke-dasharray="6 5"/>' + room(-13, -13, 26, PINK),
    // Deep Dive: three levels down
    rect(-25, -25, 50, 50, 10, PINK[0]) + rect(-18, -18, 36, 36, 7, VIOLET[0]) + rect(-11, -11, 22, 22, 5, TEAL[0]) + rect(-5, -5, 10, 10, 3, AMBER),
    // Mirror Hall: a room inside itself
    room(-24, -24, 48, OLIVE) + room(-6, -6, 21, OLIVE) + rect(2, 2, 7, 7, 2, OLIVE[0]),
    // Holes
    '<ellipse cx="-16" cy="-14" rx="13" ry="11" fill="#0D0F08"/><ellipse cx="17" cy="4" rx="10" ry="8" fill="#0D0F08"/><ellipse cx="-9" cy="22" rx="8" ry="7" fill="#0D0F08"/>',
    // Cracked Floor
    '<path d="M-30 -20L-8 -6L-14 14L6 26M-8 -6L16 -14L24 6M16 -14L12 -32" fill="none" stroke="#1C1F12" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>',
    // Colors: a teal and a violet box
    rect(-27, -14, 26, 26, 6, TEAL[0]) + diamond(-14, -1) + rect(3, -14, 26, 26, 6, VIOLET[0]) + diamond(16, -1),
    // Control Room: a plate and a gate
    '<circle cx="-14" r="12" fill="#E8C547"/><circle cx="-14" r="6" fill="#000" opacity=".3"/><path d="M9 -15V15M18 -15V15M27 -15V15" stroke="#E8C547" stroke-width="4" stroke-linecap="round"/>',
    // One-Way Doors
    '<path d="M-20 -16L-4 0L-20 16M2 -16L18 0L2 16" fill="none" stroke="#ECF0DC" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>',
    // Frozen Floor: a box sliding along an ice sheet
    rect(-32, 13, 64, 13, 6.5, '#000" opacity=".22') + rect(-32, 9, 64, 13, 6.5, ICE) + line('M-24 15H-14M2 15H8', '#fff', 2.5) +
      line('M-30 -14H-12M-26 -3H-8', ICE, 4.5) + box(-2, -21, 26),
    // Wind Tunnels: curled wind lines pushing a box
    line('M-36 -11H-12a6.5 6.5 0 1 0 -6.5 -6.5M-38 1H-8M-36 13H-14a6.5 6.5 0 1 1 -6.5 6.5', CREAM, 4.5) + box(2, -14, 27),
    // Jump Pads: two rings of one colour, with a jump between them
    '<circle cx="-18" cy="12" r="10" fill="none" stroke="#4FB9A0" stroke-width="5.5"/><circle cx="18" cy="12" r="10" fill="none" stroke="#4FB9A0" stroke-width="5.5"/>' +
      '<circle cx="-18" cy="12" r="3.5" fill="#4FB9A0"/><circle cx="18" cy="12" r="3.5" fill="#4FB9A0"/>' +
      '<path d="M-16 -3Q0 -32 16 -3" fill="none" stroke="#ECF0DC" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 6"/><path d="M10 -9L16 -2L18 -11" fill="none" stroke="#ECF0DC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>',
    // Hungry Rooms: a room with eyes and a toothy mouth, a box in front of it
    rect(-34, -24, 42, 44, 10, PINK[0]) + rect(-28, -2, 30, 16, 5, '#1C1F12') +
      '<path d="M-26 -2l3.5 5 3.5-5 3.5 5 3.5-5 3.5 5 3.5-5 3.5 5 3.5-5ZM-22 14l3.5-5 3.5 5 3.5-5 3.5 5 3.5-5 3.5 5Z" fill="#ECF0DC"/>' +
      '<circle cx="-20" cy="-12" r="5" fill="#fff"/><circle cx="-5" cy="-12" r="5" fill="#fff"/><circle cx="-18" cy="-12" r="2.6" fill="#16180F"/><circle cx="-3" cy="-12" r="2.6" fill="#16180F"/>' +
      box(14, -2, 16),
    // Twin Rooms: two room-boxes of one room, the twin drawn with a dashed wall
    room(-31, -13, 27, TEAL) +
      '<rect x="6.5" y="-10.5" width="22" height="22" rx="5" fill="#173D35" stroke="#4FB9A0" stroke-width="5" stroke-dasharray="7 4.5"/><rect x="11.5" y="-5.5" width="12" height="12" rx="2.5" fill="#173D35"/>',
    // Mirror Rooms: a room split down the middle, one shape and its mirror image
    room(-28, -28, 56, VIOLET) + line('M0 -19V19', CREAM, 3) +
      `<path d="M-4.5 -12L-15 9H-4.5Z" fill="${AMBER}"/><path d="M4.5 -12L15 9H4.5Z" fill="${AMBER}" opacity=".6"/>`,
    // Two Sprouts: the player and a sky-blue second sprout
    `<g transform="translate(-34 -16) scale(.32)">${hero('#FF7A59', '#C9553A')}</g><g transform="translate(2 -16) scale(.32)">${hero('#6EC1FF', '#3F8CC4')}</g>`
  ];

  function disc(color) {
    return `<circle r="50" fill="${color}"/>` +
      '<path d="M32 -38A50 50 0 1 1 -38 32A58 58 0 0 0 32 -38Z" fill="#000" opacity=".22"/>' +
      '<ellipse cx="-22" cy="-26" rx="14" ry="7" transform="rotate(-40 -22 -26)" fill="#fff" opacity=".2"/>';
  }
  const wrap = (inner) => `<svg viewBox="-50 -50 100 100" aria-hidden="true">${inner}</svg>`;

  window.Planets = {
    plain: (color) => wrap(disc(color)),
    marked: (w, color) => wrap(disc(color) + MARKS[w]),
    hero: () => `<svg viewBox="0 0 100 100" aria-hidden="true">${HERO}</svg>`,
    // the app icon: the sprout standing in a doorway in an olive wall
    logo: () => '<svg viewBox="0 0 1024 1024" aria-hidden="true"><defs><linearGradient id="logo-sheen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFEB" stop-opacity=".3"/><stop offset=".5" stop-color="#FFFFEB" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".2"/></linearGradient></defs>' +
      '<rect width="1024" height="1024" fill="#88994E"/><rect width="1024" height="1024" fill="url(#logo-sheen)"/>' +
      '<path d="M208 1024V390a150 150 0 0 1 150-150H666a150 150 0 0 1 150 150V1024Z" fill="#30361F"/>' +
      `<g transform="translate(257 364) scale(5.1)">${HERO}</g></svg>`
  };
})();
