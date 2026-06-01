import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chefs Connect — Links',
  description: 'Chefs Connect: Premium horecafreelancers, exclusieve evenementen en fine dining catering.',
  icons: { icon: '/faviconchefsconnect.png' },
  openGraph: {
    title: 'Chefs Connect — Links',
    description: 'Chefs Connect: Premium horecafreelancers, exclusieve evenementen en fine dining catering.',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
