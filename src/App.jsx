import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './components/Login'

function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  return (
    <div className='app'>
      {isLoggedIn && <Header />}
      <Routes>
        <Route path='/' element={isLoggedIn ? <Home/> : <Login />} />
      </Routes>
    </div>
  )
}

export default App
