module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Archivo Black", "serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#FCEC63",
        content: "#222222",
      },
    },
  },
  plugins: [],
};
