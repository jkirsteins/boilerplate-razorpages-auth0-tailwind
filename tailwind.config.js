module.exports = {
  purge: [
    './wwwroot/**/*.html',
    './Pages/**/*.cshtml',
    './wwwroot/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
