import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookiebeleid | Chefs Connect',
  description: 'Lees ons cookiebeleid en ontdek welke cookies Chefs Connect gebruikt, waarom we ze gebruiken en hoe je jouw cookievoorkeuren kunt beheren.',
  alternates: { canonical: 'https://chefs-connect.nl/cookies' },
  robots: { index: false, follow: false },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
