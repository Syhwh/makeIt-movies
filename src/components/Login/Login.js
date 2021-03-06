import React from 'react'
import { Button, Form } from 'react-bootstrap'

export const Login = ({ history }) => {

  const handleOnClick = (e) => {
    console.log(e)
    e.preventDefault()
    history.replace('/')
  }

  return (
    <div className='container mt-5'>
      <h2>Login </h2>
      <hr />
      <Form onSubmit={handleOnClick}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter your user name" />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>
        <Button onClick={handleOnClick} variant="primary" type="submit">Login </Button>
      </Form>
    </div>
  )
}
