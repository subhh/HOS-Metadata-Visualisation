import React, { useMemo, useState } from 'react'
import { max, values, entries, orderBy } from 'lodash'
import { Flex } from 'rebass'
import { scaleLinear } from 'd3'
import styled from 'styled-components'
import {
  ChartContainer,
  Title,
  Table,
  Row,
  Bar,
  Label,
  Value,
  BarWrapper,
} from 'components/ChartAtoms'
import Link from 'components/Link'
import { format } from 'utils'

const Collapsible = styled.div`
  max-height: ${p => (p.collapse ? p.height + 'px' : 'unset')};
  overflow: hidden;
`

/**
 * Bar chart component
 */
const BarChart = ({ title = '', data }) => {
  const [expanded, setExpanded] = useState(false)

  return useMemo(() => {
    const entr = entries(data)
    const orderedEntries = orderBy(entr, 1, 'desc')
    const isLong = entr.length > 10
    const xScale = scaleLinear()
      .domain([0, max(values(data))])
      .range([2, 100])

    return (
      <ChartContainer>
        <Title>{title}</Title>
        <Collapsible collapse={isLong && !expanded} height={238}>
          <Table>
            <tbody>
              {orderedEntries.map(([key, value], i) => {
                return (
                  <Row key={`row-${i}`} h={4}>
                    <Label title={key} color="greyDark">
                      {key}
                    </Label>
                    <Value color="grey">{format(value)}</Value>
                    <BarWrapper>
                      <Bar width={`${xScale(value)}%`} height={2} />
                    </BarWrapper>
                  </Row>
                )
              })}
            </tbody>
          </Table>
        </Collapsible>
        {isLong && (
          <Flex justifyContent="center" mt={5}>
            <Link
              fontSize={0}
              fontWeight={500}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Weniger anzeigen' : 'Alles anzeigen'}
            </Link>
          </Flex>
        )}
      </ChartContainer>
    )
  }, [title, data, expanded])
}

export default BarChart
