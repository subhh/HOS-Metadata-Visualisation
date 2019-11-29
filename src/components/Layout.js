import React, { useState, useEffect } from 'react'
import { Spring } from 'react-spring/renderprops.cjs'
import { useTransition, animated } from 'react-spring'
import { Box } from 'rebass'
import { debounce } from 'lodash'

const headerHeightFallback = 130
const AnimatedBox = animated(Box)

/**
 * Main layout component, upper hero section can be expanded, content area is optional
 * and adapts to the hero.
 */
const Layout = ({
  expand,
  renderHero = x => null,
  renderContent = x => null,
}) => {
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)

  useEffect(() => {
    // get header height from surrounding layout
    const nav = document.querySelector('#nav-primary')
    const header = document.querySelector('#header')
    let hh

    if (nav && header) {
      hh = nav.clientHeight + header.clientHeight + 24
    } else {
      hh = headerHeightFallback
    }

    const updateDimensions = () => {
      const width = window.innerWidth
      const height = expand ? window.innerHeight - hh : window.innerHeight * 0.4
      setWidth(width)
      setHeight(height)
    }

    updateDimensions()

    const debouncedHandleResize = debounce(updateDimensions, 200)

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [expand])

  const statsToggleTransition = useTransition(!expand, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <>
      {height && (
        <Spring
          to={{
            height,
          }}
        >
          {({ height: currentHeight }) =>
            renderHero({
              width,
              height: Math.trunc(currentHeight),
              targetHeight: height,
            })
          }
        </Spring>
      )}
      {statsToggleTransition.map(
        ({ item: collapsed, key, props }) =>
          collapsed && (
            <AnimatedBox key={key} style={props}>
              {renderContent()}
            </AnimatedBox>
          )
      )}
    </>
  )
}

export default Layout
