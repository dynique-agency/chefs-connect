'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { submitToFormSubmit } from '@/lib/form-submit';
import FormNotification from '@/components/ui/FormNotification';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; title: string; messages: string[] } | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const result = await submitToFormSubmit(formData, {
        subject: 'Chefs Connect: Evenement Aanvraag',
      });

      if (result.success) {
        router.push('/bedankt');
      } else {
        const errorMessages = result.error?.split('\n') || ['Er is een fout opgetreden. Probeer het later opnieuw.'];
        setNotification({
          type: 'error',
          title: 'Controleer je gegevens',
          messages: errorMessages,
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Unexpected form error:', error);
      setNotification({
        type: 'error',
        title: 'Er is iets misgegaan',
        messages: ['Er is een onverwachte fout opgetreden. Probeer het opnieuw of neem contact op via telefoon: +31 6 41875803'],
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 px-6 bg-cream">
      {notification && (
        <FormNotification
          type={notification.type}
          title={notification.title}
          messages={notification.messages}
          onClose={() => setNotification(null)}
        />
      )}

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown mb-8 leading-tight text-balance break-words">
            Maak van jouw evenement een{' '}
            <span className="text-gold italic">culinaire herinnering</span>
          </h2>
          <p className="font-inter text-lg md:text-xl text-brown-medium leading-relaxed max-w-3xl mx-auto mb-4 break-words">
            Wil je jouw gasten verrassen met een gastronomische ervaring die verwachtingen overtreft?
          </p>
          <p className="font-inter text-lg md:text-xl text-brown-medium leading-relaxed max-w-3xl mx-auto break-words">
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

            <input
              type="text"
              name="_gotcha"
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
          className="font-inter text-base text-brown-medium text-center mt-8 break-words"
        >
          Neem vandaag nog contact op en ontdek wat wij voor jouw evenement kunnen betekenen.
        </motion.p>
      </div>
    </section>
  );
}
