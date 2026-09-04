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

export default function MaastrichtPage() {
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
        subject: 'Chefs Connect: Aanmelding Freelancer Maastricht',
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
          <Image
            src="/horecaspecialist-hero.png"
            alt="Freelance horeca professional aan het werk in Maastricht"
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
            Freelance horeca opdrachten
            <br />
            <span className="text-gold italic">in Maastricht</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-inter text-lg md:text-xl text-cream/85 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Van fine dining in de binnenstad tot grote evenementen in de regio. Wij verbinden freelance chefs en bedieningsprofessionals met de mooiste locaties in Maastricht.
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

      {/* Maastricht context */}
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
                Werken in Maastricht
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown leading-tight mb-8">
                Een stad waar horeca
                <span className="text-gold italic"> serieus genomen wordt</span>
              </h2>
              <div className="space-y-5 font-inter text-base md:text-lg text-brown-medium leading-relaxed">
                <p>
                  Maastricht heeft een keuken- en eetcultuur die meer weg heeft van het zuiden dan van de Randstad. Bourgondisch, hartelijk, en met een oprechte aandacht voor wat er op het bord komt. Dat maakt de stad niet alleen aantrekkelijk voor gasten, maar ook voor horecaprofessionals die willen werken op plekken waar eten en drinken écht iets betekenen.
                </p>
                <p>
                  Als freelancer werk je hier op een niveau dat je bijhoudt. Restaurants stellen hoge eisen. Hotels willen mensen die begrijpen wat gastvrijheid inhoudt. En evenementenorganisatoren kiezen Maastricht juist vanwege de culinaire reputatie van de stad. Dat voel je.
                </p>
                <p>
                  Wij plaatsen ook in Valkenburg, Sittard, Heerlen en de grensregio richting Hasselt en Luik.
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
                src="/chef-action.png"
                alt="Chef aan het werk in een restaurant in Maastricht"
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

      {/* Opdrachten */}
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
              Beschikbare opdrachten
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-cream mb-6">
              Waar kom je terecht?
            </h2>
            <p className="font-inter text-lg text-cream/70 max-w-2xl mx-auto">
              Het aanbod in de regio Maastricht is breed. Van een rustige zondagse brasserie tot een gala voor 500 gasten.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Fine dining restaurants',
                description: 'Toplocaties in de Maastrichtse binnenstad waar vakmanschap centraal staat en gasten komen voor de ervaring.',
              },
              {
                title: 'Boetiekhotels',
                description: 'Hotels met karakter en een eigen identiteit, waar persoonlijke service het onderschil maakt.',
              },
              {
                title: 'Grote evenementen',
                description: 'Congressen, galadineers en bedrijfsfeesten waarbij planning en uitvoering tot in de puntjes moeten kloppen.',
              },
              {
                title: 'Private dining',
                description: 'Exclusieve diners op bijzondere locaties. Thuis bij de gast, in een kasteel of op een andere privéplek.',
              },
              {
                title: "Brasseries en bistro's",
                description: 'Een bredere doelgroep, hoog tempo en genoeg ruimte voor persoonlijkheid achter het fornuis of aan tafel.',
              },
              {
                title: 'Bruiloften en feesten',
                description: 'Avonden die mensen bijblijven. Waarbij de service net zo belangrijk is als het eten.',
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

      {/* Why ChefsConnect */}
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
                Wij komen zelf
                <span className="text-gold italic"> uit de horeca</span>
              </h2>
              <div className="space-y-5 font-inter text-base md:text-lg text-brown-medium leading-relaxed">
                <p>
                  Dat maakt het gesprek anders. We weten wat het betekent om in een volle serviceronde je kop erbij te houden. We begrijpen waarom je kiest voor de vrijheid van het freelance leven. En we weten welke locaties bij welk type professional passen, want we hebben er zelf tientallen jaren ingestaan.
                </p>
                <p>
                  Geen vacatureteksten die niets zeggen, geen procedures die weken duren. Jij vertelt ons wie je bent en wat je zoekt. Dan gaan wij aan de slag.
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
                { icon: Clock, label: 'Snelle plaatsing', desc: 'Vaak binnen 48 uur een passende opdracht in de regio.' },
                { icon: Star, label: 'Kwaliteitslocaties', desc: 'Alleen plekken waar het de moeite waard is om te werken.' },
                { icon: ChefHat, label: 'Eerlijk en transparant', desc: 'Duidelijke afspraken vooraf, geen verrassingen achteraf.' },
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
                title: 'Je meldt je aan',
                desc: 'Vul het formulier hieronder in. Vertel ons wie je bent, wat je doet en wat voor opdrachten je zoekt. Dat hoeft geen roman te zijn.',
              },
              {
                step: '02',
                title: 'Wij leren je kennen',
                desc: 'We nemen contact met je op voor een kort gesprek. Niet om je te testen, maar om te begrijpen hoe we je het beste kunnen helpen.',
              },
              {
                step: '03',
                title: 'Aan de slag in Maastricht',
                desc: 'Zodra er een passende opdracht is in de regio, ben jij de eerste die we bellen.',
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

      {/* Form */}
      <section id="aanmelden" className="relative py-20 md:py-32 px-6 bg-cream scroll-mt-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">
              Aanmelden
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown mb-6">
              Zet de eerste stap
            </h2>
            <p className="font-inter text-lg text-brown-medium max-w-xl mx-auto leading-relaxed">
              Laat je gegevens achter en we nemen binnen 24 uur contact met je op voor een gesprek.
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
              <input type="hidden" name="_location" value="Maastricht" />

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
                  <label htmlFor="function" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Functie *
                  </label>
                  <select
                    id="function"
                    name="function"
                    required
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  >
                    <option value="">Selecteer je functie</option>
                    <option value="Head chef">Head chef</option>
                    <option value="Plaatsvervangend keukenchef">Plaatsvervangend keukenchef</option>
                    <option value="Zelfstandig werkend kok">Zelfstandig werkend kok</option>
                    <option value="Bedieningsmedewerker">Bedieningsmedewerker</option>
                    <option value="Leidinggevende bediening">Leidinggevende bediening</option>
                    <option value="Anders">Anders</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                  Vertel iets over jezelf
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Jaren ervaring, type locaties waar je graag werkt, wanneer je beschikbaar bent..."
                  className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown resize-none"
                />
              </div>

              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full md:w-auto px-10 py-4 font-inter text-sm uppercase tracking-wider text-cream bg-brown border-2 border-brown hover:bg-gold hover:border-gold transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <span>{isSubmitting ? 'Verzenden...' : 'Aanmelden als freelancer'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 pt-10 border-t border-brown/10 text-center">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">Specifiek op zoek naar</span>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/vacature-kok-maastricht" className="font-inter text-sm text-brown border border-brown/20 px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-300">
                Kok in Maastricht
              </Link>
              <Link href="/vacature-bediening-maastricht" className="font-inter text-sm text-brown border border-brown/20 px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-300">
                Bediening in Maastricht
              </Link>
              <Link href="/personeel-maastricht" className="font-inter text-sm text-brown border border-brown/20 px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-300">
                Personeel inhuren in Maastricht
              </Link>
              <Link href="/limburg" className="font-inter text-sm text-brown border border-brown/20 px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-300">
                Heel Limburg
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
