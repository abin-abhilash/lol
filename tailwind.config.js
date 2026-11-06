/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAF8',
        surface: {
          DEFAULT: '#F3F3EF',
          elevated: '#FFFFFF',
          muted: '#EFEFEA',
        },
        primary: {
          DEFAULT: '#171717',
          muted: '#2A2A2A',
        },
        secondary: {
          DEFAULT: '#737373',
          light: '#A3A3A3',
          dark: '#525252',
        },
        accent: {
          DEFAULT: '#6C63FF',
          hover: '#5950EC',
          light: '#F0EFFF',
          subtle: '#E8E6FE',
        },
        border: {
          DEFAULT: '#E5E5E2',
          light: '#ECECE9',
          strong: '#D4D4CE',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 24px -2px rgba(23, 23, 23, 0.04), 0 2px 6px -1px rgba(23, 23, 23, 0.02)',
        'card-hover': '0 16px 36px -4px rgba(23, 23, 23, 0.08), 0 4px 12px -2px rgba(23, 23, 23, 0.03)',
        'elevated': '0 24px 48px -12px rgba(23, 23, 23, 0.08)',
        'accent-glow': '0 8px 24px -4px rgba(108, 99, 255, 0.25)',
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
        'wide-caps': '0.12em',
      },
    },
  },
  plugins: [],
}

