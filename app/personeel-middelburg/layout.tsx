import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Middelburg',
  description: 'Personeelstekort in de keuken in Middelburg? Chefs Connect regelt snel een ervaren freelance kok voor Middelburg en Walcheren.',
  keywords: ['freelance kok middelburg', 'kok inhuren middelburg', 'horecapersoneel middelburg', 'tijdelijke kok middelburg', 'spoed kok walcheren', 'keukenpersoneel middelburg'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-middelburg'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Middelburg | Chefs Connect',
    description: 'Personeelstekort in de keuken in Middelburg? Chefs Connect regelt snel een ervaren freelance kok voor Middelburg en Walcheren.',
    url: siteUrl('https://chefs-connect.nl/personeel-middelburg'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Middelburg', item: siteUrl('https://chefs-connect.nl/personeel-middelburg') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Middelburg en de regio Walcheren.',
  areaServed: { '@type': 'City', name: 'Middelburg' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Middelburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Middelburg en de regio Walcheren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Middelburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Middelburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Middelburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Vlissingen, Goes en de bredere regio Walcheren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kok gezocht in Middelburg? Is dat hetzelfde als bij Chefs Connect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Niet helemaal: 'kok gezocht' of 'zzp kok gezocht' is meestal een vacaturetekst voor een vaste baan. Bij Chefs Connect huur je in Middelburg juist snel een zzp-kok in voor een tijdelijke opdracht, zonder sollicitatieprocedure. Heb je in Middelburg snel een kok nodig, vandaag of over twee weken? Dan zit je bij ons goed.",
      },
    },
  ],
};

export default function PersoneelMiddelburgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
