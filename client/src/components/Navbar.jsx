import React from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../AuthContext';

const Navbar = () => {

  const { loggedIn, setLoggedIn } = React.useContext(AuthContext)

  const navigate = useNavigate()

  const logout = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8001/api/users/logout', {}, {withCredentials: true})
      .then(res => {
        console.log(res.data)
        setLoggedIn(false)
        navigate('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <nav className='flex justify-between items-center m-1 py-2 px-4 bg-black text-white rounded'>
      <Link to={'/'}><h1 className='text-2xl'>Navbar</h1></Link>

      <div className='flex justify-around items-center gap-x-4 m-1 py-2 px-4 bg-black text-white rounded'>
        <Link to={'/analysis/new'}><h3 className='cursor-pointer'>New Analysis</h3></Link>
        <h3 className='cursor-pointer' onClick={logout}>Logout</h3>
      </div>

    </nav>
  )
}

export default Navbar