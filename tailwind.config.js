/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"San Francisco Pro"', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        appleBlack: '#1d1d1f',
        appleGray: '#f5f5f7',
        appleWhite: '#ffffff',
      },
      backdropBlur: {
        xs: '4px',
      }
    },
  },
  plugins: [],
}
