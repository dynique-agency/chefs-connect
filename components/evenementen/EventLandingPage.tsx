'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, ArrowRight, ChefHat, Sparkles, ClipboardList } from 'lucide-react';
import { submitToFormSubmit } from '@/lib/form-submit';
import FormNotification from '@/components/ui/FormNotification';

/**
 * Shared layout for Connect Events & Dining landing pages (per event type).
 *
 * Structure is shared for maintainability; every page passes its own unique,
 * intent-specific copy (hero, intro, offerings, FAQ) so each rendered page is
 * genuinely distinct while we maintain one premium form + layout.
 */

export interface EventLandingContent {
  /** Eyebrow above the hero, e.g. "Connect Events & Dining" */
  eyebrow: string;
  /** Hero heading split into a normal lead and a gold-italic accent */
  heroLead: string;
  heroAccent: string;
  /** Hero paragraph under the title */
  heroSubtext: string;
  /** Eyebrow above the intro heading */
  introEyebrow: string;
  introHeadingLead: string;
  introHeadingAccent: string;
  /** 2-3 unique paragraphs positioning this event type */
  introParagraphs: string[];
  /** Offerings/formats grid heading */
  offeringsHeading: string;
  offeringsIntro: string;
  offerings: { title: string; description: string }[];
  /** FAQ shown on page (must match the FAQ schema in the page's layout) */
  faq: { question: string; answer: string }[];
  /** Email subject for the form submission */
  formSubject: string;
  /** Prefills the "type evenement" field */
  formEventTypeDefault: string;
  /** Hidden _location value for the form */
  formLocation: string;
  heroImage?: string;
  introImage?: string;
  relatedLinks?: { href: string; label: string }[];
}

const WHY_CARDS = [
  {
    icon: ChefHat,
    label: 'Topchefs op locatie',
    desc: 'Onze chefs komen uit het sterren- en fine dining-segment. Zij koken ter plaatse, vers en op niveau.',
  },
  {
    icon: Sparkles,
    label: 'Volledige ontzorging',
    desc: 'Van menuontwerp en inkoop tot bediening en afronding. Jij ontvangt je gasten, wij regelen de rest.',
  },
  {
    icon: ClipboardList,
    label: 'Menu op maat',
    desc: 'Elk menu wordt afgestemd op jouw gezelschap, gelegenheid en locatie. Geen standaardpakketten.',
  },
];

const STEPS = [
  {
    step: '01',
    title: 'Aanvraag en wensen',
    desc: 'Je vertelt ons over je gelegenheid, het aantal gasten, de locatie en je culinaire voorkeuren.',
  },
  {
    step: '02',
    title: 'Menuvoorstel op maat',
    desc: 'Wij stellen een passend menu en plan van aanpak voor, afgestemd op jouw gezelschap en budget.',
  },
  {
    step: '03',
    title: 'Uitvoering op locatie',
    desc: 'Onze chefs en bediening verzorgen het volledige diner ter plaatse, tot en met de afronding.',
  },
];

export default function EventLandingPage({
  eyebrow,
  heroLead,
  heroAccent,
  heroSubtext,
  introEyebrow,
  introHeadingLead,
  introHeadingAccent,
  introParagraphs,
  offeringsHeading,
  offeringsIntro,
  offerings,
  faq,
  formSubject,
  formEventTypeDefault,
  formLocation,
  heroImage = '/events-service.png',
  introImage = '/event-service-detail.png',
  relatedLinks,
}: EventLandingContent) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    title: string;
    messages: string[];
  } | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await submitToFormSubmit(formData, { subject: formSubject });

      if (result.success) {
        router.push('/bedankt');
      } else {
        const errorMessages = result.error?.split('\n') || ['Er is een fout opgetreden. Probeer het later opnieuw.'];
        setNotification({ type: 'error', title: 'Controleer je gegevens', messages: errorMessages });
        setIsSubmitting(false);
      }
    } catch {
      setNotification({
        type: 'error',
        title: 'Er is iets misgegaan',
        messages: ['Probeer het opnieuw of neem contact op via +31 6 41875803.'],
      });
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      {notification && (
        <FormNotification
          type={notification.type}
          title={notification.title}
          messages={notification.messages}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center justify-center px-6 py-32">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={`${formEventTypeDefault} met fine dining catering van Connect Events & Dining`} fill className="object-cover brightness-[0.4]" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-brown/60 via-brown/40 to-brown/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6"
          >
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-8"
          >
            {heroLead}
            <br />
            <span className="text-gold italic">{heroAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-inter text-lg md:text-xl text-cream/85 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {heroSubtext}
          </motion.p>

          <motion.a
            href="#aanvragen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="inline-flex items-center gap-3 px-10 py-5 font-inter text-sm uppercase tracking-wider text-brown bg-gold hover:bg-gold-dark transition-all duration-500"
          >
            <span>Vraag offerte aan</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* Intro / positioning */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">{introEyebrow}</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown leading-tight mb-8">
                {introHeadingLead}
                <span className="text-gold italic"> {introHeadingAccent}</span>
              </h2>
              <div className="space-y-5 font-inter text-base md:text-lg text-brown-medium leading-relaxed">
                {introParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[480px]">
              <Image src={introImage} alt="Fine dining gerecht opgemaakt door een chef van Connect Events & Dining" fill className="object-cover brightness-[0.9]" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/20 to-transparent" />
              <div className="absolute inset-0 border-2 border-gold/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">Wat wij verzorgen</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-cream mb-6">{offeringsHeading}</h2>
            <p className="font-inter text-lg text-cream/70 max-w-2xl mx-auto">{offeringsIntro}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-cream/5 border border-cream/10 p-7 hover:border-gold/40 transition-colors duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-gold mb-4" />
                <h3 className="font-playfair text-lg text-cream mb-3">{item.title}</h3>
                <p className="font-inter text-sm text-cream/65 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">Waarom Connect Events &amp; Dining</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown">Een ervaring die gasten bijblijft</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {WHY_CARDS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-brown/5 border border-brown/10 p-8">
                <Icon className="w-8 h-8 text-gold mb-5" />
                <p className="font-inter text-sm font-semibold text-brown uppercase tracking-wider mb-3">{label}</p>
                <p className="font-inter text-base text-brown-medium leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-cream">Hoe werkt het?</h2>
          </motion.div>

          <div className="space-y-5">
            {STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex gap-8 items-start bg-cream/5 border border-cream/10 p-8"
              >
                <span className="font-playfair text-4xl text-gold/35 font-light flex-shrink-0 leading-none pt-1">{item.step}</span>
                <div>
                  <h3 className="font-playfair text-xl text-cream mb-3">{item.title}</h3>
                  <p className="font-inter text-base text-cream/65 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">Veelgestelde vragen</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown">Goed om te weten</h2>
          </motion.div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-brown/5 border border-brown/10 p-6"
              >
                <h3 className="font-playfair text-lg text-brown mb-2">{item.question}</h3>
                <p className="font-inter text-base text-brown-medium leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aanvraag form */}
      <section id="aanvragen" className="relative py-20 md:py-32 px-6 bg-brown scroll-mt-8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">Offerte aanvragen</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-cream mb-6">Vertel ons over je evenement</h2>
            <p className="font-inter text-lg text-cream/70 max-w-xl mx-auto leading-relaxed">
              Laat je aanvraag achter en we nemen binnen 24 uur contact met je op voor een vrijblijvend voorstel.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-cream/5 border border-cream/10 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_location" value={formLocation} />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-inter text-sm uppercase tracking-wider text-cream/70 mb-2">Naam *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-cream/95 border border-cream/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-inter text-sm uppercase tracking-wider text-cream/70 mb-2">E-mail *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-cream/95 border border-cream/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-inter text-sm uppercase tracking-wider text-cream/70 mb-2">Telefoon *</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 bg-cream/95 border border-cream/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown" />
                </div>
                <div>
                  <label htmlFor="event-type" className="block font-inter text-sm uppercase tracking-wider text-cream/70 mb-2">Type evenement</label>
                  <input type="text" id="event-type" name="event-type" defaultValue={formEventTypeDefault} className="w-full px-4 py-3 bg-cream/95 border border-cream/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block font-inter text-sm uppercase tracking-wider text-cream/70 mb-2">Gewenste datum</label>
                  <input type="date" id="date" name="date" className="w-full px-4 py-3 bg-cream/95 border border-cream/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown" />
                </div>
                <div>
                  <label htmlFor="guests" className="block font-inter text-sm uppercase tracking-wider text-cream/70 mb-2">Aantal gasten</label>
                  <input type="number" id="guests" name="guests" placeholder="Bijv. 80" className="w-full px-4 py-3 bg-cream/95 border border-cream/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-inter text-sm uppercase tracking-wider text-cream/70 mb-2">Vertel ons over je evenement *</label>
                <textarea id="message" name="message" required rows={5} placeholder="Beschrijf je evenement, de locatie en eventuele culinaire wensen." className="w-full px-4 py-3 bg-cream/95 border border-cream/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown resize-none" />
              </div>

              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full md:w-auto px-10 py-4 font-inter text-sm uppercase tracking-wider text-brown bg-gold border-2 border-gold hover:bg-gold-dark hover:border-gold-dark transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <span>{isSubmitting ? 'Verzenden...' : 'Vraag offerte aan'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {relatedLinks && relatedLinks.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 pt-10 border-t border-cream/10 text-center">
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">Ontdek ook</span>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="font-inter text-sm text-cream border border-cream/20 px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
