import { addDynamicIconSelectors } from "@iconify/tailwind";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      orange:"#FF9500",
      casiBlack:"#464646",
      gray:"#BEBEBE",
      casiWhite:"#EFEFEF",
      green:"#027400",
      red:"#C20000",
      white:"#ffffff"
    },
    extend: {},
  },
  plugins: [addDynamicIconSelectors(), nextui()],
};
