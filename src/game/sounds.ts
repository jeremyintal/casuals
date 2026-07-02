let ctx: AudioContext | null = null
let muted = false

function ac(): AudioContext {
  if (!ctx) ctx = new AudioContext()
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

export function setMuted(m: boolean) {
  muted = m
}
export function isMuted() {
  return muted
}

function tone(freq: number, dur: number, type: OscillatorType, gain = 0.15, when = 0) {
  if (muted) return
  const c = ac()
  const o = c.createOscillator()
  const g = c.createGain()
  o.type = type
  o.frequency.value = freq
  g.gain.setValueAtTime(gain, c.currentTime + when)
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + when + dur)
  o.connect(g).connect(c.destination)
  o.start(c.currentTime + when)
  o.stop(c.currentTime + when + dur)
}

function noise(dur: number, gain = 0.2, filterFrom = 4000, filterTo = 400) {
  if (muted) return
  const c = ac()
  const len = Math.floor(c.sampleRate * dur)
  const buf = c.createBuffer(1, len, c.sampleRate)
  const data = buf.getChannelData(0)
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1
  const src = c.createBufferSource()
  src.buffer = buf
  const f = c.createBiquadFilter()
  f.type = 'lowpass'
  f.frequency.setValueAtTime(filterFrom, c.currentTime)
  f.frequency.exponentialRampToValueAtTime(filterTo, c.currentTime + dur)
  const g = c.createGain()
  g.gain.setValueAtTime(gain, c.currentTime)
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur)
  src.connect(f).connect(g).connect(c.destination)
  src.start()
}

export const sounds = {
  tick() {
    tone(1200, 0.04, 'square', 0.05)
  },
  swish() {
    noise(0.35, 0.25, 6000, 800)
    tone(880, 0.12, 'sine', 0.08, 0.05)
  },
  clank() {
    tone(180, 0.18, 'square', 0.2)
    tone(120, 0.25, 'sawtooth', 0.15, 0.02)
  },
  buzzer() {
    tone(220, 0.9, 'sawtooth', 0.25)
    tone(110, 0.9, 'square', 0.2)
  },
  crowd() {
    noise(1.6, 0.3, 2500, 1200)
    tone(523, 0.5, 'sine', 0.06, 0.1)
    tone(659, 0.5, 'sine', 0.06, 0.2)
    tone(784, 0.7, 'sine', 0.07, 0.3)
  },
}
