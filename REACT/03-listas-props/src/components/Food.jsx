import React from "react";

const Food = (food) => {
  return (
          <div>
            <h3>{food.name}</h3>
            <p>{food.calories} calories </p>
            <p>Ingredients: {food.description}</p>

          </div>
  );
};

export default Food;
