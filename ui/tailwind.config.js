/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#60A5FA',
          600: '#2563EB',
        },
        gray: {
          400: '#9CA3AF',
          800: '#1F2937',
          900: '#111827',
        }
      }
    },
  },
  plugins: [],
}