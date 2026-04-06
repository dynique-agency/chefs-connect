'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Mail } from 'lucide-react';
import { useMenu } from '@/contexts/MenuContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const pathname = usePathname();
  const { isMenuOpen } = useMenu();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show button on contact page or when menu is open
  if (pathname === '/contact' || isMenuOpen) {
    return null;
  }

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Try to find contact section by id first
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const sectionTop = contactSection.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
      return;
    }

    // If no #contact, find the form
    const contactForm = document.querySelector('form[id="contact"]') || 
                       document.querySelector('section:has(form) form') ||
                       document.querySelector('form');
    
    if (contactForm) {
      const formTop = contactForm.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: formTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          onClick={scrollToContact}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}
          className="group relative px-4 md:px-5 py-3 md:py-4 bg-gold hover:bg-gold-dark text-brown border-2 border-gold flex items-center gap-2 md:gap-2.5 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          <Mail className="w-4 md:w-5 h-4 md:h-5 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-inter text-xs md:text-sm font-medium uppercase tracking-wider">
            Contact
          </span>
          {/* Shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-brown/20 to-transparent" />
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold-dark/30 to-gold/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
