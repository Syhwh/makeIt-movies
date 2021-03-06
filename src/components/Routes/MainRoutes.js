import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { MoviesContext } from '../../context/MoviesContext'

import { Login } from '../Login/Login'
import { AlertMessage } from '../shared/AlertMessage'

import { AppNavbarView } from '../UI/NavBar/AppNavbarView'
import { FavoritesPage } from '../UI/Pages/FavoritesPage'
import { MediaPage } from '../UI/Pages/MediaPage'


import { MoviesRoutes } from './MoviesRoutes'
import { SeriesRoutes } from './SeriesRoutes'

export const MainRoutes = () => {
  const { showAlert } = useContext(MoviesContext)
  return (
    <>
      <AppNavbarView />
      {showAlert && <AlertMessage />}
      <Switch>
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/login" component={Login} />
        <Route path="/shows" >
          <SeriesRoutes title={'Series'} />
          <MediaPage mediaType={'Series'} />
        </Route>
        <Route path="/movies" >
          <MoviesRoutes title={'Movies'} />
          <MediaPage mediaType={'Movies'} />
        </Route>
        <Route path="/" >
          <MediaPage mediaType={'Movies'} />
        </Route>
      </Switch>
    </>
  )
}
