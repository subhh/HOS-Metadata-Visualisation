import React from 'react'
import { render } from 'test-utils'
import ColumnChart from 'components/ColumnChart'

const data = { var1: 10, var2: 30 }

it('<ColumnChart /> without data should match snapshot', () => {
  const { container } = render(<ColumnChart />)
  expect(container).toMatchSnapshot()
})

it('<ColumnChart /> with data should match snapshot', () => {
  const { container } = render(<ColumnChart data={data} />)
  expect(container).toMatchSnapshot()
})
