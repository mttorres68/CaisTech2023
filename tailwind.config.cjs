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
        monsserrat: ['Montserrat', 'sans-serif'],
      },

      colors: {
        'ctech-200': '#4923F6',
        'ctech-300': '#6C21ED',
        'ctech-400': '#590DDE',
        'ctech-500': '#4500BD',
        'ctech-550': '#2200B8',
        'ctech-900': '#0D004A',
        'ctech-910': '#03035E',
        'tech-50': '#CAF0F8',
        'tech-60': '#80A8FF',
        'tech-100': '#6495ED',
        'tech-200': '#5A8BF7',
        'tech-250': '#447BF3',
        'tech-300': '#0B4FDF',
        'tech-400': '#0039B2',
        'mycolor-g': '#1ABB65',
        'mycolor-p': '#111024',
      },

      backgroundImage: {
        'ctech': "url('https://i.imgur.com/LDYHZBb.png')",
        "caisTech-grandient": "linear-gradient(59.86deg, #9572FC 10.00%, #43E7AD 40.00%, #E1D55D 66%, #d1cc96 98.30%)",
        "background-grandient":"linear-gradient(90deg, rgba(42,35,101,1) 49%, rgb(42,45,110,1) 68%)",
        'ctech-gradient': 'radial-gradient(circle,  #0D004A 49%, #0039B2 90%)',
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
