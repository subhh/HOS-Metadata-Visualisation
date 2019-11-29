import styled from 'styled-components'
import { color, height } from 'styled-system'
import { Box, Heading, Text as ReText } from 'rebass'
import { translateXY, scaledHeight } from 'utils'

export const ChartContainer = styled(Box).attrs({
  px: 4,
  pt: 4,
  pb: 5,
  mx: 3,
  mb: 4,
  bg: 'white',
})`
  box-shadow: ${({ theme }) => theme.shadows.normal};
  border-radius: 4px;
  min-height: 384px;
`

export const Title = styled(Heading).attrs({
  fontSize: 2,
  fontWeight: 500,
  color: 'blueDark',
  mb: 4,
})``

const barStyle = ({ theme, highlight }) => {
  const {
    blueLight,
    blueLightGradientOffset,
    blueDark,
    blueDarkGradientOffset,
  } = theme.colors

  const gradient = highlight
    ? `linear-gradient(58deg, ${blueLightGradientOffset} 0%, ${blueLight} 100%);`
    : `linear-gradient(58deg, ${blueDark} 0%, ${blueDarkGradientOffset} 100%)`

  return {
    backgroundImage: gradient,
    borderRadius: '2px',
  }
}

// *************************************************************
// BAR CHART
// *************************************************************

export const Table = styled.table`
  flex: 0 0 auto;
  border-spacing: unset;
`

export const Row = styled.tr`
  height: ${({ theme, h }) => theme.space[h]}px;

  :not(:last-child) td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight};
  }

  td:first-child {
    padding-left: ${({ theme }) => theme.space[2]}px;
  }

  td:last-child {
    padding-right: ${({ theme }) => theme.space[2]}px;
  }
`

export const Bar = styled(Box)`
  ${scaledHeight};
  ${barStyle};
`

export const Label = styled.td`
  white-space: nowrap;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 2rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  ${color};
`

export const Value = styled.td`
  width: 3.5rem;
  text-align: right;
  padding: 0;
  padding-right: 1rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  ${color};
`
export const BarWrapper = styled.td`
  width: 100px;
`

// *************************************************************
// AREA CHART
// *************************************************************

export const Grid = styled(Box)`
  display: grid;
  grid-template-rows: repeat(${props => props.size}, 1rem);
  grid-template-columns: repeat(${props => props.size}, 1rem);
`

export const Cell = styled.div`
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  ${color};

  &:nth-last-child(-n + 10) {
    border-bottom: none;
  }

  &:nth-child(10n) {
    border-right: none;
  }
`

// *************************************************************
// COLUMN CHART
// *************************************************************

export const ColumnsContainer = styled(Box)`
  position: relative;
  flex: 0 0 auto;
  ${height};
`

export const Group = styled(Box)`
  position: absolute;
  ${translateXY};
`

export const Line = styled(Box)`
  height: 1px;
`

export const Column = styled(Box)`
  position: absolute;
  ${barStyle};
  ${translateXY};
  ${height};
`

export const AxisLabel = styled(ReText).attrs({
  fontSize: 0,
  width: 40,
  color: 'grey',
})`
  display: inline-block;
  position: absolute;
  transform: translate(
    ${({ textAlign }) => (textAlign === 'center' ? '-50%' : 0)},
    -50%
  );
  top: ${({ y }) => y}px;
`

export const Tick = styled(Box).attrs({
  bg: 'grey',
  height: 6,
})`
  position: absolute;
  width: 1px;
  top: ${({ y }) => y}px;
  ${height};
`
