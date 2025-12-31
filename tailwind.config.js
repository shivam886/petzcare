export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6D1F", // HUFT Orange
        secondary: "#FFF5F0", // Light Orange/Cream background
        accent: "#E25822", // Darker orange for hover
        neutral: "#F9FAFB",
        dark: "#2A2A2A",
      },
      fontFamily: {
        sans: ['Rubik', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
