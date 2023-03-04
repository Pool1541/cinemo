import styles from 'styles/components/emptyView.module.css';

export default function EmptyView() {
  return (
    <div className={styles.emptyContainer}>
      <h2 className={styles.emptyText}>Empty</h2>
    </div>
  );
}
