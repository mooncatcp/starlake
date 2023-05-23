/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{tsx,jsx,js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4685ff',
        secondary: '#f2f2f2',
        accent: '#ffb084',
        background: '#0d0d0d',
        surface: '#101010',
        text: '#ffffff',
        hint: '#282828',
      },
    },
  },
  plugins: [],
}

