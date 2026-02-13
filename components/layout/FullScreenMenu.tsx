'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Ik zoek horeca personeel', href: '/zoek-personeel' },
  { label: 'Ik ben een horecaspecialist', href: '/horecaspecialist' },
  { label: 'Ik organiseer een evenement', href: '/evenementen' },
  { label: 'Over ons', href: '/over-ons' },
  { label: 'Contact', href: '/contact' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const closeButtonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  // Block body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-brown"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <nav className="h-full flex flex-col items-center justify-center">
            <motion.ul
              className="space-y-4 md:space-y-6 lg:space-y-8 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  variants={itemVariants}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block font-playfair text-3xl md:text-5xl lg:text-6xl font-light text-cream hover:text-gold transition-colors duration-300 relative group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-gold origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Close Button (X) under menu items */}
            <motion.button
              onClick={onClose}
              className="mt-8 md:mt-12 lg:mt-16 flex items-center justify-center text-cream hover:text-gold transition-colors duration-300"
              variants={closeButtonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" />
            </motion.button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

