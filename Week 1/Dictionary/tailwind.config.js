/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      'darkest': '#050505',
      'darker': '#1F1F1F',
      'dark': '#2D2D2D',
      'darkGray': '#3A3A3A',
      'gray': '#757575',
      'lightGray': '#E9E9E9',
      'light': '#F4F4F4',
      'lighter': '#FFFFFF',
      'red': '#FF5252',
      'purple': '#A445ED',
    },
  },
  plugins: [],
}

