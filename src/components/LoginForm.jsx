import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { auth } from 'services/firebase';
import styles from 'styles/components/loginForm.module.css';

export default function LoginForm() {
  const provider = new GoogleAuthProvider();

  async function loginWithGoogle() {
    try {
      const user = await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  }

  function handleRegisterModal() {
    const Modal = lazy(() => import('./RegisterModal'));
    const background = document.createElement('div');
    background.id = styles.background;
    const root = createRoot(
      document.querySelector('#root').appendChild(background)
    );
    root.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Modal root={root} id={styles.background} />
      </Suspense>
    );
  }

  return (
    <div className={styles.loginContainer}>
      <form className={styles.formBox}>
        <div className={styles.title}>
          <h1>Iniciar sesión</h1>
        </div>
        <div className={styles.inputs}>
          <label htmlFor='loginEmail'>Correo electrónico</label>
          <input type='text' id='loginEmail' />
          <label htmlFor='loginPassword'>Contraseña</label>
          <input type='password' id='loginPassword' />
        </div>
        <div className={styles.registered}>
          <p>
            ¿Aún no tienes una cuenta?{' '}
            <a onClick={handleRegisterModal}>Registrate</a>
          </p>
        </div>
        <div className={styles.buttons}>
          <button type='button'>Iniciar sesion</button>
          <button type='button' onClick={loginWithGoogle}>
            Ingresar con Google
          </button>
        </div>
      </form>
      <div className={styles.imageBox}>
        <img src={require('assets/banner.png')} alt='movies banner' />
      </div>
    </div>
  );
}
