import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
