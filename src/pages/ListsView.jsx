import List from 'components/List';
import useListsData from 'hooks/useListsData';
import styles from 'styles/pages/listsView.module.css';

export default function ListsView() {
  const { listsData, isLoading } = useListsData();
  console.log(listsData);

  if (isLoading) return <></>;

  return (
    <div className={styles.container}>
      <h3 className={styles.titleList}>Mis listas</h3>
      <div className={styles.gridContainer}>
        {listsData.lists.map(list => (
          <List key={list.listID} data={list} />
        ))}
      </div>
    </div>
  );
}
