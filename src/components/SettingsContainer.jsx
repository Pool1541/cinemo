import styles from 'styles/components/settingsContainer.module.css';

export default function SettingsContainer({ children }) {
  return <section className={styles.container}>{children}</section>;
}
