import Aside from '../layout/Aside';
import Footer from '../layout/Footer';
import MainContainer from '../layout/MainContainer';
import Header from '../layout/Header';
import Main from '../layout/Main';
import GridContainer from '../components/GridContainer';
import Categories from '../components/Categories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Header />
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
