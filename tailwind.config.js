/** @type {import('tailwindcss').Config} */
export default {

 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
  extend: {
    colors: {
      neon: '#39ff14',
      ocean: '#1CA9C9',
    }
  }
}
,
  plugins: [
    require('tailwindcss-textshadow'),
    require('daisyui')
  ],
}

