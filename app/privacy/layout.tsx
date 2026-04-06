import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacyverklaring | ChefsConnect',
  description: 'Lees hoe ChefsConnect omgaat met jouw persoonsgegevens. Wij respecteren jouw privacy en handelen conform de AVG/GDPR wetgeving.',
  keywords: 'privacy, AVG, GDPR, persoonsgegevens, dataveiligheid, ChefsConnect',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
