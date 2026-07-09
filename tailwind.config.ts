import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A961',
        'gold-dark': '#B8935A',
        // Same warm-gold hue, darkened for WCAG AA text contrast (4.5:1) on
        // cream backgrounds. Use for readable gold-colored text on light
        // sections; the standard `gold` stays on dark/brown sections where
        // it already passes.
        'gold-accessible': '#7D5F24',
        white: '#FFFFFF',
        cream: '#FAF8F3',
        'cream-dark': '#F5EFE6',
        brown: '#2C1810',
        'brown-medium': '#4A3428',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
