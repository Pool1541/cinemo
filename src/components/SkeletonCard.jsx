import styles from '../styles/components/skeletonCard.module.css';
import Rating from './Rating';

export default function SkeletonCard() {
  return (
    <a className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <h2></h2>
        <div className={styles.rating}>
          <Rating votes={0} />
        </div>
      </div>
    </a>
  );
}
