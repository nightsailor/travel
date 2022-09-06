/** @type {import('tailwindcss').Config} */
const defaultConfig = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0FBF61',
        black: '#000000',
        lightblack: '#494949',
        light: 'rgba(15,191,97,0.05)',
        lightblue: 'rgba(45,76,255,0.13)',
      },
    },
    fontFamily: {
      ...defaultConfig.theme.fontFamily,
      roboto: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      ...defaultConfig.theme.fontSize,
    },
    screens: {
      ...defaultConfig.theme.screens,
      "m2xl": { max: "1536px" },
      "m1xl": { max: "1440px" }, //
      "mxl": { max: "1280px" },
      "mlgm": { max: "1200px" }, //
      "mlg": { max: "1024px" }, //
      "mmdm": { max: "991px" }, //
      "mmd": { max: "767px" },
      "msm": { max: "640px" },
      "mxs": { max: "479px" } //
    },
    maxWidth: {
      ...defaultConfig.theme.maxWidth,
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('autoprefixer'),
  ],
};
