import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Bergen op Zoom',
  description: 'Chefs Connect bemiddelt ervaren freelance koks in Bergen op Zoom, snel geregeld voor de historische vestingstad en West-Brabant.',
  keywords: ['freelance kok bergen op zoom', 'kok inhuren bergen op zoom', 'horecapersoneel bergen op zoom', 'tijdelijke kok bergen op zoom', 'spoed kok west-brabant', 'keukenpersoneel bergen op zoom'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-bergen-op-zoom'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Bergen op Zoom | Chefs Connect',
    description: 'Chefs Connect bemiddelt ervaren freelance koks in Bergen op Zoom, snel geregeld voor de historische vestingstad en West-Brabant.',
    url: siteUrl('https://chefs-connect.nl/personeel-bergen-op-zoom'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Bergen op Zoom', item: siteUrl('https://chefs-connect.nl/personeel-bergen-op-zoom') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Bergen op Zoom en de regio West-Brabant.',
  areaServed: { '@type': 'City', name: 'Bergen op Zoom' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Bergen op Zoom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Bergen op Zoom en de regio West-Brabant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Bergen op Zoom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in de historische binnenstad van Bergen op Zoom en daarbuiten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Bergen op Zoom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Roosendaal, Steenbergen en de bredere regio West-Brabant, tot aan de grens met Zeeland.',
      },
    },
  ],
};

export default function PersoneelBergenOpZoomLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
