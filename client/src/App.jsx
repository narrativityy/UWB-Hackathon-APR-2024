import { useState } from 'react'
import axios from 'axios'

function App() {

  const [problem, setProblem] = useState('')
  const [response, setResponse] = useState('')

  const submitProblem = async (e) => {
    e.preventDefault()
    console.log(document.cookie)
    
    if (document.cookie.includes('threadId')) {
      console.log('thread id')
      axios.post('http://localhost:8001/api/send-message', { message: problem, thread_id: document.cookie.split('=')[1] })
        .then((res) => {
          setResponse(res.data.message)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else {
      console.log('no thread id')
      axios.post('http://localhost:8001/api/send-message', { message: problem })
      .then((res) => {
        setResponse(res.data.message)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }


  return (
    <>
      <div>
        <form onSubmit={submitProblem}>
          <input type="text" value={problem} onChange={(e) => setProblem(e.target.value)} placeholder='Describe Your Problem'/>
          <br />
          <button>Submit</button>
          <p>{response}</p>
        </form>
      </div>
    </>
  )
}

export default App
