import axios from 'axios'

const client = axios.create({
  baseURL: 'https://my-json-server.typicode.com/juststeveking/nuxt-demo',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  get() {
    return client.get('/posts')
  },
  find(id) {
    return client.get(`/posts/${id}`)
  }
}
