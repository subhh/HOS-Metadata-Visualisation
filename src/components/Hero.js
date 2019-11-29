import React, { useMemo } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import GraphContainer from 'container/GraphContainer'
import SearchContainer from 'container/SearchContainer'
import Map from 'components/Map'
import Navigation from './Navigation'
import Legend from './Legend'
import ButtonLink from './ButtonLink'
import { shadow } from 'utils'

const Wrapper = styled.div`
  position: relative;
`

const Toggle = styled(ButtonLink)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: ${({ theme: { space } }) => `${space[5]}px ${space[4]}px`};
  ${shadow};
`

const Search = styled(SearchContainer)`
  position: absolute;
  top: 0;
  left: 0;
  margin: ${({ theme: { space } }) => `${space[5]}px ${space[4]}px`};
`

const Nav = styled(Navigation)`
  position: absolute;
  top: 0;
  right: 0;
  margin: ${({ theme: { space } }) => `${space[5]}px ${space[4]}px`};
`

const Hero = ({ width, height, targetHeight }) =>
  useMemo(() => {
    return (
      <Wrapper>
        <Switch>
          <Route
            path="/map"
            render={() => <Map width={width} height={height} />}
          />
          <Route
            path="/graph"
            render={() => (
              <Wrapper>
                <GraphContainer
                  width={width}
                  height={height}
                  simulationHeight={targetHeight}
                  debug={false}
                />
                <Switch>
                  <Route exact path="/graph">
                    <Toggle to="/graph/explore">Themen erkunden</Toggle>
                  </Route>
                  <Route exact path="/graph/explore">
                    <Toggle to="/graph">zur Übersicht</Toggle>
                  </Route>
                </Switch>
              </Wrapper>
            )}
          />
        </Switch>
        <Legend />
        <Search />
        <Nav />
      </Wrapper>
    )
  }, [width, height, targetHeight])

export default Hero
