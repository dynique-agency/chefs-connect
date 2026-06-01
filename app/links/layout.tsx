import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chefs Connect — Links',
  description: 'Chefs Connect: Premium horecafreelancers, exclusieve evenementen en fine dining catering.',
  icons: { icon: '/faviconchefsconnect.png' },
  alternates: { canonical: 'https://chefs-connect.nl/links' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Chefs Connect — Links',
    description: 'Chefs Connect: Premium horecafreelancers, exclusieve evenementen en fine dining catering.',
    url: 'https://chefs-connect.nl/links',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
