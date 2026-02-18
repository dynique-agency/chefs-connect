'use client';

import { useState, useRef, useEffect } from 'react';
import { ChefHat, CheckCircle2, Calendar, Users, Briefcase, ArrowRight, Clock, Award } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { submitToWeb3FormsWithFiles } from '@/lib/form-submit';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorecaSpecialistPage() {
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

    const result = await submitToWeb3FormsWithFiles(formData, {
      subject: 'Chefs Connect: Aanmelding Horecaprofessional',
    });

    if (result.success) {
      router.push('/bedankt');
    } else {
      alert(result.error || 'Er is een fout opgetreden. Probeer het later opnieuw.');
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
              <ChefHat className="w-14 h-14 text-gold" />
              <div className="h-px bg-gold/30 w-32" />
              
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brown leading-[1.1]">
                Ik ben een <span className="text-gold italic">horeca professional</span>
              </h1>

              <div className="space-y-6 font-inter text-base md:text-lg text-brown-medium leading-relaxed max-w-xl">
                <p>
                  Ben jij chef, kok of bedieningsmedewerker en wil je als <span className="font-semibold text-brown">freelancer werken in de horeca</span>, of ben je dat al? Zoek je <span className="font-semibold text-gold">vrijheid, flexibiliteit én zekerheid</span> van mooie opdrachten?
                </p>
                <p className="text-xl font-medium text-gold">
                  Bij ChefsConnect krijg je toegang tot hoogwaardige freelance opdrachten die passen bij jouw ervaring en agenda.
                </p>
                <p>
                  Wij geloven dat sterke horecaprofessionals het verschil maken in iedere zaak. Daarom zorgen wij voor <span className="font-semibold text-brown">duidelijke afspraken</span> en opdrachten waar jij écht tot je recht komt.
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
                  src="/team-founders.jpg"
                  alt="Horeca professional"
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

      {/* Freelance Werken Section */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Briefcase className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-8">
              Freelance werken in de horeca?
              <br />
              <span className="text-gold italic">Wij openen de juiste deuren</span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
              Als zelfstandig horecaprofessional wil je <span className="font-semibold text-gold">continuïteit én kwaliteit</span> in je opdrachten. Dankzij ons grote netwerk krijg je toegang tot opdrachten die je vaak niet zelf vindt.
            </p>
          </motion.div>

          {/* Opdrachtgevers List */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12"
          >
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 p-8">
              <h3 className="font-playfair text-2xl text-cream mb-6">Wij werken samen met onder andere:</h3>
              <ul className="space-y-3 font-inter text-base text-cream/90">
                {[
                  'Restaurants',
                  'Hotels',
                  'Cateraars',
                  'Horecagroepen',
                  'Nieuw te openen concepten'
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
              <Calendar className="w-16 h-16 text-gold mb-6" />
              <p className="font-inter text-lg text-cream/90 leading-relaxed">
                Of je nu <span className="text-gold font-semibold">extra opdrachten zoekt</span>, seizoenswerk wilt draaien of <span className="text-gold font-semibold">langdurige freelance samenwerkingen</span> ambieert, wij helpen je aan de juiste match.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hoe Het Werkt Section */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown mb-8">
              Volledige focus op{' '}
              <span className="text-gold italic">freelance horeca opdrachten</span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-brown-medium max-w-3xl mx-auto leading-relaxed">
              Wij richten ons volledig op zelfstandige professionals in de horeca en begrijpen wat jij nodig hebt om succesvol te zijn.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="font-playfair text-3xl text-brown text-center mb-12">Hoe het werkt:</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  number: '01',
                  title: 'Schrijf je in',
                  description: 'Schrijf je in via onze website en upload je cv.'
                },
                {
                  number: '02',
                  title: 'Persoonlijke intake',
                  description: 'We bespreken jouw ervaring, specialisaties en voorkeuren.'
                },
                {
                  number: '03',
                  title: 'Toegang tot ons systeem',
                  description: 'Schrijf je in op opdrachten die passen bij jouw agenda.'
                },
                {
                  number: '04',
                  title: 'Wij regelen de match',
                  description: 'Wij stellen je voor bij opdrachtgevers die aansluiten bij jouw profiel.'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-brown/5 border border-brown/10 p-8 relative"
                >
                  <div className="absolute top-6 right-6 font-playfair text-6xl text-gold/20 font-light">
                    {step.number}
                  </div>
                  <h4 className="font-playfair text-2xl text-brown mb-4">{step.title}</h4>
                  <p className="font-inter text-base text-brown-medium leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-playfair text-2xl text-gold italic text-center mt-12"
            >
              Snel, overzichtelijk en professioneel geregeld.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Persoonlijke Benadering Section */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full">
                <Image
                  src="/service-vertical.png"
                  alt="Persoonlijke benadering"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain brightness-[0.85]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 border-2 border-gold/30 pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Users className="w-12 h-12 text-gold mb-6" />
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-8 leading-tight">
                Persoonlijke benadering
                <br />
                <span className="text-gold italic">jij bent geen nummertje</span>
              </h2>
              <p className="font-inter text-lg text-cream/90 leading-relaxed mb-8">
                Bij ons draait het om wie jij bent als professional. We kijken verder dan alleen je cv en leren je echt kennen.
              </p>

              <div className="bg-cream/10 backdrop-blur-sm border border-gold/30 p-8">
                <h3 className="font-playfair text-2xl text-cream mb-6">Tijdens de intake bespreken we:</h3>
                
                <div className="space-y-4">
                  {[
                    'Jouw ervaring en specialisaties',
                    'Het type keuken of zaak dat bij je past',
                    'Waar jij energie van krijgt',
                    'Jouw gewenste werk-privébalans'
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-base text-cream/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-inter text-lg text-cream/90 leading-relaxed mt-8 italic">
                Zo zorgen wij voor <span className="text-gold font-semibold not-italic">duurzame freelance samenwerkingen</span> in plaats van losse, willekeurige diensten.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Duidelijke Afspraken Section */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Award className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown mb-8">
              Duidelijke afspraken en
              <br />
              <span className="text-gold italic">professionele ondersteuning</span>
            </h2>
            <p className="font-inter text-xl text-brown-medium max-w-3xl mx-auto leading-relaxed">
              Freelance werken betekent ondernemen. Daarom zorgen wij voor heldere afspraken en een professionele samenwerking, zodat jij precies weet waar je aan toe bent.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-brown/5 border border-brown/10 p-8 md:p-12 mb-12">
              <Clock className="w-12 h-12 text-gold mb-6" />
              <h3 className="font-playfair text-3xl text-brown mb-6">Snelle en heldere communicatie</h3>
              <p className="font-inter text-lg text-brown-medium leading-relaxed mb-8">
                Niemand zit te wachten op eindeloze procedures of onduidelijke afspraken.
              </p>
              <p className="font-inter text-lg text-brown-medium leading-relaxed mb-8">
                Wij schakelen snel en kunnen vaak binnen korte tijd passende opdrachten aanbieden. Onze communicatie is <span className="font-semibold text-gold">direct, eerlijk en transparant</span>.
              </p>

              <h4 className="font-inter text-sm uppercase tracking-wider text-brown/70 mb-4">Dat betekent:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Geen verrassingen',
                  'Duidelijke planning',
                  'Snelle terugkoppeling',
                  'Goede en eerlijke tarieven'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="font-inter text-base text-brown-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-8">
              Waarom freelance horecaprofessionals
              <br />
              <span className="text-gold italic">voor ons kiezen</span>
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
              'Groot netwerk van kwalitatieve opdrachtgevers',
              'Continue stroom van freelance opdrachten',
              'Persoonlijke begeleiding',
              'Transparante werkwijze',
              'Professioneel planningssysteem',
              'Snelle plaatsingen',
              'Focus op langdurige samenwerkingen'
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream/10 backdrop-blur-sm border border-gold/30 p-6 flex items-start gap-4 hover:bg-cream/15 transition-colors duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-inter text-base text-cream">{item}</span>
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
            Wij helpen je niet alleen aan opdrachten, wij helpen je bouwen aan een <span className="font-semibold text-gold">stabiele en succesvolle freelance carrière</span> in de horeca.
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
              Klaar om{' '}
              <span className="text-gold italic">aan de slag te gaan?</span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-brown-medium leading-relaxed max-w-3xl mx-auto">
              Schrijf je vandaag nog in en ontdek welke freelance horeca opdrachten op jou wachten.
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
                    Telefoon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  />
                </div>

                <div>
                  <label htmlFor="function" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Jouw functie *
                  </label>
                  <input
                    type="text"
                    id="function"
                    name="function"
                    required
                    placeholder="Bijv. Chef-kok, Sous chef, etc."
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                  Jaren ervaring
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  placeholder="Bijv. 5 jaar"
                  className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                />
              </div>

              <div>
                <label htmlFor="cv" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                  Upload je CV
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gold/10 file:text-brown hover:file:bg-gold/20"
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
                  placeholder="Vertel ons over je ervaring, voorkeuren en wat voor opdrachten je zoekt..."
                />
              </div>

              {/* Honeypot field for spam protection */}
              <input
                type="text"
                name="botcheck"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full md:w-auto px-10 py-4 font-inter text-sm uppercase tracking-wider text-cream bg-brown border-2 border-brown hover:bg-gold hover:border-gold transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <span>{isSubmitting ? 'Verzenden...' : 'Schrijf je in'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
