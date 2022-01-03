module.exports = {
  enabled: true,
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    screen: {
      mobile: "320px",
    },
    extend: {
      colors: {},
      spacing: {
        88: "22rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
