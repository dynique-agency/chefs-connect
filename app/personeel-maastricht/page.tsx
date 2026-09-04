'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, ArrowRight, Clock, Award, Users } from 'lucide-react';
import { submitToFormSubmit } from '@/lib/form-submit';
import FormNotification from '@/components/ui/FormNotification';
import PremiumStaffingPopup from '@/components/ui/PremiumStaffingPopup';
import FaqSection from '@/components/ui/FaqSection';

const FAQ_ITEMS = [
  {
    question: 'Hoe snel kan Chefs Connect een kok leveren in Maastricht?',
    answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Maastricht en de regio Zuid-Limburg.',
  },
  {
    question: 'Welke koks kunnen jullie leveren in de regio Maastricht?',
    answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in en rond Maastricht.',
  },
  {
    question: 'Is Chefs Connect ook actief buiten Maastricht in Limburg?',
    answer: 'Ja, wij plaatsen ook in Valkenburg, Sittard, Heerlen en de omliggende grensregio richting Hasselt en Luik.',
  },
  {
    question: 'Kok gezocht in Maastricht? Is dat hetzelfde als bij Chefs Connect?',
    answer: 'Niet helemaal: "kok gezocht" of "zzp kok gezocht" is meestal een vacaturetekst voor een vaste baan. Bij Chefs Connect huur je in Maastricht juist snel een zzp-kok in voor een tijdelijke opdracht, zonder sollicitatieprocedure. Heb je in Maastricht snel een kok nodig, vandaag of over twee weken? Dan zit je bij ons goed.',
  },
];

export default function PersoneelMaastrichtPage() {
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
      const result = await submitToFormSubmit(formData, {
        subject: 'Chefs Connect: Aanvraag Keukenpersoneel Maastricht',
      });

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
      <PremiumStaffingPopup showAfterMs={4000} />
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
          <Image
            src="/zoek-personeel-hero.png"
            alt="Keukenbrigade aan het werk in een restaurant in Maastricht"
            fill
            className="object-cover brightness-[0.45]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown/50 via-brown/30 to-brown/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold">
              Maastricht en Zuid-Limburg
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-8"
          >
            Freelance kok nodig
            <br />
            <span className="text-gold italic">in Maastricht?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-inter text-lg md:text-xl text-cream/85 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Wij verbinden je met ervaren freelance koks op alle niveaus. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals je dat wil.
          </motion.p>

          <motion.a
            href="#aanvragen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="inline-flex items-center gap-3 px-10 py-5 font-inter text-sm uppercase tracking-wider text-brown bg-gold hover:bg-gold-dark transition-all duration-500"
          >
            <span>Kok aanvragen</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* Context section */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">
                Herkenbaar?
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown leading-tight mb-8">
                Je keuken loopt op volle toeren
                <span className="text-gold italic"> totdat dat ene bericht binnenkomt</span>
              </h2>
              <div className="space-y-5 font-inter text-base md:text-lg text-brown-medium leading-relaxed">
                <p>
                  Een zieke kok. Een plotselinge afmelding. Een druk weekend dat groter uitpakt dan verwacht. Het zijn situaties die elke horecaondernemer kent. Niet omdat je slecht plant, maar omdat de horeca nu eenmaal zo werkt.
                </p>
                <p>
                  Wat je op dat moment nodig hebt is niet een lang gesprek, maar gewoon iemand die je keuken begrijpt en snel kan schakelen. Dat is precies wat wij doen.
                </p>
                <p>
                  Wij zijn actief in Maastricht en de bredere regio: Valkenburg, Sittard, Heerlen en de omliggende grensstreek richting Hasselt.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[480px]"
            >
              <Image
                src="/freelancer-bediening.webp"
                alt="Freelance bedieningsmedewerker aan het werk in Maastricht"
                fill
                className="object-cover brightness-[0.85]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/20 to-transparent" />
              <div className="absolute inset-0 border-2 border-gold/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">
              Waarmee wij verbinden
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-cream mb-6">
              Koks op elk niveau
            </h2>
            <p className="font-inter text-lg text-cream/70 max-w-2xl mx-auto">
              Of je nu iemand zoekt die morgen de brigade leidt of een extra paar handen in een drukke weekendservice, wij hebben het netwerk.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Head chef',
                description: 'Iemand die de keuken overneemt en direct zijn eigen stempel zet. Voor als het écht moet kloppen.',
              },
              {
                title: 'Plaatsvervangend keukenchef',
                description: 'De rechterhand die structuur houdt in je brigade. Stabiel, ervaren en gewend aan druk.',
              },
              {
                title: 'Zelfstandig werkend kok',
                description: 'Kan zelfstandig een sectie draaien zonder dat je hem of haar elk uur hoeft te begeleiden.',
              },
              {
                title: 'Altijd DBA-proof',
                description: 'Elke plaatsing is juridisch getoetst en voldoet aan de regels rond zelfstandig ondernemerschap. Geen risico voor jou.',
              },
              {
                title: 'Complete keukenbrigade',
                description: 'Voor grotere evenementen of drukke periodes waarbij je meerdere mensen tegelijk nodig hebt.',
              },
              {
                title: 'Maatwerk op aanvraag',
                description: 'Heb je iets specifieks nodig dat hier niet tussen staat? Neem contact op. We denken graag mee.',
              },
            ].map((item, index) => (
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
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">
                Waarom Chefs Connect
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown mb-8 leading-tight">
                Wij weten wat er
                <span className="text-gold italic"> in een keuken nodig is</span>
              </h2>
              <div className="space-y-5 font-inter text-base md:text-lg text-brown-medium leading-relaxed">
                <p>
                  Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als de druk oploopt.
                </p>
                <p>
                  Wij sturen je geen mensen die misschien wel passen. Wij sturen je mensen waarvan wij zeker weten dat ze het aankunnen. De brasserie in de binnenstad vraagt iets anders dan een trouwlocatie in de Limburgse heuvels. Dat verschil kennen wij.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 lg:pt-20"
            >
              {[
                {
                  icon: Clock,
                  label: 'Snel geregeld',
                  desc: 'In de meeste gevallen een voorstel binnen 24 tot 48 uur na jouw aanvraag.',
                },
                {
                  icon: Award,
                  label: 'Goed gescreend',
                  desc: 'Elke professional in ons netwerk is persoonlijk gesproken. Geen verrassingen ter plekke.',
                },
                {
                  icon: Users,
                  label: 'Eerlijk geregeld',
                  desc: 'Duidelijke afspraken over tarieven en inzet. Niets verborgen in de kleine lettertjes.',
                },
              ].map(({ icon: Icon, label, desc }) => (
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-cream">
              Hoe werkt het?
            </h2>
          </motion.div>

          <div className="space-y-5">
            {[
              {
                step: '01',
                title: 'Jij stuurt je aanvraag',
                desc: 'Vertel ons welke functie je zoekt, wanneer je iemand nodig hebt en wat voor concept je draait. Hoe meer context, hoe beter wij kunnen matchen.',
              },
              {
                step: '02',
                title: 'Wij gaan aan de slag',
                desc: 'We zoeken in ons netwerk naar de professional die het beste bij jouw keuken past. Niet wie beschikbaar is, maar wie er echt bij past.',
              },
              {
                step: '03',
                title: 'Klaar voor de service',
                desc: 'De freelancer weet wat er verwacht wordt. Jij weet wie er komt. Alle administratie regelen wij.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex gap-8 items-start bg-cream/5 border border-cream/10 p-8"
              >
                <span className="font-playfair text-4xl text-gold/35 font-light flex-shrink-0 leading-none pt-1">
                  {item.step}
                </span>
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
      <FaqSection items={FAQ_ITEMS} />

      {/* Form */}
      <section id="aanvragen" className="relative py-20 md:py-32 px-6 bg-cream scroll-mt-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">
              Kok aanvragen
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown mb-6">
              Vertel ons wat je nodig hebt
            </h2>
            <p className="font-inter text-lg text-brown-medium max-w-xl mx-auto leading-relaxed">
              Laat je aanvraag achter en we nemen binnen 24 uur contact met je op.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brown/5 border border-brown/10 p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_location" value="Personeel Maastricht" />

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
                  Welke functie zoek je? *
                </label>
                <select
                  id="function"
                  name="function"
                  required
                  className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                >
                  <option value="">Selecteer een functie</option>
                  <option value="Head chef">Head chef</option>
                  <option value="Plaatsvervangend keukenchef">Plaatsvervangend keukenchef</option>
                  <option value="Zelfstandig werkend kok">Zelfstandig werkend kok</option>                  <option value="Complete keukenbrigade">Complete keukenbrigade</option>
                  <option value="Anders">Anders</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                  Vertel ons meer *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Wanneer heb je iemand nodig? Hoe lang? Wat voor concept draai je?"
                  className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown resize-none"
                />
              </div>

              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full md:w-auto px-10 py-4 font-inter text-sm uppercase tracking-wider text-cream bg-brown border-2 border-brown hover:bg-gold hover:border-gold transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <span>{isSubmitting ? 'Verzenden...' : 'Aanvraag versturen'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
