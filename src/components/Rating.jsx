import styles from 'styles/components/rating.module.css';
import { setRating } from 'utilities/setRating';

export default function Rating({ votes }) {
  return <div className={styles.container}>{setRating(votes)}</div>;
}
