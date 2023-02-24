import styles from 'styles/components/profileOptions.module.css';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { BsGear } from 'react-icons/bs';
import { logout } from 'services/firebase';
import { Link } from 'react-router-dom';

export default function ProfileOptions({ username }) {
  function handleLogout() {
    logout()
      .then(() => location.reload())
      .catch(error => console.error(error));
  }

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
          <Link className={styles.optionItem}>
            <BsGear />
            Settings
          </Link>
        </li>
        <li>
          <Link className={styles.optionItem} onClick={handleLogout}>
            <CgLogOut />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
