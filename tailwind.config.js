/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-custom": "#a6a8ae",
        "blue-custom": "#7695fa",
      },
      spacing: {
        20: "5rem",
        5: "1.25rem",
      },
      height: {
        7: "1.75rem",
      },
      width: {
        20: "5rem",
        68: "17rem",
      },
      minWidth: {
        68: "17rem",
      },
    },
  },
  plugins: [],
};
