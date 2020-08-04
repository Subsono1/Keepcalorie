import React from "react";

export default function CreateEntry() {
  return (
    <>
      <div className="new-entry-headline">
        <h1 >Let's Keep Track Of Your Calories</h1>
        <h3>
          Here you can start by inputing your daily calories from mornign until
          night, and have a track of how many calories you consume a day.
        </h3>
      </div>

      <div className="new-entry-div">
        <form className="new-entry-box">
          <label htmlFor="date">Date</label>
          <input name="date" type="date"></input>
          <label htmlFor="breakfast">Breakfast</label>
          <input name="breakfast" type="number" placeholder="200" />
          <label htmlFor="lunch">Lunch</label>
          <input name="lunch" type="number" placeholder="400" />
          <label htmlFor="snack">Any Snacks?</label>
          <input name="snack" type="number" placeholder="80"></input>
          <label htmlFor="diner">Diner</label>
          <input name="diner" type="number" placeholder="650"></input>
          <label htmlFor="comment">Add Comments</label>
          <textarea name="comment" type="text" placeholder="Your Comment" />
        </form>
      </div>
    </>
  );
}
