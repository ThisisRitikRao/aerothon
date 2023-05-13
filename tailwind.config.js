/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        "primary":"#5669B3",
        "grey_primary":"rgba(63, 80, 35, 0.61)",
        "light_blue":"rgba(34, 108, 245, 0.5)"
      },
      screens: {
        // => @media (min-width: 300px) { ... }
        'sm': '300px',
        // => @media (min-width: 500px) { ... }
        'smd': '500px',
        // => @media (min-width: 750px) { ... }
        'md': '750px',
        // => @media (min-width: 1440px) { ... }
        'slg': '1000px',
        
        'lg': '1440px',
      },
    },
  },
  plugins: [],
}