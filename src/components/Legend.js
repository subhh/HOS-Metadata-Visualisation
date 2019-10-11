import React, { useContext, useCallback } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import { Box as ReBox, Text, Heading } from 'rebass'
import { StateContext, DispatchContext } from 'state'
import { transparentize } from 'polished'
import {
  toggleMapLegend,
  toggleGraphLegend,
  toggleGraphExploreLegend,
} from 'state/actions'
import {
  fill,
  scaledWidth,
  scaledHeight,
  centerSVG,
  invert,
  shadow,
} from 'utils'
import { ReactComponent as Help } from 'icons/help.svg'
import { ReactComponent as Collapse } from 'icons/expand.svg'
import { ReactComponent as LegendSVG } from 'icons/legend.svg'
import { ReactComponent as LegendMap } from 'icons/legend-map.svg'

const Container = styled(ReBox).attrs(({ theme, collapsed }) => ({
  fontSize: 1,
  bg: collapsed ? 'transparent' : transparentize(0.05, theme.colors.white),
  ml: 4,
  mb: 5,
}))`
  /* transition: border-radius 100ms ease-in-out; */
  /* border-radius: ${({ collapsed }) => (collapsed ? 48 : 0)}px; */
  position: absolute;
  z-index: 1;
  bottom: 0;
`

const IconWrapper = styled(ReBox).attrs({
  p: 12,
  width: 40,
  height: 40,
})`
  transition: all 0.2s ease-in-out;
  ${centerSVG};
  ${scaledWidth};
  ${scaledHeight};
`

const InlineIcon = styled(IconWrapper)`
  position: absolute;
  right: 0;
  top: 0;

  :hover svg {
    fill: ${({ theme }) => theme.colors.blueMediumLight};
  }
`

const StandAloneIcon = styled(IconWrapper).attrs({
  bg: 'ghostWhite',
})`
  border-radius: 40px;
  ${shadow};

  :hover {
    ${invert};
  }
`

const CloseIcon = styled(Collapse)`
  ${fill};
`

const HelpIcon = styled(Help)`
  ${fill};
`

const LegendHeading = ({ children }) => (
  <Heading fontSize={3} color="blueDark" mb={4}>
    {children}
  </Heading>
)

const LegendText = props => (
  <Text lineHeight={1.5} color="greyDark" width={330} {...props} />
)

const ContentToggle = ({ path, show, actionCreator, title, children }) => {
  const dispatch = useContext(DispatchContext)
  const handleClick = useCallback(() => dispatch(actionCreator()), [
    actionCreator,
    dispatch,
  ])

  return (
    <Route
      exact
      path={path}
      render={() => (
        <Container collapsed={!show} p={show ? 4 : 0}>
          {show ? (
            <InlineIcon data-testid="toggle" onClick={handleClick}>
              <CloseIcon fill="greyDark" />
            </InlineIcon>
          ) : (
            <StandAloneIcon data-testid="toggle" onClick={handleClick}>
              <HelpIcon fill="blueMediumDark" />
            </StandAloneIcon>
          )}

          {show && (
            <>
              <LegendHeading>{title}</LegendHeading>
              {children}
            </>
          )}
        </Container>
      )}
    />
  )
}

/**
 * Floating container that contains introductory remarks and descriptive information/**
 */
const Legend = ({ width, height }) => {
  const { showMapLegend, showGraphLegend, showGraphExploreLegend } = useContext(
    StateContext
  )

  return (
    <>
      <ContentToggle
        path="/map"
        show={showMapLegend}
        actionCreator={toggleMapLegend}
        title="Einrichtungen"
      >
        <LegendText mb={4}>
          Einrichtungen stellen Hamburg Open Science Daten über ihre
          wissenschaftlichen Publikationen und Forschungsdaten zur Verfügung.
          Die Karte zeigt die Standorte und die Anzahl der zum Suchbegriff
          gefundenen Publikationen.
        </LegendText>
        <LegendMap />
      </ContentToggle>
      <ContentToggle
        path="/graph"
        show={showGraphLegend}
        actionCreator={toggleGraphLegend}
        title="Kollektionen"
      >
        <LegendText>
          Kollektionen sind Daten-Sammlungen von Publikationen. Mehrere
          Kollektionen können zu einer Einrichtung gehören. Hamburg Open Science
          werden Daten aus verschiedenen Speicher-Systemen zur Verfügung
          gestellt. Dargestellt wird die Anzahl der in den Kollektionen
          verzeichneten Publikationen.
        </LegendText>
      </ContentToggle>
      <ContentToggle
        path="/graph/explore"
        show={showGraphExploreLegend}
        actionCreator={toggleGraphExploreLegend}
        title="Legende"
      >
        <LegendSVG />
      </ContentToggle>
    </>
  )
}

export default Legend
