import React from 'react'
import { render } from 'test-utils'
import BarChart from 'components/BarChart'

it('<BarChart /> without data should match snapshot', () => {
  const { container } = render(<BarChart title="Bar chart title" />)
  expect(container).toMatchSnapshot()
})

it('<BarChart /> with data should match snapshot', () => {
  const { container } = render(
    <BarChart title="Bar chart title" data={{ var1: 10, var2: 30 }} />
  )
  expect(container).toMatchSnapshot()
})
