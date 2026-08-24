'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChefHat, Users, UtensilsCrossed } from 'lucide-react';
import FaqSection from '@/components/ui/FaqSection';

const PERSONEEL_CITIES = [
  { name: 'Maastricht', region: 'Zuid-Limburg', href: '/personeel-maastricht' },
  { name: 'Sittard-Geleen', region: 'Zuid-Limburg', href: '/personeel-sittard-geleen' },
  { name: 'Heerlen', region: 'Zuid-Limburg', href: '/personeel-heerlen' },
  { name: 'Kerkrade', region: 'Zuid-Limburg', href: '/personeel-kerkrade' },
  { name: 'Roermond', region: 'Midden-Limburg', href: '/personeel-roermond' },
  { name: 'Weert', region: 'Midden-Limburg', href: '/personeel-weert' },
  { name: 'Venlo', region: 'Noord-Limburg', href: '/personeel-venlo' },
];

const FREELANCE_CITIES = [
  { name: 'Maastricht', kok: '/vacature-kok-maastricht', bediening: '/vacature-bediening-maastricht' },
  { name: 'Sittard-Geleen', kok: '/vacature-kok-sittard-geleen', bediening: '/vacature-bediening-sittard-geleen' },
  { name: 'Heerlen', kok: '/vacature-kok-heerlen', bediening: '/vacature-bediening-heerlen' },
  { name: 'Kerkrade', kok: '/vacature-kok-kerkrade', bediening: '/vacature-bediening-kerkrade' },
  { name: 'Roermond', kok: '/vacature-kok-roermond', bediening: '/vacature-bediening-roermond' },
  { name: 'Weert', kok: '/vacature-kok-weert', bediening: '/vacature-bediening-weert' },
  { name: 'Venlo', kok: '/vacature-kok-venlo', bediening: '/vacature-bediening-venlo' },
];

const FAQ_ITEMS = [
  {
    question: 'Is Chefs Connect actief in heel Limburg?',
    answer: 'Ja, wij bemiddelen freelance horecapersoneel door heel Limburg, van Maastricht en Sittard-Geleen tot Heerlen, Kerkrade, Roermond, Weert en Venlo.',
  },
  {
    question: 'Bemiddelen jullie ook instellingskoks in Limburg?',
    answer: 'Ja, we plaatsen regelmatig freelance koks bij zorginstellingen, bedrijfsrestaurants en scholen in Limburg. Op onze pagina over instellingskok-opdrachten lees je hier meer over.',
  },
  {
    question: 'Kan ik ook een kok aan huis boeken in Limburg?',
    answer: 'Ja, in Maastricht en de bredere regio Zuid-Limburg, waaronder Sittard-Geleen en Heerlen, verzorgen we privédiners aan huis met een eigen chef.',
  },
  {
    question: 'Werken jullie ook in de grensregio richting België en Duitsland?',
    answer: 'Ja, we plaatsen regelmatig in de grensregio richting Hasselt, Luik en Aken.',
  },
  {
    question: 'Hoe snel kan ik personeel of een opdracht krijgen in Limburg?',
    answer: 'In de meeste gevallen binnen 24 tot 48 uur een passend voorstel, zowel voor werkgevers als voor freelancers.',
  },
];

export default function LimburgPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center px-6 py-28">
        <div className="absolute inset-0">
          <Image
            src="/zoek-personeel-hero.png"
            alt="Horecaprofessional aan het werk in Limburg"
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
              Limburg
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-8"
          >
            Horecapersoneel en
            <br />
            <span className="text-gold italic">freelance koks in Limburg</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-inter text-lg md:text-xl text-cream/85 max-w-2xl mx-auto leading-relaxed"
          >
            Van Maastricht en Sittard-Geleen tot Heerlen, Kerkrade, Roermond, Weert en Venlo. Chefs Connect bemiddelt freelance koks en bediening door heel Limburg, voor werkgevers, freelancers en particulieren.
          </motion.p>
        </div>
      </section>

      {/* Ik zoek personeel */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Users className="w-8 h-8 text-gold mx-auto mb-6" />
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">
              Voor werkgevers
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-cream mb-6">
              Ik zoek personeel
            </h2>
            <p className="font-inter text-lg text-cream/70 max-w-2xl mx-auto">
              Kies uw stad voor een freelance kok of keukenbrigade, meestal binnen 24 tot 48 uur voorgesteld.
            </p>
          </motion.div>

          <div>
            {PERSONEEL_CITIES.map((city, i) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Link href={city.href} className="group block border-t border-cream/10 hover:border-gold/50 transition-colors duration-500">
                  <div className="py-6 md:py-7 flex items-center justify-between gap-8">
                    <div className="min-w-0">
                      <h3 className="font-playfair text-2xl md:text-3xl font-light text-cream group-hover:text-gold transition-colors duration-500">
                        {city.name}
                      </h3>
                      <p className="font-inter text-sm text-cream/40 mt-1 group-hover:text-cream/60 transition-colors duration-300">
                        {city.region}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-cream/30 group-hover:text-gold transition-all duration-300 flex-shrink-0">
                      <span className="font-inter text-sm uppercase tracking-[0.15em] hidden sm:block">Kok inhuren</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-cream/10" />
          </div>
        </div>
      </section>

      {/* Ik ben freelancer */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <ChefHat className="w-8 h-8 text-gold mx-auto mb-6" />
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">
              Voor freelancers
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-brown mb-6">
              Ik zoek werk als kok of bediening
            </h2>
            <p className="font-inter text-lg text-brown-medium max-w-2xl mx-auto">
              Meld je één keer aan en wij benaderen je zodra er een passende opdracht in jouw regio is.
            </p>
          </motion.div>

          <div>
            {FREELANCE_CITIES.map((city, i) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-t border-brown/10 py-6 md:py-7 flex flex-wrap items-center justify-between gap-4"
              >
                <h3 className="font-playfair text-2xl md:text-3xl font-light text-brown">{city.name}</h3>
                <div className="flex flex-wrap gap-3">
                  <Link href={city.kok} className="font-inter text-sm text-brown border border-brown/20 px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-300">
                    Kok
                  </Link>
                  <Link href={city.bediening} className="font-inter text-sm text-brown border border-brown/20 px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-300">
                    Bediening
                  </Link>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-brown/10" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 text-center"
          >
            <Link href="/vacature-instellingskok" className="font-inter text-sm text-gold border-b border-gold/40 hover:border-gold pb-0.5 transition-colors duration-300">
              Op zoek naar een opdracht als instellingskok? Bekijk instellingskok-opdrachten
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Kok aan huis */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <UtensilsCrossed className="w-8 h-8 text-gold mx-auto mb-6" />
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">
              Voor particulieren
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-cream mb-6">
              Kok aan huis in Limburg
            </h2>
            <p className="font-inter text-lg text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Een privéchef die bij u thuis kookt en serveert, in Maastricht en de bredere regio Zuid-Limburg, waaronder Sittard-Geleen en Heerlen. Voor een romantisch diner, verjaardag of familiefeest.
            </p>
            <Link
              href="/kok-aan-huis-maastricht"
              className="group inline-flex items-center gap-3 px-10 py-5 font-inter text-sm uppercase tracking-wider text-brown bg-gold hover:bg-gold-dark transition-all duration-500"
            >
              <span>Bekijk kok aan huis in Zuid-Limburg</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <FaqSection title="Veelgestelde vragen over Limburg" items={FAQ_ITEMS} />
    </main>
  );
}
