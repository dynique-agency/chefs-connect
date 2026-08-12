import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const description = 'Freelance kok nodig in Oosterhout? Chefs Connect regelt snel een ervaren kok voor jouw keuken, met kennis van de lokale horeca in West-Brabant.';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Oosterhout',
  description,
  keywords: ['freelance kok oosterhout', 'kok inhuren oosterhout', 'horecapersoneel oosterhout', 'tijdelijke kok oosterhout', 'spoed kok oosterhout', 'keukenpersoneel oosterhout'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-oosterhout'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Oosterhout | Chefs Connect',
    description,
    url: siteUrl('https://chefs-connect.nl/personeel-oosterhout'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Oosterhout', item: siteUrl('https://chefs-connect.nl/personeel-oosterhout') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Oosterhout en de regio West-Brabant.',
  areaServed: { '@type': 'City', name: 'Oosterhout' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Oosterhout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Oosterhout en de regio West-Brabant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Oosterhout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Oosterhout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Oosterhout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Breda en de bredere regio West-Brabant.',
      },
    },
  ],
};

export default function PersoneelOosterhoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
