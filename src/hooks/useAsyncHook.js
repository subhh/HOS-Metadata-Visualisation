import { useEffect, useState } from 'react'

const fetchJSON = async (url, cb) => {
  try {
    const response = await fetch(url)
    const json = await response.json()
    cb(json)
  } catch (e) {
    console.log(e.message)
  }
}

/**
 * Hook fetches data, saves result to the local state,
 * and executes callback if provided
 */
const useAsyncHook = (url, cb) => {
  const [result, setResult] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
  }, [url])
  useEffect(() => {
    let isMounted = true

    fetchJSON(url, data => {
      if (isMounted) {
        setIsLoading(false)
        setResult(data)
        if (cb) cb(data)
      }
    })

    return () => {
      isMounted = false
    }
  }, [url, cb])

  return { result, isLoading }
}

export default useAsyncHook
