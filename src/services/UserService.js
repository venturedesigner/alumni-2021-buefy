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
      return response.data
    } catch (err) {
      console.log(err)
    }
  },
  async Signup (name, email, password, username) {
    return await apiClient.post('/auth/signup', {
      name: name,
      email: email,
      password: password,
      username: username
    })
  },
  async createMyProfile (decription, profilepic, profilebg) {
    console.log('-->', localStorage.token)
    return await apiClient.post('/user/profile',
      {
        decription: decription,
        profilepic: profilepic,
        profilebg: profilebg
      },
      {
        headers:
    { token: localStorage.token }
      })
  }

}
