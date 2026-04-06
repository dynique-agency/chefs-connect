'use client';

import { motion } from 'framer-motion';
import { Users, CheckCircle2 } from 'lucide-react';

const services = [
  'Menu-ontwikkeling op maat',
  'Professionele chefs en gastvrij serviceteam',
  'Styling en presentatie',
  'Strakke planning',
  'Opbouw en afhandeling',
  'Persoonlijke begeleiding',
];

export default function CarefreeSection() {
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
          <Users className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown mb-8 text-balance break-words">
            Volledig ontzorgd
            <br />
            <span className="text-gold italic">van concept tot uitvoering</span>
          </h2>
          <p className="font-inter text-xl text-brown-medium max-w-3xl mx-auto leading-relaxed break-words">
            Een succesvol evenement vraagt om meer dan alleen goed eten. Daarom begeleiden wij het volledige traject.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
        >
          {services.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brown/5 border border-brown/10 p-6 flex items-center gap-4"
            >
              <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0" />
              <span className="font-inter text-base text-brown-medium break-words">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-inter text-xl text-brown-medium text-center leading-relaxed break-words"
        >
          Alles wordt tot in detail verzorgd, zodat jij je volledig kunt richten op je gasten.
        </motion.p>
      </div>
    </section>
  );
}
