/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust to your file structure
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        typing: "typing 3s steps(20, end), blink 0.7s step-end infinite alternate",
        fadeIn: "fadeIn 2s forwards",
      },
    },
  },
  plugins: [],
};
