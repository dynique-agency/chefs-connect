'use client';

import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';

const eventTypes = [
  'High-end bedrijfsfeesten',
  'Bruiloften',
  'Zakelijke lunches',
  'Luxe broodjeslunches',
  'Healthy brunches',
  'Executive dinners',
  'VIP-events',
];

export default function EventTypesSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-brown">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Calendar className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-8 leading-tight text-balance break-words">
            Van zakelijke lunch tot
            <br />
            <span className="text-gold italic">exclusieve private dining</span>
          </h2>
          <p className="font-inter text-lg md:text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed break-words">
            Connect Event & Dining is er niet alleen voor grootschalige evenementen. Juist ook in intieme settings maken wij het verschil.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {eventTypes.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream/10 backdrop-blur-sm border border-gold/30 p-6 flex items-start gap-4 hover:bg-cream/15 transition-colors duration-300"
            >
              <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
              <span className="font-inter text-base text-cream break-words">{item}</span>
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
          Of het nu gaat om twintig gasten of een compleet gezelschap, wij creëren een ervaring die past bij het moment.
        </motion.p>
      </div>
    </section>
  );
}
