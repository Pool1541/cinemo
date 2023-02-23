import { useEffect } from 'react';

export default function AuthProvider({
  children,
  onUserLoggedIn,
  onUserNotLoggetIn,
  onUserNotRegistered,
}) {
  useEffect(() => {
    // Verificamos si el usario está logeado o no para mostrar la visa correspondiente.
  }, [onUserLoggedIn, onUserNotLoggetIn, onUserNotRegistered]);
  return <div>{children}</div>;
}
