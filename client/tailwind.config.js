/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lighter-purple': 'rgb(215, 189, 226)',
        'light-purple': 'rgb(187, 143, 206)',
        'purple': 'rgb(155, 89, 182)',
        'dark-purple': 'rgb(125, 60, 152)', 
        'darker-purple': 'rgb(91, 44, 111)',
      },
    },
    fontFamily: {
      "HeadingFont":["Roboto Slab Light"],
      "SubheadingFont":["BioRhyme"],
      "BodyFont":["Manrope"],
    },
  },
  plugins: [],
}

