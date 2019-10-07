import axios from 'axios'
import store from '../store/index'

const base = axios.create({
  baseURL: 'https://api.punkapi.com/v2/'

})
base.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.state.loading = true
  return config
}, function (error) {
  // Do something with request error
  store.state.error = error
  return Promise.reject(error)
})

base.interceptors.response.use((res) => {
  store.state.loading = false
  return res
}, error => {
  store.state.error = error
  return Promise.reject(error)
})
export default base
