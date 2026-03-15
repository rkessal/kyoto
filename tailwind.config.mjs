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
        lightGray: 'var(--lightGray)',
        veryLightGray: 'var(--veryLightGray)',
        darkGray: 'var(--darkGray)',
        yellow: 'var(--yellow)',
        borderGray: 'var(--borderGray)',
      },
      fontFamily: {
        sans: 'Funnel Sans',
        butta: ['var(--font-buttacup)']
      },
    },
  },
  plugins: [],
};
