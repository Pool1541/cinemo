import { useEffect, useState } from 'react';
import { getLists } from 'services/firebase';
import useAuth from './useAuth';

export default function useListsData() {
  const { auth } = useAuth();
  const [listsData, setListData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      if (!auth) {
        setError(null);
        setListData(null);
        setIsLoading(false);
        return null;
      }
      try {
        const result = await getLists(auth.uid);
        setListData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [auth]);

  return { listsData, isLoading, error };
}
