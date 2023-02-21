import styles from 'styles/layout/mainContainer.module.css';

export default function MainContainer({ children }) {
  return <div className={styles.mainContainer}>{children}</div>;
}
