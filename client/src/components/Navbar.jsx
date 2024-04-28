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
    <div>
      <nav className='flex justify-center items-center py-2 px-4 bg-cabana-green text-white'>
        <Link to={'/'}><img className='w-auto h-16' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FLotus.png&f=1&nofb=1&ipt=9bbf3b18e70008c037b0055f45d9714d40b68b78bce5988ef54cea7418e35772&ipo=images" alt="lotus flower" /></Link>
      </nav>
    </div>
  )
}

export default Navbar