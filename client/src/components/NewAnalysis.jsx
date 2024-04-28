import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const NewAnalysis = () => {

  const [mood, setMood] = useState('select')
  const [behavioralActivities, setBehavioralActivities] = useState('select')
  const [sleepPattern, setSleepPattern] = useState('select')
  const [diet, setDiet] = useState('select')
  const [socialInteractions, setSocialInteractions] = useState('select')
  const [stress, setStress] = useState('select')
  const [medication, setMedication] = useState('select')
  const [substanceCravings, setSubstanceCravings] = useState('select')
  const [therapy, setTherapy] = useState('select')
  const [triggerExposure, setTriggerExposure] = useState('select')
  const [physicalSymptoms, setPhysicalSymptoms] = useState('select')
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const analysis = {
      mood,
      behavioralActivities,
      sleepPattern,
      diet,
      socialInteractions,
      stress,
      medication,
      substanceCravings,
      therapy,
      triggerExposure,
      physicalSymptoms
    }



    for (const key in analysis) {
      if (analysis[key] === 'select') {
        setErrors(['Please fill out all fields'])
        return
      }
    }

    console.log(document.cookie)

    axios.post('http://localhost:8001/api/analyses', { userJWT: Cookies.get('usertoken'), analysis }, {withCredentials: true})
      .then(res => {
        console.log('success')
      })
      .catch(err => {
        console.log(err.response.data)
        setErrors(['An error occurred'])
      })
  }

  return (
    <div className='mx-64 my-8'>
      <div className='py-4 text-center rounded-lg bg-cabana-green shadow-lg'>
        <div className='flex justify-center'>
          <h1 className='text-xl py-4 px-8'>Daily Analysis</h1>
        </div>
        <div className='mt-8 flex justify-center align-center text-center'>
          <div>
            <form onSubmit={handleSubmit}>
              <label className='mr-6'>Mood</label>
              <select defaultValue={mood} onChange={(e) => {setMood(e.target.value)}} name="" id="" className='bg-baby-pink mb-2 rounded shadow'>
                <option value="select">Select</option>
                <option value="poor">Poor</option>
                <option value="fair">Fair</option>
                <option value="average">Average</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
              </select>
              <br />
              <label className='mr-6'>Behavior Activities</label>
              <select defaultValue={behavioralActivities} onChange={(e) => setBehavioralActivities(e.target.value)} className='bg-baby-pink mb-2 rounded shadow'>
                <option value="select">Select</option>
                <option value="normal">Normal</option>
                <option value="decreased">Decreased</option>
                <option value="increased">Increased</option>
                <option value="static">Static</option>
                <option value="erratic">Erratic</option>
              </select>
              <br />
              <label className='mr-6'>Sleep Pattern</label>
              <select defaultValue={sleepPattern} onChange={(e) => {setSleepPattern(e.target.value)}} name="" id="" className='bg-baby-pink mb-2 rounded shadow'>
                <option value="select">Select</option>
                <option value="poor">Poor</option>
                <option value="fair">Fair</option>
                <option value="average">Average</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
              </select>
              <br />
              <label className='mr-6'>Diet</label>
              <select defaultValue={diet} onChange={(e) => {setDiet(e.target.value)}} name="" id="" className='bg-baby-pink mb-2 rounded shadow'>
                <option value="select">Select</option>
                <option value="unhealthy">Unhealthy</option>
                <option value="moderate">Moderate</option>
                <option value="balanced">Balanced</option>
                <option value="healthy">Healthy</option>
                <option value="very healthy">Very Healthy</option>
              </select>
              <br />
              <label className='mr-6'>Social Interactions</label>
              <select defaultValue={socialInteractions} onChange={(e) => {setSocialInteractions(e.target.value)}} name="" id="" className='bg-baby-pink mb-2 rounded shadow'>
                <option value="select">Select</option>
                <option value="isolated">Isolated</option>
                <option value="minimal">Minimal</option>
                <option value="normal">Normal</option>
                <option value="active">Active</option>
                <option value="engaged">Engaged</option>
              </select>
              <br />
              <label className='mr-6'>Stress</label>
              <select defaultValue={stress} onChange={(e) => {setStress(e.target.value)}} name="" id="" className='bg-baby-pink mb-2 rounded shadow'>
                <option value="select">Select</option>
                <option value="none">None</option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
                <option value="intense">Intense</option>
              </select>
              <br />
              <label className='mr-6'>Medication</label>
              <select defaultValue={medication} onChange={(e) => {setMedication(e.target.value)}} name="" id="" className='bg-baby-pink mb-2 rounded shadow'>
                <option value="select">Select</option>
                <option value="missed">Missed</option>
                <option value="partial">Partial</option>
                <option value="adherant">Adherant</option>
                <option value="mostly adherant">Mostly Adherant</option>
                <option value="overused">Overused</option>
              </select>
              <br />
              <label className='mr-6'>Substance Cravings</label>
              <select defaultValue={substanceCravings} onChange={(e) => {setSubstanceCravings(e.target.value)}} name="" id="" className='bg-baby-pink mb-2 rounded shadow'>
                <option value="select">Select</option>
                <option value="none">None</option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
                <option value="intense">Intense</option>
              </select>
              <br />
              <label className='ml-8 mr-6'>Therapy Sessions</label>
              <select defaultValue={therapy} onChange={(e) => {setTherapy(e.target.value)}} name="" id="" className='bg-baby-pink mb-2 rounded shadow mr-8'>
                <option value="select">Select</option>
                <option value="missed">Missed</option>
                <option value="rescheduled">Rescheduled</option>
                <option value="attended">Attended</option>
                <option value="double session">Double Session</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <br />
              <label className='mr-6'>Trigger Exposure</label>
              <select defaultValue={triggerExposure} onChange={(e) => {setTriggerExposure(e.target.value)}} name="" id="" className='bg-baby-pink mb-2 rounded shadow'>
                <option value="select">Select</option>
                <option value="none">None</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="very high">Very High</option>
              </select>
              <br />
              <label className='mr-6'>Physical Symptoms</label>
              <select defaultValue={physicalSymptoms} onChange={(e) => {setPhysicalSymptoms(e.target.value)}} name="" id="" className='bg-baby-pink mb-2 rounded shadow'>
                <option value="select">Select</option>
                <option value="none">None</option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
                <option value="debilitating">Debilitating</option>
              </select>
              <br />
              <button className='p-2 m-4 bg-baby-pink rounded shadow' type="submit">Submit</button>
              {errors.map((elem, i) => {
                return <p key={i} className='text-red-500'>{elem}</p>
              })}
            </form>
          </div>
        </div>
      </div>
      <div className='h-16'></div>
    </div>
  )
}

export default NewAnalysis