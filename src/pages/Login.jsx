import AuthProvider from 'components/AuthProvider';
import LoginForm from 'components/LoginForm';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from 'styles/pages/login.module.css';

export default function Login() {
  const [state, setState] = useState(0);

  // 0 : inizializando.
  // 1 : cargando
  // 2 : login completo
  // 3 : sin usuario logeado

  const navigate = useNavigate();

  function handleUserLoggedIn() {
    navigate('/');
  }

  function handleUserNotLoggedIn() {
    setState(2);
  }

  if (state === 0)
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotLoggedIn={handleUserNotLoggedIn}
      ></AuthProvider>
    );

  if (state === 2)
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
