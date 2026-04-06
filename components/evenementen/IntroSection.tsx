'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section className="relative py-20 md:py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Sparkles className="w-14 h-14 text-gold" />
            <div className="h-px bg-gold/30 w-32" />
            
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-light text-brown leading-[1.1] text-balance break-words">
              Ik organiseer een <span className="text-gold italic">evenement</span>
            </h2>

            <div className="space-y-6 font-inter text-base md:text-lg text-brown-medium leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="break-words hyphens-auto"
              >
                Sta je aan de vooravond van een bijzonder evenement? Of het nu gaat om een <span className="font-semibold text-brown">bedrijfsfeest, bruiloft, zakelijke lunch, healthy brunch</span> of een exclusieve <span className="font-semibold text-gold">private dining</span>, met Connect Event & Dining kies je voor een culinaire totaalbeleving van het hoogste niveau.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="break-words hyphens-auto"
              >
                Wij combineren <span className="font-semibold text-gold">gastronomie, gastvrijheid en perfectie</span> in uitvoering, zodat jij zorgeloos kunt genieten samen met je gasten.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full">
              <Image
                src="/event-service-detail.png"
                alt="Fine dining experience"
                width={600}
                height={800}
                className="w-full h-auto object-contain brightness-[0.85]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 border-2 border-gold/30 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
