import { useState, useCallback } from 'react'
import useAsyncHook from './useAsyncHook'
import useSolrQuery from './useSolrQuery'

/**
 * Hook fetches the result count every time the query changes
 */
export default query => {
  const [count, setCount] = useState(0)
  const solrQuery = useSolrQuery(null, query)
  const handleResultUpdate = useCallback(({ response }) => {
    setCount(response.numFound)
  }, [])
  const { isLoading } = useAsyncHook(solrQuery, handleResultUpdate)

  return { count, isLoading }
}
