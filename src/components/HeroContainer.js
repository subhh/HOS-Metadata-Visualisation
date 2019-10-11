import React, { useMemo } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import GraphContainer from 'container/GraphContainer'
import SearchContainer from 'container/SearchContainer'
import Map from 'components/Map'
import Notification from 'components/Notification'
import Navigation from 'components/Navigation'
import Legend from 'components/Legend'
import ButtonLink from 'components/ButtonLink'
import { shadow } from 'utils'
import config from 'config'

const { width: minW, height: minH } = config.minResolution

const Wrapper = styled.div`
  position: relative;
`

const ExplorationToggle = styled(ButtonLink)`
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

const MessageBox = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`

/**
 * Container for the upper layout, it uses routes to switch between the map and graph component.
 * It also includes a legend, the search, and the main navigation.
 */
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
                />
                <Switch>
                  <Route
                    exact
                    path="/graph"
                    render={() => (
                      <ExplorationToggle to="/graph/explore">
                        Themen erkunden
                      </ExplorationToggle>
                    )}
                  ></Route>
                  <Route
                    exact
                    path="/graph/explore"
                    render={() => (
                      <ExplorationToggle to="/graph">
                        zur Übersicht
                      </ExplorationToggle>
                    )}
                  ></Route>
                </Switch>
                <Route
                  path="/graph/explore"
                  render={() => (
                    <Notification
                      WrapperComponent={MessageBox}
                      localStorageId="resolutionNotification"
                      timeout={null}
                      testCondition={() => {
                        const { innerWidth, innerHeight } = window
                        return innerWidth < minW || innerHeight < minH
                      }}
                      children={`Die Darstellung ist für eine Bildschirmauflösung von
                      ${minW}x${minH} und größer ausgelegt.`}
                    />
                  )}
                ></Route>
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
