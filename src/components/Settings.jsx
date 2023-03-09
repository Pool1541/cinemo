import { useEffect, useRef, useState } from 'react';
import {
  getProfilePhotoUrl,
  setProfilePhoto,
  updateUserData,
} from 'services/firebase';
import styles from 'styles/components/settings.module.css';
import compressImage from 'utilities/compressImage';
import MessageBox from './MessageBox';

export default function Settings({ user }) {
  const [photo, setPhoto] = useState(user.photoURL);
  const [message, setMessage] = useState(false);
  const fileRef = useRef(null);
  const nameRef = useRef();
  const lastNameRef = useRef();

  useEffect(() => {
    nameRef.current.value = user.name;
    lastNameRef.current.value = user.lastName;
  }, []);

  function handleClose() {
    setMessage(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const lastName = lastNameRef.current.value;
    await updateUserData(user.uid, { name, lastName });
    setMessage(true);
  }

  function handleOpenFilePicker() {
    fileRef.current.click();
  }

  async function handleLoadFile(e) {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const blob = await compressImage(file);
      const response = await setProfilePhoto(user.uid, blob);
      if (response) {
        const url = await getProfilePhotoUrl(response);
        await updateUserData(user.uid, { photoURL: url });
        setPhoto(url);
        setMessage(true);
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.settingsSection}>
        <div className={styles.title}>
          <h2>Foto de perfil</h2>
        </div>
        <div className={styles.settings}>
          <div className={styles.profilePhoto}>
            <img src={photo} alt='foto de perfil' />
          </div>
          <input
            type='file'
            className={styles.fileInput}
            ref={fileRef}
            onChange={handleLoadFile}
          />
          <button
            type='button'
            className={styles.button}
            onClick={handleOpenFilePicker}
            title='Elegir una foto de perfil'
          >
            Elige una foto de perfil
          </button>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formSection}>
          <div className={styles.title}>
            <label htmlFor='name'>Nombre</label>
          </div>
          <div className={styles.settings}>
            <input type='text' name='name' id='name' ref={nameRef} />
          </div>
        </div>
        <div className={styles.formSection}>
          <div className={styles.title}>
            <label htmlFor='lastName'>Apellido</label>
          </div>
          <div className={styles.settings}>
            <input
              type='text'
              name='lastName'
              id='lastName'
              ref={lastNameRef}
            />
          </div>
        </div>
        <div className={styles.formSection}>
          <div className={styles.title}>
            <label htmlFor='email'>Correo</label>
          </div>
          <div className={styles.settings}>
            <input
              type='text'
              name='email'
              id='email'
              disabled
              value={user.email}
              className={styles.disable}
            />
          </div>
        </div>
        <div className={styles.formSection}>
          <button
            type='submit'
            className={styles.button}
            title='Guardar cambios'
          >
            Guardar cambios
          </button>
        </div>
      </form>
      {message && <MessageBox onClose={handleClose} />}
    </div>
  );
}
