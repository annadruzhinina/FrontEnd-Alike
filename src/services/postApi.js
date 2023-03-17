import api from './apiConfig'
import { getUsers } from './userApi.js'

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Token ${localStorage.getItem("knox") || null}`);
  })
}

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
    let token = await getToken()
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };

    const response = await api.post('post/', {
      project_name: postData.project_name,
      github_link: postData.github_link,
      image: postData.image
    })
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export const updatePost = async (postData, postID) => {
  try {
      let token = await getToken();

      const headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
      };

      const response = await api.put(`post/${postID}`, postData, { headers } ); 
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const deletePost = async (id) => {
  try {
      let token = await getToken();

      const headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
      };

      const response = await api.delete(`post/${id}`, { headers })
      return response.data;
  } catch (error) {
      throw error;
  }
};