import { AiFillHome } from 'react-icons/ai';
import styles from 'styles/components/resultsNotFound.module.css';
import { useContext } from 'react';
import { DataContext } from 'contexts/dataContext';
import { getPopular } from 'services/tmdbAPI';

function ResultsNotFound() {
  const { setQueryValues } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lo Sentimos!</h2>
      <p>No hay resultados para tu busqueda...</p>
      <img
        className={styles.img}
        src='https://next-movies-zeta.vercel.app/assets/svgs/empty.svg'
        alt='not found img'
      />

      <button
        onClick={() => {
          setQueryValues({ fn: getPopular, key: ['popular'] });
        }}
        className={styles.btn}
      >
        <AiFillHome /> back to home
      </button>
    </div>
  );
}

export default ResultsNotFound;
