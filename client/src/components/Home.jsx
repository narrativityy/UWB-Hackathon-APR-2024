import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../AuthContext'
import { Link } from 'react-router-dom'

const Home = () => {

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
    <div className='mx-4 mt-16 justify-around items-center text-center'>
      <div className="mt-4 mx-2 flex justify-around flex-wrap text-center">
        <Link className='w-full sm:w-1/2 md:w-1/4 my-4 lg:w-1/4' to={'/analysis/new'}>
          <div className="rounded shadow-lg bg-cabana-green hover:bg-dark-green hover:text-white px-4 mx-4 py-12">
            <h1 className='text-l'>New Analysis</h1>
          </div>
        </Link>

        <Link className='w-full sm:w-1/2 md:w-1/4 my-4 lg:w-1/4' to={'/coping-strategies'}>
          <div className="rounded shadow-lg bg-cabana-green hover:bg-dark-green hover:text-white px-4 mx-4 py-12">
            <h1 className='text-l'>Coping Techniques</h1>
          </div>
        </Link>

        <div onClick={logout} className="cursor-pointer w-full sm:w-1/2 md:w-1/4 my-4 lg:w-1/4 rounded shadow-lg bg-cabana-green hover:bg-dark-green hover:text-white mx-4 py-12">
          <h1 className='text-l'>Logout</h1>
        </div>
      </div>
    </div>

    
  )
}

export default Home