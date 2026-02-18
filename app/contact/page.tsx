'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { submitToWeb3Forms } from '@/lib/form-submit';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const image1Y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const image2Y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 bg-brown">
        <div className="max-w-7xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-cream mb-6 leading-tight">
              Neem <span className="text-gold italic">Contact</span> Op
            </h1>
            <div className="h-px bg-gold/30 w-32 mx-auto mb-8" />
            <p className="font-inter text-lg md:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed">
              We helpen je graag verder met al je vragen over freelancers, opdrachten of evenementen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={containerRef} className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown mb-6">
                  Stuur ons een <span className="text-gold italic">bericht</span>
                </h2>
                <p className="font-inter text-base md:text-lg text-brown-medium leading-relaxed">
                  Vul het formulier in en we nemen zo snel mogelijk contact met je op
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="naam" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-brown/20 focus:border-gold focus:outline-none py-3 font-inter text-brown placeholder:text-brown/40 transition-colors"
                    placeholder="Jouw naam"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-0 border-b-2 border-brown/20 focus:border-gold focus:outline-none py-3 font-inter text-brown placeholder:text-brown/40 transition-colors"
                      placeholder="jouw@email.nl"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefoon" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      className="w-full bg-transparent border-0 border-b-2 border-brown/20 focus:border-gold focus:outline-none py-3 font-inter text-brown placeholder:text-brown/40 transition-colors"
                      placeholder="06 41875803"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="onderwerp" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Onderwerp *
                  </label>
                  <select
                    id="onderwerp"
                    name="onderwerp"
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-brown/20 focus:border-gold focus:outline-none py-3 font-inter text-brown transition-colors"
                  >
                    <option value="">Selecteer een onderwerp</option>
                    <option value="Ik zoek horeca freelancers">Ik zoek horeca freelancers</option>
                    <option value="Ik ben een horecaspecialist">Ik ben een horecaspecialist</option>
                    <option value="Ik organiseer een evenement">Ik organiseer een evenement</option>
                    <option value="Algemene vraag">Algemene vraag</option>
                    <option value="Anders">Anders</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bericht" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    required
                    rows={6}
                    className="w-full bg-transparent border-2 border-brown/20 focus:border-gold focus:outline-none p-4 font-inter text-brown placeholder:text-brown/40 transition-colors resize-none"
                    placeholder="Vertel ons waar we je mee kunnen helpen..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full md:w-auto px-8 py-4 bg-gold hover:bg-gold-dark text-brown border-2 border-gold flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 font-inter text-sm font-medium uppercase tracking-wider">
                    {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
                  </span>
                  <Send className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-brown/20 to-transparent" />
                </button>
              </form>
            </motion.div>

            {/* Right: Contact Info + Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Contact Info */}
              <div className="bg-brown/5 border border-brown/10 p-8 md:p-12 space-y-8">
                <h3 className="font-playfair text-3xl md:text-4xl font-light text-brown mb-6">
                  Contactgegevens
                </h3>

                <div className="space-y-6">
                  <a
                    href="mailto:info@chefsconnect.nl"
                    className="flex items-start gap-4 group transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 group-hover:bg-gold flex items-center justify-center transition-colors duration-300">
                      <Mail className="w-5 h-5 text-gold group-hover:text-brown transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-inter text-xs uppercase tracking-wider text-brown/60 mb-1">E-mail</p>
                      <p className="font-inter text-base text-brown group-hover:text-gold transition-colors duration-300">
                        info@chefsconnect.nl
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+31641875803"
                    className="flex items-start gap-4 group transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 group-hover:bg-gold flex items-center justify-center transition-colors duration-300">
                      <Phone className="w-5 h-5 text-gold group-hover:text-brown transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-inter text-xs uppercase tracking-wider text-brown/60 mb-1">Telefoon</p>
                      <p className="font-inter text-base text-brown group-hover:text-gold transition-colors duration-300">
                        +31 6 41875803
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-xs uppercase tracking-wider text-brown/60 mb-1">Locatie</p>
                      <p className="font-inter text-base text-brown">
                        Gasthuisstraat 3.1 Lanaken
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Images with Parallax */}
              <div className="relative hidden lg:block h-96">
                <motion.div
                  style={{ y: image1Y }}
                  className="absolute top-0 left-0 w-2/3 h-64 overflow-hidden"
                >
                  <Image
                    src="/team-founders.jpg"
                    alt="Chefs Connect Team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
                </motion.div>

                <motion.div
                  style={{ y: image2Y }}
                  className="absolute bottom-0 right-0 w-2/3 h-64 overflow-hidden"
                >
                  <Image
                    src="/contact-service.png"
                    alt="Professional Service"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-20 px-6 bg-brown">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-6">
              Liever direct contact?
            </h2>
            <p className="font-inter text-base md:text-lg text-cream/70 leading-relaxed mb-8">
              Bel ons of stuur een e-mail. We staan voor je klaar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+31641875803"
                className="group px-8 py-4 bg-gold hover:bg-gold-dark text-brown border-2 border-gold flex items-center justify-center gap-3 transition-all duration-300 overflow-hidden relative"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-inter text-sm font-medium uppercase tracking-wider">
                  Bel ons
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-brown/20 to-transparent" />
              </a>

              <a
                href="mailto:info@chefsconnect.nl"
                className="group px-8 py-4 bg-transparent hover:bg-cream/10 text-cream border-2 border-cream flex items-center justify-center gap-3 transition-all duration-300 overflow-hidden relative"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-inter text-sm font-medium uppercase tracking-wider">
                  E-mail ons
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
