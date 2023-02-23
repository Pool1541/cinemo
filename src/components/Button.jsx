import styles from 'styles/components/button.module.css';

export default function Button({
  handleClick,
  currentPage,
  children,
  maxPages,
  prev,
}) {
  if (prev && currentPage <= 1) return <div></div>;
  if (currentPage === maxPages) return <div></div>;
  return (
    <button onClick={handleClick} className={styles.btnNext}>
      {children}
    </button>
  );
}
