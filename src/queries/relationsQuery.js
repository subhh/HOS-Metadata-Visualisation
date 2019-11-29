import config from 'config'

const { collectionField, topNSubject, topMCoSubjects, queryLimits } = config

/**
 * Query object to request related subjects from solr backend via JSON API
 */
export default {
  collections: {
    type: 'terms',
    field: collectionField,
    limit: queryLimits[collectionField],
    facet: {
      subjects: {
        type: 'terms',
        field: 'subject',
        limit: topNSubject,
        facet: {
          related: {
            type: 'terms',
            field: 'subject',
            limit: topMCoSubjects,
          },
        },
      },
    },
  },
}
