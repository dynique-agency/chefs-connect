import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Oostende',
  description: 'Personeelstekort in de keuken in Oostende? Chefs Connect regelt snel een ervaren freelance kok voor Oostende en de Belgische kust.',
  keywords: ['freelance kok oostende', 'kok inhuren oostende', 'horecapersoneel oostende', 'tijdelijke kok oostende', 'spoed kok oostende', 'keukenpersoneel oostende'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-oostende'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Oostende | Chefs Connect',
    description: 'Personeelstekort in de keuken in Oostende? Chefs Connect regelt snel een ervaren freelance kok voor Oostende en de Belgische kust.',
    url: siteUrl('https://chefs-connect.nl/personeel-oostende'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Oostende', item: siteUrl('https://chefs-connect.nl/personeel-oostende') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Oostende en aan de Belgische kust.',
  areaServed: { '@type': 'City', name: 'Oostende' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Oostende?',
      acceptedAnswer: { '@type': 'Answer', text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Oostende.' },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Oostende?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, brasserieën en strandzaken in Oostende.' },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Oostende?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij plaatsen ook in Brugge, Kortrijk en de bredere regio langs de Belgische kust.' },
    },
    {
      '@type': 'Question',
      name: 'Kok gezocht in Oostende? Is dat hetzelfde als bij Chefs Connect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Niet helemaal: 'kok gezocht' of 'zzp kok gezocht' is meestal een vacaturetekst voor een vaste baan. Bij Chefs Connect huur je in Oostende juist snel een zzp-kok in voor een tijdelijke opdracht, zonder sollicitatieprocedure. Heb je in Oostende snel een kok nodig, vandaag of over twee weken? Dan zit je bij ons goed.",
      },
    },
  ],
};

export default function PersoneelOostendeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
