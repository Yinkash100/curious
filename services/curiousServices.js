import axios from 'axios'
import bcrypt from 'bcrypt'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
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

  hashPassword(user) {
    const password = user.password
    const saltRounds = 10

    return bcrypt.hashSync(password, saltRounds)
  },
}
