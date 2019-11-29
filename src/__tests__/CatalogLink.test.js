import React from 'react'
import { render, waitForElement } from 'test-utils'
import SearchResult from 'components/SearchResult'

it('<SearchResult /> renders correctly', async () => {
  const mockData = {
    response: {
      numFound: 10,
    },
  }

  const text = 'anzeigen'

  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: () => Promise.resolve(mockData),
  })

  const { getByText, asFragment } = render(<SearchResult />)

  expect(asFragment()).toMatchSnapshot()

  const node = await waitForElement(() => getByText(text))

  expect(fetch).toHaveBeenCalledTimes(1)
  expect(node).toHaveTextContent(text)

  expect(asFragment()).toMatchSnapshot()

  global.fetch.mockRestore()
})
