import React, { useState, useEffect, useContext } from 'react'
import { useRouteMatch } from 'react-router-dom';

import { MoviesContext } from '../../context/MoviesContext';

import { getApiEndpoint } from '../../helpers/apiRequest';

import { LoadingSpinner } from '../shared/LoadingSpinner';
import { MediaCard } from './MediaCard';


export const MediaContainer = ({ endPoint, mediaType }) => {
  const { path, url } = useRouteMatch()
  const [movies, setMovies] = useState()

  const { favorites, setFavorites, setShowAlert, setNotificationData } = useContext(MoviesContext)

  const apiEndpoint = getApiEndpoint(path)

  const fetchMovies = async (api, endPoint) => {
    const { data } = await api.get(`/${endPoint}?api_key=${process.env.REACT_APP_API_KEY}`)
    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies(apiEndpoint, endPoint)
  }, [endPoint])

  if (!movies) return <LoadingSpinner />

  const handleSave = (movie) => {
    setFavorites([movie, ...favorites])
    setShowAlert(true)
    setNotificationData({ element: `${mediaType}`, action: 'saved' })
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


