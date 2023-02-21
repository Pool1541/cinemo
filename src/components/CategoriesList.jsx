import { useQuery } from 'react-query';
import { getGenres, getSelectedList } from '../services/tmdbAPI';
import styles from '../styles/components/categories.module.css';
import { FaRegDotCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { DataContext } from '../contexts/dataContext';

function CategoriesList({ selectionID }) {
  const { setQueryValues } = useContext(DataContext);

  const handleClick = id => {
    setQueryValues({
      fn: () => getSelectedList({ id }),
      key: ['selected', id],
    });
  };

  //  solicitando data para crear Lista de generos
  const { data, isSuccess } = useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
  });

  if (isSuccess) {
    const categories = data.genres;

    return (
      <>
        {categories.map(cat => (
          <div key={cat.id}>
            <button
              id={cat.id}
              onClick={() => handleClick(cat.id)}
              className={`${styles.listItem} ${
                cat.id === selectionID ? styles.activeLink : ''
              }`}
            >
              <FaRegDotCircle className={styles.iconalign} /> {cat.name}
            </button>
          </div>
        ))}
      </>
    );
  }
}

export default CategoriesList;
