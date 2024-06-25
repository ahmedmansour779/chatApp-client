import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import Chat from './pages/Chat';
import './style/App.css';
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/RegisterPage'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
