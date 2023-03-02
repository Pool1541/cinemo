import LoginForm from 'components/LoginForm';
import useAuth from 'hooks/useAuth';
import Header from 'layout/Header';
import { Link, Navigate } from 'react-router-dom';
import styles from 'styles/pages/login.module.css';

export default function Login() {
  const { auth } = useAuth();

  if (auth) {
    return <Navigate to='/' replace />;
  }

  return (
    <>
      <Header>
        <div className={styles.btnHome}>
          <Link to={'/'} className={styles.link}>
            Inicio
          </Link>
        </div>
      </Header>
      <div className={`${styles.login} login`}>
        <LoginForm />
      </div>
    </>
  );
}
