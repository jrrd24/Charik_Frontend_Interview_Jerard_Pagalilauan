/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7C57",
        "primary-dark": "#F54768",
        secondary: "#37B94C",
        "secondary-dark": "#008f81",
        tertiary: "#3096E4",
        "custom-text": "#222326",
        "custom-bg": "#FFF5F2",
      },
    },
  },
  plugins: [],
};
