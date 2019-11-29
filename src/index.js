import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import App from './App'
import * as serviceWorker from './serviceWorker'
import theme from './theme'
import './index.css'

const Wrapper = styled.div`
  box-sizing: border-box;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Wrapper>
        <Switch>
          <Redirect exact from="/" to={{ pathname: '/map' }} />
          <Route
            exact
            path={['/map', '/graph', '/graph/explore']}
            render={({ location }) => {
              const searchParams = new URLSearchParams(location.search)
              const q = searchParams.get('q')
              return <App query={q} />
            }}
          />
          <Route>Seite konnte nicht gefunden werden.</Route>
        </Switch>
      </Wrapper>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
