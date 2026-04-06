import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chefs Connect — Links',
  description: 'Chefs Connect: Premium horecafreelancers, exclusieve evenementen en fine dining catering.',
  icons: { icon: '/faviconchefsconnect.png' },
  openGraph: {
    title: 'Chefs Connect — Links',
    description: 'Chefs Connect: Premium horecafreelancers, exclusieve evenementen en fine dining catering.',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
