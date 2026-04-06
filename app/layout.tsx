import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import LenisScroll from '@/components/providers/lenis-scroll';
import ConditionalShell from '@/components/layout/ConditionalShell';
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NLMGNKDEPV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NLMGNKDEPV');
          `}
        </Script>
        <link rel="preconnect" href="https://formsubmit.co" />
        <link rel="dns-prefetch" href="https://formsubmit.co" />
      </head>
      <body className="font-inter antialiased">
        <MenuProvider>
          <ConditionalShell>
            <LenisScroll>{children}</LenisScroll>
          </ConditionalShell>
        </MenuProvider>
      </body>
    </html>
  );
}

