/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green1' : '#A3D9F1',
        'green2' : '#3F9AA7',
        'green3' : '#307A82',
        'green4' : '#173D3F',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
