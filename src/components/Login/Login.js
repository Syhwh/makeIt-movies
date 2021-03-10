import { useContext, useState } from 'react'

import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { AuthContext } from '../../context/AuthContext'

export const Login = ({ history }) => {

  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState('')


  const handleOnChange = (e) => {
    const { value } = e.target
    setEmail(value)
    console.log(email)
  }

  const handleOnClick = (e) => {
    e.preventDefault()
    login(email)
    history.replace('/')
  }

  return (
    <div className='container mt-5'>
      <h2>Login</h2>
      <hr />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" onChange={handleOnChange} value={email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleOnClick}>
          Login
          </Button>
      </Form>
    </div>
  )
}
