/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'showcase-background' : "url('https://i.ibb.co/vXqDmnh/background.jpg')"
      }
    },
  },
  plugins: [],
}