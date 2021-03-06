import React, { useContext } from 'react'
import { MoviesContext } from '../../context/MoviesContext'
import { MediaCard } from '../MediaCard/MediaCard'

export const Favorites = () => {

  const { favorites, setFavorites, setNotificationData, setShowAlert } = useContext(MoviesContext)

  const handleRemove = (movie) => {
    console.log(movie)
    const newFavorites = favorites.filter((currentMovie) => currentMovie.id !== movie.id)
    setFavorites(newFavorites)
    setNotificationData({ element: 'favorite', action: 'removed' })
    setShowAlert(true)
  }

  return (
    <div className='container'>
      <div className='row'>
        {favorites.map(media => (
          <div className='col-md-4' key={media.id}>
            <MediaCard media={media} handleOnClick={handleRemove} buttonText='remove from favorites' variant={'danger'} />
          </div>))}
      </div>
    </div>

  )

}
