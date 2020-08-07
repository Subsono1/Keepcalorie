import React, { useEffect, useState } from "react";
import { Route, Switch, Router } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav"
import Start from './components/Start'
import CreateEntry from "./components/CreateEntry"
import Entries from './components/Entries'
import Resources from "./components/Resources"
import "./CreateEntry.css"
import './List.css'
import "./Resources.css"

import "./App.css";

function App() {
  const [entries, updateEntries] = useState([])
  const [fetchEntries, updateFetchEntries] = useState (false)
  const BASE_URL =
    "https://api.airtable.com/v0/appbIJiGm110d5tbK/Table%201";

  useEffect(() => {
    const getCalorieRecords = async () => {
      const response = await axios.get(BASE_URL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response.data);
      updateEntries(response.data.records)
    };
    
    getCalorieRecords();
  }, [fetchEntries]);

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route exact path="/form">
          <CreateEntry
           fetchEntries={fetchEntries}
           updateFetchEntries={updateFetchEntries}/>

        </Route>
        <Route path="/entries">
          <Entries
            calorieEntries={entries}
            fetchEntries={fetchEntries}
           updateFetchEntries={updateFetchEntries}
            
            />
        </Route>

        <Route path="/resources">
          <Resources />
        </Route>


      </Switch>




    </div>



  )
}

export default App;
