'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    href: '/catering-bedrijfsfeest',
    title: 'Bedrijfsfeest & zakelijk event',
    description: 'Fine dining catering voor personeelsfeesten, relatie-events en executive dinners.',
  },
  {
    href: '/catering-bruiloft',
    title: 'Bruiloft & gala',
    description: 'Van ontvangst tot zittend galadiner, een culinaire herinnering voor de mooiste dag.',
  },
  {
    href: '/cateringpartner',
    title: 'Cateringpartner voor locaties',
    description: 'Een vaste fine dining-partner voor evenementenlocaties die regelmatig events ontvangen.',
  },
];

export default function CateringServicesSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">Onze specialisaties</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown leading-tight">
            Catering voor elke <span className="text-gold italic">gelegenheid</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group flex flex-col h-full bg-cream border border-brown/10 p-8 hover:border-gold/40 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-inter text-xs uppercase tracking-[0.2em] text-gold">Fine dining catering</span>
                  <ArrowUpRight className="w-5 h-5 text-brown/30 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-playfair text-2xl text-brown mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-inter text-base text-brown-medium leading-relaxed">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
