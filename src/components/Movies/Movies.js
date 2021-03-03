import React, { useState, useEffect } from 'react'

import { movieAPI } from '../../helpers/apiRequest';
import { Movie } from './Movie/Movie';

export const Movies = ({ endPoint }) => {

  const [movies, setMovies] = useState()

  const fetchMovies = async () => {
    const { data } = await movieAPI.get(`/${endPoint}?api_key=${process.env.REACT_APP_API_KEY}`)
    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies()
  }, []);

  if (!movies) return <div>Loading...</div>

  return (
    <div>
      {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>

  )
}
