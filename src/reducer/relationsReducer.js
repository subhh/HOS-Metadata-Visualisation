import { groupBy, mapValues, values, meanBy } from 'lodash'

import createNode from 'model/NodeModel'
import createLink from 'model/LinkModel'

export const RECEIVED_RELATIONS = 'RECEIVED_RELATIONS'
const RELATION_VERTICAL = 'RELATION_VERTICAL'
const RELATION_HORIZONTAL = 'RELATION_HORIZONTAL'

export const updateRelations = (data, query) => ({
  type: RECEIVED_RELATIONS,
  payload: { data, query },
})

const connectRoot = true

// creates a relation between sourceNode and targetNode
const connect = (sourceNode, targetNode, intersectionCount, direction) => {
  if (direction === RELATION_VERTICAL) {
    targetNode.parents.push(sourceNode)
    sourceNode.children.push(targetNode)

    targetNode.counts.push({
      id: sourceNode.id,
      count: intersectionCount,
    })
  } else if (direction === RELATION_HORIZONTAL) {
    sourceNode.siblings.push(targetNode)
    targetNode.siblings.push(sourceNode)
  }

  const link = createLink({
    source: sourceNode,
    target: targetNode,
    strength:
      direction === RELATION_VERTICAL
        ? intersectionCount / sourceNode.count
        : direction === RELATION_HORIZONTAL
        ? // MeetMin metric
          intersectionCount / Math.min(targetNode.count, sourceNode.count)
        : // Jaccard: intersectionCount / (sourceNode.count + targetNode.count),
          0,
    depth: sourceNode.depth + 1,
  })

  return link
}

const transform = d => {
  const { data, query } = d
  const { count, collections } = data.facets
  const relations = collections ? collections.buckets : []
  const queryRe = new RegExp(`^${query}$`, 'i')
  const nodeMap = new Map()
  const links = []

  const rec = ({ sourceNode, targets }) => {
    const nextNodes = []
    const depth = sourceNode.depth + 1

    // breadth first traversal
    targets
      // exclude self referencing relations
      .filter(({ val: id }) => id !== sourceNode.id)
      .forEach(childData => {
        const { val: targetId, count, subjects, related } = childData
        const selected = queryRe.test(targetId)
        let link, targetNode

        switch (depth) {
          // [ROOT]---[COLLECTIONS]
          case 0:
            targetNode = createNode({ id: targetId, depth, selected })
            nodeMap.set(targetId, targetNode)
            link = connect(
              sourceNode,
              targetNode,
              count,
              RELATION_VERTICAL
            )

            if (connectRoot) links.push(link)
            break
          // [COLLECTIONS]---[SUBJECTS]
          case 1:
            targetNode =
              nodeMap.get(targetId) ||
              createNode({ id: targetId, depth, selected })
            nodeMap.set(targetId, targetNode)
            link = connect(
              sourceNode,
              targetNode,
              count,
              RELATION_VERTICAL
            )
            links.push(link)
            break
          // [SUBJECTS]---[SUBJECTS]
          // creates relations between existing subjects, but no new nodes
          case 2:
            targetNode = nodeMap.get(targetId)
            if (targetNode) {
              link = connect(
                sourceNode,
                targetNode,
                count,
                RELATION_HORIZONTAL
              )
              links.push(link)
            }
            break
          default:
            break
        }

        // collect next nodes from relations
        const relations = subjects || related
        if (relations) {
          nextNodes.push({
            sourceNode: nodeMap.get(targetId),
            targets: relations.buckets,
          })
        }
      })

    nextNodes.forEach(rec)
  }

  // create root node
  const root = createNode({ id: 'root', depth: -1 })
  if (connectRoot) nodeMap.set('root', root)
  root.counts.push({ id: '#', count })

  // start recursion
  rec({ sourceNode: root, targets: relations })

  // groups links by unique ids and merges bi-directional links
  const mergedLinks = values(
    mapValues(groupBy(links, 'id'), (group, key) => {
      return {
        ...group[0],
        strength: meanBy(group, 'strength'),
        bidirectional: group.length > 1,
      }
    })
  )

  return {
    nodes: [...nodeMap.values()],
    links: mergedLinks,
    groups: [],
  }
}

/**
 * Reducer transforms solr response to node-link data structure
 */
const reduceRelations = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case RECEIVED_RELATIONS:
      const { nodes, links, groups } = transform(payload)
      return { ...state, nodes, links, groups }
    default:
      return state
  }
}

export default reduceRelations
