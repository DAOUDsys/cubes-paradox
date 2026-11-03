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
    tap: () => tone(700, 600, 0.04, 0.035, 'sine')
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

  /* ---------- calm background music: slow chords with a soft melody, made on the fly ---------- */

  // four chords (MIDI note numbers), each held for one bar, then repeated
  const CHORDS = [[50, 57, 62, 66], [47, 54, 59, 62], [43, 50, 55, 59], [45, 52, 57, 61]];
  const BAR = 4.8; // seconds per chord
  let musicGain = null, timer = null, nextBar = 0, bar = 0;
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);

  function pad(freq, t, dur, vol) {
    const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o.type = 'triangle'; o.frequency.value = freq;
    f.type = 'lowpass'; f.frequency.value = 900;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 1.2);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(f); f.connect(g); g.connect(musicGain);
    o.start(t); o.stop(t + dur + 0.1);
  }

  function pluck(freq, t, vol) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
    o.connect(g); g.connect(musicGain);
    o.start(t); o.stop(t + 1.7);
  }

  function schedule() {
    while (nextBar < ctx.currentTime + 1.5) {
      const ch = CHORDS[bar % CHORDS.length];
      for (const m of ch) pad(hz(m), nextBar, BAR + 1.2, 0.035);
      // a few soft notes from the chord, one octave up, on a gentle rhythm
      const steps = [0, 1.2, 2.4, 3.0, 3.6];
      steps.forEach((s, i) => { if ((bar + i) % 3 !== 2) pluck(hz(ch[(i + bar) % ch.length] + 12), nextBar + s, 0.03); });
      nextBar += BAR; bar++;
    }
  }

  window.Music = {
    start() {
      if (timer || !audio()) return;
      musicGain = ctx.createGain();
      musicGain.gain.value = 0.6;
      musicGain.connect(master);
      nextBar = ctx.currentTime + 0.1;
      schedule();
      timer = setInterval(schedule, 500);
    },
    stop() {
      if (!timer) return;
      clearInterval(timer); timer = null;
      const g = musicGain;
      g.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.3);
      setTimeout(() => g.disconnect(), 1500);
    }
  };
})();
