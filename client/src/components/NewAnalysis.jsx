import React, { useState } from 'react'

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

    console.log(analysis)

    for (const key in analysis) {
      if (analysis[key] === 'select') {
        setErrors(['Please fill out all fields'])
        return
      }
    }
  }

  return (
    <div className='my-8 text-center'>
      <h1 className='text-xl'>New Analysis</h1>
      <div className='mt-4 flex justify-center align-center text-center'>
        <div>
          <form onSubmit={handleSubmit}>
            <label className='mr-4'>Mood</label>
            <select defaultValue={mood} onChange={(e) => {setMood(e.target.value)}} name="" id="" className='mb-2 border rounded shadow'>
              <option value="select">Select</option>
              <option value="poor">Poor</option>
              <option value="fair">Fair</option>
              <option value="average">Average</option>
              <option value="good">Good</option>
              <option value="excellent">Excellent</option>
            </select>
            <br />
            <label className='mr-4'>Behavior Activities</label>
            <select defaultValue={behavioralActivities} onChange={(e) => setBehavioralActivities(e.target.value)} className='mb-2 border rounded shadow'>
              <option value="select">Select</option>
              <option value="normal">Normal</option>
              <option value="decreased">Decreased</option>
              <option value="increased">Increased</option>
              <option value="static">Static</option>
              <option value="erratic">Erratic</option>
            </select>
            <br />
            <label className='mr-4'>Sleep Pattern</label>
            <select defaultValue={sleepPattern} onChange={(e) => {setSleepPattern(e.target.value)}} name="" id="" className='mb-2 border rounded shadow'>
              <option value="select">Select</option>
              <option value="poor">Poor</option>
              <option value="fair">Fair</option>
              <option value="average">Average</option>
              <option value="good">Good</option>
              <option value="excellent">Excellent</option>
            </select>
            <br />
            <label className='mr-4'>Diet</label>
            <select defaultValue={diet} onChange={(e) => {setDiet(e.target.value)}} name="" id="" className='mb-2 border rounded shadow'>
              <option value="select">Select</option>
              <option value="unhealthy">Unhealthy</option>
              <option value="moderate">Moderate</option>
              <option value="balanced">Balanced</option>
              <option value="healthy">Healthy</option>
              <option value="very healthy">Very Healthy</option>
            </select>
            <br />
            <label className='mr-4'>Social Interactions</label>
            <select defaultValue={socialInteractions} onChange={(e) => {setSocialInteractions(e.target.value)}} name="" id="" className='mb-2 border rounded shadow'>
              <option value="select">Select</option>
              <option value="isolated">Isolated</option>
              <option value="minimal">Minimal</option>
              <option value="normal">Normal</option>
              <option value="active">Active</option>
              <option value="engaged">Engaged</option>
            </select>
            <br />
            <label className='mr-4'>Stress</label>
            <select defaultValue={stress} onChange={(e) => {setStress(e.target.value)}} name="" id="" className='mb-2 border rounded shadow'>
              <option value="select">Select</option>
              <option value="none">None</option>
              <option value="mild">Mild</option>
              <option value="moderate">Moderate</option>
              <option value="severe">Severe</option>
              <option value="intense">Intense</option>
            </select>
            <br />
            <label className='mr-4'>Medication</label>
            <select defaultValue={medication} onChange={(e) => {setMedication(e.target.value)}} name="" id="" className='mb-2 border rounded shadow'>
              <option value="select">Select</option>
              <option value="missed">Missed</option>
              <option value="partial">Partial</option>
              <option value="adherant">Adherant</option>
              <option value="mostly adherant">Mostly Adherant</option>
              <option value="overused">Overused</option>
            </select>
            <br />
            <label className='mr-4'>Substance Cravings</label>
            <select defaultValue={substanceCravings} onChange={(e) => {setSubstanceCravings(e.target.value)}} name="" id="" className='mb-2 border rounded shadow'>
              <option value="select">Select</option>
              <option value="none">None</option>
              <option value="mild">Mild</option>
              <option value="moderate">Moderate</option>
              <option value="severe">Severe</option>
              <option value="intense">Intense</option>
            </select>
            <br />
            <label className='mr-4'>Therapy Sessions</label>
            <select defaultValue={therapy} onChange={(e) => {setTherapy(e.target.value)}} name="" id="" className='mb-2 border rounded shadow'>
              <option value="select">Select</option>
              <option value="missed">Missed</option>
              <option value="rescheduled">Rescheduled</option>
              <option value="attended">Attended</option>
              <option value="double session">Double Session</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <br />
            <label className='mr-4'>Trigger Exposure</label>
            <select defaultValue={triggerExposure} onChange={(e) => {setTriggerExposure(e.target.value)}} name="" id="" className='mb-2 border rounded shadow'>
              <option value="select">Select</option>
              <option value="none">None</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="very high">Very High</option>
            </select>
            <br />
            <label className='mr-4'>Physical Symptoms</label>
            <select defaultValue={physicalSymptoms} onChange={(e) => {setPhysicalSymptoms(e.target.value)}} name="" id="" className='mb-2 border rounded shadow'>
              <option value="select">Select</option>
              <option value="none">None</option>
              <option value="mild">Mild</option>
              <option value="moderate">Moderate</option>
              <option value="severe">Severe</option>
              <option value="debilitating">Debilitating</option>
            </select>
            <br />
            <button type="submit">Submit</button>
            {errors.map((elem, i) => {
              return <p key={i} className='text-red-500'>{elem}</p>
            })}
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewAnalysis