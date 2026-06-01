'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const rafId = useRef<number>(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    setShow(true);

    document.documentElement.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHovering = !!(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]')
      );
      if (isHovering === hovering.current) return;
      hovering.current = isHovering;

      if (ringRef.current) {
        ringRef.current.style.width = isHovering ? '44px' : '32px';
        ringRef.current.style.height = isHovering ? '44px' : '32px';
        ringRef.current.style.backgroundColor = isHovering ? 'rgba(201,169,97,0.12)' : 'transparent';
        ringRef.current.style.borderColor = isHovering ? 'rgba(201,169,97,0.5)' : '#C9A961';
      }
      if (dotRef.current) {
        dotRef.current.style.opacity = isHovering ? '0' : '1';
        dotRef.current.style.transform = isHovering
          ? `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%) scale(0)`
          : `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%) scale(1)`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      // Dot snaps to mouse
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }
      // Ring lags behind
      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.1);
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.1);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId.current);
      document.documentElement.style.cursor = '';
    };
  }, []);

  if (!show) return null;

  return (
    <>
      {/* Dot — snaps to mouse precisely */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999]"
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: '#C9A961',
          willChange: 'transform',
          transition: 'opacity 0.2s ease',
        }}
      />
      {/* Ring — lags behind for premium feel */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99998]"
        style={{
          width: '32px',
          height: '32px',
          border: '1.5px solid #C9A961',
          willChange: 'transform',
          transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
        }}
      />
    </>
  );
}
