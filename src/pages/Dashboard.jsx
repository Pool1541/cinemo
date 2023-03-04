import CinemoLogo from 'assets/CinemoLogo';
import { AboutPage } from 'components/AboutPage';
import DashboardContent from 'components/DashboardContent';
import DashboardOptions from 'components/DashboardOptions';
import EmptyView from 'components/EmptyView';
import Hero from 'components/Hero';
import SpinnerForImg from 'components/SpinnerForImg';
import UserProfile from 'components/UserProfile';
import useUserData from 'hooks/useUserData';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import Main from 'layout/Main';
import { Outlet, useLocation } from 'react-router-dom';
import styles from 'styles/pages/dashboard.module.css';

export default function Dashboard() {
  const { isLoading, userData } = useUserData();
  const location = useLocation();
  const path = /^\/dashboard\/?$/.test(location.pathname);

  return (
    <div>
      <Header>
        <nav>
          {isLoading ? <SpinnerForImg /> : <UserProfile user={userData} />}
        </nav>
      </Header>
      <Main>
        <div className={styles.main}>
          <Hero isLoading={isLoading} userData={userData} />
          <DashboardContent>
            <DashboardOptions />
            {path ? <EmptyView /> : <Outlet />}
          </DashboardContent>
        </div>
      </Main>
      <Footer>
        <AboutPage />
      </Footer>
    </div>
  );
}
