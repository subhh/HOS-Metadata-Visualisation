import React from 'react'
import Legend from 'components/Legend'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent } from 'test-utils'

it('should match snapshot on route ‘/map’', () => {
  const { asFragment, getByTestId } = render(
    <MemoryRouter initialEntries={['/map']}>
      <Legend />
    </MemoryRouter>
  )

  expect(asFragment()).toMatchSnapshot()
  fireEvent.click(getByTestId('toggle'))
  expect(asFragment()).toMatchSnapshot()
})

it('should match snapshot on route ‘/graph’', () => {
  const { asFragment, getByTestId } = render(
    <MemoryRouter initialEntries={['/graph']}>
      <Legend />
    </MemoryRouter>
  )

  expect(asFragment()).toMatchSnapshot()
  fireEvent.click(getByTestId('toggle'))
  expect(asFragment()).toMatchSnapshot()
})

it('should match snapshot on route ‘/graph/explore’', () => {
  const { asFragment, getByTestId } = render(
    <MemoryRouter initialEntries={['/graph/explore']}>
      <Legend />
    </MemoryRouter>
  )

  expect(asFragment()).toMatchSnapshot()
  fireEvent.click(getByTestId('toggle'))
  expect(asFragment()).toMatchSnapshot()
})
