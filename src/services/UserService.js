import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://alumni-rebook.herokuapp.com/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async Search (query) {
    try {
      const response = await apiClient.get('', { params: { q: query } })
      return response.data.data
    } catch (err) {
      console.log(err, '<--', query)
    }
  },
  async getUsers () {
    try {
      const response = await apiClient.get('/user')
      console.log(response )
      return response.data
    } catch (err) {
      console.log(err)
    }
  }
}
