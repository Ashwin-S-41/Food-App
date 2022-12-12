/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      backgroundImage: {
        burgir: "url('/src/assets/burgir.pnn')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
