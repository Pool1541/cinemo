import { useState, useContext } from 'react';
import { getPopular, getTopRated, getSelectedList } from '../services/tmdbAPI';
import styles from '../styles/components/categories.module.css';
import { BsFillHeartFill, BsFillFileBarGraphFill } from 'react-icons/bs';
import CategoriesList from './CategoriesList';
import { DataContext } from '../contexts/dataContext';
import { Link } from 'react-router-dom';

function Categories() {
  const [selectionId, setSelectionId] = useState('popular');

  const { setQueryValues, modal, setMovie } = useContext(DataContext);

  function handleClick(id) {
    setSelectionId(id);
    if (id === 'popular') setQueryValues({ fn: getPopular, key: ['popular'] });
    else if (id === 'toprated')
      setQueryValues({ fn: getTopRated, key: ['toprated'] });
    else
      setQueryValues({
        fn: () => getSelectedList({ id }),
        key: ['selected', id],
      });
    setMovie('');
  }

  return (
    <div className={styles.background}>
      <div className={styles.categories}>
        <h4 className={styles.h4}>Discover</h4>
        <div className={styles.list}>
          <button
            onClick={() => handleClick('popular')}
            className={styles.listButton}
          >
            <Link
              to={'/'}
              className={`${styles.listItem} ${
                selectionId === 'popular' ? styles.activeLink : ''
              }`}
            >
              <BsFillHeartFill className={styles.iconalign} /> Populares{' '}
            </Link>
          </button>

          <button
            onClick={() => handleClick('toprated')}
            className={styles.listButton}
          >
            <Link
              to={'/'}
              className={`${styles.listItem} ${
                selectionId === 'toprated' ? styles.activeLink : ''
              }`}
            >
              <BsFillFileBarGraphFill className={styles.iconalign} /> Top Rated
            </Link>
          </button>
        </div>
        <h4 className={styles.h4}>Generos</h4>
        <ul className={styles.list}>
          <CategoriesList
            handleClick={handleClick}
            selectionID={selectionId}
            selectionIDFn={setSelectionId}
          />
        </ul>
      </div>
    </div>
  );
}

export default Categories;
