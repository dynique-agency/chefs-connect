'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Check, Facebook, Instagram } from 'lucide-react';
import { submitToFormSubmit } from '@/lib/form-submit';
import { submitToSheet } from '@/lib/sheet-submit';

type FieldStep = {
  id: 'naam' | 'restaurant' | 'telefoon' | 'email';
  question: string;
  type: 'text' | 'tel' | 'email';
  placeholder: string;
  autoComplete: string;
  inputMode?: 'text' | 'tel' | 'email';
};

type ChoiceStep = {
  id: 'interesse';
  question: string;
  type: 'choice';
  choices: string[];
};

type Step = FieldStep | ChoiceStep;

const STEPS: Step[] = [
  { id: 'naam', question: 'Wat is je naam?', type: 'text', placeholder: 'Jouw naam', autoComplete: 'name' },
  { id: 'restaurant', question: 'En de naam van je restaurant of bedrijf?', type: 'text', placeholder: 'Naam van je zaak', autoComplete: 'organization' },
  { id: 'telefoon', question: 'Op welk nummer kunnen we je bereiken?', type: 'tel', placeholder: '06 12345678', autoComplete: 'tel', inputMode: 'tel' },
  { id: 'email', question: 'En je e-mailadres?', type: 'email', placeholder: 'jouw@email.nl', autoComplete: 'email', inputMode: 'email' },
  {
    id: 'interesse',
    question: 'Waar ben je vooral in geinteresseerd?',
    type: 'choice',
    choices: ['Bediening', 'Keuken', 'Events en catering', 'Anders'],
  },
];

type Values = Record<Step['id'], string>;

const EMPTY_VALUES: Values = { naam: '', restaurant: '', telefoon: '', email: '', interesse: '' };

function isValidValue(step: Step, value: string): boolean {
  if (step.type === 'choice') return true;
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (step.type === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  if (step.type === 'tel') return /^[+]?[\d\s\-()]+$/.test(trimmed) && trimmed.replace(/\D/g, '').length >= 10;
  return trimmed.length >= 2;
}

const EASE = [0.22, 1, 0.36, 1] as const;
// Fast-in / expo-out pair for the character flip, matched to what two independent
// Awwwards references (typeform-style reveals, kinetic-typography sites) use for
// this exact kind of per-letter rotate: a quick snap away, a slower settle in.
const FLIP_EXIT_EASE = [0.55, 0, 1, 0.45] as const;
const FLIP_ENTER_EASE = [0.16, 1, 0.3, 1] as const;

function FlipChars({ text, mode }: { text: string; mode: 'exit' | 'enter' }) {
  const chars = text.split('').map((c) => (c === ' ' ? ' ' : c));
  return (
    <>
      {chars.map((char, i) =>
        mode === 'exit' ? (
          <motion.span
            key={i}
            initial={{ opacity: 1, rotateX: 0 }}
            animate={{ opacity: 0, rotateX: -90 }}
            transition={{ duration: 0.35, ease: FLIP_EXIT_EASE, delay: i * 0.02 }}
            style={{ display: 'inline-block', transformOrigin: '50% 100%' }}
          >
            {char}
          </motion.span>
        ) : (
          <motion.span
            key={i}
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.45, ease: FLIP_ENTER_EASE, delay: i * 0.02 }}
            style={{ display: 'inline-block', transformOrigin: '50% 100%' }}
          >
            {char}
          </motion.span>
        )
      )}
    </>
  );
}

function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [showFirst, setShowFirst] = useState(true);
  const skippedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    async function sequence() {
      await wait(900);
      if (cancelled) return;
      setShowFirst(false);
      await wait(450 + 700);
      if (cancelled) return;
      onComplete();
    }

    void sequence();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSkip = () => {
    if (skippedRef.current) return;
    skippedRef.current = true;
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brown"
      exit={{ opacity: 0, transition: { duration: 0.5, ease: EASE } }}
      onClick={handleSkip}
      role="button"
      aria-label="Sla de intro over"
    >
      <div className="relative px-6 h-12 flex items-center justify-center" style={{ perspective: 1000 }}>
        {showFirst ? (
          <motion.p
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="absolute font-playfair italic text-3xl sm:text-4xl text-cream text-center whitespace-nowrap"
          >
            <FlipChars text="Let's connect" mode="exit" />
          </motion.p>
        ) : (
          <p className="absolute font-playfair text-3xl sm:text-4xl text-gold tracking-wide text-center whitespace-nowrap">
            <FlipChars text="ChefsConnect" mode="enter" />
          </p>
        )}
      </div>
      <span className="absolute bottom-10 left-1/2 -translate-x-1/2 font-inter text-[10px] uppercase tracking-[0.2em] text-cream/40">
        Tik om over te slaan
      </span>
    </motion.div>
  );
}

export default function BbbExperience() {
  const [showIntro, setShowIntro] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [values, setValues] = useState<Values>(EMPTY_VALUES);
  const [touched, setTouched] = useState(false);
  const [phase, setPhase] = useState<'active' | 'submitting' | 'success'>('active');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedInteresses, setSelectedInteresses] = useState<string[]>([]);
  const [andersText, setAndersText] = useState('');
  const [retryCooldown, setRetryCooldown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const step = STEPS[stepIndex];

  useEffect(() => {
    if (!showIntro && phase === 'active' && step.type !== 'choice') {
      inputRef.current?.focus();
    }
  }, [showIntro, phase, step]);

  const handleSubmit = useCallback(async (finalValues: Values) => {
    setPhase('submitting');
    setErrorMessage(null);

    submitToSheet(finalValues);

    const formData = new FormData();
    Object.entries(finalValues).forEach(([key, value]) => formData.append(key, value));
    formData.append('bericht', 'Nieuwe lead via de BBB-beurs');
    formData.append('_gotcha', '');

    try {
      const result = await submitToFormSubmit(formData, {
        subject: 'Chefs Connect: nieuwe lead via de BBB-beurs',
      });

      if (result.success) {
        setPhase('success');
      } else {
        setErrorMessage(result.error || 'Er is een fout opgetreden. Probeer het opnieuw.');
        setPhase('active');
        // form-submit.ts rejects any retry within 2s of the last attempt with a
        // generic "too many requests" message. A short client-side cooldown here
        // keeps the retry button disabled past that window, so a second tap after
        // a genuine network failure never trips that unrelated, confusing error.
        setRetryCooldown(true);
        setTimeout(() => setRetryCooldown(false), 2500);
      }
    } catch {
      setErrorMessage('Er is een onverwachte fout opgetreden. Bel ons: +31 6 41875803');
      setPhase('active');
      setRetryCooldown(true);
      setTimeout(() => setRetryCooldown(false), 2500);
    }
  }, []);

  const advance = useCallback(
    (overrideValue?: string) => {
      const currentValue = overrideValue ?? values[step.id];
      if (!isValidValue(step, currentValue)) {
        setTouched(true);
        return;
      }

      setValues((v) => ({ ...v, [step.id]: currentValue }));
      setErrorMessage(null);
      setDirection(1);
      setTouched(false);
      setStepIndex((i) => i + 1);
    },
    [step, values]
  );

  const toggleChoice = useCallback((choice: string) => {
    setSelectedInteresses((prev) => (prev.includes(choice) ? prev.filter((c) => c !== choice) : [...prev, choice]));
  }, []);

  const submitInteresse = useCallback(() => {
    const combined = selectedInteresses
      .map((c) => (c === 'Anders' && andersText.trim() ? `Anders: ${andersText.trim()}` : c))
      .join(', ');
    const nextValues: Values = { ...values, interesse: combined };
    setValues(nextValues);
    void handleSubmit(nextValues);
  }, [selectedInteresses, andersText, values, handleSubmit]);

  const goBack = useCallback(() => {
    if (stepIndex === 0) return;
    setDirection(-1);
    setTouched(false);
    setErrorMessage(null);
    setStepIndex((i) => i - 1);
  }, [stepIndex]);

  const progress = phase === 'success' ? 100 : (stepIndex / STEPS.length) * 100;
  const showsError = touched && !isValidValue(step, values[step.id]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  return (
    <div className="fixed inset-0 h-[100dvh] w-full bg-brown overflow-hidden flex flex-col">
      {/* Ambient, heavily dimmed brand photo. Deliberately not a full hero image:
          this is a form, legibility and focus matter more than atmosphere here. */}
      <div className="absolute inset-0 opacity-[0.14]">
        <Image src="/chef-action.png" alt="" fill priority className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-brown/50 via-brown/80 to-brown" />

      {/* Progress bar */}
      <div className="relative z-10 h-[3px] w-full bg-cream/10 flex-shrink-0">
        <motion.div
          className="h-full bg-gold"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: EASE }}
        />
      </div>

      {/* Back button */}
      {stepIndex > 0 && phase === 'active' && (
        <button
          type="button"
          onClick={goBack}
          aria-label="Vorige vraag"
          className="absolute top-6 left-4 z-20 p-3 text-cream/60 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}

      {/* Logo, small, top center */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 pt-6 pb-2 flex-shrink-0">
        <div className="relative w-[120px] aspect-[4167/656]">
          <Image src="/chefsconnectlogo.png" alt="Chefs Connect" fill className="object-contain" sizes="120px" />
        </div>
        {phase !== 'success' && (
          <span className="font-inter text-[10px] uppercase tracking-[0.15em] text-cream/40">
            Stap {stepIndex + 1} van {STEPS.length}
          </span>
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 min-h-0">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait" custom={direction}>
            {phase === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex flex-col items-center text-center gap-5"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-gold flex items-center justify-center"
                >
                  <Check className="w-8 h-8 text-brown" strokeWidth={2.5} />
                </motion.div>
                <h2 className="font-playfair text-3xl text-cream">
                  Bedankt{values.naam ? `, ${values.naam.split(' ')[0]}` : ''}!
                </h2>
                <p className="font-inter text-cream/70 leading-relaxed">
                  We hebben je gegevens ontvangen en nemen na de beurs snel contact met je op.
                </p>
                <div className="flex flex-col items-center gap-3 mt-2">
                  <p className="font-inter text-[11px] uppercase tracking-[0.15em] text-cream/40">
                    Bekijk ons ook op social media
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/chefsconnectnl"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chefs Connect op Instagram"
                      className="w-11 h-11 rounded-full border-2 border-cream/20 hover:border-gold flex items-center justify-center text-cream hover:text-gold transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/people/Chefs-Connect/61572633120372/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chefs Connect op Facebook"
                      className="w-11 h-11 rounded-full border-2 border-cream/20 hover:border-gold flex items-center justify-center text-cream hover:text-gold transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={step.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: EASE }}
              >
                <h1 className="font-playfair text-2xl sm:text-3xl text-cream text-center leading-snug mb-8">
                  {step.question}
                </h1>

                {step.type === 'choice' ? (
                  <div className="space-y-3">
                    {step.choices.map((choice) => {
                      const isSelected = selectedInteresses.includes(choice);
                      return (
                        <motion.button
                          key={choice}
                          type="button"
                          whileTap={{ scale: 0.96 }}
                          onClick={() => toggleChoice(choice)}
                          className={`w-full flex items-center justify-between gap-3 text-left px-6 py-4 border-2 font-inter text-base transition-colors duration-300 ${
                            isSelected ? 'border-gold bg-gold/10 text-gold' : 'border-cream/20 text-cream hover:border-gold'
                          }`}
                        >
                          <span>{choice}</span>
                          <span
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                              isSelected ? 'border-gold bg-gold' : 'border-cream/30'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 text-brown" strokeWidth={3} />}
                          </span>
                        </motion.button>
                      );
                    })}
                    <AnimatePresence>
                      {selectedInteresses.includes('Anders') && (
                        <motion.div
                          key="anders-wrap"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <input
                            type="text"
                            value={andersText}
                            onChange={(e) => setAndersText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                submitInteresse();
                              }
                            }}
                            placeholder="Vertel ons waar je aan denkt"
                            autoFocus
                            className="w-full bg-transparent border-0 border-b-2 border-cream/30 focus:border-gold focus:outline-none py-3 mt-1 font-inter text-base text-cream placeholder:text-cream/25 transition-colors"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <input
                    ref={inputRef}
                    type={step.type}
                    inputMode={step.inputMode}
                    autoComplete={step.autoComplete}
                    value={values[step.id]}
                    onChange={(e) => {
                      setValues((v) => ({ ...v, [step.id]: e.target.value }));
                      if (touched) setTouched(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        advance();
                      }
                    }}
                    placeholder={step.placeholder}
                    className="w-full bg-transparent border-0 border-b-2 border-cream/30 focus:border-gold focus:outline-none py-4 font-playfair text-2xl sm:text-3xl text-cream placeholder:text-cream/25 text-center transition-colors"
                  />
                )}

                {showsError && (
                  <p className="mt-4 text-center font-inter text-sm text-gold">
                    {step.type === 'email'
                      ? 'Vul een geldig e-mailadres in'
                      : step.type === 'tel'
                        ? 'Vul een geldig telefoonnummer in'
                        : 'Dit veld is verplicht'}
                  </p>
                )}

                {errorMessage && step.type === 'choice' && (
                  <p className="mt-4 text-center font-inter text-sm text-gold">{errorMessage}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom action, thumb zone */}
      {phase !== 'success' && (
        <div
          className="relative z-10 px-6 pt-4 flex-shrink-0"
          style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}
        >
          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            onClick={() => (step.type === 'choice' ? submitInteresse() : advance())}
            disabled={phase === 'submitting' || retryCooldown}
            className="group w-full py-4 bg-gold hover:bg-gold-dark text-brown font-inter text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
          >
            {phase === 'submitting'
              ? 'Verzenden...'
              : retryCooldown
                ? 'Even geduld...'
                : step.type === 'choice'
                  ? selectedInteresses.length > 0
                    ? 'Versturen'
                    : 'Overslaan'
                  : 'Volgende'}
            {phase !== 'submitting' && !retryCooldown && (
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            )}
          </motion.button>
          <p className="mt-4 text-center font-inter text-[11px] text-cream/40">
            Zie ons{' '}
            <a href="/privacy" className="underline hover:text-gold transition-colors">
              privacybeleid
            </a>
          </p>
        </div>
      )}

      <AnimatePresence>{showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}</AnimatePresence>
    </div>
  );
}
