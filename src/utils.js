import { formatLocale } from 'd3'

const locale = formatLocale({
  decimal: ',',
  thousands: '.',
  grouping: [3],
  currency: [' €', ''],
})

export const format = value => locale.format(',')(value)

export const fill = ({ theme, fill }) => ({
  fill: theme.colors[fill] || fill,
})

export const centerSVG = ({ theme, fill }) => ({
  position: 'relative',
  svg: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
})

export const scaledWidth = ({ theme, width }) => ({
  width: `${theme.space[width] || width}px`,
})

export const scaledHeight = ({ theme, height }) => ({
  height: `${theme.space[height] || height}px`,
})

export const shadow = ({ theme, type = 'normal' }) => ({
  boxShadow: theme.shadows[type],
})

export const outline = ({ theme }) => ({
  borderRadius: '4px',
  border: `2px solid ${theme.colors.blueMediumDark}`,
})

export const invert = ({ theme }) => ({
  background: theme.colors.blueMediumDark,
  svg: {
    fill: 'white',
  },
})

export const translateXY = ({ x = 0, y = 0 }) => ({
  transform: `translate(${x}px,${y}px)`,
})

export const displayDebug = ({ debug }) => (debug ? { display: 'initial' } : {})
