import { useMemo } from 'react'
import useFetchGeo from 'hooks/useFetchGeo'
import { max, map } from 'lodash'
import { scaleSqrt } from 'd3'

const useCountRadiusScale = () => {
  const allGeoLocations = useFetchGeo('*')
  return useMemo(() => {
    const maxCount = max(map(allGeoLocations, 'count'))
    return scaleSqrt()
      .domain([0, maxCount || 0])
      .range([0, (maxCount && 100) || 0])
  }, [allGeoLocations])
}

export default useCountRadiusScale
