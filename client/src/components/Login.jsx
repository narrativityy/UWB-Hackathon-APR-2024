import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../AuthContext'

const Login = () => {

  const navigate = useNavigate()

  const { loggedIn, setLoggedIn } = React.useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState([])

  const login = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8001/api/users/login', {email, password}, {withCredentials: true})
      .then(res => {
        console.log(res.data)
        setLoggedIn(true)
        navigate('/')
      })
      .catch(err => {
        console.log(err)
        setError(['Invalid email or password'])
      })
  }

  useEffect(() => {
    if (loggedIn) {
      navigate('/')
    }
  }, [loggedIn, navigate])

  return (
    <div className='my-16 flex justify-center align-center text-center'>
      <div>
        <form onSubmit={login}>
          <input className='my-1 p-1 shadow-md rounded' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input className='my-1 p-1 shadow-md rounded' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button className='my-1 p-1 bg-white hover:bg-black hover:text-white rounded shadow-md' type='submit'>Login</button>
          <Link to={'/register'}><h5 className='mt-2 text-blue-700 underline'>Create an account</h5></Link>
          <br />
          {error.map((elem, i) => {
            return <p key={i} className='text-red-500'>{elem}</p>
          })}
        </form>
      </div>
    </div>
  )
}

export default Login