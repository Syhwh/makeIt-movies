import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'

export const Routes = ({ title, url }) => {
  return (
    <NavDropdown title={title} id="basic-nav-dropdown">
      <Redirect to={{ pathname: `/${title}` }} />
      <Link className='dropdown-item' to={`${url}/popular`}>Popular</Link>
      <NavDropdown.Divider />
      <Link className='dropdown-item' to={`${url}/top_rated`}>Top Rated</Link>
      <NavDropdown.Divider />
      <Link className='dropdown-item' to={`${url}/now_playing`}>Now Playing</Link>
    </NavDropdown>
  )
}
