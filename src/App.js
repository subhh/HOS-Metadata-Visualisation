import React, { useEffect, useReducer, useCallback } from 'react'
import { Route, matchPath } from 'react-router-dom'
import { initialState, StateContext, DispatchContext, reducer } from './state'
import { updateQuery } from './state/actions'
import Stats from './components/Stats'
import Layout from './components/Layout'
import HeroContainer from './components/HeroContainer'

export const AppWithoutProvider = () => {
  const renderHero = useCallback(
    ({ width, height, targetHeight }) => (
      <HeroContainer
        width={width}
        height={height}
        targetHeight={targetHeight}
      />
    ),
    []
  )

  return (
    <Route
      render={({ match }) => {
        const expand = matchPath(match.path, { path: '*/explore' })
        return (
          <Layout
            expand={expand}
            renderHero={renderHero}
            renderContent={() => <Stats />}
          />
        )
      }}
    />
  )
}

const App = ({ query }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch(updateQuery(query))
  }, [query])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <AppWithoutProvider />
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
