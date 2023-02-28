// import Home from './pages/Home';
// import Login from 'pages/Login';
// import { NotFound } from 'pages/NotFound';
// import { About } from 'pages/About';
import Spinner from 'components/Spinner';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const NotFound = lazy(() => import('pages/NotFound'));
const About = lazy(() => import('pages/About'));
const UserSettings = lazy(() => import('pages/UserSettings'));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Routes>
            <Route path='/movies-app/' element={<Home />} />
            <Route path='/movies-app/login' element={<Login />} />
            <Route path='/movies-app/*' element={<NotFound />} />
            <Route path='/movies-appnotFound' element={<NotFound />} />
            <Route path='/movies-app/settings' element={<UserSettings />} />
            <Route path='/movies-app/about' element={<About />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
