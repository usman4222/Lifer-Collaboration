/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./ node_modules / flowbite/**/ *.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'body': '#f3f2f7',
        'main': '#464255',
        'linkBg': '#fff4d9',
        'primary': '#ffb100'
      },
      colors: {
        'textActive': '#ffb100',
        'primary': '#464255'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

