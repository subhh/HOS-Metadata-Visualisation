import { lighten } from 'polished'

const baseColors = {
  white: '#FCFDFD',
  ghostWhite: '#F8FBFB',
  greyLight: '#E6E6E6',
  grey: '#9B9B9B',
  greyDark: '#595959',
  blueLight: '#92CDDA',
  blueMediumLight: '#77AAB5',
  blueMediumDark: '#438B9E',
  blueDark: '#326774',
  blueLightGradientOffset: '#6BBBCD',
  blueDarkGradientOffset: '#61A0AC',
}

const colors = {
  ...baseColors,
  blueLighter: lighten(0.1, baseColors.blueLight),
}

export default {
  breakpoints: [360, 768, 1024, 1366, 1880],
  fontSizes: [12, 14, 16, 21, 27],
  fontFamily: 'Open Sans, sans-serif',
  colors,
  shadows: {
    normal: '0 2px 4px 1px rgba(50, 103, 116, 0.1)',
  },
  chartColors: [colors.blueLight, colors.blueDark],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256],
}
