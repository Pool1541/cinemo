import styles from '../styles/components/navbar.module.css';
import { useContext, useState } from 'react';
import { DataContext } from '../contexts/dataContext';
import { BiSearch } from 'react-icons/bi';
import { getSearchResults } from '../services/tmdbAPI';

function NavbarButton() {
  const { modal, setModal, setQueryValues } = useContext(DataContext);

  const [text, setText] = useState('');

  function handleClick() {
    setModal(!modal);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQueryValues({
      fn: () => getSearchResults(text.replace(/ /g, '+')),
      key: ['searchResults', text],
    });
    setText('');
  }

  return (
    <div className={styles.navbar}>
      <button onClick={handleClick} className={styles.navButton}>
        <div className={styles.barra}></div>
        <div className={styles.barra}></div>
        <div className={styles.barra}></div>
      </button>

      <form onSubmit={handleSubmit} className={styles.searchBar}>
        <input
          onChange={e => setText(e.target.value)}
          value={text}
          type='text'
          className={styles.search}
        />
        <button type='submit' className={styles.btnSearch}>
          <BiSearch />
        </button>
      </form>

      <span>login</span>
    </div>
  );
}

export default NavbarButton;
