import axios from 'axios'

export const getCatAPI = () => axios("https://api.thecatapi.com/v1/images/search").then(res => res.data[0].url)