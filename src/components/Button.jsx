import styles from 'styles/components/button.module.css';

export default function Button({ handleClick, currentPage, children }) {
  if (currentPage <= 1) return <div></div>;
  return (
    <button onClick={handleClick} className={styles.btnNext}>
      {children}
    </button>
  );
}
