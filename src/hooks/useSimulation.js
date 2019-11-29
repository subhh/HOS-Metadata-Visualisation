import { useState, useLayoutEffect, useReducer, useEffect } from 'react'
import * as cola from 'webcola'
import * as d3 from 'd3'
import simulationReducer from 'reducer/simulationReducer'
import useCountRadiusScale from 'hooks/useCountRadiusScale'
/**
 * Hook creates WebCola simulation and passes data back to graph component
 */
export default ({ data, width, height }) => {
  const countRadiusScale = useCountRadiusScale()
  const [simulation, setSimulation] = useState(null)
  const [ready, setReady] = useState(false)
  const [alpha, setAlpha] = useState(0)
  const [{ simNodes, links, constraints }, dispatch] = useReducer(
    simulationReducer,
    {
      nodes: [],
      simNodes: [],
      links: [],
      constraints: [],
      cache: {},
      scale: countRadiusScale,
    }
  )

  useEffect(() => {
    dispatch({
      type: 'DATA_CHANGED',
      payload: { ...data, width, height, scale: countRadiusScale },
    })
  }, [data, width, height, countRadiusScale])

  useLayoutEffect(() => {
    if (simNodes.length > 0) {
      const sim = cola
        .d3adaptor(d3)
        .symmetricDiffLinkLengths(50, 1)
        .avoidOverlaps(true)
        .size([width, height])
        .nodes(simNodes)
        .links(links)
        .constraints(constraints)

      // 1. iterations of layout with no constraints
      // 2. iterations with only structural (user-specified) constraints and
      // 3. iterations of layout with all constraints including anti-overlap constraints.
      sim.start(15, 0, 0, 0, true, true)

      // forces the component to re-render
      sim.on('tick', () => {
        setAlpha(sim.alpha())
      })

      setReady(true)
      setSimulation(sim)

      return () => {
        sim.stop()
      }
    }
  }, [simNodes, links, constraints, height, width])

  return {
    nodes: simNodes,
    links,
    alpha,
    simulation,
    ready,
  }
}
