import styled from 'styled-components'
import { variant } from 'styled-system'
import { displayDebug } from 'utils'

export const NODE_ROOT = 'root'
export const NODE_COL = 'collection'
export const NODE_SUBJ = 'subject'
export const NODE_COL_SELECTED = 'selected collection'
export const NODE_SUBJ_SELECTED = 'selected subject'
export const LINK_RC = 'rc'
export const LINK_CS = 'cs'
export const LINK_SS = 'ss'
export const LINK_HIGHLIGHT = 'highlight'

/**
 * Graphical elements for graph rendering
 */

export const SVG = styled.svg`
  width: 100%;
  height: 100%;
`

const Node = styled.circle.attrs(
  variant({
    variants: {
      [NODE_COL]: {
        fill: 'blueLighter',
      },
      [NODE_SUBJ]: {
        fill: 'greyLight',
      },
      [NODE_SUBJ_SELECTED]: {
        fill: 'greyLight',
      },
      [NODE_COL_SELECTED]: {
        fill: 'blueLighter',
      },
      halo: {
        fill: 'blueLight',
        stroke: 'blueMediumLight',
        strokeWidth: 2,
        fillOpacity: 0.1,
        strokeOpacity: 1,
      },
    },
  })
)``

export const Circle = styled(Node)`
  opacity: 1;
`

export const Line = styled.line.attrs(
  variant({
    variants: {
      [LINK_RC]: {
        stroke: 'red',
        display: 'none',
      },
      [LINK_CS]: {
        stroke: 'greyLight',
      },
      [LINK_SS]: {
        stroke: 'blueLight',
      },
    },
  })
)`
  ${displayDebug};
`

export const Group = styled.g.attrs(({ x, y, depth }) => ({
  style: {
    transform: `translate(${x}px,${y}px)`,
  },
}))`
  display: ${({ depth }) => (depth < 0 || isNaN(depth) ? 'none' : 'initial')};
  cursor: pointer;
  user-select: none;
  ${displayDebug};
`

export const Rect = styled.rect`
  fill: none;
  stroke-width: 1px;
  stroke: black;
`

export const Text = styled.text.attrs(
  variant({
    variants: {
      [NODE_COL]: {
        fontSize: 1,
        fill: 'blueDark',
        fontWeight: 700,
        textTransform: 'uppercase',
      },
      [NODE_SUBJ]: {
        fontSize: 0,
        fill: 'greyDark',
        fontWeight: 500,
      },
      [NODE_COL_SELECTED]: {
        fontSize: 1,
        fill: 'blueDark',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 0.2,
      },
      [NODE_SUBJ_SELECTED]: {
        fontSize: 2,
        fill: 'greyDark',
        fontWeight: 500,
        fontStyle: 'italic',
      },
    },
  })
)`
  text-transform: ${p => p.textTransform || 'initial'};
`

export const Count = styled.text.attrs(
  variant({
    variants: {
      [NODE_COL]: {
        fontSize: 3,
        fill: 'blueDark',
      },
      [NODE_SUBJ]: {
        fontSize: 2,
        fill: 'grey',
      },
      [NODE_SUBJ_SELECTED]: {
        fontSize: 2,
        fill: 'grey',
      },
      [NODE_COL_SELECTED]: {
        fontSize: 4,
        fill: 'blueDark',
      },
    },
  })
)`
  font-weight: 700;
`
