import useUserData from 'hooks/useUserData';
import styles from 'styles/components/hero.module.css';
import parseDate from 'utilities/parseDate';

export default function Hero({ isLoading, userData }) {
  if (isLoading) return <div className={styles.container} />;

  return (
    <section className={styles.container}>
      <div className={styles.background}>
        <div className={styles.content}>
          <div className={styles.profilePhoto}>
            <img src={userData.photoURL} />
          </div>
          <div className={styles.about}>
            <h2>{userData.name}</h2>
            <span>Miembro desde {parseDate(userData.creationTime)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
