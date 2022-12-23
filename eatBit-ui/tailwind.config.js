/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#22c55e",
      pastelBackground: "#e8fff0",
      mainRed: "#E74441"
    }
  },
  plugins: [],
}
