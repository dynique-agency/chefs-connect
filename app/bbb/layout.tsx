import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ontmoet Chefs Connect op de BBB',
  description: 'Laat je gegevens achter en Chefs Connect neemt na de beurs snel contact met je op.',
  robots: { index: false, follow: false },
};

export default function BbbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
