/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/src/assets/background.jpg')",
        'nftPlaceholder': "url('/src/assets/nft-placeholder.png')",
      },
    },
  },
  plugins: [],
}

