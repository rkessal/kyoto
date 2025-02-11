/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        veryLightGray: '#E9E9E9',
        lightGray: '#F9F9F9',
        darkGray: '#4A4A4A',
      },
      fontFamily: {
        sans: 'Funnel Sans',
        butta: ['var(--font-buttacup)']
      }
    },
  },
  plugins: [],
};
