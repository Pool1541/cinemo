import { DataContext } from 'contexts/dataContext';
import { useContext } from 'react';
import styles from 'styles/components/card.module.css';
import Rating from './Rating';

export default function Card({ movie = {} }) {
  // const { setQueryValues } = useContext(DataContext);
  const { setMovieId } = useContext(DataContext);
  // function handleClick() {
  //   setQueryValues({ fn: getTopRated, key: 'peliculas' });
  // }

  function handleClick() {
    setMovieId(movie.id);
  }

  return (
    <a onClick={handleClick} className={styles.container}>
      <div className={styles.image}>
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
          loading='lazy'
        />
      </div>
      <div className={styles.info}>
        <h2>{movie.title}</h2>
        <Rating votes={movie.vote_average} />
      </div>
    </a>
  );
}
