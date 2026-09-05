import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Maastricht',
  description: 'Binnen 24 tot 48 uur een ervaren freelance kok in Maastricht. Chefs Connect bemiddelt snel en zonder gedoe in Maastricht en de regio Zuid-Limburg.',
  keywords: ['freelance kok maastricht', 'kok inhuren maastricht', 'horecapersoneel maastricht', 'tijdelijke kok maastricht', 'spoed kok limburg', 'keukenpersoneel maastricht'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-maastricht'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Maastricht | Chefs Connect',
    description: 'Binnen 24 tot 48 uur een ervaren freelance kok in Maastricht. Chefs Connect bemiddelt snel en zonder gedoe in Maastricht en de regio Zuid-Limburg.',
    url: siteUrl('https://chefs-connect.nl/personeel-maastricht'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Maastricht', item: siteUrl('https://chefs-connect.nl/personeel-maastricht') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Maastricht en de regio Zuid-Limburg.',
  areaServed: { '@type': 'City', name: 'Maastricht' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok voorstellen in Maastricht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Maastricht en de regio Zuid-Limburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie voorstellen in de regio Maastricht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in en rond Maastricht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Maastricht in Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Valkenburg, Sittard, Heerlen en de omliggende grensregio richting Hasselt en Luik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kok gezocht in Maastricht? Is dat hetzelfde als bij Chefs Connect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Niet helemaal: 'kok gezocht' of 'zzp kok gezocht' is meestal een vacaturetekst voor een vaste baan. Bij Chefs Connect huur je in Maastricht juist snel een zzp-kok in voor een tijdelijke opdracht, zonder sollicitatieprocedure. Heb je in Maastricht snel een kok nodig, vandaag of over twee weken? Dan zit je bij ons goed.",
      },
    },
  ],
};

export default function PersoneelMaastrichtLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
