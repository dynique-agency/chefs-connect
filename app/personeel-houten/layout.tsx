import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Houten',
  description: 'Chefs Connect bemiddelt freelance koks en keukenbrigades in Houten en de regio Utrecht, snel geregeld en zonder poespas.',
  keywords: ['freelance kok houten', 'kok inhuren houten', 'horecapersoneel houten', 'tijdelijke kok houten', 'spoed kok houten', 'keukenpersoneel houten'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-houten'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Houten | Chefs Connect',
    description: 'Chefs Connect bemiddelt freelance koks en keukenbrigades in Houten en de regio Utrecht, snel geregeld en zonder poespas.',
    url: siteUrl('https://chefs-connect.nl/personeel-houten'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Houten', item: siteUrl('https://chefs-connect.nl/personeel-houten') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Houten en de regio Utrecht.',
  areaServed: { '@type': 'City', name: 'Houten' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Houten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Houten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Houten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Houten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Houten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in de bredere regio Utrecht.',
      },
    },
  ],
};

export default function PersoneelHoutenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
