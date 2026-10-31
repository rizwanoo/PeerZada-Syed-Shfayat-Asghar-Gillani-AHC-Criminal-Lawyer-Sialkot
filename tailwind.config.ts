import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Bright Editorial Mode & Brand Palette */
        ivory: {
          DEFAULT: '#F3F0E9',
          light: '#FAF8F5',
          cream: '#EFECE4',
        },
        obsidian: {
          DEFAULT: '#080F17',
          deep: '#04080D',
          border: '#14202E',
        },
        midnight: {
          DEFAULT: '#101D2B',
          soft: '#16283B',
        },
        platinum: {
          DEFAULT: '#D5D9DE',
          light: '#EAECEF',
        },
        slateBlue: {
          DEFAULT: '#26394B',
          hover: '#31475D',
        },
        steel: {
          DEFAULT: '#A8B4C0',
          dark: '#7D8C9C',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        display: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
