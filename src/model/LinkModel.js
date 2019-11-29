import { LINK_RC, LINK_CS, LINK_SS } from 'components/GraphElements'

export default ({
  source,
  target,
  strength = 0,
  width,
  depth,
  bidirectional = false,
}) => {
  const id = [source.id, target.id].sort().join('-')

  return {
    id,
    source,
    target,
    // strength value is only used for visual encoding, but not by layout algorithm
    strength,
    width,
    type: [LINK_RC, LINK_CS, LINK_SS][depth],
    bidirectional,
  }
}
