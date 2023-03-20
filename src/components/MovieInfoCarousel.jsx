import styles from 'styles/components/movieInfoCarousel.module.css';
import useFecthMovieData from 'hooks/useFetchMovieData';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

function MovieInfoCarousel({ movie }) {
  // const { movieData: movie, isLoading } = useFecthMovieData();
  const [movieInfo, setMovieInfo] = useState({});
  useEffect(() => {
    setMovieInfo(movie);
  }, [movie]);

  const ulRef = useRef(null);

  function handleClickPrev() {
    ulRef.current.scrollLeft -= ulRef.current.offsetWidth;
  }

  function handleClickNext() {
    ulRef.current.scrollLeft += ulRef.current.offsetWidth;
  }

  if (movie) {
    return (
      <div className={styles.actorsContainer}>
        <button onClick={handleClickPrev} className={styles.buttonLeft}>
          <FaArrowLeft />
        </button>
        <button onClick={handleClickNext} className={styles.buttonRight}>
          <FaArrowRight />
        </button>
        <h2 className={styles.castTitle}>CAST</h2>
        <div className={styles.castContainer}>
          <ul className={styles.listContainer} ref={ulRef}>
            {movieInfo?.credits?.cast?.map(actor => (
              <li key={actor.cast_id} className={styles.listItem}>
                <Link to={`/person/${actor.id}`} className={styles.castBox}>
                  <figure className={styles.castImgBox}>
                    <img
                      className={styles.castImg}
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                          : 'https://via.placeholder.com/300x450?text=Image+Not+Found'
                      }
                      alt={`Picture of ${actor.name}`}
                    />
                  </figure>
                  <div className={styles.castInfo}>
                    <p>{actor.name}</p>
                    <p>{actor.character}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieInfoCarousel;
