import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom'
import { MoviesPage } from '../UI/Pages/MoviesPage'

export const MoviesRoutes = ({ title = '' }) => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <NavDropdown title={title} id="basic-nav-dropdown">
        <Link className='dropdown-item' to={`${url}/popular`}>Popular</Link>
        <NavDropdown.Divider />
        <Link className='dropdown-item' to={`${url}/top_rated`}>Top Rated</Link>
        <NavDropdown.Divider />
        <Link className='dropdown-item' to={`${url}/now_playing`}>Now Playing</Link>
      </NavDropdown>
      <Switch>
        <Route path={`${path}/:id`}  >
          <MoviesPage />
        </Route>
      </Switch>
    </>

  )
}
