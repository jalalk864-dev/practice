export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#07080B', 900: '#0B0D12', 800: '#11141B', 700: '#181C25' },
        gold: { DEFAULT: '#D9BC82', soft: '#EBDAB5', deep: '#A8894F' },
        ice: '#A9CBEA',
        jade: '#9ED8C6',
        mist: '#A6ACB8',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
}
