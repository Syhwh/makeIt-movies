import React from 'react'
import { useParams } from "react-router-dom"
import { Movies } from '../../Movies/Movies'

export const MoviesPage = () => {
  const { id } = useParams()
  const category = getCategory(id)
  return (<>
    <div className='container' >
      <h1>{category} Movies</h1>
      <Movies endPoint={!id ? 'popular' : id} />
    </div>
  </>
  )
}

const getCategory = (category) => {
  switch (category) {
    case 'popular':
      return 'Popular'
    case 'top_rated':
      return 'Top Rated'
    case 'now_playing':
      return 'Now Playing'
    default:
      return 'Popular'
  }
}