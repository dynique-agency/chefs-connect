import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Utrecht',
  description: 'Op zoek naar een freelance kok in Utrecht? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Utrecht en Midden-Nederland.',
  keywords: ['freelance kok utrecht', 'kok inhuren utrecht', 'horecapersoneel utrecht', 'tijdelijke kok utrecht', 'spoed kok utrecht', 'keukenpersoneel utrecht'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-utrecht'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Utrecht | Chefs Connect',
    description: 'Op zoek naar een freelance kok in Utrecht? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Utrecht en Midden-Nederland.',
    url: siteUrl('https://chefs-connect.nl/personeel-utrecht'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Utrecht', item: siteUrl('https://chefs-connect.nl/personeel-utrecht') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Utrecht en Midden-Nederland.',
  areaServed: { '@type': 'City', name: 'Utrecht' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Utrecht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Utrecht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Utrecht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Utrecht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Utrecht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in de bredere regio Midden-Nederland.',
      },
    },
  ],
};

export default function PersoneelUtrechtLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
