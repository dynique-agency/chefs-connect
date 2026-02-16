'use client';

import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Instagram posts
const instagramPosts = [
  {
    id: 1,
    image: '/instagram/reel1.png',
    url: 'https://www.instagram.com/chefsconnectnl/', // Vervang met daadwerkelijke reel URL
    type: 'reel' as const,
  },
  {
    id: 2,
    image: '/instagram/reel2.png',
    url: 'https://www.instagram.com/chefsconnectnl/', // Vervang met daadwerkelijke reel URL
    type: 'reel' as const,
  },
  {
    id: 3,
    image: '/instagram/post1.png',
    url: 'https://www.instagram.com/chefsconnectnl/', // Vervang met daadwerkelijke post URL
    type: 'post' as const,
  },
];

export default function InstagramFeed() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-brown/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E1306C] via-[#C13584] to-[#833AB4] flex items-center justify-center">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <span className="font-inter text-xs md:text-sm uppercase tracking-[0.3em] text-gold">
              Volg Ons Op Instagram
            </span>
          </motion.div>

          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-light text-brown leading-tight mb-4">
            Achter de schermen
          </h2>

          <p className="font-inter text-base md:text-lg text-brown/70 max-w-2xl mx-auto mb-6">
            Ontdek onze dagelijkse werkzaamheden, culinaire creaties en de professionals achter ChefsConnect
          </p>

          <motion.a
            href="https://www.instagram.com/chefsconnectnl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-inter text-sm font-medium text-brown hover:text-gold transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>@chefsconnectnl</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[3/4] overflow-hidden bg-cream shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Instagram Image */}
              <div className="absolute inset-0">
                <Image
                  src={post.image}
                  alt={`Instagram ${post.type === 'reel' ? 'Reel' : 'Post'} ${post.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E1306C]/90 via-[#C13584]/90 to-[#833AB4]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20">
                <div className="text-center text-white">
                  <Instagram className="w-12 h-12 mx-auto mb-3" />
                  <p className="font-inter text-sm uppercase tracking-wider font-medium">
                    {post.type === 'reel' ? 'Bekijk Reel' : 'Bekijk Post'}
                  </p>
                </div>
              </div>

              {/* Reel indicator */}
              {post.type === 'reel' && (
                <div className="absolute top-4 right-4 z-30">
                  <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-brown"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.823 1l2.974 5.002h-5.58l-2.65-4.971c.206-.013.419-.022.642-.027L8.55 1zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6.007 6.007 0 011.596 2.82l.07.295h-4.629L15.15 1zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 013.942-4.53zm9.735 12.834l-4.545-2.624a.909.909 0 00-1.356.668l-.008.12v5.248a.91.91 0 001.255.84l.109-.053 4.545-2.624a.909.909 0 00.1-1.507l-.1-.068-4.545-2.624zm-14.2-6.209h21.964l.015.36.003.189v6.899c0 3.061-.755 4.469-1.888 5.64-1.151 1.114-2.5 1.856-5.33 1.909l-.334.003H8.551c-3.06 0-4.467-.755-5.64-1.889-1.114-1.15-1.854-2.498-1.908-5.33L1 15.45V8.551l.003-.189z"/>
                    </svg>
                  </div>
                </div>
              )}

              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/chefsconnectnl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] text-white font-inter text-sm uppercase tracking-wider hover:shadow-xl hover:scale-105 transition-all duration-500 group relative overflow-hidden"
          >
            <Instagram className="w-5 h-5" />
            <span className="relative z-10">Volg ons op Instagram</span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-cream z-0 pointer-events-none" />
    </section>
  );
}
