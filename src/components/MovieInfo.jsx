import { DataContext } from 'contexts/dataContext';
import React, { useContext, useEffect } from 'react';
import { getMovies, getRecommended } from 'services/tmdbAPI';
import styles from '../styles/components/movieinfo.module.css';

export const MovieInfo = () => {
  const { movieId, setMovie, movie, setQueryValues } = useContext(DataContext);

  useEffect(() => {
    const loadMovie = async () => {
      const result = await getMovies(movieId);
      setMovie(result);
      if (result.recommendations.results.length > 0) {
        setQueryValues({
          fn: () => getRecommended(movieId),
          key: ['Smovie', movieId],
        });
      }
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

  const photoCheck = movie?.credits?.cast[27].profile_path;

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

        <div className={styles.carouselContainer}>
          <ul className={styles.carouselList}>
            {movie.credits.cast.map(cast => (
              <li className={styles.carouselItem} key={cast.cast_id}>
                <button className={styles.carouselBox}>
                  <picture>
                    <img
                      className={styles.carouselImg}
                      src={
                        cast.profile_path
                          ? `https://image.tmdb.org/t/p/w780${cast.profile_path}`
                          : 'https://via.placeholder.com/300x450?text=Image+Not+Found'
                      }
                      alt={`Picture of ${cast.name}`}
                    />
                  </picture>
                  <p>{cast.name}</p>
                  <p>{cast.character}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* <picture className={styles.img}>
        <img src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`} />
      </picture> */}
      </div>
    );
};
