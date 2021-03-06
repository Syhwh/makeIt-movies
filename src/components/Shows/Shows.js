import React, { useState, useEffect, useContext } from 'react'
import { MoviesContext } from '../../context/MoviesContext';

import { tvShowsAPI } from '../../helpers/apiRequest';
import { MediaCard } from '../MediaCard/MediaCard';
import { LoadingSpinner } from '../shared/LoadingSpinner';

export const Shows = ({ endPoint }) => {

  const [shows, setShows] = useState()
  const { favorites, setFavorites, setShowAlert, setNotificationData } = useContext(MoviesContext)

  const fetchshows = async () => {
    const { data } = await tvShowsAPI.get(`/${endPoint}?api_key=${process.env.REACT_APP_API_KEY}`)
    setShows(data.results)
  }

  useEffect(() => {
    fetchshows()
  }, [endPoint]);

  const handleSave = (show) => {
    setFavorites([show, ...favorites])
    setShowAlert(true)
    setNotificationData({ element: 'Serie', action: 'saved' })
  }

  if (!shows) return <LoadingSpinner />

  return (
    <div className='container'>
      <div className='row'>
        {shows.map(show => (
          <div className='col-md-4' key={show.id}>
            <MediaCard media={show} handleOnClick={handleSave} buttonText='Add to Favorites' variant={'success'} />
          </div>))}
      </div>
    </div>

  )
}
