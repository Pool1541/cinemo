import { useState } from 'react';
import styles from 'styles/components/userProfile.module.css';
import ProfileOptions from './ProfileOptions';

export default function UserProfile({ user }) {
  const [options, setOptions] = useState(false);
  function handleClick() {
    setOptions(!options);
  }
  return (
    <div className={styles.container}>
      <button type='button' className={styles.profileBtn} onClick={handleClick}>
        <img src={user.photoURL} alt='imagen de perfil' />
      </button>
      {options ? <ProfileOptions username={user.displayName} /> : null}
    </div>
  );
}
