import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/seo';

const url = 'https://chefs-connect.nl/cateringpartner';
const description = 'Op zoek naar een vaste cateringpartner voor uw evenementenlocatie? Connect Events & Dining verzorgt fine dining op locatie in NL & BE.';

export const metadata: Metadata = {
  title: 'Cateringpartner voor Evenementenlocaties',
  description,
  keywords: ['cateringpartner', 'catering voor locaties', 'cateringpartner evenementenlocatie', 'vaste cateraar locatie', 'fine dining cateringpartner', 'catering landgoed kasteel'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Cateringpartner voor Locaties | Connect Events & Dining',
    description,
    url,
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Connect Events & Dining - Fine Dining Catering' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chefs-connect.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Evenementen', item: 'https://chefs-connect.nl/evenementen' },
    { '@type': 'ListItem', position: 3, name: 'Cateringpartner', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Vaste fine dining cateringpartner voor evenementenlocaties',
  provider: { '@type': 'Organization', name: 'Connect Events & Dining', parentOrganization: { '@type': 'Organization', name: 'Chefs Connect' } },
  description: 'Connect Events & Dining werkt als vaste cateringpartner voor evenementenlocaties, landgoederen en kastelen, met fine dining op locatie in NL & BE.',
  areaServed: [{ '@type': 'Country', name: 'Netherlands' }, { '@type': 'Country', name: 'Belgium' }],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Werken jullie ook samen met locaties zonder eigen keuken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Onze chefs zijn gewend om op locatie te werken en nemen de benodigde mobiele uitrusting mee. Wij stemmen vooraf met uw locatie af wat er nodig is.' },
    },
    {
      '@type': 'Question',
      name: 'Kunnen jullie meerdere evenementen per maand verzorgen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zeker. Als vaste cateringpartner zijn wij ingericht op een doorlopende samenwerking en kunnen wij meerdere events per maand op niveau verzorgen.' },
    },
    {
      '@type': 'Question',
      name: 'Verzorgen jullie naast de keuken ook de bediening?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Via het netwerk van Chefs Connect leveren wij naast chefs ook ervaren bedieningsprofessionals, zodat het volledige team op elkaar is afgestemd.' },
    },
    {
      '@type': 'Question',
      name: 'In welke regio zijn jullie actief?',
      acceptedAnswer: { '@type': 'Answer', text: 'Connect Events & Dining is actief in heel Nederland en België. Voor een vaste samenwerking reizen onze chefs door de hele Benelux.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe verloopt een samenwerking met een locatie?',
      acceptedAnswer: { '@type': 'Answer', text: 'We starten met een kennismaking om uw locatie, gasten en wensen te leren kennen. Vervolgens maken we afspraken over werkwijze en kwaliteit, en stemmen we per event het menu en de uitvoering af.' },
    },
  ],
};

export default function CateringpartnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
