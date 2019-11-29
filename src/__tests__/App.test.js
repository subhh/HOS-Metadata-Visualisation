import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, mockAsync, restoreAsyncMock, wait } from 'test-utils'
import { AppWithoutProvider } from 'App'
import data from '__mocks__/solrLocationsMock'

it('Route /map should match snapshot', async () => {
  mockAsync(data)
  const { container } = render(
    <MemoryRouter initialEntries={['/map']}>
      <AppWithoutProvider />
    </MemoryRouter>
  )
  await wait(() => expect(container).toBeTruthy())
  expect(container).toMatchSnapshot()
  restoreAsyncMock()
})

it('Route /graph should match snapshot', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/graph']}>
      <AppWithoutProvider />
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})

it('Route /graph/explore should match snapshot', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/graph/explore?q=test']}>
      <AppWithoutProvider />
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})
