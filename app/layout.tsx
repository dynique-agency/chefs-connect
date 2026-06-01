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
  metadataBase: new URL('https://chefs-connect.nl'),
  title: {
    template: '%s | Chefs Connect',
    default: 'Chefs Connect | Premium Freelance Horecaprofessionals & Fine Dining Catering',
  },
  description: 'Verbindt topklasse freelance chefs en horecaprofessionals met exclusieve opdrachtgevers. Ervaar culinaire excellentie met onze fine dining event catering.',
  icons: {
    icon: '/faviconchefsconnect.png',
  },
  authors: [{ name: 'Chefs Connect' }],
  alternates: {
    canonical: 'https://chefs-connect.nl',
    languages: {
      'x-default': 'https://chefs-connect.nl',
      'nl-NL': 'https://chefs-connect.nl',
      'nl-BE': 'https://chefs-connect.be',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://chefs-connect.nl',
    siteName: 'Chefs Connect',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Chefs Connect - Premium Horeca Professionals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ChefsConnect',
    title: 'Chefs Connect | Premium Freelance Horecaprofessionals',
    description: 'Verbindt topklasse freelance chefs en horecaprofessionals met exclusieve opdrachtgevers in Nederland en België.',
    images: ['/opengraph-image.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1a1d19',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Chefs Connect',
  url: 'https://chefs-connect.nl',
  inLanguage: 'nl-NL',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Chefs Connect',
  url: 'https://chefs-connect.nl',
  logo: 'https://chefs-connect.nl/faviconchefsconnect.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+31-6-41875803',
    contactType: 'customer service',
    areaServed: ['NL', 'BE'],
    availableLanguage: 'Dutch',
  },
  sameAs: [
    'https://www.instagram.com/chefsconnectnl',
    'https://www.facebook.com/people/Chefs-Connect/61572633120372/',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <MenuProvider>
          <ConditionalShell>
            <LenisScroll>{children}</LenisScroll>
          </ConditionalShell>
        </MenuProvider>
      </body>
    </html>
  );
}

