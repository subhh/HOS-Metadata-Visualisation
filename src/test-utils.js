import React, { useReducer } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { StateContext, DispatchContext, reducer, initialState } from './state'
import theme from './theme'

const AllTheProviders = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    </ThemeProvider>
  )
}

const WithRouter = ({ children }) => (
  <MemoryRouter>
    <AllTheProviders>{children}</AllTheProviders>
  </MemoryRouter>
)

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export const customRenderWithRouter = (ui, options) =>
  render(ui, {
    wrapper: WithRouter,
    ...options,
  })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

export const mockAsync = data => {
  jest.spyOn(global, 'fetch').mockImplementation(url => {
    return Promise.resolve({
      json: () => Promise.resolve(data),
    })
  })
}

export const restoreAsyncMock = () => {
  global.fetch.mockRestore()
}
