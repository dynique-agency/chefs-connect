import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelance Horeca Opdrachten in Maastricht | Chefs Connect',
  description: 'Werk als freelance chef of bedieningsprofessional op de mooiste horecalocaties in Maastricht en Zuid-Limburg. Chefs Connect verbindt je met opdrachten die bij je passen.',
  keywords: ['freelance kok maastricht', 'horeca opdrachten maastricht', 'freelance chef maastricht', 'horecawerk maastricht', 'zzp horeca limburg', 'freelance bediening maastricht'],
  alternates: { canonical: 'https://chefs-connect.nl/maastricht' },
  openGraph: {
    title: 'Freelance Horeca Opdrachten in Maastricht | Chefs Connect',
    description: 'Werk als freelance chef of bedieningsprofessional op de mooiste horecalocaties in Maastricht en Zuid-Limburg. Chefs Connect verbindt je met opdrachten die bij je passen.',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chefs-connect.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Horecaspecialist', item: 'https://chefs-connect.nl/horecaspecialist' },
    { '@type': 'ListItem', position: 3, name: 'Maastricht', item: 'https://chefs-connect.nl/maastricht' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horeca Bemiddeling',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance horeca opdrachten in Maastricht en Zuid-Limburg voor chefs, koks en bedieningsprofessionals.',
  areaServed: { '@type': 'City', name: 'Maastricht' },
};

export default function MaastrichtLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
