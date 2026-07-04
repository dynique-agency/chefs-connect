import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Maastricht',
  description: 'Op zoek naar een freelance kok in Maastricht? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in de regio Zuid-Limburg.',
  keywords: ['freelance kok maastricht', 'kok inhuren maastricht', 'horecapersoneel maastricht', 'tijdelijke kok maastricht', 'spoed kok limburg', 'keukenpersoneel maastricht'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-maastricht'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Maastricht | Chefs Connect',
    description: 'Op zoek naar een freelance kok in Maastricht? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in de regio Zuid-Limburg.',
    url: 'https://chefs-connect.nl/personeel-maastricht',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chefs-connect.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: 'https://chefs-connect.nl/zoek-personeel' },
    { '@type': 'ListItem', position: 3, name: 'Maastricht', item: 'https://chefs-connect.nl/personeel-maastricht' },
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
      name: 'Hoe snel kan Chefs Connect een kok leveren in Maastricht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Maastricht en de regio Zuid-Limburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in de regio Maastricht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in en rond Maastricht.',
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
