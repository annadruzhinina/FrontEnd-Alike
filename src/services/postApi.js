import api from './apiConfig'
import { getUsers } from './userApi.js'

export const getPosts = () => {
  try {
    const response = api.get('post/')
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export const createPost = async postData => {
  try {
    let username = window.localStorage.getItem('username')
    let users = await getUsers()
    let userID = users.data.find(user => {
      return user.username === username
    }).id
    console.log(`User ID: ${userID}`)

    const response = await api.post('post/', {
      username: userID,
      project_name: postData.project_name,
      github_link: postData.github_link,
      image: postData.image
    })
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export const deletePost = async postData => {
  try {
    const response = await api.delete(`post/${postData.id}`)
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}
