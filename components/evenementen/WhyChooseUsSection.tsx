'use client';

import { motion } from 'framer-motion';
import { Award, Sparkles, Users, CheckCircle2, Star, Briefcase } from 'lucide-react';

const reasons = [
  { icon: Award, text: '20 jaar ervaring in de topgastronomie' },
  { icon: Star, text: 'Bekroonde chef en culinair team' },
  { icon: Sparkles, text: 'Fine dining op locatie' },
  { icon: CheckCircle2, text: 'Alleen premium ingrediënten' },
  { icon: Users, text: 'Persoonlijke service' },
  { icon: CheckCircle2, text: 'Volledig maatwerk' },
  { icon: Briefcase, text: 'Geschikt voor zowel zakelijk als privé' },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-brown">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Star className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-8 text-balance break-words">
            Waarom kiezen voor
            <br />
            <span className="text-gold italic">Connect Events & Dining?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {reasons.map(({ icon: Icon, text }, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream/10 backdrop-blur-sm border border-gold/30 p-8 text-center hover:bg-cream/15 transition-colors duration-300"
            >
              <Icon className="w-10 h-10 text-gold mx-auto mb-4 flex-shrink-0" />
              <p className="font-inter text-base text-cream break-words">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-2xl md:text-3xl text-gold italic text-center break-words"
        >
          Wij geloven dat uitzonderlijke momenten uitzonderlijk eten verdienen.
        </motion.p>
      </div>
    </section>
  );
}
