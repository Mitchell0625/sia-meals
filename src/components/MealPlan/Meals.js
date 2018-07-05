import React from "react";

const Meals = props => {
  return (
    <div className="meals-page">
      <p>{props.type}</p>
      <p>{props.name}</p>
      <p>{props.diet}</p>
    </div>
  );
};
export default Meals;
