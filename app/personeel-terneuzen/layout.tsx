import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Terneuzen',
  description: 'Personeelstekort in de keuken in Terneuzen? Chefs Connect regelt snel een ervaren freelance kok voor Terneuzen en Zeeuws-Vlaanderen.',
  keywords: ['freelance kok terneuzen', 'kok inhuren terneuzen', 'horecapersoneel terneuzen', 'tijdelijke kok terneuzen', 'spoed kok zeeuws-vlaanderen', 'keukenpersoneel terneuzen'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-terneuzen'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Terneuzen | Chefs Connect',
    description: 'Personeelstekort in de keuken in Terneuzen? Chefs Connect regelt snel een ervaren freelance kok voor Terneuzen en Zeeuws-Vlaanderen.',
    url: siteUrl('https://chefs-connect.nl/personeel-terneuzen'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Terneuzen', item: siteUrl('https://chefs-connect.nl/personeel-terneuzen') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Terneuzen en de regio Zeeuws-Vlaanderen.',
  areaServed: { '@type': 'City', name: 'Terneuzen' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Terneuzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Terneuzen en de regio Zeeuws-Vlaanderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Terneuzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en bedrijfscatering in Terneuzen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Terneuzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Middelburg, Vlissingen, Goes en de rest van Zeeland, bereikbaar via de Westerscheldetunnel.',
      },
    },
  ],
};

export default function PersoneelTerneuzenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
