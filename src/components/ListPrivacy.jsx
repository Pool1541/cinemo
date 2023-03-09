import styles from 'styles/components/listPrivacy.module.css';
import { IoEarthOutline, IoLockClosedOutline } from 'react-icons/io5';

export default function ListPrivacy({ IsPublic }) {
  if (IsPublic)
    return (
      <div className={styles.privacity}>
        <IoEarthOutline />
        {'Pública'}
      </div>
    );

  return (
    <div className={styles.privacity}>
      <IoLockClosedOutline />
      {'Privada'}
    </div>
  );
}
