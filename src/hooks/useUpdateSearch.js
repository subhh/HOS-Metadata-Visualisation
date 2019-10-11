import { useCallback } from 'react'

/**
 * This hook pushes the current location, and the search term on to the history
 */
const useUpdateSearch = ({ location, history }) => {
  const cb = useCallback(
    value => {
      history.push({
        ...location,
        search: value ? `q=${encodeURIComponent(value)}` : null,
      })
    },
    [history, location]
  )

  return cb
}

export default useUpdateSearch
