import axios from 'axios'

const BASE_URL = {
  movies: 'https://api.themoviedb.org/3/movie',
  shows: 'https://api.themoviedb.org/3/tv/',
  search: `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=`
}


export const movieAPI = axios.create({
  baseURL: BASE_URL.movies,
  timeout: 5000,
});

export const tvShowsAPI = axios.create({
  baseURL: BASE_URL.shows,
  timeout: 5000,
});

export const searchAPI = axios.create({
  baseURL: BASE_URL.search,
  timeout: 5000
})

export const getApiEndpoint = (path) => {
  switch (path) {
    case '/movies':
      return movieAPI
    case '/shows':
      return tvShowsAPI
    default:
      return movieAPI
  }
}