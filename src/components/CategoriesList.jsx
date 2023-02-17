import { useQuery } from 'react-query';
import { getGenres, getSelectedList } from '../services/tmdbAPI';
import styles from '../styles/components/categories.module.css';
import { FaRegDotCircle } from 'react-icons/fa';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../contexts/dataContext';

function CategoriesList() {
  const [selectionId, setSelectionId] = useState(2);

  const { setQueryValues, peliculas } = useContext(DataContext);

  const handleClick = id => {
    setSelectionId(id);
    setQueryValues({ fn: () => getSelectedList(id), key: ['selected', id] });
    // console.log(peliculas.results);
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
            <Link
              id={cat.id}
              onClick={() => handleClick(cat.id)}
              className={`${styles.listItem}`}
              // to={`/`}
            >
              <FaRegDotCircle className={styles.iconalign} /> {cat.name}
            </Link>
          </div>
        ))}
      </>
    );
  }
}

export default CategoriesList;

// , cat.id === selectionId && styles.activeLink
