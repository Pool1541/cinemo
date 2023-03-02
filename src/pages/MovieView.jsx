import useFecthMovieData from 'hooks/useFetchMovieData';
import Aside from 'layout/Aside';
import Footer from 'layout/Footer';
import MainContainer from 'layout/MainContainer';
import Header from 'layout/Header';
import Main from 'layout/Main';
import GridContainer from 'components/GridContainer';
import Categories from 'components/Categories';
import Navbar from 'components/Navbar';
import { AboutPage } from 'components/AboutPage';
import { MovieInfo } from 'components/MovieInfo';

export default function MovieView() {
  const { movieData, isLoading, error } = useFecthMovieData();

  return <MovieInfo movieId={movieData} />;
}
