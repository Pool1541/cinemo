// import Home from './pages/Home';
// import Login from 'pages/Login';
// import { NotFound } from 'pages/NotFound';
// import { About } from 'pages/About';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const NotFound = lazy(() => import('pages/NotFound'));
const About = lazy(() => import('pages/About'));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<>Cargando...</>}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='notFound' element={<NotFound />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
