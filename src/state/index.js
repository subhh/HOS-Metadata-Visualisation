import { createContext } from 'react'
import {
  UPDATE_QUERY,
  TOGGLE_MAP_LEGEND,
  TOGGLE_GRAPH_LEGEND,
  TOGGLE_GRAPH_EXPLORE_LEGEND,
} from './actions'

export const StateContext = createContext()
export const DispatchContext = createContext()

const { innerWidth, innerHeight } = window
const showLegend = innerWidth > 768 && innerHeight > 1024

// initial application state
export const initialState = {
  query: '',
  showMapLegend: showLegend,
  showGraphLegend: showLegend,
  showGraphExploreLegend: showLegend,
}

/**
 * Root reducer
 */
export function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_QUERY:
      return { ...state, query: payload || '' }
    case TOGGLE_MAP_LEGEND:
      return { ...state, showMapLegend: !state.showMapLegend }
    case TOGGLE_GRAPH_LEGEND:
      return { ...state, showGraphLegend: !state.showGraphLegend }
    case TOGGLE_GRAPH_EXPLORE_LEGEND:
      return { ...state, showGraphExploreLegend: !state.showGraphExploreLegend }
    default:
      return state
  }
}
