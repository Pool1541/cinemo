import { useNavigate } from 'react-router-dom';
import { logout } from 'services/firebase';
import AuthProvider from './AuthProvider';

export default function LogoutView() {
  const navigate = useNavigate();

  async function handleUserLoggedIn() {
    await logout();
  }
  function handleUserNotLoggedIn() {
    navigate('/');
  }
  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotLoggetIn={handleUserNotLoggedIn}
    ></AuthProvider>
  );
}
