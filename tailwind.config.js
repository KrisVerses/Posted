module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Archivo Black", "serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#FAFAF9",
        backgroundSearch: "#FCEC63",
        content: "#111827",
        accents: "#F59E0B",
      },
    },
  },
  plugins: [],
};
