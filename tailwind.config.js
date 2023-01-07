// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        amber: {
          950: "#361705",
          1000: "#261003",
          lite: "#ecc193",
        },
      },
    },
  },
  plugins: [],
};
