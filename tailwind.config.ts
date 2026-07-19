import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'mn': "340px",
      'xs': "500px",
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': '1280px',
      '2xl': '1400px',
      '3xl': '1700px',
    },
    extend: {
      dropShadow: {
        card: "1px 1px 1px rgba(197, 195, 197, 0.75)",
        input: "2px 3px 3px rgb(184, 184, 184, 0.75)",
      },
    },
  },
  plugins: [],
};

export default config;
