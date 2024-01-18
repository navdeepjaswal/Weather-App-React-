/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm':'500',
        'md': '980px', 
        'lg': '1024px',
        'xl':'1280px'
      },
    },
  },
  plugins: [],
}

