'use client';

import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';

export default function SignatureMenuSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Utensils className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown mb-8 text-balance break-words">
            Signature menu's die je evenement
            <br />
            <span className="text-gold italic">naar een hoger niveau tillen</span>
          </h2>
          <p className="font-inter text-lg md:text-xl text-brown-medium max-w-4xl mx-auto leading-relaxed break-words">
            Onze exclusieve fine dining menu's zijn zorgvuldig samengesteld voor opdrachtgevers die alleen genoegen nemen met het beste.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-brown/5 border border-brown/10 p-8 md:p-12"
        >
          <p className="font-inter text-xl text-brown-medium leading-relaxed text-center break-words">
            Elk menu wordt bereid met uitsluitend de <span className="font-semibold text-gold">beste seizoensproducten</span> en kan volledig worden afgestemd op jouw wensen en het karakter van het evenement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
