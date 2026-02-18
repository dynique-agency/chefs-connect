'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useMotionValue, useTransform, animate, useScroll } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Counter component with animation
function Counter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration });
      return animation.stop;
    }
  }, [isInView, count, value, duration]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);

  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  // GSAP ScrollTrigger Organic Scroll Reveal
  useEffect(() => {
    if (!titleRef.current || !paragraph1Ref.current || !paragraph2Ref.current) return;

    const setupOrganicReveal = (element: HTMLElement, staggerAmount: number = 1) => {
      // Store original HTML to preserve styling
      const originalHTML = element.innerHTML;
      
      // Split text into characters with SplitType
      const split = new SplitType(element, {
        types: 'chars',
        tagName: 'span',
      });

      if (!split.chars) return;

      // Setup container for proper wrapping
      element.style.display = 'block';
      element.style.flexWrap = 'wrap';

      // Get all chars and preserve parent styling
      const chars = split.chars;
      chars.forEach((char) => {
        // Check if char is inside a styled parent span
        const styledParent = char.closest('.text-gold, .italic, .font-medium');
        if (styledParent) {
          // Preserve the parent classes on the char itself
          char.classList.add(...Array.from(styledParent.classList));
        }
      });

      // Set initial state for characters - lighter for faster feel
      gsap.set(chars, {
        opacity: 0,
        y: 10, // Reduced from 20 for faster feel
        scale: 0.95, // Closer to 1 for subtler effect
        transformOrigin: 'center center',
      });

      // Create the scroll-linked animation - faster and smoother
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'power3.out', // Smoother ease
        stagger: {
          amount: staggerAmount,
          from: 'start',
          ease: 'power3.out', // Smoother organic feel
        },
        scrollTrigger: {
          trigger: element,
          start: 'top 100%', // Start much earlier - as soon as element enters viewport
          end: 'bottom 70%', // End earlier - before reaching middle
          scrub: 0.3, // Lower = smoother and more responsive
          markers: false,
        },
      });

      return split;
    };

    // Apply to title - faster
    const titleSplit = setupOrganicReveal(titleRef.current, 0.6);

    // Apply to paragraphs - faster
    const p1Split = setupOrganicReveal(paragraph1Ref.current, 0.8);
    const p2Split = setupOrganicReveal(paragraph2Ref.current, 0.8);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.trigger === titleRef.current ||
          trigger.trigger === paragraph1Ref.current ||
          trigger.trigger === paragraph2Ref.current
        ) {
          trigger.kill();
        }
      });

      // Revert splits
      if (titleSplit) titleSplit.revert();
      if (p1Split) p1Split.revert();
      if (p2Split) p2Split.revert();
    };
  }, []);

  const counterContainerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const counterItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative py-20 sm:py-28 md:py-36 lg:py-40 px-6 bg-cream overflow-hidden" ref={containerRef}>
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cream via-cream-light to-cream-dark opacity-60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      {/* Vertical Lines Background - Magazine Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full relative">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-brown"
              style={{
                left: `${(100 / 6) * (i + 1)}%`,
                opacity: 0.05,
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 0.05 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-24 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Title with organic scroll reveal */}
            <div className="relative">
              <h2
                ref={titleRef}
                className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brown leading-[1.1]"
                style={{ 
                  wordBreak: 'normal',
                  overflowWrap: 'break-word',
                  hyphens: 'auto',
                  WebkitHyphens: 'auto'
                }}
              >
                Kwaliteit is geen <span className="text-gold italic">Toeval</span>
              </h2>

              {/* Decorative line */}
              <motion.div
                className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold to-transparent"
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            {/* Paragraphs with organic scroll reveal */}
            <div className="space-y-4 sm:space-y-6">
              <p
                ref={paragraph1Ref}
                className="font-inter text-base sm:text-lg md:text-xl text-brown-medium leading-relaxed"
                style={{ 
                  wordBreak: 'keep-all',
                  overflowWrap: 'normal',
                  hyphens: 'manual',
                  WebkitHyphens: 'manual',
                  textWrap: 'pretty'
                }}
              >
                Kwaliteit ontstaat wanneer de{' '}
                <span className="text-gold font-medium whitespace-nowrap">juiste mensen</span>
                <br className="md:hidden" />{' '}
                op het juiste moment samenkomen.
              </p>

              <p
                ref={paragraph2Ref}
                className="font-inter text-base sm:text-lg md:text-xl text-brown-medium leading-relaxed"
                style={{ 
                  wordBreak: 'keep-all',
                  overflowWrap: 'normal',
                  hyphens: 'manual',
                  WebkitHyphens: 'manual',
                  textWrap: 'pretty'
                }}
              >
                Bij <span className="whitespace-nowrap">Chefs Connect</span> versterken wij{' '}
                <br className="md:hidden" />
                horecazaken met{' '}
                <span className="text-gold font-medium whitespace-nowrap">ervaren chefs</span> en{' '}
                <br className="md:hidden" />
                <span className="text-gold font-medium whitespace-nowrap">professionele bediening</span> die direct{' '}
                <br className="md:hidden" />
                het verschil maken. Van{' '}
                <span className="text-gold font-medium whitespace-nowrap">private dining</span> tot{' '}
                <br className="md:hidden" />
                <span className="text-gold font-medium whitespace-nowrap">grootschalige events</span>{' '}
                zorgen wij dat{' '}
                <br className="md:hidden" />
                elke service staat met aandacht,{' '}
                <br className="md:hidden" />
                vakmanschap en een{' '}
                <br className="md:hidden" />
                feilloze uitvoering.
              </p>

              {/* Premium CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.a
                  href="/over-ons"
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 font-inter text-xs sm:text-sm uppercase tracking-wider text-brown border-2 border-brown/20 hover:border-gold hover:bg-gold/5 transition-all duration-500 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Ontdek ons verhaal</span>
                  <motion.svg
                    className="w-4 h-4 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Right: Image with parallax & counters */}
          <motion.div
            ref={imageContainerRef}
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {/* Image container with parallax */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              {/* Decorative frame */}
              <motion.div
                className="absolute inset-0 border-2 border-gold/30 z-10 pointer-events-none"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />

              {/* Image with parallax */}
              <motion.div
                className="absolute inset-0"
                style={{
                  y: imageY,
                  scale: imageScale,
                }}
              >
                <Image
                  src="/chef-action.png"
                  alt="Premium culinary craftsmanship"
                  fill
                  className="object-cover brightness-[0.85]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Premium overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/40 to-transparent z-[1]" />

              {/* Counters overlay with premium glassmorphism */}
              <motion.div
                className="absolute inset-0 flex items-end justify-center p-8 z-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={counterContainerVariants}
              >
                <div className="w-full bg-cream/10 backdrop-blur-md border border-cream/20 p-4 sm:p-6 shadow-2xl">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {/* Counter 1 */}
                    <motion.div className="text-center" variants={counterItemVariants}>
                      <div className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gold mb-1 sm:mb-2">
                        <Counter value={150} suffix="+" />
                      </div>
                      <p 
                        className="font-inter text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider text-cream/90 leading-tight"
                        style={{ wordBreak: 'keep-all', whiteSpace: 'nowrap' }}
                      >
                        Chefs en
                        <br />
                        Bediening
                      </p>
                    </motion.div>

                    {/* Counter 2 */}
                    <motion.div
                      className="text-center"
                      variants={counterItemVariants}
                    >
                      <div className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gold mb-1 sm:mb-2">
                        <Counter value={50} suffix="+" />
                      </div>
                      <p 
                        className="font-inter text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider text-cream/90 leading-tight"
                        style={{ wordBreak: 'keep-all', whiteSpace: 'nowrap' }}
                      >
                        Restaurants
                      </p>
                    </motion.div>

                    {/* Counter 3 */}
                    <motion.div className="text-center" variants={counterItemVariants}>
                      <div className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gold mb-1 sm:mb-2">
                        <Counter value={10} suffix="+" />
                      </div>
                      <p 
                        className="font-inter text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider text-cream/90 leading-tight"
                        style={{ wordBreak: 'keep-all', whiteSpace: 'nowrap' }}
                      >
                        Events
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating accent element */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
