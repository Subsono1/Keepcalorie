import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { fadeInLeft, zoomIn } from 'react-animations'
import Button from '@material-ui/core/Button';



const BASE_URL = "https://api.airtable.com/v0/appbIJiGm110d5tbK/Table%201";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`
const FadeDiv = styled.section`
animation:2s ${fadeInLeftAnimation}`

const zoomInAnimation = keyframes`${zoomIn}`
const EntryDiv = styled.section`
animation:2s ${zoomInAnimation}`

export default function CreateEntry(props) {

  const [Date, updateDate] = useState("");
  const [Breakfast, updateBreakfast] = useState("");
  const [Lunch, updateLunch] = useState("");
  const [Snack, updateSnack] = useState("");
  const [Dinner, updateDinner] = useState("");
  const [Comments, updateComments] = useState("");
  
  



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // try {
    const response = await axios.post(
      BASE_URL,
      {
        fields: {
      Date: Date,
      Breakfast: parseInt(Breakfast),
      Lunch: parseInt(Lunch),
      Snack: parseInt(Snack),
      Dinner: parseInt(Dinner),
      Comments: Comments,
        },
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );//to make the call again.
    props.updateFetchEntries(!props.fetchEntries)
    updateDate('')
    updateBreakfast('')
    updateLunch('')
    updateSnack('')
    updateDinner('')
    updateComments('')
    // } catch (e) {
      // console.log(`This is the: ${e}`)
  // }
    
  
    
    
  };
  const history = useHistory()
  function handleChange() {
   history.push('/entries')
  }

 
 

  return (
    <>
      <FadeDiv className="new-entry-headline">
        <h1 className="headline-text">Let's Keep Track Of Your Calories</h1>
        <h3 className="headline-text">
          Here you can start by inputing your daily calories from mornign until
          night, and track how many calories you consume a day.
        </h3>
      </FadeDiv>

      <EntryDiv className="new-entry-div">
        <form onSubmit={handleSubmit} className="new-entry-box">
          <label htmlFor="date" >Date</label>
          <input
            name="date"
            type="date"
            onChange={(e) => updateDate(e.target.value)}
            value={Date}
          ></input>
          <label htmlFor="breakfast">Breakfast</label>
          <input
            name="breakfast"
            type="number"
            placeholder="200"
            onChange={(e) => updateBreakfast(e.target.value)}
            value={Breakfast}
          />
          <label htmlFor="lunch">Lunch</label>
          <input
            name="lunch"
            type="number"
            placeholder="400"
            onChange={(e) => updateLunch(e.target.value)}
            value={Lunch}
          />
          <label htmlFor="snack">Any Snacks?</label>
          <input
            name="snack"
            type="number"
            placeholder="80"
            onChange={(e) => updateSnack(e.target.value)}
            value={Snack}
          ></input>
          <label htmlFor="dinner">Dinner</label>
          <input
            name="dinner"
            type="number"
            placeholder="650"
            onChange={(e) => updateDinner(e.target.value)}
            value={Dinner}
          ></input>
          <label htmlFor="comments">Add Comments</label>
          <textarea
            name="comment"
            type="text"
            placeholder="Your Comment"
            onChange={(e) => updateComments(e.target.value)}
            value={Comments}
          />
          {/* <button type="submit">Track Them</button> */}
          <Button type="submit" onSubmit={handleChange} variant="contained" className="button" size="medium" color="primary" >
            Submit
        </Button>
          
          
          
        </form>
       
      </EntryDiv>
    </>
  );
}
