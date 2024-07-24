import { addDynamicIconSelectors } from "@iconify/tailwind";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      transparent:"#ffffff00",
      orange:"#FF9500",
      casiBlack:"#464646",
      gray:"#BEBEBE",
      casiWhite:"#EFEFEF",
      green:"#027400",
      red:"#C20000",
      white:"#ffffff",
      black:"#202020"
    },
    extend: {},
    keyframes: {
      AnimacionRotar: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(90deg)" },
      },
      Rebote: {
        "0%, 100%": { transform: "scale(1)",opacity: 1 },
        "50%": { transform: "scale(1.03)", opacity: 0.5 },
      },
    } ,
    animation: {
      Rotar: "AnimacionRotar 0.5s linear reverse",
      Giro: "AnimacionRotar 0.5s linear",
      Rebote: "Rebote 1.2s ease-in-out infinite",
    },
  },
  plugins: [addDynamicIconSelectors(), nextui()],
};
