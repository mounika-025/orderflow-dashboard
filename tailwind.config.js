/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#1f2029",
        "gray-custom": "#a6a8ae",
        "blue-custom": "#7695fa",
        "input-bg": "#292b2f",

        "icon-bg": "rgba(68,70,74,0.8)",
        "dashboard-bg": "#141316",
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
