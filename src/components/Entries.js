import React from "react";
import List from "./List";
import CreateEntry from "./CreateEntry"

export default function Entries(props) {
  const { calorieEntries } = props;

  return (
    <div>
      <h1 className="track-calories">Track Your Calories!</h1>
      {calorieEntries.map((item) => (
        <List entry={item} key={item.id} />
      ))}
    </div>
  );
}
