import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { SearchContainer } from '../../Search/SearchContainer'


export const AppNavbarView = () => {

  return (<>
    <Navbar className=' navbar-light bg-light' expand="lg">
      <Navbar.Brand href="/">Movies APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to='/movies' className='nav nav-link'>Movies</Link>
          <Link to='/shows' className='nav nav-link'>Tv Shows</Link>
          <Link to='/favorites' className='nav nav-link'>Favorites</Link>
        </Nav>
        <SearchContainer />
      </Navbar.Collapse>
    </Navbar>
  </>
  )
}
