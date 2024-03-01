/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shape-bg": "url('/images/allo-pattern.png')",
        "title-gradient": "linear-gradient(180deg, #000 0%, #eef3fc 100%)",
      },
      backgroundColor: {
        "black-100": "rgba(0, 0, 0, 0.1)",
        "black-200": "rgba(0, 0, 0, 0.2)",
        "black-300": "rgba(0, 0, 0, 0.3)",
        "black-400": "rgba(0, 0, 0, 0.4)",
        "black-500": "rgba(0, 0, 0, 0.5)",
        "black-600": "rgba(0, 0, 0, 0.6)",
        "black-700": "rgba(0, 0, 0, 0.7)",
        "black-800": "rgba(0, 0, 0, 0.8)",
        "black-900": "rgba(0, 0, 0, 0.9)",
      },
      colors: {
        paragraph: "#9fb3d4",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
