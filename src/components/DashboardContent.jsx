import styles from 'styles/components/dashboardContent.module.css';

export default function DashboardContent({ children }) {
  return <section className={styles.container}>{children}</section>;
}
