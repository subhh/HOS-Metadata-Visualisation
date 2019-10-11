import React from 'react'
import Hero from 'components/HeroContainer'
import { customRenderWithRouter } from 'test-utils'
import { MemoryRouter } from 'react-router-dom'

it('<Hero /> without route sould match snapshot', () => {
  const { container } = customRenderWithRouter(<Hero />, null, '/graph')
  expect(container.firstChild).toMatchSnapshot()
})

it('<Hero /> should match snapshot on route `/graph`', () => {
  const { container } = customRenderWithRouter(
    <MemoryRouter initialEntries={['/graph']}>
      <Hero />
    </MemoryRouter>
  )
  expect(container.firstChild).toMatchSnapshot()
})

it('<Hero /> should match snapshot on route `/graph/explore`', () => {
  const { container } = customRenderWithRouter(
    <MemoryRouter initialEntries={['/graph/explore']}>
      <Hero />
    </MemoryRouter>
  )
  expect(container.firstChild).toMatchSnapshot()
})
