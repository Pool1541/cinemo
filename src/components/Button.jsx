import styles from 'styles/components/button.module.css';

export default function Button({
  handleClick,
  currentPage,
  children,
  maxPages,
  prev,
  next,
}) {
  if (prev && currentPage <= 1) return <div></div>;
  if (next && currentPage === maxPages) return <div></div>;
  return (
    <button onClick={handleClick} className={styles.btnNext}>
      {children}
    </button>
  );
}
