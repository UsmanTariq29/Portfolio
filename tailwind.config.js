/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1E2A',
          soft: '#2B3E4A',
        },
        navy: {
          DEFAULT: '#0F2A3D',
          50: '#EEF3F6',
          100: '#D6E1E8',
          200: '#AFC4D0',
          300: '#84A3B5',
          400: '#5A8298',
          500: '#3B6580',
          600: '#254C64',
          700: '#183A4E',
          800: '#122C3C',
          900: '#0F2A3D',
          950: '#0A1B27',
        },
        paper: '#F6F6F2',
        panel: '#FFFFFF',
        line: '#E4E3DC',
        steel: '#5C7080',
        signal: {
          DEFAULT: '#1E7A5F',
          50: '#EAF4F0',
          100: '#CFE8DD',
          200: '#9ECFBB',
          300: '#6DB69A',
          400: '#3E9C7A',
          500: '#1E7A5F',
          600: '#186349',
          700: '#134C39',
          800: '#0E3629',
          900: '#082019',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 42, 61, 0.06), 0 8px 24px -12px rgba(15, 42, 61, 0.18)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
        fadeIn: 'fadeIn 0.6s ease-out both',
        dash: 'dash 2.4s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
