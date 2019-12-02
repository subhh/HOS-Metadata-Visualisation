import React, { useState, useEffect, useCallback, useContext } from 'react'
import ReactMapGL from 'react-map-gl'
import { withTheme } from 'styled-components'
import { StateContext } from 'state'
import useFetchGeo from 'hooks/useFetchGeo'
import useGeoFeatures from 'hooks/useGeoFeatures'
import useMapStyle from 'hooks/useMapStyle'
import ViewportOverlay from './ViewportOverlay'
import 'mapbox-gl/dist/mapbox-gl.css'

/**
 * Map component, displays institutions, number of publications, and clusters
 */
const Map = ({
  width = 400,
  height = 400,
  tileSize = 256,
  debug,
  theme,
  zoom,
}) => {
  const { query } = useContext(StateContext)

  const [viewport, setViewport] = useState({
    latitude: 53.5237,
    longitude: 10.02,
    zoom: 9.5,
    minZoom: 9.5,
    maxZoom: 16,
  })

  // if zoom passed via props, merge into state
  useEffect(() => {
    if (zoom && zoom !== viewport.zoom) {
      setViewport({ ...viewport, zoom })
    }
  }, [zoom, viewport])

  const handleViewportChange = useCallback(viewport => {
    setViewport(viewport)
  }, [])

  const geoLocations = useFetchGeo(query)
  const geoFeatures = useGeoFeatures(geoLocations)
  const mapStyle = useMapStyle({
    tileSize,
    geoFeatures,
    theme,
  })

  return (
    <ReactMapGL
      {...viewport}
      width={width}
      height={height}
     
      mapStyle={mapStyle}
      onViewportChange={handleViewportChange}
    >
      {debug && <ViewportOverlay viewport={viewport} />}
    </ReactMapGL>
  )
}

export default withTheme(Map)
