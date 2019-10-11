import config from 'config'

const { queryLimits } = config

const field = 'internal_geoLocation_facet'

/**
 * Query object to request geo locations from solr backend via JSON API
 */
export default {
  locations: {
    type: 'terms',
    field,
    limit: queryLimits[field],
    facet: {
      collection: {
        type: 'terms',
        field: config.collectionField,
      },
    },
  },
}
