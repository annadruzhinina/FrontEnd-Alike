import api from './apiConfig'

export const getUsers = async () => {
  try {
    const response = await api.get('user/')
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}
