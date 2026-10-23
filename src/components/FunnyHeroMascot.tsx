import React, { useEffect, useRef, useState } from 'react';
import { triggerConfetti } from '../utils/confetti';

type Mood = 'cool' | 'chaos' | 'caffeine' | 'sleepy';

const QUOTES: Record<Mood, string[]> = {
  cool: [
    "I don't always test my code, but when I do, it's in production.",
    "CSS is my passion. Centering divs is my cardio.",
    "Certified 100% bug-resistant (not guaranteed).",
    "Stay fresh, stay juicy.",
  ],
  chaos: [
    "AHHH WHO TOUCHED PRODUCTION?!",
    "WHY IS THE DIV SUDDENLY IN THE KITCHEN?!",
    "git push --force and run away!",
    "It compiled on the 17th try!!",
  ],
  caffeine: [
    "I CAN SEE SOUNDS AND TASTE PIXELS.",
    "400mg deep. Shipping 14 features in 3 minutes.",
    "Who needs sleep when you have flexbox?!",
    "Type faster, brain can't keep up!",
  ],
  sleepy: [
    "Just 5 more minutes... or 5 more bugs.",
    "Error 404: Motivation not found.",
    "Is it semicolon or just a speck of dust on my screen?",
    "Zzz... dreaming in TypeScript...",
  ],
};

// Web Audio synthesizer for cartoon sound effects
const playSound = (type: 'boing' | 'squeak' | 'alarm' | 'snore') => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    if (type === 'boing') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(540, now + 0.18);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.35);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    } else if (type === 'squeak') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.12);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } else if (type === 'alarm') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.setValueAtTime(400, now + 0.1);
      osc.frequency.setValueAtTime(800, now + 0.2);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    } else if (type === 'snore') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, now);
      osc.frequency.linearRampToValueAtTime(80, now + 0.3);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.42);
    }
  } catch {
    // Audio might be blocked by browser policy until interaction
  }
};

export const FunnyHeroMascot: React.FC = () => {
  const [mood, setMood] = useState<Mood>('cool');
  const [quote, setQuote] = useState(QUOTES.cool[0]);
  const [pats, setPats] = useState(0);
  const [isWobbling, setIsWobbling] = useState(false);
  const [panicShaking, setPanicShaking] = useState(false);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [soundEnabled, setSoundEnabled] = useState(true);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const eyeLRef = useRef<SVGCircleElement | null>(null);
  const eyeRRef = useRef<SVGCircleElement | null>(null);

  // Dynamic eye tracking towards cursor
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (mood === 'sleepy' || mood === 'chaos') return;
      if (!eyeLRef.current) return;
      const rect = eyeLRef.current.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const maxOffset = 10;
      const k = Math.min(1, dist / 200) * maxOffset;
      setPupilPos({
        x: Number((dx / dist * k).toFixed(1)),
        y: Number((dy / dist * k).toFixed(1)),
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [mood]);

  const changeMood = (newMood: Mood) => {
    setMood(newMood);
    const list = QUOTES[newMood];
    const pick = list[Math.floor(Math.random() * list.length)];
    setQuote(pick);

    if (soundEnabled) {
      if (newMood === 'chaos') playSound('alarm');
      else if (newMood === 'sleepy') playSound('snore');
      else if (newMood === 'caffeine') playSound('squeak');
      else playSound('boing');
    }

    if (newMood === 'chaos') {
      setPanicShaking(true);
      setTimeout(() => setPanicShaking(false), 900);
    }
  };

  const handlePet = () => {
    const nextPats = pats + 1;
    setPats(nextPats);
    setIsWobbling(true);
    setTimeout(() => setIsWobbling(false), 500);

    if (soundEnabled) playSound('boing');

    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height * 0.45, 18);
    }

    const currentList = QUOTES[mood];
    setQuote(currentList[nextPats % currentList.length]);
  };

  const handlePanicButton = () => {
    setPanicShaking(true);
    setMood('chaos');
    setQuote("🚨 I LITERALLY SAID DO NOT PUSH! EVERYTHING IS ON FIRE! 🔥");
    if (soundEnabled) playSound('alarm');

    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height * 0.5, 60);
    }

    setTimeout(() => setPanicShaking(false), 1200);
  };

  return (
    <div
      ref={cardRef}
      className={`funny-card ${panicShaking ? 'panic-shake' : ''}`}
      aria-label="Interactive Cherry Mascot Toy"
    >
      {/* Floating silly stickers */}
      <div className="funny-badge badge-top">
        <span>⚠️ 0% Serious</span>
      </div>
      <div className="funny-badge badge-bot">
        <span>⚡ Less hype. More building.</span>
      </div>

      {/* Comic Speech Bubble */}
      <div className="funny-bubble" role="status">
        <p className="bubble-text">{quote}</p>
      </div>

      {/* SVG Cartoon Cherry Character */}
      <div
        className={`funny-mascot-wrap ${isWobbling ? 'squish-wobble' : ''} mood-${mood}`}
        onClick={handlePet}
        title="Click to poke Cherry!"
      >
        <svg viewBox="0 0 340 320" className="funny-svg" aria-hidden="true">
          {/* Shadow */}
          <ellipse cx="170" cy="300" rx="90" ry="12" style={{ fill: 'var(--ink)', opacity: 0.18 }} />

          {/* Stem & Leaves */}
          <path
            className="cherry-stem"
            d="M170 145 C170 70, 225 35, 255 45 C230 40, 195 80, 175 145"
            style={{
              fill: '#3DDBA6',
              stroke: 'var(--ink)',
              strokeWidth: 4,
              strokeLinejoin: 'round',
            }}
          />
          {/* Leaf */}
          <path
            className="cherry-leaf"
            d="M210 65 Q260 45 285 75 Q245 95 210 65 Z"
            style={{
              fill: '#3DDBA6',
              stroke: 'var(--ink)',
              strokeWidth: 3.5,
            }}
          />

          {/* Main Cherry Body */}
          <circle
            cx="170"
            cy="210"
            r="82"
            className="cherry-body"
            style={{
              fill: mood === 'chaos' ? '#FF453A' : 'var(--hot)',
              stroke: 'var(--ink)',
              strokeWidth: 6,
              transition: 'fill 0.3s ease',
            }}
          />

          {/* Gloss highlight */}
          <ellipse
            cx="135"
            cy="165"
            rx="18"
            ry="9"
            transform="rotate(-30 135 165)"
            style={{ fill: '#ffffff', opacity: 0.7 }}
          />

          {/* Rosy Blushing Cheeks */}
          <circle cx="118" cy="235" r="14" style={{ fill: 'var(--pink)', opacity: 0.85 }} />
          <circle cx="222" cy="235" r="14" style={{ fill: 'var(--pink)', opacity: 0.85 }} />

          {/* EYES */}
          {mood === 'sleepy' ? (
            /* Sleepy closed eyes (happy curves) */
            <g style={{ stroke: 'var(--navy)', strokeWidth: 5, strokeLinecap: 'round', fill: 'none' }}>
              <path d="M125 195 Q140 210 155 195" />
              <path d="M185 195 Q200 210 215 195" />
              {/* Floating Zzz */}
              <text x="245" y="150" className="zzz-anim" style={{ font: '800 24px var(--display)', fill: 'var(--sky)' }}>
                Zzz
              </text>
            </g>
          ) : mood === 'chaos' ? (
            /* Chaos spinning spiral eyes */
            <g className="chaos-eyes">
              <circle cx="140" cy="195" r="22" style={{ fill: '#fff', stroke: 'var(--ink)', strokeWidth: 4 }} />
              <circle cx="200" cy="195" r="22" style={{ fill: '#fff', stroke: 'var(--ink)', strokeWidth: 4 }} />
              <path
                d="M130 195 A10 10 0 1 0 150 195 A6 6 0 1 0 138 195"
                style={{ fill: 'none', stroke: 'var(--ink)', strokeWidth: 4, strokeLinecap: 'round' }}
              />
              <path
                d="M190 195 A10 10 0 1 0 210 195 A6 6 0 1 0 198 195"
                style={{ fill: 'none', stroke: 'var(--ink)', strokeWidth: 4, strokeLinecap: 'round' }}
              />
            </g>
          ) : (
            /* Normal & Caffeinated Googly Eyes */
            <g className="googly-eyes">
              {/* Eye Whites */}
              <circle
                ref={eyeLRef}
                cx="140"
                cy="195"
                r={mood === 'caffeine' ? 26 : 22}
                style={{ fill: '#FFFFFF', stroke: 'var(--ink)', strokeWidth: 4.5 }}
              />
              <circle
                ref={eyeRRef}
                cx="200"
                cy="195"
                r={mood === 'caffeine' ? 26 : 22}
                style={{ fill: '#FFFFFF', stroke: 'var(--ink)', strokeWidth: 4.5 }}
              />
              {/* Pupils */}
              <g
                style={{
                  transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
                  transition: 'transform 0.05s ease-out',
                }}
              >
                <circle cx="140" cy="195" r={mood === 'caffeine' ? 7 : 10} style={{ fill: 'var(--navy)' }} />
                <circle cx="137" cy="191" r="3.5" style={{ fill: '#FFFFFF' }} />

                <circle cx="200" cy="195" r={mood === 'caffeine' ? 7 : 10} style={{ fill: 'var(--navy)' }} />
                <circle cx="197" cy="191" r="3.5" style={{ fill: '#FFFFFF' }} />
              </g>
            </g>
          )}

          {/* Cool Sunglasses overlay for 'cool' mood */}
          {mood === 'cool' && (
            <g className="cool-shades">
              <polygon
                points="112,184 162,184 156,208 118,208"
                style={{ fill: '#14163A', stroke: 'var(--ground)', strokeWidth: 2 }}
              />
              <polygon
                points="178,184 228,184 222,208 184,208"
                style={{ fill: '#14163A', stroke: 'var(--ground)', strokeWidth: 2 }}
              />
              <line x1="162" y1="188" x2="178" y2="188" style={{ stroke: '#14163A', strokeWidth: 5 }} />
              {/* White glint line on shades */}
              <line x1="124" y1="187" x2="148" y2="204" style={{ stroke: '#fff', strokeWidth: 2 }} />
              <line x1="190" y1="187" x2="214" y2="204" style={{ stroke: '#fff', strokeWidth: 2 }} />
            </g>
          )}

          {/* MOUTH */}
          {mood === 'caffeine' ? (
            /* Jittery wide open screaming mouth */
            <ellipse
              cx="170"
              cy="242"
              rx="18"
              ry="14"
              style={{ fill: 'var(--navy)', stroke: 'var(--ink)', strokeWidth: 3 }}
            />
          ) : mood === 'chaos' ? (
            /* Wobbly panic squiggle mouth */
            <path
              d="M148 244 Q158 234 170 244 T192 244"
              style={{
                fill: 'none',
                stroke: 'var(--navy)',
                strokeWidth: 5,
                strokeLinecap: 'round',
              }}
            />
          ) : (
            /* Happy smile with cute tongue */
            <g>
              <path
                d="M145 235 Q170 262 195 235"
                style={{
                  fill: 'none',
                  stroke: 'var(--navy)',
                  strokeWidth: 5,
                  strokeLinecap: 'round',
                }}
              />
            </g>
          )}
        </svg>
      </div>

      {/* Mood Toggle Buttons */}
      <div className="funny-controls">
        <div className="control-label mono">Choose Cherry's Vibe:</div>
        <div className="mood-btn-group">
          <button
            type="button"
            className={`mood-chip ${mood === 'cool' ? 'active' : ''}`}
            onClick={() => changeMood('cool')}
          >
            😎 Chill
          </button>
          <button
            type="button"
            className={`mood-chip ${mood === 'caffeine' ? 'active' : ''}`}
            onClick={() => changeMood('caffeine')}
          >
            ☕ 400mg
          </button>
          <button
            type="button"
            className={`mood-chip ${mood === 'chaos' ? 'active' : ''}`}
            onClick={() => changeMood('chaos')}
          >
            🤪 Chaos
          </button>
          <button
            type="button"
            className={`mood-chip ${mood === 'sleepy' ? 'active' : ''}`}
            onClick={() => changeMood('sleepy')}
          >
            😴 2 AM
          </button>
        </div>
      </div>

      {/* Interactive Bottom Bar: Poke Count + DO NOT PRESS button */}
      <div className="funny-footer">
        <button
          type="button"
          className="btn small funny-poke-btn"
          onClick={handlePet}
        >
          👉 Poke ({pats} {pats === 1 ? 'poke' : 'pokes'})
        </button>

        <button
          type="button"
          className="danger-btn"
          onClick={handlePanicButton}
          title="We warned you!"
        >
          🚫 DO NOT PRESS
        </button>

        <button
          type="button"
          className="sound-toggle-btn"
          onClick={() => setSoundEnabled((v) => !v)}
          title={soundEnabled ? 'Mute cartoon sfx' : 'Unmute cartoon sfx'}
        >
          {soundEnabled ? '🔊' : '🔇'}
        </button>
      </div>
    </div>
  );
};
