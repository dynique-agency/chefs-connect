import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Helmond',
  description: 'Op zoek naar een freelance kok in Helmond? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Helmond en de Brainportregio.',
  keywords: ['freelance kok helmond', 'kok inhuren helmond', 'horecapersoneel helmond', 'tijdelijke kok helmond', 'spoed kok helmond', 'keukenpersoneel helmond'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-helmond'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Helmond | Chefs Connect',
    description: 'Op zoek naar een freelance kok in Helmond? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Helmond en de Brainportregio.',
    url: siteUrl('https://chefs-connect.nl/personeel-helmond'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Helmond', item: siteUrl('https://chefs-connect.nl/personeel-helmond') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Helmond en de Brainportregio.',
  areaServed: { '@type': 'City', name: 'Helmond' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Helmond?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Helmond.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Helmond?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Helmond.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief in Eindhoven?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, gezien de korte afstand plaatsen wij regelmatig personeel in zowel Helmond als Eindhoven.',
      },
    },
  ],
};

export default function PersoneelHelmondLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
