/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{tsx,jsx,js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff8037',
        primaryLighter: '#ff9864',
        secondary: '#f2f2f2',
        tertiary: '#262626',
        tertiaryLighter: '#2c2c2c',
        accent: '#ffb084',
        background: '#0d0d0d',
        midcol: '#1d1d1d',
        surface: '#101010',
        text: '#ffffff',
      },
    },
  },
  plugins: [],
}

