/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"
],
theme: {
  container : {
    center: true,
    padding: '16px',
  },
  colors : {
    'navy': '#102C57',
    'oren': '#E35008',
    'gray': '#64748b',
    'white': '#ffffff',
    'dark': '#000000',
    'red': '#dc2626',
    'bg': '#FFF0E8',
    'card': '#94a3b8',
    
  },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },

  extend: {
    fontFamily: {
      'poppins': ['Poppins'],

  },
  screens: {
    '2xl':'1320px',
  }
},
    extend: {},
  },
  plugins: [],
}

