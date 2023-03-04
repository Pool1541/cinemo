import { RiPlayListAddFill } from 'react-icons/ri';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import styles from 'styles/components/actions.module.css';
import { addList } from 'services/firebase';
import useAuth from 'hooks/useAuth';
import { uuidv4 } from '@firebase/util';
import useFecthMovieData from 'hooks/useFetchMovieData';

export default function Actions() {
  const { auth } = useAuth();
  const { movieData } = useFecthMovieData();

  console.log(movieData);

  async function handleClick() {
    const movie = {
      creationTime: Date.now(),
      listID: uuidv4(),
      public: true,
      title: 'Primera lista',
      background: `https://image.tmdb.org/t/p/w780${movieData.backdrop_path}`,
      movies: [
        {
          movieID: movieData.id,
          rating: null,
          review: '',
          status: false,
        },
      ],
    };
    await addList(auth.uid, movie);
  }
  return (
    <ul className={styles.actionsContainer}>
      <li>
        <button
          className={styles.actionsItem}
          action={'Añadir a lista'}
          onClick={handleClick}
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
    </ul>
  );
}
