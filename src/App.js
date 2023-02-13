import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from './services/tmdbAPI';
import Categories from './components/Categories';

function App() {
  const [movieId, setMovieID] = useState(
    Math.floor(Math.random() * 500000) + 1
  );
  const { data: movie, isLoading } = useQuery({
    queryKey: ['movies', movieId],
    queryFn: () => getMovies(movieId),
  });
  console.log(movie);
  const imageUrl = movie?.poster_path;
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';

  function handleClick() {
    const id = Math.floor(Math.random() * 500000) + 1;
    setMovieID(id);
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='App'>
      {/* para el diplay: flex col */}
      <header></header>
      <div>
        <aside></aside>
        <main></main>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
