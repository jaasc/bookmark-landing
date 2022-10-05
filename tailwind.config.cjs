/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'rubik': ['Rubik', 'sans-serif'],
      },
      colors:{
        'softBlue': 'hsl(231, 69%, 60%)',
        'softRed': 'hsl(0, 94%, 66%)',
        'grayishBlue': 'hsl(229, 8%, 60%)',
        'veryDarkBlue': 'hsl(229, 31%, 21%)',
      },
      animation: {
        'bounce-short': 'bounce 1s ease-in-out .5',
        'fade-short': 'fade 1s ease-in-out'
      },
      keyframes: {
        fade: {
          '0%': { opacity: '.2' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
