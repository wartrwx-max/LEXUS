/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f5',
        amber: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans:  ['Figtree', 'sans-serif'],
        serif: ['Newsreader', 'serif'],
      },
    },
  },
  plugins: [],
}
