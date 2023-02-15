import { useQuery } from 'react-query';
import { useState, useContext } from 'react';
import { getPopular, getTopRated } from '../services/tmdbAPI';
import styles from '../styles/components/categories.module.css';
import { BsFillHeartFill, BsFillFileBarGraphFill } from 'react-icons/bs';
import CategoriesList from './CategoriesList';
import { Link } from 'react-router-dom';
import { DataContext } from '../contexts/dataContext';

function Categories() {
  const [selectionId, setSelectionId] = useState(2);

  const { setQueryValues } = useContext(DataContext);

  function handleClick(string) {
    if (string === 'popular')
      setQueryValues({ fn: getPopular, key: 'popular' });
    else setQueryValues({ fn: getTopRated, key: 'toprated' });
  }

  return (
    <div className={styles.categories}>
      <h4 className={styles.h4}>Discover</h4>
      <div className={styles.list}>
        <Link
          onClick={() => handleClick('popular')}
          className={styles.listItem}
        >
          <BsFillHeartFill className={styles.iconalign} /> Populars
        </Link>

        <Link
          onClick={() => handleClick('toprated')}
          className={styles.listItem}
        >
          <BsFillFileBarGraphFill className={styles.iconalign} /> Top Rated
        </Link>
      </div>
      <h4 className={styles.h4}>Genres</h4>
      <ul className={styles.list}>
        <CategoriesList />
      </ul>
    </div>
  );
}

export default Categories;
