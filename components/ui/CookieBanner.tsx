'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Small delay before showing to avoid flash
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(cookieConsent);
        setPreferences(saved);
        // Here you would initialize analytics/marketing scripts based on preferences
        if (saved.analytics) {
          initializeAnalytics();
        }
        if (saved.marketing) {
          initializeMarketing();
        }
      } catch (e) {
        console.error('Error parsing cookie preferences:', e);
      }
    }
  }, []);

  const initializeAnalytics = () => {
    // Initialize Google Analytics or other analytics
    console.log('Analytics initialized');
    // Example: gtag('config', 'GA_MEASUREMENT_ID');
  };

  const initializeMarketing = () => {
    // Initialize marketing pixels (Facebook, LinkedIn, etc.)
    console.log('Marketing initialized');
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Initialize allowed tracking
    if (prefs.analytics) {
      initializeAnalytics();
    }
    if (prefs.marketing) {
      initializeMarketing();
    }
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
            onClick={() => !showSettings && rejectAll()}
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[101] p-4 md:p-6"
          >
            <div className="max-w-6xl mx-auto">
              <div className="bg-white border-2 border-gold/30 shadow-2xl overflow-hidden">
                {!showSettings ? (
                  // Main Banner
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                          <Cookie className="w-6 h-6 text-gold" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-2xl md:text-3xl text-brown mb-3">
                          Wij respecteren jouw privacy
                        </h3>
                        <p className="font-inter text-sm md:text-base text-brown/80 leading-relaxed mb-4">
                          Wij gebruiken cookies om jouw ervaring op onze website te verbeteren en om onze diensten 
                          te optimaliseren. Essentiële cookies zijn nodig voor de basisfunctionaliteit. Analytische 
                          en marketing cookies helpen ons de website te verbeteren en relevante content te tonen.
                        </p>
                        <p className="font-inter text-xs text-brown/60">
                          Meer informatie vind je in ons{' '}
                          <Link href="/cookies" className="text-gold hover:underline">
                            cookiebeleid
                          </Link>
                          {' '}en{' '}
                          <Link href="/privacy" className="text-gold hover:underline">
                            privacyverklaring
                          </Link>
                          .
                        </p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={acceptAll}
                        className="flex-1 px-6 py-3 bg-gold text-cream font-inter text-sm uppercase tracking-wider hover:bg-gold/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        <Check className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Accepteer alles
                      </button>
                      <button
                        onClick={rejectAll}
                        className="flex-1 px-6 py-3 bg-brown/10 text-brown font-inter text-sm uppercase tracking-wider hover:bg-brown/20 transition-all duration-300"
                      >
                        Alleen noodzakelijk
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="px-6 py-3 border-2 border-brown/20 text-brown font-inter text-sm uppercase tracking-wider hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Aanpassen
                      </button>
                    </div>
                  </div>
                ) : (
                  // Settings Panel
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-playfair text-2xl md:text-3xl text-brown">
                        Cookie voorkeuren
                      </h3>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="w-8 h-8 rounded-full bg-brown/10 hover:bg-brown/20 flex items-center justify-center transition-colors"
                      >
                        <X className="w-4 h-4 text-brown" />
                      </button>
                    </div>

                    <div className="space-y-4 mb-6">
                      {/* Necessary Cookies */}
                      <div className="p-4 bg-cream border-l-4 border-gold">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-6 bg-gold rounded-full flex items-center justify-end px-1">
                              <div className="w-4 h-4 bg-cream rounded-full"></div>
                            </div>
                            <div>
                              <h4 className="font-inter text-sm font-semibold text-brown">
                                Noodzakelijke cookies
                              </h4>
                              <p className="font-inter text-xs text-brown/60">Altijd actief</p>
                            </div>
                          </div>
                        </div>
                        <p className="font-inter text-xs text-brown/70 mt-2">
                          Deze cookies zijn essentieel voor de basisfunctionaliteit van de website 
                          en kunnen niet worden uitgeschakeld.
                        </p>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="p-4 bg-white border border-brown/10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() =>
                                setPreferences({ ...preferences, analytics: !preferences.analytics })
                              }
                              className={`w-10 h-6 rounded-full flex items-center transition-all duration-300 ${
                                preferences.analytics
                                  ? 'bg-gold justify-end'
                                  : 'bg-brown/20 justify-start'
                              } px-1`}
                            >
                              <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                            </button>
                            <div>
                              <h4 className="font-inter text-sm font-semibold text-brown">
                                Analytische cookies
                              </h4>
                              <p className="font-inter text-xs text-brown/60">Optioneel</p>
                            </div>
                          </div>
                        </div>
                        <p className="font-inter text-xs text-brown/70 mt-2">
                          Helpen ons te begrijpen hoe bezoekers onze website gebruiken via anonieme statistieken.
                        </p>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="p-4 bg-white border border-brown/10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() =>
                                setPreferences({ ...preferences, marketing: !preferences.marketing })
                              }
                              className={`w-10 h-6 rounded-full flex items-center transition-all duration-300 ${
                                preferences.marketing
                                  ? 'bg-gold justify-end'
                                  : 'bg-brown/20 justify-start'
                              } px-1`}
                            >
                              <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                            </button>
                            <div>
                              <h4 className="font-inter text-sm font-semibold text-brown">
                                Marketing cookies
                              </h4>
                              <p className="font-inter text-xs text-brown/60">Optioneel</p>
                            </div>
                          </div>
                        </div>
                        <p className="font-inter text-xs text-brown/70 mt-2">
                          Worden gebruikt voor gerichte marketing en om relevante advertenties te tonen.
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={saveCustomPreferences}
                        className="flex-1 px-6 py-3 bg-gold text-cream font-inter text-sm uppercase tracking-wider hover:bg-gold/90 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        Voorkeuren opslaan
                      </button>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="px-6 py-3 border-2 border-brown/20 text-brown font-inter text-sm uppercase tracking-wider hover:border-gold transition-all duration-300"
                      >
                        Annuleren
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
