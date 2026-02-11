'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const services = [
  { title: 'Werkgevers', href: '/werkgevers', description: 'Vind het perfecte culinaire talent voor jouw concept' },
  { title: 'Private Dining', href: '/private-dining', description: 'Exclusieve dining ervaringen op maat' },
  { title: 'Catering', href: '/catering', description: 'Professionale catering voor evenementen' },
  { title: 'Consultancy', href: '/consultancy', description: 'Strategisch advies voor jouw horeca-onderneming' },
  { title: 'Recruitment', href: '/recruitment', description: 'Gespecialiseerde werving en selectie' },
  { title: 'Training', href: '/training', description: 'Opleiding en ontwikkeling voor professionals' },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-cream">
      {/* Vertical Lines Background - Magazine Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full relative">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-brown"
              style={{
                left: `${(100 / 6) * (i + 1)}%`,
                opacity: 0.05,
              }}
            />
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal delay={0.1}>
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-light text-brown mb-16 text-center">
            Onze Diensten
          </h2>
        </ScrollReveal>

        <div className="space-y-1">
          {services.map((service, index) => (
            <ScrollReveal key={service.href} delay={0.1 + index * 0.05}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Link
                  href={service.href}
                  className="group relative flex items-center justify-between py-6 px-4 border-b border-brown-medium/10 hover:border-gold/50 transition-colors duration-300"
                >
                  <div className="flex-1">
                    <h3 className="font-playfair text-2xl md:text-3xl font-light text-brown mb-2 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-inter text-sm text-brown-medium opacity-70">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Arrow that slides on hover */}
                  <div className="flex-shrink-0 ml-6 text-gold transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

