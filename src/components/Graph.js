import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'
import { height } from 'styled-system'
import useFetchRelations from 'hooks/useFetchRelations'
import useSimulation from 'hooks/useSimulation'
import { SVG } from './GraphElements'
import GraphLink from './GraphLink'
import GraphNode from './GraphNode'

const Wrapper = styled(Box)`
  ${height};
`

/**
 * Graph component, draws nodes and links to SVG, uses WebCola for simulation
 */
const Graph = ({
  query,
  className,
  width = 400,
  height = 400,
  simulationHeight = 400,
  showLinks = true,
  explore = false,
  debug = false,
  onSelect,
}) => {
  // Get facet relations from server
  const data = useFetchRelations(query, explore)

  // Start simulation
  const { nodes, links, ready } = useSimulation({
    data,
    width,
    height: simulationHeight,
  })

  return (
    <Wrapper
      className={className}
      width={width}
      height={height}
      bg="rgba(0,0,0, 0.03)"
    >
      {ready && (
        <SVG>
          {!!showLinks &&
            links.map(d => (
              <GraphLink {...d} key={`link-${d.id}`} debug={debug} />
            ))}
          {nodes.map(d => (
            <GraphNode
              {...d}
              onClick={onSelect}
              debug={debug}
              key={`node-${d.id}`}
            />
          ))}
        </SVG>
      )}
    </Wrapper>
  )
}

export default Graph
