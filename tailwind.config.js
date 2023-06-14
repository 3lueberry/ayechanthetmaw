/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require("tailwindcss/plugin");
const colors = require("./colors.config.json");

module.exports = withMT({
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
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
      colors: colors,
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
