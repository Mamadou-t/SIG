/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
      orange:'#FF9E1D',
      orangePure:'#FF8000',
      vert:'#48B648',
      'white-30':'#EFEFEF',
    },
    borderRadius:{
      'custom':'10px'
    },
    borderWidth:{
      'solid':'1px'
    },
    fontFamily:{
      'Caveat':'Caveat Brush'
    }
    
    },
  },
  plugins: [],
}

