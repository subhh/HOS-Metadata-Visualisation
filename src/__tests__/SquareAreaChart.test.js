import React from 'react'
import { render } from 'test-utils'
import SquareAreaChart from 'components/SquareAreaChart'

const props = {
  data: { var1: 10, var2: 30 },
  title: 'Title',
}

it('should match snapshot without data', () => {
  const { container } = render(<SquareAreaChart />)
  expect(container).toMatchSnapshot()
})

it('should match snapshot with data provided', () => {
  const { container } = render(<SquareAreaChart {...props} />)
  expect(container).toMatchSnapshot()
})

it('should match snapshot with flipped colors', () => {
  const { container } = render(<SquareAreaChart flipColors {...props} />)
  expect(container).toMatchSnapshot()
})

it('should match snapshot with reversed order', () => {
  const { container } = render(<SquareAreaChart reverse {...props} />)
  expect(container).toMatchSnapshot()
})

it('number of children should always sum up to square of size', () => {
  const { getAllByTestId } = render(
    <SquareAreaChart data={{ var1: 1, var2: 199 }} />
  )
  expect(getAllByTestId('cell').length).toBe(100)
})

it('number of children should always sum up to square of size', () => {
  const { getAllByTestId } = render(
    <SquareAreaChart data={{ var1: 1, var2: 1, var3: 1 }} />
  )
  expect(getAllByTestId('cell').length).toBe(100)
})
