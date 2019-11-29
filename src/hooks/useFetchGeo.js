import { useState, useCallback } from 'react'
import geoLocationQuery from 'queries/geoLocationQuery'
import useAsyncHook from './useAsyncHook'
import useSolrQuery from './useSolrQuery'

/**
 * Hook fetches geo locations every time the query changes
 */
export default query => {
  const solrQuery = useSolrQuery(geoLocationQuery, query)
  const [geoLocations, setGeoLocations] = useState([])

  useAsyncHook(
    solrQuery,
    useCallback(data => {
      const loc = data.facets.locations
      const locations = (loc && loc.buckets) || []
      setGeoLocations(
        locations
          .map(({ val, ...rest }) => {
            const [lat, lng] = val.split(',').map(v => parseFloat(v))
            return { ...rest, lat, lng }
          })
          .filter(({ lat, lng }) => lat && lng)
      )
    }, [])
  )

  return geoLocations
}
