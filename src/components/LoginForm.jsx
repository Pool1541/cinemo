import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
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

  return (
    <div className={styles.loginContainer}>
      <form className={styles.form}>
        <label htmlFor='user'>Usuario</label>
        <input type='text' id='user' />
        <label htmlFor='password'>Contraseña</label>
        <input type='text' id='password' />
        <button type='button'>Iniciar sesion</button>
        <button type='button'>Registrate</button>
        <button type='button' onClick={loginWithGoogle}>
          Ingresar con Google
        </button>
      </form>
    </div>
  );
}
