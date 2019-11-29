import React from 'react'
import { HTMLOverlay } from 'react-map-gl'
import styled from 'styled-components'

const Box = styled.div`
  background: black;
  color: white;
  display: inline-block;
  padding: 1rem;
  width: 300px;
`

/**
 * Displays viewport properties, used for configuration
 */
const ViewportOverlay = ({ viewport }) => (
  <HTMLOverlay
    redraw={({ width, height, project, unproject }) => {
      const { latitude, longitude, zoom } = viewport
      return (
        <Box>
          <div>lat: {latitude}</div>
          <div>lng: {longitude} </div>
          <div>zoom: {zoom}</div>
          <div>{width}</div>
          <div>{height}</div>
        </Box>
      )
    }}
  />
)

export default ViewportOverlay
