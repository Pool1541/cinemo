import useListsData from 'hooks/useListsData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from 'styles/pages/listView.module.css';

export default function ListView() {
  const { listID } = useParams();
  const { listsData, isLoading } = useListsData();
  const [listInfo, setListInfo] = useState();
  console.log(listInfo);
  useEffect(() => {
    if (!isLoading) {
      const findList = listsData.lists.find(list => list.listID === listID);
      setListInfo(findList);
    }
  }, [listsData]);

  return <div></div>;
}
