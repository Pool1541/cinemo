import styles from 'styles/components/registerModal.module.css';
import { IoMdClose } from 'react-icons/io';

export default function RegisterModal({ root, id }) {
  function handleClose() {
    root.unmount();
    document.getElementById(id).remove();
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Registrate</h2>
        <label htmlFor='name'>Nombre</label>
        <input type='text' id='name' />
        <label htmlFor='lastName'>Apellido</label>
        <input type='text' id='lastName' />
        <label htmlFor='registerEmail'>Correo electrónico</label>
        <input type='email' id='registerEmail' />
        <label htmlFor='registerPassword'>Contraseña</label>
        <input type='password' id='registerPassword' />
        <button type='button'>Registrarme</button>
        <button type='button' className={styles.closeBtn} onClick={handleClose}>
          <IoMdClose />
        </button>
      </form>
    </div>
  );
}
