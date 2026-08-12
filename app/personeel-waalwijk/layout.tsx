import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const description = 'Chefs Connect levert freelance koks in Waalwijk, van horecazaken in het centrum tot cateringlocaties rond de Efteling.';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Waalwijk',
  description,
  keywords: ['freelance kok waalwijk', 'kok inhuren waalwijk', 'horecapersoneel waalwijk', 'tijdelijke kok waalwijk', 'spoed kok waalwijk', 'keukenpersoneel waalwijk'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-waalwijk'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Waalwijk | Chefs Connect',
    description,
    url: siteUrl('https://chefs-connect.nl/personeel-waalwijk'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Waalwijk', item: siteUrl('https://chefs-connect.nl/personeel-waalwijk') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Waalwijk en de regio Midden-Brabant.',
  areaServed: { '@type': 'City', name: 'Waalwijk' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Waalwijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Waalwijk en de regio Midden-Brabant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Waalwijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Waalwijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Waalwijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Tilburg en de bredere regio Midden-Brabant.',
      },
    },
  ],
};

export default function PersoneelWaalwijkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
