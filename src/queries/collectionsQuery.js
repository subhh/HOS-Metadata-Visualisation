import config from 'config'

const { collectionField, queryLimits } = config

/**
 * Query object to request collections from solr backend via JSON API
 */
export default {
  collections: {
    type: 'terms',
    field: collectionField,
    limit: queryLimits[collectionField],
  },
}
