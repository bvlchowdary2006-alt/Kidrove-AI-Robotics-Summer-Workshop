/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#FAF8F5',
        primary: '#111827',
        secondary: '#64748B',
        accent: '#14B8A6',
        card: '#FFFFFF',
        border: '#E5E7EB',
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        large: '20px',
      },
      boxShadow: {
        premium: '0 24px 80px rgba(15, 23, 42, 0.12)',
        soft: '0 12px 40px rgba(15, 23, 42, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
