'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, RefreshCw, ChevronRight, ArrowRight } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   Shared layout + prose building blocks for Kennisbank articles.
   The chrome (breadcrumb, hero, TOC, author, CTA, related) lives here; each
   article passes its own body via the exported prose components below so the
   typography stays consistent without a global typography plugin.
   ────────────────────────────────────────────────────────────────────────── */

export interface ArticleAuthor {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface ArticleLayoutProps {
  category: string;
  title: string;
  intro: string;
  readingTime: string;
  updated: string;
  author: ArticleAuthor;
  breadcrumb: { label: string; href: string }[];
  toc: { id: string; label: string }[];
  children: ReactNode;
  cta?: { heading: string; text: string; buttonLabel: string; buttonHref: string };
  related?: { href: string; label: string; description: string }[];
}

export default function ArticleLayout({
  category,
  title,
  intro,
  readingTime,
  updated,
  author,
  breadcrumb,
  toc,
  children,
  cta,
  related,
}: ArticleLayoutProps) {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <article>
        <header className="relative px-6 pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Kruimelpad" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 font-inter text-xs text-brown/50">
                {breadcrumb.map((crumb, i) => (
                  <li key={crumb.href} className="flex items-center gap-2">
                    {i > 0 && <ChevronRight className="w-3 h-3 text-brown/30" />}
                    {i < breadcrumb.length - 1 ? (
                      <Link href={crumb.href} className="hover:text-gold transition-colors duration-300">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-brown/70">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold block mb-6">
                {category}
              </span>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-brown leading-[1.1] mb-8">
                {title}
              </h1>
              <p className="font-inter text-lg md:text-xl text-brown-medium leading-relaxed mb-10">
                {intro}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pb-8 border-b border-brown/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={author.image} alt={author.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <p className="font-inter text-sm font-semibold text-brown leading-tight">{author.name}</p>
                    <p className="font-inter text-xs text-brown/50 leading-tight">{author.role}</p>
                  </div>
                </div>
                <span className="flex items-center gap-2 font-inter text-xs text-brown/50">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  {readingTime}
                </span>
                <span className="flex items-center gap-2 font-inter text-xs text-brown/50">
                  <RefreshCw className="w-3.5 h-3.5 text-gold" />
                  {updated}
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Body */}
        <div className="px-6 pb-8">
          <div className="max-w-3xl mx-auto">
            {/* Table of contents */}
            {toc.length > 0 && (
              <nav
                aria-label="In dit artikel"
                className="bg-brown/5 border border-brown/10 p-6 md:p-8 mb-12"
              >
                <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-4">In dit artikel</p>
                <ol className="space-y-2.5">
                  {toc.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="group flex items-baseline gap-3 font-inter text-sm text-brown-medium hover:text-gold transition-colors duration-300"
                      >
                        <span className="font-playfair text-gold/50 text-sm">{String(i + 1).padStart(2, '0')}</span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {/* Article prose */}
            <div className="space-y-6">{children}</div>
          </div>
        </div>

        {/* CTA */}
        {cta && (
          <div className="px-6 py-12">
            <div className="max-w-3xl mx-auto">
              <div className="relative bg-brown p-8 md:p-12 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
                <h2 className="font-playfair text-2xl md:text-3xl font-light text-cream mb-4">{cta.heading}</h2>
                <p className="font-inter text-base text-cream/70 leading-relaxed mb-8 max-w-xl">{cta.text}</p>
                <Link
                  href={cta.buttonHref}
                  className="group inline-flex items-center gap-3 px-8 py-4 font-inter text-sm uppercase tracking-wider text-brown bg-gold hover:bg-gold-dark transition-all duration-500"
                >
                  <span>{cta.buttonLabel}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Author block */}
        <div className="px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-6 items-start bg-cream border border-brown/10 p-8">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src={author.image} alt={author.name} fill className="object-cover" sizes="80px" />
              </div>
              <div>
                <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-2">Geschreven door</p>
                <p className="font-playfair text-xl text-brown mb-1">{author.name}</p>
                <p className="font-inter text-sm text-brown/50 mb-3">{author.role}</p>
                {author.bio && <p className="font-inter text-sm text-brown-medium leading-relaxed mb-4">{author.bio}</p>}
                <Link
                  href="/over-ons"
                  className="inline-flex items-center gap-2 font-inter text-sm text-brown hover:text-gold transition-colors duration-300"
                >
                  <span>Maak kennis met het team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related && related.length > 0 && (
          <div className="px-6 py-12 bg-brown/[0.03] border-t border-brown/10">
            <div className="max-w-3xl mx-auto">
              <p className="font-inter text-xs uppercase tracking-[0.3em] text-gold mb-8">Lees verder</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block bg-cream border border-brown/10 p-6 hover:border-gold/40 transition-colors duration-300"
                  >
                    <h3 className="font-playfair text-lg text-brown mb-2 group-hover:text-gold transition-colors duration-300">
                      {item.label}
                    </h3>
                    <p className="font-inter text-sm text-brown-medium leading-relaxed">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </main>
  );
}

/* ── Prose building blocks ─────────────────────────────────────────────────
   Used inside an article body for consistent typography.
   ────────────────────────────────────────────────────────────────────────── */

export function Lead({ children }: { children: ReactNode }) {
  return <p className="font-inter text-lg text-brown leading-relaxed">{children}</p>;
}

export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="font-playfair text-3xl md:text-4xl font-light text-brown leading-tight pt-8 scroll-mt-24">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-playfair text-xl md:text-2xl font-light text-brown leading-snug pt-2">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="font-inter text-base md:text-lg text-brown-medium leading-relaxed">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="space-y-3 pl-1">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 font-inter text-base md:text-lg text-brown-medium leading-relaxed">
      <span className="text-gold mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" />
      <span>{children}</span>
    </li>
  );
}

export function TipBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-gold/10 border-l-2 border-gold p-6 my-2">
      <p className="font-inter text-sm font-semibold uppercase tracking-wider text-brown mb-2">{title}</p>
      <div className="font-inter text-base text-brown-medium leading-relaxed">{children}</div>
    </div>
  );
}

export function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: { label: string; values: string[] }[];
}) {
  return (
    <div className="overflow-x-auto my-2">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b-2 border-brown/15">
            <th className="font-inter text-xs uppercase tracking-wider text-brown/50 py-3 pr-4 align-bottom" />
            {columns.map((col) => (
              <th
                key={col}
                className="font-playfair text-lg text-brown py-3 px-4 align-bottom"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-brown/10">
              <td className="font-inter text-sm font-semibold text-brown py-4 pr-4 align-top">{row.label}</td>
              {row.values.map((val, i) => (
                <td key={i} className="font-inter text-sm text-brown-medium leading-relaxed py-4 px-4 align-top">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
