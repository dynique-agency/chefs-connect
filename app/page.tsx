import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import PhilosophyFocus from '@/components/home/PhilosophyFocus';
import Reviews from '@/components/home/Reviews';
import AboutSection from '@/components/home/AboutSection';
import { LazyInstagramFeed, LazyContactForm } from '@/lib/lazy-components';

export default function Home() {
  return (
    <main className="min-h-screen">
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

