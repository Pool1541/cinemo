import useFecthMovieData from 'hooks/useFetchMovieData';
import useListsData from 'hooks/useListsData';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import styles from 'styles/components/addMovieToList.module.css';
import AddMovieOption from './AddMovieOption';
import CreateListForm from './CreateListForm';

export default function AddMovieToList({ handleClose }) {
  const { listsData, isLoading } = useListsData();
  const { movieData } = useFecthMovieData();
  const [newList, setNewList] = useState(false);

  function handleClick() {
    setNewList(!newList);
  }

  if (isLoading) return;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h3>Agregar a ...</h3>
          <button type='button' onClick={handleClose}>
            <IoMdClose />
          </button>
        </div>
        <form className={styles.form}>
          {listsData.lists.map(list => (
            <AddMovieOption
              key={list.listID}
              allLists={listsData}
              list={list}
              movieData={movieData}
            />
          ))}
        </form>
        {newList ? (
          <CreateListForm handleClose={handleClose} />
        ) : (
          <button
            type='button'
            className={styles.addList}
            onClick={handleClick}
          >
            Nueva lista <AiOutlinePlus />
          </button>
        )}
      </div>
    </div>
  );
}
