'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile/tablet
    setIsMobile(window.innerWidth < 768);
    setIsMounted(true);

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Don't render on server or mobile
  if (!isMounted || isMobile) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-[99999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform',
      }}
    >
      {/* Gold outline circle cursor */}
      <div
        className={`transition-all duration-300 ease-out rounded-full border-2 border-gold ${
          isHovering
            ? 'w-10 h-10 border-opacity-60 bg-gold/10'
            : 'w-3 h-3 border-opacity-100'
        }`}
      />
      {/* Inner dot when not hovering */}
      {!isHovering && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gold rounded-full"
        />
      )}
    </div>
  );
}
