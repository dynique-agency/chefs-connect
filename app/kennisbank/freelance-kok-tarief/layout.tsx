import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/kennisbank/freelance-kok-tarief');
const title = 'Freelance Kok Tarief: Wat Bepaalt Je Uurtarief?';
const description = 'Nederlandse zzp-koks rekenen gemiddeld €38-45 per uur. De echte cijfers uit onderzoek onder 20.000+ zzp\'ers, en de factoren die jouw tarief bepalen.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['freelance kok tarief', 'uurtarief zzp kok', 'wat verdient een freelance kok', 'chef-kok tarief', 'zzp kok uurtarief 2026'],
  alternates: pageAlternates('https://chefs-connect.nl/kennisbank/freelance-kok-tarief'),
  openGraph: {
    title: 'Freelance Kok Tarief: Wat Bepaalt Je Uurtarief? | Chefs Connect',
    description,
    url,
    type: 'article',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Freelance kok tarief: wat bepaalt je uurtarief?',
  description,
  image: siteUrl('https://chefs-connect.nl/opengraph-image.png'),
  datePublished: '2026-08-04',
  dateModified: '2026-08-04',
  author: {
    '@type': 'Person',
    name: 'Gert-Jan',
    jobTitle: 'Oprichter Chefs Connect & freelance chef',
    worksFor: { '@type': 'Organization', name: 'Chefs Connect' },
  },
  publisher: {
    '@type': 'Organization',
    name: 'Chefs Connect',
    logo: { '@type': 'ImageObject', url: siteUrl('https://chefs-connect.nl/chefsconnectlogo.png') },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: siteUrl('https://chefs-connect.nl/kennisbank') },
    { '@type': 'ListItem', position: 3, name: 'Freelance kok tarief', item: url },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Verschilt het tarief voor bediening ten opzichte van een kok?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hierover bestaat geen vergelijkbaar grootschalig onderzoek als voor koks, maar dezelfde factoren gelden: functie, ervaring, type opdracht en spoed bepalen het tarief. Bij Chefs Connect bespreken we dit per opdracht, ongeacht of je kok of bediening bent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom rekent een chef-kok meer dan een kok?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vooral door verantwoordelijkheid: een chef-kok stuurt vaak een team aan, plant menu\'s en draagt eindverantwoordelijkheid voor de keuken. Dat vertaalt zich in het Knab-onderzoek in een gemiddeld €7 hoger uurtarief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik mijn tarief later nog aanpassen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Naarmate je meer ervaring en referenties opbouwt, is het normaal om je tarief geleidelijk te verhogen. Begin niet te laag uit angst om opdrachten mis te lopen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn deze cijfers exclusief btw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, de Knab-cijfers zijn exclusief btw. Vergeet dit niet mee te nemen als je jouw tarief vergelijkt met een bruto-uurloon in loondienst.',
      },
    },
  ],
};

export default function FreelanceKokTariefLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
