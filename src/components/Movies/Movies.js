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
    <div className='container'>
      <div className='row'>
        {movies.map(movie => (
          <div className='col-md-4' key={movie.id}>
            <Movie movie={movie} />
          </div>))}
      </div>
    </div>

  )
}
