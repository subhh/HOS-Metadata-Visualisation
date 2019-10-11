import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from 'test-utils'
import Button from 'components/ButtonLink'

it('<Button /> should match snapshot', () => {
  const { container } = render(
    <MemoryRouter>
      <Button to="somewhere">Button</Button>
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})
