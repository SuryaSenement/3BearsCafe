// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Something New', 'system-ui', 'sans-serif'], // Use manually
        sans: ['Poppins', 'system-ui', 'sans-serif'],          // DEFAULT
      },
      colors: {
        brown: '#502B14',
        offWhite: '#FFF8F4',
        orange: '#B73B26',
        charcoal: '#142718',
        olive: '#656D58',
        greyfade: '#C3C1B6',
        latte: '#A5704D',
      },
    },
  },
  plugins: [],
};
