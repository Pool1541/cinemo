import { DataContext } from 'contexts/dataContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from 'styles/components/card.module.css';
import Rating from './Rating';

export default function Card({ movie = {} }) {
  const { setMovieId } = useContext(DataContext);

  function handleClick() {
    setMovieId(movie.id);
  }

  return (
    <Link to={`/movies/${movie.id}`} className={styles.container}>
      <div className={styles.image}>
        <picture>
          <source
            srcSet={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
            media='(max-width: 425px)'
          />
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
            loading='lazy'
          />
        </picture>
      </div>
      <div className={styles.info}>
        <h2>{movie.title}</h2>
        <Rating votes={movie.vote_average} />
      </div>
    </Link>
  );
}
