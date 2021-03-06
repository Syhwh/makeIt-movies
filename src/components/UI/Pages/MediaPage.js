import React from 'react'
import { useParams } from "react-router-dom"
import { getCategory } from '../../../helpers/getCategory'
import { MediaContainer } from '../../Media/MediaContainer'

export const MediaPage = ({ mediaType = 'Movies' }) => {
  const { id } = useParams()
  const category = getCategory(id)
  return (
    <>
      <div className='container' >
        <h1>{category} {mediaType}</h1>
        <MediaContainer endPoint={!id ? 'popular' : id} mediaType={mediaType} />
      </div>
    </>
  )
}

