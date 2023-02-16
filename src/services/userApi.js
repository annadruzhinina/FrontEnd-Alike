import api from './apiConfig'

export const getUsers = () => {
  try {
    const response = api.get('user/')
    return response
  } catch (error) {
    throw new Error(error)
  }
}
