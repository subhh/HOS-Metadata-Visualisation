import config from 'config'

export const STATS_RIGHTS = 'rightsOA'
export const STATS_LANGUAGE = 'language'
export const STATS_YEAR = 'publicationYear'
export const STATS_TYPE = 'resourceType'
export const STATS_SUBJECT = 'subject'
export const STATS_WITHOUT_SUBJECT = 'unbekannt'
export const STATS_WITH_SUBJECT = 'bekannt'

const {
  [STATS_LANGUAGE]: langLimit,
  [STATS_YEAR]: yearLimit,
  [STATS_TYPE]: typeLimit,
} = config.queryLimits

/**
 * Query object to request stats from solr backend via JSON API
 */
export default {
  [STATS_RIGHTS]: {
    type: 'terms',
    field: STATS_RIGHTS,
  },
  [STATS_LANGUAGE]: {
    type: 'terms',
    field: STATS_LANGUAGE,
    mincount: 0,
    limit: langLimit,
  },
  [STATS_YEAR]: {
    type: 'terms',
    field: STATS_YEAR,
    mincount: 0,
    limit: yearLimit,
    sort: {
      index: 'desc',
    },
  },
  [STATS_TYPE]: {
    type: 'terms',
    field: STATS_TYPE,
    mincount: 0,
    limit: typeLimit,
  },
  [STATS_WITHOUT_SUBJECT]: {
    type: 'query',
    q: '-subject:[* TO *]',
  },
  [STATS_WITH_SUBJECT]: {
    type: 'query',
    q: 'subject:[* TO *]',
  },
}
