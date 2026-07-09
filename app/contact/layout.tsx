import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Neem Direct Contact Op',
  description: 'Klaar om uw keukenbrigade te versterken of een exclusief evenement te plannen? Neem contact op met Chefs Connect voor een vrijblijvende kennismaking.',
  keywords: ['contact chefs connect', 'horeca personeel aanvragen', 'catering offerte aanvragen', 'freelance kok boeken'],
  alternates: pageAlternates('https://chefs-connect.nl/contact'),
  openGraph: {
    title: 'Contact | Chefs Connect',
    description: 'Klaar om uw keukenbrigade te versterken of een exclusief evenement te plannen? Neem contact op met Chefs Connect voor een vrijblijvende kennismaking.',
    url: siteUrl('https://chefs-connect.nl/contact'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: siteUrl('https://chefs-connect.nl/contact') },
  ],
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Chefs Connect',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@chefs-connect.nl',
      telephone: '+31-6-41875803',
      contactType: 'customer support',
    },
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
