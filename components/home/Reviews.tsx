'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

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
  
  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  // Parallax for background image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-40 overflow-hidden">
      {/* Premium Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          scale: bgScale,
        }}
      >
        <Image
          src="/reviews-background.png"
          alt="Premium dining experience"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </motion.div>

      {/* Multi-layer Premium Overlay for light/white feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/95 via-cream-light/90 to-cream/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-cream-dark/20" />
      
      {/* Subtle golden glow for premium feel */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-gradient-to-br from-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-inter text-xs md:text-sm uppercase tracking-[0.3em] text-gold">
              Wat onze klanten zeggen
            </span>
          </motion.div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown leading-tight mb-4">
            Vertrouwd door professionals
          </h2>

          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-inter text-sm text-brown-medium/70 ml-2">
              5.0 gemiddelde beoordeling
            </span>
          </div>
        </motion.div>

        {/* Scrolling Reviews Container */}
        <div className="relative">
          {/* Gradient Fades on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

          {/* Infinite Scroll Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 60,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedReviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="https://www.google.com/search?q=chefs+connect+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-inter text-sm uppercase tracking-wider text-brown border-2 border-brown/20 hover:border-gold hover:bg-gold/10 transition-all duration-500 group relative overflow-hidden"
          >
            <CheckCircle2 className="w-5 h-5 text-gold" />
            <span className="relative z-10">Bekijk alle reviews op Google</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[400px] md:w-[480px] group"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full bg-white/80 backdrop-blur-md border border-brown/10 p-8 relative overflow-hidden group-hover:border-gold/50 hover:bg-white transition-all duration-500 shadow-lg hover:shadow-xl">
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10">
          {/* Stars and Verified Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-1">
              {[...Array(review.stars)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Star className="w-4 h-4 fill-gold text-gold" />
                </motion.div>
              ))}
            </div>

            {/* Google Verified Badge */}
            <motion.div
              className="flex items-center gap-1.5 px-3 py-1 bg-gold/10 rounded-full border border-gold/30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              <span className="font-inter text-[10px] uppercase tracking-wider text-gold">
                Verified
              </span>
            </motion.div>
          </div>

          {/* Review Text with Highlights */}
          <p className="font-inter text-base text-brown-medium italic font-light leading-relaxed mb-6 min-h-[120px]">
            <HighlightedText text={review.text} />
          </p>

          {/* Name */}
          <div className="flex items-center justify-between pt-4 border-t border-brown/10">
            <p className="font-inter text-sm text-brown uppercase font-bold tracking-wider">
              {review.name}
            </p>

            {/* Decorative quote */}
            <div className="text-gold/30 text-6xl leading-none font-playfair">
              "
            </div>
          </div>
        </div>

        {/* Premium accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-transparent"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
