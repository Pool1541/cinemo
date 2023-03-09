import Card from 'components/Card';
import ListPrivacy from 'components/ListPrivacy';
import useListsData from 'hooks/useListsData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from 'styles/pages/listView.module.css';
import parseDate from 'utilities/parseDate';
import ResultsNotFound from 'components/ResultsNotFound';

export default function ListView() {
  const { listID } = useParams();
  const { listsData, isLoading, error } = useListsData();
  const [listInfo, setListInfo] = useState({});

  useEffect(() => {
    if (!isLoading) {
      const findList = listsData.lists.find(list => list.listID === listID);
      setListInfo(findList);
    }
  }, [listsData]);

  if (isLoading) return <></>;
  if (!isLoading && !listInfo)
    return (
      <div className={styles.resultsNotFound}>
        <ResultsNotFound />
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <h3>{listInfo.title}</h3>
          <p>Creado el {parseDate(listInfo.creationTime)}</p>
        </div>
        <button>
          <ListPrivacy IsPublic={listInfo.public} />
        </button>
      </div>
      <div className={styles.gridContainer}>
        {listInfo.movies?.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
