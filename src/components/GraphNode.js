import React, { useCallback, useMemo } from 'react'
import { format } from 'utils'
import {
  Circle,
  Text,
  Count,
  Group,
  NODE_COL,
  NODE_COL_SELECTED,
  NODE_SUBJ_SELECTED,
  NODE_SUBJ,
} from './GraphElements'

const NodeContent = ({
  id,
  label,
  width = 10,
  height = 10,
  radius = 5,
  type,
  count,
  debug,
  selected,
  source,
  target,
}) => {
  return useMemo(() => {
    const variant = selected
      ? type === NODE_COL
        ? NODE_COL_SELECTED
        : NODE_SUBJ_SELECTED
      : type

    const labelOutside = radius < 40
    const labelOffset =
      type === NODE_COL || selected
        ? labelOutside
          ? Math.max(radius + 16, 28)
          : 32
        : 4

    return (
      <>
        {selected && <Circle variant="halo" r={radius + 20} />}
        <Circle variant={variant} r={radius} />
        {((type === NODE_COL && labelOutside) ||
          (type === NODE_SUBJ && (radius < 10 || selected))) && (
          <Text
            y={labelOffset}
            textAnchor="middle"
            variant={variant}
            paintOrder="stroke"
            stroke="#F7F7F7"
            strokeWidth={6}
            strokeOpacity={selected ? 0.9 : 0.5}
            fill="transparent"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          >
            {label || id}
          </Text>
        )}
        <Text y={labelOffset} textAnchor="middle" variant={variant}>
          {label || id}
        </Text>
        {type === NODE_COL && (
          <Count
            textAnchor="middle"
            dominantBaseline="central"
            variant={variant}
          >
            {format(count)}
          </Count>
        )}

        {debug && (
          <rect
            x={-width / 2}
            y={-height / 2}
            width={width}
            height={height}
            fill="rgba(0, 0, 0, 0.1)"
          />
        )}
      </>
    )
  }, [id, label, width, height, radius, type, count, debug, selected])
}

/**
 * Renders node contents and a label into a SVG group
 */
const GraphNode = props => {
  const { id, label, x, y, depth, onClick = x => x } = props
  const handleClick = useCallback(() => onClick(id), [id, onClick])

  return (
    <Group x={x} y={y} depth={depth} onClick={handleClick} debug={props.debug}>
      <NodeContent {...props} />
      {label && label.length < id.length && <title>{id}</title>}
    </Group>
  )
}

export default GraphNode
