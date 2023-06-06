/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#e1b12c",
          ".btn-outline": {
            "text-transform": "capitalize",
          },
          ".btn-outline:hover": {
            "text-transform": "capitalize",
          },
          ".btn-primary": {
            "text-transform": "capitalize",
          },
          ".btn-primary:hover": {
            "text-transform": "capitalize",
          },
        },
      },
    ],
  },
}

