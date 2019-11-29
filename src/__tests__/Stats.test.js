import React from 'react'
import Stats from 'components/Stats'
import { render, mockAsync, restoreAsyncMock, wait } from 'test-utils'
import data from '__mocks__/solrStatsMock'

it('should match snapshot', async () => {
  mockAsync(data)
  const { container } = render(<Stats />)

  // Wait for appearance
  await wait(() => {
    expect(container.children.length > 0).toBeTruthy()
  })

  expect(container.firstChild).toMatchSnapshot()
  restoreAsyncMock()
})
