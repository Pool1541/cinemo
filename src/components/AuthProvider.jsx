import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from 'services/firebase';

export default function AuthProvider({
  children,
  onUserLoggedIn,
  onUserNotLoggetIn,
}) {
  useEffect(() => {
    // Verificamos si el usario está logeado o no para mostrar la visa correspondiente.
    onAuthStateChanged(auth, async user => {
      if (user) {
        onUserLoggedIn(user);
      } else {
        onUserNotLoggetIn(user);
      }
    });
  }, [onUserLoggedIn, onUserNotLoggetIn]);
  return <div>{children}</div>;
}
