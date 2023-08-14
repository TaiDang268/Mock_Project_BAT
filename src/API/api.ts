import axios from 'axios'

const baseURL = 'http://localhost:3002'

const apiService = axios.create({
  baseURL
})

export const getTotalRecords = async (url: string, callback: any) => {
  try {
    const res = await apiService.get(url)
    callback(res.data.length / 8)
  } catch (err) {
    console.log(err)
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
