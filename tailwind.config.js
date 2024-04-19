/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // added daisy ui theme (19.04.24)
  daisyui: {
    themes: ["light", "dark"],
  },

  plugins: [require("daisyui")],
};
