import axios from 'axios'

const baseURL = 'http://192.168.3.162:3006'
const apiService = axios.create({
  baseURL
})

//react query

export const fetchData = async (endpoint: string, params: any) => {
  const res = await axios.get(`${baseURL}${endpoint}`, { params })
  return res.data
}
export const fetchNumberPage = async (endpoint: string, params: any) => {
  const res = await axios.get(`${baseURL}${endpoint}`, { params })
  return Math.ceil(res.data.length / 8)
}
//useeffects
export const getTotalRecords = async (url: string, params: any, callback: any) => {
  try {
    const res = await apiService.get(url, { params })
    callback(Math.ceil(res.data.length / 8))
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
