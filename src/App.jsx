import './App.css'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/data' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
