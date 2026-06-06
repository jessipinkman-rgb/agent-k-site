/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0f172a',
        'navy-blue': '#1e3a8a',
        'gold': '#d4af37',
        'light-gold': '#f4d03f',
        'primary-orange': '#ff9500',
        'primary-orange-dark': '#ff7f00',
      },
    },
  },
  plugins: [],
}
