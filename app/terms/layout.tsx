import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Chefs Connect',
  description: 'Lees de algemene voorwaarden van Chefs Connect voor freelancers en opdrachtgevers. Duidelijke afspraken voor professionele samenwerking in de horeca.',
  alternates: { canonical: 'https://chefs-connect.nl/terms' },
  robots: { index: false, follow: false },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
