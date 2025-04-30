/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000",
          light: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FF3366",
          light: "#FF4D6D",
        },
        tertiary: {
          DEFAULT: "#1A1A1A",
          light: "#F5F5F5",
        },
        textPrimary: {
          DEFAULT: "#FFFFFF",
          light: "#000000",
        },
        textSecondary: {
          DEFAULT: "#A0A0A0",
          light: "#666666",
        },
        accent: {
          DEFAULT: "#FF3366",
          light: "#FF4D6D",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          light: "#FFFFFF",
        },
        light: {
          DEFAULT: "#FFFFFF",
          dark: "#000000",
        },
      },
    },
  },
  plugins: [],
};
