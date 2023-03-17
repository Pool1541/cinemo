import useFecthMovieData from 'hooks/useFetchMovieData';
import scrollToTop from 'utilities/scrollToTop';
import styles from '../styles/components/movieinfo.module.css';
import Actions from './Actions';
import Rating from './Rating';

export const MovieInfo = () => {
  const { movieId, setMovie, movie, setQueryValues, peliculas } =
    useContext(DataContext);

  useEffect(() => {
    const loadMovie = async () => {
      const result = await getMovies(movieId);
      setMovie(result);
    };
    loadMovie();
  }, [movieId]);

  console.log(movie);

  // runtime en hora y min / revenue
  const duration = movie?.runtime;
  let hours = Math.floor(duration / 60);
  let min = Math.round(duration % 60);

  if (min >= 60) {
    hours += 1;
    min -= 60;
  }

  function toCurrency(amount) {
    const revenue = amount;
    const dollars = revenue.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return dollars;
  }

  if (movie)
    return (
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <div className={styles.absoluteInfo}>
              <h2 className={styles.title}>{movie.title}</h2>
              <div className={styles.meta}>
                <span>{<Rating votes={movie.vote_average} />}</span>
                <span>{`${movie.vote_count} Reviews`}</span>
                <span>{movie.release_date}</span>
                <span>{`${hours}h:${min}min`}</span>
              </div>
              <div className={styles.overview}>
                <p>{movie.overview}</p>
              </div>
              <Actions />
            </div>
          </div>
          <div className={styles.backgroundImage}>
            <picture>
              <source
                srcSet={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                media='(max-width: 320px)'
              />
              <source
                srcSet={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                media='(max-width: 780px)'
              />
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              />
            </picture>
          </div>
        </div>
        <div className={styles.storylineCotnainer}>
          <div className={styles.poster}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={`Poster de ${movie.title}`}
            />
          </div>
          <div className={styles.storylineInfo}>
            <h3>Storyline</h3>
            <p className={styles.sinopsis}>{movie.overview}</p>
            <div>
              <ul className={styles.storylineList}>
                <li className={styles.storylineItem}>
                  <div className={styles.storylineTitle}>Released</div>
                  <div>{movie.release_date}</div>
                </li>
                <li className={styles.storylineItem}>
                  <div className={styles.storylineTitle}>Revenue</div>
                  <div>{toCurrency(movie.revenue)}</div>
                </li>
                <li className={styles.storylineItem}>
                  <div className={styles.storylineTitle}>Status</div>
                  <div>{movie.status}</div>
                </li>
                <li className={styles.storylineItem}>
                  <div className={styles.storylineTitle}>Production</div>
                  <div>{movie.production_companies[0]?.name}</div>
                </li>
                <li className={styles.storylineItem}>
                  <div className={styles.storylineTitle}>Runtime</div>
                  <div>
                    {hours}h {min}min
                  </div>
                </li>
                <li className={styles.storylineItem}>
                  <div className={styles.storylineTitle}>Budget</div>
                  <div>{toCurrency(movie.budget)}</div>
                </li>
                <li className={styles.storylineItem}>
                  <div className={styles.storylineTitle}>Genres</div>
                  <div className={styles.genres}>
                    {movie.genres.map(genre => (
                      <div key={genre.id}>{genre.name}</div>
                    ))}
                  </div>
                </li>
                <li className={styles.storylineItem}>
                  <div className={styles.storylineTitle}>Language</div>
                  <div>{movie.spoken_languages[0]?.name}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2>CAST</h2>
          <div className={styles.carouselContainer}>
            <ul className={styles.carousel}>
              {movie.credits.cast.map(cast => (
                <li key={cast.cast_id}>
                  <a href='#' className={styles.link}>
                    <picture className={styles.imgBox}>
                      <img
                        src={
                          cast.profile_path
                            ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
                            : 'https://via.placeholder.com/300x450?text=Image+Not+Found'
                        }
                      />
                    </picture>
                    <div>
                      <h3 className={styles.name}>{cast.name}</h3>
                      <p className={styles.character}>{cast.character}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
};
