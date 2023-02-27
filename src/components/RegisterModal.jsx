import styles from 'styles/components/registerModal.module.css';
import { IoMdClose } from 'react-icons/io';
import { createUser, registerUser } from 'services/firebase';
import { useRef } from 'react';

export default function RegisterModal({ root, id }) {
  const errorMessage = useRef();
  function handleClose() {
    root.unmount();
    document.getElementById(id).remove();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const complete = Object.entries(data).every(value => value[1] !== '');

    if (complete)
      try {
        const userCredential = await registerUser({
          email: data.email,
          password: data.password,
        });
        delete data.password;
        await createUser({
          ...data,
          creationTime: Date.now(),
          photoURL:
            'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
          uid: userCredential.user.uid,
        });
        handleClose();
      } catch (error) {
        errorMessage.current.innerText = error.code.split('/')[1];
      }
    else errorMessage.current.innerText = 'Completa todos los campos';
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
