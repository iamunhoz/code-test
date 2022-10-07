import axios from 'axios'
import { ParamsGetPosts } from 'types'

const API_URL = 'https://stormy-shelf-93141.herokuapp.com/articles'

const getPosts = async (params: ParamsGetPosts) => {
  const response = await axios.get(API_URL, { params })
  return response
}

export { getPosts }
