import styles from '../styles/components/navbar.module.css';
import { useContext } from 'react';
import { DataContext } from '../contexts/dataContext';
import { BiSearch } from 'react-icons/bi';

function NavbarButton() {
  const { modal, setModal } = useContext(DataContext);

  function handleClick() {
    setModal(!modal);
    console.log('modal');
  }

  return (
    <div className={styles.navbar}>
      <button onClick={handleClick} className={styles.navButton}>
        <div className={styles.barra}></div>
        <div className={styles.barra}></div>
        <div className={styles.barra}></div>
      </button>

      <form className={styles.searchBar}>
        <input type='text' className={styles.search} />
        <button type='submit' className={styles.btnSearch}>
          <BiSearch />
        </button>
      </form>

      <span>login</span>
    </div>
  );
}

export default NavbarButton;
