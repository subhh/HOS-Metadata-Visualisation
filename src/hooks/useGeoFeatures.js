import { useMemo } from 'react'
import useCountRadiusScale from 'hooks/useCountRadiusScale'

/**
 *  Hook transform locations to feature collection
 */
const useGeoFeatures = geo => {
  const scale = useCountRadiusScale()
  return useMemo(() => {
    return {
      type: 'FeatureCollection',
      features: geo.map(({ count, lng, lat, collection }) => {
        const col = collection.buckets.map(b => b.val).join('-')

        return {
          type: 'Feature',
          properties: {
            count,
            radius: scale(count),
            label: col,
          },
          geometry: {
            type: 'Point',
            coordinates: [lng, lat, 0],
          },
        }
      }),
    }
  }, [geo, scale])
}

export default useGeoFeatures
