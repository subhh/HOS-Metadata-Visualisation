import React from 'react'
import { render, waitForElement, mockAsync, restoreAsyncMock } from 'test-utils'
import Graph from 'components/Graph'
import relationsMock from '__mocks__/solrRelationsMock'
import relationsQueryMock from '__mocks__/solrRelationsWithQueryMock'
import relationsMockConstructed from '__mocks__/solrRelationsMockSimple'

it('<Graph /> renders correctly without query', async () => {
  mockAsync(relationsMock)

  const { container } = render(<Graph />)
  const node = await waitForElement(() => container.querySelector('svg'))

  expect(node.querySelectorAll('circle').length).toBe(45)
  expect(node.querySelectorAll('line').length).toBe(84)

  restoreAsyncMock()
})

it('<Graph /> renders correctly with query', async () => {
  mockAsync(relationsQueryMock)

  const { container } = render(<Graph query="Hochschulschrift" />)
  const node = await waitForElement(() => container.querySelector('svg'))

  expect(node.querySelectorAll('circle').length).toBe(11)
  expect(node.querySelectorAll('line').length).toBe(18)

  restoreAsyncMock()
})

it('<Graph /> has right amount of elements with constructed response', async () => {
  mockAsync(relationsMockConstructed)

  const { container } = render(<Graph />)
  const node = await waitForElement(() => container.querySelector('svg'))

  expect(node.querySelectorAll('circle').length).toBe(8)
  expect(node.querySelectorAll('line').length).toBe(7)

  restoreAsyncMock()
})
