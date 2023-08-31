/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'gray': '#7f7f7f',
      'gray-light': '#e8e5e480',
    },
    gridTemplateColumns: {
      '3': 'repeat(auto-fit, minmax(320px, 1fr))',
      '2': 'repeat(auto-fit, minmax(250px, 1fr))',
      '1': 'repeat(auto-fit, minmax(150px, 1fr))',
      '00': 'repeat(auto-fit, minmax(45vw, 1fr))',
      '01': 'repeat(auto-fit, minmax(45vw, 1fr))',
      '02': 'repeat(auto-fit, minmax(45vw, 1fr))',
    },
  plugins: [],
  }
}