import { useReducer, useCallback } from 'react'
import statsReducer, { updateStats } from 'reducer/statsReducer'
import useAsyncHook from './useAsyncHook'
import useSolrQuery from './useSolrQuery'
import statsQuery from 'queries/statsQuery'

/**
 * Hook fetches stats every time the query changes
 */
export default query => {
  const solrQuery = useSolrQuery(statsQuery, query)
  const [stats, dispatch] = useReducer(statsReducer, { count: null })
  const handleResultUpdate = useCallback(data => {
    dispatch(updateStats(data))
  }, [])

  const { isLoading } = useAsyncHook(solrQuery, handleResultUpdate)

  return { isLoading, stats }
}
