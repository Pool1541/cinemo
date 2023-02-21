import styles from 'styles/components/card.module.css';
import Rating from './Rating';

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
        <h2>{movie.title}</h2>
        <Rating votes={movie.vote_average} />
      </div>
    </a>
  );
}
