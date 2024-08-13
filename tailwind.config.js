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
      backgroundImage: {
        arrowButtonDarkGradient:
          "linear-gradient(137deg, #1B153C 10%, #1C2943 50%, #301E3E 90%)",
        "gradient-to-45-dark-BG":
          "linear-gradient(137deg, #1B153C, #1C2943, #301E3E)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      boxShadow: {
        deltaPurple:
          "0px 1.764px 5.293px 0px rgba(51, 0, 255, 0.7), 0px 7.057px 22.937px 0px rgba(82, 0, 255, 0.41)",
        deltaRed:
          "2px 2px 10px 0px rgba(255, 95, 162, 0.12), 7px 7px 30px 0px rgba(255, 95, 162, 0.20);",
        intergrationBox: "0px 0px 7.9px 0px #5D47FF",
      },
      colors: {
        gray: "#a8a9b3",
      },
    },
  },
  plugins: [],
};
