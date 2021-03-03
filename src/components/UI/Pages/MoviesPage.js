import React from 'react'

import { Movies } from '../../Movies/Movies'


export const MoviesPage = () => {
  return (
    <div>
      <h1>Popular Movies</h1>
      <Movies endPoint={'popular'} />
    </div>
  )
}
