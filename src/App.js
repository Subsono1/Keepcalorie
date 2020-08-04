import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav"
import CreateEntry from "./components/CreateEntry"
import "./CreateEntry.css"

import "./App.css";

function App() {
  const BASE_URL =
    "https://api.airtable.com/v0/appbIJiGm110d5tbK/Table%201?maxRecords=3&view=Grid%20view";

  useEffect(() => {
    const getCalorieRecords = async () => {
      const response = await axios.get(BASE_URL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response.data.records[0].fields);
    };
    getCalorieRecords();
  }, []);

  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/">
          <CreateEntry />

        </Route>


      </Switch>




    </div>



  )
}

export default App;
