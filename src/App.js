import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MoviesPage } from './components/UI/Pages/MoviesPage';
import { Shows } from "./components/Shows/Shows";
import { AppNavbarView } from "./components/UI/NavBar/AppNavbarView";

function App() {
  return (<>
    <Router>
      <div>
        <AppNavbarView />
        <Switch>
          <Route path="/movies" component={MoviesPage} />
          <Route path="/shows" component={Shows} />
          <Route path="/" />
        </Switch>
      </div>
    </Router>
  </>
  );
}

export default App;
