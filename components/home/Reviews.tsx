'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, CheckCircle2, ExternalLink, PenLine } from 'lucide-react';

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
    text: "Met alleen het leveren van goed personeel onderscheid je jezelf niet meer, de jongens van chefsconnect onderscheiden zich met een {super service} en zorgen altijd voor een {oplossing wanneer nodig}. Zeer tevreden!",
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
  const [isMobile, setIsMobile] = useState(false);

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

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];
  
  // Faster scroll on mobile (20s), slower on desktop (40s)
  const scrollDuration = isMobile ? 20 : 40;

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

        {/* Auto-scrolling Reviews - All Devices */}
        <div className="relative mb-12">
          {/* Gradient Fades on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

          {/* Infinite Scroll Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{
                x: ['0%', '-33.333%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: scrollDuration,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedReviews.map((review, index) => (
                <AutoScrollReviewCard key={index} review={review} />
              ))}
            </motion.div>
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
          <a
            href="https://www.google.com/maps/place/Chefsconnect/@51.5642759,4.8758051,663722m/data=!3m1!1e3!4m8!3m7!1s0x40f016df59b51bf:0xa54be2c98204141d!8m2!3d51.5642759!4d4.875805!9m1!1b1!16s%2Fg%2F11x204wxp_?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 font-inter text-xs md:text-sm uppercase tracking-wider text-brown border-2 border-brown/20 hover:border-gold hover:bg-gold/10 transition-all duration-500 group relative overflow-hidden w-full sm:w-auto justify-center"
          >
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-gold" />
            <span className="relative z-10">Bekijk alle reviews</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          </a>

          <a
            href="https://search.google.com/local/writereview?placeid=ChIJv1Gb9W0BDwQRHRQEgsniS6U"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 font-inter text-xs md:text-sm uppercase tracking-wider text-cream bg-gold border-2 border-gold hover:bg-gold/90 hover:border-gold/90 transition-all duration-500 group relative overflow-hidden w-full sm:w-auto justify-center"
          >
            <PenLine className="w-4 h-4 md:w-5 md:h-5 text-cream" />
            <span className="relative z-10">Schrijf een review</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Auto-scrolling Review Card - Works on all devices
function AutoScrollReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[420px] group">
      <div className="h-full bg-white/80 backdrop-blur-md border border-brown/10 p-6 md:p-8 relative overflow-hidden hover:border-gold/50 hover:bg-white transition-all duration-500 shadow-lg hover:shadow-xl">
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/30" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col">
          {/* Stars and Verified Badge */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex gap-1">
              {[...Array(review.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
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
      </div>
    </div>
  );
}
