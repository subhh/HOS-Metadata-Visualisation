import React from 'react'
import { entries, values, max, keys } from 'lodash'
import { scaleLinear, scaleTime, timeYear, extent } from 'd3'
import {
  ChartContainer,
  Title,
  ColumnsContainer,
  Group,
  Line,
  AxisLabel,
  Column,
  Tick,
} from './ChartAtoms'
import ChartLegend from './ChartLegend'

const AxisLine = ({ value, width, label, padding }) => (
  <Group y={value}>
    <Line ml={padding} width={width} bg="greyLight" />
    <AxisLabel textAlign="right">{label}</AxisLabel>
  </Group>
)

/**
 * Column chart component
 */
const ColumnChart = ({
  data,
  legend,
  height = 250,
  pt = 0, // padding top
  pb = 32, // padding bottom
  pl = 48, // padding left
  pr = 32, // padding right
  bw = 8, // bar width
  bs = 4, // bar spacing
  labelFreq = 5,
  title = 'title',
}) => {
  const k = keys(data)
  const v = values(data)
  const entr = entries(data)

  // y scale
  const yScale = scaleLinear()
    .domain([0, max(v) || 0])
    .range([height - pb, pt])
  const baseY = yScale(0)

  // x scale
  const count = v.length
  const width = count * bw + bs * (count - 1) + pl + pr
  const xScale = scaleTime()
    .domain(extent(k).map(v => new Date(v)))
    .range([pl, width])
    .nice()

  const ticks = xScale.ticks(timeYear.every(3))
  const formatTick = xScale.tickFormat('%Y')

  return (
    <ChartContainer>
      <Title>{title}</Title>
      <ColumnsContainer width={width} height={height} mb={4}>
        {yScale.ticks(4).map(t => (
          <AxisLine
            key={`yAxis-${t}`}
            label={t}
            value={yScale(t)}
            padding={pl}
            width={width - pl}
          />
        ))}
        {ticks.map((t, i) => (
          <Group key={`tick-${i}`} x={xScale(t)} y={0}>
            <Tick y={baseY + bs * 2} />
            <AxisLabel y={baseY + bs * 6} textAlign="center">
              {formatTick(t)}
            </AxisLabel>
          </Group>
        ))}
        {entr.map(([key, value], i) => {
          const x = xScale(new Date(key))
          const y = yScale(value)
          const bh = baseY - y

          return (
            <Group key={`column-${x}-${y}`} x={x} y={0}>
              <Column
                x={-bw / 2}
                y={y}
                width={bw}
                height={bh}
                highlight={i >= entr.length - 3}
              />
            </Group>
          )
        })}
      </ColumnsContainer>
      {legend && <ChartLegend reverse data={legend} direction="row" />}
    </ChartContainer>
  )
}

export default ColumnChart
