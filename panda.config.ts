import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        red: { value: '#EE0F0F' },
      },
    },
    semanticTokens: {
      colors: {
        danger: {
          value: {
            base: '{colors.red}',
            _dark: 'green.700',
          },
        }, 
        bg: {
          DEFAULT: { value: '{colors.gray.100}' },
        },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
