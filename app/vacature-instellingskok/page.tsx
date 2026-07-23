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

const OPPORTUNITIES = [
  { title: 'Zorginstellingen', description: 'Ziekenhuizen, verpleeghuizes en revalidatiecentra, waar dieetwensen en consistentie net zo belangrijk zijn als smaak.' },
  { title: "Bedrijfsrestaurant's", description: 'Grootschalige lunch- en dinerservice voor kantoren en bedrijventerreinen, met een vast, voorspelbaar ritme.' },
  { title: 'Scholen & kinderopvang', description: 'Voeding voor grotere groepen, afgestemd op allergieën en leeftijd.' },
  { title: 'Tijdelijke vervanging', description: 'Een vaste instellingskok die met verlof of ziek is: wij zorgen dat de keuken gewoon doordraait.' },
  { title: 'Cateringkeukens', description: 'Grootkeukens die voor meerdere locaties tegelijk koken, waar planning en logistiek centraal staan.' },
  { title: 'Seizoensdrukte', description: 'Extra capaciteit tijdens feestdagen of piekperiodes, zonder een vaste kracht aan te nemen.' },
];

const WHY_CARDS = [
  { icon: Clock, label: 'Snelle plaatsing', desc: 'Vaak binnen 48 uur een passende opdracht in jouw regio.' },
  { icon: Star, label: 'Passende locaties', desc: 'Instellingen die weten wat ze aan een ervaren instellingskok hebben.' },
  { icon: ChefHat, label: 'Eerlijk en transparant', desc: 'Duidelijke afspraken vooraf, geen verrassingen achteraf.' },
];

const FUNCTION_OPTIONS = ['Instellingskok', 'Kok grootkeuken', 'Kok zorginstelling', 'Kok bedrijfsrestaurant', 'Anders'];

const FAQ = [
  {
    question: 'Wat is het verschil tussen een instellingskok en een kok in een restaurant?',
    answer: 'Een instellingskok kookt voor grotere, vaak wisselende groepen, met meer aandacht voor planning, portionering en dieetwensen dan voor à la carte bereidingen. Het tempo en ritme liggen anders, maar het vakmanschap is minstens zo belangrijk.',
  },
  {
    question: 'Moet ik ervaring hebben met dieetvoeding?',
    answer: 'Het is een pré, maar geen harde eis. We geven altijd vooraf aan wat een opdracht precies vraagt, zodat je weet waar je aan begint.',
  },
  {
    question: 'Waar plaatsen jullie instellingskoks?',
    answer: 'Door heel Nederland en België, met op dit moment relatief veel vraag vanuit Limburg. Vertel ons je regio en we kijken wat er beschikbaar is.',
  },
  {
    question: "Moet ik zzp'er zijn om via Chefs Connect te werken?",
    answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen.",
  },
  {
    question: 'Hoe snel kan ik aan de slag?',
    answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.',
  },
];

export default function VacatureInstellingskokPage() {
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
      const result = await submitToFormSubmit(formData, { subject: 'Chefs Connect: Aanmelding Instellingskok' });

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
          <Image src="/horecaspecialist-hero.png" alt="Instellingskok aan het werk in een grootkeuken" fill className="object-cover brightness-[0.45]" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-brown/50 via-brown/30 to-brown/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold">Voor koks met ervaring in grootkeukens</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-8"
          >
            Werk als kok bij{' '}
            <br />
            <span className="text-gold italic">zorginstellingen & bedrijven</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-inter text-lg md:text-xl text-cream/85 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Op zoek naar werk als instellingskok? Wij verbinden freelance koks met zorginstellingen, bedrijfsrestaurants en scholen door heel Nederland en België. Schrijf je één keer in, het werk komt naar jou.
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

      {/* Local context */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold-accessible block mb-6">Werken als instellingskok</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown leading-tight mb-8">
                Ander ritme,
                <span className="text-gold italic"> zelfde vakmanschap</span>
              </h2>
              <div className="space-y-5 font-inter text-base md:text-lg text-brown-medium leading-relaxed">
                <p>
                  Koken voor een zorginstelling, bedrijfsrestaurant of school vraagt iets anders dan een à la carte kaart: grotere aantallen, vaste tijden, en aandacht voor dieetwensen en allergieën. Het tempo ligt voorspelbaarder, maar het vak blijft hetzelfde.
                </p>
                <p>
                  Wij zien in onze aanvragen de laatste tijd relatief veel vraag vanuit Limburg, maar plaatsen instellingskoks door heel Nederland en België. Vertel ons waar je wilt werken, en wij kijken wat er past.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[480px]">
              <Image src="/chef-action.png" alt="Kok aan het werk in een bedrijfsrestaurant" fill className="object-cover brightness-[0.85]" sizes="(max-width: 1024px) 100vw, 50vw" />
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
              Van een verpleeghuis tot een bedrijfskantine: het aanbod is breed en altijd grootschaliger dan een klassiek restaurant.
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
                <span className="text-gold italic"> uit de keuken</span>
              </h2>
              <div className="space-y-5 font-inter text-base md:text-lg text-brown-medium leading-relaxed">
                <p>
                  Dat maakt het gesprek anders. We weten dat een dienst in een grootkeuken andere eisen stelt dan een avond in een restaurant, en we begrijpen waarom je kiest voor de vrijheid van het freelance leven.
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
              { step: '01', title: 'Je meldt je aan', desc: 'Vul het formulier hieronder in. Vertel ons wie je bent, wat je doet en in welke regio je wilt werken.' },
              { step: '02', title: 'Wij leren je kennen', desc: 'We nemen contact met je op voor een kort gesprek, om te begrijpen hoe we je het beste kunnen helpen.' },
              { step: '03', title: 'Aan de slag bij een passende instelling', desc: 'Zodra er een opdracht is die bij jouw ervaring en regio past, ben jij de eerste die we bellen.' },
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
            {FAQ.map((item, index) => (
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
              <input type="hidden" name="_location" value="Vacature instellingskok" />

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
                    {FUNCTION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-inter text-sm uppercase tracking-wider text-cream/70 mb-2">Vertel iets over jezelf</label>
                <textarea id="message" name="message" rows={5} placeholder="Jaren ervaring, type instellingen waar je graag werkt, jouw regio, wanneer je beschikbaar bent." className="w-full px-4 py-3 bg-cream/95 border border-cream/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown resize-none" />
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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 pt-10 border-t border-cream/10 text-center">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">Ook interessant</span>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/vacature-kok-maastricht" className="font-inter text-sm text-cream border border-cream/20 px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-300">
                Kok in Maastricht
              </Link>
              <Link href="/kennisbank/freelance-kok-worden" className="font-inter text-sm text-cream border border-cream/20 px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-300">
                Freelance kok worden
              </Link>
              <Link href="/horecaspecialist" className="font-inter text-sm text-cream border border-cream/20 px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-300">
                Word horecaspecialist
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
