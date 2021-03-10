import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap'
import { AuthContext } from '../../../context/AuthContext'

export const AppNavbarView = () => {

  const { userAuth, logout } = useContext(AuthContext)


  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Movies APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to='/movies' className='nav nav-link'>Movies</Link>
          <Link to='/shows' className='nav nav-link'>Tv Shows</Link>
          <Link to='/favorites' className='nav nav-link'>Favorites</Link>
        </Nav>
        <Nav.Link>Welcome {userAuth}</Nav.Link>
        <Button onClick={logout} variant="outline-success">logout</Button>

        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  )
}
