/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        axiforma: ["'Axiforma'", "sans-serif"]
      },
      colors: {
        primary: {
          100: '#5D5AD8',
          200: '#524FD5',
          300: '#413DD1'
        },
        secondary: '#FFF5F1',
        text: {
          primary: '#181B32',
          body: '#666680',
        },
        light: '#FFFFFF',
        outline: '#B0B0C0',
        dark: '#F8FAFE',
      },
      boxShadow: {
        'darkShadow': '2px 4px 45px 0px rgba(0, 0, 0, 0.13)'
      }
    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
