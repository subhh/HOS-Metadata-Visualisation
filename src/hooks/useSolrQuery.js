import { useMemo } from 'react'

const { REACT_APP_SOLR_API } = process.env

/**
 * Hook combines search query with solr request template
 */
const useSolrQuery = (template, query) => {
  return useMemo(() => {
    const q = query && query !== '*' ? `"${encodeURIComponent(query)}"` : '*'
    var params = 'q='+q+'&rows=0';
    if (template) params += ('&json.facet=' + JSON.stringify(template));
    
    return REACT_APP_SOLR_API.replace('${window.location.host}',window.location.host) + encodeURIComponent(params);
  }, [query, template])
}

export default useSolrQuery
