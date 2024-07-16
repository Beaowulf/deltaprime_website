/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      boxShadow: {
        deltaRed:
          "2px 2px 10px 0px rgba(255, 95, 162, 0.12), 7px 7px 30px 0px rgba(255, 95, 162, 0.20);",
        intergrationBox: "0px 0px 7.9px 0px #5D47FF",
      },
    },
  },
  plugins: [],
};
