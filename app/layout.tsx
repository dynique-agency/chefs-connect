import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/providers/lenis-scroll';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/ui/LoadingScreen';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { LazyCustomCursor, LazyCookieBanner } from '@/lib/lazy-components';
import { MenuProvider } from '@/contexts/MenuContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'Chefs Connect | Premium Horecafreelancers & Evenement Catering',
  description: 'Chefs Connect bemiddelt ervaren horecaprofessionals en verzorgt exclusieve evenementen. Snel, betrouwbaar en professioneel. Van private dining tot grootschalige events in België en Nederland.',
  icons: {
    icon: '/faviconchefsconnect.png',
  },
  keywords: ['horeca freelancers', 'chef bemiddeling', 'evenement catering', 'private dining', 'horecaprofessionals', 'fine dining catering'],
  authors: [{ name: 'Chefs Connect' }],
  openGraph: {
    title: 'Chefs Connect | Premium Horecafreelancers & Evenement Catering',
    description: 'Ervaren chefs en bediening voor uw horecazaak. Exclusieve catering voor evenementen.',
    type: 'website',
    locale: 'nl_NL',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1a1d19',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
      </head>
      <body className="font-inter antialiased">
        <MenuProvider>
          <LoadingScreen />
          <LazyCustomCursor />
          <div className="noise-overlay" />
          <Navigation />
          <LenisScroll>{children}</LenisScroll>
          <Footer />
          <FloatingCTA />
          <LazyCookieBanner />
        </MenuProvider>
      </body>
    </html>
  );
}

