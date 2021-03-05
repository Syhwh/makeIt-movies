import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Login } from '../Login/Login'

import { AppNavbarView } from '../UI/NavBar/AppNavbarView'
import { FavoritesPage } from '../UI/Pages/FavoritesPage'
import { MoviesPage } from '../UI/Pages/MoviesPage'
import { ShowsPage } from '../UI/Pages/ShowsPage'

export const MainRoutes = () => {
  return (
    <>
      <AppNavbarView />
      <Switch>
        <Route path="/movies" component={MoviesPage} />
        <Route path="/shows" component={ShowsPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/login" component={Login} />
        <Route path="/" component={MoviesPage} />
      </Switch>
    </>
  )
}
