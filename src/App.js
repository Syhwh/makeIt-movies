import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './components/Routes/AppRouter';
import { MoviesContextProvider } from './context/MoviesContext';
import { AuthContextProvider } from './context/AuthContext';

function App() {

  return (<>
    <AuthContextProvider>
      <MoviesContextProvider>
        <AppRouter />
      </MoviesContextProvider>
    </AuthContextProvider>
  </>
  );
}

export default App;
