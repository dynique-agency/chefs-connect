import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Roosendaal',
  description: 'Kok nodig in Roosendaal? Chefs Connect bemiddelt snel freelance koks en keukenbrigades voor Roosendaal en West-Brabant.',
  keywords: ['freelance kok roosendaal', 'kok inhuren roosendaal', 'horecapersoneel roosendaal', 'tijdelijke kok roosendaal', 'spoed kok west-brabant', 'keukenpersoneel roosendaal'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-roosendaal'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Roosendaal | Chefs Connect',
    description: 'Kok nodig in Roosendaal? Chefs Connect bemiddelt snel freelance koks en keukenbrigades voor Roosendaal en West-Brabant.',
    url: siteUrl('https://chefs-connect.nl/personeel-roosendaal'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Roosendaal', item: siteUrl('https://chefs-connect.nl/personeel-roosendaal') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Roosendaal en de regio West-Brabant.',
  areaServed: { '@type': 'City', name: 'Roosendaal' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Roosendaal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Roosendaal en de regio West-Brabant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Roosendaal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Roosendaal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Roosendaal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Bergen op Zoom, Zundert en de bredere regio West-Brabant, en zijn vanwege de ligging vlak bij de grens ook actief richting Antwerpen.',
      },
    },
  ],
};

export default function PersoneelRoosendaalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
