import React from 'react'
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap'

export const AppNavbarView = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Movies APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/movies">Movies</Nav.Link>
          <Nav.Link href="/shows">Tv Shows</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}
