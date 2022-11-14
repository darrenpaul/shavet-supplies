module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "heading-1": "#4d5767",
        "heading-3": "#2f3749",
        paragraph: "#758094",
        "nav-link-active": "#4880c8",
        "nav-link": "#4d5566",
        link: "#647187",
        "link-hover": "#8995aa",
        "link-light": "#5a97da",
        feature: "#edf8fd",
        button: "#4980c8",
        "button-hover": "#5b97da",
        input: "#a4aebe",
        footer: "#2f3747",
      },
    },
  },
  plugins: [],
};
