/**
 * Web Audio API Engine: Calm Ocean Waves & Melodic Tropical Birdsong Synthesizer
 * Enhanced with crystal-clear coastal wave swell, foaming surf textures, and sweet birdsong.
 */

class SoundscapeEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.oceanGain = null;
    this.birdsGain = null;
    this.noiseNode = null;
    this.foamNoiseNode = null;
    this.lfo = null;
    this.birdTimer = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();
  }

  start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) return;

    const t = this.ctx.currentTime;

    // Master Gain with smooth fade-in
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, t);
    this.masterGain.gain.exponentialRampToValueAtTime(0.32, t + 1.5);
    this.masterGain.connect(this.ctx.destination);

    // ==========================================
    // 1. Crystal-Clear Shoreline Ocean Waves Swell
    // ==========================================
    this.oceanGain = this.ctx.createGain();
    this.oceanGain.gain.setValueAtTime(0.62, t);
    this.oceanGain.connect(this.masterGain);

    const bufferSize = this.ctx.sampleRate * 4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.095;
      b6 = white * 0.115926;
    }

    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = buffer;
    this.noiseNode.loop = true;

    // Rich Low-pass Filter for body & deep roll (380Hz base, sweeping to 750Hz)
    const waveFilter = this.ctx.createBiquadFilter();
    waveFilter.type = 'lowpass';
    waveFilter.frequency.setValueAtTime(380, t);
    waveFilter.Q.setValueAtTime(2.2, t);

    // Wave Gain Modulation (creates physical surge and recede dynamic)
    const waveAmpGain = this.ctx.createGain();
    waveAmpGain.gain.setValueAtTime(0.55, t);

    // Slow LFO for natural wave cycle (~7.8s per wave surge)
    this.lfo = this.ctx.createOscillator();
    this.lfo.frequency.setValueAtTime(0.128, t);

    // Modulate Filter Frequency with LFO
    const lfoFilterGain = this.ctx.createGain();
    lfoFilterGain.gain.setValueAtTime(280, t);
    this.lfo.connect(lfoFilterGain);
    lfoFilterGain.connect(waveFilter.frequency);

    // Modulate Amplitude with LFO
    const lfoAmpGain = this.ctx.createGain();
    lfoAmpGain.gain.setValueAtTime(0.35, t);
    this.lfo.connect(lfoAmpGain);
    lfoAmpGain.connect(waveAmpGain.gain);

    // Foam & Water Spray Filter (Bandpass at 950Hz for crisp water wash over sand)
    const foamFilter = this.ctx.createBiquadFilter();
    foamFilter.type = 'bandpass';
    foamFilter.frequency.setValueAtTime(950, t);
    foamFilter.Q.setValueAtTime(1.2, t);

    const foamGain = this.ctx.createGain();
    foamGain.gain.setValueAtTime(0.28, t);

    this.noiseNode.connect(waveFilter);
    waveFilter.connect(waveAmpGain);
    waveAmpGain.connect(this.oceanGain);

    this.noiseNode.connect(foamFilter);
    foamFilter.connect(foamGain);
    foamGain.connect(waveAmpGain);

    this.noiseNode.start(0);
    this.lfo.start(0);

    // ==========================================
    // 2. Prominent & Sweet Tropical Birdsong Bus
    // ==========================================
    this.birdsGain = this.ctx.createGain();
    this.birdsGain.gain.setValueAtTime(0.75, t);
    this.birdsGain.connect(this.masterGain);

    this.isPlaying = true;

    // Immediate welcoming bird melody ~500ms after start
    setTimeout(() => {
      if (this.isPlaying) {
        this.playBirdChirp();
        setTimeout(() => this.playBirdChirp(), 280);
      }
    }, 500);

    // Schedule regular continuous natural birdsong
    this.scheduleNextBirdChirp(1800);
  }

  // Synthesizes rich, organic tropical birdsong with natural pitch curves
  playBirdChirp() {
    if (!this.isPlaying || !this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const overtone = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const overtoneGain = this.ctx.createGain();

    osc.type = 'sine';
    overtone.type = 'sine';

    // 4 Distinct Sweet Tropical Island Bird Calls
    const birdType = Math.floor(Math.random() * 4);

    if (birdType === 0) {
      // 1. The Island Songbird (Two-tone ascending whistle)
      const baseFreq = 2200 + Math.random() * 400;
      osc.frequency.setValueAtTime(baseFreq, t);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.45, t + 0.09);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.25, t + 0.18);

      overtone.frequency.setValueAtTime(baseFreq * 2, t);
      overtone.frequency.exponentialRampToValueAtTime(baseFreq * 2.9, t + 0.09);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.24);

      overtoneGain.gain.setValueAtTime(0.001, t);
      overtoneGain.gain.linearRampToValueAtTime(0.04, t + 0.04);
      overtoneGain.gain.exponentialRampToValueAtTime(0.001, t + 0.24);

      osc.connect(gain);
      overtone.connect(overtoneGain);
      gain.connect(this.birdsGain);
      overtoneGain.connect(this.birdsGain);

      osc.start(t);
      overtone.start(t);
      osc.stop(t + 0.25);
      overtone.stop(t + 0.25);

    } else if (birdType === 1) {
      // 2. The Paradise Finch (Rapid triple warble/trill)
      const baseFreq = 2600 + Math.random() * 500;
      osc.frequency.setValueAtTime(baseFreq, t);
      osc.frequency.linearRampToValueAtTime(baseFreq * 1.3, t + 0.05);
      osc.frequency.linearRampToValueAtTime(baseFreq * 0.95, t + 0.1);
      osc.frequency.linearRampToValueAtTime(baseFreq * 1.35, t + 0.16);
      osc.frequency.linearRampToValueAtTime(baseFreq * 0.9, t + 0.22);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.16, t + 0.04);
      gain.gain.linearRampToValueAtTime(0.14, t + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.26);

      osc.connect(gain);
      gain.connect(this.birdsGain);

      osc.start(t);
      osc.stop(t + 0.27);

    } else if (birdType === 2) {
      // 3. The Golden Palm Whistler (High-pitched clear call)
      const baseFreq = 3100 + Math.random() * 400;
      osc.frequency.setValueAtTime(baseFreq, t);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.28, t + 0.07);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.85, t + 0.2);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.19, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      osc.connect(gain);
      gain.connect(this.birdsGain);

      osc.start(t);
      osc.stop(t + 0.23);

    } else {
      // 4. The Frangipani Chirp (Sweet double pip)
      const baseFreq = 2400 + Math.random() * 300;
      osc.frequency.setValueAtTime(baseFreq, t);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.38, t + 0.06);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.17, t + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

      osc.connect(gain);
      gain.connect(this.birdsGain);

      osc.start(t);
      osc.stop(t + 0.15);
    }
  }

  scheduleNextBirdChirp(delay = null) {
    if (!this.isPlaying) return;

    // Natural interval: between 1.8s and 3.8s for pleasant continuous birdsong
    const nextInterval = delay || (1800 + Math.random() * 2000);

    this.birdTimer = setTimeout(() => {
      if (this.isPlaying) {
        this.playBirdChirp();

        // 60% chance to play an answering chirp immediately after
        if (Math.random() > 0.4) {
          setTimeout(() => {
            if (this.isPlaying) this.playBirdChirp();
          }, 180 + Math.random() * 160);
        }

        this.scheduleNextBirdChirp();
      }
    }, nextInterval);
  }

  stop() {
    if (!this.isPlaying || !this.ctx) return;

    if (this.birdTimer) {
      clearTimeout(this.birdTimer);
      this.birdTimer = null;
    }

    if (this.masterGain) {
      const t = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, t);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, t + 1);

      setTimeout(() => {
        try {
          if (this.noiseNode) this.noiseNode.stop();
          if (this.lfo) this.lfo.stop();
        } catch (e) {}
        this.isPlaying = false;
      }, 1000);
    } else {
      this.isPlaying = false;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  playChime() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(659.25, t); // E5 warm harmony
    osc.frequency.exponentialRampToValueAtTime(1318.5, t + 0.4);

    gain.gain.setValueAtTime(0.05, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 1);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 1);
  }
}

export const soundscape = new SoundscapeEngine();
