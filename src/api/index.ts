import axios, { AxiosRequestConfig } from 'axios'

const API_URL = 'https://stormy-shelf-93141.herokuapp.com/articles'

const getPosts = async (params: AxiosRequestConfig) => {
  const response = await axios.get(API_URL, params)
  return response
}

export { getPosts }
