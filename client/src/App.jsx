import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthContext from './AuthContext';
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar';
import Register from './components/Register'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (document.cookie.includes('usertoken')) {
      setLoggedIn(true)
    }
  }, [loggedIn])

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {loggedIn ?
      <Routes>
        <Route path="/" element={<div><Navbar /><Home /></div>} />

        <Route path="/login" element={<Navigate to="/" />} />

      </Routes> : 
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      }
    </AuthContext.Provider>
  )
}

export default App
