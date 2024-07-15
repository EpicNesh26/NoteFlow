/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    fontFamily:{
      'Inter' : ['Inter', 'sans-serif']
    },
    borderWidth:{
      '0.5':'0.5px',
    },
    extend: {
      borderWidth:['hover']
    },
  },
  plugins: [],
}

