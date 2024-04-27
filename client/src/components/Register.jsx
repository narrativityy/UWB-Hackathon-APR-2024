import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../AuthContext'

const Register = () => {

  const navigate = useNavigate()

  const { loggedIn, setLoggedIn } = React.useContext(AuthContext)

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState([])

  const register = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setErrors(['Passwords do not match'])
      return
    }

    axios.post('http://localhost:8001/api/users/register', {name, username, email, password}, {withCredentials: true})
      .then(res => {
        console.log(res.data)
        setLoggedIn(true)
        navigate('/')
      })
      .catch(err => {
        console.log(err.response.data)
        setErrors([])
        for (const key in err.response.data.errors) {
          setErrors(prev => [...prev, err.response.data.errors[key].message])
        }
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
        <form onSubmit={register}>
          <input className='my-1 p-1 shadow-md rounded' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <input className='my-1 p-1 shadow-md rounded' type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <input className='my-1 p-1 shadow-md rounded' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input className='my-1 p-1 shadow-md rounded' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <input className='my-1 p-1 shadow-md rounded' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <br />
          <button className='my-1 p-1 bg-white hover:bg-black hover:text-white rounded shadow-md' type='submit'>Sign up</button>
          <Link to={'/login'}><h5 className='mt-2 text-blue-700 underline'>Log in</h5></Link>
          {errors.map((elem, i) => {
            return <p key={i} className='mt-2 text-red-500'>{elem}</p>
          })}
        </form>
      </div>
    </div>
  )
}

export default Register