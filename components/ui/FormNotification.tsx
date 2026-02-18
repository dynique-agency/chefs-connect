'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export interface NotificationProps {
  type: 'success' | 'error';
  title: string;
  messages: string[];
  onClose: () => void;
}

export default function FormNotification({ type, title, messages, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-close after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for animation
    }, 10000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const isError = type === 'error';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ 
            type: 'spring',
            stiffness: 500,
            damping: 30
          }}
          className="fixed top-8 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-md px-4"
        >
          <div className={`
            relative overflow-hidden
            ${isError ? 'bg-red-50' : 'bg-green-50'}
            rounded-lg shadow-2xl
          `}>
            {/* Accent bar */}
            <div className={`
              absolute top-0 left-0 w-full h-1
              ${isError ? 'bg-red-500' : 'bg-green-500'}
            `} />

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className={`
                  flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                  ${isError ? 'bg-red-100' : 'bg-green-100'}
                `}>
                  {isError ? (
                    <AlertCircle className="w-6 h-6 text-red-600" strokeWidth={2} />
                  ) : (
                    <CheckCircle2 className="w-6 h-6 text-green-600" strokeWidth={2} />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className={`
                    font-playfair text-xl font-medium mb-3
                    ${isError ? 'text-red-900' : 'text-green-900'}
                  `}>
                    {title}
                  </h3>

                  {/* Messages */}
                  <ul className="space-y-2">
                    {messages.map((message, index) => (
                      <li
                        key={index}
                        className={`
                          flex items-start gap-2 font-inter text-sm leading-relaxed
                          ${isError ? 'text-red-800' : 'text-green-800'}
                        `}
                      >
                        <span className={`
                          flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2
                          ${isError ? 'bg-red-500' : 'bg-green-500'}
                        `} />
                        <span>{message}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className={`
                    flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                    transition-colors duration-200
                    ${isError 
                      ? 'hover:bg-red-100 text-red-600' 
                      : 'hover:bg-green-100 text-green-600'
                    }
                  `}
                  aria-label="Sluiten"
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>

              {/* Progress bar */}
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 10, ease: 'linear' }}
                className={`
                  absolute bottom-0 left-0 h-1
                  ${isError ? 'bg-red-300' : 'bg-green-300'}
                `}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
