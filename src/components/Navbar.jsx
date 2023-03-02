import styles from '../styles/components/navbar.module.css';
import { useContext, useState } from 'react';
import { DataContext } from '../contexts/dataContext';
import { BiSearch } from 'react-icons/bi';
import { getSearchResults } from '../services/tmdbAPI';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import useUserData from 'hooks/useUserData';
import SpinnerForImg from './SpinnerForImg';

function NavbarButton() {
  const { modal, setModal, setQueryValues, setMovie } = useContext(DataContext);
  const { userData, isLoading } = useUserData();
  const [text, setText] = useState('');

  function handleClick(e) {
    setModal(!modal);

    e.currentTarget.classList.toggle(styles.toggle);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!text || text.startsWith(' ')) {
      return setText('');
    }

    setQueryValues({
      fn: () => getSearchResults(text.replace(/ /g, '+')),
      key: ['searchResults', text],
    });
    setText('');
    setMovie('');
  }

  return (
    <div className={styles.navbar}>
      <button
        onClick={handleClick}
        className={styles.navButton}
        title='Mostrar categorias'
      >
        <div className={styles.linea1}></div>
        <div className={styles.linea2}></div>
        <div className={styles.linea3}></div>
      </button>

      <form onSubmit={handleSubmit} className={styles.searchBar}>
        <input
          onChange={e => setText(e.target.value)}
          value={text}
          type='text'
          className={styles.search}
          placeholder='Buscar'
        />
        <button type='submit' className={styles.btnSearch} title='buscar'>
          <BiSearch />
        </button>
      </form>
      <div className={styles.loginContainer}>
        {isLoading ? (
          <SpinnerForImg />
        ) : userData ? (
          <UserProfile user={userData} />
        ) : (
          <Link className={styles.loginBtn} to='/login'>
            Iniciar sesión
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavbarButton;
