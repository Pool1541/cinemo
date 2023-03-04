import { AboutPage } from 'components/AboutPage';
import Settings from 'components/Settings';
import SettingsContainer from 'components/SettingsContainer';
import SpinnerForImg from 'components/SpinnerForImg';
import UserProfile from 'components/UserProfile';
import useUserData from 'hooks/useUserData';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import Main from 'layout/Main';
import 'styles/pages/userSettings.module.css';

export default function UserSettings() {
  const { userData, isLoading } = useUserData();

  return (
    <div>
      <Header>
        <nav>
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
