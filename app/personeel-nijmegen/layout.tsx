import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Nijmegen',
  description: 'Binnen 24 tot 48 uur een ervaren freelance kok in Nijmegen. Chefs Connect bemiddelt snel en zonder gedoe in Nijmegen en de regio Arnhem-Nijmegen.',
  keywords: ['freelance kok nijmegen', 'kok inhuren nijmegen', 'horecapersoneel nijmegen', 'tijdelijke kok nijmegen', 'spoed kok nijmegen', 'keukenpersoneel nijmegen'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-nijmegen'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Nijmegen | Chefs Connect',
    description: 'Binnen 24 tot 48 uur een ervaren freelance kok in Nijmegen. Chefs Connect bemiddelt snel en zonder gedoe in Nijmegen en de regio Arnhem-Nijmegen.',
    url: siteUrl('https://chefs-connect.nl/personeel-nijmegen'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Nijmegen', item: siteUrl('https://chefs-connect.nl/personeel-nijmegen') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Nijmegen en de regio Arnhem-Nijmegen.',
  areaServed: { '@type': 'City', name: 'Nijmegen' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Nijmegen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Nijmegen en de regio Arnhem-Nijmegen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Nijmegen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Nijmegen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan Chefs Connect ook tijdens drukke periodes zoals de Vierdaagse leveren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Juist tijdens piekperiodes zoals de Vierdaagse schakelen wij snel op basis van beschikbaarheid in ons netwerk. Wij plaatsen ook in Arnhem, Wijchen en de bredere regio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kok gezocht in Nijmegen? Is dat hetzelfde als bij Chefs Connect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Niet helemaal: 'kok gezocht' of 'zzp kok gezocht' is meestal een vacaturetekst voor een vaste baan. Bij Chefs Connect huur je in Nijmegen juist snel een zzp-kok in voor een tijdelijke opdracht, zonder sollicitatieprocedure. Heb je in Nijmegen snel een kok nodig, vandaag of over twee weken? Dan zit je bij ons goed.",
      },
    },
  ],
};

export default function PersoneelNijmegenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
