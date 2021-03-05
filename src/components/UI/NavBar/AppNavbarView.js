import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap'

export const AppNavbarView = () => {
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
        <Nav.Link href="/login">logout</Nav.Link>
        <Nav.Link>Pepito Perez</Nav.Link>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}
