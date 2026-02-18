'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { Star, Award } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLHeadingElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Cinematic parallax
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  // GSAP scroll-reveal for main statement
  useEffect(() => {
    if (!statementRef.current) return;

    const split = new SplitType(statementRef.current, {
      types: 'chars,words',
    });

    if (!split.chars) return;

    gsap.set(split.chars, {
      opacity: 0,
      y: 20,
      rotateX: -90,
      transformOrigin: 'center bottom',
    });

    gsap.to(split.chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      ease: 'power4.out',
      stagger: {
        amount: 0.8,
        from: 'start',
        ease: 'power3.inOut',
      },
      scrollTrigger: {
        trigger: statementRef.current,
        start: 'top 75%',
        end: 'center 40%',
        scrub: 0.5,
      },
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === statementRef.current) t.kill();
      });
    };
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative py-24 md:py-32 overflow-hidden bg-brown">
      {/* Cinematic Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale: imageScale,
          opacity: imageOpacity,
        }}
      >
        <Image
          src="/team-founders.jpg"
          alt="Chefs Connect Story"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Premium vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(44,24,16,0.8)_100%)]" />
      </motion.div>

      {/* Heavy overlay for text clarity */}
      <div className="absolute inset-0 bg-brown/75 backdrop-blur-[2px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Year Badge - Floating */}
        <motion.div
          ref={yearRef}
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 blur-2xl" />
            <div className="relative px-8 py-3 border border-gold/40 bg-brown/40 backdrop-blur-sm">
              <span className="font-playfair text-sm md:text-base text-gold tracking-[0.3em]">
                EST. 2024
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Statement - Scroll Reveal */}
        <h2
          ref={statementRef}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-cream text-center leading-[1.2] mb-16 md:mb-20"
        >
          Jouw partner als het gaat om{' '}
          <span className="text-gold italic">horeca professionals</span> en{' '}
          <span className="text-gold italic">evenementen</span>.
        </h2>

        {/* Chef Excellence Showcase */}
        <motion.div
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-cream/5 backdrop-blur-sm border-2 border-gold/30 p-8 md:p-12 relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/50" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/50" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Score Display */}
              <div className="flex flex-col items-center md:border-r md:border-cream/20 md:pr-8">
                {/* Gault&Millau Logo SVG - Compact */}
                <svg viewBox="0 0 260.9 151.4" className="w-24 h-auto mb-4 opacity-80">
                  <path fill="#C9A961" d="M239.6,35c7.3,1,11,5,11,8.8c0,2.6-1.9,4.4-4.6,4.4c-2.4,0-4.4-1.9-4.4-4.4c0-2.8,2-4,2-5.2
                    C243.3,37.4,242.5,35.6,239.6,35 M235.3,35c-6.5,1-9.3,7.1-9.3,14.4c0,6.2,0,11,5.2,12.8c-8.3-1.7-14.1-5.9-14.1-12.9
                    C217.1,39.9,224.9,35.5,235.3,35 M235.3,96.5c-12.4-0.9-20.6-6.3-20.6-17.6c0-8.9,6.2-13.3,16-15.2c-5.5,2.1-7.2,7.4-7.2,15.2
                    C223.6,87.3,226.8,94.7,235.3,96.5" />
                  <path fill="#C9A961" d="M248.2,64.4c-8.6,2.8-16.3,4.8-16.3,8.9c0,0-0.5-0.6-0.6-1.6c-0.8-7.1,6.9-9.5,15.2-12.3c9.3-3,13.7-4.6,13.7-8.5
                    c0,0,0.5,0.7,0.6,1.5c0.7,6.3-5.2,9.5-12.2,11.9 M240.6,96.5c6.5-1,9.3-7.1,9.3-14.4c0-6.2,0-11-5.2-12.8
                    c8.3,1.7,14.1,5.9,14.1,12.9C258.8,91.7,251,96,240.6,96.5 M59.1,66.9c-4.4,1.6-13,4-22.3,4c-11.7,0-20.6-3-27.2-9.3
                    c-6.2-5.8-9.8-15-9.6-25.5c0-21.9,15.6-36,38.6-36c8.5,0,15.2,1.7,18.4,3.3l-2.8,10.2c-3.8-1.6-8.5-3-15.7-3
                    c-14.8,0-25.2,8.7-25.2,24.9c0,15.7,9.6,25.1,24.1,25.1c4.5,0,7.9-0.6,9.5-1.4V41.7H34.5v-10H59L59.1,66.9L59.1,66.9z M92.7,45.6
                    c-8.9-0.2-17.4,1.7-17.4,9.3c0,4.9,3.1,7.2,7.2,7.2c5,0,8.7-3.3,9.9-6.9c0.2-0.9,0.5-1.9,0.5-2.8L92.7,45.6L92.7,45.6z M94.3,70
                    l-0.8-5.6h-0.3c-3.1,4-8.4,6.7-14.8,6.7c-10.1,0-15.7-7.3-15.7-14.9c0-12.7,11.2-19.1,29.8-18.9v-0.8c0-3.3-1.4-8.7-10.2-8.7
                    c-4.9,0-10.1,1.5-13.5,3.7l-2.4-8.3c3.7-2.2,10.2-4.4,18.1-4.4c16,0,20.7,10.2,20.7,21v18.1c0,4.5,0.2,8.9,0.7,12.1H94.3L94.3,70z
                    M157,55c0,5.9,0.2,10.9,0.5,15h-11.2l-0.6-7.6h-0.2c-2.2,3.6-7.1,8.7-16,8.7c-9.2,0-17.4-5.5-17.4-21.9V19.9h12.7v27.2
                    c0,8.4,2.7,13.7,9.4,13.7c5,0,8.4-3.6,9.6-6.7c0.5-1.2,0.7-2.4,0.7-4V19.9h12.7L157,55L157,55z M164.6,70h12.8V0h-12.8V70z
                    M201.3,5.6v14.3h12.1v9.5h-12.1v22.1c0,6,1.6,9.3,6.5,9.3c1.6,0,3.4-0.2,4.9-0.6l0.2,9.6c-1.9,0.7-5.1,1.3-9.2,1.3
                    c-4.6,0-8.5-1.5-10.9-4.1c-2.7-2.9-4-7.4-4-13.9V29.4h-7.2V20h7.2V8.7L201.3,5.6L201.3,5.6z M63.5,122.1
                    c-0.5-8.9-0.9-19.8-0.8-29.1h-0.3c-2.4,8.9-5.1,17.8-8.3,26.5l-10,30h-9.8L25,119.9c-2.7-8.8-5-17.9-7-27h-0.2
                    c-0.3,9.9-0.7,19.6-1.3,29.5L15,150.3H3.2L7.8,81h16.6l9.1,27.9c2.4,7.9,4.5,15.9,6.4,24.1h0.3c2-8.1,4.3-16.2,6.9-24.2L56.6,81
                    h16.5l4.1,69.3H64.8L63.5,122.1L63.5,122.1z M88.4,150.3h12.8v-50.1H88.4V150.3z M101.8,86.3c0,3.8-2.8,6.7-7.2,6.7
                    c-4.2,0-7-3-7-6.7c0-4,2.9-6.9,7.1-6.9C99,79.4,101.7,82.3,101.8,86.3z M112.6,150.3h12.8V81h-12.8V150.3z M136.9,150.3h12.8V81
                    h-12.8V150.3z M187.9,125.8c-8.9-0.2-17.4,1.7-17.4,9.3c0,4.9,3.1,7.2,7.2,7.2c5,0,8.7-3.3,9.9-6.9c0.2-0.9,0.5-1.9,0.5-2.8
                    C187.9,132.8,187.9,125.8,187.9,125.8z M189.5,150.3l-0.8-5.6h-0.3c-3.1,4-8.4,6.7-14.8,6.7c-10.1,0-15.7-7.3-15.7-14.9
                    c0-12.7,11.2-19.1,29.8-18.9v-0.8c0-3.3-1.3-8.7-10.2-8.7c-4.9,0-10.1,1.5-13.5,3.7l-2.4-8.3c3.7-2.2,10.2-4.4,18.1-4.4
                    c16,0,20.7,10.2,20.7,21v18.1c0,4.5,0.2,8.9,0.7,12.1C201,150.3,189.5,150.3,189.5,150.3z M256.3,135.3c0,5.9,0.2,10.9,0.5,15
                    h-11.2l-0.6-7.6h-0.2c-2.2,3.6-7.1,8.7-16,8.7c-9.2,0-17.4-5.5-17.4-21.9v-29.4h12.7v27.2c0,8.4,2.7,13.7,9.3,13.7
                    c5,0,8.4-3.6,9.6-6.7c0.5-1.2,0.7-2.4,0.7-4v-30.2h12.7L256.3,135.3L256.3,135.3z" />
                </svg>
                
                <div className="text-center mb-3">
                  <div className="font-playfair text-5xl md:text-6xl font-light text-gold mb-1">14,5</div>
                  <div className="font-inter text-xs uppercase tracking-widest text-cream/70">/ 20</div>
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                
                <p className="font-inter text-xs uppercase tracking-wider text-cream/60">
                  Officieel Bekroond
                </p>
              </div>

              {/* Chef Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <Award className="w-8 h-8 text-gold flex-shrink-0" />
                  <h3 className="font-playfair text-xl md:text-2xl text-cream">
                    Chef-kok <span className="text-gold italic">Reda Hamite</span>
                  </h3>
                </div>
                <p className="font-inter text-sm md:text-base text-cream/80 leading-relaxed mb-3">
                  Onder zijn leiding combineren wij gastronomie, gastvrijheid en perfectie in uitvoering.
                </p>
                <div className="inline-flex items-center gap-2 bg-cream/10 px-4 py-2 border border-gold/20">
                  <span className="font-inter text-xs text-cream/70">Al 20 jaar gastronomisch topniveau</span>
                </div>
              </div>
            </div>

            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-50 pointer-events-none" />
          </div>
        </motion.div>

        {/* Single Powerful CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href="/over-ons"
            className="group inline-flex items-center gap-4 px-12 py-6 font-inter text-sm uppercase tracking-[0.2em] text-cream border-2 border-gold/40 hover:border-gold hover:bg-gold/10 transition-all duration-500 relative overflow-hidden"
          >
            <span className="relative z-10 font-medium">Ons verhaal</span>
            <motion.div
              className="relative z-10 w-8 h-[2px] bg-gold"
              initial={{ width: 32 }}
              whileHover={{ width: 48 }}
              transition={{ duration: 0.3 }}
            />
            {/* Premium shine */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-brown/50 to-cream z-0" />
    </section>
  );
}
