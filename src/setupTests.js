import React from 'react'
import '@testing-library/jest-dom/extend-expect'

jest.mock('react-map-gl', () => {
  const FakeMap = jest.fn(({ children }) => (
    <div data-mock="fake-map">{children}</div>
  ))
  return FakeMap
})
