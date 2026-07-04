import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Horecapersoneel Inhuren | Chefs & Bediening',
  description: 'Op zoek naar freelance horecapersoneel? Chefs Connect levert chefs en bediening snel en zonder gedoe, met gegarandeerde kwaliteit voor uw zaak in NL & BE.',
  keywords: ['tijdelijk horeca personeel inhuren', 'freelance kok gezocht', 'extra bediening inhuren', 'spoed chef kok', 'flexibel horeca personeel'],
  alternates: pageAlternates('https://chefs-connect.nl/zoek-personeel'),
  openGraph: {
    title: 'Freelance Horecapersoneel Inhuren | Chefs Connect',
    description: 'Op zoek naar freelance horecapersoneel? Chefs Connect levert chefs en bediening snel en zonder gedoe, met gegarandeerde kwaliteit voor uw zaak in NL & BE.',
    url: 'https://chefs-connect.nl/zoek-personeel',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chefs-connect.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: 'https://chefs-connect.nl/zoek-personeel' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kunnen jullie horecapersoneel leveren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelancer voorstellen. Bij spoedaanvragen schakelen wij zo snel mogelijk op basis van beschikbaarheid in ons netwerk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke functies bemiddelen jullie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks, bedieningsmedewerkers, leidinggevenden bediening en complete keuken- of bedieningsteams voor zowel korte als langere periodes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werken jullie ook in België?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij zijn actief in zowel Nederland als België. Onze professionals worden door de hele Benelux ingezet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat maakt Chefs Connect anders dan andere uitzendbureaus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij komen zelf uit de horeca en begrijpen de praktijk van binnenuit. Daardoor matchen wij niet op papier maar op vakmanschap, mentaliteit en teamdynamiek.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Horecapersoneel Bemiddeling',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Bemiddeling van high-end freelance chefs, sous-chefs en premium bedienend personeel voor de horeca.',
  areaServed: ['NL', 'BE'],
};

export default function ZoekPersoneelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
