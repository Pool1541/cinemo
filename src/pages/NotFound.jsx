import styles from '../styles/components/notFound.module.css';
import ButtonHome from 'components/ButtonHome';

function NotFound() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.bigText}>Oops!</h1>
      <p className={styles.smallText}>404 - Page not found!</p>
      <ButtonHome />
    </div>
  );
}

export default NotFound;
