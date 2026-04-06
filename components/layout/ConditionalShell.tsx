'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { LazyCustomCursor, LazyCookieBanner } from '@/lib/lazy-components';

const STANDALONE_ROUTES = ['/links'];

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.some(route => pathname === route || pathname.startsWith(route + '/'));

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <>
      <LoadingScreen />
      <LazyCustomCursor />
      <div className="noise-overlay" />
      <Navigation />
      {children}
      <Footer />
      <FloatingCTA />
      <LazyCookieBanner />
    </>
  );
}
