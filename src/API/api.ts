import axios, { AxiosResponse } from 'axios'

const baseURL = 'http://localhost:3002'

const apiService = axios.create({
  baseURL
})

export const api = {
  getAll: async (url: string): Promise<AxiosResponse> => {
    return await apiService.get(url)
  }
}

export const get = async (url: string, params: any, callback: any) => {
  try {
    const res = await apiService.get(url, { params })
    callback(res.data)
  } catch (error) {
    console.log(error)
  }
}
