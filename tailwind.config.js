const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      phone: {'max': '425px'},
      tablet: {'max':'770px'},
      laptop: {'max':'1024px'},
      desktop: {'max':'1280px'}
    },
    colors: {
      backgroundGray: colors.coolGray
    },
    fontFamily: {
      sans: ['Arial'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily:{
        pangolin: ['Pangolin']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}