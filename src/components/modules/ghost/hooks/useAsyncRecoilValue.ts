import { useEffect, useState } from 'react'
import { useRecoilValueLoadable } from 'recoil'

function isPromise(promise: Promise<any>) {
  return !!promise && typeof promise.then === 'function'
}

export const useAsyncRecoilValue = (atom: any, params: any) => {
  const { state, contents } = useRecoilValueLoadable(params ? atom(...params) : atom)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [value, setValue] = useState<any>({})

  useEffect(() => {
      setLoading(state === 'loading')
      setError(state === 'hasError')
  },[state])

  useEffect(() => {
    if (!loading && !error && !isPromise(contents)) {
      setValue(contents)
    }
  }, [loading, error, contents])

  return {
    loading,
    error,
    value,
  }
}
