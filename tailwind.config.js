/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#526DFE',
          light: '#7C4DFF',
          dark: '#3F51B5',
        },
        secondary: {
          main: '#8E5FFE',
          light: '#B39DDB',
          dark: '#6A1B9A',
        },
        accent: {
          success: '#4CAF50',
          warning: '#FF9800',
          error: '#F44336',
          gold: '#FFD700',
        },
        background: {
          default: '#ffffff',
          paper: '#f8fafc',
          subtle: '#f5f7fa',
          dark: '#0a0a18',
          darkLighter: '#14142a',
        },
        text: {
          primary: '#1a1a1a',
          secondary: '#6e6e73',
          light: '#86868b',
        },
      },
      fontFamily: {
        sans: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'hover': '0 20px 40px rgba(0, 0, 0, 0.12)',
        'primary': '0 8px 20px rgba(82, 109, 254, 0.3)',
      },
    },
  },
  plugins: [],
} 