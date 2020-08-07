import React from "react";
import List from "./List";

export default function Entries(props) {
  const { calorieEntries, ...updateProps } = props;

  return (
    <div className="list-background">
      <h1 className="track-calories">Track Your Calories!</h1>

      {calorieEntries.map((item) => (
        <List entry={item} key={item.id} {...updateProps} />
      ))}
    </div>
  );
}
