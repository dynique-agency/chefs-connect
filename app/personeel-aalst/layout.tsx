import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Aalst',
  description: 'Personeelstekort in de keuken in Aalst? Chefs Connect regelt snel een ervaren freelance kok, ook tijdens de drukte van carnaval.',
  keywords: ['freelance kok aalst', 'kok inhuren aalst', 'horecapersoneel aalst', 'tijdelijke kok aalst', 'spoed kok aalst', 'keukenpersoneel aalst'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-aalst'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Aalst | Chefs Connect',
    description: 'Personeelstekort in de keuken in Aalst? Chefs Connect regelt snel een ervaren freelance kok, ook tijdens de drukte van carnaval.',
    url: siteUrl('https://chefs-connect.nl/personeel-aalst'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Aalst', item: siteUrl('https://chefs-connect.nl/personeel-aalst') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Aalst en Oost-Vlaanderen.',
  areaServed: { '@type': 'City', name: 'Aalst' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Aalst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Aalst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Aalst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Aalst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Aalst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Gent, Brussel en de bredere regio Oost-Vlaanderen.',
      },
    },
  ],
};

export default function PersoneelAalstLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
