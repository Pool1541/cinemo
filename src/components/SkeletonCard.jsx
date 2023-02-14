import styles from '../styles/components/skeletonCard.module.css';
import { CiStar } from 'react-icons/ci';

export default function SkeletonCard() {
  return (
    <a className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <h2></h2>
        <div className={styles.rating}>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
      </div>
    </a>
  );
}
