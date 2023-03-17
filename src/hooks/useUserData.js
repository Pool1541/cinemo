import { useEffect, useState } from 'react';
import { createListsObj, createUser, getUserData } from 'services/firebase';
import useAuth from './useAuth';

export default function useUserData() {
  const { auth } = useAuth();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      if (!auth) {
        setError(null);
        setUserData(null);
        setIsLoading(false);
        return null;
      }
      try {
        const userData = await getUserData(auth.uid);
        if (userData) {
          setUserData(userData);
        } else {
          const newUser = {
            name: auth.displayName,
            creationTime: Date.now(),
            lastName: '',
            email: auth.email,
            uid: auth.uid,
            photoURL:
              'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
          };
          const newListsObj = {
            creationTime: Date.now(),
            lists: [],
            uid: auth.uid,
          };
          await createListsObj(auth.uid, newListsObj);
          await createUser(newUser);
          setUserData(newUser);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [auth]);

  return { userData, isLoading, error };
}
