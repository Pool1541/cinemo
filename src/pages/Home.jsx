import Aside from '../layout/Aside';
import Footer from '../layout/Footer';
import MainContainer from '../layout/MainContainer';
import Header from '../layout/Header';
import Main from '../layout/Main';
import GridContainer from '../components/GridContainer';

export default function Home() {
  return (
    <div>
      <Header />
      <Main>
        <Aside>{/* <Caregorias /> */}</Aside>
        <MainContainer>
          <GridContainer />
        </MainContainer>
      </Main>
      <Footer></Footer>
    </div>
  );
}
