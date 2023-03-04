import styles from 'styles/components/registerModal.module.css';
import { IoMdClose } from 'react-icons/io';
import { useRef } from 'react';
import useAuth from 'hooks/useAuth';

export default function RegisterModal({ handleClose }) {
  const errorMessage = useRef();
  const { registerError: error, onRegister } = useAuth();

  if (error && errorMessage.current)
    errorMessage.current.innerText = error.replaceAll('-', ' ');

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={e => onRegister(e).then(res => res && handleClose())}
      >
        <h2>Registrate</h2>
        <label htmlFor='name'>Nombre</label>
        <input type='text' id='name' name='name' />
        <label htmlFor='lastName'>Apellido</label>
        <input type='text' id='lastName' name='lastName' />
        <label htmlFor='registerEmail'>Correo electrónico</label>
        <input type='email' id='registerEmail' name='email' />
        <label htmlFor='registerPassword'>Contraseña</label>
        <input type='password' id='registerPassword' name='password' />
        <div className={styles.error} ref={errorMessage} />
        <button type='submit'>Registrarme</button>
        <button type='button' className={styles.closeBtn} onClick={handleClose}>
          <IoMdClose />
        </button>
      </form>
    </div>
  );
}
