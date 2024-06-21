/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#4eac6d",
        secondary: "#495057",
        light: "#ffffff80",
        lightBlack: "#495057bf"
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'tablet': '992px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}

