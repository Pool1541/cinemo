import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth, createUser, getUserData } from 'services/firebase';

export default function AuthProvider({
  children,
  onUserLoggedIn,
  onUserNotLoggedIn,
}) {
  useEffect(() => {
    // Verificamos si el usario está logeado o no para mostrar la visa correspondiente.
    onAuthStateChanged(auth, async user => {
      if (user) {
        // Si el usuario está logeado, buscamos su información en la db para enviarsela al componente que la requiera.
        const userInfo = await getUserData(user.uid);
        if (userInfo) onUserLoggedIn(userInfo);
        else {
          const tempUserData = {
            name: user.displayName,
            creationTime: Date.now(),
            lastName: '',
            email: user.email,
            uid: user.uid,
            photoURL:
              'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
          };
          createUser(tempUserData);
          onUserLoggedIn(tempUserData);
        }
      } else {
        onUserNotLoggedIn();
      }
    });
  }, [onUserLoggedIn, onUserNotLoggedIn]);
  return <div>{children}</div>;
}
