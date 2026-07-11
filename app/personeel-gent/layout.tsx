import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Gent',
  description: 'Op zoek naar een freelance kok in Gent? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Gent en Oost-Vlaanderen.',
  keywords: ['freelance kok gent', 'kok inhuren gent', 'horecapersoneel gent', 'tijdelijke kok gent', 'spoed kok gent', 'keukenpersoneel gent'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-gent'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Gent | Chefs Connect',
    description: 'Op zoek naar een freelance kok in Gent? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Gent en Oost-Vlaanderen.',
    url: siteUrl('https://chefs-connect.nl/personeel-gent'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Gent', item: siteUrl('https://chefs-connect.nl/personeel-gent') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Gent en Oost-Vlaanderen.',
  areaServed: { '@type': 'City', name: 'Gent' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Gent?',
      acceptedAnswer: { '@type': 'Answer', text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Gent.' },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Gent?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Gent.' },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Gent?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij plaatsen ook in Brugge, Brussel en de bredere regio Oost-Vlaanderen.' },
    },
  ],
};

export default function PersoneelGentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
