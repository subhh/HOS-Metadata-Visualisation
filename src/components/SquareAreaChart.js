import React, { Fragment, useMemo } from 'react'
import { sum, values, entries, orderBy, sumBy } from 'lodash'
import { withTheme } from 'styled-components'
import styled from 'styled-components'
import { Box } from 'rebass'
import { ChartContainer, Title, Grid, Cell } from './ChartAtoms'
import ChartLegend from './ChartLegend'

const Wrapper = styled(Box)`
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  @supports (mix-blend-mode: soft-light) {
    &:before {
      content: ' ';
      position: absolute;
      opacity: 0.3;
      background-image: linear-gradient(183deg, #ffffff 0%, #000000 100%);
      mix-blend-mode: soft-light;
      width: 100%;
      height: 100%;
    }
  }
`

/**
 * Converts values to part-to-whole data, visualizes data with square area chart
 */
const SquareAreaChart = ({
  size = 10,
  data,
  title,
  theme,
  flipColors,
  reverse,
}) => {
  const colors = useMemo(
    () =>
      flipColors ? theme.chartColors.slice().reverse() : theme.chartColors,
    [flipColors, theme.chartColors]
  )

  const quantities = useMemo(() => {
    const total = sum(values(data))
    const pairs = entries(data).map(([key, value]) => {
      const percentage = (value / total) * (size * size) || 0
      const rounded = Math.round(percentage)
      return [key, { percentage, rounded }]
    })

    const sorted = orderBy(pairs, '[1].percentage', 'desc')
    const highestVal = sorted[0]
    // if shares do not sum up to 100 we correct the highest value to keep the error minimal
    const diff = 100 - sumBy(sorted, '[1].rounded')
    if (diff && highestVal) {
      highestVal[1].rounded += diff
    }
    // order values by key
    return orderBy(pairs, 0, [reverse ? 'desc' : 'asc'])
  }, [data, reverse, size])

  return (
    <ChartContainer>
      {title && <Title>{title}</Title>}
      <Wrapper mb={4}>
        <Grid size={size} data-testid="grid">
          {quantities.map(([key, { rounded }], catIdx) => (
            <Fragment key={`group-${catIdx}`}>
              {Array.apply(null, Array(rounded)).map((v, j) => (
                <Cell
                  data-testid="cell"
                  key={`cell-${catIdx}-${j}`}
                  bg={colors[catIdx]}
                />
              ))}
            </Fragment>
          ))}
        </Grid>
      </Wrapper>
      <ChartLegend
        data={quantities.map(([key, value]) => key)}
        reverse={flipColors}
      />
    </ChartContainer>
  )
}

export default withTheme(SquareAreaChart)
