import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { lazy, Suspense, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { auth, loginUser } from 'services/firebase';
import styles from 'styles/components/loginForm.module.css';
import Spinner from './Spinner';

export default function LoginForm() {
  const errorMessage = useRef();
  const provider = new GoogleAuthProvider();

  async function loginWithGoogle() {
    try {
      const user = await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if (data.email && data.password)
      try {
        const userCredential = await loginUser({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        errorMessage.current.innerText = error.code.split('/')[1];
      }
    else errorMessage.current.innerText = 'Completa todos los campos';
  }

  function handleRegisterModal() {
    const Modal = lazy(() => import('./RegisterModal'));
    const background = document.createElement('div');
    background.id = styles.background;
    const root = createRoot(
      document.querySelector('#root').appendChild(background)
    );
    root.render(
      <Suspense fallback={<Spinner />}>
        <Modal root={root} id={styles.background} />
      </Suspense>
    );
  }

  return (
    <div className={styles.loginContainer}>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <div className={styles.title}>
          <h1>Iniciar sesión</h1>
        </div>
        <div className={styles.inputs}>
          <label htmlFor='loginEmail'>Correo electrónico</label>
          <input type='text' id='loginEmail' name='email' />
          <label htmlFor='loginPassword'>Contraseña</label>
          <input type='password' id='loginPassword' name='password' />
        </div>
        <div className={styles.error} ref={errorMessage}></div>
        <div className={styles.registered}>
          <p>
            ¿Aún no tienes una cuenta?{' '}
            <a onClick={handleRegisterModal}>Registrate</a>
          </p>
        </div>
        <div className={styles.buttons}>
          <button type='submit'>Iniciar sesion</button>
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
