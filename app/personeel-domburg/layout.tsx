import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Domburg',
  description: 'Personeelstekort in de keuken in Domburg? Chefs Connect regelt snel een ervaren freelance kok voor Domburg en Walcheren.',
  keywords: ['freelance kok domburg', 'kok inhuren domburg', 'horecapersoneel domburg', 'tijdelijke kok domburg', 'spoed kok walcheren', 'keukenpersoneel domburg'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-domburg'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Domburg | Chefs Connect',
    description: 'Personeelstekort in de keuken in Domburg? Chefs Connect regelt snel een ervaren freelance kok voor Domburg en Walcheren.',
    url: siteUrl('https://chefs-connect.nl/personeel-domburg'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Domburg', item: siteUrl('https://chefs-connect.nl/personeel-domburg') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Domburg en de regio Walcheren.',
  areaServed: { '@type': 'City', name: 'Domburg' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Domburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Domburg en de regio Walcheren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Domburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor hotels, strandtenten en restaurants in Domburg, ook als de zomerdrukte om extra handen vraagt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Domburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Middelburg, Vlissingen en de bredere regio Walcheren.',
      },
    },
  ],
};

export default function PersoneelDomburgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
