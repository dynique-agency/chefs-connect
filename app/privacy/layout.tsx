import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacyverklaring | Chefs Connect',
  description: 'Lees hoe Chefs Connect omgaat met jouw persoonsgegevens. Wij respecteren jouw privacy en handelen conform de AVG/GDPR wetgeving.',
  alternates: { canonical: 'https://chefs-connect.nl/privacy' },
  robots: { index: false, follow: false },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
