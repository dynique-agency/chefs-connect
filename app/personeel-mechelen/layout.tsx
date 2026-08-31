import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Mechelen',
  description: 'Personeelstekort in de keuken in Mechelen? Chefs Connect regelt snel een ervaren freelance kok voor Mechelen en de regio Antwerpen-Brussel.',
  keywords: ['freelance kok mechelen', 'kok inhuren mechelen', 'horecapersoneel mechelen', 'tijdelijke kok mechelen', 'spoed kok mechelen', 'keukenpersoneel mechelen'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-mechelen'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Mechelen | Chefs Connect',
    description: 'Personeelstekort in de keuken in Mechelen? Chefs Connect regelt snel een ervaren freelance kok voor Mechelen en de regio Antwerpen-Brussel.',
    url: siteUrl('https://chefs-connect.nl/personeel-mechelen'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Mechelen', item: siteUrl('https://chefs-connect.nl/personeel-mechelen') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Mechelen en de regio Antwerpen-Brussel.',
  areaServed: { '@type': 'City', name: 'Mechelen' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Mechelen?',
      acceptedAnswer: { '@type': 'Answer', text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Mechelen.' },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Mechelen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants en horecazaken in Mechelen en omgeving.' },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Mechelen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij plaatsen ook in Antwerpen, Brussel, Leuven en de bredere regio daartussen.' },
    },
    {
      '@type': 'Question',
      name: 'Kok gezocht in Mechelen? Is dat hetzelfde als bij Chefs Connect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Niet helemaal: 'kok gezocht' of 'zzp kok gezocht' is meestal een vacaturetekst voor een vaste baan. Bij Chefs Connect huur je in Mechelen juist snel een zzp-kok in voor een tijdelijke opdracht, zonder sollicitatieprocedure. Heb je in Mechelen snel een kok nodig, vandaag of over twee weken? Dan zit je bij ons goed.",
      },
    },
  ],
};

export default function PersoneelMechelenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
