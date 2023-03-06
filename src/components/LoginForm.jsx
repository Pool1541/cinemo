import useAuth from 'hooks/useAuth';
import { useRef, useState } from 'react';
import styles from 'styles/components/loginForm.module.css';
import RegisterModal from './RegisterModal';

export default function LoginForm() {
  const { onLogin, onLoginWithGoogle, loginError: error } = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const errorMessage = useRef(null);

  if (error && modalIsOpen === false)
    errorMessage.current.innerText = error.replaceAll('-', ' ');
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData);
  //   if (data.email && data.password)
  //     try {
  //       const userCredential = await loginUser({
  //         email: data.email,
  //         password: data.password,
  //       });
  //     } catch (error) {
  //       errorMessage.current.innerText = error.code.split('/')[1];
  //     }
  //   else errorMessage.current.innerText = 'Completa todos los campos';
  // }

  function handleRegisterModal() {
    setModalIsOpen(true);
  }

  function handleClose() {
    setModalIsOpen(false);
  }
  const width = innerWidth;
  const height = innerHeight;

  return (
    <>
      <div
        style={{
          color: '#3fdb3f',
          background: 'White',
        }}
      >{`Width: ${width} - Height: ${height}`}</div>
      <div className={styles.loginContainer}>
        <form className={styles.formBox} onSubmit={onLogin}>
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
              <button type='button' onClick={handleRegisterModal}>
                Registrate
              </button>
            </p>
          </div>
          <div className={styles.buttons}>
            <button type='submit'>Iniciar sesion</button>
            <button type='button' onClick={onLoginWithGoogle}>
              Ingresar con Google
            </button>
          </div>
        </form>
        <div className={styles.imageBox}>
          <img src={require('assets/banner2.webp')} alt='movies banner' />
        </div>
      </div>
      {modalIsOpen ? (
        <div id={styles.background}>
          <RegisterModal id={styles.background} handleClose={handleClose} />
        </div>
      ) : null}
    </>
  );
}
