import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over Ons | Dé Partner in Culinaire Excellentie',
  description: 'Maak kennis met Chefs Connect. Ontdek onze visie op gastvrijheid, ons strenge selectieproces voor topchefs en waarom wij de premium standaard zetten.',
  keywords: ['over chefs connect', 'premium horeca bemiddeling', 'missie visie horeca bureau', 'kwaliteit horeca personeel'],
  alternates: { canonical: 'https://chefs-connect.nl/over-ons' },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Chefs Connect',
    foundingDate: '2020',
    description: 'Chefs Connect verheft de standaard van hospitality in de Benelux door het verbinden van de beste freelance professionals met premium opdrachtgevers.',
  },
};

export default function OverOnsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
