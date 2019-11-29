export const UPDATE_QUERY = 'UPDATE_QUERY'
export const TOGGLE_MAP_LEGEND = 'TOGGLE_MAP_LEGEND'
export const TOGGLE_GRAPH_LEGEND = 'TOGGLE_GRAPH_LEGEND'
export const TOGGLE_GRAPH_EXPLORE_LEGEND = 'TOGGLE_MAGRAPH_EXPLOREEGEND'

/**
 * Action creators for state transitions
 */
export function updateQuery(value) {
  const sanitized = value ? value.replace(/<.*>/gim, '').trim() : value

  return {
    type: UPDATE_QUERY,
    payload: sanitized,
  }
}

export function toggleMapLegend() {
  return {
    type: TOGGLE_MAP_LEGEND,
  }
}

export function toggleGraphLegend() {
  return {
    type: TOGGLE_GRAPH_LEGEND,
  }
}

export function toggleGraphExploreLegend() {
  return {
    type: TOGGLE_GRAPH_EXPLORE_LEGEND,
  }
}
