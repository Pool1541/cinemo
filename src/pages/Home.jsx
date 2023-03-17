import Aside from 'layout/Aside';
import Footer from 'layout/Footer';
import MainContainer from 'layout/MainContainer';
import Header from 'layout/Header';
import Main from 'layout/Main';
import GridContainer from 'components/GridContainer';
import Categories from 'components/Categories';
import Navbar from 'components/Navbar';
import { AboutPage } from 'components/AboutPage';
import { Outlet, useParams } from 'react-router-dom';

export default function Home() {
  const { movieId } = useParams();

  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Aside>
          <Categories />
        </Aside>
        <MainContainer>
          {movieId ? <Outlet /> : <GridContainer />}
        </MainContainer>
      </Main>
      <Footer>
        <AboutPage />
      </Footer>
    </div>
  );
}
