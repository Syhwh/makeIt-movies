import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'

const BASE_URL = {
  images: 'https://image.tmdb.org/t/p/w500'
}

export const Movie = ({ movie }) => {
  const { title, overview, poster_path, vote_average } = movie
  return (
    <Card style={{ width: '18rem', margin: '2rem', }} >
      <Card.Img variant="top" src={`${BASE_URL.images}/${poster_path}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Badge pill variant="success">{vote_average}</Badge>
        <Card.Text>
          {overview}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
