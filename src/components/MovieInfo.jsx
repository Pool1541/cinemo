import { DataContext } from 'contexts/dataContext';
import React, { useContext, useEffect } from 'react';
import { getMovies } from 'services/tmdbAPI';
import styles from '../styles/components/movieinfo.module.css';

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
    const dollars = (revenue / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return dollars;
  }

  if (movie)
    return (
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>{movie.title}</h2>
          <div>
            <p>
              <span>{movie.vote_count} Reviews</span>
              <span>{movie.release_date}</span>
              <span>
                {hours}h:{min}min
              </span>
            </p>
          </div>
          <p>{movie.overview}</p>
        </div>

        <div className={styles.storylineCotnainer}>
          <img
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt=''
          />

          <div className={styles.storylineInfo}>
            <h3>Storyline</h3>
            <p>{movie.overview}</p>

            <div>
              <ul className={styles.storylineList}>
                <li className={styles.storylineItem}>
                  <div>Released</div>
                  <div>{movie.release_date}</div>
                </li>

                <li className={styles.storylineItem}>
                  <div>Revenue</div>
                  <div>{toCurrency(movie.revenue)}</div>
                </li>

                <li className={styles.storylineItem}>
                  <div>Status</div>
                  <div>{movie.status}</div>
                </li>

                <li className={styles.storylineItem}>
                  <div>Production</div>
                  <div>{movie.production_companies[0].name}</div>
                </li>

                <li className={styles.storylineItem}>
                  <div>Runtime</div>
                  <div>
                    {hours}h {min}min
                  </div>
                </li>

                <li className={styles.storylineItem}>
                  <div>Budget</div>
                  <div>{toCurrency(movie.budget)}</div>
                </li>

                <li className={styles.storylineItem}>
                  <div>Genres</div>
                  <div className={styles.genres}>
                    {movie.genres.map(genre => (
                      <div key={genre.id}>{genre.name}</div>
                    ))}
                  </div>
                </li>

                <li className={styles.storylineItem}>
                  <div>Language</div>
                  <div>{movie.spoken_languages[0].name}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <picture className={styles.img}>
        <img src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`} />
      </picture> */}
      </div>
    );
};
