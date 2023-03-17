import styles from 'styles/components/profileOptions.module.css';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { BsGear } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';

export default function ProfileOptions({ username, classname, handleClose }) {
  const { onLogout } = useAuth();

  useEffect(() => {
    function handleClick(e) {
      const container = document.getElementsByClassName(classname)[0];
      if (!container.contains(e.target)) {
        handleClose();
      }
    }
    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className={styles.options}>
      <p className={styles.displayName}>Bienvenido {username}</p>
      <ul className={styles.optionsList}>
        <li>
          <Link className={styles.optionItem} to='/dashboard'>
            <CgProfile />
            Perfil
          </Link>
        </li>
        <li>
          <Link className={styles.optionItem} to='/settings'>
            <BsGear />
            Ajustes
          </Link>
        </li>
        <li>
          <Link className={styles.optionItem} onClick={onLogout}>
            <CgLogOut />
            Salir
          </Link>
        </li>
      </ul>
    </div>
  );
}
