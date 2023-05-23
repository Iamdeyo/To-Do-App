/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pri: '#DE483A',
        priDark: '#db4c3f',
        priDarkHover: '#c53727',
        liteGrey: 'hsla(53,10%,69%,.2)',
      },
    },
    plugins: [],
  },
};
