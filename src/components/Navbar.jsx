import styles from '../styles/components/navbar.module.css';
import { useContext, useState } from 'react';
import { DataContext } from '../contexts/dataContext';
import { BiSearch } from 'react-icons/bi';
import { getSearchResults } from '../services/tmdbAPI';
import { Link, useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';
import useUserData from 'hooks/useUserData';
import SpinnerForImg from './SpinnerForImg';
import CinemoLogo from 'assets/CinemoLogo';

function NavbarButton() {
  const { modal, setModal, setQueryValues, setMovie } = useContext(DataContext);
  const { userData, isLoading } = useUserData();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  function handleClick(e) {
    setModal(!modal);
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
    navigate('/');
    setText('');
    setMovie('');
  }

  return (
    <div className={styles.navbar}>
      <button
        onClick={handleClick}
        className={`${styles.navButton} ${modal ? styles.toggle : null}`}
        title='Mostrar categorias'
        id='burgerIcon'
      >
        <div className={styles.linea1}></div>
        <div className={styles.linea2}></div>
        <div className={styles.linea3}></div>
      </button>
      <Link to='/' className={styles.logo}>
        <CinemoLogo />
      </Link>
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
