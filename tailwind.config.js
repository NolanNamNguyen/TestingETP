/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        'primary-font': '#000000',
        'loading-background-color': '#FFFFFF59',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
