
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%": { marginTop: "0" },
          "50%": { marginTop: "100px" },
          "100%": { marginTop: "0" },
        },
      },
      animation: {
        move: "move 1.1s infinite ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}