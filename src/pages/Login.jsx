import LoginForm from 'components/LoginForm';
import Header from 'layout/Header';
import { Link } from 'react-router-dom';
import styles from 'styles/pages/login.module.css';

export default function Login() {
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
