import useAuth from 'hooks/useAuth';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { changeList } from 'services/firebase';
import styles from 'styles/components/addMovieOption.module.css';

export default function AddMovieOption({ list, allLists, movieData }) {
  const { auth } = useAuth();
  const { movieId } = useParams();
  const ref = useRef();

  function checked() {
    list.movies.forEach(movie => {
      if (movie.id === parseInt(movieId)) {
        ref.current.checked = true;
      }
    });
  }

  function toggle() {
    if (ref.current.checked) addMovie();
    else removeMovie();
  }

  async function addMovie() {
    const temp = allLists.lists.find(item => item.listID === list.listID);
    const newMovieData = {
      id: parseInt(movieId),
      title: movieData.title,
      poster_path: movieData.poster_path,
      vote_average: movieData.vote_average,
      rating: 0,
      review: '',
      status: false,
    };
    temp.movies.push(newMovieData);
    await changeList(auth.uid, allLists.lists);
  }

  async function removeMovie() {
    const temp = allLists.lists.find(item => item.listID === list.listID);
    temp.movies = temp.movies.filter(movie => movie.id !== parseInt(movieId));
    await changeList(auth.uid, allLists.lists);
  }

  useEffect(() => {
    checked();
  }, [list]);

  return (
    <div className={styles.formOption}>
      <input
        type={'checkbox'}
        id={list.listID}
        className={styles.checkbox}
        ref={ref}
        onChange={toggle}
      />
      <label htmlFor={list.listID} title={list.title} className={styles.label}>
        {list.title}
      </label>
    </div>
  );
}
