import React from 'react'
import { round } from 'lodash'
import { Line, LINK_CS, LINK_SS } from './GraphElements'

/**
 * Draws a line between two nodes
 */
const GraphLink = ({ source, target, type, debug, width, strength }) => {
  return (
    <>
      <Line
        x1={source.x}
        y1={source.y}
        x2={target.x}
        y2={target.y}
        strokeWidth={type === LINK_CS ? 1 : width}
        strokeOpacity={type === LINK_SS ? strength : 1}
        debug={debug}
        variant={type}
      />
      {debug && strength && (
        <text
          textAnchor="middle"
          x={source.x + (target.x - source.x) / 2}
          y={source.y + (target.y - source.y) / 2}
        >
          {round(strength, 3)}
        </text>
      )}
    </>
  )
}

export default GraphLink
