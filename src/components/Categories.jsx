import { useQuery } from 'react-query';
import { useState } from 'react';
import { getPopular, getSelectedList } from '../services/tmdbAPI';
import styles from '../styles/components/categories.module.css';
import { BsFillHeartFill, BsFillFileBarGraphFill } from 'react-icons/bs';
import CategoriesList from './CategoriesList';

function Categories() {
  const [selectionId, setSelectionId] = useState(2);

  const { data: rated } = useQuery({
    queryKey: ['rated'],
    queryFn: getPopular,
  });

  const { data: selection, isSuccess: selectionSuccess } = useQuery({
    queryKey: ['selection'],
    queryFn: () => getSelectedList(selectionId),
  });

  return (
    <div className={styles.categories}>
      <h4 className={styles.h4}>Discover</h4>
      <div className={styles.list}>
        <a className={styles.listItem} href='#'>
          <BsFillHeartFill className={styles.iconalign} /> Populars
        </a>

        <a className={styles.listItem} href='#'>
          <BsFillFileBarGraphFill className={styles.iconalign} /> Top Rated
        </a>
      </div>
      <h4 className={styles.h4}>Genres</h4>
      <ul className={styles.list}>
        <CategoriesList />
      </ul>
    </div>
  );
}

export default Categories;
