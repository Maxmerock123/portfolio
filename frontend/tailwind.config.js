/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mesh-gradient": 'url("./images/mesh-gradient.png")',
      },
      colors: {
        "custom-orange-1": "#FFCC49",
        "custom-orange-2": "#FFAD61",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
