import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Neem Contact Op Met Chefs Connect',
  description: 'Klaar om uw keukenbrigade te versterken of een exclusief evenement te plannen? Neem contact op met Chefs Connect voor een vrijblijvende kennismaking.',
  keywords: ['contact chefs connect', 'horeca personeel aanvragen', 'catering offerte aanvragen', 'freelance kok boeken'],
  alternates: { canonical: 'https://chefs-connect.nl/contact' },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
