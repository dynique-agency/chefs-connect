import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelance Horecapersoneel Inhuren | Chefs & Bediening',
  description: 'Voorkom personeelstekort zonder in te leveren op kwaliteit. Huur tijdelijk of flexibel premium freelance horecapersoneel in voor uw restaurant of hotel.',
  keywords: ['tijdelijk horeca personeel inhuren', 'freelance kok gezocht', 'extra bediening inhuren', 'spoed chef kok', 'flexibel horeca personeel'],
  alternates: { canonical: 'https://chefs-connect.nl/zoek-personeel' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chefs-connect.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: 'https://chefs-connect.nl/zoek-personeel' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Horecapersoneel Bemiddeling',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Bemiddeling van high-end freelance chefs, sous-chefs en premium bedienend personeel voor de horeca.',
  areaServed: ['NL', 'BE'],
};

export default function ZoekPersoneelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
