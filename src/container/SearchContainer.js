import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import useUpdateSearch from 'hooks/useUpdateSearch'
import Search from 'components/Search'
import { StateContext } from 'state'

/**
 * Gets search query from application state and passes it to the search component
 * provides the search handler, which updates the router history on every search
 */
const SearchContainer = ({ history, location, match, className }) => {
  const { query } = useContext(StateContext)
  const handleChange = useUpdateSearch({ history, location, match })

  return <Search className={className} query={query} onChange={handleChange} />
}

export default withRouter(SearchContainer)
