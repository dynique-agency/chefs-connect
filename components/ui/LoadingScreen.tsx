'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload video during loading screen for smooth transition
    const video = document.createElement('video');
    video.src = '/BANNER.mp4';
    video.preload = 'auto';
    video.load();

    // Loading screen duration - 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => {
      clearTimeout(timer);
      video.src = ''; // Clean up
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-cream"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1] 
            } 
          }}
        >
          {/* Logo Animation Container - Matches Hero Position */}
          <div 
            className="absolute flex items-center justify-center w-full"
            style={{ 
              top: '50%',
              transform: 'translateY(calc(-50% + 5vh))'
            }}
          >
            <motion.div
              className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] px-4"
              initial={{ 
                scale: 1.8,
                opacity: 0,
              }}
              animate={{ 
                scale: 1,
                opacity: 1,
              }}
              transition={{
                scale: {
                  duration: 2.5,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: 0.8,
                  ease: 'easeOut',
                },
              }}
            >
              <div className="relative w-full aspect-[4/1]">
                <Image
                  src="/chefsconnectlogo.png"
                  alt="Chefs Connect"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
                />
              </div>
            </motion.div>
          </div>

          {/* Optional: Subtle animation indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="w-1 h-1 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
