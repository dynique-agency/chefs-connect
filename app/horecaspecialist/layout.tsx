import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelance Horeca Opdrachten | Word Chefs Connect Specialist',
  description: 'Op zoek naar uitdagende freelance chef kok opdrachten? Sluit je aan bij Chefs Connect en werk voor de mooiste high-end locaties in Nederland en België.',
  keywords: ['freelance chef kok opdrachten', 'zzp horeca opdrachten', 'werken als zzp kok', 'freelance horeca vacatures', 'freelance bediening'],
  alternates: { canonical: 'https://chefs-connect.nl/horecaspecialist' },
  openGraph: { description: 'Op zoek naar uitdagende freelance chef kok opdrachten? Sluit je aan bij Chefs Connect en werk voor de mooiste high-end locaties in Nederland en België.' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chefs-connect.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Voor Horecaspecialisten', item: 'https://chefs-connect.nl/horecaspecialist' },
  ],
};

export default function HorecaspecialistLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
