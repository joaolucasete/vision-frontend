import axios from 'axios'
const api = axios.create({
  baseURL: 'https://vision-b.herokuapp.com/'
})

export default api
