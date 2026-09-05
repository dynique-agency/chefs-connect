import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Antwerpen',
  description: 'Binnen 24 tot 48 uur een ervaren freelance kok in Antwerpen. Chefs Connect bemiddelt snel en zonder gedoe in Antwerpen en omstreken.',
  keywords: ['freelance kok antwerpen', 'kok inhuren antwerpen', 'horecapersoneel antwerpen', 'tijdelijke kok antwerpen', 'spoed kok antwerpen', 'keukenpersoneel antwerpen'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-antwerpen'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Antwerpen | Chefs Connect',
    description: 'Binnen 24 tot 48 uur een ervaren freelance kok in Antwerpen. Chefs Connect bemiddelt snel en zonder gedoe in Antwerpen en omstreken.',
    url: siteUrl('https://chefs-connect.nl/personeel-antwerpen'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Antwerpen', item: siteUrl('https://chefs-connect.nl/personeel-antwerpen') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Antwerpen.',
  areaServed: { '@type': 'City', name: 'Antwerpen' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok voorstellen in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Antwerpen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie voorstellen in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Antwerpen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werken jullie ook in Nederland vanuit Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij zijn actief in zowel België als Nederland en plaatsen ook in de grensregio richting Breda en Hasselt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kok gezocht in Antwerpen? Is dat hetzelfde als bij Chefs Connect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Niet helemaal: 'kok gezocht' of 'zzp kok gezocht' is meestal een vacaturetekst voor een vaste baan. Bij Chefs Connect huur je in Antwerpen juist snel een zzp-kok in voor een tijdelijke opdracht, zonder sollicitatieprocedure. Heb je in Antwerpen snel een kok nodig, vandaag of over twee weken? Dan zit je bij ons goed.",
      },
    },
  ],
};

export default function PersoneelAntwerpenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
