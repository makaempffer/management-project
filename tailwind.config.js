/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      visibility: ["group-hover"],
      
      fontFamily: {
        outfit:['Outfit', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        orangeMenu: '#FCA311',
        grayCustom: '#E5E5E5',
        blueCustom: '#14213D',
      }
    },
  },
  plugins: [],
}