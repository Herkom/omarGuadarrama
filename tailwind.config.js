/** @type {import('tailwindcss').Config} */
export default {
  // as per docs, this is the default value
  //content: ["./src/**/*.{html,js}"],
  // as per docs, this is the default value using Vite
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

