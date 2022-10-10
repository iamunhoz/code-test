import axios from 'axios'
import { ParamsFetchPosts, ParamsPostContact } from 'types'

const API_URL = 'https://stormy-shelf-93141.herokuapp.com/articles'

const getPosts = async (params: ParamsFetchPosts) => {
  const response = await axios.get(API_URL, { params })
  return response
}

const postContact = async (params: ParamsPostContact) => {
  const response = await axios.post(API_URL, params)
  return response
}

export { getPosts, postContact }
