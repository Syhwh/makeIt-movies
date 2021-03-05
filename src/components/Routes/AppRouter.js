import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { MainPage } from "../UI/Pages/MainPage";
import { MainRoutes } from "./MainRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/login' component={MainPage} />
          <Route path='/' component={MainRoutes} />
        </Switch>
      </div>
    </Router>
  )
}
