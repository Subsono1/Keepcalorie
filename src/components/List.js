import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";
import axios from "axios";
import DeleteIcon from '@material-ui/icons/Delete';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons'
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
        <h2 className="daily-calories">Your daily Calories</h2>
        <h2>Date: {fields.Date}</h2>
        <h3>Breakfast calories: {fields.Breakfast}</h3>
        <h3>Lunch calories: {fields.Lunch}</h3>
        <h3>Snack calories: {fields.Snack}</h3>
        <h3>Dinner calories: {fields.Dinner}</h3>

        <h3>
          <strong>Your Comments: </strong>
          {fields.Comments}
        </h3>
        <h1 className="total">Total daily calories: {fields.Total}</h1>
        <DeleteIcon className="delete"fontSize='large' onClick={handleDelete}></DeleteIcon >
      </FadeSection>
    </div>
  );
}
