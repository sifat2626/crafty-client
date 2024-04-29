/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode variant

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        rob: "'Roboto Slab', 'serif'",
      },
      colors: {
        art: {
          light: "#FBE7E0", // Light mode color
          dark: "#7E4A49", // Dark mode color
        },
      },
    },
  },

  plugins: [require("daisyui")],
};
