'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <div className="absolute inset-0">
        <Image
          src="/choice-events.webp"
          alt="Connect Events & Dining"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown/80 via-brown/60 to-brown/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[4/1]">
            <Image
              src="/connect-events-dining-logo.png"
              alt="Connect Events & Dining"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-tight mb-8 text-balance break-words"
        >
          Een culinaire totaalbeleving
          <br />
          <span className="text-gold italic">van het hoogste niveau</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-inter text-lg md:text-xl text-cream/90 leading-relaxed max-w-3xl mx-auto mb-12 break-words"
        >
          Wij combineren <span className="font-semibold text-gold">gastronomie, gastvrijheid en perfectie</span> in uitvoering, zodat jij zorgeloos kunt genieten samen met je gasten.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="group inline-flex items-center gap-3 px-10 py-5 font-inter text-sm uppercase tracking-wider text-brown bg-gold hover:bg-gold-dark transition-all duration-500"
        >
          <span>Plan je evenement</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}
