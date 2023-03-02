import useLocalStorage from 'hooks/useLocalStorage';
import { createContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  createUser,
  loginUser,
  loginWithGoogle,
  logout,
  registerUser,
} from 'services/firebase';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useLocalStorage('currentSesion', null);
  const [loginError, setLoginError] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleRegister(e) {
    e.preventDefault();
    let success;
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
        setAuth(userCredential.user);
        await createUser({
          ...data,
          creationTime: Date.now(),
          photoURL:
            'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
          uid: userCredential.user.uid,
        });
        success = true;
        return success;
      } catch (error) {
        setRegisterError(error.code.split('/')[1]);
        success = false;
        return success;
      }
    else setRegisterError('Completa todos los campos');
  }

  async function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if (data.email && data.password)
      try {
        const userCredential = await loginUser({
          email: data.email,
          password: data.password,
        });
        setAuth(userCredential.user);
        setLoginError(null);
        const origin = location.state?.from?.pathname || '/';
        navigate(origin);
      } catch (error) {
        setLoginError(error.code.split('/')[1]);
      }
    else setLoginError('Completa todos los campos');
  }

  async function handleLoginWithGoogle() {
    try {
      const userCredential = await loginWithGoogle();
      setAuth(userCredential.user);
      setLoginError(null);
      const origin = location.state?.from?.pathname || '/';
      navigate(origin);
    } catch (error) {
      console.error(error);
    }
  }

  function handleLogout() {
    logout().then(() => {
      setAuth(null);
    });
  }

  const value = {
    auth,
    loginError,
    registerError,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onLoginWithGoogle: handleLoginWithGoogle,
    onRegister: handleRegister,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
