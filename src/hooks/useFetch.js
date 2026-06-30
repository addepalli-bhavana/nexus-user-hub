import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import api from '../services/api'

export const useFetch = (endpoint, actionCreator, dependencies = []) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get(endpoint)
      dispatch(actionCreator(response.data))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [dispatch, ...dependencies])

  return { loading, error, refetch: fetchData }
}
