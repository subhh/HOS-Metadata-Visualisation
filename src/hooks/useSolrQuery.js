import { useMemo } from 'react'

const { REACT_APP_SOLR_API } = process.env

/**
 * Hook combines search query with solr request template
 */
const useSolrQuery = (template, query) => {
  return useMemo(() => {
    const q = query && query !== '*' ? `"${encodeURIComponent(query)}"` : '*'

    return `${REACT_APP_SOLR_API}?q=${q}&rows=0${
      template ? '&json.facet=' + JSON.stringify(template) : ''
    }`
  }, [query, template])
}

export default useSolrQuery
