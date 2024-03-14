// Chakra UI specific theme and variables configuration

import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1560px',
});

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        minHeight: '100vh',
        overflowX: 'hidden',
        bgGradient:
          'linear-gradient(90deg, KleoColor.bgStripes 0.1%, KleoColor.dark.base 0.1%, KleoColor.dark.base 50%, KleoColor.bgStripes 50%, KleoColor.bgStripes 50.1%, KleoColor.dark.base 50.1%, KleoColor.dark.base 100%);',
        bgSize: '700px',
        backgroundPositionX: '150px',
        color: 'KleoColor.white',
      },
      '*': {
        '&::-webkit-scrollbar': {
          width: 1.5,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'KleoColor.dark.base',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'KleoColor.light',
          borderRadius: 1.5,
        },
        scrollbarWidth: 'auto',
        scrollbarColor: 'KleoColor.light KleoColor.dark.base',
      },
    },
  },
  fonts: {
    heading: 'Poppins Bold, sans-serif',
    body: 'Poppins, sans-serif',
  },
  colors: {
    KleoColor: {
      bgStripes: '#141414',
      shadowColor: '#141414',
      dark: {
        lighter: '#1f1e1e',
        base: '#141414',
        darker: '#000000',
      },
      light: '#FFFFFF',
      white: '#ffffff',
      color1: {
        lighter: '#65e7a9',
        base: '#65e7a9',
        darker: '#65e7a9',
      },
      color2: {
        lighter: '#65e7a9',
        base: '#65e7a9',
        darker: '#65e7a9',
      },
      color3: {
        lighter: '#65e7a9',
        base: '#65e7a9',
        darker: '#65e7a9',
      },
      color4: {
        lighter: '#65e7a9',
        base: '#48ce8e',
        darker: '#3bb279',
      },
    },
    KleoColors: {
      bgStripes: '#141414',
      shadowColor: '#141414',
      dark: {
        lighter: '#65e7a9',
        base: '#48ce8e',
        darker: '#3bb279',
      },
      light: '#65e7a9',
      white: '#ffffff',
    },
  },
  components: {
    Alert: {
      variants: {
        subtle: {
          container: {
            bg: 'KleoColor.dark.lighter',
          },
        },
      },
    },
  },
  ...breakpoints,
});
