import styles from 'styles/components/gridContainer.module.css';
import Card from './Card';
import { useQuery } from 'react-query';
import { getPopular, getSelectedList } from 'services/tmdbAPI';
import SkeletonCard from './SkeletonCard';
import { useContext } from 'react';
import { DataContext } from 'contexts/dataContext';
import Button from './Button';

export default function GridContainer() {
  const { peliculas, isSuccess, setQueryValues } = useContext(DataContext);

  const handleNext = () => {
    setQueryValues({
      fn: () => getSelectedList({ url: peliculas.next_page }),
      key: ['selected', peliculas.next_page],
    });
  };

  const handlePrev = () => {
    setQueryValues({
      fn: () => getSelectedList({ url: peliculas.previous_page }),
      key: ['selected', peliculas.previous_page],
    });
  };

  const skeletonCards = () => {
    const cards = new Array(20).fill(null);
    return cards.map((_, index) => <SkeletonCard key={index} />);
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
        <Button
          handleClick={handlePrev}
          currentPage={peliculas.page}
          prev={true}
        >
          Página {peliculas.page - 1}
        </Button>
        <Button
          handleClick={handleNext}
          currentPage={peliculas.page}
          maxPages={peliculas.total_pages}
        >
          Página {peliculas.page + 1}
        </Button>
      </div>
    </>
  );
}
