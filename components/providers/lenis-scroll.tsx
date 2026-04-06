'use client';

import { ReactNode } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function LenisScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}

