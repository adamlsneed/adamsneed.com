/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: '#090d14',
        panel: '#151d2d',
        accent: '#14b8a6',
        accentSoft: 'rgba(20,184,166,0.16)',
        accentBlue: 'rgb(80,180,255)',
        accentPurple: 'rgb(160,120,255)',
        textMain: '#e7edf8',
        textMuted: '#8494ad',
        borderTone: '#2b3850'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(20,184,166,0.25), 0 18px 40px rgba(3,8,20,0.65)'
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono Variable', 'JetBrains Mono', 'ui-monospace', 'monospace']
      }
    }
  },
  plugins: []
};
