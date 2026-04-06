'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe } from 'lucide-react';
import PremiumStaffingPopup from '@/components/ui/PremiumStaffingPopup';

const links = [
  {
    id: 1,
    label: 'Ik ben een horeca professional',
    sublabel: 'Meld je aan als freelance chef of bediening',
    href: '/horecaspecialist',
    external: false,
    accent: false,
    image: '/horecaspecialist-hero.png',
    imageAlt: 'Horeca professional',
  },
  {
    id: 2,
    label: 'Ik zoek horeca-freelancers',
    sublabel: 'Vind snel en betrouwbaar vakkundig personeel',
    href: '/zoek-personeel',
    external: false,
    accent: true,
    image: '/zoek-personeel-hero.png',
    imageAlt: 'Zoek personeel',
  },
  {
    id: 3,
    label: 'Ik organiseer een evenement',
    sublabel: 'Fine dining catering van het hoogste niveau',
    href: '/evenementen',
    external: false,
    accent: false,
    image: '/connect-events-dining-logo.png',
    imageAlt: 'Connect Event & Dining',
    imageLogo: true,
  },
  {
    id: 4,
    label: 'Neem contact op',
    sublabel: 'Direct in gesprek met ons team',
    href: '/contact',
    external: false,
    accent: false,
    image: '/contact-service.png',
    imageAlt: 'Contact',
  },
];

export default function LinksPage() {
  useEffect(() => {
    // Apply fonts from parent domain
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap';
    document.head.appendChild(link);
  }, []);

  return (
    <main
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        background: 'linear-gradient(160deg, #2C1810 0%, #1a0e08 40%, #0f0804 100%)',
        fontFamily: '"Inter", "Arial", sans-serif',
      }}
    >
      <PremiumStaffingPopup showAfterMs={2000} />
      {/* Ambient glow effects */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '70vw',
            height: '70vw',
            maxWidth: '500px',
            maxHeight: '500px',
            background: 'radial-gradient(circle, rgba(201,169,97,0.08) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '20%',
            width: '40vw',
            height: '40vw',
            maxWidth: '300px',
            maxHeight: '300px',
            background: 'radial-gradient(circle, rgba(201,169,97,0.05) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
      </div>

      <div
        className="relative mx-auto px-5 py-10 pb-16 flex flex-col items-center"
        style={{ maxWidth: '440px', zIndex: 1 }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <div style={{ position: 'relative', width: '120px', height: '120px' }}>
            <Image
              src="/faviconchefsconnect.png"
              alt="Chefs Connect"
              fill
              className="object-contain"
              priority
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{
            width: '40px',
            height: '1px',
            background: 'rgba(201,169,97,0.4)',
            margin: '16px 0 28px',
          }}
        />

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: '11px',
            color: 'rgba(250,248,243,0.35)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '14px',
            alignSelf: 'flex-start',
            width: '100%',
          }}
        >
          Waar ben je naar op zoek?
        </motion.p>

        {/* Link cards */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {links.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.45 + index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link
                href={link.href}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <motion.div
                  whileHover={{ scale: 1.015, y: -1 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  style={{
                    background: link.accent
                      ? 'linear-gradient(135deg, rgba(201,169,97,0.18) 0%, rgba(201,169,97,0.08) 100%)'
                      : 'rgba(250,248,243,0.04)',
                    border: link.accent
                      ? '1px solid rgba(201,169,97,0.5)'
                      : '1px solid rgba(250,248,243,0.08)',
                    borderRadius: '4px',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'stretch',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    transition: 'border-color 0.3s ease, background 0.3s ease',
                  }}
                  className="link-card"
                >
                  {/* Thumbnail */}
                  <div
                    style={{
                      width: link.imageLogo ? '72px' : '68px',
                      flexShrink: 0,
                      position: 'relative',
                      background: link.imageLogo
                        ? 'rgba(44,24,16,0.9)'
                        : 'rgba(0,0,0,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={link.image}
                      alt={link.imageAlt}
                      fill={!link.imageLogo}
                      width={link.imageLogo ? 52 : undefined}
                      height={link.imageLogo ? 20 : undefined}
                      className={link.imageLogo ? undefined : 'object-cover'}
                      style={link.imageLogo
                        ? { objectFit: 'contain', position: 'relative', width: '52px', height: 'auto', opacity: 0.9 }
                        : { opacity: 0.55 }
                      }
                    />
                    {!link.imageLogo && (
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: link.accent
                            ? 'linear-gradient(to right, rgba(201,169,97,0.15), transparent)'
                            : 'linear-gradient(to right, rgba(44,24,16,0.4), transparent)',
                        }}
                      />
                    )}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0, padding: '16px 14px' }}>
                    <p
                      style={{
                        fontFamily: link.accent ? '"Playfair Display", serif' : '"Inter", sans-serif',
                        fontSize: link.accent ? '16px' : '14px',
                        fontWeight: 400,
                        color: link.accent ? '#C9A961' : '#FAF8F3',
                        margin: '0 0 4px 0',
                        lineHeight: 1.3,
                        letterSpacing: link.accent ? '0.01em' : '0',
                        fontStyle: link.accent ? 'italic' : 'normal',
                      }}
                    >
                      {link.label}
                    </p>
                    <p
                      style={{
                        fontSize: '11px',
                        color: 'rgba(250,248,243,0.4)',
                        margin: 0,
                        lineHeight: 1.4,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {link.sublabel}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div style={{ display: 'flex', alignItems: 'center', paddingRight: '16px' }}>
                    <ArrowUpRight
                      size={15}
                      style={{
                        color: link.accent ? '#C9A961' : 'rgba(250,248,243,0.25)',
                        flexShrink: 0,
                      }}
                    />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Website link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          style={{ marginTop: '20px', width: '100%' }}
        >
          <Link
            href="/"
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 20px',
                border: '1px solid rgba(201,169,97,0.2)',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              <Globe size={14} style={{ color: 'rgba(201,169,97,0.6)' }} />
              <span
                style={{
                  fontSize: '12px',
                  color: 'rgba(201,169,97,0.6)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                chefs-connect.nl
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Social buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          style={{ width: '100%', marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <motion.a
            href="https://www.instagram.com/chefsconnectnl"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.015, y: -1 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '15px 20px',
              background: 'linear-gradient(135deg, rgba(131,58,180,0.15) 0%, rgba(253,29,29,0.1) 50%, rgba(252,176,69,0.1) 100%)',
              border: '1px solid rgba(200,100,120,0.25)',
              borderRadius: '4px',
              textDecoration: 'none',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
            }}
          >
            <InstagramIcon />
            <span style={{ fontSize: '13px', color: 'rgba(250,248,243,0.7)', letterSpacing: '0.06em' }}>
              Volg ons op Instagram
            </span>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/people/Chefs-Connect/61572633120372/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.015, y: -1 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '15px 20px',
              background: 'rgba(24,119,242,0.08)',
              border: '1px solid rgba(24,119,242,0.2)',
              borderRadius: '4px',
              textDecoration: 'none',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
            }}
          >
            <FacebookIcon />
            <span style={{ fontSize: '13px', color: 'rgba(250,248,243,0.7)', letterSpacing: '0.06em' }}>
              Volg ons op Facebook
            </span>
          </motion.a>
        </motion.div>

        {/* Footer credit */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          style={{
            fontSize: '11px',
            color: 'rgba(250,248,243,0.2)',
            marginTop: '36px',
            letterSpacing: '0.08em',
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} Chefs Connect
        </motion.p>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #1a0e08; }
        .link-card:hover {
          border-color: rgba(201,169,97,0.3) !important;
        }
      `}</style>
    </main>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(220,120,140,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="rgba(220,120,140,0.9)" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(24,119,242,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
