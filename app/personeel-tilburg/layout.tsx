import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Tilburg',
  description: 'Op zoek naar een freelance kok in Tilburg? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Tilburg en Midden-Brabant.',
  keywords: ['freelance kok tilburg', 'kok inhuren tilburg', 'horecapersoneel tilburg', 'tijdelijke kok tilburg', 'spoed kok midden-brabant', 'keukenpersoneel tilburg'],
  alternates: { canonical: 'https://chefs-connect.nl/personeel-tilburg' },
  openGraph: {
    title: 'Freelance Kok Inhuren in Tilburg | Chefs Connect',
    description: 'Op zoek naar een freelance kok in Tilburg? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Tilburg en Midden-Brabant.',
    url: 'https://chefs-connect.nl/personeel-tilburg',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chefs-connect.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: 'https://chefs-connect.nl/zoek-personeel' },
    { '@type': 'ListItem', position: 3, name: 'Tilburg', item: 'https://chefs-connect.nl/personeel-tilburg' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Tilburg en de regio Midden-Brabant.',
  areaServed: { '@type': 'City', name: 'Tilburg' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Tilburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Tilburg en de regio Midden-Brabant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Tilburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Tilburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Tilburg in Midden-Brabant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Waalwijk, Oisterwijk en de bredere regio Midden-Brabant, en zijn daarnaast actief in Eindhoven en Den Bosch.',
      },
    },
  ],
};

export default function PersoneelTilburgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
