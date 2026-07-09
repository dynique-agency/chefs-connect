import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Hasselt',
  description: 'Op zoek naar een freelance kok in Hasselt? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Hasselt en Belgisch Limburg.',
  keywords: ['freelance kok hasselt', 'kok inhuren hasselt', 'horecapersoneel hasselt', 'tijdelijke kok hasselt', 'spoed kok hasselt', 'keukenpersoneel hasselt'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-hasselt'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Hasselt | Chefs Connect',
    description: 'Op zoek naar een freelance kok in Hasselt? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Hasselt en Belgisch Limburg.',
    url: siteUrl('https://chefs-connect.nl/personeel-hasselt'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Hasselt', item: siteUrl('https://chefs-connect.nl/personeel-hasselt') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Hasselt en Belgisch Limburg.',
  areaServed: { '@type': 'City', name: 'Hasselt' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Hasselt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Hasselt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Hasselt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Hasselt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief richting Maastricht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, door de korte afstand tot Maastricht plaatsen wij regelmatig personeel aan beide kanten van de grens.',
      },
    },
  ],
};

export default function PersoneelHasseltLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
