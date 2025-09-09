/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2b59ff',
        'primary-blue-100': '#eef2ff',
        'black-100': '#2b2b2b',
        'light-white': '#f5f7fa',
        'grey': '#7a7f89',
      },
      backgroundImage: {
        'hero-bg': "url('/globe.svg')",
        'pattern': "url('/file.svg')",
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
