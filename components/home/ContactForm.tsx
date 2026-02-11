'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Send } from 'lucide-react';
import { submitToWeb3Forms } from '@/lib/form-submit';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const image1Y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const image2Y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 px-6 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content + Form */}
          <div className="space-y-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-light text-brown leading-tight mb-6">
                Neem contact op
              </h2>
              <div className="h-px bg-gold/30 w-32 mb-6" />
              <p className="font-inter text-lg text-brown-medium leading-relaxed max-w-md">
                Laten we samen bespreken hoe we{' '}
                <span className="text-gold">uw culinaire visie</span> kunnen realiseren
              </p>
            </motion.div>

            {/* Premium Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form
                className="space-y-5 max-w-md"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);

                  const formData = new FormData(e.currentTarget);

                  try {
                    await submitToWeb3Forms(formData, {
                      subject: 'Chefs Connect: Contact Aanvraag',
                    });
                    router.push('/bedankt');
                  } catch (error) {
                    console.error('Form submission error:', error);
                    alert('Er is een fout opgetreden. Probeer het later opnieuw.');
                    setIsSubmitting(false);
                  }
                }}
              >

                <input
                  type="text"
                  name="naam"
                  required
                  placeholder="Naam *"
                  className="w-full bg-transparent border-0 border-b border-brown/20 focus:border-gold focus:outline-none py-3 font-inter text-brown placeholder:text-brown/40 transition-colors"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="E-mail *"
                    className="w-full bg-transparent border-0 border-b border-brown/20 focus:border-gold focus:outline-none py-3 font-inter text-brown placeholder:text-brown/40 transition-colors"
                  />

                  <input
                    type="tel"
                    name="telefoon"
                    placeholder="Telefoon"
                    className="w-full bg-transparent border-0 border-b border-brown/20 focus:border-gold focus:outline-none py-3 font-inter text-brown placeholder:text-brown/40 transition-colors"
                  />
                </div>

                <input
                  type="text"
                  name="onderwerp"
                  placeholder="Onderwerp"
                  className="w-full bg-transparent border-0 border-b border-brown/20 focus:border-gold focus:outline-none py-3 font-inter text-brown placeholder:text-brown/40 transition-colors"
                />

                <textarea
                  name="bericht"
                  required
                  rows={4}
                  placeholder="Uw bericht *"
                  className="w-full bg-transparent border-0 border-b border-brown/20 focus:border-gold focus:outline-none py-3 font-inter text-brown placeholder:text-brown/40 transition-colors resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 font-inter text-xs uppercase tracking-[0.25em] text-brown border border-brown/30 hover:border-gold hover:bg-gold/5 transition-all duration-500 mt-6 disabled:opacity-50"
                >
                  {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right: Image Composition with Parallax */}
          <motion.div
            ref={containerRef}
            className="relative h-[500px] md:h-[600px] lg:h-[700px] hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Top Right Image */}
            <motion.div
              className="absolute top-0 right-0 w-[70%] h-[55%]"
              style={{ y: image1Y }}
            >
              <div className="relative w-full h-full border border-gold/30">
                <Image
                  src="/choice-dining.png"
                  alt="Premium culinary experience"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </motion.div>

            {/* Center Accent Box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gold/20" />

            {/* Bottom Left Image */}
            <motion.div
              className="absolute bottom-0 left-0 w-[65%] h-[50%]"
              style={{ y: image2Y }}
            >
              <div className="relative w-full h-full border border-gold/30">
                <Image
                  src="/choice-kitchen.png"
                  alt="Professional kitchen"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile: Single Image */}
          <motion.div
            className="relative h-[400px] lg:hidden mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-full border border-gold/30">
              <Image
                src="/choice-dining.png"
                alt="Premium culinary experience"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
