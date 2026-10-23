import React, { useEffect, useRef } from 'react';
import { subscribeConfetti } from '../utils/confetti';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  r: number;
  vr: number;
  c: string;
  life: number;
  max: number;
}

export const ConfettiCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const COLS = ['#FF6B4A', '#FFC933', '#3DDBA6', '#8EA2FF', '#FF8AD1', '#C9A7FF'];
    let parts: Particle[] = [];
    let raf = 0;

    const sizeCanvas = () => {
      const d = window.devicePixelRatio || 1;
      cv.width = window.innerWidth * d;
      cv.height = window.innerHeight * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
    };

    sizeCanvas();
    window.addEventListener('resize', sizeCanvas);

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      parts = parts.filter((p) => p.life < p.max);
      parts.forEach((p) => {
        p.vy += 0.35;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        p.life++;
        ctx.save();
        ctx.globalAlpha = Math.min(1, (p.max - p.life) / 25);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (parts.length > 0) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const burst = (x: number, y: number, n = 28) => {
      if (reduceMotion) return;
      for (let i = 0; i < n; i++) {
        parts.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 13,
          vy: -Math.random() * 12 - 3,
          w: 6 + Math.random() * 7,
          h: 4 + Math.random() * 5,
          r: Math.random() * 6,
          vr: (Math.random() - 0.5) * 0.4,
          c: COLS[(Math.random() * COLS.length) | 0],
          life: 0,
          max: 70 + Math.random() * 45,
        });
      }
      if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    };

    const unsubscribe = subscribeConfetti((x, y, count) => {
      burst(x, y, count);
    });

    return () => {
      window.removeEventListener('resize', sizeCanvas);
      unsubscribe();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="confetti"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  );
};
