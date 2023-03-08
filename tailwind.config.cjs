/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        goyang: 'goyangKiriKanan 2s infinite'
      },
      keyframes: {
        goyangKiriKanan: {
          '0%': {
            transform: 'translateX(0)'
          },
          '50%': {
            transform: 'translateX(10px)'
          },
          '100%': {
            transform: 'translateX(-5px)'
          }
        }
      }
    },
  },
  plugins: [],
}
