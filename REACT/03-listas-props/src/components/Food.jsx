import React from "react";

const Food = (props) => {
  return (
          <div>
            <h3>{props.name}</h3>
            <p>tiene {props.calories} calorías </p>
          </div>
  );
};

export default Food;
