module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontWeight: ["hover", "focus"],
      colors: {
        bg: "#88B3F0",
        "nav-text": "#175A80",
        "body-text": "#333333",
        "scale-green": "#57B263",
        "gray-text": "#888888",
        "profile-border": "#00115E",
        "client-bg": "#88B3F0",
        "footer-bg": "#014165",
        "built-with": "#c6cbc9",
        "your-business": "#014165",
      },
      fontFamily: {
        circular: ["Circular Std"],
        "circular-book": ["Circular Std Book", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
