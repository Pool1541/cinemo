import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from './services/tmdbAPI';
import Categories from './components/Categories';
import GridContainer from './components/GridContainer';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
