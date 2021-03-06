import React from 'react'
import { Spinner } from 'react-bootstrap'

export const LoadingSpinner = () => {
  return (
    <div className='container'>
      <div className='row'>
        <Spinner animation="border" role="status" size="lg">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </div>
  )
}
