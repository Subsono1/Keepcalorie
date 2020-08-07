import React from 'react'
import { useHistory } from 'react-router-dom'
import { flash } from 'react-animations'
import styled, { keyframes } from 'styled-components';
const flashAnimation = keyframes`${flash}`;
 
const FlashButton = styled.button`
  animation: 20s ${flashAnimation};
`;


export default function Start() {


const history = useHistory()
  function handleSubmit() {
   history.push('/form')
  }
  
  return (
    <div className="start-div">
    <div>
      {/* <button className='start'><Link className="start-link" to="/form">Another</Link></button> */}
      <FlashButton onClick={handleSubmit} type="submit" className="start">Discover Your Calories</FlashButton>
       {/* <Link to="/form" className="start">Discover Your Calories</Link> */}
    </div >
    </div>
  )
}
