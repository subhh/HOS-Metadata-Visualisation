import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  height: 100%;
`

const DebugContainer = styled(Container)`
  border: 3px solid red;
  &:after {
    position: absolute;
    top: 0;
    background: black;
    color: white;
    padding: 0.5rem;
    content: ${({ width, height }) => `"${width}/${height}"`};
  }
`

/**
 * Tracks window size changes and passes width and height down to child component.
 */
const AutoSizer = ({ render, debug }) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const ref = useRef(null)

  const handleResize = () => {
    setWidth(ref.current.clientWidth)
    setHeight(ref.current.clientHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    // return clean-up function
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useLayoutEffect(() => {
    handleResize()
  })

  const ContainerComp = debug ? DebugContainer : Container

  return (
    <ContainerComp ref={ref} width={width} height={height}>
      {render({ width, height })}
    </ContainerComp>
  )
}

export default AutoSizer
