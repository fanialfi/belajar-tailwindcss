/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        oswald:["Oswald","sans-serif"],
        zeyada:["Zeyada","cursive"],
        babylonica:['Babylonica', 'cursive'],
        righteous:["Righteous","cursive"],
      },
    },
  },
  plugins: [],
};
