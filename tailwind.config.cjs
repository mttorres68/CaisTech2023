/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography')
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        Kameron: ["Kameron", "sans-serif"],
        origin_tech: ['OriginTech', 'sans-serif'],
      },

      colors: {
        'caistech-500': '#4500BD'
      },

      backgroundImage: {
        "caisTech-grandient":
          "linear-gradient(59.86deg, #9572FC 10.00%, #43E7AD 40.00%, #E1D55D 66%, #d1cc96 98.30%)",
        "background-grandient":
          "linear-gradient(90deg, rgba(42,35,101,1) 49%, rgb(42,45,110,1) 68%",
      },
      colors: {
        mycolor: "#1ABB65",
      },
    },
  },
  plugins: [
    typography({
      fontFamily: ['origin_tech']
    }),
    require("flowbite/plugin"),
    require("tailwind-typewriter")({
      wordsets: {
        caisTech: {
          words: ["Preparem-se para o maior evento digital do sul do piauí!"],
          reapet: -1,
          eraseSpeed: 0.1,
          delay: -2,
        },
      },
    }),
  ],
});
