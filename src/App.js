import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Login } from "./components/Login/Login";
import { MainRoutes } from "./components/Routes/MainRoutes";

function App() {
  return (<>
    <Router>
      <div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={MainRoutes} />
        </Switch>
      </div>
    </Router>
  </>
  );
}

export default App;
