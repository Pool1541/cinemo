import styles from '../styles/components/gridContainer.module.css';
import Card from './Card';
import { useQuery } from 'react-query';
import { getPopular } from '../services/tmdbAPI';
import SkeletonCard from './SkeletonCard';
import { useContext } from 'react';
import { DataContext } from '../contexts/dataContext';

export default function GridContainer() {
  const { peliculas, isError, isLoading, error, isSuccess } =
    useContext(DataContext);

  const skeletonCards = () => {
    const cards = new Array(20).fill(null);
    return cards.map((item, index) => <SkeletonCard key={index} />);
  };

  const succesCards = () => {
    return peliculas?.results?.map(movie => (
      <Card movie={movie} key={movie.id} />
    ));
  };

  return (
    <>
      <div className={styles.gridContainer}>
        {isSuccess ? succesCards() : skeletonCards()}
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btnNext}>Siguiente</button>
      </div>
    </>
  );
}
