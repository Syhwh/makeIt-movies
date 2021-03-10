import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { AuthContext } from '../../context/AuthContext'

import { MainPage } from "../UI/Pages/MainPage";
import { MainRoutes } from "./MainRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {

  const { userAuth } = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/login' component={MainPage} />
          {/* <Route path='/' component={MainRoutes} /> */}
          <PrivateRoute path='/' isUserAuth={userAuth} component={MainRoutes} />
        </Switch>
      </div>
    </Router>
  )
}
