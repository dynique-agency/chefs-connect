import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | ChefsConnect',
  description: 'Lees de algemene voorwaarden van ChefsConnect voor freelancers en opdrachtgevers. Duidelijke afspraken voor professionele samenwerking in de horeca.',
  keywords: 'algemene voorwaarden, terms, voorwaarden freelancers, voorwaarden opdrachtgevers, ChefsConnect',
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
