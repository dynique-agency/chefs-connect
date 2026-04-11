'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X } from 'lucide-react';

const WHATSAPP_NUMBER = '31641875803';
const WHATSAPP_MESSAGE = 'Hallo! Ik heb dringend horeca personeel nodig en zou graag meer informatie willen.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const PHONE_NUMBER = '+31 6 41875803';
const PHONE_HREF = 'tel:+31641875803';

interface PremiumStaffingPopupProps {
  showAfterMs?: number;
}

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  exit:   { opacity: 0, transition: { duration: 0.4, ease: [0.55, 0, 1, 0.45] } },
};

const modalVariants: Variants = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.6, ease: EASE_LUXURY },
  },
  exit:    { opacity: 0, y: 14, scale: 0.98,
    transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] },
  },
};

const stagger = (i: number, base = 0.25): Variants => ({
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.5, delay: base + i * 0.09, ease: EASE_LUXURY },
  },
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const stats = [
  { value: '150+',   label: 'Professionals' },
  { value: '< 24u', label: 'Reactietijd'    },
  { value: '100+',   label: 'Tevreden klanten' },
];

export default function PremiumStaffingPopup({ showAfterMs = 3000 }: PremiumStaffingPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), showAfterMs);
    return () => clearTimeout(t);
  }, [showAfterMs]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    if (isVisible) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      setTimeout(() => dialogRef.current?.focus(), 60);
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isVisible, close]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-end sm:items-center justify-center px-3 sm:px-4 pb-4 sm:pb-0"
          variants={backdropVariants}
          initial="hidden" animate="visible" exit="exit"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brown/85 backdrop-blur-md"
            onClick={close}
            aria-hidden="true"
          />

          {/* Ambient glow */}
          <div
            className="absolute w-[420px] h-[420px] rounded-full pointer-events-none hidden sm:block"
            style={{
              background: 'radial-gradient(circle, rgba(201,169,97,0.11) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Modal */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-heading"
            tabIndex={-1}
            variants={modalVariants}
            initial="hidden" animate="visible" exit="exit"
            className="relative w-full max-w-[440px] outline-none"
          >
            {/* Corner brackets */}
            <span className="absolute top-0 left-0 w-5 h-5 border-t-[1.5px] border-l-[1.5px] border-gold/45 pointer-events-none" />
            <span className="absolute top-0 right-0 w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-gold/45 pointer-events-none" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-b-[1.5px] border-l-[1.5px] border-gold/45 pointer-events-none" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-b-[1.5px] border-r-[1.5px] border-gold/45 pointer-events-none" />

            {/* Card */}
            <div
              className="relative overflow-hidden border border-gold/[0.14]"
              style={{
                background: 'linear-gradient(160deg, #1d0f07 0%, #180c05 55%, #1a0e06 100%)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,169,97,0.06), inset 0 1px 0 rgba(201,169,97,0.11)',
              }}
            >
              {/* Top shimmer line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />

              {/* Radial light */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(201,169,97,0.07) 0%, transparent 70%)' }}
              />

              {/* Noise */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative px-6 pt-7 pb-6 sm:px-9 sm:pt-9 sm:pb-8" style={{ hyphens: 'none', wordBreak: 'normal' }}>

                {/* Close */}
                <button
                  onClick={close}
                  aria-label="Sluiten"
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-cream/25 hover:text-gold/70 transition-colors duration-300 group"
                >
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" strokeWidth={1.5} />
                </button>

                {/* Live badge */}
                <motion.div
                  variants={stagger(0, 0.2)}
                  initial="hidden" animate="visible"
                  className="flex items-center gap-2 mb-4 sm:mb-5"
                >
                  <span className="relative flex h-[7px] w-[7px] flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60" />
                    <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#25D366]" />
                  </span>
                  <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-cream/40">
                    Nu beschikbaar · Vandaag nog reageren
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  id="popup-heading"
                  variants={stagger(1, 0.2)}
                  initial="hidden" animate="visible"
                  className="font-playfair font-light leading-[1.15] text-cream text-[1.45rem] sm:text-[1.9rem] mb-1"
                >
                  Zit je nu{' '}
                  <span className="text-gold italic">zonder personeel?</span>
                </motion.h2>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.65, delay: 0.42, ease: EASE_LUXURY }}
                  className="origin-left h-px mt-4 mb-4"
                  style={{ background: 'linear-gradient(to right, rgba(201,169,97,0.5), transparent)' }}
                />

                {/* Body */}
                <motion.p
                  variants={stagger(2, 0.2)}
                  initial="hidden" animate="visible"
                  className="font-inter text-[13px] sm:text-[14px] leading-[1.7] text-cream/50 mb-5 sm:mb-6"
                >
                  Elke service zonder de juiste mensen kost je{' '}
                  <span className="text-cream/75 font-medium">omzet en reputatie</span>.
                  {' '}Ons netwerk van{' '}
                  <span className="text-gold font-medium">150+ horecaprofessionals</span>{' '}
                  staat klaar. Wij schakelen vandaag nog.
                </motion.p>

                {/* Stats row */}
                <motion.div
                  variants={stagger(3, 0.2)}
                  initial="hidden" animate="visible"
                  className="grid grid-cols-3 mb-5 sm:mb-6"
                  style={{ borderTop: '1px solid rgba(201,169,97,0.1)', borderBottom: '1px solid rgba(201,169,97,0.1)' }}
                >
                  {stats.map(({ value, label }, i) => (
                    <div
                      key={label}
                      className="py-3 sm:py-3.5 text-center"
                      style={{ borderRight: i < 2 ? '1px solid rgba(201,169,97,0.1)' : undefined }}
                    >
                      <p className="font-playfair text-base sm:text-lg text-gold font-light leading-none mb-1">{value}</p>
                      <p className="font-inter text-[9px] sm:text-[10px] uppercase tracking-[0.13em] text-cream/30">{label}</p>
                    </div>
                  ))}
                </motion.div>

                {/* WhatsApp CTA */}
                <motion.div
                  variants={stagger(4, 0.2)}
                  initial="hidden" animate="visible"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-2.5 w-full py-[14px] font-inter text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.13em] overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-[#1aad4e]" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#1aad4e] via-[#22c55e] to-[#1aad4e] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }}
                    />
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ boxShadow: '0 0 28px rgba(34,197,94,0.35)' }}
                    />
                    <WhatsAppIcon className="relative z-10 w-4 h-4 sm:w-[17px] sm:h-[17px] text-white flex-shrink-0" />
                    <span className="relative z-10 text-white">Direct reageren via WhatsApp</span>
                  </a>
                </motion.div>

                {/* Secondary: phone */}
                <motion.div
                  variants={stagger(5, 0.2)}
                  initial="hidden" animate="visible"
                  className="flex items-center justify-center gap-3 mt-3.5"
                >
                  <span className="h-px flex-1 bg-cream/[0.06]" />
                  <a
                    href={PHONE_HREF}
                    className="font-inter text-[11px] text-cream/30 hover:text-gold/60 transition-colors duration-300 tracking-wide whitespace-nowrap"
                  >
                    Of bel: <span className="text-cream/45">{PHONE_NUMBER}</span>
                  </a>
                  <span className="h-px flex-1 bg-cream/[0.06]" />
                </motion.div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
