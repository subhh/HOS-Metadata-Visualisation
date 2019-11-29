import React, { useContext } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import { StateContext } from 'state'
import useUpdateSearch from 'hooks/useUpdateSearch'
import Graph from 'components/Graph'

/**
 * Routes between collapsed and expanded graph component
 */
const GraphContainer = ({ location, history, ...props }) => {
  const { query } = useContext(StateContext)
  const handleSelect = useUpdateSearch({ location, history })

  return (
    <Switch>
      <Route exact path="/graph">
        {({ location }) =>
          location.search ? (
            <Redirect to={{ ...location, pathname: '/graph/explore' }} />
          ) : (
            <Graph onSelect={handleSelect} explore={false} {...props} />
          )
        }
      </Route>
      <Route exact path="/graph/explore">
        <Graph
          query={query}
          onSelect={handleSelect}
          explore={true}
          {...props}
        />
      </Route>
    </Switch>
  )
}

export default withRouter(GraphContainer)
