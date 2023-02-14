/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
