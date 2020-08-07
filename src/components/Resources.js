import React, { useState, useEffect } from "react";
import axios from "axios";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";

export default function Resources(props) {
  const [query, updateQuery] = useState("");
  const [results, updateResults] = useState([]);
  const BASE_URL = "https://trackapi.nutritionix.com/v2/search/instant?query=";

  const getCalories = async () => {
    const response = await axios.get(`${BASE_URL}${query}`, {
      headers: {
        "x-app-id": "dc1a6b13",
        "x-app-key": "0597f141fdeb9775ba60311a5e35fbf5",
        "Content-Type": "application/json",
      },
    });
    updateResults(response.data.common);
    console.log(response);
  };

  return (
    <>
      <div className="main-nut-div">
        <input
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
        ></input>
        <button type="submit" onClick={getCalories}>
          Click me
        </button>
        <div className="nutrition">
          {results.map((item) => (
            <Link className="results" to={`/food/${item.food_name}`}>
              <div>
                <img className="image"src={item.photo.thumb} />
                <p className="info">{item.serving_unit}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="calculator">
        <Iframe src="https://www.mealpro.net/calorie/?color=435363"></Iframe>
      </div>
    </>
  );
}
