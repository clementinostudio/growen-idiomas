/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Questrial', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        fustat: ['Fustat', 'sans-serif'],
      },
      colors: {
        'deep-teal': '#204749',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
