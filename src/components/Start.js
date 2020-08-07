import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Start() {
const history = useHistory()
  function handleSubmit() {
   history.push('/form')
  }
  
  return (
    <div>
      {/* <button className='start'><Link className="start-link" to="/form">Another</Link></button> */}
      <button onClick={handleSubmit}type="submit" className="start">Discover Your Calories</button>
       {/* <Link to="/form" className="start">Discover Your Calories</Link> */}
    </div>
  )
}
