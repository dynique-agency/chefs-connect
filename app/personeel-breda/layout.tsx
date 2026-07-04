import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Breda',
  description: 'Op zoek naar een freelance kok in Breda? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Breda en West-Brabant.',
  keywords: ['freelance kok breda', 'kok inhuren breda', 'horecapersoneel breda', 'tijdelijke kok breda', 'spoed kok west-brabant', 'keukenpersoneel breda'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-breda'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Breda | Chefs Connect',
    description: 'Op zoek naar een freelance kok in Breda? Chefs Connect levert ervaren koks en keukenprofessionals snel en zonder gedoe in Breda en West-Brabant.',
    url: 'https://chefs-connect.nl/personeel-breda',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chefs-connect.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: 'https://chefs-connect.nl/zoek-personeel' },
    { '@type': 'ListItem', position: 3, name: 'Breda', item: 'https://chefs-connect.nl/personeel-breda' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Breda en de regio West-Brabant.',
  areaServed: { '@type': 'City', name: 'Breda' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Breda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Breda en de regio West-Brabant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Breda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Breda.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Breda in West-Brabant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Oosterhout, Etten-Leur en de bredere regio West-Brabant, en zijn vanwege de ligging nabij de grens ook actief richting Antwerpen.',
      },
    },
  ],
};

export default function PersoneelBredaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
