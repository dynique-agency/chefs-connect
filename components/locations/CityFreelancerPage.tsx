'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, ArrowRight, ChefHat, Clock, Star } from 'lucide-react';
import { submitToFormSubmit } from '@/lib/form-submit';
import FormNotification from '@/components/ui/FormNotification';
import PremiumFreelancerPopup from '@/components/ui/PremiumFreelancerPopup';

/**
 * Shared layout for freelancer-facing city pages (/vacature-kok-{stad}).
 *
 * Supply-side mirror of CityStaffingPage: targets job-seeker intent
 * ("vacature kok {stad}") but satisfies it honestly with a recruitment page,
 * not a fake vacancy list. Structure is shared; each page passes unique local
 * copy (hero, local scene from a chef's perspective, FAQ) so pages stay
 * genuinely distinct. No em-dashes.
 */

export interface CityFreelancerContent {
  city: string;
  /** Eyebrow label, e.g. "Eindhoven en Noord-Brabant" */
  regionLabel: string;
  /** First hero line, e.g. "Werk als freelance kok" */
  heroLead?: string;
  /** Role noun used in image alt texts, e.g. "kok" or "bedieningsmedewerker" */
  roleNoun?: string;
  /** Options for the function dropdown */
  functionOptions?: string[];
  /** Hero accent line, e.g. "in Eindhoven" */
  heroAccent: string;
  heroSubtext: string;
  contextEyebrow: string;
  contextHeadingLead: string;
  contextHeadingAccent: string;
  /** 2-3 unique paragraphs about working in the city as a chef */
  contextParagraphs: string[];
  /** FAQ shown on page (must match the FAQ schema in the page's layout) */
  faq: { question: string; answer: string }[];
  formSubject: string;
  formLocation: string;
  heroImage?: string;
  contextImage?: string;
  relatedLinks?: { href: string; label: string }[];
}

const OPPORTUNITIES = [
  { title: 'Fine dining restaurants', description: 'Toplocaties waar vakmanschap centraal staat en gasten komen voor de ervaring.' },
  { title: 'Boetiekhotels', description: 'Hotels met karakter en een eigen identiteit, waar persoonlijke service het verschil maakt.' },
  { title: 'Grote evenementen', description: 'Congressen, galadiners en bedrijfsfeesten waarbij alles tot in de puntjes klopt.' },
  { title: 'Private dining', description: 'Exclusieve diners op bijzondere locaties, van een kasteel tot een privéplek.' },
  { title: "Brasseries en bistro's", description: 'Hoog tempo, een bredere doelgroep en ruimte voor persoonlijkheid achter het fornuis.' },
  { title: 'Bruiloften en feesten', description: 'Avonden die gasten bijblijven, waar de service net zo belangrijk is als het eten.' },
];

const WHY_CARDS = [
  { icon: Clock, label: 'Snelle plaatsing', desc: 'Vaak binnen 48 uur een passende opdracht in de regio.' },
  { icon: Star, label: 'Kwaliteitslocaties', desc: 'Alleen plekken waar het de moeite waard is om te werken.' },
  { icon: ChefHat, label: 'Eerlijk en transparant', desc: 'Duidelijke afspraken vooraf, geen verrassingen achteraf.' },
];

const DEFAULT_FUNCTIONS = ['Head chef', 'Plaatsvervangend keukenchef', 'Chef de partie', 'Zelfstandig werkend kok', 'Bedieningsmedewerker', 'Anders'];

const STATS = [
  { value: '350+', label: 'Professionals' },
  { value: '250+', label: 'Opdrachtgevers' },
  { value: '< 24u', label: 'Reactietijd' },
];

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/Chefsconnect/@51.5642759,4.8758051,663722m/data=!3m1!1e3!4m8!3m7!1s0x40f016df59b51bf:0xa54be2c98204141d!8m2!3d51.5642759!4d4.875805!9m1!1b1!16s%2Fg%2F11x204wxp_?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D';

const REVIEWS = [
  {
    name: 'Sharen Wintjens',
    text: 'Mijn chef-kok was plots weggelopen en ik zat met mijn handen in het haar. De dag erna stond er al een {tijdelijke freelance chef-kok} die {écht kon koken}. Dat heeft {mijn zaak gered}. Chapeau jongens!',
  },
  {
    name: 'Mitchel',
    text: 'Chefs Connect heeft voor ons snel een {vakbekwame kok} gevonden die {perfect past} binnen onze keukencultuur. Het team was {professioneel}, dacht mee en zorgde voor een {soepel traject}, echt een aanrader!',
  },
  {
    name: 'Dominic',
    text: 'Chefs connect is een {goede en professionele organisatie} met {kennis van zaken}. Je krijgt {heldere uitleg} over het bemiddelingsproces en ze gaan {efficiënt te werk}.',
  },
];

function ReviewQuote({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('{') && part.endsWith('}') ? (
          <span key={i} className="text-gold font-medium">{part.slice(1, -1)}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function CityFreelancerPage({
  city,
  regionLabel,
  heroLead = 'Werk als freelance kok',
  roleNoun = 'kok',
  functionOptions = DEFAULT_FUNCTIONS,
  heroAccent,
  heroSubtext,
  contextEyebrow,
  contextHeadingLead,
  contextHeadingAccent,
  contextParagraphs,
  faq,
  formSubject,
  formLocation,
  heroImage = '/horecaspecialist-hero.png',
  contextImage = '/chef-action.png',
  relatedLinks,
}: CityFreelancerContent) {
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
    <main className="min-h-screen bg-cream">
      <PremiumFreelancerPopup showAfterMs={4000} />
      {notification && (
        <FormNotification
          type={notification.type}
          title={notification.title}
          messages={notification.messages}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-32">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={`Freelance ${roleNoun} aan het werk in een restaurant in ${city}`} fill className="object-cover brightness-[0.45]" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-brown/50 via-brown/30 to-brown/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold">{regionLabel}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-8"
          >
            {heroLead}{' '}
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
            href="#aanmelden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="inline-flex items-center gap-3 px-10 py-5 font-inter text-sm uppercase tracking-wider text-brown bg-gold hover:bg-gold-dark transition-all duration-500"
          >
            <span>Meld je aan</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* Trust stats - permanently on-page, not hidden inside the popup */}
      <section className="relative py-9 px-6 bg-cream border-b border-brown/10">
        <div className="max-w-3xl mx-auto grid grid-cols-3 divide-x divide-brown/10">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center px-4">
              <p className="font-playfair text-2xl sm:text-3xl text-gold-accessible font-light leading-none mb-1.5">{value}</p>
              <p className="font-inter text-[10px] sm:text-xs uppercase tracking-[0.13em] text-brown-medium/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews - real, verifiable trust right after the hero */}
      <section className="relative py-20 md:py-28 px-6 bg-brown">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <div className="flex items-center gap-2 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
              <span className="font-inter text-xs text-cream/60 ml-1">5.0 op Google</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-cream mb-4">
              Vertrouwd door opdrachtgevers
            </h2>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-inter text-sm text-gold hover:underline"
            >
              <CheckCircle2 className="w-4 h-4" />
              Geverifieerd op Google
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-cream/5 border border-cream/10 p-6 md:p-7 flex flex-col h-full"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-inter text-sm text-cream/70 leading-relaxed mb-5 flex-1">
                  &ldquo;<ReviewQuote text={review.text} />&rdquo;
                </p>
                <p className="font-inter text-sm text-cream font-semibold pt-4 border-t border-cream/10">
                  {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold-accessible block mb-6">{contextEyebrow}</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown leading-tight mb-8">
                {contextHeadingLead}
                <span className="text-gold italic"> {contextHeadingAccent}</span>
              </h2>
              <div className="space-y-5 font-inter text-base md:text-lg text-brown-medium leading-relaxed">
                {contextParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[480px]">
              <Image src={contextImage} alt={`Freelance ${roleNoun} aan het werk in een restaurant in ${city}`} fill className="object-cover brightness-[0.85]" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/20 to-transparent" />
              <div className="absolute inset-0 border-2 border-gold/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">Beschikbare opdrachten</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-cream mb-6">Waar kom je terecht?</h2>
            <p className="font-inter text-lg text-cream/70 max-w-2xl mx-auto">
              Het aanbod in de regio {city} is breed, van een rustige brasserie tot een gala voor honderden gasten.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OPPORTUNITIES.map((item, index) => (
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold-accessible block mb-6">Waarom Chefs Connect</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown mb-8 leading-tight">
                Wij komen zelf
                <span className="text-gold italic"> uit de horeca</span>
              </h2>
              <div className="space-y-5 font-inter text-base md:text-lg text-brown-medium leading-relaxed">
                <p>
                  Dat maakt het gesprek anders. We weten wat het betekent om in een volle serviceronde je kop erbij te houden, en we begrijpen waarom je kiest voor de vrijheid van het freelance leven.
                </p>
                <p>
                  Geen vacatureteksten die niets zeggen, geen procedures die weken duren. Jij vertelt ons wie je bent en wat je zoekt. Dan gaan wij voor je aan de slag.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-4 lg:pt-20">
              {WHY_CARDS.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-5 bg-brown/5 border border-brown/10 p-6">
                  <Icon className="w-7 h-7 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-inter text-sm font-semibold text-brown uppercase tracking-wider mb-1">{label}</p>
                    <p className="font-inter text-sm text-brown-medium leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
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
            {[
              { step: '01', title: 'Je meldt je aan', desc: 'Vul het formulier hieronder in. Vertel ons wie je bent, wat je doet en wat voor opdrachten je zoekt.' },
              { step: '02', title: 'Wij leren je kennen', desc: 'We nemen contact met je op voor een kort gesprek, om te begrijpen hoe we je het beste kunnen helpen.' },
              { step: '03', title: `Aan de slag in ${city}`, desc: `Zodra er een passende opdracht is in ${city} of de regio, ben jij de eerste die we bellen.` },
            ].map((item, index) => (
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
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold-accessible block mb-6">Veelgestelde vragen</span>
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

      {/* Form */}
      <section id="aanmelden" className="relative py-20 md:py-32 px-6 bg-brown scroll-mt-8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">Aanmelden</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-cream mb-6">Zet de eerste stap</h2>
            <p className="font-inter text-lg text-cream/70 max-w-xl mx-auto leading-relaxed">
              Laat je gegevens achter en we nemen binnen 24 uur contact met je op voor een gesprek.
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
                  <label htmlFor="phone" className="block font-inter text-sm uppercase tracking-wider text-cream/70 mb-2">Telefoon</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 bg-cream/95 border border-cream/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown" />
                </div>
                <div>
                  <label htmlFor="function" className="block font-inter text-sm uppercase tracking-wider text-cream/70 mb-2">Functie *</label>
                  <select id="function" name="function" required className="w-full px-4 py-3 bg-cream/95 border border-cream/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown">
                    <option value="">Selecteer je functie</option>
                    {functionOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-inter text-sm uppercase tracking-wider text-cream/70 mb-2">Vertel iets over jezelf</label>
                <textarea id="message" name="message" rows={5} placeholder="Jaren ervaring, type locaties waar je graag werkt, wanneer je beschikbaar bent." className="w-full px-4 py-3 bg-cream/95 border border-cream/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown resize-none" />
              </div>

              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full md:w-auto px-10 py-4 font-inter text-sm uppercase tracking-wider text-brown bg-gold border-2 border-gold hover:bg-gold-dark hover:border-gold-dark transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <span>{isSubmitting ? 'Verzenden...' : 'Aanmelden als freelancer'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {relatedLinks && relatedLinks.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 pt-10 border-t border-cream/10 text-center">
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">Ook actief in</span>
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
