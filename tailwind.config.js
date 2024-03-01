// tailwind.config.js
import withMT from "@material-tailwind/react/utils/withMT";
const {nextui} = require("@nextui-org/react");



/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    // ...
    
    
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      
      padding: '2rem',
     
			screens: {
				'2xl': '1400px',
			},
    },
    
    extend: {
      colors:{
        dark:'#15171E',
        primary:"#be1adb",
    text_primary:"#F2F3F4",
    text_secondary:"#b1b2b3",
    card:"#121212",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      boxShadow: {
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)',
      }

    },
  },
  darkMode: "class",
  plugins: [nextui()],
});