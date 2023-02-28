import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from '../styles/components/buttonHome.module.css';

function ButtonHome() {
  return (
    <>
      <Link to={'/'}>
        <button className={styles.btn}>
          <AiFillHome /> back to home
        </button>
      </Link>
    </>
  );
}

export default ButtonHome;
