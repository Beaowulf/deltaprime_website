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
        purpleGradient:
          "linear-gradient(135deg, #9179d8 25%, #6b70ed 45%, #3b32d9 70%)",

        deltaWhiteLinearBG:
          "linear-gradient(to bottom, #f4f4ff, #fff5f0, #feeef4)",

        deltaDarkBlueBG:
          "linear-gradient(to bottom, #252948, #252948, #252948)",

        deltaColoredLinearGradient:
          "linear-gradient(260deg, #AFAFFF 0%, #FF8FB8 50%, #FFBB9B 100%)",

        deltaPurpleLinearGradient:
          "linear-gradient(260deg, #7C71FF 0%, #7C71FF 50%, #7C71FF 100%)",

        deltaColoredLinearGradientVertical:
          "linear-gradient(0deg, #AFAFFF 0%, #FF8FB8 50%, #FFBB9B 100%)",

        deltaPurpleLinearGradientVertical:
          "linear-gradient(0deg, #7C71FF 0%, #7C71FF 50%, #7C71FF 100%)",
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
        deltaWhite:
          "2px 2px 14px 0px rgba(255, 255, 255, 0.52), 7px 5px 30px 0px rgba(255, 255, 255, 0.30);",
        intergrationBox: "0px 0px 7.9px 0px #5D47FF",
      },
      colors: {
        gray: "#a8a9b3",
      },
    },
  },
  plugins: [],
};
