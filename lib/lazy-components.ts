import dynamic from 'next/dynamic';

// Lazy load non-critical components for better performance
export const LazyInstagramFeed = dynamic(() => import('@/components/home/InstagramFeed'));

export const LazyContactForm = dynamic(() => import('@/components/home/ContactForm'));

export const LazyCustomCursor = dynamic(() => import('@/components/ui/CustomCursor'));

export const LazyCookieBanner = dynamic(() => import('@/components/ui/CookieBanner'));
