import Aside from 'layout/Aside';
import Footer from 'layout/Footer';
import MainContainer from 'layout/MainContainer';
import Header from 'layout/Header';
import Main from 'layout/Main';
import GridContainer from 'components/GridContainer';
import Categories from 'components/Categories';
import Navbar from 'components/Navbar';
import { AboutPage } from 'components/AboutPage';
import { useState } from 'react';
import AuthProvider from 'components/AuthProvider';

export default function Home() {
  const [state, setState] = useState(0);
  const [user, setUser] = useState(null);

  function handleUserLoggedIn(user) {
    setUser(user);
    setState(2);
  }

  function handleUserNotLoggedIn() {
    setState(3);
  }

  if (state === 0)
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotLoggetIn={handleUserNotLoggedIn}
      ></AuthProvider>
    );
  return (
    <div>
      <Header>
        <Navbar user={user} />
      </Header>
      <Main>
        <Aside>
          <Categories />
        </Aside>
        <MainContainer>
          <GridContainer />
        </MainContainer>
      </Main>
      <Footer>
        <AboutPage />
      </Footer>
    </div>
  );
}
