/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
            'primary': '#000000',
            'secondary': '#1c1c1e',
            'light': '#ffffff',
            'accent': '#390099',
            'accent-dark': '#28006b',
            'accent-light': '#af80ff',
            'text-primary': "#ffffff",
        }
    },
  },
  plugins: [],
}
