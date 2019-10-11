import { keyBy, mapValues, mapKeys, omit, pick } from 'lodash'
import {
  STATS_LANGUAGE,
  STATS_RIGHTS,
  STATS_TYPE,
  STATS_WITHOUT_SUBJECT,
  STATS_WITH_SUBJECT,
  STATS_YEAR,
  STATS_SUBJECT,
} from 'queries/statsQuery'
import typeMap from 'data/resources.json'
import langJSON from 'data/languages.json'

const keyMappings = {
  [STATS_LANGUAGE]: mapValues(keyBy(langJSON, 'code'), x => x.name),
  [STATS_TYPE]: typeMap,
  [STATS_RIGHTS]: {
    zugriffsbeschränkt: 'Closed/unbekannt',
  },
}

export const UPDATE_STATS = 'UPDATE_STATS'
export const APPLY_MAPPING = 'APPLY_MAPPING'

export const updateStats = data => ({ type: UPDATE_STATS, payload: data })

// create a key value map
const transform = (data = { buckets: [] }, mapping) => {
  const result = mapValues(keyBy(data.buckets, 'val'), x => x.count)
  if (mapping) {
    return mapKeys(result, (count, lang) => mapping[lang] || lang)
  }
  return result
}

/**
 * Transforms solr stats response
 */
const statsReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case UPDATE_STATS:
      const transformed = mapValues(payload.facets, (value, key, obj) => {
        switch (key) {
          case STATS_LANGUAGE:
          case STATS_TYPE:
          case STATS_YEAR:
          case STATS_RIGHTS:
            return transform(value, keyMappings[key])
          case STATS_WITH_SUBJECT:
          case STATS_WITHOUT_SUBJECT:
            return value.count
          default:
            return value
        }
      })

      const withBuckets = omit(transformed, [
        STATS_WITH_SUBJECT,
        STATS_WITHOUT_SUBJECT,
      ])

      const subject = pick(transformed, [
        STATS_WITHOUT_SUBJECT,
        STATS_WITH_SUBJECT,
      ])

      const newState = { ...withBuckets, [STATS_SUBJECT]: subject }

      return { ...state, ...newState }
    default:
      return state
  }
}

export default statsReducer
