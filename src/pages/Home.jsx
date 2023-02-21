import Aside from 'layout/Aside';
import Footer from 'layout/Footer';
import MainContainer from 'layout/MainContainer';
import Header from 'layout/Header';
import Main from 'layout/Main';
import GridContainer from 'components/GridContainer';
import Categories from 'components/Categories';
import Navbar from 'components/Navbar';

export default function Home() {
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
          <GridContainer />
        </MainContainer>
      </Main>
      <Footer></Footer>
    </div>
  );
}
