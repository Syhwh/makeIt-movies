import axios from 'axios'

const BASE_URL = {
  movies: 'https://api.themoviedb.org/3/movie',
  shows: 'https://api.themoviedb.org/3/tv/'
}


export const movieAPI = axios.create({
  baseURL: BASE_URL.movies,
  timeout: 5000,
});

export const tvShowsAPI = axios.create({
  baseURL: BASE_URL.shows,
  timeout: 5000,
});

