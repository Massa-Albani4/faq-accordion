/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      "white-200": "hsl(275, 100%, 97%)",
      purple: "hsl(292, 16%, 49%)",
      "purple-800": "hsl(292, 42%, 14%)",
    },
    fontFamily: {
      body: ["Work Sans"],
    },
    extend: {
      backgroundImage: {
        desktop: "url('../src/assets/bg-desktop.svg')",
        mobile: "url('../src/assets/bg-mobile.svg')",
      },
    },
  },
  plugins: [],
};
