const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class'
};

export default config;
