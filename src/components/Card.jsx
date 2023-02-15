import styles from '../styles/components/card.module.css';
import { CiStar } from 'react-icons/ci';
import { useContext } from 'react';
import { DataContext } from '../contexts/dataContext';
import { getTopRated } from '../services/tmdbAPI';

export default function Card({ movie = {} }) {
  // const { setQueryValues } = useContext(DataContext);

  // function handleClick() {
  //   setQueryValues({ fn: getTopRated, key: 'peliculas' });
  // }
  return (
    <a className={styles.container}>
      <div className={styles.image}>
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
      </div>
      <div className={styles.info}>
        <h2>{movie.original_title}</h2>
        <div className={styles.rating}>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
      </div>
    </a>
  );
}
