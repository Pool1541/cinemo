import styles from '../styles/components/gridContainer.module.css';
import Card from './Card';
import { useQuery } from 'react-query';
import { getPopular } from '../services/tmdbAPI';
import SkeletonCard from './SkeletonCard';

export default function GridContainer() {
  const {
    data: movies,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: getPopular,
  });

  const skeletonCards = () => {
    const cards = new Array(20).fill(null);
    return cards.map((item, index) => <SkeletonCard key={index} />);
  };

  const succesCards = () => {
    return movies.results.map(movie => <Card movie={movie} key={movie.id} />);
  };

  return (
    <>
      <div className={styles.gridContainer}>
        {isError || isLoading ? skeletonCards() : succesCards()}
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btnNext}>Siguiente</button>
      </div>
    </>
  );
}
