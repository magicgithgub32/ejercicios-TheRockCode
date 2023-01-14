import "./App.css";
import Food from "./components/Food";

function App() {
  const foods = [
    {
      name: "pizza",
      calories: 1400,
      description: "wheat, oil, tomato, cheese",
    },
    {
      name: "hamburger",
      calories: 1000,
      description: "meat, bread, cheese, tomato, onion",
    },
    {
      name: "fish and chips",
      calories: 600,
      description: "fried fish, fried potatoes",
    },
    {
      name: "salad",
      calories: 400,
      description: "lettuce, olive oil, tomato, onion, pickles",
    },
  ];

  return  (
    <div>
      <h1>MENU</h1>
  
  {foods.map((food) => {
    return  (
      <div>
      <h3>Food choice:</h3>
    <Food name={food.name}
    calories={food.calories}
    description={food.description} />
    </div>
  )}  
  )}
  
  </div>
)}

export default App;
