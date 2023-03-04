import { Link } from 'react-router-dom';
import styles from 'styles/components/list.module.css';
import parseDate from 'utilities/parseDate';

export default function List({ data }) {
  return (
    <div className={styles.listContainer}>
      <div className={styles.background}>
        <img src='https://image.tmdb.org/t/p/w1280/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg' />
      </div>
      <div className={styles.content}>
        <Link to='/dashboard/lists/:listID'>
          <h2>{data.title}</h2>
        </Link>
        <div className={styles.meta}>
          <p>{data.movies.length} elementos</p>
          <span className={styles.status}>
            {data.public ? 'Pública' : 'Privada'}
          </span>
        </div>
        <div className={styles.creationTime}>
          <span>Creado el {parseDate(data.creationTime)}</span>
        </div>
      </div>
    </div>
  );
}
