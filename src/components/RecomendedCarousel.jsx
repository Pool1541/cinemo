import styles from '../styles/components/recomendedCarousel.module.css';
import useFecthMovieData from 'hooks/useFetchMovieData';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';

function RecomendedCarousel({ movie }) {
  const [movieRec, setMovieRec] = useState({});
  useEffect(() => {
    setMovieRec(movie);
  }, [movie]);

  const ulRef = useRef(null);

  function handleClickPrev() {
    ulRef.current.scrollLeft -= ulRef.current.offsetWidth;
  }

  function handleClickNext() {
    ulRef.current.scrollLeft += ulRef.current.offsetWidth;
  }

  const condition = movieRec?.recommendations?.results?.length;

  if (movie) {
    return (
      <div>
        <div className={styles.actorsContainer}>
          {condition >= 6 && (
            <>
              <button onClick={handleClickPrev} className={styles.buttonLeft}>
                <FaArrowLeft />
              </button>
              <button onClick={handleClickNext} className={styles.buttonRight}>
                <FaArrowRight />
              </button>
            </>
          )}
          <h2 className={styles.castTitle}>PELICULAS RECOMENDADAS</h2>
          <div className={styles.castContainer}>
            {!condition <= 0 && (
              <ul className={styles.listContainer} ref={ulRef}>
                {movieRec?.recommendations?.results?.map(recMovie => (
                  <li key={recMovie.id} className={styles.listItem}>
                    <Link
                      to={`/movies/${recMovie.id}`}
                      className={styles.castBox}
                    >
                      <figure className={styles.castImgBox}>
                        <img
                          className={styles.castImg}
                          src={
                            recMovie.poster_path
                              ? `https://image.tmdb.org/t/p/w300${recMovie.poster_path}`
                              : 'https://via.placeholder.com/300x450?text=Image+Not+Found'
                          }
                          alt={`Picture of ${recMovie.title}`}
                        />
                      </figure>
                      <div className={styles.castInfo}>
                        <p>{recMovie.title}</p>
                        <p>{recMovie.release_date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default RecomendedCarousel;
