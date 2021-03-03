import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../Login/Login'
import { Shows } from '../Shows/Shows'
import { AppNavbarView } from '../UI/NavBar/AppNavbarView'
import { MoviesPage } from '../UI/Pages/MoviesPage'

export const MainRoutes = () => {
  return (
    <>
      <AppNavbarView />
      <Switch>
        <Route path="/movies" component={MoviesPage} />
        <Route path="/shows" component={Shows} />
        <Route path="/login" component={Login} />
        <Route path="/" component={MoviesPage} />
      </Switch>
    </>
  )
}
