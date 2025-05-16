// /** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

const customColors = {
  transparent: 'transparent',
  current: 'currentColor',
  blue: colors.blue,
  black: colors.black,
  white: colors.white,
  gray: colors.gray,
  emerald: colors.emerald,
  indigo: colors.indigo,
  yellow: colors.yellow,
  purple: colors.purple,
  green: colors.green,
  red: colors.red,
  slate: colors.slate,
  zinc: colors.zinc,
  neutral: colors.neutral,
  stone: colors.stone,
  amber: colors.amber,
  lime: colors.lime,
  teal: colors.teal,
  orange: colors.orange,
  cyan: colors.cyan,
  sky: colors.sky,
  ...{
    // ? BRAND
    'brand-orange-subtle': {
      '50': '#fffefe', 
      '100': '#fffefd', 
      '200': '#fffcf9', 
      '300': '#fffbf5', 
      '400': '#fef7ee', 
      '500': '#FEF4E7', 
      '600': '#e5dcd0', 
      '700': '#bfb7ad', 
      '800': '#98928b', 
      '900': '#7c7871'
    },
    'brand-orange-tertiary': {
      '50': '#fffdfa', 
      '100': '#fefaf5', 
      '200': '#fef4e7', 
      '300': '#fdedd9', 
      '400': '#fbdfbc', 
      '500': '#F9D19F', 
      '600': '#e0bc8f', 
      '700': '#bb9d77', 
      '800': '#957d5f', 
      '900': '#7a664e'
    },
    'brand-orange-secondary': {
      '50': '#fefaf5', 
      '100': '#fef6ec', 
      '200': '#fce8cf', 
      '300': '#fbdbb2', 
      '400': '#f7bf78', 
      '500': '#F4A43E', 
      '600': '#dc9438', 
      '700': '#b77b2f', 
      '800': '#926225', 
      '900': '#78501e'
    },
    'brand-orange-primary': {
      '50': '#fef9f3', 
      '100': '#fef4e7', 
      '200': '#fce3c3', 
      '300': '#f9d19f', 
      '400': '#f5af56', 
      '500': '#F18D0E', 
      '600': '#d97f0d', 
      '700': '#b56a0b', 
      '800': '#915508', 
      '900': '#764507'
    },
    'brand-orange-quarternary': {
      '50': '#f8f6f3', 
      '100': '#f2ede6', 
      '200': '#ded1c1', 
      '300': '#c9b59c', 
      '400': '#a17e51', 
      '500': '#794707', 
      '600': '#6d4006', 
      '700': '#5b3505', 
      '800': '#492b04', 
      '900': '#3b2303'
    },
    'brand-blue-subtle': {
      '50': '#feffff', 
      '100': '#fdfeff', 
      '200': '#f9fdfe', 
      '300': '#f6fbfe', 
      '400': '#eff8fd', 
      '500': '#E8F5FC', 
      '600': '#d1dde3', 
      '700': '#aeb8bd', 
      '800': '#8b9397', 
      '900': '#72787b'
    },
    'brand-blue-tertiary': {
      '50': '#fafdfe', 
      '100': '#f6fbfe', 
      '200': '#e8f6fc', 
      '300': '#dbf0fb', 
      '400': '#bfe5f7', 
      '500': '#A4DAF4', 
      '600': '#94c4dc', 
      '700': '#7ba4b7', 
      '800': '#628392', 
      '900': '#506b78'
    },
    'brand-blue-secondary': {
      '50': '#f6fbfe', 
      '100': '#edf8fd', 
      '200': '#d1ecfa', 
      '300': '#b6e1f7', 
      '400': '#7fcbf0', 
      '500': '#48B4EA', 
      '600': '#41a2d3', 
      '700': '#3687b0', 
      '800': '#2b6c8c', 
      '900': '#235873'
    },
    'brand-blue-primary': {
      '50': '#f4fafe', 
      '100': '#e8f6fc', 
      '200': '#c6e7f8', 
      '300': '#a4d9f3', 
      '400': '#5fbdeb', 
      '500': '#1BA0E2', 
      '600': '#1890cb', 
      '700': '#1478aa', 
      '800': '#106088', 
      '900': '#0d4e6f'
    },
    'brand-blue-quarternary': {
      '50': '#f3f6f8', 
      '100': '#e7eef1', 
      '200': '#c3d4dc', 
      '300': '#9fb9c7', 
      '400': '#56859c', 
      '500': '#0E5172', 
      '600': '#0d4967', 
      '700': '#0b3d56', 
      '800': '#083144', 
      '900': '#072838'
    },

    // ? PRODUCT
    'product-cerulean-subtle': {
      '50': '#feffff', 
      '100': '#fdfeff', 
      '200': '#fafdfe', 
      '300': '#f7fcfd', 
      '400': '#f0f9fc', 
      '500': '#EAF7FA', 
      '600': '#d3dee1', 
      '700': '#b0b9bc', 
      '800': '#8c9496', 
      '900': '#73797b'
    },
    'product-cerulean-tertiary': {
      '50': '#fbfefe', 
      '100': '#f7fcfd', 
      '200': '#ecf8fb', 
      '300': '#e0f3f8', 
      '400': '#c9eaf3', 
      '500': '#B2E1EE', 
      '600': '#a0cbd6', 
      '700': '#86a9b3', 
      '800': '#6b878f', 
      '900': '#576e75'
    },
    'product-cerulean-secondary': {
      '50': '#f7fcfd', 
      '100': '#eef9fb', 
      '200': '#d5eff6', 
      '300': '#bce5f0', 
      '400': '#8ad2e5', 
      '500': '#58BEDA', 
      '600': '#4fabc4', 
      '700': '#428fa4', 
      '800': '#357283', 
      '900': '#2b5d6b'
    },
    'product-cerulean-primary': {
      '50': '#f2fafc', 
      '100': '#e6f6fa', 
      '200': '#bfe8f2', 
      '300': '#99d9eb', 
      '400': '#4dbddb', 
      '500': '#00A1CC', 
      '600': '#0091b8', 
      '700': '#007999', 
      '800': '#00617a', 
      '900': '#004f64'
    },
    'product-cerulean-quarternary': {
      '50': '#f2f6f7', 
      '100': '#e6edef', 
      '200': '#bfd1d6', 
      '300': '#99b6be', 
      '400': '#4d7f8d', 
      '500': '#00485C', 
      '600': '#004153', 
      '700': '#003645', 
      '800': '#002b37', 
      '900': '#00232d'
    },

    // ? BACKGROUND
    'background-inverse': {
      '50': '#f3f4f4', 
      '100': '#e8e8e9', 
      '200': '#c4c6c7', 
      '300': '#a1a4a5', 
      '400': '#5b5f62', 
      '500': '#141B1F', 
      '600': '#12181c', 
      '700': '#0f1417', 
      '800': '#0c1013', 
      '900': '#0a0d0f'
    },
    'background-muted': {
      '50': '#fdfefe', 
      '100': '#fcfcfd', 
      '200': '#f7f8fb', 
      '300': '#f1f4f8', 
      '400': '#e7ecf3', 
      '500': '#DDE4EE', 
      '600': '#c7cdd6', 
      '700': '#a6abb3', 
      '800': '#85898f', 
      '900': '#6c7075'
    },
    'background-highlight': {
      '50': '#ffffff', 
      '100': '#fefeff', 
      '200': '#fdfdfe', 
      '300': '#fbfcfd', 
      '400': '#f8f9fc', 
      '500': '#F5F7FA', 
      '600': '#dddee1', 
      '700': '#b8b9bc', 
      '800': '#939496', 
      '900': '#78797b'
    },
    'background-secondary': {
      '50': '#ffffff', 
      '100': '#fefeff', 
      '200': '#fefefe', 
      '300': '#fdfdfd', 
      '400': '#fbfbfc', 
      '500': '#F9F9FB', 
      '600': '#e0e0e2', 
      '700': '#bbbbbc', 
      '800': '#959597', 
      '900': '#7a7a7b'
    },
    'background-primary': {
      '50': '#ffffff', 
      '100': '#ffffff', 
      '200': '#ffffff', 
      '300': '#ffffff', 
      '400': '#ffffff', 
      '500': '#FFFFFF', 
      '600': '#e6e6e6', 
      '700': '#bfbfbf', 
      '800': '#999999', 
      '900': '#7d7d7d'
    },

    // ? CONTENT
    'content-inverse': {
      '50': '#ffffff', 
      '100': '#ffffff', 
      '200': '#ffffff', 
      '300': '#ffffff', 
      '400': '#ffffff', 
      '500': '#FFFFFF', 
      '600': '#e6e6e6', 
      '700': '#bfbfbf', 
      '800': '#999999', 
      '900': '#7d7d7d'
    },
    'content-disabled': {
      '50': '#fdfdfd', 
      '100': '#fafbfb', 
      '200': '#f4f5f6', 
      '300': '#edeef1', 
      '400': '#dfe2e6', 
      '500': '#D1D5DB', 
      '600': '#bcc0c5', 
      '700': '#9da0a4', 
      '800': '#7d8083', 
      '900': '#66686b'
    },
    'content-muted': {
      '50': '#f9fafa', 
      '100': '#f4f4f5', 
      '200': '#e3e4e6', 
      '300': '#d2d3d7', 
      '400': '#b0b2b9', 
      '500': '#8E919B', 
      '600': '#80838c', 
      '700': '#6b6d74', 
      '800': '#55575d', 
      '900': '#46474c'
    },
    'content-secondary': {
      '50': '#f6f7f8', 
      '100': '#edeff0', 
      '200': '#d1d7da', 
      '300': '#b5bfc4', 
      '400': '#7e8f97', 
      '500': '#475F6B', 
      '600': '#405660', 
      '700': '#354750', 
      '800': '#2b3940', 
      '900': '#232f34'
    },
    'content-primary': {
      '50': '#f3f4f4', 
      '100': '#e8e8e9', 
      '200': '#c4c6c7', 
      '300': '#a1a4a5', 
      '400': '#5b5f62', 
      '500': '#141B1F', 
      '600': '#12181c', 
      '700': '#0f1417', 
      '800': '#0c1013', 
      '900': '#0a0d0f'
    },
    
    // ? SUPPORT -----------------------
    // ? ----- SUPPORT DANGER -----------------------
    'support-danger-tertiary': {
      '50': '#ff483d',
      '100': '#ff3e33',
      '200': '#f83429',
      '300': '#ee2a1f',
      '400': '#e42015',
      '500': '#da160b',
      '600': '#d00c01',
      '700': '#c60200',
      '800': '#bc0000',
      '900': '#b20000'
    },
    'support-danger-primary': {
      '50': '#ff6d62',
      '100': '#ff6358',
      '200': '#ff594e',
      '300': '#ff4f44',
      '400': '#ff453a',
      '500': '#ff3b30',
      '600': '#f53126',
      '700': '#eb271c',
      '800': '#e11d12',
      '900': '#d71308'
    },
    'support-danger-secondary': {
      '50': '#ff867c',
      '100': '#ff7c72',
      '200': '#ff7268',
      '300': '#ff685e',
      '400': '#ff5e54',
      '500': '#ff544a',
      '600': '#f54a40',
      '700': '#eb4036',
      '800': '#e1362c',
      '900': '#d72c22'
    },
    'support-danger-subtle': {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#fffffe',
      '300': '#fff6f4',
      '400': '#ffecea',
      '500': '#ffe2e0',
      '600': '#f5d8d6',
      '700': '#ebcecc',
      '800': '#e1c4c2',
      '900': '#d7bab8'
    },
    
    // ? ----- SUPPORT WARNING -----------------------
    'support-warning-tertiary': {
      '50': '#e5c13e',
      '100': '#dbb734',
      '200': '#d1ad2a',
      '300': '#c7a320',
      '400': '#bd9916',
      '500': '#b38f0c',
      '600': '#a98502',
      '700': '#9f7b00',
      '800': '#957100',
      '900': '#8b6700'
    },
    'support-warning-primary': {
      '50': '#fffe32',
      '100': '#fff428',
      '200': '#ffea1e',
      '300': '#ffe014',
      '400': '#ffd60a',
      '500': '#ffcc00',
      '600': '#f5c200',
      '700': '#ebb800',
      '800': '#e1ae00',
      '900': '#d7a400'
    },
    'support-warning-secondary': {
      '50': '#ffff7f',
      '100': '#ffff75',
      '200': '#fff96b',
      '300': '#ffef61',
      '400': '#ffe557',
      '500': '#ffdb4d',
      '600': '#f5d143',
      '700': '#ebc739',
      '800': '#e1bd2f',
      '900': '#d7b325'
    },
    'support-warning-subtle': {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#fffffe',
      '300': '#fffff4',
      '400': '#ffffea',
      '500': '#fff9e0',
      '600': '#f5efd6',
      '700': '#ebe5cc',
      '800': '#e1dbc2',
      '900': '#d7d1b8'
    },

    // ? ----- SUPPORT SUCCESS -----------------------
    'support-success-tertiary': {
      '50': '#60b776',
      '100': '#56ad6c',
      '200': '#4ca362',
      '300': '#429958',
      '400': '#388f4e',
      '500': '#2e8544',
      '600': '#247b3a',
      '700': '#1a7130',
      '800': '#106726',
      '900': '#065d1c'
    },
    'support-success-primary': {
      '50': '#66f98b',
      '100': '#5cef81',
      '200': '#52e577',
      '300': '#48db6d',
      '400': '#3ed163',
      '500': '#34c759',
      '600': '#2abd4f',
      '700': '#20b345',
      '800': '#16a93b',
      '900': '#0c9f31'
    },
    'support-success-secondary': {
      '50': '#9fffba',
      '100': '#95ffb0',
      '200': '#8bf7a6',
      '300': '#81ed9c',
      '400': '#77e392',
      '500': '#6dd988',
      '600': '#63cf7e',
      '700': '#59c574',
      '800': '#4fbb6a',
      '900': '#45b160'
    },
    'support-success-subtle': {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#fbffff',
      '400': '#f1fff5',
      '500': '#e7f9eb',
      '600': '#ddefe1',
      '700': '#d3e5d7',
      '800': '#c9dbcd',
      '900': '#bfd1c3'
    },

    // ? ----- SUPPORT INFO -----------------------
    'support-info-tertiary': {
      '50': '#3c94f4',
      '100': '#328aea',
      '200': '#2880e0',
      '300': '#1e76d6',
      '400': '#146ccc',
      '500': '#0a62c2',
      '600': '#0058b8',
      '700': '#004eae',
      '800': '#0044a4',
      '900': '#003a9a'
    },
    'support-info-primary': {
      '50': '#32acff',
      '100': '#28a2ff',
      '200': '#1e98ff',
      '300': '#148eff',
      '400': '#0a84ff',
      '500': '#007aff',
      '600': '#0070f5',
      '700': '#0066eb',
      '800': '#005ce1',
      '900': '#0052d7'
    },
    'support-info-secondary': {
      '50': '#7ed8ff',
      '100': '#74ceff',
      '200': '#6ac4ff',
      '300': '#60baff',
      '400': '#56b0ff',
      '500': '#4ca6ff',
      '600': '#429cf5',
      '700': '#3892eb',
      '800': '#2e88e1',
      '900': '#247ed7'
    },
    'support-info-subtle': {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#ffffff',
      '400': '#f5feff',
      '500': '#ebf4ff',
      '600': '#e1eaf5',
      '700': '#d7e0eb',
      '800': '#cdd6e1',
      '900': '#c3ccd7'
    },

    // ? OVERLAY
    'overlay-black-80': 'rgba(0, 0, 0, 0.8)',
    'overlay-black-60': 'rgba(0, 0, 0, 0.6)',
    'overlay-black-40': 'rgba(0, 0, 0, 0.4)',
    'overlay-black-20': 'rgba(0, 0, 0, 0.2)',
    'overlay-white-80': 'rgba(255, 255, 255, 0.8)',
    'overlay-white-60': 'rgba(255, 255, 255, 0.6)',
    'overlay-white-40': 'rgba(255, 255, 255, 0.4)',
    'overlay-white-20': 'rgba(255, 255, 255, 0.2)',
    'legend-1': '#BDD7E7',
    'legend-2': '#6BAED6',
    'legend-3': '#3182BD',
    'legend-4': '#044F78',
    'legend-5': '#0D2434'
  }
};

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/vue-tailwind-datepicker/**/*.js'
  ],
  theme: {
    colors: customColors,
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
      '200': 200,
      '400': 400,
      '600': 600,
      '800': 800,
      '1000': 1000,
      '9999': 9999,
      'auto': 'auto'
    },
    extend: {
      colors: {
        'vtd-primary': colors.sky, // Light mode Datepicker color
        'vtd-secondary': '#FCFCFC' // Dark mode Datepicker color
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
