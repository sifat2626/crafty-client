/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rob: "'Roboto Slab', 'serif'",
      },
      colors: {
        art: "#FBE7E0",
      },
      // screens: {
      //   extra: "1170px",
      // },
    },
  },
  plugins: [require("daisyui")],
};
