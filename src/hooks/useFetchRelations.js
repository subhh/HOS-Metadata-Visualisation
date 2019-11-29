import { useReducer, useCallback } from 'react'
import collectionsQuery from 'queries/collectionsQuery'
import relationsQuery from 'queries/relationsQuery'
import reducer, { updateRelations } from 'reducer/relationsReducer'
import useSolrQuery from './useSolrQuery'
import useAsyncHook from './useAsyncHook'
// import mock from '__mocks__/solrRelationsMockSimple'

/**
 * Hook fetches subject relations every time the query/explore mode changes
 */
export default (query, explore) => {
  const [state, dispatch] = useReducer(reducer, {
    nodes: [],
    links: [],
    groups: [],
  })

  const solrQuery = useSolrQuery(
    explore ? relationsQuery : collectionsQuery,
    query
  )

  const handleResultUpdate = useCallback(
    data => {
      dispatch(updateRelations(data, query))
    },
    [query]
  )

  useAsyncHook(solrQuery, handleResultUpdate)

  return state
}
