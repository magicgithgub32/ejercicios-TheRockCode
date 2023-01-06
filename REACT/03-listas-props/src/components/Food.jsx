import React from "react";

const Food = (food) => {
  return (
          <div>
            <h3>{food.name}</h3>
            <p>got {food.calories} calories </p>
          </div>
  );
};

export default Food;
