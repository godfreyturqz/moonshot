module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      // padding: '2rem',
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
