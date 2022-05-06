const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    patterns: {
      opacities: {
          100: "1",
          80: ".80",
          60: ".60",
          40: ".40",
          20: ".20",
          10: ".10",
          5: ".05",
      },
      sizes: {
          1: "0.25rem",
          2: "0.5rem",
          4: "1rem",
          6: "1.5rem",
          8: "2rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          32: "8rem",
      }
    },
    extend: {
      fontFamily: {
        'newake': ['Newake Demo', 'sans-serif'],
        'metana': ['Neue Metana', 'sans-serif']
      },
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        purple: {
          900: '#CF72FB',
        }
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwindcss-bg-patterns'),
  ],
}
