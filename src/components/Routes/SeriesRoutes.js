import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import { MediaPage } from '../UI/Pages/MediaPage'


export const SeriesRoutes = ({ title }) => {
  const { path, url } = useRouteMatch()
  return (<>
    <NavDropdown title={title} id="basic-nav-dropdown">
      <Link className='dropdown-item' to={`${url}/popular`}>Popular</Link>
      <NavDropdown.Divider />
      <Link className='dropdown-item' to={`${url}/top_rated`}>Top Rated</Link>
      <NavDropdown.Divider />
      <Link className='dropdown-item' to={`${url}/on_the_air`}>On the air</Link>
    </NavDropdown>
    <Switch>
      <Route path={`${path}/:id`}  >
        <MediaPage mediaType='Series' />
      </Route>
    </Switch>
  </>

  )
}
