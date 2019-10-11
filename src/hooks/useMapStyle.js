import { useMemo } from 'react'

const { REACT_APP_TILES_URL, REACT_APP_TYPO3_PUBLIC } = process.env

const formatCount = [
  'number-format',
  ['get', 'count'],
  { 'min-fraction-digits': 0, 'max-fraction-digits': 0 },
]

/**
 * Hook creates mapbox style object
 */
const useMapStyle = ({ tileSize, geoFeatures, theme }) =>
  useMemo(() => {
    const radius = ['get', 'radius']
    return {
      version: 8,
      sources: {
        hh: {
          type: 'raster',
          tiles: [REACT_APP_TILES_URL],
          attribution:
            'Freie und Hansestadt Hamburg, Landesbetrieb Geoinformation und Vermessung',
          tileSize,
        },
        institutions: {
          type: 'geojson',
          data: geoFeatures,
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
          clusterProperties: {
            count: ['+', ['get', 'count']],
            radiusSquare: ['+', ['^', ['get', 'radius'], 2]],
          },
        },
      },
      glyphs: `${REACT_APP_TYPO3_PUBLIC}/glyphs/{fontstack}/{range}.pbf`,
      layers: [
        {
          id: 'background',
          type: 'raster',
          source: 'hh',
        },
        {
          id: 'clusters',
          type: 'circle',
          source: 'institutions',
          filter: ['==', 'cluster', true],
          paint: {
            'circle-color': theme.colors.blueLight,
            'circle-opacity': 0.9,
            'circle-radius': ['sqrt', ['get', 'radiusSquare']],
          },
        },
        {
          id: 'circles',
          type: 'circle',
          source: 'institutions',
          filter: ['!=', 'cluster', true],
          paint: {
            'circle-color': theme.colors.blueDark,
            'circle-opacity': 0.9,
            'circle-radius': radius,
          },
        },
        {
          id: 'cluster-counts',
          type: 'symbol',
          source: 'institutions',
          layout: {
            'text-field': formatCount,
            'text-font': ['OpenSans800'],
            'text-size': 16,
          },
          paint: {
            'text-color': theme.colors.white,
            'text-halo-width': 2,
            'text-halo-color': theme.colors.blueMediumLight,
          },
        },
        {
          id: 'counts',
          type: 'symbol',
          source: 'institutions',
          filter: ['!', ['has', 'point_count']],
          layout: {
            'text-field': formatCount,
            'text-font': ['OpenSans800'],
            'text-size': 16,
          },
          paint: {
            'text-color': theme.colors.white,
            'text-halo-width': 2,
            'text-halo-color': theme.colors.blueDark,
          },
        },
        {
          id: 'labels',
          type: 'symbol',
          source: 'institutions',
          filter: ['!=', 'cluster', true],
          layout: {
            'text-field': '{label}',
            'text-font': ['OpenSans800'],
            'text-size': 16,
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
            'text-radial-offset': ['+', ['/', radius, 16], 1],
            'text-justify': 'auto',
          },
          paint: {
            'text-color': theme.colors.blueDark,
            'text-halo-width': 2,
            'text-halo-color': theme.colors.white,
          },
        },
      ],
    }
  }, [tileSize, geoFeatures, theme])

export default useMapStyle
