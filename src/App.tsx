import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoadingPage from './components/LoadingPage';
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
