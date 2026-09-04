'use client';

import { useState, useRef, useEffect } from 'react';
import { ChefHat, CheckCircle2, Calendar, Users, Briefcase, ArrowRight, Clock, Award, MessageCircle } from 'lucide-react';
import FaqSection from '@/components/ui/FaqSection';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { siteUrl } from '@/lib/seo';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { FORMSUBMIT_ACTION_URL, validateFile } from '@/lib/form-submit';
import FormNotification from '@/components/ui/FormNotification';
import PremiumFreelancerPopup from '@/components/ui/PremiumFreelancerPopup';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorecaSpecialistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; title: string; messages: string[] } | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Client-side validation before standard form submit
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value;

    const errors: string[] = [];
    if (!name || name.trim().length < 2) errors.push('Naam moet minimaal 2 karakters bevatten');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Voer een geldig e-mailadres in');
    if (!message || message.trim().length < 10) errors.push('Bericht moet minimaal 10 karakters bevatten');

    if (selectedFile) {
      const fileCheck = validateFile(selectedFile);
      if (!fileCheck.valid) errors.push(fileCheck.error || 'Ongeldig bestand');
    }

    if (errors.length > 0) {
      e.preventDefault();
      setNotification({ type: 'error', title: 'Controleer je gegevens', messages: errors });
      return;
    }

    setIsSubmitting(true);
    // Form submits normally via action attribute to FormSubmit.co
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Freelancer Lead Popup */}
      <PremiumFreelancerPopup showAfterMs={4000} />

      {/* Notification */}
      {notification && (
        <FormNotification
          type={notification.type}
          title={notification.title}
          messages={notification.messages}
          onClose={() => setNotification(null)}
        />
      )}
      
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
                Ik ben een <span className="text-gold italic">horecaspecialist</span>
              </h1>

              <div className="space-y-6 font-inter text-base md:text-lg text-brown-medium leading-relaxed max-w-xl">
                <p>
                  Ben jij chef, kok of bedieningsmedewerker en wil je als <span className="font-semibold text-brown">freelancer werken in de horeca</span>, of ben je dat al? Zoek je <span className="font-semibold text-gold">vrijheid, flexibiliteit én zekerheid</span> van mooie opdrachten?
                </p>
                <p className="text-xl font-medium text-gold">
                  Bij Chefs Connect krijg je toegang tot hoogwaardige freelance opdrachten die passen bij jouw ervaring en agenda.
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
                  alt="De oprichters van Chefs Connect in een professionele keuken"
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
                  src="/freelancer-bediening.webp"
                  alt="Freelance bedieningsmedewerker van Chefs Connect aan het werk"
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
                Persoonlijke
                <br />
                benadering
                <br />
                <span className="text-gold italic">jij bent geen</span>
                <br />
                <span className="text-gold italic">nummertje</span>
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

      {/* Mid-page CTA Strip */}
      <section className="py-10 px-6 bg-gold">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-playfair text-xl md:text-2xl text-brown italic">Klaar voor jouw volgende opdracht?</p>
            <p className="font-inter text-sm text-brown/70 mt-1">Schrijf je in en wij nemen binnen 24 uur contact op.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-inter text-sm uppercase tracking-wider text-cream bg-brown hover:bg-brown/90 transition-colors duration-300"
            >
              <span>Direct inschrijven</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/31641875803?text=Hallo!%20Ik%20ben%20een%20horecaprofessional%20en%20wil%20graag%20meer%20weten%20over%20jullie%20opdrachten."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-inter text-sm uppercase tracking-wider text-brown bg-brown/10 hover:bg-brown/20 border border-brown/30 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
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
            <form
              id="contact"
              action={FORMSUBMIT_ACTION_URL}
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* FormSubmit.co hidden fields */}
              <input type="hidden" name="_subject" value="Chefs Connect: Aanmelding Horecaprofessional" />
              <input type="hidden" name="_next" value={siteUrl('https://chefs-connect.nl/bedankt')} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
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
                    placeholder="Bijv. Chef-kok, Plaatsvervangend keukenchef, etc."
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
                <label htmlFor="attachment" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                  CV Uploaden (Optioneel)
                </label>
                <div className="relative">
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="attachment"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      if (file) {
                        if (file.size > 10 * 1024 * 1024) {
                          setNotification({
                            type: 'error',
                            title: 'Bestand te groot',
                            messages: ['Maximale bestandsgrootte is 10MB.']
                          });
                          e.target.value = '';
                          setSelectedFile(null);
                          return;
                        }
                        const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                        if (!allowed.includes(file.type)) {
                          setNotification({
                            type: 'error',
                            title: 'Ongeldig bestandstype',
                            messages: ['Alleen PDF en Word documenten zijn toegestaan.']
                          });
                          e.target.value = '';
                          setSelectedFile(null);
                          return;
                        }
                      }
                      setSelectedFile(file);
                      setNotification(null);
                    }}
                  />
                  <div className={`w-full px-4 py-6 border-2 border-dashed transition-all duration-300 ${
                    selectedFile 
                      ? 'border-gold bg-gold/5' 
                      : 'border-brown/20 hover:border-gold/50 hover:bg-gold/5'
                  }`}>
                    <div className="flex flex-col items-center text-center pointer-events-none">
                      {selectedFile ? (
                        <>
                          <CheckCircle2 className="w-8 h-8 text-gold mb-2" />
                          <p className="font-inter text-sm font-medium text-brown">{selectedFile.name}</p>
                          <p className="font-inter text-xs text-brown-medium mt-1">
                            {selectedFile.size > 1024 * 1024
                              ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`
                              : `${(selectedFile.size / 1024).toFixed(0)} KB`}
                          </p>
                          <span
                            className="mt-2 font-inter text-xs text-gold hover:text-gold-dark transition-colors underline pointer-events-auto cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setSelectedFile(null);
                              if (fileInputRef.current) fileInputRef.current.value = '';
                            }}
                          >
                            Verwijderen
                          </span>
                        </>
                      ) : (
                        <>
                          <svg className="w-8 h-8 text-brown/40 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                          </svg>
                          <p className="font-inter text-sm text-brown-medium">
                            Klik om je CV te uploaden
                          </p>
                          <p className="font-inter text-xs text-brown-medium/60 mt-1">
                            PDF of Word, max 10MB
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
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

              {/* FormSubmit.co honeypot */}
              <input
                type="text"
                name="_gotcha"
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

      {/* FAQ Section */}
      <FaqSection
        title="Veelgestelde vragen"
        subtitle="Alles wat je wilt weten over freelance opdrachten via Chefs Connect."
        items={[
          {
            question: 'Hoe meld ik me aan als horecafreelancer?',
            answer: 'Je kunt je aanmelden via het inschrijfformulier op deze pagina. Na ontvangst nemen wij binnen één werkdag contact met je op voor een persoonlijk kennismakingsgesprek.',
          },
          {
            question: 'Wat voor opdrachten kan ik verwachten?',
            answer: 'Wij plaatsen freelancers bij restaurants, hotels, cateraars en evenementenbedrijven door heel Nederland en België. De opdrachten variëren van een enkele avond tot meerdere weken, afhankelijk van jouw beschikbaarheid en voorkeur.',
          },
          {
            question: 'Wat verdien ik als freelancer via Chefs Connect?',
            answer: 'Tarieven zijn afhankelijk van jouw functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn transparant over wat je kunt verwachten. Dit bespreken wij tijdens het kennismakingsgesprek.',
          },
          {
            question: 'Hoe snel krijg ik mijn eerste opdracht?',
            answer: 'Dat hangt af van jouw beschikbaarheid en het aanbod op dat moment. In de meeste gevallen kunnen wij binnen één tot twee weken na inschrijving een eerste passende opdracht voorstellen.',
          },
          {
            question: 'Werken jullie ook met freelancers in België?',
            answer: 'Ja. Wij bemiddelen actief in zowel Nederland als België. Ben je gevestigd in de grensregio of wil je in beide landen werken? Dan is Chefs Connect een uitstekende partner.',
          },
        ]}
      />

      {/* Kennisbank cross-link */}
      <section className="pb-8 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/kennisbank/freelance-kok-worden"
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-brown/5 border border-brown/10 p-6 md:p-8 hover:border-gold/40 transition-colors duration-300"
          >
            <div>
              <span className="font-inter text-xs uppercase tracking-[0.2em] text-gold block mb-2">Uit de kennisbank</span>
              <h3 className="font-playfair text-xl md:text-2xl text-brown group-hover:text-gold transition-colors duration-300">
                Freelance kok worden: zo begin je
              </h3>
              <p className="font-inter text-sm text-brown-medium mt-1">
                Van KvK-inschrijving tot je eerste opdracht. Het complete stappenplan.
              </p>
            </div>
            <ArrowRight className="w-6 h-6 text-brown/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>
        </div>
      </section>

      {/* Werken per stad en functie */}
      <section className="pb-12 px-6 bg-cream">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <span className="font-inter text-xs uppercase tracking-[0.2em] text-gold block mb-5 text-center">
              Werk als kok in jouw regio
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: '/vacature-kok-eindhoven', label: 'Kok in Eindhoven' },
                { href: '/vacature-kok-tilburg', label: 'Kok in Tilburg' },
                { href: '/vacature-kok-breda', label: 'Kok in Breda' },
                { href: '/vacature-kok-den-bosch', label: 'Kok in Den Bosch' },
                { href: '/vacature-kok-nijmegen', label: 'Kok in Nijmegen' },
                { href: '/vacature-kok-maastricht', label: 'Kok in Maastricht' },
                { href: '/vacature-kok-utrecht', label: 'Kok in Utrecht' },
                { href: '/vacature-kok-helmond', label: 'Kok in Helmond' },
                { href: '/vacature-kok-venlo', label: 'Kok in Venlo' },
                { href: '/vacature-kok-antwerpen', label: 'Kok in Antwerpen' },
                { href: '/vacature-kok-hasselt', label: 'Kok in Hasselt' },
                { href: '/vacature-kok-gent', label: 'Kok in Gent' },
                { href: '/vacature-kok-brugge', label: 'Kok in Brugge' },
                { href: '/vacature-kok-brussel', label: 'Kok in Brussel' },
                { href: '/vacature-kok-houten', label: 'Kok in Houten' },
                { href: '/vacature-kok-oss', label: 'Kok in Oss' },
                { href: '/vacature-kok-roosendaal', label: 'Kok in Roosendaal' },
                { href: '/vacature-kok-bergen-op-zoom', label: 'Kok in Bergen op Zoom' },
                { href: '/vacature-kok-oosterhout', label: 'Kok in Oosterhout' },
                { href: '/vacature-kok-waalwijk', label: 'Kok in Waalwijk' },
                { href: '/vacature-kok-uden', label: 'Kok in Uden' },
                { href: '/vacature-kok-sittard-geleen', label: 'Kok in Sittard-Geleen' },
                { href: '/vacature-kok-heerlen', label: 'Kok in Heerlen' },
                { href: '/vacature-kok-roermond', label: 'Kok in Roermond' },
                { href: '/vacature-kok-weert', label: 'Kok in Weert' },
                { href: '/vacature-kok-kerkrade', label: 'Kok in Kerkrade' },
                { href: '/vacature-kok-amsterdam', label: 'Kok in Amsterdam' },
                { href: '/vacature-kok-rotterdam', label: 'Kok in Rotterdam' },
                { href: '/vacature-kok-den-haag', label: 'Kok in Den Haag' },
                { href: '/vacature-kok-leuven', label: 'Kok in Leuven' },
                { href: '/vacature-kok-mechelen', label: 'Kok in Mechelen' },
                { href: '/vacature-kok-kortrijk', label: 'Kok in Kortrijk' },
                { href: '/vacature-kok-oostende', label: 'Kok in Oostende' },
                { href: '/vacature-kok-aalst', label: 'Kok in Aalst' },
                { href: '/vacature-kok-sint-niklaas', label: 'Kok in Sint-Niklaas' },
                { href: '/vacature-kok-genk', label: 'Kok in Genk' },
                { href: '/vacature-kok-middelburg', label: 'Kok in Middelburg' },
                { href: '/vacature-kok-vlissingen', label: 'Kok in Vlissingen' },
                { href: '/vacature-kok-goes', label: 'Kok in Goes' },
                { href: '/vacature-kok-groningen', label: 'Kok in Groningen' },
                { href: '/vacature-kok-valkenburg', label: 'Kok in Valkenburg' },
                { href: '/vacature-kok-echt', label: 'Kok in Echt' },
                { href: '/vacature-kok-best', label: 'Kok in Best' },
                { href: '/vacature-kok-terneuzen', label: 'Kok in Terneuzen' },
                { href: '/vacature-kok-domburg', label: 'Kok in Domburg' },
                { href: '/vacature-kok-renesse', label: 'Kok in Renesse' },
                { href: '/vacature-instellingskok', label: 'Instellingskok' },
                { href: '/limburg', label: 'Heel Limburg' },
                { href: '/zeeland', label: 'Heel Zeeland' },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="font-inter text-sm text-brown border border-brown/20 px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="font-inter text-xs uppercase tracking-[0.2em] text-gold block mb-5 text-center">
              Werk in de bediening in jouw regio
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: '/vacature-bediening-eindhoven', label: 'Bediening in Eindhoven' },
                { href: '/vacature-bediening-tilburg', label: 'Bediening in Tilburg' },
                { href: '/vacature-bediening-breda', label: 'Bediening in Breda' },
                { href: '/vacature-bediening-den-bosch', label: 'Bediening in Den Bosch' },
                { href: '/vacature-bediening-nijmegen', label: 'Bediening in Nijmegen' },
                { href: '/vacature-bediening-maastricht', label: 'Bediening in Maastricht' },
                { href: '/vacature-bediening-utrecht', label: 'Bediening in Utrecht' },
                { href: '/vacature-bediening-helmond', label: 'Bediening in Helmond' },
                { href: '/vacature-bediening-venlo', label: 'Bediening in Venlo' },
                { href: '/vacature-bediening-antwerpen', label: 'Bediening in Antwerpen' },
                { href: '/vacature-bediening-hasselt', label: 'Bediening in Hasselt' },
                { href: '/vacature-bediening-gent', label: 'Bediening in Gent' },
                { href: '/vacature-bediening-brugge', label: 'Bediening in Brugge' },
                { href: '/vacature-bediening-brussel', label: 'Bediening in Brussel' },
                { href: '/vacature-bediening-houten', label: 'Bediening in Houten' },
                { href: '/vacature-bediening-oss', label: 'Bediening in Oss' },
                { href: '/vacature-bediening-roosendaal', label: 'Bediening in Roosendaal' },
                { href: '/vacature-bediening-bergen-op-zoom', label: 'Bediening in Bergen op Zoom' },
                { href: '/vacature-bediening-oosterhout', label: 'Bediening in Oosterhout' },
                { href: '/vacature-bediening-waalwijk', label: 'Bediening in Waalwijk' },
                { href: '/vacature-bediening-uden', label: 'Bediening in Uden' },
                { href: '/vacature-bediening-sittard-geleen', label: 'Bediening in Sittard-Geleen' },
                { href: '/vacature-bediening-heerlen', label: 'Bediening in Heerlen' },
                { href: '/vacature-bediening-roermond', label: 'Bediening in Roermond' },
                { href: '/vacature-bediening-weert', label: 'Bediening in Weert' },
                { href: '/vacature-bediening-kerkrade', label: 'Bediening in Kerkrade' },
                { href: '/vacature-bediening-amsterdam', label: 'Bediening in Amsterdam' },
                { href: '/vacature-bediening-rotterdam', label: 'Bediening in Rotterdam' },
                { href: '/vacature-bediening-den-haag', label: 'Bediening in Den Haag' },
                { href: '/vacature-bediening-leuven', label: 'Bediening in Leuven' },
                { href: '/vacature-bediening-mechelen', label: 'Bediening in Mechelen' },
                { href: '/vacature-bediening-kortrijk', label: 'Bediening in Kortrijk' },
                { href: '/vacature-bediening-oostende', label: 'Bediening in Oostende' },
                { href: '/vacature-bediening-aalst', label: 'Bediening in Aalst' },
                { href: '/vacature-bediening-sint-niklaas', label: 'Bediening in Sint-Niklaas' },
                { href: '/vacature-bediening-genk', label: 'Bediening in Genk' },
                { href: '/vacature-bediening-middelburg', label: 'Bediening in Middelburg' },
                { href: '/vacature-bediening-vlissingen', label: 'Bediening in Vlissingen' },
                { href: '/vacature-bediening-goes', label: 'Bediening in Goes' },
                { href: '/vacature-bediening-groningen', label: 'Bediening in Groningen' },
                { href: '/vacature-bediening-valkenburg', label: 'Bediening in Valkenburg' },
                { href: '/vacature-bediening-echt', label: 'Bediening in Echt' },
                { href: '/vacature-bediening-best', label: 'Bediening in Best' },
                { href: '/vacature-bediening-terneuzen', label: 'Bediening in Terneuzen' },
                { href: '/vacature-bediening-domburg', label: 'Bediening in Domburg' },
                { href: '/vacature-bediening-renesse', label: 'Bediening in Renesse' },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="font-inter text-sm text-brown border border-brown/20 px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp secondary option */}
      <section className="pb-16 px-6 bg-cream">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="font-inter text-base text-brown-medium text-center">Liever eerst een vraag stellen?</p>
          <a
            href="https://wa.me/31641875803?text=Hallo!%20Ik%20ben%20een%20horecaprofessional%20en%20wil%20graag%20meer%20weten%20over%20jullie%20opdrachten."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-inter text-sm text-brown font-semibold hover:text-gold transition-colors duration-300"
          >
            <MessageCircle className="w-4 h-4 text-gold" />
            <span>Stuur een WhatsApp</span>
          </a>
          <span className="text-brown/30 hidden sm:block">·</span>
          <a
            href="tel:+31641875803"
            className="font-inter text-sm text-brown font-semibold hover:text-gold transition-colors duration-300"
          >
            +31 6 41875803
          </a>
        </div>
      </section>

    </main>
  );
}
