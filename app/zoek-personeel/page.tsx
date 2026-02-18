'use client';

import { useState, useRef, useEffect } from 'react';
import { Building2, CheckCircle2, Clock, Users, Award, ArrowRight, ChefHat, Utensils } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { submitToWeb3Forms } from '@/lib/form-submit';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ZoekPersoneelPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // GSAP Scroll Reveal
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      await submitToWeb3Forms(formData, {
        subject: 'Chefs Connect: Aanvraag Horecafreelancers',
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
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <Building2 className="w-14 h-14 text-gold" />
              <div className="h-px bg-gold/30 w-32" />
              
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brown leading-[1.1]">
                Ik zoek <span className="text-gold italic">horecafreelancers</span>
              </h1>

              <div className="space-y-6 font-inter text-base md:text-lg text-brown-medium leading-relaxed max-w-xl">
                <p>
                  Ben je horecaondernemer en denk je:<br className="md:hidden" /> <span className="font-semibold text-brown">ik zoek horecafreelancers,<br className="md:hidden" /> en snel ook?</span> Dan wil je geen gedoe,<br className="md:hidden" /> geen mismatches en geen lange procedures.<br className="md:hidden" /> Je wilt kwaliteit, betrouwbaarheid en iemand<br className="md:hidden" /> die begrijpt hoe de horeca écht werkt.
                </p>
                <p className="text-xl font-medium text-gold">
                  Bij ChefsConnect regelen we dat voor je.
                </p>
                <p>
                  Wij bemiddelen <span className="font-semibold text-brown">chefs en bedieningsmedewerkers</span> op alle niveaus en kunnen zowel individuele professionals als complete horecateams leveren voor korte én lange periodes.
                </p>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              <motion.div
                className="absolute inset-0"
                style={{ y: imageY }}
              >
                <Image
                  src="/zoek-personeel-hero.png"
                  alt="Horeca professionals"
                  fill
                  className="object-cover brightness-[0.85]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/40 to-transparent" />
              
              {/* Decorative frame */}
              <motion.div
                className="absolute inset-0 border-2 border-gold/30"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Snel Horecafreelancers Section */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Clock className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-8">
              Snel horecafreelancers nodig?
              <br />
              <span className="text-gold italic">vaak snel geregeld</span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
              Personeelstekort in de horeca vraagt om directe actie. Dankzij ons netwerk van meer dan <span className="font-semibold text-gold">150+ ervaren horeca­professionals</span> kunnen wij vaak snel de juiste medewerker voorstellen.
            </p>
          </motion.div>

          {/* Bemiddeling List */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12"
          >
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 p-8">
              <h3 className="font-playfair text-2xl text-cream mb-6">Wij bemiddelen onder andere:</h3>
              <ul className="space-y-3 font-inter text-base text-cream/90">
                {[
                  'Head chefs',
                  'Sous chefs',
                  'Zelfstandig werkend koks',
                  'Hulpkoks',
                  'Bedieningsmedewerkers',
                  'Leidinggevenden bediening',
                  'Complete keuken- of bedieningsteams'
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 p-8 flex flex-col justify-center">
              <ChefHat className="w-16 h-16 text-gold mb-6" />
              <p className="font-inter text-lg text-cream/90 leading-relaxed">
                Of het nu gaat om <span className="text-gold font-semibold">ziekte, seizoensdrukte, een nieuw concept</span> of <span className="text-gold font-semibold">structurele versterking</span>, wij schakelen snel en doeltreffend.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wat ons onderscheidt Section */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Award className="w-12 h-12 text-gold mb-6" />
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown mb-8 leading-tight">
                Horecafreelancers die <span className="text-gold italic">écht</span> bij je zaak passen
              </h2>
              <p className="font-inter text-lg text-brown-medium leading-relaxed mb-8">
                Goede horecafreelancers vinden is meer dan alleen een cv matchen. Het gaat om <span className="font-semibold text-brown">tempo, teamdynamiek, mentaliteit en vakmanschap</span>.
              </p>

              <div className="bg-brown/5 border border-brown/10 p-8 mb-8">
                <h3 className="font-playfair text-2xl text-brown mb-6">Wat ons onderscheidt?</h3>
                <p className="font-inter text-base text-brown-medium leading-relaxed mb-6">
                  Wij hebben zelf meer dan <span className="font-semibold text-gold">30 jaar ervaring</span> als head chef in verschillende keukens. Wij kennen de druk van de service, de uitdagingen van planning en het belang van een sterk team.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-inter text-sm uppercase tracking-wider text-gold mb-4">Daardoor weten wij precies:</h4>
                  {[
                    'Welk profiel past bij een brasserie',
                    'Wie functioneert in een fine dining keuken',
                    'Wat nodig is binnen een hotel of groot horecaconcept',
                    'Hoe je rust creëert binnen een team'
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-base text-brown-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-inter text-lg text-brown-medium italic">
                Met ons haal je geen "invulling", maar <span className="text-gold font-semibold not-italic">versterking</span> in huis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <Image
                src="/service-professional.png"
                alt="Professional service"
                fill
                className="object-cover brightness-[0.85]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/40 to-transparent" />
              <div className="absolute inset-0 border-2 border-gold/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Complete Ontzorging Section */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Utensils className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-8">
              Complete ontzorging
              <br />
              <span className="text-gold italic">van planning tot contracten</span>
            </h2>
            <p className="font-inter text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed mb-4">
              Wanneer je denkt <span className="font-semibold text-gold">"ik zoek horecafreelancers"</span>, zoek je eigenlijk vooral <span className="font-semibold text-gold">rust</span>.
            </p>
            <p className="font-inter text-lg text-cream/70 max-w-2xl mx-auto">
              Daarom regelen wij het volledige traject:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
          >
            {[
              'Selectie en screening',
              'Planning en inzet',
              'Contracten en administratie',
              'Heldere en transparante afspraken',
              'Duidelijke communicatie'
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream/5 backdrop-blur-sm border border-cream/10 p-6 flex items-center gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0" />
                <span className="font-inter text-base text-cream">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <p className="font-playfair text-2xl md:text-3xl text-gold italic mb-2">
              Geen verrassingen. Geen onduidelijkheid.
            </p>
            <p className="font-inter text-lg text-cream/80">
              Alles eerlijk, professioneel en overzichtelijk geregeld.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tijdelijke én Structurele Section */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown mb-8">
              Tijdelijke <span className="text-gold italic">én</span> structurele oplossingen
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {[
              'Flexibele inzet voor korte periodes',
              'Langdurige plaatsingen',
              'Volledig samengestelde teams',
              'Ondersteuning bij opstart of reorganisatie'
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brown/5 border border-brown/10 p-6 flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-inter text-lg text-brown-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-inter text-xl text-brown-medium text-center leading-relaxed"
          >
            Zo ben je voorbereid op <span className="font-semibold text-gold">piekmomenten</span> én bouw je aan <span className="font-semibold text-gold">stabiliteit</span> op lange termijn.
          </motion.p>
        </div>
      </section>

      {/* Waarom Section */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Users className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-8">
              Waarom horecaondernemers
              <br />
              <span className="text-gold italic">kiezen voor ons</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: Users, text: '200+ professionals in ons netwerk' },
              { icon: Clock, text: 'Snelle plaatsing, vaak snel' },
              { icon: Award, text: '30+ jaar praktijkervaring in de keuken' },
              { icon: CheckCircle2, text: 'Persoonlijke aanpak' },
              { icon: CheckCircle2, text: 'Eerlijke en transparante werkwijze' },
              { icon: CheckCircle2, text: 'Complete ontzorging' }
            ].map(({ icon: Icon, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream/10 backdrop-blur-sm border border-gold/30 p-8 text-center hover:bg-cream/15 transition-colors duration-300"
              >
                <Icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="font-inter text-base text-cream">{text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-inter text-xl text-cream/90 text-center leading-relaxed"
          >
            Wij begrijpen dat <span className="font-semibold text-gold">rust in je team</span> direct invloed heeft op je <span className="font-semibold text-gold">omzet, kwaliteit en werkplezier</span>.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown mb-8 leading-tight">
              Ik zoek horecafreelancers en ik wil het{' '}
              <span className="text-gold italic">goed geregeld</span> hebben.
            </h2>
            <p className="font-inter text-lg md:text-xl text-brown-medium leading-relaxed max-w-3xl mx-auto">
              Ben je klaar met last-minute stress, onderbezetting en constante wisselingen?
            </p>
            <p className="font-inter text-lg md:text-xl text-brown-medium leading-relaxed max-w-3xl mx-auto mt-4">
              Kies voor een partner die de horeca van binnenuit kent en met je meedenkt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brown/5 border border-brown/10 p-8 md:p-12"
          >
            <form id="contact" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="function" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                  Welke functie zoek je?
                </label>
                <input
                  type="text"
                  id="function"
                  name="function"
                  placeholder="Bijv. Sous chef, bedieningsmedewerker, etc."
                  className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown resize-none"
                  placeholder="Vertel ons over je situatie en wanneer je freelancers nodig hebt..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full md:w-auto px-10 py-4 font-inter text-sm uppercase tracking-wider text-cream bg-brown border-2 border-brown hover:bg-gold hover:border-gold transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <span>{isSubmitting ? 'Verzenden...' : 'Neem contact op'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-base text-brown-medium text-center mt-8"
          >
            Neem vandaag nog contact met ons op en ontdek hoe snel wij kunnen schakelen.
          </motion.p>
        </div>
      </section>

    </main>
  );
}
