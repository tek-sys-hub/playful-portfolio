import React, { useEffect, useRef, useState } from 'react';
import { BLOOP_LINES, BLOOP_MOODS } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

interface BloopProps {
  pokes: number;
  onPoke: () => void;
}

const SMILE = 'M122 208 Q160 242 198 208';
const OOH = 'M148 210 Q160 240 172 210 Q160 198 148 210Z';

export const Bloop: React.FC<BloopProps> = ({ pokes, onPoke }) => {
  const [bubbleText, setBubbleText] = useState('Hi! Poke me.');
  const [showBubble, setShowBubble] = useState(false);
  const [isSquishing, setIsSquishing] = useState(false);
  const [mouthD, setMouthD] = useState(SMILE);
  const [mouthFill, setMouthFill] = useState('none');
  const [pupilLTransform, setPupilLTransform] = useState('translate(0 0)');
  const [pupilRTransform, setPupilRTransform] = useState('translate(0 0)');

  const eyeLRef = useRef<SVGCircleElement | null>(null);
  const eyeRRef = useRef<SVGCircleElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const bubbleTimerRef = useRef<number | null>(null);
  const mouthTimerRef = useRef<number | null>(null);
  const moodIndexRef = useRef<number>(0);

  // Initial greeting
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowBubble(true);
      bubbleTimerRef.current = window.setTimeout(() => {
        setShowBubble(false);
      }, 2800);
    }, 900);
    return () => {
      clearTimeout(timer);
      if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
      if (mouthTimerRef.current) clearTimeout(mouthTimerRef.current);
    };
  }, []);

  // Eye tracking cursor
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      const eyeL = eyeLRef.current;
      const eyeR = eyeRRef.current;
      if (!eyeL || !eyeR) return;

      const calcPupil = (el: SVGCircleElement) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const k = Math.min(1, len / 160) * 14;
        return `translate(${(dx / len * k).toFixed(1)} ${(dy / len * k).toFixed(1)})`;
      };

      setPupilLTransform(calcPupil(eyeL));
      setPupilRTransform(calcPupil(eyeR));
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  const handlePoke = () => {
    const newPokeCount = pokes + 1;
    onPoke();

    // Mood color cycle
    moodIndexRef.current = (moodIndexRef.current + 1) % BLOOP_MOODS.length;
    const newColor = BLOOP_MOODS[moodIndexRef.current];
    document.documentElement.style.setProperty('--hot', newColor);

    // Bubble speech
    const line = BLOOP_LINES[(newPokeCount - 1) % BLOOP_LINES.length];
    setBubbleText(line);
    setShowBubble(true);
    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    bubbleTimerRef.current = window.setTimeout(() => {
      setShowBubble(false);
    }, 2800);

    // Squish animation trigger
    setIsSquishing(false);
    requestAnimationFrame(() => {
      setIsSquishing(true);
      setTimeout(() => setIsSquishing(false), 600);
    });

    // Mouth morph to "ooh"
    setMouthD(OOH);
    setMouthFill('var(--navy)');
    if (mouthTimerRef.current) clearTimeout(mouthTimerRef.current);
    mouthTimerRef.current = window.setTimeout(() => {
      setMouthD(SMILE);
      setMouthFill('none');
    }, 800);

    // Confetti burst from Bloop
    if (buttonRef.current) {
      const r = buttonRef.current.getBoundingClientRect();
      triggerConfetti(r.left + r.width / 2, r.top + r.height * 0.35, 26);
    }
  };

  return (
    <div className="buddy">
      <div className={`bubble ${showBubble ? 'show' : ''}`} role="status" aria-live="polite">
        {bubbleText}
      </div>
      <button
        ref={buttonRef}
        className={`bloop ${isSquishing ? 'squish' : ''}`}
        type="button"
        aria-label="Poke Bloop, the blob"
        onClick={handlePoke}
      >
        <svg viewBox="0 0 320 320" aria-hidden="true">
          <ellipse cx="160" cy="306" rx="96" ry="9" style={{ fill: 'var(--ink)', opacity: 0.18 }} />
          <path
            className="blob"
            d="M160 28 C242 26 298 90 294 170 C290 252 230 298 160 294 C90 290 30 252 30 170 C30 96 80 30 160 28Z"
            style={{ stroke: 'var(--navy)', strokeWidth: 5 }}
          />
          <g className="eyes">
            <circle
              ref={eyeLRef}
              cx="116"
              cy="140"
              r="31"
              style={{ fill: '#fff', stroke: 'var(--navy)', strokeWidth: 4 }}
            />
            <circle
              ref={eyeRRef}
              cx="204"
              cy="140"
              r="31"
              style={{ fill: '#fff', stroke: 'var(--navy)', strokeWidth: 4 }}
            />
            <g transform={pupilLTransform}>
              <circle cx="116" cy="140" r="14" style={{ fill: 'var(--navy)' }} />
              <circle cx="111" cy="134" r="4.5" style={{ fill: '#fff' }} />
            </g>
            <g transform={pupilRTransform}>
              <circle cx="204" cy="140" r="14" style={{ fill: 'var(--navy)' }} />
              <circle cx="199" cy="134" r="4.5" style={{ fill: '#fff' }} />
            </g>
          </g>
          <circle cx="76" cy="200" r="16" style={{ fill: 'var(--pink)', opacity: 0.8 }} />
          <circle cx="244" cy="200" r="16" style={{ fill: 'var(--pink)', opacity: 0.8 }} />
          <path
            d={mouthD}
            style={{
              fill: mouthFill,
              stroke: 'var(--navy)',
              strokeWidth: 6,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              transition: 'fill 0.2s',
            }}
          />
        </svg>
      </button>
    </div>
  );
};
