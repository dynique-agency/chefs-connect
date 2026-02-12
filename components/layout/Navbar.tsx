'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onMenuToggle: (isOpen: boolean) => void;
  isMenuOpen: boolean;
}

export default function Navbar({ onMenuToggle, isMenuOpen }: NavbarProps) {
  const handleMenuClick = () => {
    onMenuToggle(!isMenuOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:py-8 
                 bg-gradient-to-b from-brown-medium/30 via-brown-medium/20 to-transparent 
                 backdrop-blur-xl backdrop-saturate-150
                 border-b border-gold/10
                 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]
                 transition-all duration-500"
      initial={false}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Home Button */}
        <Link href="/" className="block">
          <motion.div
            className="relative w-40 h-10 md:w-48 md:h-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Image
              src="/chefsconnectlogo.png"
              alt="Chefs Connect Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 160px, 192px"
            />
          </motion.div>
        </Link>

        {/* Menu Button */}
        <motion.button
          onClick={handleMenuClick}
          className="flex items-center gap-3 font-inter text-base md:text-lg uppercase tracking-wider text-gold hover:text-gold-dark transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{isMenuOpen ? 'SLUIT' : 'MENU'}</span>
          {isMenuOpen ? (
            <X className="w-6 h-6 md:w-7 md:h-7" />
          ) : (
            <Menu className="w-6 h-6 md:w-7 md:h-7" />
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
}

