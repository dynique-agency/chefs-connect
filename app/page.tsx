import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import PhilosophyFocus from '@/components/home/PhilosophyFocus';
import Reviews from '@/components/home/Reviews';
import AboutSection from '@/components/home/AboutSection';
import { LazyInstagramFeed, LazyContactForm } from '@/lib/lazy-components';
import PremiumStaffingPopup from '@/components/ui/PremiumStaffingPopup';

export const metadata: Metadata = {
  title: 'Freelance Horecaprofessionals & Fine Dining Catering',
  description: 'Zekerheid van topkwaliteit in uw keuken of evenement. Chefs Connect bemiddelt high-end freelance chefs en verzorgt fine dining catering in NL & BE.',
  keywords: ['freelance horeca personeel inhuren', 'freelance chef kok gezocht', 'luxe catering evenementen', 'horeca professionals', 'fine dining catering'],
  alternates: { canonical: 'https://chefs-connect.nl' },
  openGraph: {
    title: 'Chefs Connect | Premium Horecapersoneel & Catering',
    description: 'Zekerheid van topkwaliteit in uw keuken of evenement. Chefs Connect bemiddelt high-end freelance chefs en verzorgt fine dining catering in NL & BE.',
    url: 'https://chefs-connect.nl',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: 'Chefs Connect',
  image: 'https://chefs-connect.nl/opengraph-image.png',
  description: 'Premium bemiddelingsbureau voor freelance horecaprofessionals en verzorger van exclusieve fine dining catering voor evenementen.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gasthuisstraat 3.1',
    addressLocality: 'Lanaken',
    addressCountry: 'BE',
  },
  areaServed: [
    { '@type': 'Country', name: 'Netherlands' },
    { '@type': 'Country', name: 'Belgium' },
  ],
  priceRange: '$$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '8',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Mitchel' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'ChefsConnect heeft voor ons snel een vakbekwame kok gevonden die perfect past binnen onze keukencultuur. Het team was professioneel, dacht mee en zorgde voor een soepel traject. Echt een aanrader!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sharen Wintjens' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Mijn chef-kok was plots weggelopen en ik zat met mijn handen in het haar. De dag erna stond er al een tijdelijke freelance chef-kok die écht kon koken. Dat heeft mijn zaak gered. Chapeau jongens!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Stijn Antens' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'De jongens van ChefsConnect onderscheiden zich met een super service en zorgen altijd voor een oplossing wanneer nodig. Zeer tevreden!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rick Vinckers' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Super service! Leuke gasten, gerichte vakmensen. Als je een paar handjes tekort komt zorgt ChefsConnect voor passende oplossingen. Toppers!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Dominic' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Chefs Connect is een goede en professionele organisatie met kennis van zaken. Je krijgt heldere uitleg over het bemiddelingsproces en ze gaan efficiënt te werk.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Mohamed Tolba' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Chefs Connect is een van de beste bedrijven voor freelance kok. Zeer professioneel en betrouwbaar.',
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <PremiumStaffingPopup showAfterMs={7000} />
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

