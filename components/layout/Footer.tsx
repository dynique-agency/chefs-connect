'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();
  
  // Don't show scroll-up button on pages that have FloatingCTA (all except /contact)
  const showScrollUpButton = pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Scroll to Top Button - Only on contact page */}
      {showScrollUpButton && (
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gold hover:bg-gold-dark text-brown rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          )}
        </AnimatePresence>
      )}

      {/* Footer */}
      <footer className="relative bg-brown border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h3 className="font-playfair text-3xl md:text-4xl font-light text-cream mb-6">
                Chefs Connect
              </h3>
              <p className="font-inter text-base text-cream/70 leading-relaxed max-w-md mb-6">
                Wij leveren <span className="text-gold italic">chefs en bediening</span>, snel en professioneel.
                <br />
                Van <span className="text-gold italic">private dining</span> tot <span className="text-gold italic">grote events</span>.
                <br />
                Van <span className="text-gold italic">brasserie</span> tot <span className="text-gold italic">fine dining</span>.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:info@chefs-connect.nl"
                  className="flex items-center gap-3 font-inter text-sm text-cream/80 hover:text-gold transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@chefs-connect.nl</span>
                </a>
                <a
                  href="tel:+31641875803"
                  className="flex items-center gap-3 font-inter text-sm text-cream/80 hover:text-gold transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>+31 6 41875803</span>
                </a>
                <div className="flex items-center gap-3 font-inter text-sm text-cream/80">
                  <MapPin className="w-4 h-4" />
                  <span>Gasthuisstraat 3.1 Lanaken</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-inter text-sm uppercase tracking-[0.2em] text-gold mb-6">
                Navigatie
              </h4>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/#about"
                  className="font-inter text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  Over Ons
                </Link>
                <Link
                  href="/zoek-personeel"
                  className="font-inter text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  Zoek Personeel
                </Link>
                <Link
                  href="/horecaspecialist"
                  className="font-inter text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  Horecaspecialist
                </Link>
                <Link
                  href="/evenementen"
                  className="font-inter text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  Evenementen
                </Link>
              </nav>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gold/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-inter text-xs text-cream/50">
                © {new Date().getFullYear()} Chefs Connect. Alle rechten voorbehouden.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
                <Link
                  href="/privacy"
                  className="font-inter text-xs text-cream/50 hover:text-gold transition-colors duration-300"
                >
                  Privacy
                </Link>
                <Link
                  href="/cookies"
                  className="font-inter text-xs text-cream/50 hover:text-gold transition-colors duration-300"
                >
                  Cookies
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem('cookieConsent');
                    window.location.reload();
                  }}
                  className="font-inter text-xs text-cream/50 hover:text-gold transition-colors duration-300"
                >
                  Cookie voorkeuren
                </button>
                <Link
                  href="/terms"
                  className="font-inter text-xs text-cream/50 hover:text-gold transition-colors duration-300"
                >
                  Voorwaarden
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

