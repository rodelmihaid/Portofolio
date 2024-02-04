/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        "max-768": { max: "768px" },
        "max-500": { max: "500px" },
      },
    },
  },
  plugins: [],
};
