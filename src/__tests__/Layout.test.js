import React from 'react'
import Layout from 'components/Layout'
import { render, waitForElement } from 'test-utils'

const renderHero = ({ width, height, targetHeight }) => (
  <div>{`Hero ${width} ${height} ${targetHeight}`}</div>
)
const renderContent = () => <div data-testid="content">Content</div>

it('<Layout /> sould show Hero and Content when not expanded', async () => {
  const { asFragment, getByTestId } = render(
    <Layout renderHero={renderHero} renderContent={renderContent} />
  )

  await waitForElement(() => getByTestId('content'))
  expect(asFragment()).toMatchSnapshot()
})

it('<Layout /> should only show Hero when expanded', () => {
  const { container } = render(
    <Layout
      renderHero={renderHero}
      renderContent={renderContent}
      expand={true}
    />
  )
  expect(container.firstChild).toMatchSnapshot()
})
