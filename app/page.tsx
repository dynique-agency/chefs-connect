import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import PhilosophyFocus from '@/components/home/PhilosophyFocus';
import Reviews from '@/components/home/Reviews';
import AboutSection from '@/components/home/AboutSection';
import { LazyInstagramFeed, LazyContactForm } from '@/lib/lazy-components';
import PremiumStaffingPopup from '@/components/ui/PremiumStaffingPopup';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Horecaprofessionals & Fine Dining Catering',
  description: 'Chefs Connect levert chefs en bediening snel en professioneel, van private dining tot fine dining. Freelance horecapersoneel voor restaurants in NL & BE.',
  keywords: ['freelance horeca personeel inhuren', 'freelance chef kok gezocht', 'luxe catering evenementen', 'horeca professionals', 'fine dining catering'],
  alternates: pageAlternates('https://chefs-connect.nl'),
  openGraph: {
    title: 'Chefs Connect | Premium Horecapersoneel & Catering',
    description: 'Chefs Connect levert chefs en bediening snel en professioneel, van private dining tot fine dining. Freelance horecapersoneel voor restaurants in NL & BE.',
    url: siteUrl('https://chefs-connect.nl'),
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: 'Chefs Connect',
  image: siteUrl('https://chefs-connect.nl/opengraph-image.png'),
  description: 'Premium bemiddelingsbureau voor freelance horecaprofessionals en verzorger van exclusieve fine dining catering voor evenementen.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Stationsstraat 2',
    addressLocality: 'Lanaken',
    addressCountry: 'BE',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '15:00',
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
      reviewBody: 'Chefs Connect heeft voor ons snel een vakbekwame kok gevonden die perfect past binnen onze keukencultuur. Het team was professioneel, dacht mee en zorgde voor een soepel traject. Echt een aanrader!',
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
      reviewBody: 'De jongens van Chefs Connect onderscheiden zich met een super service en zorgen altijd voor een oplossing wanneer nodig. Zeer tevreden!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rick Vinckers' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Super service! Leuke gasten, gerichte vakmensen. Als je een paar handjes tekort komt zorgt Chefs Connect voor passende oplossingen. Toppers!',
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

