import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './components/Routes/AppRouter';
import { MoviesContextProvider } from './context/MoviesContext';

function App() {
  return (<>
    <MoviesContextProvider>
      <AppRouter />
    </MoviesContextProvider>
  </>
  );
}

export default App;
