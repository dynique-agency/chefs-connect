import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import PhilosophyFocus from '@/components/home/PhilosophyFocus';
// import ServicesGrid from '@/components/home/ServicesGrid';
import Reviews from '@/components/home/Reviews';
import AboutSection from '@/components/home/AboutSection';
import ContactForm from '@/components/home/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <PhilosophyFocus />
      {/* <ServicesGrid /> */}
      <Reviews />
      <AboutSection />
      <ContactForm />
    </main>
  );
}

