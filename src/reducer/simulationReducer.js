import { flatten, clamp, keyBy, mapValues } from 'lodash'
import { scaleLinear } from 'd3'

const padX = 60
const padY = 120
const nodePadding = 16
const fontSizeMultiplier = [9, 6]

/**
 * Prepares the nodes for the WebCola simulation, caches node positions,
 * centers the root node, and creates constraints
 */
const simulationReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'DATA_CHANGED':
      const { nodes: newNodes, groups, width, height, scale } = payload

      // update nodes with cached positions
      const nodes = newNodes.map(node => {
        const { count, label, depth, selected } = node

        // set node size
        if (node.id !== 'root') {
          const radius = scale(count)
          const labelWidth = label.length * fontSizeMultiplier[depth]
          const diameter = radius * 2
          const pad = nodePadding * (selected ? 4 : 1)

          node.radius = radius
          node.width = Math.round(Math.max(labelWidth, diameter) + pad)
          node.height = diameter + 32 + pad
        } else {
          node.width = 0
          node.height = 0
        }

        // set node position
        if (node.selected || node.id === 'root') {
          node.x = width / 2
          node.y = height / 2
        } else {
          const cached = state.cache[node.id]

          if (cached) {
            const newX = clamp(cached.x, padX, width - padX)
            const newY = clamp(cached.y, padY, height - padY)

            node.x = newX
            node.y = newY
          }
        }

        return node
      })

      // update cache
      let cache

      if (width === state.width && height === state.height) {
        cache = {
          ...state.cache,
          ...mapValues(keyBy(state.nodes, 'id'), ({ x, y }) => ({
            x: Math.round(x),
            y: Math.round(y),
          })),
        }
      } else {
        // flush node position cache
        cache = {}
      }

      // add constraints
      const simNodes = [...nodes]

      let constraints = []

      if (nodes.length > 0) {
        const topLeft = {
          id: 'topLeft',
          x: padX,
          y: padY,
          width: 0,
          height: 0,
          fixed: true,
          fixedWeight: 1e6,
        }
        const bottomRight = {
          id: 'bottomRight',
          x: width - padX,
          y: height - padY,
          width: 0,
          height: 0,
          fixed: true,
          fixedWeight: 1e6,
        }

        simNodes.unshift(bottomRight)
        simNodes.unshift(topLeft)

        const tlIdx = simNodes.indexOf(topLeft)
        const brIdx = simNodes.indexOf(bottomRight)

        constraints = flatten(
          simNodes.map((node, i) => {
            if (['root', 'topLeft', 'bottomRight'].indexOf(node.id) > -1)
              return []

            return [
              {
                axis: 'x',
                type: 'separation',
                left: tlIdx,
                right: i,
                gap: node.width / 2,
              },
              {
                axis: 'y',
                type: 'separation',
                left: tlIdx,
                right: i,
                gap: node.height / 2,
              },
              {
                axis: 'x',
                type: 'separation',
                left: i,
                right: brIdx,
                gap: node.width / 2,
              },
              {
                axis: 'y',
                type: 'separation',
                left: i,
                right: brIdx,
                gap: node.height / 2,
              },
            ]
          })
        )
      }

      const widthScale = scaleLinear()
        .domain([0, 1])
        .range([0, 2])

      const links = payload.links.map(l => ({
        ...l,
        width: widthScale(l.strength),
      }))

      return {
        ...state,
        simNodes,
        nodes,
        links,
        constraints,
        groups,
        cache,
        width,
        height,
      }
    default:
      return state
  }
}

export default simulationReducer
