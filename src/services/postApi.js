import api from './apiConfig'

export const getPosts = async () => {
  try {
    const response = await api.get('post/')
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export const createPost = async postData => {
  try {
    const response = await api.post('post/', {
      username: 2,
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
    const response = await api.delete(`post/${postData.id}`, postData.id)
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}
