import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";
import axios from "axios";
// import { IconButton } from 'material-ui'
// import { Delete } from 'material-design-icons'

const BASE_URL = "https://api.airtable.com/v0/appbIJiGm110d5tbK/Table%201";

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const FadeSection = styled.section`
  animation: 2s ${fadeInDownAnimation};
`;

export default function List(props) {
  

  const { fields, id } = props.entry;

  const handleDelete = async (e) => {
    e.preventDefault()
    const response = await axios.delete(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        "Content-Type": "application/json",
      },
    })
    props.updateFetchEntries(!props.fetchEntries)
   

  }

  return (
    <div className="list">
      <FadeSection className="entries">
        <h2>Your daily Calories</h2>
        <h2>Date: {fields.Date}</h2>
        <h3>Breakfast calories: {fields.Breakfast}</h3>
        <h3>Lunch calories: {fields.Lunch}</h3>
        <h3>Snack calories: {fields.Snack}</h3>
        <h3>Dinner calories: {fields.Dinner}</h3>

        <h4>
          <strong>Your Comments: </strong>
          {fields.Comments}
        </h4>
        <h3>Total daily calories: {fields.Total}</h3>
        <button onClick={handleDelete}></button>
      </FadeSection>
    </div>
  );
}
