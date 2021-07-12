import axios from 'axios'

export const getCatAPI = () => axios("https://api.thecatapi.com/v1/images/search").then(res => res.data[0].url)
export const getDogAPI = () => axios("https://api.thedogapi.com/v1/images/search").then(res => res.data[0].url)