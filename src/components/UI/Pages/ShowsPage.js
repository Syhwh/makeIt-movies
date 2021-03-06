import React from 'react'
import { useParams } from 'react-router-dom'
import { Shows } from '../../Shows/Shows'

export const ShowsPage = () => {
  const { id } = useParams()
  const category = getCategory(id)
  return (
    <div className='container' >
      <h1>{category} Series</h1>
      <Shows endPoint={!id ? 'popular' : id} />
    </div>
  )
}

const getCategory = (category) => {
  switch (category) {
    case 'popular':
      return 'Popular'
    case 'top_rated':
      return 'Top Rated'
    case 'on_the_air':
      return 'Now Playing'
    default:
      return 'Popular'
  }
}