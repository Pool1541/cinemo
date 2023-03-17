import CinemoLogo from 'assets/CinemoLogo';
import { AboutPage } from 'components/AboutPage';
import Settings from 'components/Settings';
import SettingsContainer from 'components/SettingsContainer';
import SpinnerForImg from 'components/SpinnerForImg';
import UserProfile from 'components/UserProfile';
import useUserData from 'hooks/useUserData';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import Main from 'layout/Main';
import { Link } from 'react-router-dom';
import styles from 'styles/pages/userSettings.module.css';

export default function UserSettings() {
  const { userData, isLoading } = useUserData();

  return (
    <div>
      <Header>
        <nav className={styles.navBar}>
          <Link to='/' className={styles.logo}>
            <CinemoLogo />
          </Link>
          {isLoading ? <SpinnerForImg /> : <UserProfile user={userData} />}
        </nav>
      </Header>
      <Main>
        <SettingsContainer>
          {isLoading ? null : <Settings user={userData} />}
        </SettingsContainer>
      </Main>
      <Footer>
        <AboutPage />
      </Footer>
    </div>
  );
}
