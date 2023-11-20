/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {

    extend: {
      fontFamily: {
        'encode-sans': ['Encode Sans', 'sans-serif'],
        'epilogue': ['Epilogue', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'PTsans': ['PT Sans Caption', 'sans-serif'],
        'titillium': ['Titillium Web', 'sans-serif'],
        'fira-sans': ['Fira Sans', 'sans-serif'],
      },
      fontWeight: {
        'encode-light': 300,
        'encode-regular': 400,
        'epilogue-extraligt': 200,
        'epilogue-light': 300,
        'epilogue-regular': 400,
        'lato-light': 300,
        'lato-regular': 400,
        'lato-bold': 700,
        'PTsans-regular': 400,
        'PTsans-bold': 700,
        'titillium-regular': 400,
        'titillium-semibold': 600,
        'fira-sans-medium': 500,
        'fira-sans-semibold': 600,
        'fira-sans-bold': 700,
      }
    },
  },
  plugins: [require("tailwind-gradient-mask-image")  ],
}

