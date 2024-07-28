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
    darkMode:'class',

    extend: {
      borderWidth:['hover'],
      colors: {
        'custom-red': '#ffadad',
        'custom-orange': '#ffd6a5',
        'custom-blue': '#9bf6ff',
        'custom-purple': '#bdb2ff',
        'custom-pink': '#ffc6ff',
      },
    },
  },
  plugins: [],
}

