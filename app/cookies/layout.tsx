import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookiebeleid | ChefsConnect',
  description: 'Lees ons cookiebeleid en ontdek welke cookies ChefsConnect gebruikt, waarom we ze gebruiken en hoe je jouw cookievoorkeuren kunt beheren.',
  keywords: 'cookies, cookiebeleid, cookie policy, privacy, tracking, ChefsConnect',
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
