import { useQuery } from 'react-query';
import { getGenres } from '../services/tmdbAPI';
import styles from '../styles/components/categories.module.css';
import { FaRegDotCircle } from 'react-icons/fa';
import { useState } from 'react';

function CategoriesList() {
  const [selectionId, setSelectionId] = useState(2);

  const handleClick = id => {
    setSelectionId(id);
    const activeBtn = document.getElementById(id);
    activeBtn.classList.add(styles.activeLink);
  };

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
            <a
              id={cat.id}
              onClick={() => handleClick(cat.id)}
              className={styles.listItem}
              href={`/${cat.id}`}
            >
              <FaRegDotCircle className={styles.iconalign} /> {cat.name}
            </a>
          </div>
        ))}
      </>
    );
  }
}

export default CategoriesList;
