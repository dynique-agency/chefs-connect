import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Sint-Niklaas',
  description: 'Chefs Connect bemiddelt freelance koks en keukenbrigades in Sint-Niklaas en het Waasland, snel geregeld en persoonlijk contact.',
  keywords: ['freelance kok sint-niklaas', 'kok inhuren sint-niklaas', 'horecapersoneel sint-niklaas', 'tijdelijke kok sint-niklaas', 'spoed kok sint-niklaas', 'keukenpersoneel sint-niklaas'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-sint-niklaas'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Sint-Niklaas | Chefs Connect',
    description: 'Chefs Connect bemiddelt freelance koks en keukenbrigades in Sint-Niklaas en het Waasland, snel geregeld en persoonlijk contact.',
    url: siteUrl('https://chefs-connect.nl/personeel-sint-niklaas'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Sint-Niklaas', item: siteUrl('https://chefs-connect.nl/personeel-sint-niklaas') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Sint-Niklaas en het Waasland.',
  areaServed: { '@type': 'City', name: 'Sint-Niklaas' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Sint-Niklaas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Sint-Niklaas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Sint-Niklaas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Sint-Niklaas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Sint-Niklaas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Gent, Antwerpen en de bredere regio Oost-Vlaanderen.',
      },
    },
  ],
};

export default function PersoneelSintNiklaasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
