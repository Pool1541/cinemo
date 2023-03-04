// import Home from './pages/Home';
// import Login from 'pages/Login';
// import { NotFound } from 'pages/NotFound';
// import { About } from 'pages/About';
import Guard from 'guards/Guard';
import Spinner from 'components/Spinner';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import ListsView from 'pages/ListsView';
import RatingsView from 'pages/RatingsView';
import DiscussionsView from 'pages/DiscussionsView';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const NotFound = lazy(() => import('pages/NotFound'));
const About = lazy(() => import('pages/About'));
const UserSettings = lazy(() => import('pages/UserSettings'));
const MovieView = lazy(() => import('pages/MovieView'));

function App() {
  // /* basename='/movies-app */
  return (
    <div className='App'>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='movies/:movieId' element={<MovieView />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='notFound' element={<NotFound />} />
          <Route
            path='/settings'
            element={
              <Guard>
                <UserSettings />
              </Guard>
            }
          />
          <Route
            path='/dashboard'
            element={
              <Guard>
                <Dashboard />
              </Guard>
            }
          >
            <Route path='/dashboard/lists' element={<ListsView />} />
            <Route
              path='/dashboard/discussions'
              element={<DiscussionsView />}
            />
            <Route path='/dashboard/ratings' element={<RatingsView />} />
          </Route>
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
