/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#ffffff',
        'secondary':'#f1f5f9',
        'hover': '#eff6ff',
        'darkMode': '#131314'
      },
      height:{
        'output-desktop-size': 'calc(100dvh-56px)',
        'screen-dvh': '100dvh'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

