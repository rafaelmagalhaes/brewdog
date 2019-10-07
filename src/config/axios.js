import axios from 'axios'

const base = axios.create({
  baseURL: 'https://api.punkapi.com/v2/'
})

export default base
