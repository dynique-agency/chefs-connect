import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Renesse',
  description: 'Personeelstekort in de keuken in Renesse? Chefs Connect regelt snel een ervaren freelance kok voor Renesse en de regio Schouwen-Duiveland.',
  keywords: ['freelance kok renesse', 'kok inhuren renesse', 'horecapersoneel renesse', 'tijdelijke kok renesse', 'spoed kok schouwen-duiveland', 'keukenpersoneel renesse'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-renesse'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Renesse | Chefs Connect',
    description: 'Personeelstekort in de keuken in Renesse? Chefs Connect regelt snel een ervaren freelance kok voor Renesse en de regio Schouwen-Duiveland.',
    url: siteUrl('https://chefs-connect.nl/personeel-renesse'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Renesse', item: siteUrl('https://chefs-connect.nl/personeel-renesse') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Renesse en de regio Schouwen-Duiveland.',
  areaServed: { '@type': 'City', name: 'Renesse' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok voorstellen in Renesse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Renesse en de regio Schouwen-Duiveland, ook op korte termijn in het hoogseizoen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie voorstellen in Renesse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, strandpaviljoens en horecazaken in Renesse.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Renesse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Goes, Middelburg en de bredere regio Zeeland.',
      },
    },
  ],
};

export default function PersoneelRenesseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
