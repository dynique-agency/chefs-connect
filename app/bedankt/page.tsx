'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function BedanktPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const checkmarkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.3,
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.5,
      },
    },
  };

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-cream flex items-center justify-center px-6 py-24">
      <motion.div
        className="max-w-2xl mx-auto text-center relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Success Icon */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Outer Circle */}
          <motion.div
            className="absolute w-32 h-32 border-2 border-gold/30 rounded-full"
            variants={circleVariants}
          />
          
          {/* Inner Circle with Checkmark */}
          <motion.div
            className="relative w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center"
            variants={checkmarkVariants}
          >
            <CheckCircle2 className="w-16 h-16 text-gold" strokeWidth={1.5} />
          </motion.div>

          {/* Animated Rings */}
          <motion.div
            className="absolute inset-0 border-2 border-gold/20 rounded-full"
            animate={{
              scale: [1, 1.3, 1.3],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        </div>

        {/* Main Message */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-light text-brown leading-tight mb-6">
            Bedankt
          </h1>
          <div className="h-px bg-gold/30 w-32 mx-auto mb-8" />
          <p className="font-inter text-xl md:text-2xl text-brown-medium leading-relaxed max-w-xl mx-auto">
            Uw bericht is succesvol verzonden. We nemen{' '}
            <span className="text-gold font-medium">binnen 24 uur</span> contact met u op.
          </p>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <p className="font-inter text-base text-brown-medium/70 max-w-md mx-auto">
            Ons team bekijkt uw aanvraag zorgvuldig en komt zo snel mogelijk bij u terug met een passende oplossing.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 px-10 py-4 font-inter text-sm uppercase tracking-[0.2em] text-brown border-2 border-brown/30 hover:border-gold hover:bg-gold/5 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 font-medium">Terug naar home</span>
            <ArrowRight className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="/#about"
            className="group relative inline-flex items-center gap-3 px-10 py-4 font-inter text-sm uppercase tracking-[0.2em] text-brown border-2 border-brown/20 hover:border-brown/40 transition-all duration-500"
          >
            <span className="relative z-10 font-medium">Meer over ons</span>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 left-10 w-1 h-32 bg-gold/10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-1 h-32 bg-gold/10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </motion.div>
    </main>
  );
}

