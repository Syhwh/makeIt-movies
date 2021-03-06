import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'

const BASE_URL = {
  images: 'https://image.tmdb.org/t/p/w500'
}

export const MediaCard = ({ media, handleOnClick, buttonText, variant }) => {
  const { title, overview, poster_path, vote_average } = media

  const mediaOverview = truncate(overview)

  return (
    <Card style={{ width: '18rem', margin: '2rem' }} >
      <Card.Img variant="top" src={`${BASE_URL.images}/${poster_path}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Badge pill variant="success">{vote_average}</Badge>
        <Card.Text
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxHeight: '100px',
          }}
        >
          {mediaOverview}
        </Card.Text>
        <Button onClick={() => handleOnClick(media)} variant={variant}>{buttonText}</Button>
      </Card.Body>
    </Card >
  )
}

const truncate = function (str) {
  return str.length > 100 ? str.substring(0, 90) + "..." : str;
}