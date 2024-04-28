/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baby-pink': '#FF7CB7',
        'cabana-green': '#4c956c',
        'dark-green': '#132a13',
      }
    },
  },
  plugins: [],
}

