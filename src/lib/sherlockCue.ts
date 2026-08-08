// A short, mysterious "detective" sting synthesized with the Web Audio API.
// No audio file needed. The 3-click on the logo is a user gesture, so this is
// allowed to play. Swap in a real Sherlock theme mp3 later if you want.

export function playSherlockCue() {
  try {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AC();

    // gentle low drone bed
    const drone = ctx.createOscillator();
    const droneGain = ctx.createGain();
    drone.type = 'sine';
    drone.frequency.value = 98; // low G
    droneGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    droneGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.2);
    droneGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.4);
    drone.connect(droneGain).connect(ctx.destination);
    drone.start(); drone.stop(ctx.currentTime + 2.5);

    // a small minor-key violin-ish motif (pizzicato feel)
    const notes = [
      { f: 293.66, t: 0.00 }, // D4
      { f: 349.23, t: 0.22 }, // F4
      { f: 440.0,  t: 0.44 }, // A4
      { f: 415.30, t: 0.72 }, // G#4 (tension)
      { f: 293.66, t: 1.05 }, // D4 resolve
    ];
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2200;
    filter.connect(ctx.destination);

    notes.forEach((n) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'triangle';
      o.frequency.value = n.f;
      const start = ctx.currentTime + n.t;
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(0.16, start + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, start + 0.42);
      o.connect(g).connect(filter);
      o.start(start); o.stop(start + 0.45);
    });
  } catch {
    /* audio not available — fail silent, the visual still plays */
  }
}
