/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // si usas App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // si usas Pages Router
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonYellow: "#FFD700",
        neonBlue: "#00BFFF",
        neonViolet: "#8A2BE2",
        fitnessBlack: "#0A0A0A",
        fitnessGray: "#1F1F1F"
      },
    },
  },
  plugins: [],
}