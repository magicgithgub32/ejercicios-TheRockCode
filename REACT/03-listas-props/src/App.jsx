import "./App.css";
import Food from "./components/Food";

function App() {
  const foods = [
    { name: "pizza", calories: 1400 },
    { name: "hamburger", calories: 1000 },
    { name: "fish and chips", calories: 600 },
    { name: "salad", calories: 400 },
  ];

  return (
    <div className="App">
      <h3>Menu</h3>
      <ul>
        {foods.map((food) => {
          return <Food calories={food.calories} name={food.name} />;
        })}
      </ul>
    </div>
  );
}

export default App;



import "./App.css";



