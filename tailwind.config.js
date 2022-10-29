/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      'colors': {
        'black': '#121212',
        'dark-purple': '#494151',
        'red': '#D24938',
        'turkey': '#6AA1A3',
        'army-green': '#516961',
        'dark-green': '#213801',
        'life-green': '#54D57C',
        'black': '#191818',
        'gb-purple': '#3F4595',
        'light-gb-purple': '#4C53A7',
        'lighter-grey': '#cdcccc',
        'lighter-gb-purple': '#9799ab'
      },
      'lineHeight': {
        'game-md': '26px'
      },
      'fontSize': {
        'game-md': '36px'
      },
      'fontFamily': {
        'body': 'outfit-v6',
        'game': 'game-font'
      },
      'boxShadow': {
        'btn': '0 -3px 0 0',
        'btn-vertical': '-3px 0 0 0',
        'btn-inner': 'inset 2px 0px 4px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: [
    require('tailwindcss-writing-mode')({
      variants: ['responsive', 'hover']
    })
  ]
};
