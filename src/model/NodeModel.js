import { sumBy } from 'lodash'
import { NODE_ROOT, NODE_COL, NODE_SUBJ } from 'components/GraphElements'

const maxLabelLength = 40

export default ({ id, depth, selected }) => {
  const type = [NODE_ROOT, NODE_COL, NODE_SUBJ][depth + 1]
  return {
    id,
    label:
      depth === 0
        ? id
        : `${id.slice(0, maxLabelLength)} ${
            id.length > maxLabelLength ? '...' : ''
          }`,
    counts: [],
    parents: [],
    children: [],
    siblings: [],
    depth,
    selected,
    type,
    get count() {
      return sumBy(this.counts, 'count')
    },
  }
}
