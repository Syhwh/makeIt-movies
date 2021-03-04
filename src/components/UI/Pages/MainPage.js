import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Login } from '../../Login/Login'

export const MainPage = ({ history }) => {
  return (
    <div className='container'>

      <Jumbotron>
        <h1>Welcome to my movies page!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
    </p>


        <Login history={history} />

      </Jumbotron>
    </div>
  )
}
