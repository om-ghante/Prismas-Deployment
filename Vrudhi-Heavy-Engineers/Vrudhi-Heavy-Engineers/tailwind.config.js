/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          gray: "#2D3748",
          navy: "#1E3A8A",
          yellow: "#FBBF24",
        }
      }
    },
  },
  plugins: [],
}