/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      "pink-100": "hsl(275, 100%, 97%)",
      "purple-800": "hsl(292, 42%, 14%)",
    },
    screens: {
      md: "1024px",
      lg: "1440px",
      xl: "1920px",
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
