import HeroSection from '@/components/evenementen/HeroSection';
import IntroSection from '@/components/evenementen/IntroSection';
import FineDiningSection from '@/components/evenementen/FineDiningSection';
import SignatureMenuSection from '@/components/evenementen/SignatureMenuSection';
import EventTypesSection from '@/components/evenementen/EventTypesSection';
import CarefreeSection from '@/components/evenementen/CarefreeSection';
import WhyChooseUsSection from '@/components/evenementen/WhyChooseUsSection';
import ContactSection from '@/components/evenementen/ContactSection';

export default function EvenementenPage() {
  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
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
