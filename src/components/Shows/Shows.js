import React, { useState, useEffect } from 'react'

import { tvShowsAPI } from '../../helpers/apiRequest';
import { Show } from './Show/Show';

export const Shows = ({ endPoint }) => {

  const [shows, setShows] = useState()

  const fetchshows = async () => {
    const { data } = await tvShowsAPI.get(`/${endPoint}?api_key=${process.env.REACT_APP_API_KEY}`)
    setShows(data.results)
  }

  useEffect(() => {
    fetchshows()
  }, []);

  if (!shows) return <div>Loading...</div>

  return (
    <div className='container'>
      <div className='row'>
        {shows.map(show => (
          <div className='col-md-4' key={show.id}>
            <Show show={show} />
          </div>))}
      </div>
    </div>

  )
}
