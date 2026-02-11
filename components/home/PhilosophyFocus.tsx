'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const choices = [
  {
    id: 'recruit',
    title: 'Ik zoek een horeca professional',
    subtitle: 'Voor Werkgevers',
    description: 'Vind de perfecte match voor jouw culinaire team',
    image: '/choice-dining.png',
    href: '/zoek-personeel',
    number: '01',
  },
  {
    id: 'professional',
    title: 'Ik ben een horeca professional',
    subtitle: 'Voor Professionals',
    description: 'Ontdek jouw volgende culinaire avontuur',
    image: '/choice-kitchen.png',
    href: '/horecaspecialist',
    number: '02',
  },
  {
    id: 'events',
    title: 'Ik organiseer een evenement',
    subtitle: 'Voor Evenementen',
    description: 'Creëer onvergetelijke culinaire ervaringen',
    image: '/choice-events.png',
    href: '/evenementen',
    number: '03',
  },
];

export default function PhilosophyFocus() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 px-6 bg-brown overflow-hidden">
      {/* Premium background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown via-brown-medium to-brown opacity-40" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#C9A961 1px, transparent 1px), linear-gradient(90deg, #C9A961 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20 md:mb-32"
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
              Maak uw keuze
            </span>
          </motion.div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-cream leading-tight mb-6">
            Hoe kunnen wij
            <br />
            <span className="text-gold italic">u helpen?</span>
          </h2>

          <p className="font-inter text-lg md:text-xl text-cream/70 max-w-2xl mx-auto">
            Kies de optie die het beste bij u past en ontdek wat Chefs Connect voor u kan betekenen
          </p>
        </motion.div>

        {/* Three Choice Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {choices.map((choice, index) => (
            <ChoiceCard key={choice.id} choice={choice} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChoiceCard({ choice, index }: { choice: typeof choices[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ scale }}
      className="group"
    >
      <Link href={choice.href}>
        <div className="relative h-full overflow-hidden bg-cream/5 backdrop-blur-sm border border-cream/10 hover:border-gold/50 transition-all duration-700">
          {/* Number Badge */}
          <div className="absolute top-6 left-6 z-30">
            <motion.div
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center bg-brown/80 backdrop-blur-sm"
              whileHover={{ scale: 1.1, borderColor: 'rgba(201, 169, 97, 0.8)' }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-inter text-sm font-medium text-gold">{choice.number}</span>
            </motion.div>
          </div>

          {/* Image Container with Parallax */}
          <div className="relative h-80 md:h-96 overflow-hidden">
            <motion.div className="absolute inset-0" style={{ y }}>
              <Image
                src={choice.image}
                alt={choice.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>

            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

            {/* Animated Border on Hover */}
            <motion.div
              className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              initial={false}
            />
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-10">
            {/* Subtitle */}
            <motion.p
              className="font-inter text-xs uppercase tracking-[0.2em] text-gold/70 mb-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            >
              {choice.subtitle}
            </motion.p>

            {/* Title */}
            <motion.h3
              className="font-playfair text-2xl md:text-3xl lg:text-4xl font-light text-cream leading-tight mb-4 group-hover:text-gold transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
            >
              {choice.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="font-inter text-base text-cream/70 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
            >
              {choice.description}
            </motion.p>

            {/* CTA Arrow */}
            <motion.div
              className="flex items-center gap-3 font-inter text-sm uppercase tracking-wider text-gold"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
            >
              <span>Ontdek meer</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-transparent"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
}
