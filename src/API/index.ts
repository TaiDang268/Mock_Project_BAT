import axios from 'axios'
import { useEffect, useState } from 'react'
import { IItemNewsProps } from '~/components/common/ItemNews'

const baseURL = 'http://localhost:3002'

const useAxios = (endpoint: string, params?: any) => {
  const [response, setResponse] = useState<IItemNewsProps[] | []>()

  useEffect(() => {
    axios
      .get(baseURL + endpoint, { params: params })
      .then((res) => {
        setResponse(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return { response }
}

export default useAxios
