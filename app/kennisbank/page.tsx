'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteUrl } from '@/lib/seo';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

/**
 * Kennisbank hub. Add new articles to this list as they go live; only
 * published entries are rendered, so it never links to a non-existent route.
 * "featured" pins one article to the top spot; it is excluded from its own
 * section grid below so it does not appear twice.
 */
const AUTHORS = {
  gertJan: { name: 'Gert-Jan', role: 'Oprichter Chefs Connect', image: '/gert-jan.png' },
  marcel: { name: 'Marcel', role: 'Horeca Planner', image: '/marcel.png' },
  mitchell: { name: 'Mitchell', role: 'Mede-oprichter Chefs Connect', image: '/mitchell.png' },
};

const articles = [
  {
    slug: 'freelance-kok-worden',
    section: 'starten',
    title: 'Freelance kok worden: zo begin je',
    excerpt:
      'Van KvK-inschrijving tot je eerste opdracht. Een praktisch stappenplan voor koks die de overstap naar zelfstandig ondernemen willen maken, geschreven door een chef die het zelf deed.',
    readingTime: '9 min',
    author: AUTHORS.gertJan,
    featured: true,
    published: true,
  },
  {
    slug: 'freelancen-of-vast-in-de-horeca',
    section: 'starten',
    title: 'Freelancen of vast in de horeca: wat past bij jou?',
    excerpt:
      'Vrijheid en een hoger uurtarief, of de zekerheid van een vast contract? Een eerlijke vergelijking om te bepalen welke route bij jouw situatie past.',
    readingTime: '7 min',
    author: AUTHORS.gertJan,
    published: true,
  },
  {
    slug: 'freelance-kok-tarief',
    section: 'starten',
    title: 'Freelance kok tarief: wat bepaalt je uurtarief?',
    excerpt:
      'Nederlandse zzp-koks rekenen gemiddeld €38 tot €45 per uur. De echte cijfers uit onderzoek onder 20.000+ zzp\'ers, en de factoren die jouw tarief bepalen.',
    readingTime: '8 min',
    author: AUTHORS.gertJan,
    published: true,
  },
  {
    slug: 'tips-freelance-bediening',
    section: 'vloer',
    title: 'Tips voor freelance bediening: wat je altijd bij je hebt',
    excerpt:
      'Van je eigen kelnersmes tot een reserve wit hemd. Concrete tips van iemand die van de afwas tot assistent banqueting manager alle kanten van de zaal heeft gezien.',
    readingTime: '7 min',
    author: AUTHORS.marcel,
    published: true,
  },
  {
    slug: 'tips-freelance-kok-keuken',
    section: 'vloer',
    title: 'Tips voor freelance koks: klaarstaan in een onbekende keuken',
    excerpt:
      'Van je messenrol tot een precieze vraag stellen aan de pass. Praktische tips uit sterrenkeukens en een privékeuken in Oostenrijk.',
    readingTime: '7 min',
    author: AUTHORS.mitchell,
    published: true,
  },
  {
    slug: 'eerste-freelance-opdracht-checklist',
    section: 'vloer',
    title: 'Je eerste freelance horeca-opdracht: de checklist',
    excerpt:
      'Wat je vooraf regelt, hoe je voorbereid aankomt, en hoe je je staande houdt op je allereerste dienst als zzp\'er.',
    readingTime: '7 min',
    author: AUTHORS.marcel,
    published: true,
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: siteUrl('https://chefs-connect.nl/kennisbank') },
  ],
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Kennisbank Chefs Connect',
  description: 'Gidsen en praktische kennis voor freelance horecaprofessionals.',
  url: siteUrl('https://chefs-connect.nl/kennisbank'),
  publisher: { '@type': 'Organization', name: 'Chefs Connect' },
};

interface Article {
  slug: string;
  section: string;
  title: string;
  excerpt: string;
  readingTime: string;
  author: { name: string; role: string; image: string };
  featured?: boolean;
  published: boolean;
}

function ArticleCard({ article, index, dark = false }: { article: Article; index: number; dark?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/kennisbank/${article.slug}`}
        className={`group flex flex-col h-full p-7 md:p-8 border transition-colors duration-300 ${
          dark
            ? 'bg-cream/5 border-cream/10 hover:border-gold/40'
            : 'bg-cream border-brown/10 hover:border-gold/40'
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold/30 flex-shrink-0">
            <Image src={article.author.image} alt={article.author.name} fill className="object-cover" sizes="36px" />
          </div>
          <div className="min-w-0">
            <p className={`font-inter text-xs font-semibold truncate ${dark ? 'text-cream' : 'text-brown'}`}>
              {article.author.name}
            </p>
            <p className={`font-inter text-[10px] uppercase tracking-wider ${dark ? 'text-cream/40' : 'text-brown/40'}`}>
              {article.readingTime} leestijd
            </p>
          </div>
          <ArrowUpRight
            className={`w-5 h-5 ml-auto flex-shrink-0 transition-colors duration-300 ${
              dark ? 'text-cream/25 group-hover:text-gold' : 'text-brown/25 group-hover:text-gold'
            }`}
          />
        </div>
        <h3
          className={`font-playfair text-xl mb-3 leading-snug group-hover:text-gold transition-colors duration-300 ${
            dark ? 'text-cream' : 'text-brown'
          }`}
          style={{ hyphens: 'none', wordBreak: 'normal' }}
        >
          {article.title}
        </h3>
        <p
          className={`font-inter text-sm leading-relaxed flex-1 ${dark ? 'text-cream/65' : 'text-brown-medium'}`}
          style={{ hyphens: 'none', wordBreak: 'normal' }}
        >
          {article.excerpt}
        </p>
      </Link>
    </motion.div>
  );
}

export default function KennisbankPage() {
  const live = articles.filter((a) => a.published);
  const featured = live.find((a) => a.featured);
  const starten = live.filter((a) => a.section === 'starten' && !a.featured);
  const vloer = live.filter((a) => a.section === 'vloer' && !a.featured);

  return (
    <main className="min-h-screen bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* Hero */}
      <section className="px-6 pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex -space-x-3">
                {[AUTHORS.gertJan, AUTHORS.marcel, AUTHORS.mitchell].map((a) => (
                  <div key={a.name} className="relative w-10 h-10 rounded-full border-2 border-cream overflow-hidden">
                    <Image src={a.image} alt={a.name} fill className="object-cover" sizes="40px" />
                  </div>
                ))}
              </div>
              <span className="font-inter text-sm text-brown-medium">
                Geschreven door het team dat het zelf deed
              </span>
            </div>
            <h1
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown leading-[1.1] mb-8"
              style={{ hyphens: 'none', wordBreak: 'normal' }}
            >
              Gidsen voor de <span className="text-gold italic" style={{ hyphens: 'none', wordBreak: 'normal' }}>horecaprofessional</span>
            </h1>
            <p
              className="font-inter text-lg md:text-xl text-brown-medium leading-relaxed max-w-2xl mx-auto"
              style={{ hyphens: 'none', wordBreak: 'normal' }}
            >
              Praktische kennis over freelancen, tarieven en werken in de horeca. Geen adviesbureau-taal, gewoon wat
              wij zelf hadden willen weten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="px-6 pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href={`/kennisbank/${featured.slug}`}
                className="group grid md:grid-cols-[1.15fr,0.85fr] gap-10 md:gap-14 items-center bg-brown p-10 md:p-16 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
                <div>
                  <span className="font-inter text-xs uppercase tracking-[0.25em] text-gold/80 block mb-5">
                    Begin hier
                  </span>
                  <h2
                    className="font-playfair text-3xl md:text-4xl font-light text-cream leading-tight mb-5 group-hover:text-gold transition-colors duration-300"
                    style={{ hyphens: 'none', wordBreak: 'normal' }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    className="font-inter text-base text-cream/70 leading-relaxed mb-8 max-w-lg"
                    style={{ hyphens: 'none', wordBreak: 'normal' }}
                  >
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-inter text-sm uppercase tracking-wider text-gold">
                    Lees het artikel
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <div className="flex md:flex-col items-center md:items-start gap-4 md:border-l md:border-cream/10 md:pl-10">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/40 flex-shrink-0">
                    <Image src={featured.author.image} alt={featured.author.name} fill className="object-cover" sizes="64px" />
                  </div>
                  <div>
                    <p className="font-playfair text-lg text-cream">{featured.author.name}</p>
                    <p className="font-inter text-xs text-cream/50">{featured.author.role}</p>
                    <p className="font-inter text-[10px] uppercase tracking-wider text-cream/35 mt-2">
                      {featured.readingTime} leestijd
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Starten als freelancer */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="w-14 h-1 bg-gold mb-6" />
            <h2 className="font-playfair text-3xl md:text-4xl font-light text-brown" style={{ hyphens: 'none', wordBreak: 'normal' }}>Starten als freelancer</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {starten.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Op de vloer: praktische tips */}
      <section className="px-6 py-20 md:py-28 bg-brown">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="w-14 h-1 bg-gold mb-6" />
            <h2 className="font-playfair text-3xl md:text-4xl font-light text-cream" style={{ hyphens: 'none', wordBreak: 'normal' }}>Op de vloer: praktische tips</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vloer.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} dark />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-cream border-2 border-brown/10 p-10 md:p-14 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            <h2 className="font-playfair text-2xl md:text-3xl font-light text-brown mb-4" style={{ hyphens: 'none', wordBreak: 'normal' }}>
              Klaar om als freelancer aan de slag te gaan?
            </h2>
            <p
              className="font-inter text-base text-brown-medium leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ hyphens: 'none', wordBreak: 'normal' }}
            >
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
