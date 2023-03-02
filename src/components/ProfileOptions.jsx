import styles from 'styles/components/profileOptions.module.css';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { BsGear } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

export default function ProfileOptions({ username }) {
  const { onLogout } = useAuth();

  return (
    <div className={styles.options}>
      <p className={styles.displayName}>Bienvenido {username}</p>
      <ul className={styles.optionsList}>
        <li>
          <Link className={styles.optionItem}>
            <CgProfile />
            Profile
          </Link>
        </li>
        <li>
          <Link className={styles.optionItem} to='/settings'>
            <BsGear />
            Settings
          </Link>
        </li>
        <li>
          <Link className={styles.optionItem} onClick={onLogout}>
            <CgLogOut />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
