import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Nijmegen',
  description: 'Op zoek naar een freelance kok in Nijmegen? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in de regio Arnhem-Nijmegen.',
  keywords: ['freelance kok nijmegen', 'kok inhuren nijmegen', 'horecapersoneel nijmegen', 'tijdelijke kok nijmegen', 'spoed kok nijmegen', 'keukenpersoneel nijmegen'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-nijmegen'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Nijmegen | Chefs Connect',
    description: 'Op zoek naar een freelance kok in Nijmegen? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in de regio Arnhem-Nijmegen.',
    url: 'https://chefs-connect.nl/personeel-nijmegen',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chefs-connect.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: 'https://chefs-connect.nl/zoek-personeel' },
    { '@type': 'ListItem', position: 3, name: 'Nijmegen', item: 'https://chefs-connect.nl/personeel-nijmegen' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Nijmegen en de regio Arnhem-Nijmegen.',
  areaServed: { '@type': 'City', name: 'Nijmegen' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Nijmegen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Nijmegen en de regio Arnhem-Nijmegen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Nijmegen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Nijmegen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan Chefs Connect ook tijdens drukke periodes zoals de Vierdaagse leveren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Juist tijdens piekperiodes zoals de Vierdaagse schakelen wij snel op basis van beschikbaarheid in ons netwerk. Wij plaatsen ook in Arnhem, Wijchen en de bredere regio.',
      },
    },
  ],
};

export default function PersoneelNijmegenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
