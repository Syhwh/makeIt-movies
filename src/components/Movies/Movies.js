import React, { useState, useEffect, useContext } from 'react'

import { MoviesContext } from '../../context/MoviesContext';

import { movieAPI } from '../../helpers/apiRequest';
import { MediaCard } from '../MediaCard/MediaCard';
import { LoadingSpinner } from '../shared/LoadingSpinner';


export const Movies = ({ endPoint }) => {

  const [movies, setMovies] = useState()
  const { favorites, setFavorites, setShowAlert, setNotificationData } = useContext(MoviesContext)
  const fetchMovies = async () => {
    const { data } = await movieAPI.get(`/${endPoint}?api_key=${process.env.REACT_APP_API_KEY}`)
    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies()
  }, [endPoint]);

  if (!movies) return <LoadingSpinner />

  const handleSave = (movie) => {
    setFavorites([movie, ...favorites])
    setShowAlert(true)
    setNotificationData({ element: 'movie', action: 'saved' })
  }

  return (
    <div className='container'>
      <div className='row'>
        {movies.map(movie => (
          <div className='col-md-4' key={movie.id}>
            <MediaCard media={movie} handleOnClick={handleSave} buttonText='Add to Favorites' variant={'success'} />
          </div>))}
      </div>
    </div>
  )
}
