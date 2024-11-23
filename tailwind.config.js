/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "1px",
        ml: "875px",
        xlg: "1160px",
      },
      fontFamily: {
        inter: "inter",
      },
      container: {
        center: "true",
      },
      colors: {
        light: "rgba(84, 84, 84, 1)",
      },
      spacing: {
        99: "470px",
      },
      maxWidth: {
        "m-sm": "640px",

        "m-md": "768px",

        "m-lg": "1024px",

        "m-xl": "1280px",

        "m-2xl": "1536px",
      },
    },
  },
  plugins: [],
};
