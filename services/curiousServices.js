import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3001`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default {
  createUser(user) {
    return apiClient.post('/users', user)
  },
  loginUser(token) {
    return apiClient.post('/login', token)
  },

  get(url) {
    return apiClient.get(url)
  },
}
