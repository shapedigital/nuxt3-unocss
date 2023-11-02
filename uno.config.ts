// uno.config.ts
import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts(
      {
        provider: 'google',
        fonts: {
          sans: 'Roboto',
          mono: ['Fira Code', 'Fira Mono:400,700'],
        },
      },
    ),
  ],
  /* Used for global CSS */
  preflights: [
    {
      getCSS: () => `
        *, *:before, *:after {
          -webkit-font-smoothing: antialiased;
        }
      `,
    },
  ],
  shortcuts: {
    button: 'appearance-none border-none py-2 px-4 rounded bg-yagro-darkGreen text-white font-500',
  },
  theme: {
    /*
      Useful tool for generating tints and shades:
      https://www.tailwindshades.com/
    */
    colors: {
      /* Branding */
      yagro: {
        darkGreen: {
          DEFAULT: '#006838',
          50: '#00DB76',
          100: '#00CE6F',
          200: '#00B461',
          300: '#009B53',
          400: '#008246',
          500: '#006838',
          600: '#004E2A',
          700: '#00351D',
          800: '#001B0F',
          900: '#000201',
          950: '#000000',
        },
        lightGreen: {
          DEFAULT: '#006838',
          50: '#00DB76',
          100: '#00CE6F',
          200: '#00B461',
          300: '#009B53',
          400: '#008246',
          500: '#006838',
          600: '#004E2A',
          700: '#00351D',
          800: '#001B0F',
          900: '#000201',
          950: '#000000',
        },
      },
      /* User feedback */
      status: {
        success: '#28a745',
        danger: '#ff0000',
        warning: '#ffab00',
        info: '#17a2b8',
      },
    },
    /* Matches Bootstrap for compatibility */
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
  },
})