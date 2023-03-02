// import Home from './pages/Home';
// import Login from 'pages/Login';
// import { NotFound } from 'pages/NotFound';
// import { About } from 'pages/About';
import Guard from 'guards/Guard';
import Spinner from 'components/Spinner';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const NotFound = lazy(() => import('pages/NotFound'));
const About = lazy(() => import('pages/About'));
const UserSettings = lazy(() => import('pages/UserSettings'));

function App() {
  // /* basename='/movies-app */
  return (
    <div className='App'>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<Home />} />
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
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
