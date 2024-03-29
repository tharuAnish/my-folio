/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#1D2228",
        primary: "#5F9EA0",
        secondary: "#D27C1F",
        //#2A2A2A #1A2238 #1D2228 #1F2235

        // boxShadow: {
        //   "custom": '6px 9px 17px 3px rgb(0 0 0 / 30%)'
        // }
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      "3xl": { max: "2500px" },
      // => @media (max-width: 2302px) { ... }

      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },

  plugins: [],
}
