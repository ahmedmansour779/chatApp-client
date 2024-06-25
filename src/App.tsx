import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import RegisterPage from './pages/RegisterPage';
import './style/App.css';
const Login = lazy(() => import('./pages/Login'));
// const Register = lazy(() => import('./pages/RegisterPage'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
