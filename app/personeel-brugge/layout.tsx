import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Brugge',
  description: 'Op zoek naar een freelance kok in Brugge? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Brugge en West-Vlaanderen.',
  keywords: ['freelance kok brugge', 'kok inhuren brugge', 'horecapersoneel brugge', 'tijdelijke kok brugge', 'spoed kok brugge', 'keukenpersoneel brugge'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-brugge'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Brugge | Chefs Connect',
    description: 'Op zoek naar een freelance kok in Brugge? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Brugge en West-Vlaanderen.',
    url: siteUrl('https://chefs-connect.nl/personeel-brugge'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Brugge', item: siteUrl('https://chefs-connect.nl/personeel-brugge') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Brugge en West-Vlaanderen.',
  areaServed: { '@type': 'City', name: 'Brugge' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Brugge?',
      acceptedAnswer: { '@type': 'Answer', text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Brugge.' },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Brugge?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor sterrenzaken, restaurants en hotels in Brugge.' },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Brugge?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij plaatsen ook in Gent, Brussel en de bredere regio West-Vlaanderen.' },
    },
  ],
};

export default function PersoneelBruggeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
