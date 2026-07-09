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

const DESKTOP_BREAKPOINT = 768;

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
  // Starts `false` (not just "unknown") so the <video> tag is absent from the
  // initial DOM. Chrome's preload scanner fetches autoplay video eagerly the
  // moment it parses the tag, ignoring the `preload` attribute entirely -- on
  // mobile that meant downloading the ~10 MB banner before anything else
  // could render, blanking out LCP. Only mount <video> once confirmed desktop.
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // matchMedia queries the layout engine directly and exposes a change
    // listener, which is more reliable under viewport emulation/resizing
    // than a single window.innerWidth read at mount.
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    setShowVideo(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setShowVideo(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;

    const handleCanPlay = () => {
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
  }, [showVideo]);

  const videoProps = {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: 'metadata',
    disablePictureInPicture: true,
    controlsList: 'nodownload nofullscreen noremoteplayback',
  };

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      {showVideo && !hasError ? (
        /* poster= shows the first video frame natively until the video is ready - no flash */
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
        // Mobile (video never mounted) and error fallback both land here,
        // using the same poster frame so there is no visual mismatch.
        <Image
          src={poster || fallbackImage}
          alt="Chefs Connect premium horeca sfeerbeeld"
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
