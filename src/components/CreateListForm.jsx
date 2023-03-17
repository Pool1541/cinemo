import { uuidv4 } from '@firebase/util';
import useAuth from 'hooks/useAuth';
import useFecthMovieData from 'hooks/useFetchMovieData';
import { addList } from 'services/firebase';
import styles from 'styles/components/createListForm.module.css';

export default function CreateListForm({ handleClose }) {
  const { auth } = useAuth();
  const { movieData } = useFecthMovieData();

  async function createNewList(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.public = data.public === 'public';
    const tempMovieData = {
      id: movieData.id,
      title: movieData.title,
      poster_path: movieData.poster_path,
      vote_average: movieData.vote_average,
      MyRating: 0,
      review: '',
      status: false,
    };
    const newList = {
      ...data,
      creationTime: Date.now(),
      movies: [tempMovieData],
      listID: uuidv4(),
      background: `https://image.tmdb.org/t/p/w780${movieData.backdrop_path}`,
    };

    try {
      await addList(auth.uid, newList);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className={styles.newListForm} onSubmit={createNewList}>
      <div className={styles.newListName}>
        <label htmlFor='listName'>Nombre</label>
        <input
          type='text'
          id='listName'
          placeholder='Nombre de la lista'
          name='title'
        />
      </div>
      <div className={styles.newListPrivacity}>
        <label htmlFor='privacity'>Privacidad</label>
        <select id='privacity' name='public'>
          <option value='public'>Pública</option>
          <option value='private'>Privada</option>
        </select>
      </div>
      <button type='submit' className={styles.newListCreate}>
        Crear
      </button>
    </form>
  );
}
