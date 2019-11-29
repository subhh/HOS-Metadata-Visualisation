import React from 'react'
import styled, { withTheme } from 'styled-components'
import { color, space, fontSize, flexDirection } from 'styled-system'

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  ${flexDirection};
`

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 500;
  ${space};
  ${fontSize};

  &:before {
    content: ' ';
    display: inline-block;
    margin-right: 8px;
    width: 8px;
    height: 8px;
    border-radius: 2px;
    ${color};
  }
`

/**
 * Legend for the square area, and column chart
 */
const ChartLegend = ({ data, theme, reverse: rev, direction = 'column' }) => {
  const colors = rev ? theme.chartColors.slice().reverse() : theme.chartColors
  return (
    <List flexDirection={direction}>
      {data.map((k, i) => (
        <ListItem key={`entry-${k}`} bg={colors[i]} mb={1} mr={3} fontSize={0}>
          {k}
        </ListItem>
      ))}
    </List>
  )
}

export default withTheme(ChartLegend)
