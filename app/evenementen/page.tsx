'use client';

import { useState, useRef, useEffect } from 'react';
import { Sparkles, Award, Users, Utensils, CheckCircle2, Star, ChefHat, ArrowRight, Calendar, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { submitToWeb3Forms } from '@/lib/form-submit';
import FormNotification from '@/components/ui/FormNotification';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EvenementenPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; title: string; messages: string[] } | null>(null);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // GSAP Scroll Reveal
  useEffect(() => {
    const elements = [textRef1.current, textRef2.current].filter(Boolean);
    
    elements.forEach((element) => {
      if (!element) return;
      
      const split = new SplitType(element as HTMLElement, {
        types: 'chars',
      });

      gsap.set(split.chars, {
        opacity: 0,
        y: 15,
        scale: 0.95,
      });

      gsap.to(split.chars, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'power3.out',
        stagger: {
          amount: 0.6,
          from: 'start',
        },
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 40%',
          scrub: 0.3,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const result = await submitToWeb3Forms(formData, {
        subject: 'Chefs Connect: Evenement Aanvraag',
      });

      if (result.success) {
        router.push('/bedankt');
      } else {
        const errorMessages = result.error?.split('\n') || ['Er is een fout opgetreden. Probeer het later opnieuw.'];
        setNotification({
          type: 'error',
          title: 'Controleer je gegevens',
          messages: errorMessages
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Unexpected form error:', error);
      setNotification({
        type: 'error',
        title: 'Er is iets misgegaan',
        messages: ['Er is een onverwachte fout opgetreden. Probeer het opnieuw of neem contact op via telefoon: +31 6 41875803']
      });
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Notification */}
      {notification && (
        <FormNotification
          type={notification.type}
          title={notification.title}
          messages={notification.messages}
          onClose={() => setNotification(null)}
        />
      )}
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
        <div className="absolute inset-0">
          <Image
            src="/choice-events.png"
            alt="Connect Event & Dining"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown/80 via-brown/60 to-brown/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-12 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/1]">
              <Image
                src="/connect-events-dining-logo.png"
                alt="Connect Event & Dining"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-tight mb-8"
          >
            Een culinaire totaalbeleving
            <br />
            <span className="text-gold italic">van het hoogste niveau</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-inter text-lg md:text-xl text-cream/90 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Wij combineren <span className="font-semibold text-gold">gastronomie, gastvrijheid en perfectie</span> in uitvoering, zodat jij zorgeloos kunt genieten samen met je gasten.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="group inline-flex items-center gap-3 px-10 py-5 font-inter text-sm uppercase tracking-wider text-brown bg-gold hover:bg-gold-dark transition-all duration-500"
          >
            <span>Plan je evenement</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Sparkles className="w-14 h-14 text-gold" />
              <div className="h-px bg-gold/30 w-32" />
              
              <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-light text-brown leading-[1.1]">
                Ik organiseer een <span className="text-gold italic">evenement</span>
              </h2>

              <div className="space-y-6 font-inter text-base md:text-lg text-brown-medium leading-relaxed">
                <p ref={textRef1}>
                  Sta je aan de vooravond van een bijzonder evenement? Of het nu gaat om een <span className="font-semibold text-brown">bedrijfsfeest, bruiloft, zakelijke lunch, healthy brunch</span> of een exclusieve <span className="font-semibold text-gold">private dining</span>, met Connect Event & Dining kies je voor een culinaire totaalbeleving van het hoogste niveau.
                </p>
                <p ref={textRef2}>
                  Wij combineren <span className="font-semibold text-gold">gastronomie, gastvrijheid en perfectie</span> in uitvoering, zodat jij zorgeloos kunt genieten samen met je gasten.
                </p>
              </div>
            </motion.div>

            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full">
                <Image
                  src="/event-service-detail.png"
                  alt="Fine dining experience"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain brightness-[0.85]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 border-2 border-gold/30 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fine Dining Catering Section */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <ChefHat className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-8">
              Fine dining catering
              <br />
              <span className="text-gold italic">op topniveau</span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-cream/80 max-w-4xl mx-auto leading-relaxed mb-6">
              Met meer dan <span className="font-semibold text-gold">20 jaar ervaring</span> in de top van de gastronomie brengen wij restaurantkwaliteit naar jouw locatie. Geen standaard catering, maar een verfijnde ervaring waarin smaak, presentatie en service samenkomen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Gault&Millau Badge - Ultra Premium */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-1 bg-cream backdrop-blur-sm border-2 border-gold p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
              >
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold opacity-50" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold opacity-50" />
                
                {/* Gault&Millau Logo SVG */}
                <svg viewBox="0 0 260.9 151.4" className="w-32 h-auto mb-6 opacity-90">
                  <path fill="#C9A961" d="M239.6,35c7.3,1,11,5,11,8.8c0,2.6-1.9,4.4-4.6,4.4c-2.4,0-4.4-1.9-4.4-4.4c0-2.8,2-4,2-5.2
                    C243.3,37.4,242.5,35.6,239.6,35 M235.3,35c-6.5,1-9.3,7.1-9.3,14.4c0,6.2,0,11,5.2,12.8c-8.3-1.7-14.1-5.9-14.1-12.9
                    C217.1,39.9,224.9,35.5,235.3,35 M235.3,96.5c-12.4-0.9-20.6-6.3-20.6-17.6c0-8.9,6.2-13.3,16-15.2c-5.5,2.1-7.2,7.4-7.2,15.2
                    C223.6,87.3,226.8,94.7,235.3,96.5" />
                  <path fill="#C9A961" d="M248.2,64.4c-8.6,2.8-16.3,4.8-16.3,8.9c0,0-0.5-0.6-0.6-1.6c-0.8-7.1,6.9-9.5,15.2-12.3c9.3-3,13.7-4.6,13.7-8.5
                    c0,0,0.5,0.7,0.6,1.5c0.7,6.3-5.2,9.5-12.2,11.9 M240.6,96.5c6.5-1,9.3-7.1,9.3-14.4c0-6.2,0-11-5.2-12.8
                    c8.3,1.7,14.1,5.9,14.1,12.9C258.8,91.7,251,96,240.6,96.5 M59.1,66.9c-4.4,1.6-13,4-22.3,4c-11.7,0-20.6-3-27.2-9.3
                    c-6.2-5.8-9.8-15-9.6-25.5c0-21.9,15.6-36,38.6-36c8.5,0,15.2,1.7,18.4,3.3l-2.8,10.2c-3.8-1.6-8.5-3-15.7-3
                    c-14.8,0-25.2,8.7-25.2,24.9c0,15.7,9.6,25.1,24.1,25.1c4.5,0,7.9-0.6,9.5-1.4V41.7H34.5v-10H59L59.1,66.9L59.1,66.9z M92.7,45.6
                    c-8.9-0.2-17.4,1.7-17.4,9.3c0,4.9,3.1,7.2,7.2,7.2c5,0,8.7-3.3,9.9-6.9c0.2-0.9,0.5-1.9,0.5-2.8L92.7,45.6L92.7,45.6z M94.3,70
                    l-0.8-5.6h-0.3c-3.1,4-8.4,6.7-14.8,6.7c-10.1,0-15.7-7.3-15.7-14.9c0-12.7,11.2-19.1,29.8-18.9v-0.8c0-3.3-1.4-8.7-10.2-8.7
                    c-4.9,0-10.1,1.5-13.5,3.7l-2.4-8.3c3.7-2.2,10.2-4.4,18.1-4.4c16,0,20.7,10.2,20.7,21v18.1c0,4.5,0.2,8.9,0.7,12.1H94.3L94.3,70z
                    M157,55c0,5.9,0.2,10.9,0.5,15h-11.2l-0.6-7.6h-0.2c-2.2,3.6-7.1,8.7-16,8.7c-9.2,0-17.4-5.5-17.4-21.9V19.9h12.7v27.2
                    c0,8.4,2.7,13.7,9.4,13.7c5,0,8.4-3.6,9.6-6.7c0.5-1.2,0.7-2.4,0.7-4V19.9h12.7L157,55L157,55z M164.6,70h12.8V0h-12.8V70z
                    M201.3,5.6v14.3h12.1v9.5h-12.1v22.1c0,6,1.6,9.3,6.5,9.3c1.6,0,3.4-0.2,4.9-0.6l0.2,9.6c-1.9,0.7-5.1,1.3-9.2,1.3
                    c-4.6,0-8.5-1.5-10.9-4.1c-2.7-2.9-4-7.4-4-13.9V29.4h-7.2V20h7.2V8.7L201.3,5.6L201.3,5.6z M63.5,122.1
                    c-0.5-8.9-0.9-19.8-0.8-29.1h-0.3c-2.4,8.9-5.1,17.8-8.3,26.5l-10,30h-9.8L25,119.9c-2.7-8.8-5-17.9-7-27h-0.2
                    c-0.3,9.9-0.7,19.6-1.3,29.5L15,150.3H3.2L7.8,81h16.6l9.1,27.9c2.4,7.9,4.5,15.9,6.4,24.1h0.3c2-8.1,4.3-16.2,6.9-24.2L56.6,81
                    h16.5l4.1,69.3H64.8L63.5,122.1L63.5,122.1z M88.4,150.3h12.8v-50.1H88.4V150.3z M101.8,86.3c0,3.8-2.8,6.7-7.2,6.7
                    c-4.2,0-7-3-7-6.7c0-4,2.9-6.9,7.1-6.9C99,79.4,101.7,82.3,101.8,86.3z M112.6,150.3h12.8V81h-12.8V150.3z M136.9,150.3h12.8V81
                    h-12.8V150.3z M187.9,125.8c-8.9-0.2-17.4,1.7-17.4,9.3c0,4.9,3.1,7.2,7.2,7.2c5,0,8.7-3.3,9.9-6.9c0.2-0.9,0.5-1.9,0.5-2.8
                    C187.9,132.8,187.9,125.8,187.9,125.8z M189.5,150.3l-0.8-5.6h-0.3c-3.1,4-8.4,6.7-14.8,6.7c-10.1,0-15.7-7.3-15.7-14.9
                    c0-12.7,11.2-19.1,29.8-18.9v-0.8c0-3.3-1.3-8.7-10.2-8.7c-4.9,0-10.1,1.5-13.5,3.7l-2.4-8.3c3.7-2.2,10.2-4.4,18.1-4.4
                    c16,0,20.7,10.2,20.7,21v18.1c0,4.5,0.2,8.9,0.7,12.1C201,150.3,189.5,150.3,189.5,150.3z M256.3,135.3c0,5.9,0.2,10.9,0.5,15
                    h-11.2l-0.6-7.6h-0.2c-2.2,3.6-7.1,8.7-16,8.7c-9.2,0-17.4-5.5-17.4-21.9v-29.4h12.7v27.2c0,8.4,2.7,13.7,9.3,13.7
                    c5,0,8.4-3.6,9.6-6.7c0.5-1.2,0.7-2.4,0.7-4v-30.2h12.7L256.3,135.3L256.3,135.3z" />
                </svg>

                {/* Score Display */}
                <div className="mb-4">
                  <div className="font-playfair text-6xl font-light text-gold mb-2">14,5</div>
                  <div className="font-inter text-sm uppercase tracking-widest text-brown/70">/ 20</div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>

                <p className="font-inter text-xs uppercase tracking-wider text-brown/60">
                  Officieel Bekroond
                </p>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-50" />
              </motion.div>

              {/* Chef Info */}
              <div className="lg:col-span-2 bg-cream/10 backdrop-blur-sm border border-gold/30 p-8 md:p-12">
                <div className="flex items-start gap-6 mb-8">
                  <Award className="w-16 h-16 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-playfair text-2xl md:text-3xl text-cream mb-4">
                      Onder leiding van chef-kok <span className="text-gold italic">Reda Hamite</span>
                    </h3>
                    <p className="font-inter text-base md:text-lg text-cream/90 leading-relaxed mb-4">
                      Nemen wij je gasten mee op een culinaire reis die ze niet snel zullen vergeten.
                    </p>
                    <div className="inline-flex items-center gap-3 bg-cream/10 px-4 py-2 border border-gold/20">
                      <ChefHat className="w-5 h-5 text-gold" />
                      <span className="font-inter text-sm text-cream/80">Al 20 jaar gastronomisch topniveau</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-cream/20 pt-8">
                  <p className="font-inter text-lg text-cream/90 leading-relaxed">
                    Verwacht <span className="font-semibold text-gold">creatieve gerechten</span>, premium ingrediënten en een service die tot in de details klopt.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Menu's Section */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Utensils className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown mb-8">
              Signature menu's die je evenement
              <br />
              <span className="text-gold italic">naar een hoger niveau tillen</span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-brown-medium max-w-4xl mx-auto leading-relaxed">
              Onze exclusieve fine dining menu's zijn zorgvuldig samengesteld voor opdrachtgevers die alleen genoegen nemen met het beste.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-brown/5 border border-brown/10 p-8 md:p-12"
          >
            <p className="font-inter text-xl text-brown-medium leading-relaxed text-center">
              Elk menu wordt bereid met uitsluitend de <span className="font-semibold text-gold">beste seizoensproducten</span> en kan volledig worden afgestemd op jouw wensen en het karakter van het evenement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Evenementen Types Section */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Calendar className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-8 leading-tight">
              Van zakelijke lunch tot
              <br />
              <span className="text-gold italic">exclusieve private dining</span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
              Connect Event & Dining is er niet alleen voor grootschalige evenementen. Juist ook in intieme settings maken wij het verschil.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {[
              'High-end bedrijfsfeesten',
              'Bruiloften',
              'Zakelijke lunches',
              'Luxe broodjeslunches',
              'Healthy brunches',
              'Executive dinners',
              'VIP-events'
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream/10 backdrop-blur-sm border border-gold/30 p-6 flex items-start gap-4 hover:bg-cream/15 transition-colors duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-inter text-base text-cream">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-2xl md:text-3xl text-gold italic text-center"
          >
            Of het nu gaat om twintig gasten of een compleet gezelschap, wij creëren een ervaring die past bij het moment.
          </motion.p>
        </div>
      </section>

      {/* Volledig Ontzorgd Section */}
      <section className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Users className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown mb-8">
              Volledig ontzorgd
              <br />
              <span className="text-gold italic">van concept tot uitvoering</span>
            </h2>
            <p className="font-inter text-xl text-brown-medium max-w-3xl mx-auto leading-relaxed">
              Een succesvol evenement vraagt om meer dan alleen goed eten. Daarom begeleiden wij het volledige traject.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
          >
            {[
              'Menu-ontwikkeling op maat',
              'Professionele chefs en gastvrij serviceteam',
              'Styling en presentatie',
              'Strakke planning',
              'Opbouw en afhandeling',
              'Persoonlijke begeleiding'
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brown/5 border border-brown/10 p-6 flex items-center gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0" />
                <span className="font-inter text-base text-brown-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-xl text-brown-medium text-center leading-relaxed"
          >
            Alles wordt tot in detail verzorgd, zodat jij je volledig kunt richten op je gasten.
          </motion.p>
        </div>
      </section>

      {/* Waarom Kiezen Section */}
      <section className="relative py-20 md:py-32 px-6 bg-brown">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Star className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-8">
              Waarom kiezen voor
              <br />
              <span className="text-gold italic">Connect Event & Dining?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: Award, text: '20 jaar ervaring in de topgastronomie' },
              { icon: Star, text: 'Bekroonde chef en culinair team' },
              { icon: Sparkles, text: 'Fine dining op locatie' },
              { icon: CheckCircle2, text: 'Alleen premium ingrediënten' },
              { icon: Users, text: 'Persoonlijke service' },
              { icon: CheckCircle2, text: 'Volledig maatwerk' },
              { icon: Briefcase, text: 'Geschikt voor zowel zakelijk als privé' }
            ].map(({ icon: Icon, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream/10 backdrop-blur-sm border border-gold/30 p-8 text-center hover:bg-cream/15 transition-colors duration-300"
              >
                <Icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="font-inter text-base text-cream">{text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-2xl md:text-3xl text-gold italic text-center"
          >
            Wij geloven dat uitzonderlijke momenten uitzonderlijk eten verdienen.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown mb-8 leading-tight">
              Maak van jouw evenement een{' '}
              <span className="text-gold italic">culinaire herinnering</span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-brown-medium leading-relaxed max-w-3xl mx-auto mb-4">
              Wil je jouw gasten verrassen met een gastronomische ervaring die verwachtingen overtreft?
            </p>
            <p className="font-inter text-lg md:text-xl text-brown-medium leading-relaxed max-w-3xl mx-auto">
              Kies voor fine dining catering die klasse, smaak en beleving samenbrengt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brown/5 border border-brown/10 p-8 md:p-12"
          >
            <form id="contact" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Telefoon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  />
                </div>

                <div>
                  <label htmlFor="event-type" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Type evenement
                  </label>
                  <input
                    type="text"
                    id="event-type"
                    name="event-type"
                    placeholder="Bijv. Bruiloft, Bedrijfsfeest, etc."
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Gewenste datum
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                    Aantal gasten
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    placeholder="Bijv. 50"
                    className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-inter text-sm uppercase tracking-wider text-brown/70 mb-2">
                  Vertel ons over je evenement *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-brown/20 focus:border-gold focus:outline-none transition-colors font-inter text-brown resize-none"
                  placeholder="Beschrijf je evenement, je wensen en eventuele speciale voorkeuren..."
                />
              </div>

              {/* Honeypot field for spam protection */}
              <input
                type="text"
                name="botcheck"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full md:w-auto px-10 py-4 font-inter text-sm uppercase tracking-wider text-cream bg-brown border-2 border-brown hover:bg-gold hover:border-gold transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <span>{isSubmitting ? 'Verzenden...' : 'Vraag offerte aan'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-base text-brown-medium text-center mt-8"
          >
            Neem vandaag nog contact op en ontdek wat wij voor jouw evenement kunnen betekenen.
          </motion.p>
        </div>
      </section>

    </main>
  );
}
