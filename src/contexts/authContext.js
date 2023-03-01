import { createContext, useState } from 'react';

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);

  function handleLogin() {}

  function handleLogout() {}

  const value = {
    auth,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
