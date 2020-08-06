import React from "react";
import axios from "axios";


export default function List(props) {
  console.log(props)
  const { fields } = props.entry
  return (
    <div className="list">
      <section className="entries">
        <h2>Your daily Calories</h2>
        <h2>Date:  {fields.Date}</h2>
        <h3>Breakfast calories: {fields.Breakfast}</h3>
        <h3>Lunch calories: {fields.Lunch}</h3>
        <h3>Snack calories: {fields.Snack}</h3>
        <h3>Dinner calories: {fields.Dinner}</h3>
      </section>
      <p><strong>Your Comments: </strong>{fields.Comments}</p>
      <h3>Total daily calories: {fields.Total}</h3>
    </div>
  );
}
