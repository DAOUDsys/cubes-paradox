/* Cubes Paradox sound effects: all made with Web Audio at play time, no sound files. */
(function () {
  'use strict';

  let ctx = null, master = null, noiseBuf = null;
  let enabled = true;

  function audio() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.5;
      master.connect(ctx.destination);
      // one second of white noise, reused for soft "whoosh" and "thud" sounds
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  // a short tone that glides from f0 to f1
  function tone(f0, f1, dur, vol, type, delay) {
    const t = ctx.currentTime + (delay || 0);
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master);
    o.start(t); o.stop(t + dur + 0.02);
  }

  // filtered noise; the filter sweeps from c0 to c1
  function noise(c0, c1, dur, vol, delay) {
    const t = ctx.currentTime + (delay || 0);
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuf;
    f.type = 'bandpass'; f.Q.value = 1.2;
    f.frequency.setValueAtTime(c0, t);
    f.frequency.exponentialRampToValueAtTime(c1, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(master);
    s.start(t); s.stop(t + dur + 0.02);
  }

  const SOUNDS = {
    step: () => tone(520, 430, 0.05, 0.05, 'triangle'),
    push: () => { tone(180, 120, 0.11, 0.16, 'triangle'); noise(900, 400, 0.09, 0.05); },
    slide: () => noise(2400, 900, 0.28, 0.06),
    enter: () => { noise(500, 2600, 0.32, 0.08); tone(330, 660, 0.3, 0.07, 'sine'); },
    exit: () => { noise(2600, 500, 0.32, 0.08); tone(660, 330, 0.3, 0.07, 'sine'); },
    bump: () => tone(120, 80, 0.09, 0.14, 'square'),
    undo: () => tone(430, 560, 0.06, 0.05, 'triangle'),
    goal: () => tone(880, 1320, 0.12, 0.06, 'sine'),
    gate: () => { tone(220, 330, 0.18, 0.08, 'sawtooth'); noise(700, 1400, 0.16, 0.04); },
    hint: () => { tone(988, 988, 0.12, 0.06, 'sine'); tone(1319, 1319, 0.16, 0.05, 'sine', 0.09); },
    win: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, f, 0.32, 0.08, 'triangle', i * 0.09)),
    tap: () => tone(700, 600, 0.04, 0.035, 'sine'),
    // new rules: a soft whoosh when the wind blows something, a blip through a jump pad, a gulp when a room swallows
    wind: () => { noise(700, 1800, 0.22, 0.045); noise(1800, 900, 0.18, 0.03, 0.08); },
    jump: () => { tone(520, 1180, 0.09, 0.06, 'sine'); tone(1180, 1500, 0.06, 0.04, 'sine', 0.08); },
    eat: () => { tone(300, 110, 0.16, 0.13, 'triangle'); noise(600, 250, 0.12, 0.05, 0.03); tone(150, 120, 0.06, 0.08, 'sine', 0.15); }
  };

  function play(name) {
    if (!enabled || !SOUNDS[name]) return;
    try { if (audio()) SOUNDS[name](); } catch (e) { /* sound is optional */ }
  }

  window.Sfx = {
    play,
    setEnabled(on) { enabled = !!on; },
    isEnabled() { return enabled; }
  };
})();
