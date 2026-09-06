import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina niet gevonden',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-cream flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-inter text-xs uppercase tracking-[0.3em] text-gold mb-6">
          404
        </p>

        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-light text-brown leading-tight mb-6">
          Pagina niet gevonden
        </h1>

        <div className="h-px bg-gold/30 w-24 mx-auto mb-8" />

        <p className="font-inter text-lg text-brown-medium leading-relaxed max-w-md mx-auto mb-12">
          De pagina die je zoekt bestaat niet meer of is verplaatst. Ga terug naar de homepage of kies een van de opties hieronder.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 font-inter text-sm uppercase tracking-wider text-cream bg-brown border-2 border-brown hover:bg-gold hover:border-gold transition-all duration-500"
          >
            Terug naar home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 font-inter text-sm uppercase tracking-wider text-brown border-2 border-brown/30 hover:border-gold hover:bg-gold/5 transition-all duration-500"
          >
            Neem contact op
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto">
          <Link href="/zoek-personeel" className="font-inter text-xs text-brown-medium hover:text-gold transition-colors duration-300 uppercase tracking-wider">
            Personeel verbinden
          </Link>
          <Link href="/evenementen" className="font-inter text-xs text-brown-medium hover:text-gold transition-colors duration-300 uppercase tracking-wider">
            Evenementen
          </Link>
          <Link href="/horecaspecialist" className="font-inter text-xs text-brown-medium hover:text-gold transition-colors duration-300 uppercase tracking-wider">
            Specialist
          </Link>
        </div>
      </div>
    </main>
  );
}
