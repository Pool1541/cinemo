import styles from 'styles/components/spinnerForImg.module.css';

export default function SpinnerForImg() {
  return (
    <div className={styles.background}>
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
