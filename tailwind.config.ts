/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

import withMT from "@material-tailwind/react/utils/withMT";
import plugin from "tailwindcss/plugin";
import { hex as colors } from "./colors_config";

const {
  content,
  theme: { fontFamily, ...others },
}: any = withMT({ content: [], theme: { colors }, plugins: [] });

const config: Config = <any>withMT({
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", ...content],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    ...others,
    fontFamily,
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: { "w-auto": "auto" },
      height: { "h-auto": "auto" },
      // colors: colors,
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // ".content-auto": {
        //   "content-visibility": "auto",
        // },
        // ".content-hidden": {
        //   "content-visibility": "hidden",
        // },
        // ".content-visible": {
        //   "content-visibility": "visible",
        // },
        ".text-shadow": {
          "text-shadow": "-1px -1px 0 #0f172a",
        },

        ".engraved": {
          color: "transparent",
          "background-color": "#666666",
          "background-clip": "text",
          "-moz-background-clip": "text",
          "-webkit-background-clip": "text",
          "text-shadow": "rgba(245,245,245,0.5) 3px 5px 1px",
        },

        ".embossed": {
          color: "#f0f0f0",
          "background-color": "#666666",
          "-moz-background-clip": "text",
          "-webkit-background-clip": "text",
          "text-shadow": "1px 4px 4px #555",
        },

        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".home-btn": {
          "font-size": "0",
          "line-height": "0.5rem",
          height: "0.5rem",
          width: "10rem",
        },
      });
    }),
  ],
});

// const config: Config = {
//   content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };

export default config;
