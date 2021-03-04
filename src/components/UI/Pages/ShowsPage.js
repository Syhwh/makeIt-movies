import React from 'react'

import { Shows } from '../../Shows/Shows'



export const ShowsPage = () => {
  return (
    <div className='container' >
      <h1>Popular Shows</h1>
      <Shows endPoint={'popular'} />
    </div>
  )
}
