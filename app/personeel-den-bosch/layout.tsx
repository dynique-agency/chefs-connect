import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Den Bosch',
  description: 'Chefs Connect bemiddelt freelance koks en keukenbrigades in Den Bosch en de regio Noordoost-Brabant, snel geregeld en zonder poespas.',
  keywords: ['freelance kok den bosch', 'kok inhuren den bosch', 'horecapersoneel den bosch', "kok inhuren 's-hertogenbosch", 'spoed kok den bosch', 'keukenpersoneel den bosch'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-den-bosch'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Den Bosch | Chefs Connect',
    description: 'Chefs Connect bemiddelt freelance koks en keukenbrigades in Den Bosch en de regio Noordoost-Brabant, snel geregeld en zonder poespas.',
    url: siteUrl('https://chefs-connect.nl/personeel-den-bosch'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Den Bosch', item: siteUrl('https://chefs-connect.nl/personeel-den-bosch') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Den Bosch en de regio Noordoost-Brabant.',
  areaServed: { '@type': 'City', name: "'s-Hertogenbosch" },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Den Bosch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Den Bosch en de regio Noordoost-Brabant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Den Bosch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties zoals de Brabanthallen in Den Bosch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Den Bosch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Oss, Vught, Rosmalen en de bredere regio Noordoost-Brabant, en zijn daarnaast actief in Tilburg, Eindhoven en Nijmegen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kok gezocht in Den Bosch? Is dat hetzelfde als bij Chefs Connect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Niet helemaal: 'kok gezocht' of 'zzp kok gezocht' is meestal een vacaturetekst voor een vaste baan. Bij Chefs Connect huur je in Den Bosch juist snel een zzp-kok in voor een tijdelijke opdracht, zonder sollicitatieprocedure. Heb je in Den Bosch snel een kok nodig, vandaag of over twee weken? Dan zit je bij ons goed.",
      },
    },
  ],
};

export default function PersoneelDenBoschLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
