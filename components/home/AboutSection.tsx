'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

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
          src="/about-team.png"
          alt="Chefs Connect Story"
          fill
          className="object-cover object-center"
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

        {/* Compact Story Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Stat 1 */}
          <div className="text-center md:text-left">
            <div className="font-playfair text-5xl md:text-6xl font-light text-gold mb-2">
              15+
            </div>
            <p className="font-inter text-sm text-cream/70 leading-relaxed">
              Jaar ervaring in culinair
              <br />
              talent matching
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block">
            <div className="h-full w-px bg-cream/10 mx-auto" />
          </div>

          {/* Stat 2 */}
          <div className="text-center md:text-left">
            <div className="font-playfair text-5xl md:text-6xl font-light text-gold mb-2">
              500+
            </div>
            <p className="font-inter text-sm text-cream/70 leading-relaxed">
              Succesvolle matches tussen
              <br />
              talent en toprestaurants
            </p>
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
