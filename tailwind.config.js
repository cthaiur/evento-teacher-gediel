/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fundo': "url('./public/fundo.svg')",
        'liberdade': "url('./public/liberdade.svg')",
        'bandeira': "url('./public/bandeira.svg')"
      }
    },
  },
  plugins: [],
}
