import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = "https://api.airtable.com/v0/appbIJiGm110d5tbK/Table%201";

export default function CreateEntry(props) {
  const [Date, updateDate] = useState("");
  const [Breakfast, updateBreakfast] = useState("");
  const [Lunch, updateLunch] = useState("");
  const [Snack, updateSnack] = useState("");
  const [Dinner, updateDinner] = useState("");
  const [Comment, updateComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      BASE_URL,
      {
        fields: {
          Date: "",
          Breakfast: "",
          Lunch: "",
          Snack: "",
          Dinner: "",
          Comments: "",
        },
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );//to make the call again.
    props.invokeFetch(!props.fetchEntries)
    updateBreakfast('')
    // console.log(response.data);
  };

  return (
    <>
      <div className="new-entry-headline">
        <h1>Let's Keep Track Of Your Calories</h1>
        <h3>
          Here you can start by inputing your daily calories from mornign until
          night, and track how many calories you consume a day.
        </h3>
      </div>

      <div className="new-entry-div">
        <form onSubmit={handleSubmit} className="new-entry-box">
          <label htmlFor="date">Date</label>
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
          <label htmlFor="comment">Add Comments</label>
          <textarea
            name="comment"
            type="text"
            placeholder="Your Comment"
            onChange={(e) => updateComment(e.target.value)}
            value={Comment}
          />
          <Link to="/entries"className="button-link"><button type="button">Track Them</button></Link>
        </form>
        {/* <Link to="/entries"><button type="button">Track Them</button></Link> */}
      </div>
    </>
  );
}
