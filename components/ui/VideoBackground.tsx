'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  overlay?: boolean;
  className?: string;
  priority?: boolean;
}

export default function VideoBackground({
  src,
  fallbackImage = '/hero-banner.png',
  overlay = true,
  className = '',
  priority = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 
                  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      // Ensure video plays on mobile
      video.play().catch(err => {
        console.warn('Video autoplay failed:', err);
      });
    };

    const handleError = () => {
      setHasError(true);
      console.warn('Video failed to load, using fallback image');
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Attempt to load and play
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  // Performance optimization: reduce quality on mobile
  const videoProps = {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: priority ? 'auto' : 'metadata',
    disablePictureInPicture: true,
    controlsList: 'nodownload nofullscreen noremoteplayback',
  };

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      {!hasError ? (
        <>
          {/* Video */}
          <video
            ref={videoRef}
            {...videoProps}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              perspective: 1000,
              willChange: 'transform',
            }}
          >
            <source src={src} type="video/mp4" />
          </video>

          {/* Loading placeholder - show fallback image while video loads */}
          {!isLoaded && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={fallbackImage}
                alt="Background"
                fill
                className="object-cover"
                priority={priority}
                quality={isMobile ? 75 : 90}
                sizes="100vw"
              />
            </div>
          )}
        </>
      ) : (
        // Fallback image on error
        <Image
          src={fallbackImage}
          alt="Background"
          fill
          className="object-cover"
          priority={priority}
          sizes="100vw"
        />
      )}

      {/* Optional overlay gradient */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-brown/70 via-brown/50 to-brown/80" />
      )}
    </div>
  );
}
