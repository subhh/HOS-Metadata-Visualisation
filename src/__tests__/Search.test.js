import React from 'react'
import {
  customRenderWithRouter,
  fireEvent,
  waitForElement,
  wait,
  mockAsync,
  restoreAsyncMock,
} from 'test-utils'
import Search from 'container/SearchContainer'
import mockData from '__mocks__/solrSearchMock'

it('<Search /> should match snapshot', async () => {
  const { container } = customRenderWithRouter(<Search />)
  expect(container.firstChild).toMatchSnapshot()
})

it('changes value and resets value via ‘Escape’ key', () => {
  const { getByTestId } = customRenderWithRouter(<Search />)
  const input = getByTestId('input')

  fireEvent.change(input, { target: { value: 'Hamburg' } })
  expect(input.value).toBe('Hamburg')

  fireEvent.keyDown(input, { key: 'Escape' })
  expect(input.value).toBe('')
})

it('changes value and submits via ‘Enter’ key', async () => {
  mockAsync(mockData)
  const { getByTestId, container } = customRenderWithRouter(<Search />)
  const input = getByTestId('input')

  fireEvent.change(input, { target: { value: 'Hamburg' } })
  expect(input.value).toBe('Hamburg')

  fireEvent.keyDown(input, { key: 'Enter' })

  await wait(() => expect(container).toBeTruthy())

  expect(container.textContent).toContain('5.200 Publikationen')

  restoreAsyncMock()
})
