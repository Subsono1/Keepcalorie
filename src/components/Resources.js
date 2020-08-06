import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { isCompositeComponent } from 'react-dom/test-utils'

export default function Resources() {
  const [query, updateQuery] = useState('')
  const BASE_URL = "https://trackapi.nutritionix.com/v2/search/instant?query="

  
    const getCalories = async () => {
      const response = await axios.get(`${BASE_URL}${query}`, {
        headers: {
          'x-app-id': 'dc1a6b13',
          'x-app-key': '0597f141fdeb9775ba60311a5e35fbf5',
          "Content-Type": "application/json" 


        }
      })
      console.log(response.data)
    }
  


  return (
    <>
    <div>

      <input value={query} onChange={(e) => updateQuery(e.target.value)}></input>
      <button onClick={getCalories}>Click me</button>
      
    </div>
      <div>
        {/* <h1 >{value.food_name}</h1> */}

      </div>
      </>
  )
}
