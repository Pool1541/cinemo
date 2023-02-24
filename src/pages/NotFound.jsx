import styles from '../styles/components/notFound.module.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const NotFound = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.bigText}>Oops!</h1>
      <p className={styles.smallText}>404 - Page not found!</p>
      <Link to={'/'}>
        <button className={styles.btn}>
          <AiFillHome /> back to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
