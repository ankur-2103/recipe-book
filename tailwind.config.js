/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInAnimation : 'fadeInAnimation 1s ease 0s 1 normal forwards'
      },
      keyframes: {
        fadeInAnimation: {
          '0%': { opacity: 0 },
          '100%': {opacity: 1}
        }
      }
    }
  },
  plugins: [],
}

