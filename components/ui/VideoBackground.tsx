'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  poster?: string;
  overlay?: boolean;
  className?: string;
  priority?: boolean;
}

export default function VideoBackground({
  src,
  fallbackImage = '/hero-banner.webp',
  poster,
  overlay = true,
  className = '',
  priority = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      // Ensure video plays on mobile where autoplay may be blocked
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
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

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
        /* poster= shows the first video frame natively until the video is ready — no flash */
        <video
          ref={videoRef}
          {...videoProps}
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'transform',
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        // Static fallback if video fails to load entirely
        <Image
          src={fallbackImage}
          alt="Background"
          fill
          className="object-cover"
          priority={priority}
          sizes="100vw"
        />
      )}

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-brown/70 via-brown/50 to-brown/80" />
      )}
    </div>
  );
}
