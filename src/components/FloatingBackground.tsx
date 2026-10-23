import React, { useEffect, useRef } from 'react';

interface Shape {
  k: 'circle' | 'ring' | 'star' | 'plus' | 'squig';
  x: number;
  y: number;
  bvx: number;
  bvy: number;
  vx: number;
  vy: number;
  s: number;
  r: number;
  vr: number;
  c: string;
}

export const FloatingBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const PAL = ['#FF6B4A', '#FFC933', '#3DDBA6', '#8EA2FF', '#FF8AD1', '#C9A7FF'];
    const KINDS: ('circle' | 'ring' | 'star' | 'plus' | 'squig')[] = ['circle', 'ring', 'star', 'plus'];
    let shapes: Shape[] = [];
    let inkColor = '#14163A';
    let frame = 0;
    let animId = 0;
    const mouse = { x: -999, y: -999 };

    const readInk = () => {
      inkColor = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || inkColor;
    };

    const makeShapes = () => {
      const n = Math.round(Math.max(6, Math.min(12, (window.innerWidth * window.innerHeight) / 110000)));
      shapes = [];
      for (let i = 0; i < n; i++) {
        const a = Math.random() * 6.28;
        const sp = 0.15 + Math.random() * 0.3;
        shapes.push({
          k: KINDS[i % KINDS.length],
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          bvx: Math.cos(a) * sp,
          bvy: Math.sin(a) * sp,
          vx: 0,
          vy: 0,
          s: 14 + Math.random() * 20,
          r: Math.random() * 6.28,
          vr: (Math.random() - 0.5) * 0.012,
          c: PAL[(Math.random() * PAL.length) | 0],
        });
      }
    };

    const sizeCanvas = () => {
      const d = window.devicePixelRatio || 1;
      cv.width = window.innerWidth * d;
      cv.height = window.innerHeight * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      makeShapes();
      drawBg();
    };

    const drawShape = (o: Shape) => {
      const s = o.s;
      ctx.save();
      ctx.translate(o.x, o.y);
      ctx.rotate(o.r);
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.fillStyle = o.c;
      ctx.strokeStyle = o.c;

      if (o.k === 'circle') {
        ctx.globalAlpha = 0.38;
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.7, 0, 6.283);
        ctx.fill();
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = inkColor;
        ctx.stroke();
      } else if (o.k === 'ring') {
        ctx.globalAlpha = 0.5;
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.62, 0, 6.283);
        ctx.stroke();
      } else if (o.k === 'star') {
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          const a = (i * Math.PI) / 2;
          ctx.lineTo(Math.cos(a) * s * 0.9, Math.sin(a) * s * 0.9);
          ctx.lineTo(Math.cos(a + Math.PI / 4) * s * 0.26, Math.sin(a + Math.PI / 4) * s * 0.26);
        }
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = inkColor;
        ctx.stroke();
      } else if (o.k === 'plus') {
        ctx.globalAlpha = 0.55;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(-s * 0.6, 0);
        ctx.lineTo(s * 0.6, 0);
        ctx.moveTo(0, -s * 0.6);
        ctx.lineTo(0, s * 0.6);
        ctx.stroke();
      } else if (o.k === 'squig') {
        ctx.globalAlpha = 0.55;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(-s, 0);
        for (let j = 0; j < 4; j++) {
          ctx.quadraticCurveTo(-s + (j * s) / 2 + s / 4, (j % 2 ? 1 : -1) * s * 0.5, -s + ((j + 1) * s) / 2, 0);
        }
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawBg = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      shapes.forEach(drawShape);
    };

    const stepBg = () => {
      frame++;
      if (frame % 60 === 0) readInk();
      const W = window.innerWidth;
      const H = window.innerHeight;

      shapes.forEach((o) => {
        const dx = o.x - mouse.x;
        const dy = o.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 170 && dist > 0.1) {
          const f = (1 - dist / 170) * 1.1;
          o.vx += (dx / dist) * f;
          o.vy += (dy / dist) * f;
          o.r += f * 0.05 * (dx > 0 ? 1 : -1);
        }
        o.vx += (o.bvx - o.vx) * 0.03;
        o.vy += (o.bvy - o.vy) * 0.03;
        o.x += o.vx;
        o.y += o.vy;
        o.r += o.vr;
        const m = o.s * 1.2;
        if (o.x < -m) o.x = W + m;
        else if (o.x > W + m) o.x = -m;
        if (o.y < -m) o.y = H + m;
        else if (o.y > H + m) o.y = -m;
      });

      drawBg();
      animId = requestAnimationFrame(stepBg);
    };

    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onPointerLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    readInk();
    sizeCanvas();
    window.addEventListener('resize', sizeCanvas);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave);

    if (!reduceMotion) {
      animId = requestAnimationFrame(stepBg);
    }

    return () => {
      window.removeEventListener('resize', sizeCanvas);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg"
      aria-hidden="true"
      style={{
        opacity: 0.55,
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};
