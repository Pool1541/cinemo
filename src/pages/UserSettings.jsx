import { AboutPage } from 'components/AboutPage';
import AuthProvider from 'components/AuthProvider';
import Settings from 'components/Settings';
import SettingsContainer from 'components/SettingsContainer';
import UserProfile from 'components/UserProfile';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import Main from 'layout/Main';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'styles/pages/userSettings.module.css';

export default function UserSettings() {
  const [user, setUser] = useState(null);
  const [state, setState] = useState(0);
  const navigate = useNavigate();

  function handleUserLoggedIn(user) {
    setUser(user);
    setState(2);
  }

  function handleUserNotLoggedIn() {
    navigate('/');
  }

  if (state === 0)
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotLoggedIn={handleUserNotLoggedIn}
      ></AuthProvider>
    );

  return (
    <div>
      <Header>
        <nav>
          <UserProfile user={user} />
        </nav>
      </Header>
      <Main>
        <SettingsContainer>
          <Settings user={user} />
        </SettingsContainer>
      </Main>
      <Footer>
        <AboutPage />
      </Footer>
    </div>
  );
}
