import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from 'test-utils'
import GraphContainer from 'container/GraphContainer'

it('<GraphContainer /> should not crash on route ‘/graph’', () => {
  render(
    <MemoryRouter initialEntries={['/graph']}>
      <GraphContainer width={400} height={400} />
    </MemoryRouter>
  )
})

it('<GraphContainer /> should not crash on route ‘/graph/explore’', () => {
  render(
    <MemoryRouter initialEntries={['/graph/explore']}>
      <GraphContainer width={400} height={400} expand />
    </MemoryRouter>
  )
})
