import { RiPlayListAddFill } from 'react-icons/ri';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import styles from 'styles/components/actions.module.css';
import { addList } from 'services/firebase';
import useAuth from 'hooks/useAuth';
import { uuidv4 } from '@firebase/util';
import useFecthMovieData from 'hooks/useFetchMovieData';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AddMovieToList from './AddMovieToList';

export default function Actions() {
  const { auth } = useAuth();
  const { movieData } = useFecthMovieData();
  const [modalIsOpen, setModalIsOpen] = useState();
  const navigate = useNavigate();

  function LauncherModal() {
    if (!auth) {
      navigate('/login');
      return;
    }
    setModalIsOpen(!modalIsOpen);
  }

  // async function handleClick() {
  //   if (!auth) {
  //     navigate('/login');
  //     return;
  //   }

  //   const movie = {
  //     creationTime: Date.now(),
  //     listID: uuidv4(),
  //     public: true,
  //     title: 'Primera lista',
  //     background: `https://image.tmdb.org/t/p/w780${movieData.backdrop_path}`,
  //     movies: [
  //       {
  //         movieID: movieData.id,
  //         rating: null,
  //         review: '',
  //         status: false,
  //       },
  //     ],
  //   };
  //   await addList(auth.uid, movie);
  // }

  return (
    <ul className={styles.actionsContainer}>
      <li>
        <button
          className={styles.actionsItem}
          action={'Agregar a lista'}
          onClick={LauncherModal}
        >
          <RiPlayListAddFill />
        </button>
      </li>
      <li>
        <button className={styles.actionsItem} action={'Favorito'}>
          <AiOutlineHeart />
        </button>
      </li>
      <li>
        <button className={styles.actionsItem} action={'Valorar'}>
          <AiOutlineStar />
        </button>
      </li>
      {modalIsOpen ? <AddMovieToList handleClose={LauncherModal} /> : null}
    </ul>
  );
}
