import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Goes',
  description: 'Personeelstekort in de keuken in Goes? Chefs Connect regelt snel een ervaren, goed gescreende freelance kok voor Goes en Zuid-Beveland.',
  keywords: ['freelance kok goes', 'kok inhuren goes', 'horecapersoneel goes', 'tijdelijke kok goes', 'spoed kok zuid-beveland', 'keukenpersoneel goes'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-goes'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Goes | Chefs Connect',
    description: 'Personeelstekort in de keuken in Goes? Chefs Connect regelt snel een ervaren, goed gescreende freelance kok voor Goes en Zuid-Beveland.',
    url: siteUrl('https://chefs-connect.nl/personeel-goes'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Goes', item: siteUrl('https://chefs-connect.nl/personeel-goes') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Goes en de regio Zuid-Beveland.',
  areaServed: { '@type': 'City', name: 'Goes' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Goes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Goes en de regio Zuid-Beveland.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Goes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Goes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Goes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Middelburg, Vlissingen en de bredere regio Zuid-Beveland en Walcheren.',
      },
    },
  ],
};

export default function PersoneelGoesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
