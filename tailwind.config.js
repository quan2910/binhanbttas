/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        linear:
          "linear-gradient(182.1deg, rgba(193, 126, 255, 0.3) -2.04%, rgba(99, 11, 183, 0.3) 100.18%)",
        "linear-1":
          "linear-gradient(182.1deg, #C17EFF -2.04%, #630BB7 100.18%)",
        "linear-2":
          "linear-gradient(182.1deg, rgba(193, 126, 255, 0.2) -2.04%, rgba(99, 11, 183, 0.2) 100.18%)",
      },
      colors: {
        linear: "linear-gradient(42.92deg, #3D5BF7 -38.75%, #29D3F8 100%)",
        primary: "rgba(32, 129, 226, 1)",
        secondary: "rgba(33, 33, 33, 1)",
        text: "rgba(90, 90, 90, 1)",
        line: "rgba(218, 217, 217, 1)",
        bg: "rgba(244, 246, 250, 1)",
        orange: "rgba(243, 114, 44, 1)",
        yellow: "rgba(248, 150, 30, 1)",
        purple: "rgba(179, 17, 102, 1)",
        pink: "rgba(227, 61, 111, 1)",
        white: "rgba(255, 255, 255, 1)",
        green: "green",
        blue: "blue",
        background: "#f2f5fc",
        red: "red",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "serif"],
        varela: ["Varela Round", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
