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
      }
    },
  },
  plugins: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}

