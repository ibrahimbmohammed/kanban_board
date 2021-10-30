const colors = require('tailwindcss/colors')

module.exports = {
  //enabled: true,
 // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        gray: {

          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          150:'#F6F8F9',
          100: '#f2f3f5',
        },
        myblue:{
          900:"#0E73F6"
        }
      },
      spacing: {
        2.5:'0.6rem',
        87:'13rem',
        38:'9rem',
        40:'10rem',
        42:'12rem',
        88: '22rem',
        89: '15rem',
        90:'16rem',
        91:'17rem',
        92:'18rem',
        94:'20rem',
        95:'21rem',
        96:'22rem',

      },
      animation: {
        fade: 'fadeIn  .5s ease-in-out',
        fadeOut: 'fadeOut  .5s ease-out',
        motionSafe: 'motion-safe',
      },
  
      keyframes: theme => ({
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      }),
    },
  },
  variants: {
      extend: {
        backgroundColor: ['active'],
        fontSize: ['hover','focus','active'],
        fontWeight: ['hover','focus','active'],
        textColor: ['visited','focus','active'],
        scale: ['responsive', 'hover', 'focus'],
        translate: ['responsive', 'hover', 'focus'],
        animation: ['motion-safe'],
        fill: ['hover'],
        stroke: ['hover'],
        outline: ['hover', 'active', 'focus'],
      }
    },
    plugins: [
      require('./plugins/shadow'),
    ]
};


//variants: {
  //   extend: {
  //     backgroundColor: ['active'],
  //     fontSize: ['hover','focus','active'],
  //     fontWeight: ['hover','focus','active'],
  //     textColor: ['visited','focus','active'],
  //     scale: ['responsive', 'hover', 'focus'],
  //     translate: ['responsive', 'hover', 'focus'],
  //     animation: ['motion-safe'],
  //     fill: ['hover'],
  //     stroke: ['hover'],
  //     outline: ['hover', 'active', 'focus'],
  //   }
  // },
  // plugins: [],