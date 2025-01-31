/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      container: {
        // you can configure the container to be centered
        center: true,
  
        // or have default horizontal padding
        padding: '',
  
        // default breakpoints but with 40px removed
        screens: {
          sm: '664px',
          md: '728px',
          lg: '964px',
          xl: '1140px',
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
};
