import { sum, sumBy } from 'lodash'
import reducer, { updateRelations } from 'reducer/relationsReducer'
import relComplexMock from '__mocks__/solrRelationsMock'
import relSimpleMock from '__mocks__/solrRelationsMockSimple'

it('sum of collections counts should be equal root count', () => {
  const { nodes } = reducer({}, updateRelations(relComplexMock))

  const root = nodes.find(x => x.depth === -1)
  const collections = nodes.filter(n => n.depth === 0)

  expect(sum(collections.map(x => x.count))).toBe(root.count)
})

it('subject count should be correct', () => {
  const { nodes } = reducer({}, updateRelations(relComplexMock))

  const subjects = nodes.filter(n => n.depth === 1)

  subjects.forEach(subject => {
    const countsSum = sumBy(subject.counts, 'count')
    const supordinatedNodes =
      subject.siblings.filter(d => d.depth < subject.depth).length + 1

    expect(countsSum).toBe(subject.count)
    expect(subject.counts.length).toBe(supordinatedNodes)
  })
})

it('root -> collections links should sum up to 1', () => {
  const { links } = reducer({}, updateRelations(relComplexMock))
  const primaryLinks = links.filter(l => l.source.depth === -1)

  expect(sum(primaryLinks.map(l => l.strength))).toBe(1)
})

it('all links should have a strength between 0 and 1', () => {
  const { links } = reducer({}, updateRelations(relComplexMock))

  links.forEach(l => {
    expect(l.strength).toBeGreaterThan(0)
    expect(l.strength).toBeLessThanOrEqual(1)
  })
})

it('should have correct number of nodes and links', () => {
  const { nodes, links } = reducer({}, updateRelations(relSimpleMock))

  expect(nodes.length).toBe(6)
  expect(links.length).toBe(7)
})
