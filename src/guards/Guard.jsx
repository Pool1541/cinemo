import useAuth from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export default function Guard({ children }) {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth) {
    return <Navigate to='/login' replace state={{ from: location }} />;
  }

  return children;
}
