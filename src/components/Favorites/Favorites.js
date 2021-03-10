import React, { useContext } from 'react'
import { MoviesContext } from '../../context/MoviesContext'
import { Movie } from '../Movies/Movie/Movie'


export const Favorites = () => {

  const { favorites, setFavorites } = useContext(MoviesContext)

  const handleRemove = (movie) => {
    const newFavorites = favorites.filter((favorite) => favorite.id !== movie.id)
    setFavorites(newFavorites)
  }

  return (
    <div className='container'>
      <div className='row'>
        {favorites.map(movie => (
          <div className='col-md-4' key={movie.id}>
            <Movie movie={movie} handleOnClick={handleRemove} variant='danger' buttonText='remove favorite' />
          </div>))}
      </div>
    </div>

  )

}
