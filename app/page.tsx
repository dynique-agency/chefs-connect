import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import PhilosophyFocus from '@/components/home/PhilosophyFocus';
import Reviews from '@/components/home/Reviews';
import AboutSection from '@/components/home/AboutSection';
import { LazyInstagramFeed, LazyContactForm } from '@/lib/lazy-components';

export const metadata: Metadata = {
  title: 'Freelance Horecaprofessionals & Fine Dining Catering',
  description: 'Zekerheid van topkwaliteit in uw keuken of evenement. Chefs Connect bemiddelt in high-end freelance chefs en verzorgt exclusieve fine dining catering in NL & BE.',
  keywords: ['freelance horeca personeel inhuren', 'freelance chef kok gezocht', 'luxe catering evenementen', 'horeca professionals', 'fine dining catering'],
  alternates: { canonical: 'https://chefs-connect.nl' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: 'Chefs Connect',
  image: 'https://chefs-connect.nl/opengraph-image.png',
  description: 'Premium bemiddelingsbureau voor freelance horecaprofessionals en verzorger van exclusieve fine dining catering voor evenementen.',
  address: { '@type': 'PostalAddress', addressCountry: 'NL' },
  areaServed: [
    { '@type': 'Country', name: 'Netherlands' },
    { '@type': 'Country', name: 'Belgium' },
  ],
  priceRange: '$$$',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <IntroSection />
      <PhilosophyFocus />
      <Reviews />
      <AboutSection />
      <LazyInstagramFeed />
      <LazyContactForm />
    </main>
  );
}

