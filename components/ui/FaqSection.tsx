'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
}

export default function FaqSection({
  title = 'Veelgestelde vragen',
  subtitle,
  items,
}: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-cream px-6">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-inter text-xs text-gold uppercase tracking-[0.25em] mb-4 block">
            FAQ
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-light text-brown leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="font-inter text-base text-brown/60 mt-5 max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="divide-y divide-brown/10">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-playfair text-lg md:text-xl font-light text-brown group-hover:text-gold transition-colors duration-300 leading-snug">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full border border-brown/20 group-hover:border-gold flex items-center justify-center transition-colors duration-300">
                    {isOpen
                      ? <Minus className="w-3 h-3 text-gold" />
                      : <Plus className="w-3 h-3 text-brown/50 group-hover:text-gold transition-colors duration-300" />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-inter text-base text-brown/70 leading-relaxed pb-8 pr-10">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
