'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TeamStack from '@/components/about/TeamStack';

export default function OverOnsPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-team.png"
            alt="ChefsConnect Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown/80 via-brown/60 to-cream" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold text-sm uppercase tracking-widest font-inter">
              Over Ons
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-playfair text-4xl md:text-6xl lg:text-7xl text-cream mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            De Mensen Achter<br />
            <span className="text-gold">ChefsConnect</span>
          </motion.h1>
          
          <motion.p 
            className="text-cream/90 text-lg md:text-xl font-inter max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passie voor gastronomie. Toewijding aan perfectie. Verbinding tussen toptalent en premium horeca.
          </motion.p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20"
          >
            <div>
              <h2 className="font-playfair text-3xl md:text-5xl text-brown mb-6 leading-tight">
                Geboren uit <span className="text-gold italic">ervaring</span>,<br />
                gedreven door <span className="text-gold italic">kwaliteit</span>
              </h2>
              <div className="w-20 h-1 bg-gold mb-8" />
              <div className="space-y-4" style={{ wordSpacing: '0.1em' }}>
                <p className="text-brown/80 text-lg leading-loose">
                  Wat begon als een netwerk in Limburg, is uitgegroeid tot een premium platform dat actief is in heel Nederland en België.
                </p>
                <p className="text-brown/80 text-lg leading-loose">
                  Met meer dan 150 freelance chefs en hospitality professionals, en ruim 50 vaste samenwerkingen met restaurants, hotels en cateraars.
                </p>
              </div>
            </div>

            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/5] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/choice-dining.png"
                  alt="ChefsConnect Premium Service"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/40 to-transparent" />
              </motion.div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gold/10 -z-10" />
              <div className="absolute -top-6 -left-6 w-40 h-40 border-2 border-gold/30 -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Premium Sticky Card Stack */}
      <TeamStack />

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-brown text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/about-team.png"
            alt="Background"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="font-playfair text-4xl md:text-6xl mb-8">
            Klaar om samen te werken?
          </h2>
          <p className="text-cream/80 text-lg md:text-xl mb-12 leading-relaxed">
            Of je nu op zoek bent naar toptalent voor jouw zaak, of als chef de volgende stap 
            wilt zetten — wij staan klaar om te verbinden.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="/zoek-personeel"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gold text-brown font-inter uppercase tracking-wider hover:bg-gold-dark transition-colors duration-300 shadow-xl"
            >
              Ik zoek personeel
            </motion.a>
            
            <motion.a
              href="/horecaspecialist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-inter uppercase tracking-wider hover:bg-gold hover:text-brown transition-all duration-300"
            >
              Ik ben chef
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
