'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, ExternalLink, PenLine, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "Mitchel",
    text: "ChefsConnect heeft voor ons snel een {vakbekwame kok} gevonden die {perfect past} binnen onze keukencultuur. Het team was {professioneel}, dacht mee en zorgde voor een {soepel traject} echt een aanrader!",
    stars: 5,
  },
  {
    name: "Sharen Wintjens",
    text: "Mijn chef-kok was plots weggelopen en ik zat met mijn handen in het haar. De dag erna stond er al een {tijdelijke freelance chef-kok} die {écht kon koken}. Dat heeft {mijn zaak gered}. Chapeau jongens!",
    stars: 5,
  },
  {
    name: "Stijn Antens",
    text: "Met alleen het leveren van goede freelancers onderscheid je jezelf niet meer, de jongens van chefsconnect onderscheiden zich met een {super service} en zorgen altijd voor een {oplossing wanneer nodig}. Zeer tevreden!",
    stars: 5,
  },
  {
    name: "Rick Vinckers",
    text: "{Super Service}! Leuke gasten, {gerichte vakmensen}. Als je een paar handjes tekort komt zorgt Chefsconnect voor {passende oplossingen}. Toppers!",
    stars: 5,
  },
  {
    name: "Dominic",
    text: "Chefs connect is een {goede en professionele organisatie} met {kennis van zaken}. Je krijgt {heldere uitleg} over het bemiddelingsproces en ze gaan {efficiënt te werk}.",
    stars: 5,
  },
  {
    name: "Reda Hamite",
    text: "We hebben samengewerkt met chefsconnect en hebben er een {top ervaring} mee! {Aanrader} voor iedereen in de horeca.",
    stars: 5,
  },
  {
    name: "Mohamed Tolba",
    text: "Chef Connect is {een van de beste bedrijven} voor freelance kok. {Zeer professioneel} en {betrouwbaar}.",
    stars: 5,
  },
  {
    name: "Yme Huizing",
    text: "{Hands-on}, {meedenkend} en een {eerlijk verhaal}. Prettig om voor en mee te werken! {Aanrader}.",
    stars: 5,
  },
];

// Function to parse and highlight text
function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('{') && part.endsWith('}')) {
          const content = part.slice(1, -1);
          return (
            <span key={index} className="text-gold font-medium">
              {content}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState(0);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax for background image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // How many reviews to show at once based on screen size
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2; // md
    return 1; // mobile
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance timer (faster on mobile: 3s, slower on desktop: 5s)
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, isMobile ? 3000 : 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, isMobile, visibleCount]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Get visible reviews
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push({ ...reviews[index], key: index });
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();

  // Variants for smooth Apple-style animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden bg-cream">
      {/* Premium Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <Image
          src="/reviews-background.png"
          alt="Premium dining experience"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/95 via-cream/90 to-cream/95" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-inter text-xs md:text-sm uppercase tracking-[0.3em] text-gold">
              Wat onze klanten zeggen
            </span>
          </motion.div>

          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-light text-brown leading-tight mb-4">
            Vertrouwd door professionals
          </h2>

          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-inter text-xs md:text-sm text-brown-medium/70 ml-2">
              5.0 gemiddelde beoordeling
            </span>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative mb-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons - Premium Apple Style */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md border border-brown/10 hover:border-gold/50 hover:bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronLeft className="w-6 h-6 text-brown group-hover:text-gold transition-colors duration-300" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md border border-brown/10 hover:border-gold/50 hover:bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronRight className="w-6 h-6 text-brown group-hover:text-gold transition-colors duration-300" />
          </motion.button>

          {/* Reviews Grid */}
          <div className="overflow-hidden px-2 md:px-4">
            <div className={`grid gap-4 md:gap-6 ${
              visibleCount === 1 ? 'grid-cols-1' : 
              visibleCount === 2 ? 'grid-cols-2' : 
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              <AnimatePresence mode="popLayout" custom={direction}>
                {visibleReviews.map((review, index) => (
                  <motion.div
                    key={`${review.key}-${index}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.3 },
                    }}
                  >
                    <ReviewCard review={review} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Navigation - Premium Style */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className="group relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'bg-gold scale-125'
                    : 'bg-brown/20 group-hover:bg-brown/40'
                }`} />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 border-2 border-gold rounded-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="https://www.google.com/maps/place/Chefsconnect/@51.5642759,4.8758051,663722m/data=!3m1!1e3!4m8!3m7!1s0x40f016df59b51bf:0xa54be2c98204141d!8m2!3d51.5642759!4d4.875805!9m1!1b1!16s%2Fg%2F11x204wxp_?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 font-inter text-xs md:text-sm uppercase tracking-wider text-brown border-2 border-brown/20 hover:border-gold hover:bg-gold/10 transition-all duration-500 group relative overflow-hidden w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-gold" />
            <span className="relative z-10">Bekijk alle reviews</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          </motion.a>

          <motion.a
            href="https://search.google.com/local/writereview?placeid=ChIJv1Gb9W0BDwQRHRQEgsniS6U"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 font-inter text-xs md:text-sm uppercase tracking-wider text-cream bg-gold border-2 border-gold hover:bg-gold/90 hover:border-gold/90 transition-all duration-500 group relative overflow-hidden w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <PenLine className="w-4 h-4 md:w-5 md:h-5 text-cream" />
            <span className="relative z-10">Schrijf een review</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Review Card Component
function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <motion.div 
      className="h-full bg-white/80 backdrop-blur-md border border-brown/10 p-6 md:p-8 relative overflow-hidden hover:border-gold/50 hover:bg-white transition-all duration-500 shadow-lg hover:shadow-xl group"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/30 transition-all duration-500 group-hover:border-gold/60" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/30 transition-all duration-500 group-hover:border-gold/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        {/* Stars and Verified Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1">
            {[...Array(review.stars)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, type: 'spring' }}
              >
                <Star className="w-4 h-4 fill-gold text-gold" />
              </motion.div>
            ))}
          </div>

          {/* Google Verified Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
            <span className="font-inter text-[10px] uppercase tracking-wider text-gold">
              Verified
            </span>
          </div>
        </div>

        {/* Review Text with Highlights */}
        <div className="mb-6 min-h-[140px]">
          <p className="font-inter text-sm md:text-base text-brown-medium leading-relaxed">
            "<HighlightedText text={review.text} />"
          </p>
        </div>

        {/* Name */}
        <div className="flex items-center justify-between pt-4 border-t border-brown/10">
          <p className="font-inter text-sm text-brown uppercase font-bold tracking-wider">
            {review.name}
          </p>
          <div className="text-gold/30 text-5xl leading-none font-playfair">"</div>
        </div>
      </div>

      {/* Premium accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
