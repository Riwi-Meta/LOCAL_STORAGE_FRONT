import { addDynamicIconSelectors } from "@iconify/tailwind";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      dark: "#202020",
      blue: "#005BC4",
      transparent: "#ffffff00",
      orange: "#FF9500",
      casiOrange: "#fff4e6",
      casiBlack: "#464646",
      gray: "#BEBEBE",
      casiWhite: "#EFEFEF",
      green: "#027400",
      red: "#C20000",
      white: "#ffffff",
    },
  },
  plugins: [addDynamicIconSelectors(), nextui({ addCommonColors: true, colors: { dark: "#202020", blue: "#005BC4" } })],
};
