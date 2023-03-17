import { useQuery } from 'react-query';
import { getGenres } from '../services/tmdbAPI';
import styles from '../styles/components/categories.module.css';
import { FaRegDotCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CategoriesList({ handleClick, selectionID }) {
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
          <li className={styles.item} key={cat.id}>
            <button
              id={cat.id}
              onClick={() => handleClick(cat.id)}
              className={styles.listButton}
            >
              <Link
                to={'/'}
                className={`${styles.listItem} ${
                  cat.id === selectionID ? styles.activeLink : ''
                }`}
              >
                <FaRegDotCircle className={styles.iconalign} /> {cat.name}
              </Link>
            </button>
          </li>
        ))}
      </>
    );
  }
}

export default CategoriesList;
