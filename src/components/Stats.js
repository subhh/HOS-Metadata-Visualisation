import React, { useContext } from 'react'
import { Flex, Text } from 'rebass'
import styled from 'styled-components'
import useFetchStats from 'hooks/useFetchStats'
import { StateContext } from 'state'
import SquareArea from './SquareAreaChart'
import BarChart from './BarChart'
import ColumnChart from './ColumnChart'
import {
  STATS_LANGUAGE,
  STATS_RIGHTS,
  STATS_TYPE,
  STATS_YEAR,
  STATS_SUBJECT,
} from 'queries/statsQuery'

const timeLegend = ['Erfassung abgeschlossen', 'Erfassung in Arbeit']

const Wrapper = props => (
  <Flex justifyContent="center" bg="#F8FBFB" py={4} px={5} {...props} />
)

const BlueText = styled(Text).attrs({
  color: 'blueDark',
})``

/**
 * Combines all chart components into one dashboard
 */
const Stats = () => {
  const { query } = useContext(StateContext)
  const { isLoading, stats } = useFetchStats(query)

  const {
    count,
    [STATS_LANGUAGE]: language,
    [STATS_RIGHTS]: rights,
    [STATS_TYPE]: type,
    [STATS_YEAR]: year,
    [STATS_SUBJECT]: subject,
  } = stats

  return (
    <Wrapper>
      <Flex
        width={[1, 1, 1, 1, 3 / 4, 1]}
        justifyContent="center"
        flexWrap="wrap"
        alignItems="flex-start"
      >
        {count > 0 && (
          <>
            <SquareArea title="Lizenzstatus" data={rights} reverse />
            <ColumnChart
              title="Erscheinungsjahr"
              data={year}
              height={190}
              legend={timeLegend}
            />
            <BarChart title="Sprache" data={language} />
            <BarChart title="Publikationsform" data={type} />
            <SquareArea title="Thema" data={subject} />
          </>
        )}
        {count === 0 && !isLoading && (
          <>
            <BlueText>Es sind keine Statistiken zum Suchbegriff </BlueText>
            <BlueText fontStyle="italic" fontWeight={500}>
              „{query}“
            </BlueText>
            <BlueText> verfügbar.</BlueText>
          </>
        )}
        {count === null && isLoading && (
          <BlueText>Lade Statistiken ...</BlueText>
        )}
      </Flex>
    </Wrapper>
  )
}

export default Stats
