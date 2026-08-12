import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Heerlen',
  description: 'Chefs Connect regelt freelance koks en keukenbrigades voor horecazaken in Heerlen en de Oostelijke Mijnstreek, snel en professioneel.',
  keywords: ['freelance kok heerlen', 'kok inhuren heerlen', 'horecapersoneel heerlen', 'tijdelijke kok heerlen', 'spoed kok limburg', 'keukenpersoneel heerlen'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-heerlen'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Heerlen | Chefs Connect',
    description: 'Chefs Connect regelt freelance koks en keukenbrigades voor horecazaken in Heerlen en de Oostelijke Mijnstreek, snel en professioneel.',
    url: siteUrl('https://chefs-connect.nl/personeel-heerlen'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Heerlen', item: siteUrl('https://chefs-connect.nl/personeel-heerlen') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Heerlen en de Oostelijke Mijnstreek.',
  areaServed: { '@type': 'City', name: 'Heerlen' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Heerlen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Heerlen en de Oostelijke Mijnstreek.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in de regio Heerlen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en zakelijke locaties in en rond Heerlen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Heerlen in Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Sittard-Geleen, Maastricht en de bredere regio Zuid-Limburg.',
      },
    },
  ],
};

export default function PersoneelHeerlenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
