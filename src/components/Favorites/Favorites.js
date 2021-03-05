import React, { useContext } from 'react'
import { MoviesContext } from '../../context/MoviesContext'
import { Movie } from '../Movies/Movie/Movie'


export const Favorites = () => {

  const { favourites } = useContext(MoviesContext)

  const handleRemove = (movie) => {
    console.log(movie)
  }

  return (
    <div className='container'>
      <div className='row'>
        {favourites.map(movie => (
          <div className='col-md-4' key={movie.id}>
            <Movie movie={movie} handleOnClick={handleRemove} />
          </div>))}
      </div>
    </div>

  )

}
