'use client';

import { useRef, useEffect, useState } from 'react';
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Image from 'next/image';
import Link from 'next/link';
import VideoBackground from '@/components/ui/VideoBackground';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  // Parallax effect: image moves slower than scroll
  const yTransform = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Scroll-linked opacity for content
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // GSAP Timeline Animation: Logo → Text with Character Reveal
  useEffect(() => {
    if (!logoRef.current || !textRef.current) return;

    let splitText: SplitType | null = null;
    let tl: gsap.core.Timeline | null = null;

    try {
      // Split text into characters using SplitType
      splitText = new SplitType(textRef.current, {
        types: 'chars',
      });
      const charElements = splitText.chars;

      // Hide text container initially
      gsap.set(textRef.current, { opacity: 0 });

      // Create GSAP Timeline - Start after loading screen (3 seconds)
      tl = gsap.timeline({ delay: 3 });

      // Step A: Logo disappears
      tl.to(logoRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          if (logoRef.current) {
            logoRef.current.style.display = 'none';
          }
        },
      });

      // Step B: Character reveal with Chronicle effect
      tl.set(textRef.current, { opacity: 1 }) // Make text container visible
        .fromTo(
          charElements,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: {
              amount: 1.2, // Total time distributed across all letters
              ease: 'power3.inOut', // THE TRICK - non-linear distribution
              from: 'start',
            },
            ease: 'power2.out',
            onComplete: () => {
              setAnimationComplete(true);
            },
          },
          '+=0.2' // Small gap after logo disappears
        );
    } catch (error) {
      console.error('Error setting up GSAP animation:', error);
    }

    // Cleanup
    return () => {
      if (tl) {
        tl.kill();
      }
      if (splitText) {
        splitText.revert();
      }
    };
  }, []);

  // Button animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const logoVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Video with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          y: yTransform,
          scale: scaleTransform,
        }}
      >
        <VideoBackground
          src="/BANNER.mp4"
          fallbackImage="/hero-banner.png"
          overlay={true}
          priority={true}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6"
        style={{ opacity: contentOpacity }}
      >
        {/* Logo and Text Container - Same Position */}
        <div 
          className="absolute flex items-center justify-center w-full"
          style={{ 
            top: '50%',
            transform: 'translateY(calc(-50% + 2vh))'
          }}
        >
          {/* Logo - visible by default */}
          <div 
            ref={logoRef}
            className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] px-4 absolute"
            style={{ opacity: 1 }}
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
          </div>

          {/* Text - starts hidden, revealed by GSAP */}
          <h1
            ref={textRef}
            className="font-playfair text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-cream leading-relaxed text-center px-6 max-w-6xl absolute w-full"
            style={{ opacity: 0, lineHeight: '1.6' }}
          >
            Wij leveren <span className="text-gold italic">chefs en bediening</span>,<br className="md:hidden" /> snel en professioneel
            <br />
            <span className="block mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-cream/90">
              Van <span className="text-gold italic">private dining</span> tot <span className="text-gold italic">grote events</span>
              <br />
              Van <span className="text-gold italic">brasserie</span> tot <span className="text-gold italic">fine dining</span>
            </span>
          </h1>
        </div>

        {/* Buttons positioned below - same position always */}
        <div 
          className="absolute flex items-center justify-center w-full"
          style={{ 
            top: '50%',
            transform: 'translateY(calc(-50% + 2vh + 11rem))'
          }}
        >
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3 lg:gap-4 w-full px-6 max-w-6xl mx-auto flex-wrap mt-8"
            variants={containerVariants}
            initial="hidden"
            animate={animationComplete ? 'visible' : 'hidden'}
          >
            {/* Button 1: Ik zoek een horeca professional */}
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Link
                href="/zoek-personeel"
                className="group relative px-5 py-4 sm:px-6 md:px-7 lg:px-8 lg:py-5 font-inter text-[10px] xs:text-xs sm:text-sm lg:text-base uppercase tracking-[0.1em] sm:tracking-[0.12em] text-cream bg-cream/5 backdrop-blur-sm border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-500 overflow-hidden flex items-center justify-center w-full font-medium shadow-lg hover:shadow-gold/20"
              >
                <span className="relative z-10 text-center leading-tight">Ik zoek een horeca professional</span>
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Subtle shine animation */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
              </Link>
            </motion.div>

            {/* Button 2: Ik ben een horeca professional */}
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Link
                href="/horecaspecialist"
                className="group relative px-5 py-4 sm:px-6 md:px-7 lg:px-8 lg:py-5 font-inter text-[10px] xs:text-xs sm:text-sm lg:text-base uppercase tracking-[0.1em] sm:tracking-[0.12em] text-cream bg-cream/5 backdrop-blur-sm border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-500 overflow-hidden flex items-center justify-center w-full font-medium shadow-lg hover:shadow-gold/20"
              >
                <span className="relative z-10 text-center leading-tight">Ik ben een horeca professional</span>
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Subtle shine animation */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
              </Link>
            </motion.div>

            {/* Button 3: Ik organiseer een evenement */}
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Link
                href="/evenementen"
                className="group relative px-5 py-4 sm:px-6 md:px-7 lg:px-8 lg:py-5 font-inter text-[10px] xs:text-xs sm:text-sm lg:text-base uppercase tracking-[0.1em] sm:tracking-[0.12em] text-cream bg-cream/5 backdrop-blur-sm border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-500 overflow-hidden flex items-center justify-center w-full font-medium shadow-lg hover:shadow-gold/20"
              >
                <span className="relative z-10 text-center leading-tight">Ik organiseer een evenement</span>
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Subtle shine animation */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
