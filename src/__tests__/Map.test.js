import React from 'react'
import { render } from 'test-utils'
import Map from 'components/Map'

it('should match snapshot without data', () => {
  const { container } = render(<Map />)
  expect(container.firstChild).toMatchSnapshot()
})
