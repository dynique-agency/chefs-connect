'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

/**
 * Kennisbank hub. Add new articles to this list as they go live; only
 * published entries are rendered, so it never links to a non-existent route.
 */
const articles = [
  {
    slug: 'freelance-kok-worden',
    category: 'Voor freelancers',
    title: 'Freelance kok worden: zo begin je',
    excerpt:
      'Van KvK-inschrijving tot je eerste opdracht. Een praktisch stappenplan voor koks die de overstap naar zelfstandig ondernemen willen maken, geschreven door een chef die het zelf deed.',
    readingTime: '9 min',
    published: true,
  },
  {
    slug: 'freelancen-of-vast-in-de-horeca',
    category: 'Voor freelancers',
    title: 'Freelancen of vast in de horeca: wat past bij jou?',
    excerpt:
      'Vrijheid en een hoger uurtarief, of de zekerheid van een vast contract? Een eerlijke vergelijking om te bepalen welke route bij jouw situatie past.',
    readingTime: '7 min',
    published: false,
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chefs-connect.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: 'https://chefs-connect.nl/kennisbank' },
  ],
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Kennisbank Chefs Connect',
  description: 'Gidsen en praktische kennis voor freelance horecaprofessionals.',
  url: 'https://chefs-connect.nl/kennisbank',
  publisher: { '@type': 'Organization', name: 'Chefs Connect' },
};

export default function KennisbankPage() {
  const live = articles.filter((a) => a.published);

  return (
    <main className="min-h-screen bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      {/* Hero */}
      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">Kennisbank</span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown leading-[1.1] mb-8">
              Gidsen voor de horecaprofessional
            </h1>
            <p className="font-inter text-lg md:text-xl text-brown-medium leading-relaxed max-w-2xl mx-auto">
              Praktische kennis over freelancen, tarieven en werken in de horeca, opgeschreven door mensen die zelf
              jarenlang in de keuken stonden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {live.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/kennisbank/${article.slug}`}
                  className="group flex flex-col h-full bg-cream border border-brown/10 p-8 hover:border-gold/40 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-inter text-xs uppercase tracking-[0.2em] text-gold">{article.category}</span>
                    <ArrowUpRight className="w-5 h-5 text-brown/30 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h2 className="font-playfair text-2xl text-brown mb-4 leading-snug group-hover:text-gold transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="font-inter text-base text-brown-medium leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  <span className="font-inter text-xs uppercase tracking-wider text-brown/40">{article.readingTime} leestijd</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="relative bg-brown p-10 md:p-14 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
              <h2 className="font-playfair text-2xl md:text-3xl font-light text-cream mb-4">
                Klaar om als freelancer aan de slag te gaan?
              </h2>
              <p className="font-inter text-base text-cream/70 leading-relaxed mb-8 max-w-xl mx-auto">
                Schrijf je één keer in bij Chefs Connect. Wij benaderen je zodra er een opdracht is die bij je past.
                Geen eindeloos solliciteren.
              </p>
              <Link
                href="/horecaspecialist"
                className="group inline-flex items-center gap-3 px-8 py-4 font-inter text-sm uppercase tracking-wider text-brown bg-gold hover:bg-gold-dark transition-all duration-500"
              >
                <span>Word horecaspecialist</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
