/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        shades: {
          100: "#247f9e",
          200: "#20728e",
          300: "#1c657e",
          400: "#19586e",
          500: "#154c5e",
          600: "#123f4f",
          700: "#0e323f",
          800: "#0a262f",
          900: "#07191f",
        },
      },
    },
  },
  plugins: [],
};
