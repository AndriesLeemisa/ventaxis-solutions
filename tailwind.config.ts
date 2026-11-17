import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#06080E',
          surface: '#0F1420',
          navy: '#10243A',
        },
        royal: {
          DEFAULT: '#1E40AF',
          bright: '#2563EB',
          ventaxis: '#1479D4',
        },
        airflow: {
          cyan: '#20B8CE',
        },
        crimson: {
          DEFAULT: '#991B1B',
        },
        slate: {
          canvas: '#F8FAFC',
          surface: '#EEF3F7',
        },
      },
      boxShadow: {
        executive: '0 20px 50px -12px rgba(6, 8, 14, 0.25)',
        'executive-sm': '0 8px 24px -6px rgba(16, 36, 58, 0.12)',
        glow: '0 0 32px -4px rgba(32, 184, 206, 0.35)',
      },
      fontFamily: {
        display: ['Manrope', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
