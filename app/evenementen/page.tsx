import type { Metadata } from 'next';
import HeroSection from '@/components/evenementen/HeroSection';
import IntroSection from '@/components/evenementen/IntroSection';
import FineDiningSection from '@/components/evenementen/FineDiningSection';
import SignatureMenuSection from '@/components/evenementen/SignatureMenuSection';
import EventTypesSection from '@/components/evenementen/EventTypesSection';
import CarefreeSection from '@/components/evenementen/CarefreeSection';
import WhyChooseUsSection from '@/components/evenementen/WhyChooseUsSection';
import ContactSection from '@/components/evenementen/ContactSection';

export const metadata: Metadata = {
  title: 'Fine Dining Catering & Exclusieve Evenementen',
  description: 'Verhef uw zakelijke of particuliere evenement met onze fine dining catering op locatie. Culinaire meesterwerken door topchefs, tot in de puntjes verzorgd.',
  keywords: ['fine dining catering op locatie', 'luxe catering evenementen', 'exclusieve zakelijke catering', 'private dining chef thuis', 'high-end event catering'],
  alternates: { canonical: 'https://chefs-connect.nl/evenementen' },
  openGraph: {
    title: 'Fine Dining Catering & Exclusieve Evenementen | Chefs Connect',
    description: 'Verhef uw zakelijke of particuliere evenement met onze fine dining catering op locatie. Culinaire meesterwerken door topchefs, tot in de puntjes verzorgd.',
    url: 'https://chefs-connect.nl/evenementen',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const cateringSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodService',
  name: 'Chefs Connect Fine Dining Catering',
  description: 'Exclusieve fine dining catering en private dining ervaringen op locatie voor zakelijke en particuliere evenementen.',
  servesCuisine: 'Fine Dining, Haute Cuisine',
  provider: { '@type': 'Organization', name: 'Chefs Connect' },
};

export default function EvenementenPage() {
  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringSchema) }}
      />
      <HeroSection />
      <IntroSection />
      <FineDiningSection />
      <SignatureMenuSection />
      <EventTypesSection />
      <CarefreeSection />
      <WhyChooseUsSection />
      <ContactSection />
    </main>
  );
}
