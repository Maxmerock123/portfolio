/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mesh-gradient": 'url("./images/mesh-gradient.png")',
      },
    },
  },
  plugins: [],
};
