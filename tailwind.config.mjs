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
        textMain: '#e7edf8',
        textMuted: '#9aa8bf',
        borderTone: '#2b3850'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(20,184,166,0.25), 0 18px 40px rgba(3,8,20,0.65)'
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono Variable', 'JetBrains Mono', 'ui-monospace', 'monospace']
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(233,69,96,0.2), transparent 38%), radial-gradient(circle at 80% 0%, rgba(47,128,237,0.18), transparent 42%), radial-gradient(circle at 60% 80%, rgba(58,200,153,0.11), transparent 42%)'
      }
    }
  },
  plugins: []
};
