module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1140px',
    },
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily: {
        'Roboto': ['Roboto, sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
